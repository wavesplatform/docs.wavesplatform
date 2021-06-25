# [Ride v4] Reissue

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/script-actions/reissue)

> :warning: The structure is added in Standard library **version 4**.

`Reissue` is a structure that sets the parameters of the token reissue. The token reissue is performed only if the structure is included in the [callable function result](/en/ride/v4/functions/callable-function#invocation-result-2).

The token reissue is only available for an asset that is issued by a dApp account.

If the token is a smart asset, the asset script verifies the `Reissue` action as if it were [ReissueTransaction](/en/ride/v4/structures/transaction-structures/reissue-transaction) with the fee of 0 and the version of 0. If the asset script denies the action, then the transaction that invoked the dApp script is either denied or saved on the blockchain as failed, see the [Transaction Validation](/en/blockchain/transaction/transaction-validation).

## Constructor

```ride
Reissue(assetId: ByteVector, quantity: Int, isReissuable: Boolean)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/v4/data-types/byte-vector) | [ID of the token](/en/blockchain/token/token-id) to reissue |
| 2 | quantity | [Int](/en/ride/v4/data-types/int) | Amount of the token |
| 3 | isReissuable | [Boolean](/en/ride/v4/data-types/boolean) | Reissue ability flag |
