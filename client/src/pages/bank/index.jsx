import React, { PureComponent } from "react";
import { ethers } from "ethers";
import { connect, withRouter } from "umi";
import PropTypes from "prop-types";
import { Select, Button } from "antd";
import Page from "../../components/Page/Page";
import styles from "./index.scss";

class Bank extends PureComponent {
  componentDidMount() {
    const { dispatch, location, marketDetail } = this.props;
    const { data } = marketDetail;
    // 查询银行数据
    dispatch({
      type: "bank/query",
    });
    // 查询当前分类下的可选择的合约列表
    dispatch({
      type: "bank/queryContracts",
      payload: {
        category: location.pathname.replace(/\//g, ""),
        current_demand_id: data.demand_id,
      },
    });

    // 检查是否连接了钱包
    dispatch({
      type: "bank/checkIfWalletConnected",
    });
    // 如果选择了合约，则查询NFT余额
    dispatch({
      type: "bank/queryNftBalance",
    });
    // 查询transfer记录
    dispatch({
      type: "bank/getTransferHistory",
    });
  }

  connectWallet() {
    const { dispatch } = this.props;
    dispatch({
      type: "bank/connectWallet",
    });
    // todo：提示信息
  }

  mintNFT = async () => {
    const { dispatch } = this.props;
    await dispatch({
      type: "bank/mintNFT",
    });
    dispatch({
      type: "bank/queryNftBalance",
    });
  };

  async transferNFT() {
    const { dispatch } = this.props;
    await dispatch({
      type: "bank/transferNFT",
    });
    console.log("授权NFT给需求方使用");
    dispatch({
      type: "bank/watchTransfers",
    });
  }

  handleChange = async (value) => {
    const { bank, dispatch } = this.props;
    const { contractDemands } = bank;
    const selectDemand = contractDemands.find(
      (item) => item.demand_id === value
    );
    // 使用 await 保证先执行后本次分发后再执行第二次 dispatch
    await dispatch({
      type: "bank/updateState",
      payload: {
        selectDemand,
      },
    });
    dispatch({
      type: "bank/queryNftBalance",
    });
    dispatch({
      type: "bank/getTransferHistory",
    });
  };

  render() {
    const { bank, loading, dispatch } = this.props;
    const isLoading =
      loading.effects["bank/query"] && loading.effects["bank/queryContracts"];
    const { list, account, balance, contractDemands } = bank;

    const renderBankData = () => {
      return (
        <>
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
                {list.map((item, idx) => {
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
          </div>
        </>
      );
    };

    const renderMintNFT = () => {
      const { bank } = this.props;
      const { selectDemand, transferRecords } = bank;
      console.log("renderMintNFT.bank=", bank);
      if (account && selectDemand.contract) {
        if (balance > 0) {
          // 已经mint过nft了
          return (
            <>
              <span>
                <strong>提示：</strong>
                你已经将银行数据Mint成了NFT，现在可以将你的NFT授权给需求方使用。{" "}
              </span>
              <Button
                type="primary"
                danger
                onClick={() => {
                  this.transferNFT();
                }}
              >
                授权使用
              </Button>
            </>
          );
        } else if (transferRecords.length > 0) {
          return (
            <>
              <span>
                <strong>提示：</strong>
                你已经将你的NFT资产授权给需求放了，当需求方使用完成后，你可以在『合约管理』页面进行赎回操作。
              </span>
            </>
          );
        }
        return (
          <Button
            type="primary"
            danger
            onClick={() => {
              this.mintNFT();
            }}
          >
            Mint NFT
          </Button>
        );
      }
    };

    const renderMarketContracts = () => {
      const { marketDetail, dispatch } = this.props;
      const { data } = marketDetail;
      if (!contractDemands) {
        return <span>暂无可用的需求</span>;
      }
      const options = contractDemands.map((item) => {
        return {
          value: item.demand_id,
          label: item.name,
        };
      });
      return (
        <>
          <strong>需求：</strong>
          <Select
            placeholder="请先选择一个需求"
            defaultValue={data.demand_id}
            style={{
              width: 240,
            }}
            options={options}
            onChange={this.handleChange}
          />
        </>
      );
    };

    const renderNFTAction = () => {
      if (!account) {
        return (
          <Button type="primary" onClick={() => this.connectWallet()}>
            连接钱包
          </Button>
        );
      }

      return (
        <>
          <h3 className="nft-box">
            钱包地址：<strong>{account}</strong>
          </h3>
        </>
      );
    };

    const renderRecords = () => {
      const { bank } = this.props;
      const { transferRecords } = bank;
      return (
        <table>
          <thead>
            <tr>
              <th>Transaction Hash</th>
              <th>TokenID</th>
              <th>From</th>
              <th>To</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {transferRecords.map((tx) => (
              <tr key={tx.hash}>
                <td>{tx.hash}</td>
                <td>{tx.tokenID}</td>
                <td>{tx.from}</td>
                <td>{tx.to}</td>
                <td>{tx.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    };

    return (
      <Page inner loading={isLoading}>
        <div className="bank-list">
          {renderBankData()}
          <div className={styles.nftAction}>{renderNFTAction()}</div>
          <div className={styles.contractList}>{renderMarketContracts()}</div>
          {renderMintNFT()}
        </div>
      </Page>
    );
  }
}

Bank.propTypes = {
  bank: PropTypes.object,
  marketDetail: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
};

export default withRouter(
  connect(({ marketDetail, bank, loading }) => ({
    marketDetail,
    bank,
    loading,
  }))(Bank)
);
