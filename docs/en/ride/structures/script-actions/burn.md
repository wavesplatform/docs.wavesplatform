# Burn

> :warning: The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network).

Structure of a [token burn](/en/blockchain/transaction-type/burn-transaction).

## Constructor

```ride
Burn(assetId: ByteVector, quantity: Int)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | assetId | [ByteVector](/en/ride/data-types/byte-vector) | [ID of the token](/en/blockchain/token/token-id) to burn |
| 2 | quantity | [Int](/en/ride/data-types/int) | Amount of the token |