# Reissue

<note type="warning" title="">The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.</note>

Structure of a [token reissue](/en/blockchain/transaction-type/reissue-transaction).

## Constructor

```ride
Reissuen(assetId: ByteVector, isReissuable: Boolean, quantity: Int)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/data-types/byte-vector) | [ID of the token](/en/blockchain/token/token-id) to reissue |
| 2 | isReissuable | [Boolean](/en/ride/data-types/boolean) | Reissue ability flag |
| 3 | quantity | [Int](/en/ride/data-types/int) | Amount of the token |
