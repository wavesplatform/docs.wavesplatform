# DeleteEntry

Deletes [account data storage](/en/blockchain/account/account-data-storage) record by its key.

> This feature is available starting from node version 1.2.0. This feature can be used after activation of the "Ride V4 and multiple attached payments for Invoke Script Transaction" (No. 16) functionality on the node.
Version 1.2.x is currently available on [stagenet](/en/blockchain/blockchain-network/stage-network)

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
