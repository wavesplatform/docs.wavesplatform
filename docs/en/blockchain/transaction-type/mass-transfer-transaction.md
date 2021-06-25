# Mass Transfer Transaction

Mass Transfer transaction transfers a [token](/en/blockchain/token/) to several accounts, from 1 to 100.

## Fee

The minimum fee for a Mass Transfer transaction is 0.001 + 0.0005 × N WAVES, in case of transferring a [smart asset](/en/blockchain/token/smart-asset) 0.005  + 0.0005 × N WAVES, where N is the number of recipients. The fee value is rounded up to three decimals.

If the transaction sender is a [dApp or smart account](/en/blockchain/account/dapp), and the complexity of the account script or dApp script verifier function exceeds the [sender complexity threshold](/en/ride/limits/), the minimum fee is increased by 0.004 WAVES. (Before activation of feature #16 “Ride V5, dApp-to-dApp invocations”, the extra fee of 0.004 WAVES was required regardless of the complexity of the account script or the presence and complexity of the dApp script verifier function.)

## JSON Representation

```json
{
  "senderPublicKey": "5DphrhGy6MM4N3yxfB2uR2oFUkp2MNMpSzhZ4uJEm3U1",
  "fee": 5100000,
  "type": 11,
  "transferCount": 100,
  "version": 1,
  "totalAmount": 500000000000,
  "attachment": "xZBWqm9Ddt5BJVFvHUaQwB7Dsj78UQ5HatQjD8VQKj4CHG48WswJxUUeHEDZJkHgt9LycUpHBFc8ENu8TF8vvnDJCgfy1NeKaUNydqy9vkACLZjSqaVmvfaM3NQB",
  "sender": "3P2rvn2Hpz6pJcH8oPNrwLsetvYP852QQ2m",
  "feeAssetId": null,
  "proofs": [
    "FmGBaWABAy5bif7Qia2LWQ5B4KNmBnbXETL1mE6XEy4AAMjftt3FrxAa8x2pZ9ux391oY5c2c6ZSDEM4nzrvJDo"
  ],
  "assetId": "Fx2rhWK36H1nfXsiD4orNpBm2QG1JrMhx3eUcPVcoZm2",
  "transfers": [
    {
      "recipient": "3PHnjQrdK389SbzwPEJHYKzhCqWvaoy3GQB",
      "amount": 5000000000
    },
    {
      "recipient": "3PGNLwUG2GPpw74teTAxXFLxgFt3T2uQJsF",
      "amount": 5000000000
    },
    {
      "recipient": "3P5kQneM9EdpVUbFLgefD385LLYTXY5J32c",
      "amount": 5000000000
    },
    ...
  ],
  "id": "3LRfudet7avpQcW1AdauiBGb8SSRAaoCugDzngDPLVcv",
  "timestamp": 1528973951321,
  "height": 1041197
}
```

| Field | Description |
| :--- | :--- |
| assetId | Token ID base58 encoded. `null` means WAVES |
| attachment | Arbitrary binary data (typically a comment to transfer) base58 encoded, up to 140 bytes |
| transfers.recipient | Recipient address base58 encoded or recipient [alias](/en/blockchain/account/alias) with `alias:<chain_id>:` prefix, for example `alias:T:merry` (see [Chain ID](/en/blockchain/blockchain-network/#chain-id)) |
| transfers.amount | Amount of token to transfer: an integer value specified in the minimum fraction (“cents”) of token |
| *transferCount* | Number of recipients |
| *totalAmount* | Total amount of transfers in transaction |

The `transferCount` and `totalAmount` fields do not need to be filled when sending a transaction, and they are not stored on the blockchain. The node calculates these fields when providing transaction data via the REST API.

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Mass Transfer Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/mass-transfer-transaction-binary-format).

## Ride Structure

The [MassTransferTransaction](/en/ride/structures/transaction-structures/mass-transfer-transaction) structure is used for transaction handling in smart contracts.
