// **********************************************************
// ************************** PDSS **************************
// **************** Personal Data Spaces System *************

require("dotenv").config();
//const IPFS = require('ipfs-core');
const http = require("http");
const api = require("./api");

// IPFS
//const ipfs = IPFS.create();

// datomSpaceServer
const start_datomsServer = require("./datomsServer");

(async () => {
  const PORT = process.env.PORT || 5005;

  // Init app
  //await initApp();

  // 启动 datomServer
  await start_datomsServer();
  //await ipfs();

  //await jobs();

  // 创建一个 Express 服务
  const server = http.createServer();
  server.on("request", api);

  server.listen(PORT, () => {
    console.log(
      `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
    );
  });
})();
