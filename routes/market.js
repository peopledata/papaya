const express = require("express");
const { faker } = require("@faker-js/faker");
const bankAbi = require("../data/bank-abi.json");

const router = express.Router();

// 设置为中文
faker.locale = "zh_CN";

router.get("/", (req, res, next) => {
  const dataMarkets = [
    {
      name: faker.company.name(),
      type: "bank",
      description: faker.lorem.paragraph(),
      logo: faker.image.technics(200, 200, true),
      contract: {
        address: "0x44D1349aB7a3c3D24169dda916766b9396c7bb64",
        abi: bankAbi,
      },
    },
    {
      name: faker.company.name(),
      type: "bank",
      description: faker.lorem.paragraph(),
      logo: faker.image.technics(200, 200, true),
      contract: {
        address: "0x44D1349aB7a3c3D24169dda916766b9396c7bb64",
        abi: bankAbi,
      },
    },
  ];
  res.json(dataMarkets);
});

module.exports = router;
