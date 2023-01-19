const express = require("express");
const fs = require("fs/promises");
const { faker } = require("@faker-js/faker");
const crypto = require("datom-crypto");
const request = require("request");
const router = express.Router();

const getDatomsUrl = require("../utils/utils");

const pd_type = "banks"; //personal data type, change by type
// 设置为中文
faker.locale = "zh_CN";

router.get("/", (req, res, next) => {
  res.send("Datom Faker API is ok");
});

router.get("/create", async (req, res, next) => {
  // 获取管理的 datoms url
  let datoms_url = getDatomsUrl(pd_type);
  if (datoms_url) {
    res.send("datoms has exists");
    return;
  }

  // 获取全局的 datom client
  const connectDatoms = require("../utils/datoms");
  const { client: c, store: myStore } = await connectDatoms;

  const datom = myStore.get({
    name: pd_type,
    valueEncoding: "json",
  });

  console.log(`Step 1: create ${pd_type} datoms\n`);

  //1. create new bank account data in the PDS.
  await datom.append({
    name: faker.name.fullName(),
    bank: "bank of china",
    account: faker.finance.account(),
    balance: faker.finance.amount(),
  });

  console.log("Create the datoms is:");

  datom
    .createReadStream()
    .on("data", (res) => {
      console.log(res);
    })
    .on("end", () => {
      // 按照自己的隐私策略和安全要求设置个人数据的数据赋权、置权。
      // (数据使用方/处理方) 接收到这里的datoms的key, 就得到授权可以使用该个人数据了。
      console.log("the private key is:", datom.key.toString("hex"));
      console.log(
        "the discovery key is:",
        crypto.discoveryKey(Buffer.from(datom.key)).toString("hex")
      );
      c.network.configure(datom.discoveryKey, { announce: true, lookup: true });
      console.log("\n(end)");
      res.send(datom.key.toString("hex"));
    });
});

// /fake/datom/get?key=xxxx
router.get("/get", async (req, res, next) => {
  // 获取管理的 datoms url
  let datoms_url = getDatomsUrl(pd_type);
  if (!datoms_url) {
    res.send("datoms is not exists");
    return;
  }
  // 读取 private key
  const privateKey = await fs.readFile(`${datoms_url}/key`);

  // 获取全局的 datom client
  const connectDatoms = require("../utils/datoms");
  const { client: c, store: myStore } = await connectDatoms;

  // key 通过 url 参数传递 private key
  const datom = myStore.get(privateKey, {
    name: pd_type,
    valueEncoding: "json",
  });

  let pdsData = [];

  await datom
    .createReadStream()
    .on("data", (res) => {
      pdsData.push(res);
    })
    .on("end", () => {
      c.network.configure(datom.discoveryKey, { announce: true, lookup: true });
      console.log("\n(end)");
      res.send(pdsData);
    });
});

router.get("/append", async (req, res, next) => {
  // 获取管理的 datoms url
  let datoms_url = getDatomsUrl(pd_type);
  if (!datoms_url) {
    res.send("datoms is not exists");
    return;
  }
  // 读取 private key
  const privateKey = await fs.readFile(`${datoms_url}/key`);

  // 获取全局的 datom client
  const connectDatoms = require("../utils/datoms");
  const { client: c, store: myStore } = await connectDatoms;

  const datom = myStore.get(privateKey, {
    name: pd_type,
    valueEncoding: "json",
  });

  console.log(`Step 1: appned new datom on ${privateKey} \n`);

  //1. Append 4 new data to the bank account datoms.

  await datom.append({
    name: faker.name.fullName(),
    bank: "bank of china",
    account: faker.finance.account(),
    balance: faker.finance.amount(),
  });

  console.log("Append the datoms is:");

  let pdsData = [];
  datom
    .createReadStream()
    .on("data", (res) => {
      pdsData.push(res);
    })
    .on("end", () => {
      // 按照自己的隐私策略和安全要求设置个人数据的数据赋权、置权。
      // (数据使用方/处理方) 接收到这里的datoms的key, 就得到授权可以使用该个人数据了。
      console.log("the private key is:", datom.key.toString("hex"));
      console.log(
        "the discovery key is:",
        crypto.discoveryKey(Buffer.from(datom.key)).toString("hex")
      );
      c.network.configure(datom.discoveryKey, { announce: true, lookup: true });
      console.log("\n(end)");
      res.send(pdsData);
    });

  datom
    .createReadStream()
    .on("data", console.log)
    .on("end", console.log.bind(console, "\n(end)"));
});

router.get("/read", async (req, res, next) => {
  // get datoms path
  let datoms_url = getDatomsUrl(pd_type);
  if (!datoms_url) {
    res.send("datoms is not exists");
    return;
  }

  //读datoms name
  const name = await fs.readFile(`${datoms_url}/name`);
  console.log("The datoms name is:", name.toString("utf-8"));

  // 读取 private key
  const key = await fs.readFile(`${datoms_url}/key`);
  console.log("The Private Key is:", key.toString("hex"));

  //读签名
  const signatures = await fs.readFile(`${datoms_url}/signatures`);
  console.log("the datoms sign is:", signatures.toString("hex"));

  // //读tree
  // const tree = await fs.readFile(`${datoms_url}/tree`);
  // console.log("the datoms tree is:", tree.toString("hex"));

  request.post(
    {
      headers: { "Content-Type": "application/json" },
      url: "http://ppldid.peopledata.org.cn:3000/1.0/create",
      json: {
        didDocument: {
          key: key,
          name: name,
          sign: signatures,
        },
        options: { location: "http://ppldid.peopledata.org.cn:3000" },
      },
    },
    (error, response, body) => {
      if (error) {
        console.log(error);
        res.send("error");
      } else {
        res.send(body);
      }
    }
  );
});

module.exports = router;
