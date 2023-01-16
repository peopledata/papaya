import { useState, useEffect } from "react";
import { ethers } from "ethers";

import abi from "./abi.json";
import {
  stripIpfsUriPrefix,
  makeGatewayURL,
  ensureIpfsUriPrefix,
  pin,
  getIPFSJSON,
  ipfs,
} from "../../utils/ipfs";

import "./BankData.scss";

const bankContractAddr = "0x44D1349aB7a3c3D24169dda916766b9396c7bb64";
// const bankContractAddr = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const contractABI = abi.abi;

const BankData = ({ banks }) => {
  const [balance, setBalance] = useState(0);
  const [account, setAccount] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [nfts, setNfts] = useState([]);

  const checkIfWalletConnected = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const accounts = await ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log(`found account with address`, account);
          setAccount(account);

          // 如果钱包连接了，则获取最新的数据
          getBalance(account).then((val) => {
            if (val > 0) {
              getNftMetadatas(account, val);
            }
          });
        } else {
          console.log(`no auth account found`);
        }
      } else {
        console.log(`please install metamask`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 连接钱包👛
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log(`please install metamask`);
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
      getBalance(accounts[0]);
    } catch (err) {
      console.error(err);
    }
  };

  // 获取 Bank NFT 合约对象
  const getBankNtfContract = () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log(`please install metamask wallet.`);
      return;
    }
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(bankContractAddr, contractABI, signer);
  };

  const getNftMetadatas = async (owner, balance) => {
    try {
      const BankNFTContract = getBankNtfContract();
      let nfts = [];
      if (BankNFTContract) {
        for (let i = 0; i < balance; i++) {
          const tokenId = await BankNFTContract.tokenOfOwnerByIndex(owner, i);
          const metadataURI = await BankNFTContract.tokenURI(tokenId);
          const metadata = await getIPFSJSON(metadataURI);
          nfts.push({
            tokenId: tokenId,
            metadataURI: metadataURI,
            metadata: metadata,
          });
        }
        setNfts(nfts);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getNFTMetadata = async (tokenId) => {
    const BankNFTContract = getBankNtfContract();
    if (BankNFTContract) {
      const metadataURI = await BankNFTContract.tokenURI(tokenId);
      const metadata = await getIPFSJSON(metadataURI);

      return { metadata, metadataURI };
    }
  };

  const pinTokenData = async (tokenId) => {
    const { metadata, metadataURI } = await getNFTMetadata(tokenId);
    const { image: assetURI } = metadata;

    console.log(metadata, metadataURI);

    console.log(`Pinning asset data (${assetURI}) for token id ${tokenId}....`);
    await pin(assetURI);

    console.log(`Pinning metadata (${metadataURI}) for token id ${tokenId}...`);
    await pin(metadataURI);

    return { assetURI, metadataURI };
  };

  // 获取当前钱包的NFT数
  const getBalance = async (owner) => {
    try {
      const BankNFTContract = getBankNtfContract();
      if (BankNFTContract) {
        const rawBalance = await BankNFTContract.balanceOf(owner);
        const value = parseFloat(ethers.utils.formatUnits(rawBalance, 0));
        setBalance(value);
        return value;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const mintBankNFT = async () => {
    try {
      setIsLoading(true);
      const BankNFTContract = getBankNtfContract();
      if (BankNFTContract) {
        // 将用户的个人数据构造成did文档，然后包装成nft
        fetch("http://localhost:5005/fake/datom/read")
          .then((res) => {
            if (!res.ok) {
              throw Error("could not fetch the data for resources");
            }
            return res.json();
          })
          .then(async (content) => {
            const ipfsAddOptions = {
              cidVersion: 1,
              hashAlg: "sha2-256",
            };

            // add the asset to IPFS
            const ipfsPath = "/nft/bank-did.json";
            const { cid: assetCid } = await ipfs.add(
              { path: ipfsPath, content: JSON.stringify(content) },
              ipfsAddOptions
            );

            // make the NFT metadata JSON
            const assetURI = ensureIpfsUriPrefix(assetCid) + "/bank-did.json";
            const metadata = {
              name: "Bank NFT",
              description: "This is a Bank NFT Description",
              image: ensureIpfsUriPrefix(assetURI),
            };

            // add the metadata to IPFS
            const { cid: metadataCid } = await ipfs.add(
              { path: "/nft/metadata.json", content: JSON.stringify(metadata) },
              ipfsAddOptions
            );
            let metadataURI =
              ensureIpfsUriPrefix(metadataCid) + "/metadata.json";
            metadataURI = stripIpfsUriPrefix(metadataURI);

            // mint nft token
            const tx = await BankNFTContract.mintToken(account, metadataURI);
            const receipt = await tx.wait();
            let tokenId = "";
            for (const event of receipt.events) {
              console.log(event);
              if (event.event !== "Transfer") {
                console.log("ignoring unknown event type ", event.event);
                continue;
              } else {
                tokenId = event.args.tokenId.toString();
                break;
              }
            }

            if (tokenId) {
              const { assetURI, metadataURI } = await pinTokenData(tokenId);
              console.log(`🌿 Pinned all data for token id `, tokenId);

              getBalance(account).then((val) => {
                console.log("1111111", val);
              });

              console.log("🌿 Minted a new NFT: ", tokenId);
              console.log("🌿 Metadata Address: ", metadataURI);
              console.log(
                "🌿 Metadata Gateway URL: ",
                makeGatewayURL(metadataURI)
              );
              console.log("🌿 Asset Address: ", assetURI);
              console.log("🌿 Asset Gateway URL: ", makeGatewayURL(assetURI));
              console.log("🌿 NFT Metadata: ", JSON.stringify(metadata));
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  return (
    <div className="bank-list">
      <div className="bank-header">
        <h1>我的银行数据</h1>
      </div>
      <div className="bank-container">
        <table className="bank-table">
          <thead>
            <tr className="bank-table-header">
              <td>账户</td>
              <td>姓名</td>
              <td>银行</td>
              <td>余额</td>
            </tr>
          </thead>
          <tbody>
            {banks.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{item.account}</td>
                  <td>{item.name}</td>
                  <td>{item.bank}</td>
                  <td>{item.balance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {!account ? (
          <button onClick={connectWallet}>Connect Wallet</button>
        ) : (
          <>
            <h3 className="nft-box">
              Logged in as{" "}
              <strong>{`${account.substring(0, 5)}...${account.substring(
                account.length - 5
              )}`}</strong>{" "}
              {balance > 0 && "已铸造的NFT"}
            </h3>

            {balance === 0 ? (
              <button onClick={mintBankNFT}>
                {isLoading ? "Minting..." : "Mint NFT"}
              </button>
            ) : (
              <>
                <div className="nft-container">
                  {nfts.map((item, idx) => {
                    return (
                      <div className="nft-item" key={idx}>
                        <h3>
                          {item.metadata.name} #{item.tokenId.toString()}
                        </h3>
                        <img src="https://bxdc-static.oss-cn-beijing.aliyuncs.com/images/1672992348909.jpg" />
                        <p>{item.metadata.description}</p>
                        {/* <button onClick={() => pinTokenData(item.tokenId)}>
                        Pin Token
                      </button> */}
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BankData;
