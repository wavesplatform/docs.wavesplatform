# Download the Latest Blockchain

A running node requires up-to-date blockchain database for operation.
**blockchain_last.tar** is the archive, containing database that is generated during node operation when the node gets new blocks.

**Note**: By default the blockchain data is stored in `data` folder that is located in base application directory.
See the default base application directory for different operating systems in [Default Application Directory](/en/waves-node/node-configuration#default-application-directory) section of the [Node Configuration](/en/waves-node/node-configuration) article.

Please be aware that the downloaded archive file can contain wrong data or balances, so please download the blockchain database only from a trusted source.

## Latest Downloadable Database (the state from nodes.wavesnodes.com)

* MainNet: [http://blockchain.wavesnodes.com/](http://blockchain.wavesnodes.com/)
* TestNet: [http://blockchain-testnet.wavesnodes.com/](http://blockchain-testnet.wavesnodes.com/)

**Note**: The linked files are updated regularly.

## Steps (Linux DEB)

To download and implement the latest node blockchain database, complete the followiong steps:

1. Download the `blockchain_last.tar` archive from one of the provided links.
2. Run the checksum with some tool to test files (checksum of the **blockchain_last.tar** file should be the same as inside **blockchain_last.tar.SHA1SUM** file).
3. Empty the existing data folder with the followong command: `sudo rm -rdf /var/lib/waves/data`.
4. Unpack the database files in the data folder with the following command: `tar -xvf blockchain_last.tar -C /var/lib/waves/data`.
5. Run the node with the following command: `sudo systemctl start waves`.

## Alternative Unpacking Method (Linux)

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
