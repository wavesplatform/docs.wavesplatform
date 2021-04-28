# [Ride v5] IntegerEntry

:warning: This is the documentation for the Standard Library **version 5**, which becomes available after activation of feature #16 “Ride V5, dApp-to-dApp invocations”. [Go to version 4](/en/ride/structures/script-actions/int-entry)

`IntegerEntry` is a structure that sets key and value of [account data storage](/en/blockchain/account/account-data-storage) integer entry. Adding or changing an entry is performed only if the structure is included in the [callable function result](/en/ride/v5/functions/callable-function#invocation-result-2).

## Constructor

```ride
IntegerEntry(key: String, value: Int)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/v5/data-types/string) | Entry key. The maximum size is 400 bytes |
| 2 | value | [Int](/en/ride/v5/data-types/int) | Entry value |
