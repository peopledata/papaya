import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Loader.scss";

const Loader = ({ spinning = false, fullScreen }) => {
  return (
    <div
      className={classNames(styles.loader, {
        [styles.hidden]: !spinning,
        [styles.fullScreen]: fullScreen,
      })}
    >
      <div className={styles.wrapper}>
        <div className={styles.inner} />
        <div className={styles.text}>加载中</div>
      </div>
    </div>
  );
};

Loader.propTypes = {
  spinning: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

export default Loader;
