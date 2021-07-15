# Response Codes and Errors

The table lists Node API response codes.

| Status code | Description |
| :--- | :--- |
| 200 OK | Successful request and response |
| 400 Bad Request | Invalid request parameters |
| 403 Forbidden | API key is wrong or missed in the request to a [private endpoint](/en/waves-node/node-api/#private-endpoints) |
| 404 Not Found | Requested object (block, transaction, alias, entry key of an account data storage, and so on) is not found |
| 429 Too Many Requests | The size of the request queue has exceeded the limit set for [public nodes](/en/waves-node/api-limitations-of-the-pool-of-public-nodes) |
| 500 Internal Server Error | Server Error |
| 501 Not Implemented | Unsupported transaction type |
| 503 Service Unavailable | API is not available, or the node did not manage to process the request in the allotted time (see [Slow requests](/en/waves-node/node-api/slow-requests)), or the number of simultaneous connections has exceeded the limit set for [public nodes](/en/waves-node/api-limitations-of-the-pool-of-public-nodes) |

If 4xx or 501 error occurs, the following structure is returned:

```json
{
  "error": (number),
  "message": "(string)"
}
```

Example:

```json
{
  "error": 10,
  "message": "Too big sequences requested"
}
```

| Error | Message | Comments and possible reasons |
| :--- | :--- | :--- |
| 0 | Error is unknown | |
| 1 | failed to parse json message | • Invalid JSON<br>• Required parameter is missed<br>• Invalid parameter |
| 2 | Provided API key is not correct | API key is wrong or missed in request to a [private endpoint](/en/waves-node/node-api/#private-endpoints) |
| 10 | Too big sequences requested | Exceeded data limit:<br>• Number of requested transactions is greater than the specified in the `waves.rest-api.transactions-by-address-limit` setting<br>• Number of requested blocks is greater than 100<br> • Exceeded the limits for a [Data transaction](/en/blockchain/transaction-type/data-transaction)<br>• Exceeded the length of the `attachment` field for a [Transfer transaction](/en/blockchain/transaction-type/transfer-transaction) or a [Mass Transfer transaction](/en/blockchain/transaction-type/mass-transfer-transaction) |
| 101 | Invalid signature | |
| 102 | Invalid address | |
| 108 | Invalid public key | |
| 110 | Invalid message | Failed to decode message, signature or key for `/addresses/verify/{address}` or `/addresses/verifyText/{address}` endpoint |
| 113 | Overflow error | `fee`+`amount` or the total amount in the Mass Transfer transaction is greater than the maximum [Long](/en/blockchain/blockchain/blockchain-data-types) value |
| 116 | Request contains invalid IDs. id1, id2, ... | Invalid base58 in the list of transaction IDs |
| 199 | ... | Other validation errors |
| 301 | Block does not exist | |
| 302 | • alias '...' doesn't exist<br>• alias for address '...' doesn't exist | |
| 303 | • Transaction timestamp ... is more than ... ms in the future relative to block timestamp ...<br>• Transaction timestamp ... is more than ... ms in the past relative to previous block timestamp ... | |
| 304 | no data for this key | The requested key does not exist in the account data storage |
| 305 | ... | Script compilation error |
| 306 | Error while executing (token\|account)-script: ... | Error while executing an asset script or account script |
| 307 | Transaction is not allowed by account-script | |
| 308 | Transaction is not allowed by token-script | |
| 311 | transactions does not exist | • Asset with the given ID is not found<br>• Transaction with the given ID is not found |
| 312 | transaction type not supported | |
| 400 | Transaction ... is already in the state on a height of ... | Duplicated transaction broadcasted |
| 402 | Accounts balance errors | • The transaction sender does not have enough funds to pay a fee or to transfer<br> • dApp does not have enough funds to complete [actions](/en/ride/structures/script-actions/) (`ScriptTransfer` or `Burn`) |
| 403 | Order validation error: ... | • The amount specified in the order has already been executed<br>• Insufficient fee |
| 404 | Wrong chain-id. Expected - ..., provided - ... | |
| 405 | • Too many proofs (...), only ... allowed<br>• Too large proof (...), must be max ... bytes | |
| 4001 | • Transaction ID was not specified<br>• Wrong char<br>• ... has invalid length .... Length can either be ... or ... | Transaction ID is missed, invalid or has an invalid length |
| 4002 | • Wrong char<br>• ... has invalid length .... Length can either be ... or ... | Block ID is invalid or has an invalid length |
| 4007 | Invalid asset id | |
