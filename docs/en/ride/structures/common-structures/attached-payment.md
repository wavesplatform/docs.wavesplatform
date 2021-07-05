# AttachedPayment

Structure of a payment attached to the script invocation and available to the [callable function](/en/ride/functions/callable-function). The structure is used in:
* [Invocation](/en/ride/structures/common-structures/invocation) structure;
* [InvokeScriptTransaction](/en/ride/structures/transaction-structures/invoke-script-transaction) structure;
* [invoke](/en/ride/functions/built-in-functions/dapp-to-dapp#invoke) and [reentrantInvoke](/en/ride/functions/built-in-functions/dapp-to-dapp#reentrantinvoke) functions.

## Constructor

``` ride
AttachedPayment(assetId: ByteVector|Unit, amount: Int)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | ID of a [token](/en/blockchain/token/) |
| 2 | amount | [Int](/en/ride/data-types/int) | Payment amount |
