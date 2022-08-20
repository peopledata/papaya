import DHT from 'dht-rpc'

const bootstrap = DHT.bootstrapper(10001, '118.195.143.126')
await bootstrap.ready()
console.log(bootstrap.address())
