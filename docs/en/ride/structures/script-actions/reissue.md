# Reissue

> :warning: The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/) only.

`Reissue` is a structure that sets the parameters of the token reissue. The token reissue is performed only if the structure is included in the [callable function result](/en/ride/functions/callable-function#invocation-result-2).

## Constructor

```ride
Reissue(assetId: ByteVector, quantity: Int, isReissuable: Boolean)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/data-types/byte-vector) | [ID of the token](/en/blockchain/token/token-id) to reissue |
| 2 | quantity | [Int](/en/ride/data-types/int) | Amount of the token |
| 3 | isReissuable | [Boolean](/en/ride/data-types/boolean) | Reissue ability flag |
