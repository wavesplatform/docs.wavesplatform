# Download the Latest Blockchain

A running node requires up-to-date blockchain database for operation. You can download and manually deploy the latest database rather than synchronizing your blockchain state. In this case you will skip execution of transactions (validation of signatures, balances etc.) that happens during normal node operation or importing blockchain from binary file.

To download and manually deploy the latest blockchain database, complete the following steps:

1. Download the **blockchain_last.tar** archive containing the latest database from one of the trusted links below (current state from nodes.wavesnodes.com).
  
   Mainnet: [http://blockchain.wavesnodes.com/](http://blockchain.wavesnodes.com/)

   Testnet: [http://blockchain-testnet.wavesnodes.com/](http://blockchain-testnet.wavesnodes.com/)

   Stagenet: [http://blockchain-stagenet.wavesnodes.com/](http://blockchain-stagenet.wavesnodes.com/)

   **Warning**: Download the blockchain database only from a trusted source. Databases from unknown sources may contain incorrect data or balances.

   Approximate size of the latest database is 48 Gb (in June 2020).

2. Run the checksum with some tool to test files (checksum of the **blockchain_last.tar** file should be the same as inside **blockchain_last.tar.SHA1SUM** file).

3. Empty the existing `data` folder.

   <details>
     <summary>Linux</summary>
  
     ```sudo rm -rdf /var/lib/waves/data```.
   </details>

   By default the blockchain data is stored in `data` folder in [base application directory](/en/waves-node/node-configuration#default-application-directory).

4. Unpack the database files in the `data` folder.

   <details>
     <summary>Linux</summary>
  
     ```tar -xvf blockchain_last.tar -C /var/lib/waves/data```
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
