# [Ride v4] Burn

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/script-actions/burn)

> :warning: The structure is added in Standard library **version 4**.

`Burn` is a structure that sets the parameters of the token burning. The token burning is performed only if the structure is included in the [callable function result](/en/ride/v4/functions/callable-function#invocation-result-2).

If the token is a smart asset, the asset script verifies the `Burn` action as if it were [BurnTransaction](/en/ride/v4/structures/transaction-structures/burn-transaction) with the fee of 0 and the version of 0. If the asset script denies the action, then the transaction that invoked the dApp script is either denied or saved on the blockchain as failed, see the [Transaction Validation](/en/blockchain/transaction/transaction-validation).

## Constructor

```ride
Burn(assetId: ByteVector, quantity: Int)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/v4/data-types/byte-vector) | [ID of the token](/en/blockchain/token/token-id) to burn |
| 2 | quantity | [Int](/en/ride/v4/data-types/int) | Amount of the token |