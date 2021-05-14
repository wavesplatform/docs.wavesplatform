# [Ride v5] StringEntry

:warning: This is the documentation for the Standard Library **version 5**, which becomes available after activation of feature #16 “Ride V5, dApp-to-dApp invocations”. [Go to version 4](/en/ride/structures/script-actions/string-entry)

`StringEntry` is a structure that sets key and value of [account data storage](/en/blockchain/account/account-data-storage) string entry. Adding or changing an entry is performed only if the structure is included in the [callable function result](/en/ride/v5/functions/callable-function#invocation-result-2).

## Constructor

```ride
BinaryEntry(key: String, value: String)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/v5/data-types/string) | Entry key. The maximum size is 400 bytes |
| 2 | value| [String](/en/ride/v5/data-types/byte-vector) | Entry value. Maximum of 5 Kbytes |
