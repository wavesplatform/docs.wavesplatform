# DeleteEntry

> The feature of using the DeleteEntry is available starting from node version 1.2.0. This feature can be used after activation of the "Ride V4 and multiple attached payments for Invoke Script Transaction" (No. 16) functionality on the node.
Version 1.2.x is currently available on [stagenet](/en/blockchain/blockchain-network/stage-network).

**DeleteEntry** is a structure that sets the paramaters of deletion of entry from the [account data storage](/en/blockchain/account/account-data-storage), which is performed as the result of the [callable function](/en/ride/functions/callable-function) invocation.

## Constructor

`DeleteEntry(key: String)`

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/data-types/string) | Record key |

## Example

```ride
{-# STDLIB_VERSION 4 #-}
{-# SCRIPT_TYPE ACCOUNT #-}
    
@Callable(inv)
func default() = {
  [ DeleteEntry(inv.caller.toString()) ]
}
```
