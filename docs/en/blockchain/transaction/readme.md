# Transaction

A **transaction** is an action on the [blockchain](/en/blockchain/) on behalf of the [account](/en/blockchain/account/).

Transactions can be sent _only_ from an account — thus, any transaction can be associated with some account.

There are several [transaction types](/en/blockchain/transaction-type/).

Each transaction has a [timestamp](/en/blockchain/transaction/transaction-timestamp) and a [unique ID](/en/blockchain/transaction/transaction-id).

All transactions, with the exception of the [genesis transaction](/en/blockchain/transaction-type/genesis-transaction), have [versions](/en/blockchain/transaction/transaction-version).


## JSON-представление транзакции

В [REST API](/ru/waves-node/node-api/) ноды Waves используется JSON-представление транзакции. Пример JSON-представления:

```json
{
    "senderPublicKey":"BVv1ZuE3gKFa6krwWJQwEmrLYUESuUabNCXgYTmCoBt6",
    "sender":"3N8S4UtauvDAzpLiaRyDdHn9muexWHhBP4D",
    "feeAssetId":null,
    "proofs":["22QJfRKX7kUQt4qjdnUqZAnhqukqhnofE27uvP8Q5xnBf8M6PCNtWVGq2ngm6m7Voe7duys59D1yU9jhKrmdXDCe"],
    "fee":100000,
    "alias":"91f452553298770f",
    "id":"AD7KmXwoVNc2fXsmaxsHsrnT1tfPF3HsWYtfjFijVsvM",
    "type":10,
    "version":2,
    "applicationStatus": "succeed",
    "timestamp":1548443069053,
    "height":466104
}
```

| Field | Description |
| :--- | :--- |
| senderPublicKey | Base58 encoded [public key](/en/blockchain/account/#account-public-and-private-keys) of transaction sender |
| *sender* | Base58 encoded [address](/en/blockchain/account/address) of transaction sender |
| feeAssetId | ID of the token of the fee.<br>`null` means that thr fee is in WAVES.<br>For invoke script transactions and transfer transactions, the sender may specify the fee in a sponsored asset, see the [Sponsored Fee](/en/blockchain/waves-protocol/sponsored-fee) article for details |
| proofs | The array of [transaction proofs](/en/blockchain/transaction/transaction-proof) that are used to check the validity of the transaction. The array can contain several transaction signatures (but not limited to signatures only) |
| fee | [Transaction fee](/en/blockchain/transaction/transaction-fee), always integer, in the minimum fraction (“cent”) of the fee asset. For example, if the fee is 0.001 WAVES, 100000 is indicated in the JSON representation |
| *id* | Transaction ID. See the [Calculating Transaction Id](/en/blockchain/waves-protocol/cryptographic-practical-details#calculating-transaction-id) section for details.
| type | Transaction type. Type numbers are listed in the [Transaction Type](/en/blockchain/transaction-type/) article |
| version | Transaction version.<br>Versions for each type of transaction are listed in [transaction binary format](/en/blockchain/binary-format/transaction-binary-format) descriptions |
| applicationStatus | Result of transaction validation:<br>- succeed — transaction is successful.<br>- scriptExecutionFailed — the dApp script or the asset script failed.<br>The field is added in node version 1.2.4, after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. [More about transaction validation](/en/blockchain/transaction/transaction-validation) |
| timestamp | Transaction timestamp specified by sender: Unix time in milliseconds. The transaction cannot be added to the blockchain if the timestamp value is more than 2 hours back or 1.5 hours forward of current block timestamp |
| *height* | The sequence number of the block into which the transaction is added |

The `sender`, `id`, and `height` fields are not needed when sending a transaction, and they are not stored on the blockchain. The node calculates these fields when providing transaction data via the REST API.

> In earlier versions of some types of transactions the `signature` field is used instead of `proofs`.

The fields that depend on the type of transaction are described in the description of each [type of transaction](/en/blockchain/transaction/transaction-type/).

## Binary format

See the page [Transaction binary format](/en/blockchain/binary-format/transaction-binary-format/)
