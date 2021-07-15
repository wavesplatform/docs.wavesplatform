# [Ride v4] DeleteEntry

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/script-actions/delete-entry)

> :warning: The structure is added in Standard library **version 4**.

`DeleteEntry` is a structure that sets the paramaters of deletion of entry from the [account data storage](/en/blockchain/account/account-data-storage). Deleting an entry is performed only if the structure is included in the [callable function result](/en/ride/v4/functions/callable-function#invocation-result-2).

## Constructor

`DeleteEntry(key: String)`

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/v4/data-types/string) | Entry key. The maximum size is 400 bytes |

## Example

```ride
{-# STDLIB_VERSION 4 #-}
{-# SCRIPT_TYPE ACCOUNT #-}
    
@Callable(inv)
func default() = {
  [ DeleteEntry(inv.caller.toString()) ]
}
```
