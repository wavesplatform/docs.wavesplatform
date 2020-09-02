# Directives

Every Ride script should start with directives for the compiler. The directives define the script format and available functions, structures and variables.

Directive format is as follows:

``` ride
{-# DIRECTIVE_NAME VALUE #-}
```

## Directives List

| Directive name | Directive function | Possible values |
| :--- | :--- | :--- |
| STDLIB_VERSION | Version of the [Standard Library](/en/ride/script/standard-library) | `4` (available after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”)<br>`3`<br>`2`<br>`1` |
| CONTENT_TYPE | Script content type | `DAPP`: the script is a set of definitions and contains functions that can be invoked from another account.<br>`EXPRESSION`: the script is a boolean expression used for transaction verification |
| SCRIPT_TYPE | Entity that the script is attached to | `ACCOUNT`<br>`ASSET` |

## Directives Examples

For a [dApp script](/en/ride/script/script-types/dapp-script):

```scala
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

For an [account script](/en/ride/script/script-types/account-script):

```scala
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

For an [asset script](/en/ride/script/script-types/account-script):

```scala
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}
```

Not all combinations of directives are correct. The example below won’t work, because `DAPP` content type is allowed only for accounts:

```scala
# Wrong example, won’t work

{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ASSET #-}
```
