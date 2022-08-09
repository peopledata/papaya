//use hyperswarm buildup p2p connection.

const Swarm = require('peopleswarm')

start()

async function start () {
  const swarm1 = new Swarm({ seed: Buffer.alloc(32).fill(4) })
  
  console.log('SWARM 1 KEYPAIR:', swarm1.keyPair)
  
  swarm1.on('connection', function (connection, info) {
    console.log('swarm 1 got a server connection:', connection.remotePublicKey, connection.publicKey, connection.handshakeHash)
    connection.on('error', err => console.error('1 CONN ERR:', err))
    // Do something with `connection`
    //console.log('new connection ', info)
    

    // `info` is a PeerInfo object
  })
  
  const key = Buffer.alloc(32).fill(7)

  const discovery1 = swarm1.join(key)


  
  await discovery1.flushed() // Wait for the first lookup/annnounce to complete.

  
}