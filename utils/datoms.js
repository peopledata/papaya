const { Client: datomsClient } = require("datomspace");
const datomSpaceServer = process.env.DATOMSPACE_NAME;

const getDatomsClient = async (host) => {
  console.log("新建 datomSpaceServer 连接");

  // 新建 datomSpaceServer 连接
  const c = new datomsClient({
    host: host,
  });

  // 查看 RPC 服务器状态是否正常
  console.log(`连接 ${host} ....`);
  console.log(await c.status());

  return {
    client: c,
    store: c.corestore(),
  };
};

module.exports = getDatomsClient(datomSpaceServer);
