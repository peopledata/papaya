# Personal-blockchain smart contracts 

[persoanl-blockchain](https://github.com/peopledata/personal-blockchain) provide personal data governance and on-chain process, like cateloge, transactions, etc.

Papaya access the blockchain using ABI interface which defined by smart contract.

## Smart Contracts
There are 3 basic contracts.  Here use [hardhat](https://hardhat.org/) for development.


### 1. certificate contracts(CC)
when a new data assets(datoms) created, a cerfificate contracts should be executed and a certification will be issued and stored on chain. 

The certification is the Hash root node of this datom. so, when one access this datom, it can use this certification to verify the datom owner change it or not since it created.


### 2. access rights contracts（AR)
For privacy policy, People will design its privacy on its data assets. AR contracts proivide full access control of datoms. 

### 3. tranaction contracts (TC)
People share its data assets with others using TC. 


