# Waves API

The following APIs are available for Waves:

* [Node REST API](/en/waves-node/node-api/) (described in the “Node” chapter) provides the following features:
   * broadcast a signed transaction to the blockchain
   * obtain account data, token info, transactions, blocks, etc.
   * validate transactions, use various utilities, and much more.

   Each node owner can enable its REST API. The Waves team supports the node pools with the public API.

* [Waves Data Service API](/en/building-apps/waves-api-and-sdk/waves-data-service-api) is intended for reading data from the blockchain, including market data on cryptocurrency trading from Exchange transactions, lists of transactions by type and variety of filters, etc.

* [gRPC Server](/en/waves-node/extensions/grpc-server/) (described in the “Node” chapter) is a node extension that lets the node owner to run gRPC services. gRPC Server can obtain information about accounts, tokens, transactions, and blocks, as well as broadcast a signed transaction.

* [Blockchain Updates](/en/waves-node/extensions/blockchain-updates) (described in the “Node” chapter) is a node extension for tracking changes made by each transaction: in account balances, in data storages, in token parameters and other.

* [Waves Keeper API](/en/ecosystem/waves-keeper/waves-keeper-api) (described in the “Ecosystem Apps” chapter) enables signing and sending transactions and exchange orders on behalf of a user in a browser with the Waves Keeper extension installed.

* [Waves Signer](/en/building-apps/waves-api-and-sdk/client-libraries/signer) is a TypeScript/JavaScript library that implements the interface for the signature provider library and enables signing and sending transactions on behalf of a user in any browser.

:bulb: Client libraries for various programming languages are listed in the [Client Libraries](/en/building-apps/waves-api-and-sdk/client-libraries/) article.

## Which API to use

Different APIs are suitable for getting different blockchain data.

| Data | Solution |
| :--- | :--- |
| **Balances** | |
| Current account balance | [Node REST API](/en/waves-node/node-api/) or [gRPC Server](/en/waves-node/extensions/grpc-server/) |
| Changing the balance by blockchain height | [Blockchain Updates](/en/waves-node/extensions/blockchain-updates) |
| **Tokens (assets)** | |
| Token fields, including ticker; token search by ticker | [Data Service API](/en/building-apps/waves-api-and-sdk/waves-data-service-api) |
| Asset balance distribution to addresses | [Node REST API](/en/waves-node/node-api/) |
| Changes in token parameters (as a result of reissue/burning, sponsorship setup, etc.) | [Blockchain Updates](/en/waves-node/extensions/blockchain-updates) |
| **Exchange** | |
| Exchange data for a pair of tokens: the last price, market data for 24 hours, candles | [Data Service API](/en/building-apps/waves-api-and-sdk/waves-data-service-api) |
| **Transactions** | |
| List of transactions by address | [Node REST API](/en/waves-node/node-api/) or [gRPC Server](/en/waves-node/extensions/grpc-server/) |
| Transaction status (confirmed/unconfirmed) | [Node REST API](/en/waves-node/node-api/) or [gRPC Server](/en/waves-node/extensions/grpc-server/) |
| Result of the Invoke Script transaction | [Node REST API](/en/waves-node/node-api/) or [gRPC Server](/en/waves-node/extensions/grpc-server/) |
| Search for transactions by type and filters | [Data Service API](/en/building-apps/waves-api-and-sdk/waves-data-service-api) |
| Changes performed by each transaction | [Blockchain Updates](/en/waves-node/extensions/blockchain-updates) |
| **Entries in account data storages** | |
| Current record values | [Node REST API](/en/waves-node/node-api/) or [gRPC Server](/en/waves-node/extensions/grpc-server/) |
| Changing entries | [Blockchain Updates](/en/waves-node/extensions/blockchain-updates) |
| **Lease** | |
| Active leases | [Node REST API](/en/waves-node/node-api/) or[gRPC Server](/en/waves-node/extensions/grpc-server/) |
| Changing leases | [Blockchain Updates](/en/waves-node/extensions/blockchain-updates) |
