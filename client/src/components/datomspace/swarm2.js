
const Swarm = require('peopleswarm')

start()

async function start () {
  
  const swarm2 =  new Swarm({ seed: Buffer.alloc(32).fill(5) })

  
  console.log('SWARM 2 KEYPAIR:', swarm2.keyPair)

  
  swarm2.on('connection', function (connection, info) {
    console.log('swarm 2 got a client connection:', connection.remotePublicKey, connection.publicKey, connection.handshakeHash)
    connection.on('error', err => console.error('2 CONN ERR:', err))
  })

  const key = Buffer.alloc(32).fill(7)


  swarm2.join(key)

  await swarm2.flush()
  // await discovery.destroy() // Stop lookup up and announcing this topic.
}