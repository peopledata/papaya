import { ethers } from "ethers";

// 获取 Bank NFT 合约对象
const getNftContract = (addr, abi) => {
  const { ethereum } = window;
  if (!ethereum) {
    console.log(`please install metamask wallet.`);
    return;
  }
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(addr, abi, signer);
};

// 获取当前钱包的NFT数
const getNftBalance = async (owner, addr, abi) => {
  try {
    const BankNFTContract = getNftContract(addr, abi);
    if (BankNFTContract) {
      const rawBalance = await BankNFTContract.balanceOf(owner);
      return parseFloat(ethers.utils.formatUnits(rawBalance, 0));
    }
  } catch (err) {
    console.error(err);
  }
};

async function getTransferHistory(address, contract, apiKey) {
  const url = `https://api-goerli.etherscan.io/api?module=account&action=tokennfttx&contractaddress=${contract}&address=${address}&apikey=${apiKey}`;
  const resp = await ethers.utils.fetchJson(url);
  return resp.result.filter((item) => {
    // 过滤transfer给合约的记录
    if (item.from === address && item.to === contract.toLowerCase())
      return {
        hash: item.hash,
        from: item.from,
        to: item.to,
        tokenID: item.tokenID,
        timestamp: new Date(item.timeStamp * 1000).toLocaleString(),
      };
  });
}

export { getNftContract, getNftBalance, getTransferHistory };
