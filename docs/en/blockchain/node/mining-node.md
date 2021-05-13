# Generating Node

**Generating node** is a [node](/en/blockchain/node/) that generates blocks.

Each generating node is a [validating node](/en/blockchain/node/validating-node).

**Generating account** is an [account](/en/blockchain/account/) that node uses for [signing](/en/blockchain/block/block-signature) generated blocks.

A node can generate blocks if the following conditions are met:

* The node's generating balance is at least 1000 WAVES. This means that the account balance in WAVES, taking into account leasing, was not less than 1000 WAVES in each of the last 1000 blocks (more details in the [Account balance](/en/blockchain/account/account-balance) article). The greater the generating balance, the higher is your chance of being eligible to generate the next block.
* Node's account is not a [smart account or dApp](/en/blockchain/account/dapp).
* Block generation is not disabled in node settings (parameter [miner.enable](/en/waves-node/node-configuration# settings-generator-blocks)).
