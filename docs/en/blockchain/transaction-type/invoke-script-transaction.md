# Invoke Script Transaction

Invoke Script transaction invokes the [callable function](/en/ride/functions/callable-function) of the [dApp](/en/blockchain/account/dapp). [Learn more about dApp and script invocation](/en/building-apps/smart-contracts/what-is-a-dapp)

In addition to the dApp address, callable function name, and arguments, the Invoke Script transaction can contain payments to dApp. The maximum number of payments is 10. (Before activation of feature #16 “Ride V5, dApp-to-dApp invocations”, the maximum number of payments was 2. Before activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”, the maximum number of payments was 1.)

## Fee

The sender can specify a transaction fee nominated in a sponsored asset instead of WAVES, see the [Sponsored Fee](/en/blockchain/waves-protocol/sponsored-fee) article.

The minimum fee in WAVES for an Invoke Script transaction is calculated as follows:

`Fee` = 0.005 + `S` + 1  × `I`

* If the transaction **s**ender is a [dApp or smart account](/en/blockchain/account/dapp), and that the complexity of the account script or dApp script verifier function exceeds the [sender complexity threshold](/en/ride/limits/), then `S` = 0.004, otherwise `S` = 0.
* `I` is the number of **i**ssued assets that are not [NFT](/en/blockchain/token/non-fungible-token).

<br/>
<details><summary>Before activation of feature #16 “Ride V5, dApp-to-dApp invocations”</summary>

* The minimum fee was increased by 0.004 WAVES for each execution of asset script in payments and script actions.
* The extra fee of 0.004 WAVES was required for transactions sent from smart account or dApp regardless of the complexity of the account script or the presence and complexity of the dApp script verifier function.)
</details>

## Total Complexity

A dApp callable function can invoke a callable function of another dApp, or another callable function of the same dApp, or even itself. All invoked functions are executed within a single Invoke Script transaction. [More about dApp-to-dApp invocation](/en/ride/advanced/dapp-to-dapp)

DApp-to-dApp invocation is enabled by feature #16 “Ride V5, dApp-to-dApp invocations”.

The total [complexity](/en/ride/base-concepts/complexity) is limited by 26,000 for all callable functions and asset scripts of involved smart assets in a single Invoke Script transaction. The sender's account script complexity is not included in that limit. (Before activation of feature #16 “Ride V5, dApp-to-dApp invocations” the total complexity was not limited.)

<!-- ### Version 3

Version 3 of the Invoke Script transaction is added in node version 1.4.0 and enabled with feature #17 “Ride V6”. Versions 1.4.x are now available for [Stagenet](/en/blockchain/blockchain-network/) only.

`Fee` = (0.005 + `E`) × ⌈`С` / 10,000⌉ × + `S` + 0.004 × `P` + 0.004 × `A` + 1 × `I` + 0,004 × `N`,
`Fee` = 0.005 + `S` + 0.004 × `P` + 0.004 × `A` + 1 × `I` + 0,004 × `N`,


where:

   `E` is the **e**xtra fee specified in the `extraFeePerStep` field,

   `С` is the **c**omplexity of the callable function. `С`/10,000 rounded up to the nearest integer is the number of stages in the computation sequence. For details see the [Continued Computations](/en/ride/advanced/continuation) article. 

   `N` is the total number of **n**ested invocations via `invoke` function. For details see the [dApp-to-dApp Invocation](/en/ride/advanced/dapp-to-dapp) article.

<!-- > Continued computations and dApp-to-dApp invocation are mutually exclusive, that is, they cannot be initiated by the same transaction. -->

## JSON Representation

```json
{
  "type": 16,
  "id": "DN9Ny8mph4tLjn58e9CqhckPymH9zwPqBSZtcv2bBi3u",
  "sender": "3Mw48B85LvkBUhhDDmUvLhF9koAzfsPekDb",
  "senderPublicKey": "BvJEWY79uQEFetuyiZAF5U4yjPioMj9J6ZrF9uTNfe3E",
  "fee": 500000,
  "feeAssetId": null,
  "timestamp": 1601652119485,
  "proofs": [
    "2536V2349X3cuVEK1rSxQf3HneJwLimjCmCfoG1QyMLLq1CNp6dpPKUG3Lb4pu76XqLe3nWyo3HAEwGoALgBhxkF"
  ],
  "version": 2,
  "chainId": 84,
  "dApp": "3N28o4ZDhPK77QFFKoKBnN3uNeoaNSNXzXm",
  "payment": [],
  "call": {
    "function": "foo",
    "args": [
      {
        "type": "list",
        "value": [
          {
            "type": "string",
            "value": "alpha"
          },
          {
            "type": "string",
            "value": "beta"
          },
          {
            "type": "string",
            "value": "gamma"
          }
        ]
      }
    ]
  },
  "height": 1203100,
  "applicationStatus": "succeeded",
  "stateChanges": {
    "data": [
      {
        "key": "3Mw48B85LvkBUhhDDmUvLhF9koAzfsPekDb",
        "type": "string",
        "value": "alphabetagamma"
      }
    ],
    "transfers": [],
    "issues": [],
    "reissues": [],
    "burns": [],
    "sponsorFees": [],
    "leases": [],
    "leaseCancels": [],
    "invokes": []
  }
}
```

| Field | Description |
| :--- | :--- |
| call.function | Callable function name. Up to 255 bytes (1 character can take up to 4 bytes) |
| call.args.type | Argument type:<br>- binary<br>- boolean<br>- integer<br>- string<br>- list (lists are available after activation of feature #15) |
| call.args.value | Argument value.<br>- integer: from -9,223,372,036,854,775,808 to 9,223,372,036,854,755,807 inclusive.<br>- string or binary: up to 32,767 bytes. Binary value should be base64 encoded.<br>- list: up to 1000 elements |
| dApp | dApp address base58 encoded or dApp [alias](/en/blockchain/account/alias) with `alias:<chain_id>:` prefix, for example `alias:T:merry` (see [Chain ID](/en/blockchain/blockchain-network/#chain-id)) |
| payment.amount | Amount of token in payment: an integer value specified in [atomic units](/en/blockchain/token/#atomic-unit) |
| payment.assetId | ID of token in payment, base58 encoded. `null` means that the payment is in WAVES |
| *stateChanges* | Script actions performed by the callable function and [dApp-to-dApp invocation](/en/ride/advanced/dapp-to-dapp) results |

The `stateChanges` structure does not need to be filled when sending a transaction, and it is not stored on the blockchain. The node returns this structure when providing transaction data via the REST API.

<!--| extraFeePerStep | Extra fee for each stage of computations, see the [Continued Computations](/en/ride/advanced/continuation) article. The extra fee is specified in the same token as the transaction fee, in atomic units. A value other than null or 0 is only valid when the version 5 dApp script is invoked. The field is added in transaction version 3 || сontinuationTransactionIds | List of the Continuation transactions in the computation sequence. The field is added in transaction version 3 |-->

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Invoke Script Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/invoke-script-transaction-binary-format) article.

## Ride Structure

The [InvokeScriptTransaction](/en/ride/structures/transaction-structures/invoke-script-transaction) structure is used for transaction handling in smart contracts.
