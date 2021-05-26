# [Ride v3] DataEntry

> :warning: The structure is disabled in Standard library version 4. Use `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, and `StringEntry` instead of it.

`DataEntry` is a structure that sets key and value of [account data storage](/en/blockchain/account/account-data-storage) entry. Adding or changing an entry is performed only if the structure is included in the [callable function result](/en/ride/v4/functions/callable-function#invocation-result).

## Constructor

``` ride
DataEntry(key: String, value: Int|Boolean|ByteVector|String)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/v4/data-types/string) | Key of a record |
| 2 | value|[Int](/en/ride/v4/data-types/int)&#124;[Boolean](/en/ride/v4/data-types/boolean)&#124;[ByteVector](/en/ride/v4/data-types/byte-vector)&#124;[String](/en/ride/v4/data-types/string) | Value of a record |
