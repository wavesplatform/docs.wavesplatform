# Account script

An **account script** is a [script](/en/ride/script.md) that has the following [directives](/en/ride/script/directives.md):

``` ride
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

The [body](/en/ride/script/script-body.md) of the account script is an [expression](/en/ride/base-concepts/expression.md) of the boolean type.

## Attaching account script

An account script is attached to the [account](/en/blockchain/account.md) with a [set script transaction](/en/blockchain/transaction-type/set-script-transaction.md).

An account with the account script attached to it is called a [smart account](/en/blockchain/account/smart-account.md).

Only one script can be attached to an account.
