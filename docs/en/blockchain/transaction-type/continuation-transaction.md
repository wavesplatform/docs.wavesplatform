# Continuation Transaction

Continuation transaction is a stage of execution of a [dApp](/ru/blockchain/account/dapp) script callable function. If the complexity of the callable function exceeds 4000, its execution is split into several stages. The first stage is performed within an [Invoke Script transaction](/en/blockchain/transaction-type/invoke-script-transaction). The further stages are performed within Continuation transactions that are created automatically by block generators. [More about continued computations](/en/ride/advanced/continuation)

A block generator creates the Continuation transaction if there is an incomplete computation sequence. A user cannot send a Continuation transaction.

> A script execution with a continuation is added in node version 1.3.0 and enabled with feature #16 “Ride V5, dApp-to-dApp invocations, Continuations”. Versions 1.3.x are now available for [Stagenet](/en/blockchain/blockchain-network/) only.

## Fee

The fee specified in the Invoke Script transaction is automatically distributed between this transaction and the Continuation transactions, as described in the section [Fee](/en/ride/advanced/continuation#fee).

## JSON Representation

```json
{
  "invokeScriptTransactionId": "5qJkpQetVCriDaN9cfbA8YJX3cCpGzQ3oUTQ2Mr4GPcK",
  "fee": 500000,
  "type": 18,
  "version": 1,
  "id": "9NZnnpB4xqV1HdgZo7j2SnKktTqpaMisgDvHzxLr56Mo",
  "applicationStatus": "succeeded",
  "height": 2108117,
  "nonce": 0
}
```

| Field | Description |
| :--- | :--- |
| invokeScriptTransactionId | ID of the Invoke Script transaction that started the computation sequence |
| fee | Automatically calculated transaction fee |
| nonce | Number that is unique in the computation sequence. It is used to calculate the transaction ID |

> The Continuation transaction does not have `senderPublicKey`, `proofs`, `timestamp`, and `feeAssetId` fields.

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Continuation Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/continuation-transaction-binary-format) article.
