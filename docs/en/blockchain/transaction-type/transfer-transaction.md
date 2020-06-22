# Transfer transaction

A **transfer transaction** is a [transaction](/en/blockchain/transaction/) that transfers a certain amount of the [token](/en/blockchain/token/) from one [account](/en/blockchain/account/) to another.

## JSON Representation

```json
{
  "senderPublicKey": "Cs4DShy4nTx6WyxjKRoDtoYsGhvT663pYLysPCLeVZHE",
  "amount": 15540,
  "signature": "5EaYqFx2xFJmdvwZ1gT3yLecKr88z3jByCj5GE1MjE1ossvehExZKoT7uhGatiYCGM9Co8iUR8Q5ce52XDmno3rn",
  "fee": 100000,
  "type": 4,
  "version": 1,
  "attachment": "3vrgtyozxuY88J9RqMBBAci2UzAq9DBMFTpMWLPzMygGeSWnD7k",
  "sender": "3PN2bVFxJjgudPKqEGZ41TVsD5ZJmxqnPSu",
  "feeAssetId": null,
  "proofs": [
    "5EaYqFx2xFJmdvwZ1gT3yLecKr88z3jByCj5GE1MjE1ossvehExZKoT7uhGatiYCGM9Co8iUR8Q5ce52XDmno3rn"
  ],
  "assetId": "7uncmN7dZfV3fYVvNdYTngrrbamPYMgwpDnYG1bGy6nA",
  "recipient": "3PFmoN5YLoPNsL4cmNGkRxbUKrUVntwyAhf",
  "feeAsset": null,
  "id": "D79kL1Jr5xyL2Rmw2FnafQHugJGvuBhNEbLnhMuwMkDC",
  "timestamp": 1548660895034,
  "height": 1370973
}
```

| Field | Description |
| :--- | :--- |
| assetId | Base58 encoded token ID. `null` means WAVES |
| amount | Amount of token to transfer: integer value specified in the minimum fraction (“cents”) of token |
| attachment | Base58 encoded arbitrary data (typically a comment to transfer), up to 140 bytes |
| recipient | Recipient address base58 encoded or recipient [alias](/en/blockchain/account/alias) |

The `transferCount`, `totalAmount` are not needed when sending a transaction, and they are not stored on the blockchain. The node calculates these fields when providing transaction data via the REST API.

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Transfer Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/transfer-transaction-binary-format).

## Ride Structure

The [TransferTransaction](/en/ride/structures/transaction-structures/transfer-transaction) structure is used for transaction handling in smart contracts.
