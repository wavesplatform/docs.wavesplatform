# IntegerEntry

`IntegerEntry` is a structure that sets key and value of [account data storage](/en/blockchain/account/account-data-storage) integer entry. Adding or changing an entry is performed only if the structure is included in the [callable function result](/en/ride/functions/callable-function#invocation-result).

## Constructor

```ride
IntegerEntry(key: String, value: Int)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/data-types/string) | Entry key. The maximum size is 400 bytes |
| 2 | value | [Int](/en/ride/data-types/int) | Entry value |
