# gRPC Server

**gRPC Server** is a [node extension](/en/waves-node/extensions.md)  that allows running [gRPC](https://en.wikipedia.org/wiki/GRPC) services on a [node](/en/blockchain/node.md).

gRPC services provide information about:

* [accounts](/en/blockchain/account.md)
* [blockchain](/en/blockchain/blockchain.md)
* [blocks](/en/blockchain/block.md)
* [tokens](/en/blockchain/token.md)
* [transactions](/en/blockchain/transaction.md)

## Client generation

The clients [generated](https://grpc.io/docs/tutorials/) from [.proto files](https://github.com/wavesplatform/Waves/tree/master/grpc-server/src/main/protobuf) are used to connect to gRPC services.

Examples of usage of gRPC clients generated from .proto files:

* [Connecting to transactions service in Java](https://github.com/wavesplatform/WavesJ/blob/master/examples/src/main/java/GRPCTest.java)
* [Retrieving blocks in C#](https://github.com/wavesplatform/WavesCS/blob/master/WavesCSTests/ProtobufTest.cs)
