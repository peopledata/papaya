
const { Client: datomsClient } = require('datomspace')
const crypto  = require('hypercore-crypto')
const datomSpaceServer = 'datomSpaceServer_18'  //本地
//const datomSpaceServer = 'uid_datomSpaceServer'  //本地
//const remote_datomsSpaceServer = 'datomspace_211' //远程211主机的
//const mykey = 'a30a88ea66678e3618af27dc8a2789a1d3c0d7e9b997cf31dc07fecae9bcfae7'
const mykey = '3e3b7c1ca1e2b4090afdfea38fce9cfa67beaba856b52618a43f766a397d24b3'

start()


async function start () {
  const c = new datomsClient({
    //
    host: datomSpaceServer
  })

     
  // Ask for the RPC server status to see that everything works
  console.log(`连接 ${datomSpaceServer} ...`)
  console.log(await c.status()) 

  const myStore = c.corestore() 

  const datom = myStore.get({              //访问远程core，需要key。
      key: mykey,
      //discoveryKey: mykey,   //用discoveryKey 不行。
      valueEncoding: 'json'
  })
  
  c.replicate(datom)

  await datom.ready()
  
  console.log('the private key is:', datom.key.toString('hex'))

  console.log('the discovery key is:', crypto.discoveryKey(Buffer.from(datom.key)).toString('hex'))

  //因为有privateKey， 所以可以添加新的data block.
  /*
  console.log('append a block to datoms...')

  await Core.append({
      name: 'Dick Wu',
      bank: 'bank of america',
      account: '2392892xxxx',
      balance: '92002'
  })
  */


  datom.createReadStream()
        .on('data', console.log)
        .on('end', console.log.bind(console, '\n(end)'))

  
  //get_and_verify_signatures(datom)
  
  
  
}



async function get_and_verify_signatures (datom) {
  for (var i = 0, len = datom.length; i < len; i++) {
    const index = i
    const signature = await get_signature(datom, index)
    console.log({signature})
    const is_verified = await verify_signature(datom, index, signature)
    console.log(is_verified)
  }
}



async function verify_signature (datom, index, signature) {
  return new Promise ((resolve, reject) => {
    datom.verify(index, signature, (err, res) => {
      if (err) reject(err) 
      resolve(res)
    })
  })
}


async function get_signature (datom, index) {
  return new Promise((resolve, reject) => {
    datom.signature(index, (err, res) => {
      if (err) reject(err)
      resolve(res.signature) // res = { index, signature }
    })
  }) 
}