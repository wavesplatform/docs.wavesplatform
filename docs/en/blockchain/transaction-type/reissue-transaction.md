# Reissue transaction

A **reissue transaction** is a [transaction](/en/blockchain/transaction/) that increases the amount of the [token](/en/blockchain/token/) on the [blockchain](/en/blockchain/blockchain/) and/or prohibits its reissue.

[Burn transaction](/en/blockchain/transaction-type/burn-transaction) decreases the amount of the token on the blockchain.

## JSON Representation

```json
{
  "senderPublicKey": "DjYEAb3NsQiB6QdmVAzkwJh7iLgUs3yDLf7oFEeuZjfM",
  "quantity": 200000,
  "fee": 100000000,
  "type": 5,
  "version": 2,
  "reissuable": true,
  "sender": "3PLJciboJqgKsZWLj7k1VariHgre6uu4S2T",
  "feeAssetId": null,
  "chainId": 87,
  "proofs": [
    "5mEveeUwBdBqe8naNoV5eAe5vj6fk8U743eHGkhxhs3v9PMsb3agHqpe4EtzpUFdpASJegXyjrGSbynZg557cnSq"
  ],
  "assetId": "GA4gB3Lf3AQdF1vBCbqGMTeDrkUxY7L83xskRx6Z7kEH",
  "id": "27ETigYaHym2Zbdp4x1gnXnZPF1VJCqQpXmhszC35Qac",
  "timestamp": 1548521785933,
  "height": 1368623
}
```

| Field | Description |
| :--- | :--- |
| assetId | Base58 encoded token ID |
| quantity | Amount of token to reissue: integer value specified in the minimum fraction (“cents”) of token. The total amount of token as a result of the reissue should not exceed 9,223,372,036,854,775,807 |
| chainId | [Chain ID](/en/blockchain/blockchain-network/chain-id) |
| reissuable | Reissue availability flag |

The fields that are common to all types of transactions are described in the [JSON Representation](/en/blockchain/transaction/#json-representation) section.

## Binary Format

See the [Reissue Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/reissue-transaction-binary-format).

## Ride Structure

The [ReissueTransaction](/en/ride/structures/transaction-structures/reissue-transaction) structure is used for transaction handling in smart contracts.
