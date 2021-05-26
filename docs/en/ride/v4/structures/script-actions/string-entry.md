# [Ride v4] StringEntry

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/script-actions/string-entry)

> :warning: The structure is added in Standard library **version 4**.

`StringEntry` is a structure that sets key and value of [account data storage](/en/blockchain/account/account-data-storage) string entry. Adding or changing an entry is performed only if the structure is included in the [callable function result](/en/ride/functions/callable-function#invocation-result-2).

## Constructor

```ride
BinaryEntry(key: String, value: String)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/data-types/string) | Entry key. The maximum size is 400 bytes |
| 2 | value| [String](/en/ride/data-types/byte-vector) | Entry value. Maximum of 5 Kbytes |
