# Node Owner Guide

 Nodes are the critical components of Waves ecosystem. By Running a Waves node, you help processing transactions and you can increase your profit for securing the network if users [lease](/en/blockchain/leasing) their funds to your node \(You can lease any sum starting from 0.002 WAVES. The more WAVES you lease to a node, the more rewards you receive.\). For more deatails, see the article about [Waves full node](/en/waves-node/what-is-a-full-node).

The WAVES you own \(or that have been leased to you\) reflect your mining power, the more you own, the higher your chances of processing the next block and receiving the transaction fees as a reward. The final amount will also depend on overall network activity and the level of fees generated.

The Waves full node serves **two critical roles**:

1. To relay blocks and transactions to miners
2. To answer queries for end users about the state of the blockchain.

## Running a Node

There are different options to run Waves full node. Review the [Node configuration](/en/waves-node/node-configuration) article to select an option that suits your needs. A running node can have zero balance, however, to create mining pool, a node must have the minimum balance of **1000 WAVES** (including Waves that are lease to the node).

### Installing a Node

* The easiest way to run a Waves Node is by means of [Waves Docker container](/en/waves-node/waves-node-in-docker). It requires just one command to enable everything or to change the settings of the node.
* The other way is to [download the latest version](https://github.com/wavesplatform/Waves/releases) of `waves.jar` and the required `.conf` configuration file \(for mainnet or testnet\) to any folder, for example `~/waves`. Follow the steps described in [How to Install a Node](/en/waves-node/how-to-install-a-node/how-to-install-a-node) article for details about installation and activation of the node.

### Getting Actual Blockchain

After installing a node, you will need to get the blockchain database, using one of the methods described in [Options for Getting Actual Blockchain](/en/waves-node/options-for-getting-actual-blockchain) article.

## Already a Node Owner

If already own a node, you will need to check for the latest updates and then go for one of the follwing:

### Upgrade Your Node

To upgrade your node, follow the steps described in [Upgrading Waves Node](/en/waves-node/upgrading) article.

### Dealing With Forks

You can check the blockchain height or the last 100 signatures of blocks to understand if your node is on fork or not. Use [chaincmp](https://github.com/wavesplatform/gowaves/releases/tag/v0.1.2) utility to compare blockchains on your node and the reference nodes.

Your node can be on fork with height **less** than 2000 blocks or **more** than 2000 blocks.

* In case that your node is on fork with a height less than 2000 blocks, you can implement rollback as described in [How to Rollback Your Node](/en/waves-node/how-to-rollback-a-node).
* Otherwise, you need to go with one of the options described in [Options for Getting Actual Blockchain](/en/waves-node/options-for-getting-actual-blockchain) article.

If you're interested in joining the Testnet, you will need to follow the steps described in [Joining The Testnet](/en/waves-node/joining-testnet) article.
