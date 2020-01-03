# gRPC Server installation

The [gRPC Server](/en/waves-node/extensions/grpc-server) extension can be installed on the [node](/en/blockchain/node) by two methods: using [deb package](https://en.wikipedia.org/wiki/Deb_%28file_format%29) or using ZIP file.

## Installation via deb package

1. Download deb package from the Releases page (Assets section) on [Github](https://github.com/wavesplatform/Waves/releases). For the [main network](/en/blockchain/blockchain-network/main-network) it is grpc-server\_{version number}\_all.deb file, for [test network](/en/blockchain/blockchain-network/test-network) it is grpc-server-testnet\_{version number}\_all.deb.

2. Install the package using the command:

``` console
sudo dpkg -i grpc-server_{version number}_all.deb
```

3. Add the following string to the configuration file:

``` console
waves.extensions += com.wavesplatform.api.grpc.GRPCServerExtension
```

For the main network, the configuration file is located at /etc/waves/waves.conf, for the test network at /etc/waves-testnet/waves.conf.

4. Restart the node.

If the node is running in the main network, run the command:

``` console
sudo systemctl restart waves
```

If the node is running in the test network, run the command:

``` console
sudo systemctl restart waves-testnet
```

## Installation via ZIP file

1. Download grpc-server-{version number}.zip file from Releases page (Assets section) [on Github](https://github.com/wavesplatform/Waves/releases).
2. Unpack the archive to the directory containing node's JAR-file.
3. Create a new configuration file or open the existing one and add to it the following string:

``` console
waves.extensions += com.wavesplatform.api.grpc.GRPCServerExtension
```

4. Run command:

``` console
java -cp 'waves-all-1.0.0.jar:grpc-server-1.0.0/lib/*' com.wavesplatform.Application {configuration file name}.conf
```
