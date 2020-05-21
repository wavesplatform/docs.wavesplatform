# DataEntry (for Standard Library version 3)

> :warning: The structure is disabled in Standard library version 4. Use `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, and `StringEntry` instead of it.

`DataEntry` is a structure that sets key and value of [account data storage](/en/blockchain/account/account-data-storage) entry. Adding or changing an entry is performed only if the structure is included in the [callable function result](/en/ride/functions/callable-function#callable-function-invocation-results).

## Constructor

``` ride
DataEntry(key: String, value: Int|Boolean|ByteVector|String)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/data-types/string) | Key of a record |
| 2 | value|[Int](/en/ride/data-types/int)&#124;[Boolean](/en/ride/data-types/boolean)&#124;[ByteVector](/en/ride/data-types/byte-vector)&#124;[String](/en/ride/data-types/string) | Value of a record |
