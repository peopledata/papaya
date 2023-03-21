const express = require("express");
const fs = require("fs/promises");
const { faker } = require("@faker-js/faker");
const crypto = require("datom-crypto");
const request = require("request");
const router = express.Router();
const axios = require("axios");
const pd_type = "banks"; //personal data type, change by type
// 设置为中文
faker.locale = "zh_CN";

router.get("/", (req, res, next) => {
  res.send("Contract API is ok");
});

router.get("/transferHistory", async (req, res, next) => {
  // https://api-goerli.etherscan.io/api?module=account&action=tokennfttx&contractaddress=${contract}&address=${address}&apikey=${apiKey}
  const contract = req.query.contract;
  const account = req.query.account;
  const apiKey = process.env.EtherScanApiKey;
  const url = `https://api-goerli.etherscan.io/api?module=account&action=tokennfttx&contractaddress=${contract}&address=${account}&apikey=${apiKey}`;
  console.log("url=", url);
  axios({
    method: "GET",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    proxy: {
      host: "50.16.249.26",
      port: 3128,
    },
  })
    .then((response) => {
      console.log(response);
      if (
        response.status === 200 &&
        response.data &&
        (response.data.status === "1" ||
          response.data.message === "No transactions found")
      ) {
        let result = [];
        let data = response.data.result;
        for (let index = 0; index < data.length; index++) {
          const item = data[index];
          if (
            item.from.toLowerCase() === account.toLowerCase() &&
            item.to.toLowerCase() === contract.toLowerCase()
          ) {
            result.push({
              hash: item.hash,
              from: item.from,
              to: item.to,
              tokenID: item.tokenID,
              timestamp: new Date(item.timeStamp * 1000).toLocaleString(),
            });
          }
        }
        res.json(result);
      } else {
        res.json({ err: "can't fetch contract transfer history data!" });
      }
    })
    .catch((err) => {
      console.log("err=", err);
      next(err);
    });
});

module.exports = router;
