# Rollback Waves Node

**Rollback** your node to a specific height to remove all blocks after that given height. The rollback allows to discard a few blocks to quickly restore your node in case of fork detection without having to rebuild the whole blockchain database.

You can implement rollback under the following default condition: **the rollback can be implemented to no more than 2000 blocks**. Implement the rollback by using `POST /debug/rollback` with the **API key** \(See [Waves Full Node API](https://nodes.wavesnodes.com/api-docs/index.html#!/debug/rollback) for details\). For example,

   ```js
      {
        "rollbackTo": 1057490,
        "returnTransactionsToUtx": false
      }
   ```

If you have to rollback more than 2000 blocks, then follow the instructions provided in [Synchronize Waves Blockchain](/en/waves-node/options-for-getting-actual-blockchain/) article to get the actual blockchain state.

Use [Chaincmp](https://github.com/wavesplatform/gowaves/releases/tag/v0.1.2)  utility to compare blockchains on the node and reference nodes.

## Common Issues While Implementing a Rollback

If you request a **rollback** via **curl/swagger** and get **error 503,** it doesn't mean the request is not processed \(It means that it timed out\). To make sure that the node is actually processing, check that the node state doesn't change \(with status check if the block height is not rising\) after starting to reroll. It will take some processing time to start _synchronization_ again from a desired location.  
By default a node can process **rollback** to up to **2000 blocks** without rebuilding blockachain database. If the node is on fork for some reason then rollback as soon as possible or you will have to rebuild blockachain database and that will probably take longer time.

**Note**: The default `2000` blocks limit can be changed with `max-rollback-depth` parameter in node configuration file. For details, see [Node Configuration](/en/waves-node/node-configuration) atricle.
