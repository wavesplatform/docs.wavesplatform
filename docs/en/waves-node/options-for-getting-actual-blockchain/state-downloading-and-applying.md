# Download the Latest Blockchain

A running node requires up-to-date blockchain database for operation.
**blockchain_last.tar** database is generated during node operation when the node gets new blocks.
The node database is stored in the _/var/lib/waves/data_ folder.

## Step-by-Step

To download and implement the latest node blockchain database, complete the followiong steps:

1. [Download](http://blockchain.wavesnodes.com) the database (blockchain_last.tar file) via the link.
2. Run the checksum with some tool to test both files from the link above (checksum of the **blockchain_last.tar** file should be the same as inside **blockchain_last.tar.SHA1SUM** file).
3. Delete the data folder by running the followong command: `sudo rm -rdf /var/lib/waves/data`.
4. Unpack the database files in the following folder: `/var/lib/waves/data`.
5. Run the node with the following command: `sudo systemctl start waves`.

Latest up-to date database can be obtained via one of the following links:

* MainNet: [http://blockchain.wavesnodes.com/](http://blockchain.wavesnodes.com/)
* TestNet: [http://blockchain-testnet.wavesnodes.com/](http://blockchain-testnet.wavesnodes.com/)

**Note**: Please note that the linked files are updated regularly.

## Alternative Unpacking Method

Traditional method of downloading and unpacking requires a lot of disc space. In some cases the disc space is only enough for the blockchain itself and very little extra.
Linux users can save disc space by using one of the following commands to unpack the archive during the downloading, so that the unpacked database files will be saved on disc without storing the archive.

If the node is installed from **DEB** package, run the following commands:

```bash
cd /var/lib/waves
sudo -u waves bash -c "wget -qO- http://blockchain.wavesnodes.com/blockchain_last.tar --show-progress | tar xf -"
```

If the node is running from a **JAR** file, navigate to the folder where the node's database is stored and run the following command:

```bash
wget -qO- http://blockchain.wavesnodes.com/blockchain_last.tar --show-progress | tar xf -
```
