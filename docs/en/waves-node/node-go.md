# Node Go

In autumn 2018 Waves started a new project of Node Go implementation. The existence of the second (alternative) type of implementation makes Waves network less vulnerable to the implementation errors of Waves protocol. Node Go also allows to test new approaches to the implementation of the existing algorithms and add details of the protocol specs that were hidden in Scala code. Node Go is quite a new product that has less user interfaces than Scala node, however the developers are going to enhance the node functionality and provide more interfaces familiar to users. Node Go only partially supports the original node REST API. Currently all the major node versions are released on Scala and Go implementation.

[Node Go development history overview](https://medium.com/wavesprotocol/waves-node-in-go-4c512214ca8a).

In this article:

* [Innovation and differences from Scala node](#innovation-and-differences-from-scala-node)
* [Generating blocks](#generating-blocks)
* [For Go developers](#for-go-developers)
* [How to run Node Go](#how-to-run-node-go)

## Innovation and differences from Scala node

In Node Go implementation the concept for block and node state storage is different from Scala implementation. In Node Go implementation the block storage in `leveldb` was abandoned and the new blocks are added in full to a simple binary file, and their meta information is stored in `leveldb`.

Node Go implementation uses adaptive buffer of applied blocks. The Scala node applies blocks in equal batches of 100, and Node Go constantly tracks block size and adjusts the number of blocks in the buffer, based on their size. That is, if blocks are empty, Node Go can apply them in batches of several thousands, and, if blocks contain a large number of transactions, the buffer can be dynamically reduced to several dozen blocks. Such mechanism facilitates significant speeding up of initial import of the Waves blockchain.

Some Node Go improvements were added to Scala node. For instance, the addition of bloom filters when calling the state storage, helped reduce the number of costly transactions for non-existing keys, which is especially vital for blockchain import as all blocks and transactions are new at the time and, as a rule, are absent from the storage. Disableable bloom filters were implemented in Scala node, which helped speed up blockchain import.

## Generating blocks

Node Go can be used for generating blocks in experimental and test network. The experience of using Node Go for generating blocks in main network is insignificant. Use Node Go for generating blocks in main network at you own risk.

## For Go developers

Node Go can be used for the development and operation of new services that obtain data over gPRC API. Node Go has full implementation of gRPC interface (gRPC API) for access to node and blockchain data.

Waves team invites developers to study the Waves node, detect and correct errors, propose improvement or new functionality.

If you have problems, questions or suggestions, create [Issue on Github](https://github.com/wavesplatform/gowaves/issues) or chat with the developers on [Telegram](https://t.me/tradisys_russia) or [Discord](https://discord.com/invite/cnFmDyA).

## How to run Node Go

To run Node Go, download executable file for your platform at [the releases page on Github](https://github.com/wavesplatform/gowaves/releases/tag/v0.8.2) and launch it, following the [guideline](https://github.com/wavesplatform/gowaves/blob/master/README.md).
