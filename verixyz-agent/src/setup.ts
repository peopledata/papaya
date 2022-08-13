// Core interfaces
import { createAgent, IDIDManager, IResolver, IDataStore, IKeyManager } from '@verixyz/core'

// Core identity manager plugin
import { DIDManager } from '@verixyz/did-manager'

// Ethr did identity provider
import { EthrDIDProvider } from '@verixyz/did-provider-ethr'

// Web did identity provider
import { WebDIDProvider } from '@verixyz/did-provider-web'

// Core key manager plugin
import { KeyManager } from '@verixyz/key-manager'

// Custom key management system for RN
import { KeyManagementSystem, SecretBox } from '@verixyz/kms-local'

// Custom resolvers
import { DIDResolverPlugin } from '@verixyz/did-resolver'
import { Resolver } from 'did-resolver'
import { getResolver  as ethrDidResolver } from 'ethr-did-resolver'
import { getResolver as webDidResolver } from 'web-did-resolver'

// Storage plugin using TypeOrm
import { Entities, KeyStore, DIDStore, DataStoreORM, PrivateKeyStore, migrations } from '@verixyz/data-store'

// TypeORM is installed with `@verixyz/data-store`
import { createConnection } from 'typeorm'

// This will be the name for the local sqlite database for demo purposes
const DATABASE_FILE = 'database.sqlite'

// You will need to get a project ID API Key from infura https://www.infura.io
const INFURA_PROJECT_ID = '291a07fc83f8438a84bc72d86689978b' //This is Key for test only.

// This will be the secret key for the KMS
const KMS_SECRET_KEY = 'ce33f7557a374cc1df31242de91fe167c952bb34101e88f3cf4dc1bf55ad4fa2' //x25519 raw private key 
//generate using  <npx @verixyz/cli config create-secret-key>


  const dbConnection = createConnection({
    type: 'sqlite',
    database: DATABASE_FILE,
    synchronize: false,
    migrations,
    migrationsRun: true,
    logging: ['error', 'info', 'warn'],
    entities: Entities,
  })

  export const agent = createAgent<IDIDManager & IKeyManager & IDataStore & DataStoreORM & IResolver>({
    plugins: [
      new KeyManager({
        store: new KeyStore(dbConnection),
        kms: {
          local: new KeyManagementSystem(new PrivateKeyStore(dbConnection, new SecretBox(KMS_SECRET_KEY))),
        },
      }),
      new DIDManager({
        store: new DIDStore(dbConnection),
        defaultProvider: 'did:ethr:rinkeby',
        providers: {
          'did:ethr:rinkeby': new EthrDIDProvider({
            defaultKms: 'local',
            network: 'rinkeby',
            rpcUrl: 'https://rinkeby.infura.io/v3/' + INFURA_PROJECT_ID,
          }),
          'did:web': new WebDIDProvider({
            defaultKms: 'local',
          }),
        },
      }),
      /*
      new DIDResolverPlugin({
        resolver: new Resolver({
          ...ethrDidResolver({ infuraProjectId: INFURA_PROJECT_ID }),
          ...webDidResolver(),
        }),
      }),
      */
    ],
  })
