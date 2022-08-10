
import { useEffect, useState } from 'react'
import { agent } from './verixyzSetup'

async function resolverDID() {

  const [didDoc, setDidDoc] = useState<any>()

    const resolve = async () => {
      const doc = await agent.resolveDid({
        didUrl: 'did:ethr:rinkeby:0x6acf3bb1ef0ee84559de2bc2bd9d91532062a730',
      })
  
    setDidDoc(doc)

    }

    useEffect(() => {
      resolve()
    }, [])
  
    console.log('the resolved did doc us', didDoc)
}

resolverDID()
