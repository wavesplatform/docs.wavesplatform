# Burn transaction

A **burn transaction** is a [transaction](/en/blockchain/transaction/) that decreases the amount of the [token](/en/blockchain/token/) on the [blockchain](/en/blockchain/blockchain/).

Tokens are burned _only_ on the [account](/en/blockchain/account/) of the sender of the transaction. Burned tokens cannot be restored back to the account.

[Reissue transaction](/en/blockchain/transaction-type/reissue-transaction) increases the amount of the token on the blockchain.

## JSON Representation

```json
{
    "senderPublicKey":"9GaQj7gktEiiS1TTTjGbVjU9bva3AbCiawZ11qFZenBX",
    "amount":9999,
    "fee":100000,
    "type":6,
    "version":2,
    "sender":"3P9QZNrHbyxXj8P9VrJZmVu2euodNtA11UW",
    "feeAssetId":null,
    "chainId":87,
    "proofs":["61jCivdv3KTuTY6QHgxt4jaGrXcszWg3vb9TmUR26xv7mjWWwjyqs7X5VDUs9c2ksndaPogmdunHDdjWCuG1GGhh"],
    "assetId":"FVxhjrxZYTFCa9Bd4JYhRqXTjwKuhYbSAbD2DWhsGidQ",
    "id":"csr25XQHT1c965Fg7cY2vJ7XHYVsudPYrUbdaFqgaqL",
    "timestamp":1548660675277,
    "height":1370971
}
```

| Field | Description |
| :--- | :--- |
| amount | Amount of token to burn, integer, specified in the minimum fraction (“cents”) of token |
| assetId | Base58 encoded token ID |

 The fields that are common to all types of transactions are described in the [JSON Representation](/en/blockchain/transaction/#json-representation) section.

## Binary Format

See the [Burn Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/burn-transaction-binary-format).

## Ride Structure

The [BurnTransaction](/en/ride/structures/transaction-structures/burn-transaction) structure is used for transaction handling in smart contracts.
