// **********************************************************
// ************************** PDSS **************************
// **************** Personal Data Spaces System *************

require('dotenv').config();
//const IPFS = require('ipfs-core');
const http = require('http');
const api = require('./api/app');



// IPFS
//const ipfs = IPFS.create();

// datomSpaceServer
const { start_datomsServer } = require('./datomsServer');



// Utils


(async () => {
  const PORT = process.env.PORT || 5005;

  // Init app
  //await initApp();
  await start_datomsServer(); //start a datomsServer for {name} datomspace
  //await ipfs();

  //await jobs();

  // Create server for Express API and WebSockets
  const server = http.createServer();
  server.on('request', api);

  // Register weatherSocket
  //const weatherSocket = new Socket(server);
  //Sockets.registerSocket('weather', weatherSocket);

  server.listen(PORT, () => {
    logger.log(
      `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
    );
  });
})();