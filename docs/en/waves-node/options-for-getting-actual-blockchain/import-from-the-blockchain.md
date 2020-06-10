# Import/Export Blockchain

A running node requires up-to-date blockchain database for operation. You can speed up (by ~10%) your node synchronization process by [importing blockchain from binary file](#import-blockchain-from-binary-file) rather than synchronizing your blockchain state during regular node operation. Binary files contain chain of transaction blocks in verifiable format (include the original sequence of all the transactions with signatures and blocks with signatures of the block generators).

If you have a running Waves node that is synchronized to current state, you can [export your blockchain to a binary file](#export-blockchain-to-binary-file).

## Import Blockchain from Binary File

Importing blockchain from binary file causes CPU load and can take 1-3 days to complete. The process implies the same execution of every transaction that happens during normal node operation. That includes validation of signatures, balances etc.

**Note**: By default the blockchain data is stored in `data` folder in [base application directory](/en/waves-node/node-configuration#default-application-directory) and if it contains files, the import will continue to append new data from the binary file. It is recommended to empty the `data` folder prior to importing to avoid errors caused by mixing data from different versions.

To import blockchain, do the following:

1. Stop the node with `service waves stop` command.

2. Execute the following console command:
  
   <details>
    <summary>On Windows</summary>

      ```java -cp waves-all-<version>.jar com.wavesplatform.Importer -c [configuration-file-name] -i [binary-file-name]```
   </details>

   <details>
    <summary>On Linux</summary>

    Mainnet:
      ```sudo -u waves waves import -c /etc/waves/waves.conf -i [binary-file-name]```

    Testnet:
      ```sudo -u waves-testnet waves-testnet import -c /etc/waves-testnet/waves.conf -i [binary-file-name]```
   </details>

   <details>
    <summary>On Mac</summary>

      ```java -cp waves-all-<version>.jar com.wavesplatform.Importer -c [configuration-file-name] -i [binary-file-name]```

   </details>

Use the name of the desired binary file instead of ```binary-file-name```. For example, use ```mainnet_last``` to import the latest Mainnet blockchain. Follow the links below to see the names of other binary files available for import.

   <details>
     <summary>Latest Downloadable Database (current state from nodes.wavesnodes.com)</summary>
  
     * Mainnet: [http://blockchain.wavesnodes.com/](http://blockchain.wavesnodes.com/)
     * Testnet: [http://blockchain-testnet.wavesnodes.com/](http://blockchain-testnet.wavesnodes.com/)
     * Stagenet: [http://blockchain-stagenet.wavesnodes.com/](http://blockchain-testnet.wavesnodes.com/)
   </details>

**Note**: You can speed up the import by 5-20% at your own risk. To do so, use ```-no-verify``` importer option to turn off block and transaction validation. Use with caution and only if you trust the blockchain binary file.

### Import Blockchain Up to a Certain Height

It is possible to set target height. If the `height` parameter is not set, all the blocks will be imported.

To import blockchain up to a ceratin height, do the following:

1. Stop the node with `service waves stop` command before importing.

2. Execute the following console command:

   <details>
    <summary>On Windows</summary>

      ```java com.wavesplatform.Importer -c <config_file> -i <blockchain_file> -h <height>```
   </details>

   <details>
    <summary>On Linux</summary>

    Mainnet:
      ```sudo -u waves waves import -c /etc/waves/waves.conf -i /path/to/mainnet-1234688```
  
    Testnet:
      ```sudo -u waves-testnet waves-testnet import -c /etc/waves-testnet/waves.conf -i /path/to/testnet-1234688```

   </details>

   <details>
    <summary>On Mac</summary>

      ```java com.wavesplatform.Importer -c <config_file> -i <blockchain_file> -h <height>```
   </details>

## Export Blockchain to Binary File

If you have a running Waves node that is synchronized to current state, you can export the node's blockchain to a binary file.
Exporting is quite a fast operation, but the resulting binary file can take up to 1/3 of the `data` folder size.

To export the existing blockchain to a binary file, do the following:

1. Stop the node with `service waves stop` command before exporting.

2. Execute the following console command:

   <details>
    <summary>On Windows</summary>

      ```java -cp waves-all-<version>.jar com.wavesplatform.Exporter -c [configuration-file-name] -o [output-file-name] -h [height]```
   </details>

      <details>
    <summary>On Linux</summary>

    Mainnet:
      ```sudo -u waves waves export -c /etc/waves/waves.conf -o [output-file-name] -h [height]```

    Testnet:
      ```sudo -u waves-testnet waves-testnet export -c /etc/waves-testnet/waves.conf -o [output-file-name] -h [height]```
   </details>

      <details>
    <summary>On Mac</summary>

      ```java -cp waves-all-<version>.jar com.wavesplatform.Exporter -c [configuration-file-name] -o [output-file-name] -h [height]```
   </details>

The `height` parameter allows to specify maximum height of the blocks during exporting. If the parameter is not set, all the blocks will be exported.

The `output-file-name` parameter is optional ('blockchain' is used by default). The resulting export file with the `<output-file-name>-<height>` name will be created in the `data` folder.
