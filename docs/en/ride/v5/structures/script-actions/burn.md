# [Ride v5] Burn

:warning: This is the documentation for the Standard Library **version 5**, which becomes available after activation of feature #16 “Ride V5, dApp-to-dApp invocations”. [Go to version 4](/en/ride/structures/script-actions/burn)

`Burn` is a structure that sets the parameters of the token burning. The token burning is performed only if the structure is included in the [callable function result](/en/ride/v5/functions/callable-function#invocation-result-2).

If the token is a smart asset, the asset script verifies the `Burn` action as if it were [BurnTransaction](/en/ride/v5/structures/transaction-structures/burn-transaction) with the fee of 0 and the version of 0. If the asset script denies the action, then the transaction that invoked the dApp script is either denied or saved on the blockchain as failed, see the [Transaction Validation](/en/blockchain/transaction/transaction-validation).

## Constructor

```ride
Burn(assetId: ByteVector, quantity: Int)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/v5/data-types/byte-vector) | [ID of the token](/en/blockchain/token/token-id) to burn |
| 2 | quantity | [Int](/en/ride/v5/data-types/int) | Amount of the token |