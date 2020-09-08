# Token ID

**Token ID** is a byte array calculated as follows:
* If the token is issued by [Issue transaction](/en/blockchain/transaction-type/issue-transaction), the token ID is the same as the transaction ID.
* If the token is issued by [Invoke Script transaction](/en/blockchain/transaction-type/invoke-script-transaction) when the callable function of [dApp script](/en/blockchain/account/dapp) performed the [Issue](/en/ride/structures/script-actions/issue) action, the token ID is calculated as the BLAKE2b-256 hash of the byte array containing transaction ID and the fields of the `Issue` structure.

In the [Node REST API](/en/waves-node/node-api/), the token identifier is encoded in [base58](https://en.bitcoin.it/wiki/Base58Check_encoding). For example:

```
 "assetId": "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS"
```

The [WAVES](/en/blockchain/token/waves) token has no identifier. The Node REST API uses `null` for WAVES.
