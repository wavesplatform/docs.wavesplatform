# Reissue Transaction

Reissue transaction increases the amount of the [token](/en/blockchain/token/) on the blockchain and/or prohibits its reissue. Only the token issuer can send a Reissue transaction. The `reissuable` field of token determines whether the token can be reissued.

## Fee

The minimum fee for a Reissue transaction is:
* 0.001 WAVES after the activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.
* 1 WAVES before activation of feature #15.

If the token is a [smart asset](/en/blockchain/token/smart-asset), the minimum fee is increased by 0.004 WAVES.

If the transaction sender is a [dApp or smart account](/en/blockchain/account/dapp), the minimum fee is also increased by 0.004 WAVES.

Starting from node version 1.3.1, after activation of feature #16 "Ride V5, dApp-to-dApp invocations, Continuations", the extra fee of 0.004 WAVES is only required if the complexity of sender's account script or dApp script verifier function exceeds the [sender complexity threshold](/en/ride/limits/). Versions 1.3.x are currently available for [Stagenet](/en/blockchain/blockchain-network/) only.

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
| assetId | Token ID base58 encoded |
| quantity | Amount of token to reissue: an integer value specified in the minimum fraction (“cents”) of token. The total quantity of token as a result of the reissue should not exceed 9,223,372,036,854,775,807 |
| chainId | [Chain ID](/en/blockchain/blockchain-network/#chain-id) |
| reissuable | Reissue availability flag |

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Reissue Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/reissue-transaction-binary-format).

## Ride Structure

The [ReissueTransaction](/en/ride/structures/transaction-structures/reissue-transaction) structure is used for transaction handling in smart contracts.
