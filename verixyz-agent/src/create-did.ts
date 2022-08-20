import { agent } from './setup'

async function main()  {
  const args = process.argv.slice(2)
  const identity = await agent.didManagerCreate({
    alias: args[0],
    provider: 'did:ethr:rinkeby',
    kms:'local',
  })
  console.log(`New identity created`)
  console.log(identity)
}

main().catch(console.log)