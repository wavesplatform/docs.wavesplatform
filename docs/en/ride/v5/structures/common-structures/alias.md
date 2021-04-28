# [Ride v5] Alias

:warning: This is the documentation for the Standard Library **version 5**, which becomes available after activation of feature #16 “Ride V5, dApp-to-dApp invocations”. [Go to version 4](/en/ride/structures/common-structures/alias)

Structure of an [alias](/en/blockchain/account/alias).

## Constructor

``` ride
Alias(alias: String)
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | alias | [String](/en/ride/v5/data-types/string) | [Alias](/en/blockchain/account/alias) |

## Example

```scala
let alias = Alias("merry")
addressFromRecipient(alias)
```
