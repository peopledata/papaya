//添加新的datoms
const { Client: datomsClient } = require('datomspace') 
const crypto  = require('hypercore-crypto')
const datomSpaceServer = 'uid_datomSpaceServer'

//const key = 'b144cb0976305e956bdfebdc2763f6b818f94a57814026daa34cbf138cecb4b2'
const key ='cb7d246aa5e7fd82a35a1f75c3fad102e6046dd081d976067ca9d6ccd879a3b3'

async function append_datoms () {
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

  console.log(`Step 1: appned new datom on ${key} \n`)

  //Append 4 new blocks to the daomspace.

  
  //给contact datoms里添加 

await datom.append({
  name: 'Alice Cuang',
  bank: 'ICDD',
  account: '2022202',
  balance: `22221222`
})



/*
//给log datom里添加新的datom
  for (let i =0; i < 100; i++) {  
    await datom.append({
          index: i,
          value: i*12345
        })
    }

  /*
  // Append new blocks to the conatct core.
  for (let i =0; i < 10; i++) {
    await datom.append({
      name: fake.name.firstName(),
      Company: fake.company.companyName(),
      jobTitle: fake.name.jobTitle(),
      Tel: fake.phone.phoneNumber(),
      City: fake.address.city(),
      Address: fake.address.streetAddress(),
      emal: fake.internet.email(),
      zipcode: fake.address.zipCode()
    }) 
  }
  */
  

  //console.log('Lengther of the conatct datoms:', Core.length)

  console.log('Append the datoms is:')


  datom.createReadStream()
        .on('data', console.log)
        .on('end', console.log.bind(console, '\n(end)'))
  
 
  console.log('the private key is:', datom.key.toString('hex'))

  console.log('the discovery key is:', crypto.discoveryKey(Buffer.from(datom.key)).toString('hex'))

  c.network.configure(datom.discoveryKey, { announce: true, lookup: true })
  
  
};


append_datoms()

//module.exports = append_datoms();
