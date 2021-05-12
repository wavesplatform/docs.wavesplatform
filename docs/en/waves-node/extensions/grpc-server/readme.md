# gRPC Server

**gRPC Server** is a [node extension](/en/waves-node/extensions/) that allows running [gRPC](https://en.wikipedia.org/wiki/GRPC) services on a [node](/en/blockchain/node/). gRPC interaface can be used to run apps on your own node.

gRPC services provide information about:

* [accounts](/en/blockchain/account/)
* [blockchain](/en/blockchain/blockchain/)
* [blocks](/en/blockchain/block/)
* [tokens](/en/blockchain/token/)
* [transactions](/en/blockchain/transaction/)

## Client Generation

The clients [generated](https://grpc.io/docs/tutorials/) from [.proto files](https://github.com/wavesplatform/protobuf-schemas) are used to connect to gRPC services.

Example of usage of gRPC client generated from .proto files: [Retrieving blocks in C#](https://github.com/wavesplatform/WavesCS/blob/master/WavesCSTests/ProtobufTest.cs)

## gRPC Server Installation

The [gRPC Server](/en/waves-node/extensions/grpc-server/) extension can be installed on the [node](/en/blockchain/node/) by two methods: using DEB package or TGZ archive.

### Installation via DEB Package

1. Download the latest version of the DEB package from the [Releases](https://github.com/wavesplatform/Waves/releases) page (Assets section).

   The extension package name is as follows:

   • for Mainnet `grpc-server_{version number}_all.deb`

   • for Testnet `grpc-server-testnet_{version number}_all.deb`

   • for Stagenet `grpc-server-stagenet_{version number}_all.deb`

2. Install the package.

   Mainnet:

   ```bash
   sudo dpkg -i grpc-server_{version number}_all.deb
   ```

   Testnet:

   ```bash
   sudo dpkg -i grpc-server-testnet_{version number}_all.deb
   ```

   Stagenet:

   ```bash
   sudo dpkg -i grpc-server-stagenet_{version number}_all.deb
   ```

3. Edit the node configuration file as described in the [Node Configuration](/en/waves-node/node-configuration) article. For Mainnet, the configuration file is located at `/etc/waves/waves.conf`, for Testnet at `/etc/waves-testnet/waves.conf`, for Stagenet at `/etc/waves-stagenet/waves.conf`.

   3.1. Add gRPC Server to the `waves.extensions` section:

   ```
   waves {
      ...
      extensions = [
         com.wavesplatform.events.GRPCServerExtension
      ]
   }
   ```

   3.2. If you want to change the port for client connection (default is 6870), add the following setting:

   ```
   waves {
      ...
      grpc {
         port = 6877 # Specify port
   }
   ```

4. Restart the node.

   Mainnet:

   ```bash
   sudo systemctl restart waves
   ```

   Testnet:

   ```bash
   sudo systemctl restart waves-testnet
   ```

   Stagenet:

   ```bash
   sudo systemctl restart waves-testnet
   ```

### Installation via TGZ Archive

1. Download the TGZ archive with the extension from the [Releases](https://github.com/wavesplatform/Waves/releases) page (Assets section) on Github.

   The TGZ archive name is as follows:

   • for Mainnet `grpc-server-{version number}.tgz`

   • for Testnet `grpc-server-testnet-{version number}.tgz`

   • for Stagenet `grpc-server-stagenet-{version number}.tgz`

2. Unpack the archive to the directory containing node's JAR-file.

3. Create a new configuration file or open the existing one, see the [Node Configuration](/en/waves-node/node-configuration) article.
   
   3.1. Add gRPC Server to the `waves.extensions` section:

   ```
   waves {
      ...
      extensions = [
         com.wavesplatform.events.GRPCServerExtension
      ]
   }
   ```

   3.2. If you want to change the port for client connection (default is 6870), add the following setting:

   ```
   waves {
      ...
      grpc {
         port = 6877 # Specify port
   }
   ```


4. Run the command:

   Mainnet

   ```bash
   java -cp 'waves-all-{version number}.jar:grpc-server-{version number}/lib/*' com.wavesplatform.Application {configuration file name}.conf
   ```

   Testnet:

   ```bash
   java -cp 'waves-all-{version number}.jar:grpc-server-testnet-{version number}/lib/*' com.wavesplatform.Application {configuration file name}.conf
   ```

   Stagenet:

   ```bash
   java -cp 'waves-all-{version number}.jar:grpc-server-stagenet-{version number}/lib/*' com.wavesplatform.Application {configuration file name}.conf
   ```

   On Windows, use `;` instead of `:`, for example:

   ```bash
   java -cp 'waves-all-{version number}.jar;grpc-server-{version number}/lib/*' com.wavesplatform.Application {configuration file name}.conf

## gRPC on Public Nodes

The Waves team provides node pools with public gRPC services:

* Mainnet: https://nodes.wavesnodes.com:6870
* Testnet: https://nodes-testnet.wavesnodes.com:6870
* Stagenet: https://nodes-stagenet.wavesnodes.com:6870

The maximum number of simultaneous connections per IP address is 5. The maximum number of the requests per second (r/s) from IP address is 20.
