# [Ride v4 and v3] ScriptTransfer

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/script-actions/script-transfer)

`ScriptTransfer` is a structure that sets the parameters of the token transfer. The token transfer is performed only if the structure is included in the [callable function result](/en/ride/functions/callable-function#invocation-result-2).

If the token is a smart asset, the asset script verifies the `ScriptTransfer` action as if it were [TransferTransaction](/en/ride/structures/transaction-structures/transfer-transaction) with the fee of 0 and the version of 0. If the asset script denies the action, then the transaction that invoked the dApp script is either denied or saved on the blockchain as failed, see the [Transaction Validation](/en/blockchain/transaction/transaction-validation).

### Constructor

``` ride
ScriptTransfer(recipient: Address|Alias, amount: Int, asset: ByteVector|Unit)
```

### Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/en/ride/structures/common-structures/address)&#124;[Alias](/en/ride/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or the [alias](/en/blockchain/account/alias) of a recipient of tokens |
| 2 | amount | [Int](/en/ride/data-types/int) | Number of tokens |
| 3 | asset | [ByteVector](/en/ride/data-types/byte-vector)&#124;[Unit](/en/ride/data-types/unit) | ID of a token |
