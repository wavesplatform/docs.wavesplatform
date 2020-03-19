# gRPC Server

**gRPC Server** is a [node extension](/en/waves-node/extensions)  that allows running [gRPC](https://en.wikipedia.org/wiki/GRPC) services on a [node](/en/blockchain/node).  gRPC interaface can be used to run apps on your own node.

gRPC services provide information about:

* [accounts](/en/blockchain/account)
* [blockchain](/en/blockchain/blockchain)
* [blocks](/en/blockchain/block)
* [tokens](/en/blockchain/token)
* [transactions](/en/blockchain/transaction)

## Client Generation

The clients [generated](https://grpc.io/docs/tutorials/) from [.proto files](https://github.com/wavesplatform/protobuf-schemas) are used to connect to gRPC services.

Examples of usage of gRPC clients generated from .proto files:

* [Connecting to transactions service in Java](https://github.com/wavesplatform/WavesJ/blob/master/examples/src/main/java/GRPCTest.java)
* [Retrieving blocks in C#](https://github.com/wavesplatform/WavesCS/blob/master/WavesCSTests/ProtobufTest.cs)

## gRPC Server Installation

The [gRPC Server](/en/waves-node/extensions/grpc-server) extension can be installed on the [node](/en/blockchain/node) by two methods: using Deb package or ZIP file.

### Installation via Deb Package

1. Download deb package from the Releases page (Assets section) on [Github](https://github.com/wavesplatform/Waves/releases). For the [Mainnet](/en/blockchain/blockchain-network/main-network) it is grpc-server\_{version number}\_all.deb file, for [test network](/en/blockchain/blockchain-network/test-network) it is grpc-server-testnet\_{version number}\_all.deb.

2. Install the package using the command:

   ```bash
   sudo dpkg -i grpc-server_{version number}_all.deb
   ```

3. Add the following string to the configuration file:

   ```bash
   waves.extensions += com.wavesplatform.api.grpc.GRPCServerExtension
   ```

For the main network, the configuration file is located at `/etc/waves/waves.conf`, for the test network at `/etc/waves-testnet/waves.conf`.

4. Restart the node.

If the node is running in the main network, run the command:

   ```bash
   sudo systemctl restart waves
   ```

If the node is running in the test network, run the command:

   ```bash
   sudo systemctl restart waves-testnet
   ```

### Installation via ZIP File

1. Download grpc-server-{version number}.zip file from Releases page (Assets section) [on Github](https://github.com/wavesplatform/Waves/releases).
2. Unpack the archive to the directory containing node's JAR-file.
3. Create a new configuration file or open the existing one and add to it the following string:

   ```bash
   waves.extensions += com.wavesplatform.api.grpc.GRPCServerExtension
   ```

4. Run command:

   ```bash
   java -cp 'waves-all-1.0.0.jar:grpc-server-1.0.0/lib/*' com.wavesplatform.Application {configuration file name}.conf
   ```
