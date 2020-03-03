# Issue

> :warning: The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

Structure of a [token issue](/en/blockchain/transaction-type/issue-transaction).

## Constructor

```ride
Issue(name: String, description: String, quantity: Int, decimals: Int, isReissuable: Boolean, compiledScript: Script|Unit, nonce: Int)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | name | [String](/en/ride/data-types/string) | Token name |
| 2 | description | [String](/en/ride/data-types/string) | Token description |
| 3 | quantity | [Int](/en/ride/data-types/int) | Amount of the [token](/en/blockchain/token). Set to `1` for NFT |
| 4 | decimals | [Int](/en/ride/data-types/int) | Number of digits in decimal part. Set to `0` for NFT token |
| 5 | isReissuable | [Boolean](/en/ride/data-types/boolean) | Reissue ability flag. Set to `0` for NFT |
| 6 | compiledScript | [Script](/en/ride/script)&#124;[Unit](/en/ride/data-types/unit) | Set it to `Unit`. Smart asset issue is currently unavailable |
| 7 | nonce | [Int](/en/ride/data-types/int) | Sequential number of asset that is used to token ID generation. Required if several tokens with the same name and description are issued in a single script invokation. |
