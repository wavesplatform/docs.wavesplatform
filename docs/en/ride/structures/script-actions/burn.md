# Burn

> :warning: The structure is introduced in Standard library **version 4**.

`Burn` is a structure that sets the parameters of the token burning. The token burning is performed only if the structure is included in the [callable function result](/en/ride/functions/callable-function#invocation-result-2).

## Constructor

```ride
Burn(assetId: ByteVector, quantity: Int)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/data-types/byte-vector) | [ID of the token](/en/blockchain/token/token-id) to burn |
| 2 | quantity | [Int](/en/ride/data-types/int) | Amount of the token |