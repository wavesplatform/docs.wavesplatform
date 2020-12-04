# Invoke Script Transaction

Invoke Script transaction invokes the [callable function](/en/ride/functions/callable-function) of the [dApp](/en/blockchain/account/dapp). [Learn more about dApp and script invocation](/en/building-apps/smart-contracts/what-is-a-dapp)

In addition to the dApp address, callable function name, and arguments, the Invoke Script transaction can contain a payment to dApp.

> Up to two payments can be contained in an Invoke Script transaction since the activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

## Fee

### Versions 2 and 1

The minimum fee for an Invoke Script transaction is calculated as follows:

`Fee` = 0.005 + `S` + 0.004 × `P` + 0.004 × `A` + 1  × `I`

* If the transaction **s**ender is a [dApp or smart account](/en/blockchain/account/dapp), then `S` = 0.004, otherwise `S` = 0.
* The Invoke Script transaction can contain payments. `P` is the number of **p**ayments in [smart assets](/en/blockchain/token/smart-asset).
* The Invoke Script transaction can result in the token transfer, reissue or burning. `A` is the number of smart assets among these **a**ctions.
* The Invoke Script transaction can result in the token issue. `I` is the number of **i**ssued assets that are not [NFT](/en/blockchain/token/non-fungible-token).

See also the example in the [Transaction Fee](/en/blockchain/transaction/transaction-fee) article.

The sender can specify a transaction fee nominated in a sponsored asset instead of WAVES, see the [Sponsored Fee](/en/blockchain/waves-protocol/sponsored-fee) article.

### Version 3

Version 3 of the Invoke Script transaction is added in node version 1.3.0 and enabled with feature #16 “Continuations”. Versions 1.3.x are now available for [Stagenet](/en/blockchain/blockchain-network/) only.

`Fee` = (0.005 + `E`) × ⌈`С` / 4000⌉ × + `S` + 0.004 × `P` + 0.004 × `A` +  1 × `I`,

where:

   `E` is the **e**xtra fee specified in the `extraFeePerStep` fields,

   `С` is the **c**omplexity of the callable function. `С`/4000 rounded up to the nearest integer is the number of stages in the calculation sequence.

For details see the [Continued Calculations](/en/ride/advanced/continuation) article.


## JSON Representation

```json
{
  "senderPublicKey": "4kKN9G7cZXGQujLQm9ss5gqB7TKX4A9jtFGt7DnHUoQ6",
  "fee": 500000,
  "type": 16,
  "version": 1,
  "call": {
    "function": "returnSellVST",
    "args": [
      {
        "type": "string",
        "value": "GiEBRfGhEeGqhPmLCjwJcYuakyvaz2GHGCfCzuinSKD"
      }
    ]
  },
  "dApp": "3PJbknfXMsJzZmksmsKSMz56tVdDqF5GdNM",
  "sender": "3P5rWeMzoaGBrXJDMifQDDjCMKWJGKTiVJU",
  "feeAssetId": null,
  "proofs": [
    "28s21sisoa7yHWWmmX8U78fbNHW4KXAS9GHD8XmaN77gJxbnP2Q3DssNWpmSQ6hBq6xS985W4YiTmgvENhfWPNt5"
  ],
  "payment": [],
  "id": "7CVjf5KGRRYj6UyTC2Etuu4cUxx9qQnCJox8vw9Gy9yq",
  "timestamp": 1565537422938,
  "height": 1656369
}
```

| Field | Description |
| :--- | :--- |
| call.function | Callable function name. Up to 255 bytes (1 character can take up to 4 bytes) |
| call.args.type | Argument type:<br>- binary<br>- boolean<br>- integer<br>- string<br>- list (lists are available after activation of feature #15) |
| call.args.value | Argument value.<br>- integer: from -9,223,372,036,854,775,808 to 9,223,372,036,854,755,807 inclusive.<br>- string or binary: up to 32,767 bytes. Binary value should be base64 encoded.<br>- list: up to 1000 elements |
| dApp | dApp address base58 encoded or dApp [alias](/en/blockchain/account/alias) with `alias:<chain_id>:` prefix, for example `alias:T:merry` (see [Chain ID](/en/blockchain/blockchain-network/#chain-id)) |
| payment.amount | Amount of token in payment: an integer value specified in the minimum fraction (“cents”) of token |
| payment.assetId | ID of token in payment, base58 encoded. `null` means that the payment is in WAVES |
| extraFeePerStep | Extra fee for each stage of calculations, see the [Continued Calculations](/en/ride/advanced/continuation) article. The extra fee is specified in the same token as the transaction fee. The field is added in transaction version 3 |
| сontinuationTransactionIds | List of the Continuation transactions in the calculation sequence. The field is added in transaction version 3 |

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Invoke Script Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/invoke-script-transaction-binary-format) article.

## Ride Structure

The [InvokeScriptTransaction](/en/ride/structures/transaction-structures/invoke-script-transaction) structure is used for transaction handling in smart contracts.
