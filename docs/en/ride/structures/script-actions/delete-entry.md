# DeleteEntry

> :warning: The structure is introduced in Standard library **version 4** that is currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

**DeleteEntry** is a structure that sets the paramaters of deletion of entry from the [account data storage](/en/blockchain/account/account-data-storage), which is performed as the result of the [callable function](/en/ride/functions/callable-function) invocation.

## Constructor

`DeleteEntry(key: String)`

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/data-types/string) | Entry key. The maximum size is 400 bytes |

## Example

```ride
{-# STDLIB_VERSION 4 #-}
{-# SCRIPT_TYPE ACCOUNT #-}
    
@Callable(inv)
func default() = {
  [ DeleteEntry(inv.caller.toString()) ]
}
```
