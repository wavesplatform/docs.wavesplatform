# Burn Transaction

Burn transaction decreases the amount of token on sender's account and thereby the total amount of the token on the blockchain. Any account that owns a token (not necessarily the token issuer) can send the Burn transaction. Burned tokens cannot be restored back to the account.

## Fee

The minimum fee for a Burn transaction is 0.001 WAVES, in case of burning a [smart asset](/en/blockchain/token/smart-asset) 0.005 WAVES.

If the transaction sender is a [dApp or smart account](/en/blockchain/account/dapp), the minimum fee is increased by 0.004 WAVES.

Starting from node version 1.3.1, after activation of feature #16 "dApp-to-dApp invocations, Ride V5", the extra fee of 0.004 WAVES is only required if the complexity of sender's account script or dApp script verifier function exceeds the [sender complexity threshold](/en/ride/limits/). Versions 1.3.x are currently available for [Stagenet](/en/blockchain/blockchain-network/) only.

## JSON Representation

```json
{
  "senderPublicKey": "9GaQj7gktEiiS1TTTjGbVjU9bva3AbCiawZ11qFZenBX",
  "amount": 9999,
  "fee": 100000,
  "type": 6,
  "version": 2,
  "sender": "3P9QZNrHbyxXj8P9VrJZmVu2euodNtA11UW",
  "feeAssetId": null,
  "chainId": 87,
  "proofs": [
    "61jCivdv3KTuTY6QHgxt4jaGrXcszWg3vb9TmUR26xv7mjWWwjyqs7X5VDUs9c2ksndaPogmdunHDdjWCuG1GGhh"
  ],
  "assetId": "FVxhjrxZYTFCa9Bd4JYhRqXTjwKuhYbSAbD2DWhsGidQ",
  "id": "csr25XQHT1c965Fg7cY2vJ7XHYVsudPYrUbdaFqgaqL",
  "timestamp": 1548660675277,
  "height": 1370971
}
```

| Field | Description |
| :--- | :--- |
| amount | Amount of token to burn: an integer value specified in the minimum fraction (“cents”) of token |
| assetId | Token ID base 58 encoded |
| chainId | [Chain ID](/en/blockchain/blockchain-network/#chain-id) |

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Burn Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/burn-transaction-binary-format) article.

## Ride Structure

The [BurnTransaction](/en/ride/structures/transaction-structures/burn-transaction) structure is used for transaction handling in smart contracts.
