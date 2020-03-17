# Install Waves Node

The methods to install Waves node are explained in this article.

## System Requirements

| Minimal requirements for | CPU | RAM | SSD |
| :--- | :--- | :--- | :--- | :--- |
|[Validating node](/en/blockchain/node/validating-node) | 2 | 4Gb | 60Gb SSD |
|[Mining node](/en/blockchain/node/mining-node) | 2+ | 4+ Gb | 60+ Gb SSD |

### Docker Container

The easiest way to run Waves node on `macOS`, `Windows` or `Linux` machine is by means of Waves Docker container. You install the Docker app and then use console commands to run the node or change the node settings. For details, see [Deploy Node in Docker](/en/waves-node/waves-node-in-docker) article.

### Jar or Deb Package

The other way is to [download the latest version](https://github.com/wavesplatform/Waves/releases) of `.jar` or `.deb` package (depending on your OS) and the required `.conf` configuration file to your machine and run the app with console commands.

More specific steps depend on your operating system:

* [macOS](/en/waves-node/how-to-install-a-node/on-mac)
* [Windows](/en/waves-node/how-to-install-a-node/on-windows)
* [Ubuntu](/en/waves-node/how-to-install-a-node/on-ubuntu)

For details about configuration file, see [Node Configuration](/en/waves-node/node-configuration) article.

### SBT Package

You can install Waves node from your own DEB or JAR package. Such package can be built from Waves node source files (from Git repository) by means of SBT (Scala Build Tool). For details, see [Install from Source (Building SBT)](/en/waves-node/how-to-build-and-test-a-node.md) article.

### Clouds

You can use all of the available methods described in this guide to install Waves node on any cloud-based virtual machine that meets the [system requirements](system-requirements). For details, see [Deploy Node in Cloud](/en/waves-node/how-to-install-a-node/clouds) article.
