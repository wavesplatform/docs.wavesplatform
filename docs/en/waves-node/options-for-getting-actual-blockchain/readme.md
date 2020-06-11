# Synchronize Waves Blockchain

A running Waves node requires up-to-date blockchain database for operation.

Use one of the following methods to synchronize your blockchain to current state:

* [Synchronize your blockchain during regular node operation](#synchronize-blockchain-database-during-regular-node-operation) to get all the necessary data from the peer nodes, verify the blocks and validate signatures.

* [Import blockchain from binary file](#import-blockchain). Importing is a time-consuming process that implies the same execution of transactions and validations that happen during normal node operation. This method is ~10% faster compared to the synchronization during regular node operation.

* [Download the latest blockchain database and deploy](#download-the-latest-blockchain-database) it on your node. This is the fastest method. In this case your node will skip the time-consuming execution of transactions and validations and use the downloaded blockchain state "as is". **Download the blockchain database only from a trusted source. Databases from unknown sources may contain incorrect data or balances**.

**Important**: Full synchronization can take 1-3 days and mostly depends on CPU frequency. The most significant process (block verification) is single-threaded, so high-frequency CPUs provide better performance. The signature validation process is multi-threaded, but it has insignificant duration effect compared to the block verification. In other words, there is almost no difference between using 8 or 16-core CPUs operating at the same frequency. Block verification is not a linear operation, “heavy” blocks take more time to be verified. The ”heaviness" of a block is determined by the number and type of transactions it contains. Empty blocks (for example, the first 200.000) are verified much faster than the same number of blocks after one million. During synchronization of the blockchain database, writing to disk can exceed the IOPS values supported by an HDD which can cause delays when the operating system doesn't have enough physical memory. Waves team recommends using SSD and keep at least 30% of the total memory for the needs of the operating system (cache/buffers).

<!---
The time to reach the block 1220000 on different CPUs (number of cores and frequencies) in numbers:

| CPU/MEM | Synchronization time during regular node operation | Synchronization time when importing blockchain from file |
| :--- | :--- | :--- |
| Intel Xeon Platinum 8175M @ 2.50 GHz \(8 vCPU\)/32 GB | 11:25 | 10:20 |
| Intel Xeon Platinum 8124M @ 3.00 GHz \(16 vCPU\)/32 GB | 10:45 | 10:05 |
| Intel i7 8550u @ 1.8 GHz \(up to 4GHz\) \(8 vCPU\)/16 GB | 9:35 | 9:20 |
Block verification is not a linear operation, “heavy” blocks take more time to be verified. The ”heaviness" of a block is determined by the number and type of transactions it contains. So the first blocks (for example, the first 200.000) are empty and get verified faster than the same number of blocks after one million. On the chart it looks as follows:

![1](./_assets/statistics_blocks_receiving.png)
--->

## Synchronize Blockchain During Regular Node Operation

This method implies runnig the node from scratch. For detailed description of running the node, see [Install Waves Node](/en/waves-node/how-to-install-a-node/how-to-install-a-node) article.

After the first run, your node will start automatically receiving all the necessary data from the peer nodes as well as it will verify the blocks and validate signatures untill the blockchain is fully sychronized with the current state.

In this case the following factors affect the duration of obtaining the data via network sharing:

* Internet channel width and network latency
* Number of connected peers

The first factor depends on the internet data provider, while the second one can be set with `max-outbound-connections` parameter in node configuration file. Waves team believes that the default value of `30` is optimal. The internet connection speed has less effect on the process duration then the verification of the blocks and validation of the signatures.

## Import Blockchain

You can import blockchain from binary file to speed up (by ~10%) your blockchain synchronization process. Binary files contain chain of transaction blocks in verifiable format (include the original sequence of all the transactions with signatures and blocks with signatures of the block generators). The import process implies the same execution of every transaction that happens during normal node operation. That includes validation of signatures, balances etc. If you have a running Waves node that is synchronized to current state, you can export the node's blockchain database to a binary file and then import it on another node.

For detailed description of the import/export process, see [Import/Export Blockchain](/en/waves-node/options-for-getting-actual-blockchain/import-from-the-blockchain) article.

**Warning**: If your node is [on fork](/en/waves-node#deal-with-forks) with a height more than 2000 blocks, do not export/import your own blockchain but update the node as described in [Upgrade Waves Node](/en/waves-node/upgrading) article. Then perform the activities described in [Download the Latest Blockchain Database](#download-the-latest-blockchain-database) section.

## Download the Latest Blockchain Database

You can download and manually deploy the latest blockchain state on your node. In this case your node will use the downloaded blockchain state "as is" and skip the execution of transactions (validation of signatures, balances etc.) that happens during normal node operation or importing blockchain from binary file. For detailed description of the process, see [Download the Latest Blockchain](/en/waves-node/options-for-getting-actual-blockchain/state-downloading-and-applying) article.
