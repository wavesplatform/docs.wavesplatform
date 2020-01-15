# Callable function

A **callable function** is a [function](/en/ride/functions) of a [dApp script](/en/ride/script/script-types/dapp-script) that has `@Callable` [annotation](/en/ride/functions/annotations).

A dApp script may have several callable functions.

A callable function of a [dApp](/en/blockchain/account/dapp) can be invoked by the [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction).

Calling @Callable function may require payment, so up to two payments can be attached to invoke script transaction.

Actions that can be performed by callable function, include (but not limited to):

* adding or modifying records in [account data storage](/en/blockchain/account/account-data-storage).
* tokens issue.
* tokens reissue.
* burning tokens.
* token transfers. Within invoke script transaction, dApp can execute up to 10 token transfers. The tokens can be transferred both from dApp balance and from payments attached to invoke script transaction.

## Example for Standard Library version 3

```ride
@Callable(inv)
func rate(name: String, rating: Int) = {
    WriteSet([DataEntry(inv.caller.toString(), name + rating.toString()])
}
```

<note type="warning" title=""><a href="/en/ride/script/standard-library">Standard Library</a> Version 4 becomes available from node version 1.2.0, after activation of the "Ride V4 and multiple attached payments for Invoke Script Transaction" (No. 16) feature. See <a href="/en/blockchain/waves-protocol/activation-protocol">Activation Protocol</a>.</note>

## Example for Standard Library version 4

<note type="info" title="">Starting from <a href="/en/ride/script/standard-library">Standard Library</a> version 4, the list of primitive data types values can be passed to the annotated function. Maximum list size - 1000 elements.</note>

```ride
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(i)
func f(args: List[String]) = [
    StringEntry("entry1", args[0]),
    StringEntry("entry1", args[1])
]
```

## Example 1

```ride
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(i)
func f(args: List[String]) = [
    StringEntry("entry1", args[0]),
    StringEntry("entry1", args[1])
]
```

## Example 2

```ride
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
 
@Callable(i)
func f(a: String, args: List[String]) = {
    let s = size(args)
    if s == 1 then
        BooleanEntry("result", a == args[0])
    else s > 1 then
        BooleanEntry ("result", a == args[1])
    else throw("args is empty")
}
```
