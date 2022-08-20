const pump = require('pump')
const datom = require('hypercore')
const peopleswarm = require('hyperswarm')

const { Client: datomsClient } = require('datomspace') 
const crypto  = require('hypercore-crypto')
const datomSpaceServer = 'uid_datomSpaceServer'

const key = 'b144cb0976305e956bdfebdc2763f6b818f94a57814026daa34cbf138cecb4b2'
//const key ='cb7d246aa5e7fd82a35a1f75c3fad102e6046dd081d976067ca9d6ccd879a3b3'

async function swarm_datom () {
  const c = new datomsClient({
    host: datomSpaceServer
  })

  // Ask for the RPC server status to see that everything works
  console.log(`连接 ${datomSpaceServer} ....`)
  console.log(await c.status()) 

  const myStore = c.corestore()

  const datom = myStore.get(key,{
    valueEncoding: 'json'
  })

  await datom.ready()

/*
// Create a new swarm instance.
const swarm = peopleswarm()

// Replicate whenever a new connection is created.
swarm.on('connection', (connection, info) => {
  pump(
    connection,
    datom.replicate({initiator: info.client}),
    connection
  )
})

//console.log('topic is', datom.discoveryKey)

// Start swarming the hypercore.
swarm.join(datom.discoveryKey, {
  announce: true,
  lookup: true
});
*/


// Start announcing or lookup up a discovery key on the DHT.
await c.network.configure(datom.discoveryKey, { announce: true, lookup: true })

// Stop announcing or looking up a discovery key.
//networker.configure(datom.discoveryKey, { announce: false, lookup: false })

// Shut down the swarm (and unnanounce all keys)
//await networker.close()


}

swarm_datom()
