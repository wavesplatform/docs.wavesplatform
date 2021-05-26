# Issue

`Issue` is a structure that sets the parameters of the token issue. The token issue is performed only if the structure is included in the [callable function result](/en/ride/functions/callable-function#invocation-result-2).

The minimum fee for an invoke script transaction is increased by 1 WAVES for each issued asset that is not [NFT](/en/blockchain/token/non-fungible-token).

You can get the ID of the issued token using the [calculateAssetId](/en/ride/functions/built-in-functions/blockchain-functions#calculateassetid) function.

## Constructor

```ride
Issue(name: String, description: String, quantity: Int, decimals: Int, isReissuable: Boolean, compiledScript: Script|Unit, nonce: Int)
```

or

```ride
Issue(name: String, description: String, quantity: Int, decimals: Int, isReissuable: Boolean)
```

In the second case, `compiledScript = unit` and `nonce = 0` values are inserted automatically.

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | name | [String](/en/ride/data-types/string) | Token name |
| 2 | description | [String](/en/ride/data-types/string) | Token description |
| 3 | quantity | [Int](/en/ride/data-types/int) | Amount of the [token](/en/blockchain/token/). Set to `1` for NFT |
| 4 | decimals | [Int](/en/ride/data-types/int) | Number of digits in decimal part. Set to `0` for NFT |
| 5 | isReissuable | [Boolean](/en/ride/data-types/boolean) | Reissue ability flag. Set to `0` for [NFT](/en/blockchain/token/non-fungible-token) |
| 6 | compiledScript | [Script](/en/ride/script/)&#124;[Unit](/en/ride/data-types/unit) | Set it to `unit`. Smart asset issue is currently unavailable |
| 7 | nonce | [Int](/en/ride/data-types/int) | Nonce that is used for token ID generation. If the callable function issues several tokens with the same parameters, you should use different nonce, see the [example](#multiple-tokens-issue) |

## Examples

### Regular Token Issue

```
Issue("RegularToken", "This is an ordinary token", 10000, 2, true)
```

The structure sets the following parameters of token:

* **Name**: RegularToken
* **Description**: This is an ordinary token
* **Amount of tokens to issue**: 100 (value of 10&nbsp;000 is specified in the minimum fraction —  “cents”)
* **Amount of decimals**: 2
* **Reissue ability**: yes

### Multiple Tokens Issue

```
[
   Issue("RegularToken", "This is an ordinary token", 10000, 2, true, unit, 0),
   Issue("RegularToken", "This is an ordinary token", 10000, 2, true, unit, 1)
]
```

### NFT Issue

```
Issue("UberToken", "The ultimate token. One and only.", 1, 0, false)
```

The structure sets the following parameters of token:

* **Name**: UberToken
* **Description**: The ultimate token. One and only
* **Amount of tokens to issue**: 1
* **Amount of decimals**: 0
* **Reissue ability**: no
