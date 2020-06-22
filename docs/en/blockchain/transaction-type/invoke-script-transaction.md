# Invoke script transaction

An **invoke script transaction** is a [transaction](/en/blockchain/transaction/) that invokes the [callable function](/en/ride/functions/callable-function) of the [dApp](/en/blockchain/account/dapp).

Payment may be attached to the invoke script transaction to transfer tokens to the account of the called dApp.

> Up to two payments can be applied to invoke script transaction since node version 1.2.0, after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. Versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

## JSON Representation

```json
{
  "senderPublicKey": "7K3VcWABomhNkKo7Vsfy51MPAVvjWEJTvXCk8MdRxiVf",
  "fee": 500000,
  "type": 16,
  "version": 1,
  "call": {
    "function": "foo",
    "args": [
      {
        "type": "binary",
        "value": "SGVsbG8gV2F2ZXM="
      },
      {
        "type": "int",
        "value": "42"
      },
      {
        "type": "string",
        "value": "Hello Waves"
      },
      {
        "type": "list",
        "value": [true,true,false]
      },
    ]
  },
  "dApp": "3Mm2tJ6BQ4o7GuxWggA75iYedkSQVHFnfyT",
  "feeAssetId": null,
  "payment": [
    {
      "amount": 50000000,
      "assetId": null
    }
  ],
  "timestamp": 1591699765359
}
```

| Field | Description |
| :--- | :--- |
| call.function | Callable function name. Up to 255 bytes (1 character can take up to 4 bytes) |
| call.args.type | Argument type:<br>- binary<br>- boolean<br>- integer<br>- string<br>- list (lists are available after activation of feature #15) |
| call.args.value | Argument value.<br>integer: from -9,223,372,036,854,775,808 до 9,223,372,036,854,755,807 inclusive.<br>string or binary: up to 32,767 bytes. Binary value should be base64 encoded.<br>list: up to 1000 elements |
| dApp | dApp address base58 encoded or dApp [alias](/en/blockchain/account/alias) |
| payment.amount | Amount of token in payment, integer value specified in the minimum fraction (“cents”) of token |
| payment.assetId | ID of token in payment, base58 encoded. `null` means that the payment is in WAVES |

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Invoke Script Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/invoke-script-transaction-binary-format).

## Ride Structure

The [InvokeScriptTransaction](/en/ride/structures/transaction-structures/invoke-script-transaction) structure is used for transaction handling in smart contracts.
