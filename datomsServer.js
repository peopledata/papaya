//Create a datoms server for a PDS
/*
1）Create, Append and Update datoms.
2) datomSpaceServer name should change in .env files.
3) Private Key could access corresponding datoms.
*/
require('dotenv').config();

const { Server : datomSpaceServer } = require('datomspace');
const datomSpaceServer_name = process.env.DATOMSPACE_NAME;



async function start_datomSpaceServer () {

  const Server = new datomSpaceServer( {
    //Local storage
    storage: './datoms', 
    host: datomSpaceServer_name
    //IPFS
})

  await Server.ready()

  console.log(`${datomSpaceServer_name} are ready...`)

  //todo: 以后添加verboes功能
  // Print client connection/disconnection events.
  Server.on('client-open', () => {
    console.log('(local) A datomspaceClient has connected')
  })
  Server.on('client-close', () => {
    console.log('(local) A datomsspaceClient has disconnected')
  })

  Server.on('client-open', () => {
    console.log('(remote) A datomspaceClient has connected')
  })
  Server.on('client-close', () => {
    console.log('(remote) A datomspaceClient has disconnected')
  })

  process.on('SIGINT', cleanup)

  async function cleanup () {
    console.log('datomspace servers are shutting down...')
    await Server.close()
  }


};


module.exports = start_datomSpaceServer();

