# Node REST API

The Waves node REST API is the main interface for interacting with the blockchain. The API provides public endpoints and also private endpoints that require authorization using an API key.

## API of Pool of Public Nodes

The Waves team supports node pools with *public* API endpoints accessible to anyone:

* Mainnet: <https://nodes.wavesnodes.com>
* Testnet: <https://nodes-testnet.wavesnodes.com>
* Stagenet: <https://nodes-stagenet.wavesnodes.com>

The interactive documentation of endpoints in Swagger UI is also available on the links above.

You can use public nodes to read blockchain data. Note that the number of simultaneous connections and request rate per IP address are [limited](/en/waves-node/api-limitations-of-the-pool-of-public-nodes) for public nodes. For heavy use of the API, start your own node.

The Waves team **does not provide the API key** for public nodes. If you want to use private endpoints, start your own node.

## API of Your Own Node

By default, the REST API is enabled in node settings and available locally at <http://127.0.0.1:6869>. Interactive documentation in Swagger UI is also available on this link.

You can modify settings or disable the API in the `waves.rest-api` section of the node configuration file, see the [REST API Settings](/en/waves-node/node-configuration#rest-api-settings) section.

To access private endpoints, specify the API key hash in the `waves.rest-api.api-key-hash` parameter, see the instructions in the [API Key](/en/waves-node/node-api) article. For other parameters you can leave the default values.

To provide external access to your node's API, use [Nginx's proxy pass module](http://nginx.org/en/docs/http/ngx_http_proxy_module.html) or [SSH port forwarding](https://blog.trackets.com/2014/05/17/ssh-tunnel-local-and-remote-port-forwarding-explained-with-examples.html). It is also possible to open external access to the API by changing the network address in the configuration parameter `waves.rest-api.bind-address`, however, we do not recommend doing this for security reasons, since the node itself cannot limit the number of connections, request rate, and so on.

## Public Endpoints

Node REST API provides the following features:

* Read the blockchain data:
   * account data: balances, data storage entries, aliases, scripts assigned;
   * token data: parameters, distribution by accounts;
   * active leases;
   * blocks;
   * transactions;
   * other data: feature activation status, block reward voting status etc.
* Operate transactions: broadcast a signed transaction, pre-validate, check the transaction status — see the [How to Operate Transactions in Node REST API](/en/waves-node/node-api/transactions) article.
* Use utilities such as generate an address from a public key, validate an address, generate a random seed, calculate hashes etc.

:bulb: If Node REST API lacks the data you need, check the [Waves Data Services API](/en/building-apps/waves-api-and-sdk/waves-data-service-api).

## Private Endpoints

Private endpoints require authorization using an API key set by the node owner.

Private endpoints provide the ability to:

* Manage accounts in the [node wallet](/en/waves-node/how-to-work-with-node-wallet).
* Sign transactions on behalf of accounts from the node wallet.
* Control the node: stop, rollback, connect to peers.
* Get debug information.
