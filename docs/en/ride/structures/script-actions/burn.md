# Burn

> :warning: The structure is added in Standard library **version 4** which becomes available since node version 1.2.0, after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

`Burn` is a structure that sets the parameters of the token burning. The token burning is performed only if the structure is included in the [callable function result](/en/ride/functions/callable-function#invocation-result-2).

If the token is a smart asset, the asset script verifies the `Burn` action as if it were [BurnTransaction](/en/ride/structures/transaction-structures/burn-transaction) with a fee of 0. If the asset script denies the action, then the transaction that invoked the dApp script is either denied or saved on the blockchain as failed, see the [Transaction Validation](/en/blockchain/transaction/transaction-validation).

## Constructor

```ride
Burn(assetId: ByteVector, quantity: Int)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/data-types/byte-vector) | [ID of the token](/en/blockchain/token/token-id) to burn |
| 2 | quantity | [Int](/en/ride/data-types/int) | Amount of the token |