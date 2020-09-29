# Blockchain Updates Extension

**Blockchain Updates** is a [node extensions](/en/waves-node/extensions/) that sends blockchain updates via [gRPC](https://en.wikipedia.org/wiki/GRPC).

Blockchain Updates enables tracking changes made by each transaction and block:

* balance updates,
* leased or unleased WAVES,
* account data storage updates,
* token issues and token parameter updates.

You can obtain updates over a specified range of height or in real time.

## Launch Node with Extension

:warning: **Important:** Blockchain Updates requires the history of changes since the blockchain creation. Therefore, you should start the node with the extension from scratch and synchronize the blockchain during regular node operation, this can take 1-3 days (see the [Synchronize Waves Blockchain](/en/waves-node/options-for-getting-actual-blockchain/) article). Importing blockchain from a binary file or downloading the latest blockchain database are not applicable.

1. Edit the node configuration file as described in the [Node Configuration](/en/waves-node/node-configuration) article:

   1.1. Add Blockchain Updates to the `waves.extensions` section:
   
   ```
   waves {
      ...
      extensions = [
         com.wavesplatform.events.BlockchainUpdates
      ]
   }
   ```

   1.2. Below the `waves` section, at the same level, add the following section:

   ```
   blockchain-updates {
      grpc-port = 6881 # Specify the port for client connection
   }

2. Install the extension: download the file ... and run the command ...

3. Launch the node.

## Client Generation

Clone the schemes repository by running the following command:

```
git clone https://github.com/wavesplatform/protobuf-schemas/
```

Generate your client code from the [blochckain_updates.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/grpc/blockchain_updates.proto) scheme. Use the gRPC tools for your programming language, see the instructions in the [Supported languages and platforms](https://www.grpc.io/docs/languages/) article of gRPC docuemntation.

## Best Practices

API Blockchain Updates provides the following functions:
* `GetBlockUpdate` returns updates performed by the block at the given height.
* `GetBlockUpdatesRange` returns updates performed by the blocks at the given range of height.
* `Subscribe` returns stream of messages, first historical data, then current events in real time. Optionally, you can specify the start and/or end height.

The `Subscribe` function returns all the events in real time: block append, microblock append, block rollback, microblock rollback (see the [Waves-NG](/en/blockchain/waves-protocol/waves-ng-protocol) protocol description). To handle rollbacks, we recommend that your client stores the previous states of the blockchain 100 blocks back from the current one, this is sufficient in the vast majority of cases (the maximum possible rollback height is 2000 blocks, but the probability of such a rollback is negligible). If the connection was interrupted, roll back the last block on the client and restart receiving events from the previous block.

For some analytical tasks, real-time events are not needed, for example, it is enough to update the data once an hour or once a day. In this cases, we recommend to use the `GetBlockUpdatesRange` function. It only returns historical data of blocks that are already applied, which is much easier to process.

See the format of requests and responses in the [blochckain_updates.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/grpc/blockchain_updates.proto) and [events.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/events.proto) files.

> Some updates on the blockchain are not associated with any transaction, they are performed at the block level. For example, a change in the balance of the block generator: 40% of transaction fee is recieved by the generator of the current block and receives is associated with the transaction, and 60% that the generator of the next block receives is associated only with the block. The block reward is also associated with the block only.
