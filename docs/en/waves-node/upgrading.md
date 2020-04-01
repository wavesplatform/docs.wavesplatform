# Upgrade Waves Node

When you own a node you need to check the [Releases](https://github.com/wavesplatform/Waves/releases/) page for the latest updates on a regular basis and if there is an update that contains any consensus changes, it is required to upgrade your node. Failing to apply the updates that contain consensus changes may cause your node to stop working. Releases of new versions of node come with release notes document describing the new features and telling the node owner what actions to take to upgrade, depending on the type of the update.

Prior to upgrading a Waves Node check the type of installation used. It can be either a **DEB** file (Deb-base GNU/Linux installation) or a **JAR** file (any operating system). Based on the type of installation used, follow one of the procedures below to upgrade the Waves Node. For more details about types of Waves Node installation, see [Install Waves Node](/en/waves-node/how-to-install-a-node/how-to-install-a-node) article.

## Upgrading Node from APT Repository

The most convenient method to install/upgrade Waves Node on Linux is probably by means of APT repository. The repository provides mainnet, testnet and stagenet packages.

For details, see [Installation from APT Repository](/en/waves-node/how-to-install-a-node/on-ubuntu#Installation-from-APT-Repository) section of the node installation article.

## Upgraging JAR Node

To upgrade a **JAR** Node complete the following steps:

1. Run your Node, if it is not currently running, by executing the following command:

   ```bash
   java -jar waves.jar waves.conf
   ```

   **Note:** For more details on running a node, see [How to Install a Node](/en/waves-node/how-to-install-a-node/how-to-install-a-node).

2. Check the current version of your node in `waves.log` file with default location in **/var/log/waves/** or, check the version in the filename of the **JAR** file.
3. Review the [Release](https://github.com/wavesplatform/Waves/releases) page and download the latest (**Mainnet**, **Testnet** or **Stagenet**, depending on the type of your node) release (**JAR** file).
4. Review the release notes and check if the new version requires rebuilding the state database.
5. **Optional step:** If the new version of the Node requires rebuilding the state database, export the existing blocks.
See [Export/Import Blockchain](/en/waves-node/options-for-getting-actual-blockchain/import-from-the-blockchain) and [Download the Latest Blockchain](/en/waves-node/options-for-getting-actual-blockchain/state-downloading-and-applying) articles for detais about exporting/importing blocks.

   **Note:** Exporting/importing blocks is not mandatory but it saves internet data traffic. Otherwise the Node will download all the necessary data from the internet.

6. Stop the node (kill the Waves java process).

7. Replace the old **JAR** file with the downloaded one of the latest version.

8. **Optional step:** If the new version of the Node requires rebuilding the state database, import the binary file. See [Export/Import Blockchain](/en/waves-node/options-for-getting-actual-blockchain/import-from-the-blockchain) for details.

9. Run the node by executing the following command:

   ```bash
   java -jar waves.jar waves.conf
   ```

## Upgrading DEB node

To upgrade a **DEB** Node complete the following steps:

1. Run your node, if it is not currently running, by executing the following command:

   ```bash
   # sudo systemctl start waves
   ```

   **Note:** For more details on running a node, see [How to Install a Node](/en/waves-node/how-to-install-a-node/how-to-install-a-node).

2. Check the current version of your node in **/var/log/waves/waves.log** (default location) or execute the following command:

   ```bash
   # dpkg -l waves
   ```

3. Review the [Release](https://github.com/wavesplatform/Waves/releases) page and download the latest (**Mainnet**, **Testnet** or **Stagenet**, depending on the type of your node) release (**DEB** file).
4. Review the release notes and check if the new version requires rebuilding the state database.
5. **Optional step:** If the new version of the Node requires rebuilding the state database, export the existing blocks.
See [Export/Import Blockchain](/en/waves-node/options-for-getting-actual-blockchain/import-from-the-blockchain) and [Download the Latest Blockchain](/en/waves-node/options-for-getting-actual-blockchain/state-downloading-and-applying) articles for details about exporting/importing blocks.

   **Note:** Exporting/importing blocks is not mandatory but it saves internet data traffic. Otherwise the Node will download all the necessary data from the internet.

6. Stop the Node by executing the following command:

   ```bash
   # sudo systemctl stop waves
   ```

7. Upgrade the existing DEB file by running the following command:

   ```bash
   # sudo dpkg -i waves_X.Y.Z_all.deb
   ```

8. **Optional step:** If the new version of the Node requires rebuilding the state database, import the binary file. See [Export/Import Blockchain](/en/waves-node/options-for-getting-actual-blockchain/import-from-the-blockchain) for details.

9. Run the node by executing the following command:

   ```bash
   # sudo systemctl start waves
   ```

## Update Node Configuration File

See [Node Configuration](/en/waves-node/node-configuration) article for details.
