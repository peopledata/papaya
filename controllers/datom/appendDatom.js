require('dotenv').config();
const asyncWrapper = require('../../middleware/asyncWrapper');
const ErrorResponse = require('../../utils/ErrorResponse');
const { Client: datomsClient } = require('datomspace'); 
const crypto  = require('hypercore-crypto')

const datomSpaceServer = process.env.DATOMSPACE_NAME;
const key = ""

// @desc      Append new datom to exist datom
// @route     POST /api/datomspace
// @access    Public

const appendDatom = asyncWrapper(async (req, res, next) => {

    const c = new datomsClient({
        host: datomSpaceServer
      })
    
      //debug: Ask for the RPC server status to see that everything works
      //console.log(`连接 ${datomSpaceServer} ....`)
      //console.log(await c.status()) 
    
      const myStore = c.corestore()
    
      const datom = myStore.get(key,{
        valueEncoding: 'json'
      })
      

      console.log(`Step 1: appned new datom on ${key} \n`)
    
      //Append 4 new blocks to the daomspace.
    
      
      //给contact datoms里添加 
    
    await datom.append({
      name: 'Jeff Huang',
      bank: 'ICBC',
      account: '20202',
      balance: `22222`
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
      
      
      
    res.status(200).json({
        success: true,
        data: datom,
    });

    });
    
    
    module.exports = appendDatom;
    