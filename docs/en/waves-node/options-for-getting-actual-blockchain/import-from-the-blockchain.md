# Export/Import Blockchain

A running node requires up-to-date blockchain database for operation. The database can be imported from a previously exported binary file.

This article describes the database exporting and importing process.

## Export the Existing Blocks to Binary File

If you have a running Waves node that is synchronized to actual blockchain, you can export the node's blockchain database to a binary file.
Stop the node before exporting. Exporting is quite a fast operation, but the resulting binary file can take up to 1/3 of the data folder size.

To export the existing blocks to a binary file, run the following command:

### On Windows

```bash
java -cp waves-all-<version>.jar com.wavesplatform.Exporter -c [configuration-file-name] -o [output-file-name] -h [height]
```

### On Linux

Mainnet:

```bash
sudo -u waves waves export -c /etc/waves/waves.conf -o [output-file-name] -h [height]
```

Testnet:

```bash
sudo -u waves-testnet waves-testnet export -c /etc/waves-testnet/waves.conf -o [output-file-name] -h [height]
```

The height parameter allows to specify maximum height of the blocks during exporting. If the parameter is not set, all the blocks will be exported.

The output-file-name parameter is optional ('blockchain' is used by default). The resulting export file with the `<output-file-name>-<height>` name will be created in the `data` folder.

## Import Blocks from Binary File

A running node requires up-to-date blockchain database for operation. It is possible to import blockchain database (to increase the speed of the process) instead of automatic node synchronization.

Stop the node before importing.

If the data folder of the node contains some files, the import will continue to append new data from the blockchain's binary file.
It is recommended to delete the existing files to avoid mixing data from different versions that can cause errors.

On Windows, the folder is located here: **%HOMEPATH%\waves\data**

On Linux: **/var/lib/waves[-testnet]/ folder:**

**sudo rm -rdf /var/lib/waves[-testnet]/data**

**Warning**: Importing is a heavy operation that may take several hours to complete.

To import database, run the followiong command:

### On Windows

```bash
java -cp waves-all-<version>.jar com.wavesplatform.Importer -c [configuration-file-name] -i [binary-file-name]
```

### On Linux

Mainnet:

```bash
sudo -u waves waves import -c /etc/waves/waves.conf -i [binary-file-name]
```

Testnet:

```bash
sudo -u waves-testnet waves-testnet import -c /etc/waves-testnet/waves.conf -i [binary-file-name]
```

## Import Blocks Up to a Certain Height

It is possible to set target height. If the height parameter is not set, all the blocks will be impoerted. To import, run the following command:

### On Windows

```bash
java com.wavesplatform.Importer -c <config_file> -i <blockchain_file> -h <height>
```

### On Linux

Mainnet:

```bash
sudo -u waves waves import -c /etc/waves/waves.conf -i /path/to/mainnet-1234688
```

Testnet:

```bash
sudo -u waves-testnet waves-testnet import -c /etc/waves-testnet/waves.conf -i /path/to/testnet-1234688
```
