# [Ride v4] IntegerEntry

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/script-actions/int-entry)

> :warning: The structure is added in Standard library **version 4**.

`IntegerEntry` is a structure that sets key and value of [account data storage](/en/blockchain/account/account-data-storage) integer entry. Adding or changing an entry is performed only if the structure is included in the [callable function result](/en/ride/functions/callable-function#invocation-result-2).

## Constructor

```ride
IntegerEntry(key: String, value: Int)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/data-types/string) | Entry key. The maximum size is 400 bytes |
| 2 | value | [Int](/en/ride/data-types/int) | Entry value |
