import { PureComponent } from "react";
import { pathToRegexp } from "path-to-regexp";
import PropTypes from "prop-types";
import { connect, history, withRouter } from "umi";
import { Button } from "antd";
import Page from "../../../components/Page/Page";
import styles from "./index.scss";

class MarketDetail extends PureComponent {
  componentDidMount() {
    const { dispatch, location } = this.props;
    const match = pathToRegexp("/market/:id").exec(location.pathname);
    console.log("1.match=", match);
    if (match) {
      dispatch({ type: "marketDetail/query", payload: { id: match[1] } });
    }
  }
  render() {
    const { marketDetail, loading } = this.props;
    const { data } = marketDetail;
    console.log("marketDetail.data=", data);
    // const isLoading = loading.effects["marketDetail/query"];
    return (
      <Page inner isLoading>
        <div className={styles.ui}>
          <div className={styles.header}>
            <div className={styles.header__background}>
              <div className={styles.layout__container}>
                <section className={styles.header__content}>
                  <div className={styles.header__content__logo}>
                    {data.demander && (
                      <img src={data.demander.logo} alt={data.demander.label} />
                    )}
                  </div>
                  <div className={styles.header__content__description}>
                    <h2>{data.name}</h2>
                    <h5>
                      <span className={styles.providedBy}>
                        Provided By:&nbsp;
                      </span>
                      <a
                        href="#"
                        target="_blank"
                        className={styles.providedLink}
                      >
                        {data.demander && data.demander.label}
                      </a>
                    </h5>
                    <p>{data.brief}</p>
                  </div>
                  <div className={styles.header__content__actions}>
                    <Button
                      type="primary"
                      danger
                      onClick={() => history.push(`/${data.category}`)}
                    >
                      授权
                    </Button>
                  </div>
                </section>
              </div>
            </div>
            <div className={styles.jumpBar}>
              <div className={styles.layout__container}>
                <ul className={styles.jumpBar__tabs}>
                  <li className={styles.jumpBar__active}>
                    <span>
                      <button
                        className={styles.jumpBar__button}
                        role="tab"
                        aria-selected="false"
                      >
                        概述
                      </button>
                    </span>
                  </li>
                  <li>
                    <span>
                      <button
                        className={styles.jumpBar__button}
                        role="tab"
                        aria-selected="false"
                      >
                        数据集
                      </button>
                    </span>
                  </li>
                  <li>
                    <span>
                      <button
                        className={styles.jumpBar__button}
                        role="tab"
                        aria-selected="false"
                      >
                        使用信息
                      </button>
                    </span>
                  </li>
                  <li>
                    <span>
                      <button
                        className={styles.jumpBar__button}
                        role="tab"
                        aria-selected="false"
                      >
                        支持
                      </button>
                    </span>
                  </li>
                  <li>
                    <span>
                      <button
                        className={styles.jumpBar__button}
                        role="tab"
                        aria-selected="false"
                      >
                        合约
                      </button>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.layout__container}>
            <div className={styles.content__container}>
              <div className={styles.content__container__header}>
                <h2>概述</h2>
              </div>
              <div className={styles.content__container__main}>
                <div dangerouslySetInnerHTML={{ __html: data.purpose }}></div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

MarketDetail.propTypes = {
  marketDetail: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
};

export default withRouter(
  connect(({ marketDetail, loading }) => ({ marketDetail, loading }))(
    MarketDetail
  )
);
