# BinaryEntry

`BinaryEntry` is a structure that sets key and value of [account data storage](/en/blockchain/account/account-data-storage) binary entry. Adding or changing an entry is performed only if the structure is included in the [callable function result](/en/ride/functions/callable-function#invocation-result-2).

## Constructor

```ride
BinaryEntry(key: String, value: ByteVector)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/data-types/string) | Entry key. The maximum size is 400 bytes |
| 2 | value| [ByteVector](/en/ride/data-types/byte-vector) | Entry value. The maximum size is 5 Kbytes |
