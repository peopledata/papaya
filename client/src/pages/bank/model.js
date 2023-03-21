import { pathToRegexp } from "path-to-regexp";
import api from "../../services";
import {
  stripIpfsUriPrefix,
  makeGatewayURL,
  ensureIpfsUriPrefix,
  pin,
  getIPFSJSON,
  ipfs,
} from "../../utils/ipfs";
import {
  getNftContract,
  getNftBalance,
  getTransferHistory,
} from "../../utils/ethers";
import { etherscanApiKey } from "../../utils/config";

const { queryBank, readBank, queryContractList, queryContractTransferHistory } =
  api;

export default {
  namespace: "bank",

  state: {
    list: [], // 银行数据列表
    contractDemands: [], // 合约列表
    account: "", // 钱包地址
    balance: 0, // nft 数量
    selectDemand: {}, // 选择的需求合约
    transferRecords: [], // 合约交易记录
  },

  subscriptions: {
    setupHistory({ dispatch, history }) {
      history.listen(({ location }) => {
        const match = pathToRegexp("/bank").exec(location.pathname);
        if (match) {
          dispatch({ type: "query" });
        }
      });
    },
  },

  effects: {
    // 查询当前用户的银行数据
    *query({ payload }, { call, put }) {
      const data = yield call(queryBank, payload);
      const { success, message, statusCode, list } = data;
      if (success && statusCode === 200) {
        yield put({
          type: "querySuccess",
          payload: {
            data: list,
          },
        });
      } else {
        throw data;
      }
    },

    // 查询所有可用的需求合约列表
    *queryContracts({ payload }, { call, put }) {
      const data = yield call(queryContractList, payload);
      const { success, message, statusCode, demands } = data;
      if (success && statusCode === 200) {
        let updatePayload = {
          contractDemands: demands,
        };
        // 如果带有demand_id则更新下selectDemand这个state
        if (payload.current_demand_id) {
          updatePayload.selectDemand = demands.find(
            (item) => item.demand_id === payload.current_demand_id
          );
        }
        yield put({
          type: "updateState",
          payload: updatePayload,
        });
      } else {
        throw data;
      }
    },

    // 查询当前钱包下nft数量
    *queryNftBalance(_, { call, put, select }) {
      const account = yield select((state) => state.bank.account);
      const demand = yield select((state) => state.bank.selectDemand);
      if (account && demand.contract) {
        // 如果钱包连接了，则获取最新的数据
        const balance = yield call(
          // 使用 yield call 调用getNftBalance异步函数
          getNftBalance,
          account,
          demand.contract.address,
          demand.contract.abi
        );
        yield put({
          type: "updateState",
          payload: {
            balance: balance,
          },
        });
      }
    },

    // 检查钱包是否连接
    *checkIfWalletConnected(_, { call, put }) {
      try {
        const { ethereum } = window;
        if (ethereum) {
          const accounts = yield ethereum.request({
            method: "eth_accounts",
          });
          if (accounts.length !== 0) {
            const account = accounts[0];
            console.log(`found account with address`, account);
            yield put({
              type: "updateState",
              payload: {
                account: account,
              },
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
    },

    // 连接钱包👛
    *connectWallet({ payload }, { call, put }) {
      const { ethereum } = window;
      if (!ethereum) {
        console.log(`please install metamask`);
        return;
      }
      const accounts = yield ethereum.request({
        method: "eth_requestAccounts",
      });
      yield put({
        type: "updateState",
        payload: {
          account: accounts[0],
        },
      });
    },

    *transferNFT(_, { call, put, select }) {
      const account = yield select((state) => state.bank.account);
      const demand = yield select((state) => state.bank.selectDemand);
      if (account && demand.contract) {
        const NFTContract = getNftContract(
          demand.contract.address,
          JSON.parse(demand.contract.abi)
        );
        // 先调用tokenOfOwnerByIndex获取 tokenId
        const tokenId = yield call(NFTContract.tokenOfOwnerByIndex, account, 0);
        console.log("tokenId=", tokenId);
        // 调用 transferFrom 函数
        const tx = yield call(
          NFTContract.transferFrom,
          account,
          demand.contract.address,
          tokenId
        );
        console.log("tx=", tx);
        yield call(tx.wait);
        console.log("NFT transferred successfully!");
      }
    },

    *mintNFT({ payload }, { call, put, select }) {
      const account = yield select((state) => state.bank.account);
      const demand = yield select((state) => state.bank.selectDemand);
      if (account && demand.contract) {
        const NFTContract = getNftContract(
          demand.contract.address,
          JSON.parse(demand.contract.abi)
        );
        if (NFTContract) {
          // 将用户的个人数据构造成did文档，然后包装成nft
          const data = yield call(readBank);
          const { success, message, statusCode, ...content } = data;

          if (success && statusCode === 200) {
            const ipfsAddOptions = {
              cidVersion: 1,
              hashAlg: "sha2-256",
            };
            // add the asset to IPFS
            const ipfsPath = "/nft/bank-did.json";
            const { cid: assetCid } = yield ipfs.add(
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
            const { cid: metadataCid } = yield ipfs.add(
              { path: "/nft/metadata.json", content: JSON.stringify(metadata) },
              ipfsAddOptions
            );
            let metadataURI =
              ensureIpfsUriPrefix(metadataCid) + "/metadata.json";
            metadataURI = stripIpfsUriPrefix(metadataURI);

            // mint nft token
            const tx = yield NFTContract.mintToken(account, metadataURI);
            const receipt = yield tx.wait();
            let tokenId = "";
            for (const event of receipt.events) {
              console.log(event);
              if (event.event !== "Transfer") {
                console.log("ignoring unknown event type ", event.event);
              } else {
                tokenId = event.args.tokenId.toString();
                break;
              }
            }

            if (tokenId) {
              // const { assetURI, metadataURI } = yield pinTokenData(tokenId);
              console.log(`🌿 Pinned all data for token id `, tokenId);

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
          } else {
            throw data;
          }
        }
      }
    },

    // 获取当前钱包的transfer记录
    *getTransferHistory(_, { call, put, select }) {
      const account = yield select((state) => state.bank.account);
      const demand = yield select((state) => state.bank.selectDemand);
      if (account && demand.contract) {
        const contractAddress = demand.contract.address;
        const data = yield call(queryContractTransferHistory, {
          query: `contract=${contractAddress}&account=${account}`,
        });
        const { success, message, statusCode, list } = data;

        if (success && statusCode === 200) {
          yield put({ type: "setRecords", payload: list });
        } else {
          throw data;
        }
      }
    },
  },

  reducers: {
    querySuccess(state, { payload }) {
      const { data } = payload;
      return {
        ...state,
        list: data,
      };
    },
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    setRecords(state, { payload: transferRecords }) {
      return {
        ...state,
        transferRecords,
      };
    },
  },
};
