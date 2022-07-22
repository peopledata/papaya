require('dotenv').config();
const asyncWrapper = require('../../middleware/asyncWrapper');
const ErrorResponse = require('../../utils/ErrorResponse');
const { Client: datomsClient } = require('datomspace'); 
const crypto  = require('hypercore-crypto');
const { V1APIGroupList } = require('@kubernetes/client-node');
const datomSpaceServer = process.env.DATOMSPACE_NAME;

// @desc      Create new datom
// @route     POST /api/datom
// @access    Public

const createDatom = asyncWrapper(async (req, res, next) => {

    const c = new datomsClient({
      host: datomSpaceServer
    })
  
    //Debug: Ask for the RPC server status to see that everything works
    console.log(`连接 ${datomSpaceServer} ....`)
    console.log(await c.status()) 
    
    const myStore = c.corestore()
  
    const datom = myStore.get('./datom', {
      valueEncoding: 'json'
    })
    
    //todo: read data payload from a json files or KV db.

    /* example a contac json files:
    key[]: value[]
    
    */
    await datom.append({
        name: 'jerry zhang',
        bank: 'bank of china',
        account: '92892xxxx',
        balance: '82988292002'
    })
  
  
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
    
    //console.log('Create the datoms is:')
  
  
    datom.createReadStream()
          .on('data', console.log)
          .on('end', console.log.bind(console, '\n(end)'))
    
    
    //todo: record this datom's pair key  to vault-in-pod 
    /*

    connect vault-in-pod
    write secret: 
      privatekey: datom.key.toString('hex'))
      discoverykey: crypto.discoveryKey(Buffer.from(datom.key)).toString('hex')
    
      */
    
  console.log('the private key is:', datom.key.toString('hex'))

  console.log('the discovery key is:', crypto.discoveryKey(Buffer.from(datom.key)).toString('hex'))
    
    // boradcasting datom's discoverykey to DHT network
    c.network.configure(datom.discoveryKey, { announce: true, lookup: true })

    //return results:
    /*
    

    */
    

  if (!c) {
    return next(
      new ErrorResponse(
        `Can not access datomspaceserver`,
        404
      )
    );
  }


  res.status(200).json({
    success: true,
    data: datom,
  });

    
  });


module.exports = createDatom;