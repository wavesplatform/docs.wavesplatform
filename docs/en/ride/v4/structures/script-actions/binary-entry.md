# [Ride v4] BinaryEntry

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/script-actions/binary-entry)

> :warning: The structure is added in Standard library **version 4**.

`BinaryEntry` is a structure that sets key and value of [account data storage](/en/blockchain/account/account-data-storage) binary entry. Adding or changing an entry is performed only if the structure is included in the [callable function result](/en/ride/v4/functions/callable-function#invocation-result-2).

## Constructor

```ride
BinaryEntry(key: String, value: ByteVector)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/v4/data-types/string) | Entry key. The maximum size is 400 bytes |
| 2 | value| [ByteVector](/en/ride/v4/data-types/byte-vector) | Entry value. The maximum size is 5 Kbytes |
