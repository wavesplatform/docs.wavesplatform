# Reissue

> [!WARNING]
> The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network.md) only.

Structure of a [token reissue](/en/blockchain/transaction-type/reissue-transaction.md).

## Constructor

```ride
Reissuen(assetId: ByteVector, isReissuable: Boolean, quantity: Int)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/data-types/byte-vector.md) | [ID of the token](/en/blockchain/token/token-id.md) to reissue |
| 2 | isReissuable | [Boolean](/en/ride/data-types/boolean.md) | Reissue ability flag |
| 3 | quantity | [Int](/en/ride/data-types/int.md) | Amount of the token |
