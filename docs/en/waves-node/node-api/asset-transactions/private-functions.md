# Private Functions

All private functions below require API Key to be provided in every HTTP request using `X-Api-Key` header. The default value is `ridethewaves!`. Securely hashed header value is stored in `rest-api.api-key-hash` setting in the waves.conf configuration file. See [API Key](/en/waves-node/node-api/api-key) article and [/utils/hash/secure](/en/waves-node/node-api/utils) method for more information about obtaining hash.

# Приватные функции

The following private functions have been deprecated:

* `POST /assets/issue`
* `POST /assets/transfer`
* `POST /assets/reissue`
* `POST /assets/burn`
* `POST /assets/masstransfer`

Use `POST /transactions/sign` instead, specifying the transaction type in the request body. For details and examples, see the [How to Operate with Transactions](/en/waves-node/transactions) article.
