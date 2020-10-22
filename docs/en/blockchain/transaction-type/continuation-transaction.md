# Continuation transaction

Continuation transaction as a stage of execution of a [dApp](/ru/blockchain/account/dapp) script callable function. If a dApp script complexity exceeds 4000, its execution is split into several transactions. The first transaction in the calculation sequence is an [Invoke Script transaction](/en/blockchain/transaction-type/invoke-script-transaction). Continuation transactions are created automatically by block generators. [More about continued calculations](/en/ride/advanced/continuation)

> A script execution with a continuation is added in node version 1.3.0 and enabled with feature #16 “Continuations”. Versions 1.3.x are now available for [Stagenet](/en/blockchain/blockchain-network/) only.

## Fee

The fee specified in the Invoke Script transaction is automatically distributed between this transaction and the Continuation transactions, as described in the section [Fee](/en/ride/advanced/continuation#fee).

## JSON Representation

```json
{
  "invokeScriptTransactionID": "5qJkpQetVCriDaN9cfbA8YJX3cCpGzQ3oUTQ2Mr4GPcK",
  "fee": 500000,
  "extraFeePerStep": 100000,
  "feeAssetId": null,
  "type": 18,
  "version": 1,
  "call": {
    "function": "finalizeCurrentPrice",
    "args": [
      {
        "type": "integer",
        "value": 0
      }
    ]
  },
  "dApp": "3P5Bfd58PPfNvBM2Hy8QfbcDqMeNtzg7KfP",
  "id": "5qJkpQetVCriDaN9cfbA8YJX3cCpGzQ3oUTQ2Mr4GPcK",
  "timestamp": 1592233044984,
  "applicationStatus": "Script_execution_in_progress",
  "height": 2108117,
  "nonce": 0,
  "сontinuationTransactionIds": [
    "5qJkpQetVCriDaN9cfbA8YJX3cCpGzQ3oUTQ2Mr4GPcK",
    "5qJkpQetVCriDaN9cfbA8YJX3cCpGzQ3oUTQ2Mr4GPcK",
    ]
}
```


| Field | Description |
| :--- | :--- |
| invokeScriptTransactionId | ID of the Invoke Script transaction that started the calculation sequence |
| fee | Automatically calculated transaction fee |
| extraFeePerStep |  Extra fee for each stage of calculations |
| call.function | Callable function name. Up to 255 bytes (1 character can take up to 4 bytes) |
| call.args.type | Argument type:<br>- binary<br>- boolean<br>- integer<br>- string<br>- list |
| call.args.value | Argument value |
| dApp | dApp address base58 encoded or dApp [alias](/en/blockchain/account/alias) with `alias:<chain_id>:` prefix, for example `alias:T:merry` (see [Chain ID](/en/blockchain/blockchain-network/#chain-id)) |
| nonce |  Sequential number of the continuation (starting from 0) |
| сontinuationTransactionIds | List of the Continuation transactions in the calculation sequence |

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

> Please note: a Continuation transaction is not sent on behalf of any account, therefere it does not have the `senderPublicKey` and `proofs` fields, as well as `timestamp` and `version` fields.

## Binary Format

See the [Continuation Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/continuation-transaction-binary-format) article.
