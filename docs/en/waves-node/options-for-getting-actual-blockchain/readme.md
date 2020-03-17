# Get Waves Blockchain

A running node requires up-to-date blockchain database for operation. One of the methods described in this article can be used to obtain actual blockchain.

## 1. Synchronizing the Blockchain During Regular Node Operation

This method implicates runnig the node from scratch. For detailed description of running the node, see [Install Waves Node](/en/waves-node/how-to-install-a-node/how-to-install-a-node) article.

After the first run, a node will start automatically receiving all the necessary data from the peer nodes as well as it will verify the blocks and validate signatures.

In this case the following factors affect the duration of obtaining the data via network sharing:

* Internet channel width and network latency
* Number of connected peers

The first one depends on the internet data provider, while the second one can be set with `max-outbound-connections` parameter. We believe that the default value of 30 is enough. The speed of internet connection (unless, you have a dial-up connection) has little duration effect on the process, compared to the time spent on the verification of the blocks and validation of the signatures.

## 2. Importing Blockchain from Binary File

Blockchain database (state) can be imported from a previously exported binary file. For detailed description of the export/import process, see [Export/Import Blockchain](/en/waves-node/options-for-getting-actual-blockchain/import-from-the-blockchain).

**Warning**: If your node is [on fork](/en/waves-node#deal-with-forks) with a height more than 2000 blocks, do not export/import your own blockchain but [update](/en/waves-node/upgrading) the node, download and [import](/en/waves-node/options-for-getting-actual-blockchain/import-from-the-blockchain) the recent blockchain file (blockchain_last.tar) from one of the links below:

* [Mainnet](http://blockchain.wavesnodes.com/)
* [Testnet](http://blockchain-testnet.wavesnodes.com/)

The speed of block verification and signature verification affects the time of reaching the current state by the import method. These operations are performed on the CPU. The verification of the blocks goes in one stream, therefore, a gain in time will be given by a high-frequency CPU rather than a multicore one. The signature verification operation is multi-threaded, but against the background of block verification, it has an insignificant effect. In other words, there is practically no difference when using 8 or 16 cores CPUs operating at the same frequency. The remaining blocks will be synchronized during regular operation.

When synchronizing the blockchain database, an active writing to disk exceeds the IOPS values that the HDD gives. In particular, there may be delays when the operating system doesn't have enough physical memory. We recommend to use SSD and keep at least 30% of the total memory for the needs of the operating system (cache/buffers).

## 3. Downloading the Latest Blockchain Database

There is a way to download the latest database from the internet. For detailed description of the process, see [Download the Latest Blockchain](/en/waves-node/options-for-getting-actual-blockchain/state-downloading-and-applying).

Approxmate size of the latest database is 35 GB (**in November 2019**).

## Statistics \(0-1220000\)

Block verification is not a linear operation, “heavy” blocks take more time to be verified. The ”heaviness" of a block is determined by the number and type of transactions it contains. So the first blocks (for example, the first 200.000) are empty and verified much faster than the same number of blocks after the million. On the chart it looks as follows:

![1](./_assets/statistics_blocks_receiving.png)

The time to reach the block 1220000 on different CPUs (number of cores and frequencies) in numbers:

| CPU/MEM | Synchronization time | Import time |
| :--- | :--- | :--- |
| Intel Xeon Platinum 8175M @ 2.50 GHz \(8 vCPU\)/32 GB | 11:25 | 10:20 |
| Intel Xeon Platinum 8124M @ 3.00 GHz \(16 vCPU\)/32 GB | 10:45 | 10:05 |
| Intel i7 8550u @ 1.8 GHz \(up to 4GHz\) \(8 vCPU\)/16 GB | 9:35 | 9:20 |
