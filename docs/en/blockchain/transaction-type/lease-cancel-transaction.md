# Lease Cancel Transaction

Lease Cancel transaction cancels the leasing. See the [Lease Transaction](/en/blockchain/transaction-type/lease-transaction) article.

## Fee

The minimum fee for a Lease Cancel transaction is 0.001 WAVES.

If the transaction sender is a [dApp or smart account](/en/blockchain/account/dapp), and the complexity of the account script or dApp script verifier function exceeds the [sender complexity threshold](/en/ride/limits/), the minimum fee is increased by 0.004 WAVES. (Before activation of feature #16 “Ride V5, dApp-to-dApp invocations”, the extra fee of 0.004 WAVES was required regardless of the complexity of the account script or the presence and complexity of the dApp script verifier function.)

## JSON Representation

```json
{
  "type": 9,
  "id": "6rzxZ3rEsCxgmkcn6DDPB9f9Phi28D4JWZsCtwcViD8C",
  "sender": "3Mx7kNAFcGrAeCebnt3yXceiRSwru6N3XZd",
  "senderPublicKey": "81fxJw7HM2VX1ucq1vNKiedM1XBGX7H2TDUtxN6ib68Z",
  "fee": 100000,
  "feeAssetId": null,
  "timestamp": 1622579112096,
  "proofs": [
    "3eFnprsRSeczc371bQ7AUsbh6qjiUFze6y5BZGKbxyHG27K1cU6jVUgRdthYz9uWVw1FgVpLjMciGCb64rJnMp3k"
  ],
  "version": 2,
  "leaseId": "BhHPPHBZpfp8FBy8DE7heTpWGJySYg2uU2r4YM6qaisw",
  "chainId": 84,
  "height": 1551763,
  "applicationStatus": "succeeded",
  "lease": {
    "id": "BhHPPHBZpfp8FBy8DE7heTpWGJySYg2uU2r4YM6qaisw",
    "originTransactionId": "BhHPPHBZpfp8FBy8DE7heTpWGJySYg2uU2r4YM6qaisw",
    "sender": "3Mx7kNAFcGrAeCebnt3yXceiRSwru6N3XZd",
    "recipient": "3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7",
    "amount": 124935000,
    "height": 1551763,
    "status": "canceled"
  }
}
```

| Field | Description |
| :--- | :--- |
| leaseId | Lease transaction ID |
| chainId | [Chain ID](/en/blockchain/blockchain-network/#chain-id) |
| *lease* | Parameters of canceled lease |

The `lease` structure does not need to be filled when sending a transaction, and it is not stored on the blockchain. The node returns this structure when providing transaction data via the REST API.

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Lease Cancel Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/lease-cancel-transaction-binary-format).

## Ride Structure

The [LeaseCancelTransaction](/en/ride/structures/transaction-structures/lease-cancel-transaction) structure is used for transaction handling in smart contracts.
