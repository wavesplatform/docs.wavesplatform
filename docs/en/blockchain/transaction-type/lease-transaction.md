# Lease transaction

A **lease transaction** is a [transaction](/en/blockchain/transaction/) that [leases](/en/blockchain/leasing) [WAVES](/en/blockchain/token/waves) to another [account](/en/blockchain/account/).

## JSON Representation

```json
{
  "senderPublicKey": "b8AB1PQWE7kH55cS48uDTV5fezrAyDTCf7iePyXNzNm",
  "amount": 500000000,
  "signature": "3n34MYd3Acx1JpTtvYffdVYCVySuRgZvSbHMA3AxqQwr4xvfZedv9UbqSB9k84PGY5C8RSwGRjDnMGcYwQu2x7B5",
  "fee": 100000,
  "type": 8,
  "version": 1,
  "sender": "3P6iv9tYo3ELne7tc9HR8BzhK3LE2aDDu1A",
  "feeAssetId": null,
  "proofs": [
    "3n34MYd3Acx1JpTtvYffdVYCVySuRgZvSbHMA3AxqQwr4xvfZedv9UbqSB9k84PGY5C8RSwGRjDnMGcYwQu2x7B5"
  ],
  "recipient": "3P2HNUd5VUPLMQkJmctTPEeeHumiPN2GkTb",
  "id": "7k4EPgA3VxoE56TMJLjvF9FMpywyfeS5qRJSEEN9XGuU",
  "timestamp": 1528813353617,
  "status": "canceled",
  "height": 1038624
}
```

| Field | Description |
| :--- | :--- |
| amount | Amount of WAVELETs to lease (that is, amount of WAVES multiplied by 10<sup>8</sup>) |
| recipient | Recipient address base58 encoded or recipient alias |

The fields that are common to all types of transactions are described in the [JSON Representation](/en/blockchain/transaction/#json-representation) section.

## Binary Format

See the [Lease Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/lease-transaction-binary-format).

## Ride Structure

The [LeaseTransaction](/en/ride/structures/transaction-structures/lease-transaction) structure is used for transaction handling in smart contracts.
