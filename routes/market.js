const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(process.env.MARKETPLACE_URL);
  axios(`${process.env.MARKETPLACE_URL}/api/v1/demands`)
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
  axios(`${process.env.MARKETPLACE_URL}/api/v1/demands/${req.params.marketId}`)
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
    `${process.env.MARKETPLACE_URL}/api/v1/demands/contract/${req.params.category}`
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
