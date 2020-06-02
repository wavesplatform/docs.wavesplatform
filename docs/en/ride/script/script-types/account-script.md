# Account script

An **account script** is a [script](/en/ride/script/) that has the following [directives](/en/ride/script/directives):

``` ride
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

The [body](/en/ride/script/script-body) of the account script is an [expression](/en/ride/base-concepts/expression) of the boolean type.

## Attaching account script

An account script is attached to the [account](/en/blockchain/account/) with a [set script transaction](/en/blockchain/transaction-type/set-script-transaction).

An account with the account script attached to it is called a [smart account](/en/blockchain/account/smart-account).

Only one script can be attached to an account.
