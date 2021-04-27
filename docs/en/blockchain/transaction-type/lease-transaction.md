# Lease Transaction

Lease transaction leases WAVES to another account. After 1000 block the leased tokens are accounted for the recipient's generating balance. The larger the generating balance of the node is, the higher the chances for that node to be selected to generate the next block. Commonly node owners share the reward for generated blocks with lessors. [More about leasing](/en/blockchain/leasing)

Leased tokens remain locked on the sender's account with the full control of their owner. The sender can cancel the lease at any time by the [Lease Cancel transaction](/en/blockchain/transaction-type/lease-cancel-transaction).

## Fee

The minimum fee for a Lease transaction is 0.001 WAVES.

If the transaction sender is a [dApp or smart account](/en/blockchain/account/dapp), the minimum fee is increased by 0.004 WAVES.

Starting from node version 1.3.1, after activation of feature #16 “Ride V5, dApp-to-dApp invocations”, the extra fee of 0.004 WAVES is only required if the complexity of sender's account script or dApp script verifier function exceeds the [sender complexity threshold](/en/ride/limits/). Versions 1.3.x are currently available for [Stagenet](/en/blockchain/blockchain-network/) only.

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
| *status* | Lease status: <br>- `active`: lease is active.<br>- `canceled`: lease is cancelled, see [Lease Cancel Transaction](/en/blockchain/transaction-type/lease-cancel-transaction). |

The `status` field does not need to be filled when sending a transaction, and it is not stored on the blockchain. The node calculates these fields when providing transaction data via the REST API.

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Lease Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/lease-transaction-binary-format).

## Ride Structure

The [LeaseTransaction](/en/ride/structures/transaction-structures/lease-transaction) structure is used for transaction handling in smart contracts.
