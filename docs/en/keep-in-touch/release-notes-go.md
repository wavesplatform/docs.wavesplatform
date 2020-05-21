# Node Go

## Version 0.6.0

Added support for failed transactions. Invoke script transactions and exchange transactions are saved on the blockchain and a fee is charged for them even if the dApp script or the asset script failed, provided that the sender's signature or account script verification passed. [More details](/en/keep-in-touch/april)

This version of Node Go is compatible with [version 1.2.4](https://github.com/wavesplatform/Waves/releases/tag/v1.2.4) of Node Scala.

## Version 0.5.0

Node Go 0.5.0 supports Waves blockchain version 1.2 that is in testing on StageNet now.
The release is aimed at StageNet but can be used for testing on TestNet and MainNet.

 * Full blockchain support of Waves version 1.2
 * Support of RIDE version 4 (except for the script estimation)
 * Detachable wallet and mining
 * Full gRPC API and switchable Extended gRPC API

See full release document at [github](https://github.com/wavesplatform/gowaves/releases/).
