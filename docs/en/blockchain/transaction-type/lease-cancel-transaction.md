# Lease cancel transaction

A **lease cancel transaction** is a [transaction](/en/blockchain/transaction/) that cancels the [leasing](/en/blockchain/leasing).

## JSON Representation

```json
{
  "senderPublicKey": "BEPNBjo9Pi9hJ3hVtxpwyEfXCW3qWUNk5dMD7aFdiHsa",
  "fee": 100000,
  "type": 9,
  "version": 2,
  "leaseId": "BggRaeNCVmzuFGohzF4dQeYXSWr8i5zNSnGtdKc5eGrY",
  "sender": "3PMBXG13f89pq3WyJHHKX2m5zN6kt2CEkHQ",
  "feeAssetId": null,
  "chainId": 87,
  "proofs": [
    "3cqVVsaEDzBz367KTBFGgMXEYJ2r3yLWd4Ha8r3GzmAFsm2CZ3GeNW22wqxfK4LNRFgsM5kCWRVhf6gu2Nv6zVqW"
  ],
  "id": "7siEtrJAvmVzM1WDX6v9RN4qkiCtk7qQEeD5ZhE6955E",
  "lease": {
    "senderPublicKey": "BEPNBjo9Pi9hJ3hVtxpwyEfXCW3qWUNk5dMD7aFdiHsa",
    "amount": 406813214,
    "sender": "3PMBXG13f89pq3WyJHHKX2m5zN6kt2CEkHQ",
    "feeAssetId": null,
    "signature": "4u1sBnSrBiLE7DdE3Uj7R8kVqW3BFoBcwnuqDyssqxaYrF5hs6ABbw5hVT9S1AjQmgDr18euS5bYgedy7wdFUBjC",
    "proofs": [
      "4u1sBnSrBiLE7DdE3Uj7R8kVqW3BFoBcwnuqDyssqxaYrF5hs6ABbw5hVT9S1AjQmgDr18euS5bYgedy7wdFUBjC"
    ],
    "fee": 100000,
    "recipient": "3PMWRsRDy882VR2viKPrXhtjAQx7ygQcnea",
    "id": "BggRaeNCVmzuFGohzF4dQeYXSWr8i5zNSnGtdKc5eGrY",
    "type": 8,
    "version": 1,
    "timestamp": 1548192718874
  },
  "timestamp": 1548660629957,
  "height": 1370970
}
```

| Field | Description |
| :--- | :--- |
| leaseId | Lease transaction ID |
| *lease* | Lease transaction fields |

The `lease` structure is not needed when sending a transaction. The node returns this structure when providing transaction data via the REST API.

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Lease Cancel Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/lease-cancel-transaction-binary-format).

## Ride Structure

The [LeaseCancelTransaction](/en/ride/structures/transaction-structures/lease-cancel-transaction) structure is used for transaction handling in smart contracts.
