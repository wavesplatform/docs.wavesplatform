# Synchronize Waves Blockchain

A running Waves node requires up-to-date blockchain database with verified blocks and valid signatures synchronized to the current blockchain state.

You can [synchronize your blockchain during regular node operation](#synchronizing-the-blockchain-during-regular-node-operation) or speed up the synchronization process by [downloading the latest blockchain](#download-the-latest-blockchain-database) database and manually implementing it on your node. If you have a running node you can [export or import blockchain](#export/import-blockchain) database.

**Important**: The most CPU-significant single-threaded operation during synchronization is block verification, so high-frequency CPUs provide better performance. The signature validation process is multi-threaded, but it has insignificant duration effect compared to the block verification. In other words, there is almost no difference between using 8 or 16-core CPUs operating at the same frequency. During synchronization of the blockchain database, writing to disk can exceed the IOPS values supported by an HDD which can cause delays when the operating system doesn't have enough physical memory. Waves team recommends using SSD and keep at least 30% of the total memory for the needs of the operating system (cache/buffers).

## Statistics \(0-1220000\)

Block verification is not a linear operation, “heavy” blocks take more time to be verified. The ”heaviness" of a block is determined by the number and type of transactions it contains. So the first blocks (for example, the first 200.000) are empty and get verified faster than the same number of blocks after one million. On the chart it looks as follows:

![1](./_assets/statistics_blocks_receiving.png)

The time to reach the block 1220000 on different CPUs (number of cores and frequencies) in numbers:

| CPU/MEM | Synchronization time | Import time |
| :--- | :--- | :--- |
| Intel Xeon Platinum 8175M @ 2.50 GHz \(8 vCPU\)/32 GB | 11:25 | 10:20 |
| Intel Xeon Platinum 8124M @ 3.00 GHz \(16 vCPU\)/32 GB | 10:45 | 10:05 |
| Intel i7 8550u @ 1.8 GHz \(up to 4GHz\) \(8 vCPU\)/16 GB | 9:35 | 9:20 |

## Synchronizing the Blockchain During Regular Node Operation

This method implicates runnig the node from scratch. For detailed description of running the node, see [Install Waves Node](/en/waves-node/how-to-install-a-node/how-to-install-a-node) article.

After the first run, your node will start automatically receiving all the necessary data from the peer nodes as well as it will verify the blocks and validate signatures untill the blockchain is fully sychronized with the current state.

In this case the following factors affect the duration of obtaining the data via network sharing:

* Internet channel width and network latency
* Number of connected peers

The first factor depends on the internet data provider, while the second one can be set with `max-outbound-connections` parameter in node configuration file. Waves team believes that the default value of `30` is optimal. The internet connection speed has less effect on the process duration then the verification of the blocks and validation of the signatures.

## Download the Latest Blockchain Database

To download and manually implement the latest blockchain database, complete the following steps:

1. Download the **blockchain_last.tar** archive containing the latest database from one of the trusted links below.

   <details>
     <summary>Latest Downloadable Database (current state from nodes.wavesnodes.com)</summary>
  
     * Mainnet: [http://blockchain.wavesnodes.com/](http://blockchain.wavesnodes.com/)
     * Testnet: [http://blockchain-testnet.wavesnodes.com/](http://blockchain-testnet.wavesnodes.com/)
     * Stagenet: [http://blockchain-stagenet.wavesnodes.com/](http://blockchain-testnet.wavesnodes.com/)

   **Warning**: Please use trusted sources to download blockchain database. Unknown sources can contain incorrect data or balances.

   </details>

   Approxmate size of the latest database is 35 GB (in November 2019).

2. Run the checksum with some tool to test files (checksum of the **blockchain_last.tar** file should be the same as inside **blockchain_last.tar.SHA1SUM** file).

3. Empty the existing data folder. By default the blockchain data is stored in `data` folder that is located in base application directory.
See the default base application directory for different operating systems in [Default Application Directory](/en/waves-node/node-configuration#default-application-directory) section of the [Node Configuration](/en/waves-node/node-configuration) article.

   <details>
     <summary>Linux console command</summary>
  
     ```sudo rm -rdf /var/lib/waves/data```.
   </details>

4. Unpack the database files in the `data` folder.

   <details>
     <summary>Linux console command</summary>
  
     ```tar -xvf blockchain_last.tar -C /var/lib/waves/data```.
   </details>

   <details>
     <summary>Alternative downloading and unpacking method (Linux)</summary>
  
     Traditional method of downloading and unpacking requires a lot of disc space. In some cases the disc space is only enough for the blockchain itself and very little extra.
     Linux users can save disc space by using one of the following commands to unpack the archive during the downloading, so that the unpacked database files will be saved on disc without storing the archive.

     If the node is installed from **DEB** package, run the following commands:

     ```bash
     cd /var/lib/waves
     sudo -u waves bash -c "wget -qO- http://blockchain.wavesnodes.com/blockchain_last.tar --show-progress | tar xf -"
     ```

     If the node is running from a **JAR** file, navigate to the `data` folder where the node's database is stored and run the following command:

     ```bash
     wget -qO- http://blockchain.wavesnodes.com/blockchain_last.tar --show-progress | tar xf -
     ```
  
    </details>

5. Run the node.

   <details>
     <summary>Linux console command</summary>
  
     ```sudo systemctl start waves```.
   </details>

## Export/Import Blockchain

If you have a running Waves node that is synchronized to actual blockchain, you can export the node's blockchain database to a binary file and then import it on another node. For detailed description of the export/import process, see [Export/Import Blockchain](/en/waves-node/options-for-getting-actual-blockchain/import-from-the-blockchain) article.

**Warning**: If your node is [on fork](/en/waves-node#deal-with-forks) with a height more than 2000 blocks, do not export/import your own blockchain but update the node as described in [Upgrade Waves Node](/en/waves-node/upgrading) article. Then perform the activities described in [Download the Latest Blockchain Database](#download-the-latest-blockchain-database) section.
