# Create alias transaction

**Create alias transaction** is a [transaction](/en/blockchain/transaction/) that creates [alias](/en/blockchain/account/alias) for an [address](/en/blockchain/account/address).

> A created alias cannot be deleted

## JSON Representation

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
  "timestamp":1548443069053,
  "height":466104
}
```

| Field | Description |
| :--- | :--- |
| alias | Alias. From 4 to 30 bytes (1 character can take up to 4 bytes) |

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Create Alias Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/create-alias-transaction-binary-format).

## Ride Structure

The [CreateAliasTransaction](/en/ride/structures/transaction-structures/create-alias-transaction) structure is used for transaction handling in smart contracts.
