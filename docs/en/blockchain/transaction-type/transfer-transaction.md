# Transfer Transaction

Transfer transaction transfers a certain amount of token to another account.

## Fee

The minimum fee for a Transfer transaction is 0.001 WAVES, in case of transferring a [smart asset](/en/blockchain/token/smart-asset) 0.005 WAVES.

If the transaction sender is a [dApp or smart account](/en/blockchain/account/dapp), the minimum fee is increased by 0.004 WAVES.

Starting from node version 1.3.1, after activation of feature #16 "Ride V5, dApp-to-dApp invocations, Continuations", the extra fee of 0.004 WAVES is only required if the complexity of sender's account script or dApp script verifier function exceeds the [sender complexity threshold](/en/ride/limits/). Versions 1.3.x are currently available for [Stagenet](/en/blockchain/blockchain-network/) only.

The sender can specify a transaction fee nominated in a sponsored asset instead of WAVES, see the [Sponsored Fee](/en/blockchain/waves-protocol/sponsored-fee) article.

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
| assetId | Token ID base58 encoded. `null` means WAVES |
| amount | Amount of token to transfer: an integer value specified in the minimum fraction (“cents”) of token |
| attachment | Arbitrary binary data (typically a comment to transfer) base58 encoded, up to 140 bytes |
| recipient | Recipient address base58 encoded or recipient [alias](/en/blockchain/account/alias) with `alias:<chain_id>:` prefix, for example `alias:T:merry` (see [Chain ID](/en/blockchain/blockchain-network/#chain-id)) |

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Transfer Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/transfer-transaction-binary-format).

## Ride Structure

The [TransferTransaction](/en/ride/structures/transaction-structures/transfer-transaction) structure is used for transaction handling in smart contracts.
