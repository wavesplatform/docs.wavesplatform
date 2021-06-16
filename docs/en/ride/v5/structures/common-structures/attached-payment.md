# [Ride v5] AttachedPayment

:warning: This is the documentation for the Standard Library **version 5**, which becomes available after activation of feature #16 “Ride V5, dApp-to-dApp invocations”. [Go to version 4](/en/ride/structures/common-structures/attached-payment)

Structure of a payment attached to the script invocation and available to the [callable function](/en/ride/v5/functions/callable-function). The structure is used in:
* [Invocation](/en/ride/v5/structures/common-structures/invocation) structure;
* [InvokeScriptTransaction](/en/ride/v5/structures/transaction-structures/invoke-script-transaction) structure;
* [invoke](/en/ride/v5/functions/built-in-functions/dapp-to-dapp#invoke) and [reentrantInvoke](/en/ride/v5/functions/built-in-functions/dapp-to-dapp#reentrantinvoke) functions.

## Constructor

``` ride
AttachedPayment(assetId: ByteVector|Unit, amount: Int)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/v5/data-types/byte-vector)&#124;[Unit](/en/ride/v5/data-types/unit) | ID of a [token](/en/blockchain/token/) |
| 2 | amount | [Int](/en/ride/v5/data-types/int) | Payment amount |
