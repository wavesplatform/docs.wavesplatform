# Deploy Node in Docker

The easiest way to run Waves Node is by means of **Waves Docker container**. It takes just **one command** to enable everything or to change the settings of your node.

## Prerequisites

You need to install the latest version of Docker.

Please, follow the installation steps described on the [Docker website](https://docs.docker.com/engine/installation/).

## About the Image

* The Docker image contains scripts and configs to run Waves Node from **Version 0.13.0** for Testnet, Mainnet or custom networks.
* The image is focused on fast and convenient deployment of Waves Node.
* The container downloads and runs `.jar` file along with configuration files from the [releases section](https://github.com/wavesplatform/Waves/releases).

## Running the Image

It is highly recommended to read more about [Waves Node configuration](/en/waves-node/node-configuration) before running the container.

To start the container, execute the following command:

```bash
docker run -it wavesplatform/node
```

:warning: We recommend to start the container with the following command for **Mainnet**:

```bash
docker run -p 6869:6869 -p 6868:6868 -e WAVES_NETWORK=MAINNET -e WAVES_LOG_LEVEL=DEBUG -e WAVES_HEAP_SIZE=2g -v YOUR_LOCAL_PATH_HERE:/waves wavesplatform/node
```

For **Testnet**:

```bash
docker run -p 6869:6869 -p 6863:6863 -e WAVES_NETWORK=TESTNET -e WAVES_LOG_LEVEL=DEBUG -e WAVES_HEAP_SIZE=2g -v YOUR_LOCAL_PATH_HERE:/waves wavesplatform/node
```

**You can run the container with the following predefined environment variables:**

|Env variable                 |Description   |
|-----------------------------|--------------|
|`WAVES_WALLET_SEED`               |Plain text seed for [node wallet](/en/waves-node/working-with-node-wallet). Container converts it to base58.   |
|`WAVES_WALLET_SEED_BASE58`        |Base58 encoded seed.   |
|`WAVES_WALLET_PASSWORD`           |Password for wallet file.    |
|`WAVES_VERSION`                   |Node version. Default value is `latest`. You can find the list of available versions [here](https://github.com/wavesplatform/Waves/releases).|
|`WAVES_NETWORK`                   |Available values are `MAINNET` and `TESTNET`.   |
|`WAVES_LOG_LEVEL`                 |Node logging level, available values: `OFF`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`. More details about logging are available [here](https://docs.wavesplatform.com/en/waves-node/logging.html).   |
|`WAVES_HEAP_SIZE`                 |Java Heap Size limit in -X Command-line Options notation (`-Xms=[your value]`). More details [here](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html)   |
|`WAVES_CONFIG_FILE`               |Path to your Waves Configuration file.   |
|`WAVES_DECLARED_ADDRESS`          |String with IP address and port to send as external address during handshake. Could be set automatically if UPnP is enabled. If `declared-address` is set, which is the common scenario for nodes running in the cloud, the node will just listen to incoming connections on `bind-address:port` and broadcast its `declared-address` to its peers.|
|`WAVES_AUTODETECT_ADDRESS`        |Set `yes` if you want to get your public address and set value `declared-address` with it.|
|`WAVES_AUTODETECT_ADDRESS_PORT`   |`WAVES_AUTODETECT_ADDRESS` can get only an IP address of the node, but not port number, so define your real port number with this variable.|

**Note**: All the variables are optional.

## Configuration

Depending on the env values the image generates `local.conf` file and stores it in `/waves/configs` directory.
The simple rule of how to set a value in the configuration file:

1. Determine the path to variable in configuration file ([complete configuration file](/en/waves-node/node-configuration)).

2. Join all section names with two underscores (`__`).
3. Replace all dashes with one underscore (`_`).
4. Capitalize the final string.

For instance, if you want to set the value of `waves.rest-api.enable`, pass an environment variable `WAVES__REST_API__ENABLE=no`;
