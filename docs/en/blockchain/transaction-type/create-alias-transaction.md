# Create Alias Transaction

Create Alias transaction creates an [alias](/en/blockchain/account/alias) for the sender's address.

A created alias cannot be deleted.

## Fee

The minimum fee for a Create Alias transaction is 0.001 WAVES.

If the transaction sender is a [dApp or smart account](/en/blockchain/account/dapp), the minimum fee is increased by 0.004 WAVES.

Starting from node version 1.3.1, after activation of feature #16 "Ride V5, dApp-to-dApp invocations, Continuations", the extra fee of 0.004 WAVES is only required if the complexity of sender's account script or dApp script verifier function exceeds the [sender complexity threshold](/en/ride/limits/). Versions 1.3.x are currently available for [Stagenet](/en/blockchain/blockchain-network/) only.

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

See the [Create Alias Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/create-alias-transaction-binary-format) article.

## Ride Structure

The [CreateAliasTransaction](/en/ride/structures/transaction-structures/create-alias-transaction) structure is used for transaction handling in smart contracts.
