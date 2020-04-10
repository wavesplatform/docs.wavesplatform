# BinaryEntry

> :warning: BinaryEntry structure is included in [Standard library](/en/ride/script/standard-library) **version 4**, which is currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

**BinaryEntry** is a structure that sets key and value of [account data storage](/en/blockchain/account/account-data-storage) binary entry, which is created or modified as the result of the [callable function](/en/ride/functions/callable-function) invocation.

## Constructor

```ride
BinaryEntry(key: String, value: ByteVector)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/data-types/string) | Entry key. Maximum length - 100 symbols |
| 2 | value| [ByteVector](/en/ride/data-types/byte-vector) | Entry value. Maximum size - 5 Kbytes |
