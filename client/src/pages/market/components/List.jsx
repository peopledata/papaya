import { PureComponent } from "react";
import { Link } from "umi";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import styles from "./List.scss";

class List extends PureComponent {
  render() {
    const { datalist, total } = this.props;
    return (
      <div className={styles.marketsWrapper}>
        <div className={styles.marketsContainer}>
          {datalist &&
            datalist.map((item, idx) => {
              return (
                <div key={idx}>
                  <div className={styles.marketItem}>
                    <div className={styles.logo}>
                      <img
                        src="https://bxdc-static.oss-cn-beijing.aliyuncs.com/images/1676898362086.jpg"
                        alt="华泰证券"
                      />
                    </div>
                    <div className={styles.marketsContent}>
                      <Link
                        className={styles.titleLink}
                        to={`/market/${item.demand_id}`}
                      >
                        {item.name}
                      </Link>
                      <span>
                        By<small>华泰</small>
                      </span>
                      <p className={styles.validTime}>
                        有效期 |{" "}
                        {dayjs(item.valid_at).format("YYYY-MM-DD HH:mm:ss")}
                      </p>
                      <p className={styles.brief}>{item.brief}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

List.propTypes = {
  location: PropTypes.object,
};

export default List;
