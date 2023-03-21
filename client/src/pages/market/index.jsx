import React, { PureComponent } from "react";
import { connect } from "umi";
import PropTypes from "prop-types";
import Page from "../../components/Page/Page";
import List from "./components/List";
import styles from "./index.scss";
import { pathToRegexp } from "path-to-regexp";
import { withRouter } from "umi";

class Market extends PureComponent {
  componentDidMount() {
    const { dispatch, location } = this.props;
    if (pathToRegexp("/market").exec(location.pathname)) {
      const payload = location.query || { page: 1, pageSize: 10 };
      dispatch({
        type: "market/queryList",
        payload,
      });
    }
  }
  render() {
    const { market, loading } = this.props;
    const isLoading = loading.effects["market/queryList"];
    return (
      <Page inner loading={isLoading}>
        <div className={styles.listContainer}>
          <div className={styles.filterWrapper}>筛选数据</div>
          <div className={styles.resultWrapper}>
            <List datalist={market.list} total={market.total} />
          </div>
        </div>
      </Page>
    );
  }
}

Market.propTypes = {
  market: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
};

export default withRouter(
  connect(({ market, loading }) => ({ market, loading }))(Market)
);
