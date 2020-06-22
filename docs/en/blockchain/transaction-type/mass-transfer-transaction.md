# Mass transfer transaction

A **mass transfer transaction** is a [transaction](/en/blockchain/transaction/) that transfers a certain amount of [token](/en/blockchain/token/) from one [account](/en/blockchain/account/) to several accounts simultaneously.

A mass transfer transaction contains from 1 to 100 transfers inclusive. The number of tokens to be transferred and the address of the recipient are specified for each transfer individually.

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
| assetId | Base58 encoded token ID. `null` means WAVES |
| attachment | Base58 encoded arbitrary data (typically a comment to transfer), up to 140 bytes |
| transfers.recipient | Recipient address base58 encoded or recipient [alias](/en/blockchain/account/alias) |
| transfers.amount | Amount of token to transfer: integer value specified in the minimum fraction (“cents”) of token |
| *transferCount* | Number of recipients |
| *totalAmount* | Total amount of transfers in transaction |

The `transferCount`, `totalAmount` are not needed when sending a transaction, and they are not stored on the blockchain. The node calculates these fields when providing transaction data via the REST API.

The fields that are common to all types of transactions are described in the [JSON Representation](/en/blockchain/transaction/#json-representation) section.

## Binary Format

See the [Mass Transfer Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/mass-transfer-transaction-binary-format).

## Ride Structure

The [MassTransferTransaction](/en/ride/structures/transaction-structures/mass-transfer-transaction) structure is used for transaction handling in smart contracts.
