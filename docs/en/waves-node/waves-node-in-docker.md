# Deploy Node in Docker

The easiest way to run Waves node is by means of **Waves Docker container**. Waves Docker image is focused on fast and convenient deployment of Waves Node and contains scripts and configs to run the node in Mainnet, Testnet, Stagenet or any other custom network.

## Prerequisites

Install Docker app from [Docker website](https://docs.docker.com/engine/installation/).

<!--- ## Building Docker Image Scenarios

There are the following scenarios of building Waves Docker image:

* Image with Waves Node of latest released version available.
**Note**: Pre-releases are skipped.
Use the following command:

   ```bash
   docker build -t wavesplatform/wavesnode
   ```

* Image with Waves Node of a version existing in [GitHub Releases](https://github.com/wavesplatform/Waves/releases).
Use the following command:

   ```bash
   docker build --build-arg WAVES_VERSION=1.1.1
   ```

* Image with Waves Node from Git branch. Use `WAVES_VERSION` build argument to specify a Git tag ('v' is added automatically) and `BRANCH` argument to specify a branch to checkout. Make sure to specify a tag that does not exist in GitHub Releases repo, otherwise use previous scenario.
Use the following command:

   ```bash
   docker build --build-arg WAVES_VERSION=99.99.99 --build-arg BRANCH=version-0.17.x
   ```

You can specify the following arguments when building the image:

| Argument | Default Value | Description |
|----------|---------------|---------------------------------------------|
| WAVES_NETWORK | mainnet | Waves Blockchain network. The available values are `mainnet`, `testnet` and `stagenet`. Can be overridden in a runtime using environment variable with the same name. |
| WAVES_VERSION | latest | A node version which corresponds to the Git tag that you want to use/create. |
| BRANCH | version-0.17.x | Relevant if the Git tag 'v WAVES_VERSION' does not exist in the public repository. This option represents a Git branch to be used to compile Waves node and set a Git tag on. |
| SBT_VERSION | 1.2.8 | Scala build tool version. |
| WAVES_LOG_LEVEL | DEBUG | Default Waves Node log level. The available values are `OFF`, `ERROR`, `WARN`, `INFO`, `DEBUG` and `TRACE`. Can be overridden in a runtime using environment variable with the same name. [Read more about logging](/en/waves-node/logging-configuration). |
| WAVES_HEAP_SIZE | 2g | Default Waves Node JVM Heap Size limit in -X Command-line Options notation (-Xms=[your value]). Can be overridden in a runtime using environment variable with the same name. [Read more about -X Command-line Options](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html). | --->

## Running the Image

It is recommended to learn about Waves node configuration in [Node Configuration](/en/waves-node/node-configuration) article before running the container.

### Configuration Options

* You can run an image with customized config parameters by using corresponding JVM options. Use `JAVA_OPTS` environment variable to send options to JVM. Refer to [example configuration file](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/application.conf) to get the full path of the configuration parameters that you want to change.

**Example of command running image with customized config parameters**:

   ```bash
   docker run -v /docker/waves/waves-data:/var/lib/waves -v /docker/waves/waves-config:/etc/waves -p 6869:6869 -p 6862:6862 -e JAVA_OPTS="-Dwaves.rest-api.enable=yes -Dwaves.rest-api.bind-address=0.0.0.0 -Dwaves.wallet.password=myWalletSuperPassword" -e WAVES_NETWORK=stagenet -ti wavesplatform/wavesnode
   ```

Waves Nodes store configuration file (by default) in `/etc/waves/waves.conf` directory. You can mount the directory with Docker volumes. See [Managing Data](#managing-data) section for more details about Docker volumes mapping.

If the directory does not exist, the directory and default configuration file will be created. Default configuration file is used depending on type of network specified by `WAVES_NETWORK` environment variable. If the value of `WAVES_NETWORK` is not `mainnet`, `testnet` or `stagenet`, the default configuration will not be used. This is the case of using `CUSTOM` network type that requires correct configuration file. If you use `CUSTOM` network and the `/etc/waves/waves.conf` is NOT found, the container will not run.

By default, the `/etc/waves/waves.conf` config includes `/etc/waves/local.conf`. Custom `/etc/waves/local.conf` can be used to override default config parameters. Custom `/etc/waves/waves.conf` can be used to override the whole node configuration.

### Environment Variables

You can override parameters specified in the node configuration file by running your container with the following optional environment variables:

| Environment Variable | Description |
|----------------------|-------------------------------------------------|
| WAVES_WALLET_SEED | Base58 encoded seed. Overrides `-Dwaves.wallet.seed` JVM config parameter. |
| WAVES_WALLET_PASSWORD | Password for the wallet file. Overrides `-Dwaves.wallet.password` JVM config parameter. |
| WAVES_LOG_LEVEL | Node logging level. Available values: `OFF`, `ERROR`, `WARN`, `INFO`, `DEBUG` and `TRACE`. [Read more about logging](/en/waves-node/logging-configuration). |
| WAVES_HEAP_SIZE | Default Java Heap Size limit in -X Command-line Options notation (-Xms=[your value]). [Read more about -X Command-line Options](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html). |
| WAVES_NETWORK | Waves Blockchain network. The available values are `mainnet`, `testnet` and **stagenet**. |
| JAVA_OPTS | Additional Waves Node JVM configuration parameters. |

### Managing Data

It is recommended to store the blockchain state as well as node configuration on the host side. Consider using [Docker volumes](https://docs.docker.com/storage/volumes/) mapping to map host directories inside the container.

**Example**:

* Create directories to store Waves data with the following commands:

   ```bash
   mkdir -p /docker/waves
   ```

   ```bash
   mkdir /docker/waves/waves-data
   ```

   ```bash
   mkdir /docker/waves/waves-config
   ```

* Once the container is launched it will automatically create the following subdirectories in `/docker/waves/waves-data` directory:

   `/docker/waves/waves-data/log` - for Node logs

   `/docker/waves/waves-data/data` - for Blockchain state

   `/docker/waves/waves-data/wallet` - for Wallet data

   It will also create default configuration file `/docker/waves/waves-config/waves.conf`

   If you already have node configuration file or other data you can place it in the corresponding directory.

* To run the container you need to configure access permissions. Use `waves` user with predefined uid/gid `143/143`. To do so, change the permissions of the created directories or change their owner with the following command:

   ```bash
   sudo chown -R 143:143 /docker/waves
   ```

   or

   ```bash
   sudo chmod -R 777 /docker/waves
   ```

* Add appropriate arguments to `docker run` command similar to the following example:

   ```bash
   docker run -v /docker/waves/waves-data:/var/lib/waves -v /docker/waves/waves-config:/etc/waves -e WAVES_NETWORK=stagenet -e WAVES_WALLET_PASSWORD=myWalletSuperPassword -ti wavesplatform/wavesnode
   ```

### Blockchain State

If you are new to Waves Blockchain and running node for the first time be aware that after the launch the node will start downloading blockchain state from other nodes. This takes much time. During downloading the node will be verifying all the blocks one after another.

You can speed this process up by downloading a compressed blockchain state from our official resources, extracting and mounting it inside the container (as described in [Managing Data](#managing-data) section). In this scenario the node skips block verifying so the process takes less time. This is also the reason why you must download blockchain state only from our official resources:

| Network | Link |
|---------|---------------------------------------------------------|
| mainnet | http://blockchain.wavesplatform.com/blockchain_last.tar |
| testnet | http://blockchain-testnet.wavesplatform.com/blockchain_last.tar |
| stagenet | http://blockchain-stagenet.wavesplatform.com/blockchain_last.tar |

**Note**: We do not guarantee the state consistency if it is downloaded from third parties.

**Example of commands to download blockchain state and run Docker image**:

```bash
mkdir -p /docker/waves/waves-data
```

```bash
wget -qO- http://blockchain-stagenet.wavesplatform.com/blockchain_last.tar --show-progress | tar -xvf - -C /docker/waves/waves-data
```

```bash
chown -R 143:143 /docker/waves/waves-data
```

```bash
docker run -v /docker/waves/waves-data:/var/lib/waves wavesplatform/Node -e WAVES_NETWORK=stagenet -e WAVES_WALLET_PASSWORD=myWalletSuperPassword -ti wavesplatform/wavesnode
```

### Network Ports

Node REST API parameters can be specified in [REST API section](/en/waves-node/node-configuration#rest-api-settings) of the node configuration file. Node communication port for incoming connections can be specified in [Network Settings section](/en/waves-node/node-configuration#network-settings) of the node configuration file.

**The following example command runs image with**:

* REST-API port enabled and configured on the socket `0.0.0.0:6870`
* Waves node communication port enabled and configured on the socket `0.0.0.0:6868`
* Ports `6868` and `6870` are mapped from the host to the container

```bash
docker run -v /docker/waves/waves-data:/var/lib/waves -v /docker/waves/waves-config:/etc/waves -p 6870:6870 -p 6868:6868 -e JAVA_OPTS="-Dwaves.network.declared-address=0.0.0.0:6868 -Dwaves.rest-api.port=6870 -Dwaves.rest-api.bind-address=0.0.0.0 -Dwaves.rest-api.enable=yes" -e WAVES_WALLET_PASSWORD=myWalletSuperPassword -ti  wavesplatform/wavesnode
```

**Note**: By default the REST API port is 6869. The default network port depends on the type of network (MAINNET - 6868, STAGENET - 6862, TESTNET/custom - 6863).

To check that the REST API is up, navigate to the following URL from the host side: http://localhost:6870/api-docs/index.html

### Extensions

You can run custom extensions as follows:

1. Copy all lib/*.jar files from extension to any directory, for example `plugins`.

2. Add extension class in the node configuration file (for example in `local.conf`):

   ```bash
   waves.extensions += com.johndoe.WavesExtension
   ```

3. Run the image with the following command:

   ```bash
   docker run -v "$(pwd)/plugins:/usr/share/waves/lib/plugins" -v "$(pwd)/local.conf:/etc/waves/local.conf" -i wavesplatform/wavesnode
   ```
