# DeleteEntry

> The `DeleteEntry` structure is available starting from node version 1.2.0, after activating of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. Versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

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
