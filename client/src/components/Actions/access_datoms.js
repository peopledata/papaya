//测试客户端接入datomSpaceServer，并使用privateKey读取core中的数据。

/* 步骤
1. 使用客户端，连接datomServer.
2. 使用privae key访问datomspace，并读取里面的core.
*/

/*
使用方法： 
  1）运行server端程序. datomSpaceServer.js
  2) 在客户端，运行此程序。(需要用private key 打开 服务器端的对应的core。)
*/
require('dotenv').config();
const { Client: datomsClient } = require('datomspace')
const crypto  = require('hypercore-crypto')
const datomSpaceServer = 'uid_datomSpaceServer'  //本地

const mykey = 'b144cb0976305e956bdfebdc2763f6b818f94a57814026daa34cbf138cecb4b2'
async function access_datoms () {
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
  
  
  console.log('the contact datoms is:')

  
 
  //console.log('the private key is:', mycontactCore.key.toString('hex'))

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

  
  
  
  
};

access_datoms()

//module.exports = access_datoms();
