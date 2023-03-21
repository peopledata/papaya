const express = require("express");
const http = require("http");
const { faker } = require("@faker-js/faker");
const bankAbi = require("../data/bank-abi.json");
const { response } = require("express");
const axios = require("axios");

const router = express.Router();

// 设置为中文
faker.locale = "zh_CN";

router.get("/", (req, res, next) => {
  axios("https://cluster.peopledata.org.cn/api/v1/demand")
    .then((response) => {
      if (
        response.status === 200 &&
        response.data &&
        response.data.code === 1000
      ) {
        res.json(response.data.data);
      } else {
        res.json({ err: "can't fetch demand markets data!" });
      }
    })
    .catch((err) => next(err));
});

router.get("/:marketId", (req, res, next) => {
  axios(
    `https://cluster.peopledata.org.cn/api/v1/demand/${req.params.marketId}`
  )
    .then((response) => {
      if (
        response.status === 200 &&
        response.data &&
        response.data.code === 1000
      ) {
        res.json(response.data.data);
      } else {
        res.json({ err: `can't fetch demand ${req.params.marketId} data!` });
      }
    })
    .catch((err) => next(err));
});

router.get("/:category/contract", (req, res, next) => {
  axios(
    `https://cluster.peopledata.org.cn/api/v1/demand/contract/${req.params.category}`
  )
    .then((response) => {
      if (
        response.status === 200 &&
        response.data &&
        response.data.code === 1000
      ) {
        res.json(response.data.data);
      } else {
        res.json({
          err: `can't fetch demand category ${req.params.category} contract data!`,
        });
      }
    })
    .catch((err) => next(err));
});

module.exports = router;
