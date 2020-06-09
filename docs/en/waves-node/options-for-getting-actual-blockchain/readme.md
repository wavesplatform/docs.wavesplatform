# Synchronize Waves Blockchain

A running Waves node requires up-to-date blockchain database with verified blocks and valid signatures synchronized to the current blockchain state.

You can [synchronize your blockchain during regular node operation](#synchronize-blockchain-database-during-regular-node-operation) or speed up (by ~10%) the synchronization by [importing blockchain from binary file](#export/import-blockchain). The import process implies the same execution of transactions that happens during normal node operation. You can skip the time consuming execution of transactions (validation of signatures, balances etc.) by [downloading the latest blockchain database and manually implementing](#download-the-latest-blockchain-database) it on your node. You can also export blockchain database from your  running node.

**Important**: Full synchronization time can take 1-3 days and mostly depends on CPU frequency. The single-threaded CPU load process during blockchain synchronization is block verification, so high-frequency CPUs provide better performance. The signature validation process is multi-threaded, but it has insignificant duration effect compared to the block verification. In other words, there is almost no difference between using 8 or 16-core CPUs operating at the same frequency. During synchronization of the blockchain database, writing to disk can exceed the IOPS values supported by an HDD which can cause delays when the operating system doesn't have enough physical memory. Waves team recommends using SSD and keep at least 30% of the total memory for the needs of the operating system (cache/buffers).

The time to reach the block 1220000 on different CPUs (number of cores and frequencies) in numbers:

| CPU/MEM | Synchronization time during regular node operation | Synchronization time when importing blockchain from file |
| :--- | :--- | :--- |
| Intel Xeon Platinum 8175M @ 2.50 GHz \(8 vCPU\)/32 GB | 11:25 | 10:20 |
| Intel Xeon Platinum 8124M @ 3.00 GHz \(16 vCPU\)/32 GB | 10:45 | 10:05 |
| Intel i7 8550u @ 1.8 GHz \(up to 4GHz\) \(8 vCPU\)/16 GB | 9:35 | 9:20 |
Block verification is not a linear operation, “heavy” blocks take more time to be verified. The ”heaviness" of a block is determined by the number and type of transactions it contains. So the first blocks (for example, the first 200.000) are empty and get verified faster than the same number of blocks after one million. On the chart it looks as follows:

![1](./_assets/statistics_blocks_receiving.png)

## Synchronize Blockchain Database During Regular Node Operation

This method implies runnig the node from scratch. For detailed description of running the node, see [Install Waves Node](/en/waves-node/how-to-install-a-node/how-to-install-a-node) article.

After the first run, your node will start automatically receiving all the necessary data from the peer nodes as well as it will verify the blocks and validate signatures untill the blockchain is fully sychronized with the current state.

In this case the following factors affect the duration of obtaining the data via network sharing:

* Internet channel width and network latency
* Number of connected peers

The first factor depends on the internet data provider, while the second one can be set with `max-outbound-connections` parameter in node configuration file. Waves team believes that the default value of `30` is optimal. The internet connection speed has less effect on the process duration then the verification of the blocks and validation of the signatures.

## Import/Export Blockchain

You can import blockchain database from binary file to speed up your node synchronization process. Binary files contain blockchain database in verifiable format (include all the transactions with signatures and blocks with signatures of the block generators). The Import process implies the same execution of every transaction that happens during normal node operation. That includes validation of signatures, balances etc. If you have a running Waves node that is synchronized to current state, you can export the node's blockchain database to a binary file and then import it on another node.

For detailed description of the import/export process, see [Import/Export Blockchain](/en/waves-node/options-for-getting-actual-blockchain/import-from-the-blockchain) article.

**Warning**: If your node is [on fork](/en/waves-node#deal-with-forks) with a height more than 2000 blocks, do not export/import your own blockchain but update the node as described in [Upgrade Waves Node](/en/waves-node/upgrading) article. Then perform the activities described in [Download the Latest Blockchain Database](#download-the-latest-blockchain-database) section.

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

   Approxmate size of the latest database is 48 GB (in June 2020).

2. Run the checksum with some tool to test files (checksum of the **blockchain_last.tar** file should be the same as inside **blockchain_last.tar.SHA1SUM** file).

3. Empty the existing data folder.

   <details>
     <summary>Linux console command</summary>
  
     ```sudo rm -rdf /var/lib/waves/data```.
   </details>

   By default the blockchain data is stored in `data` folder in [base application directory](/en/waves-node/node-configuration#default-application-directory).

4. Unpack the database files in the `data` folder.

   <details>
     <summary>Linux console command</summary>
  
     ```tar -xvf blockchain_last.tar -C /var/lib/waves/data```.
   </details>

   <details>
     <summary>Alternative downloading and unpacking method (Linux)</summary>
  
     Traditional downloading and unpacking method requires much disc space. In some cases the disc space is only enough for the blockchain itself and very little extra.
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
