# Issue

> :warning: The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

Issue is the structure that sets the parameters of a [token issue](/en/blockchain/transaction-type/issue-transaction), performed as a result of the invoking of [callable function](/en/ride/functions/callable-function).

> The script action, i.e. sending issue transaction, is performed if the Issue structure is included to the [callable function](/en/ride/functions/callable-function)'s script result. Declaring the Issue structure in any other part of the script won't result the blockchain change.

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
| 6 | compiledScript | [Script](/en/ride/script)&#124;[Unit](/en/ride/data-types/unit) | Set it to `unit`. Smart asset issue is currently unavailable |
| 7 | nonce | [Int](/en/ride/data-types/int) | Sequential number of asset that is used to generate token ID. Is important when multiple Issue structures having similar paramenters (except asset scripts) are listed in [callable function](/en/ride/functions/callable-function)'s script result, see [example](#nonce). If the Issue structures have different asset scripts, then the nonces can be similar |

## Examples

### Regular token issue

`Issue("RegularToken", "This is an ordinary token", 10000, 2, true, unit, 0)`

The structure sets the following parameters of token:

* **Name**: RegularToken,
* **Description**: This is an ordinary token,
* **Amount of tokens to issue**: 100 (value of 10000 is in "pennies"),
* **Amount of decimals**: 2,
* **Asset script**: none,
* **Reissue ability**: present,
* **Nonce**: 0.

### Multiple issue of regular tokens

`[Issue("RegularToken", "This is an ordinary token", 10000, 2, true, unit, 0), Issue("RegularToken", "This is an ordinary token", 10000, 2, true, unit, 1)]`

### NFT issue

`Issue("UberToken", "The ultimate token. One and only.", 1, 0, false, unit, 0)`

The structure sets the following parameters of token:

* **Name**: UberToken,
* **Description**: The ultimate token. One and only,
* **Amount of tokens to issue**: 1,
* **Amount of decimals**: 0,
* **Asset script**: none,
* **Reissue ability**: absent,
* **Nonce**: 0.
