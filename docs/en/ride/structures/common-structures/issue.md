# Issue

> [!WARNING]
> The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network.md) only.

Structure of a [token issue](/en/blockchain/transaction-type/issue-transaction.md).

## Constructor

```ride
Issue(compiledScript: Script|Unit, decimals: Int, description: String, isReissuable: Boolean, name: String, quantity: Int, nonce: Int)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | compiledScript | [Script](/en/ride/script.md)&#124;[Unit](/en/ride/data-types/unit.md) | Set it to `Unit`. Smart asset issue is currently unavailable |
| 2 | decimals | [Int](/en/ride/data-types/int.md) | Number of digits in decimal part. Set to `0` for NFT token |
| 3 | description | [String](/en/ride/data-types/string.md) | Token description |
| 4 | isReissuable | [Boolean](/en/ride/data-types/boolean.md) | Reissue ability flag. Set to `0` for NFT |
| 5 | name | [String](/en/ride/data-types/string.md) | Token name |
| 6 | quantity | [Int](/en/ride/data-types/int.md) | Amount of the [token](/en/blockchain/token.md). Set to `1` for NFT |
| 7 | nonce | [Int](/en/ride/data-types/int.md) | Sequential number of asset that is used to token ID generation. Required if several tokens with the same name and description are issued in a single script invokation. |
