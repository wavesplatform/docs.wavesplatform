# Waves API

The following APIs are available for Waves:

* [Node REST API](/en/waves-node/node-api/) (described in the “Node” chapter) provides the following features:
   * broadcast a signed transaction to the blockchain
   * obtain account data, token info, transactions, blocks, etc.
   * validate transactions, use various utilities, and much more.

   Each node owner can enable its REST API. The Waves team supports the node pools with the public API.

* [gRPC Server](/en/waves-node/extensions/grpc-server/) (described in the “Node” chapter) is a node extension that allows the node owner to run gRPC services. gRPC Server can obtain information about accounts, tokens, transactions, and blocks, as well as broadcast a signed transaction.

* [Waves Data Service API](/en/building-apps/waves-api-and-sdk/waves-data-service-api) is intended for reading data from the blockchain, including market data on cryptocurrency trading from Exchange transactions, lists of transactions by type, etc.

* [Waves Keeper API](/en/ecosystem/waves-keeper/waves-keeper-api) (described in the “Ecosystem Apps” chapter) enables signing and sending transactions and exchange orders on behalf of a user in a browser with the Waves Keeper extension installed.

* [Waves Signer](/en/building-apps/waves-api-and-sdk/client-libraries/signer) is a TypeScript/JavaScript library that implements an interface for the signature provider library and enables signing and sending transactions on behalf of a user in any browser.

:bulb: Client libraries for various programming languages are listed in the [Client Libraries](/en/building-apps/waves-api-and-sdk/client-libraries/) article.
