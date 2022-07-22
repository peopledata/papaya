equire('dotenv').config();
const asyncWrapper = require('../../middleware/asyncWrapper');
const ErrorResponse = require('../../utils/ErrorResponse');
const datomSpaceServer = process.env.DATOMSPACE_NAME;
const { Client: datomsClient } = require('datomspace');
const crypto  = require('hypercore-crypto');
const mykey = 'b144cb0976305e956bdfebdc2763f6b818f94a57814026daa34cbf138cecb4b2'

// @desc      Get single datom
// @route     GET /api/datom/:id
// @access    Public
const getDatom = asyncWrapper(async (req, res, next) => {

      const c = new datomsClient({
        //
        host: datomSpaceServer
      })
    
      
      // Ask for the RPC server status to see that everything works
      //console.log(`连接 ${datomSpaceServer} ...`)
      //console.log(await c.status()) 
    
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
    
      
  res.status(200).json({
    success: true,
    data: category,
  });
});

module.exports = getDatom;