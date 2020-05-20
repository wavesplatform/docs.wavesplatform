# Issue

> :warning: The `Issue` structure is added in Standard library **version 4** which becomes available since node version 1.2.0, after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. Versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

`Issue` is a structure that sets the parameters of the token issue. The token issue is performed only if the structure is included in the resulting expression of the callable function. See details in the [Callable Function](/eb/ride/functions/callable-function) article.

You can get the ID of the issued token using the function [calculateAssetId](/en/ride/functions/built-in-functions/blockchain-functions#calculate).

You can issue several tokens in one function call. These tokens have different IDs, even if the token parameters are the same, since the sequence number of the constructor call is used as nonce.

## Constructor

```ride
Issue(name: String, description: String, quantity: Int, decimals: Int, isReissuable: Boolean, compiledScript: Script|Unit, nonce: Int)
```

or

```ride
Issue(name: String, description: String, quantity: Int, decimals: Int, isReissuable: Boolean)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | name | [String](/en/ride/data-types/string) | Token name |
| 2 | description | [String](/en/ride/data-types/string) | Token description |
| 3 | quantity | [Int](/en/ride/data-types/int) | Amount of the [token](/en/blockchain/token). Set to `1` for NFT |
| 4 | decimals | [Int](/en/ride/data-types/int) | Number of digits in decimal part. Set to `0` for NFT |
| 5 | isReissuable | [Boolean](/en/ride/data-types/boolean) | Reissue ability flag. Set to `0` for [NFT](/en/blockchain/token/non-fungible-token) |
| 6 | compiledScript | [Script](/en/ride/script)&#124;[Unit](/en/ride/data-types/unit) | Set it to `unit`. Smart asset issue is currently unavailable |

## Examples

### Regular Token Issue

```
Issue("RegularToken", "This is an ordinary token", 10000, 2, true, unit)
```

The structure sets the following parameters of token:

* **Name**: RegularToken
* **Description**: This is an ordinary token
* **Amount of tokens to issue**: 100 (value of 10&nbsp;000 is specified in the minimum fraction —  “cents”)
* **Amount of decimals**: 2
* **Asset script**: none
* **Reissue ability**: yes

### NFT Issue

```
Issue("UberToken", "The ultimate token. One and only.", 1, 0, false, unit)
```

The structure sets the following parameters of token:

* **Name**: UberToken
* **Description**: The ultimate token. One and only
* **Amount of tokens to issue**: 1
* **Amount of decimals**: 0
* **Asset script**: none
* **Reissue ability**: no
