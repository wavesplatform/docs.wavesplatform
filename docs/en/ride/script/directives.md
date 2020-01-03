# Directives

A **directive** is an instruction that sets the compilation mode of the [script](/en/ride/script.md).

``` ride
{-# DIRECTIVE_NAME VALUE #-}
```

## Directives list

| # | Directive name | Directive function | Possible values |
| :--- | :--- | :--- | :--- |
| 1 | CONTENT_TYPE | Defines whether the [script body](/en/ride/script/script-body.md) is an [expression](/en/ride/base-concepts/expression.md) or a _set_ of [definitions](/en/ride/base-concepts/definition.md) | `EXPRESSION` — Boolean expression<br>`DAPP` — set of definitions |
| 2 | SCRIPT_TYPE | Defines the [script context](/en/ride/script/script-context.md) | `ACCOUNT`<br>`ASSET` |
| 3 | STDLIB_VERSION | Sets the version of the [Standard Library](/en/ride/script/standard-library.md) | `4` (available on [Stagenet](/en/blockchain/blockchain-network/stage-network.md) only) <br>`3`<br>`2`<br>`1` |
