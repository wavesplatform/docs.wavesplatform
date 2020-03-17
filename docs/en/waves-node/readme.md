# Node Owner Guide

Nodes are the critical components of Waves ecosystem. By running a node, you can help processing transactions and get profit for securing the network.

Every Waves node is a full node that takes part in the decentralized process of block creation by storing full blockchain data, passing the data to other nodes (relay blocks and transactions to miners), and checking that the newly added blocks are valid. Validation implicates ensuring that the format of the block is correct, all hashes in the new block were computed correctly, the new block contains the hash of the previous block, and each transaction in the block is [validated](en/blockchain/transaction/transaction-validation) and signed by the appropriate parties (answer end user queries about the state of the blockchain). Any node can propose new transactions, and these proposed transactions are propagated between nodes until they are eventually added to a block.

Nodes can be used for [mining](/en/blockchain/mining) \(generating new blocks\). A mining node checks that each transaction is self-valid since the other nodes would reject the block if it includes invalid transactions. A node can have zero balance, but to start mining, a node must have the minimum balance of **1000 WAVES** (including Waves that are [leased](/en/blockchain/leasing) to the node). The WAVES you own \(or that have been leased to you\) reflect your mining power, the more you own, the higher your chances of processing the next block and receiving the transaction fees as a reward. The final amount also depends on overall network activity and the amout of generated fees.

**Note:** You can find the list of the existing nodes at [dev.pywaves.org](http://dev.pywaves.org/generators/).

Reasons to run node:

* **Mining**: earn profit for generating new blocks and [transaction fees](/en/blockchain/transaction/transaction-fee).
* **Own project**: get the latest blockchain data from your own node without having to trust third party. Send transactions from your own node.
Use your node API, to be independent from third party.
Tweak your own node to setup extended functionality for your project.

For details about Waves protocol, blockchain scalability and rewards see [Waves-NG Protocol](/en/blockchain/waves-protocol/waves-ng-protocol) article.

## Install a Node

There are different options to install Waves node. The installation methods are explained in [Install Waves Node](/en/waves-node/how-to-install-a-node/how-to-install-a-node) article.

## Get Actual Blockchain

A running node requires blockchain database. Use one of the methods described in [Get Waves Blockchain](/en/waves-node/options-for-getting-actual-blockchain) article to get the latest blockchain database.

## Upgrade a Node

When you own a node, check the [Releases](https://github.com/wavesplatform/Waves/releases/) page for the latest updates on a regular basis. Releases of new versions of node come with release notes document describing the new features and telling the node owner what actions to take to upgrade, depending on the type of the update.
For details about upgrading see [Upgrade Waves Node](/en/waves-node/upgrading) article.

## Deal With Forks

Fork is the moment when a blockchain splits in two seperate ones. Forks can happen because of node version difference (for example, when your node is of older version and does not support functionality of the newer ones). Also, forks can be caused by malicious attacks or system failure. A running node receives information from other nodes and monitors "the best blockchain" (that is the one that has the biggest generating balance). If the node spots a "better" blockchain that had split (forked) from the current one **not more than 100 blocks ago**, it can automatically switch to it. If it split more than 100 blocks ago a forked node continues generating blocks, but it does not communicate with other valid nodes.

You can check the blockchain height or the last 100 signatures of blocks to understand if your node is on fork or not. Use [chaincmp](https://github.com/wavesplatform/gowaves/releases/tag/v0.1.2) utility to compare blockchains on your node and the reference nodes. Chaincmp utility indicates whether you are on the same blockchain with the reference nodes and if not it provides recommendations on further actions.

Your node can be on fork with height **less** than 2000 blocks or **more** than 2000 blocks.

* In case that your node is on fork with a height less than 2000 blocks, you can implement rollback and restart the node to begin generating blocks as described in [Rollback Waves Node](/en/waves-node/how-to-rollback-a-node) article.
* Otherwise, you need to go with one of the options described in [Get Waves Blockchain](/en/waves-node/options-for-getting-actual-blockchain) article.
