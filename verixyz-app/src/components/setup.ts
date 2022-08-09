import { createAgent, IResolver } from '@verixyz/core'

import { DIDResolverPlugin } from '@verixyz/did-resolver'
import { Resolver } from 'did-resolver'
import { getResolver as ethrDidResolver } from 'ethr-did-resolver'
import { getResolver as webDidResolver } from 'web-did-resolver'

//This is for test.
// You will need to get a project ID API from infura https://www.infura.io

const INFURA_PROJECT_ID = '291a07fc83f8438a84bc72d86689978b' // This is peopledata API key[jerry.zhang],for dev only.

//for peopledata application, one need get a quorum ID from metachain.
// [todo]

// for test only
export const agent = createAgent<IResolver>({
  // this is using etherDIDReslover to reslove the DID documents.
  plugins: [
    new DIDResolverPlugin({
      resolver: new Resolver({
        ...ethrDidResolver({ infuraProjectId: INFURA_PROJECT_ID }),
        ...webDidResolver(),
      }),
    }),
  ],

  //TODO: develop new plugins for peopledata/metachain. 
  

})
