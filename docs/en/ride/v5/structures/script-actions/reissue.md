# [Ride v5] Reissue

:warning: This is the documentation for the Standard Library **version 5**, which becomes available after activation of feature #16 “Ride V5, dApp-to-dApp invocations”. [Go to version 4](/en/ride/structures/script-actions/reissue)

`Reissue` is a structure that sets the parameters of the token reissue. The token reissue is performed only if the structure is included in the [callable function result](/en/ride/v5/functions/callable-function#invocation-result-2).

The token reissue is only available for an asset that is issued by a dApp account.

If the token is a smart asset, the asset script verifies the `Reissue` action as if it were [ReissueTransaction](/en/ride/v5/structures/transaction-structures/reissue-transaction) with the fee of 0 and the version of 0. If the asset script denies the action, then the transaction that invoked the dApp script is either denied or saved on the blockchain as failed, see the [Transaction Validation](/en/blockchain/transaction/transaction-validation).

## Constructor

```ride
Reissue(assetId: ByteVector, quantity: Int, isReissuable: Boolean)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/v5/data-types/byte-vector) | [ID of the token](/en/blockchain/token/token-id) to reissue |
| 2 | quantity | [Int](/en/ride/v5/data-types/int) | Amount of the token |
| 3 | isReissuable | [Boolean](/en/ride/v5/data-types/boolean) | Reissue ability flag |
