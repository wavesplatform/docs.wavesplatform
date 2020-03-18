# BinaryEntry

> :warning: BinaryEntry structure is included in [Standard library](/ru/ride/script/standard-library) **version 4**, which is currently available on [Stagenet](/ru/blockchain/blockchain-network/stage-network) only.

[Account data storage](/en/blockchain/account/account-data-storage) binary entry structure.

## Constructor

```ride
BinaryEntry(key: String, value: ByteVector)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/ru/ride/data-types/string) | Entry key. Maximum length - 100 symbols |
| 2 | value| [ByteVector](/ru/ride/data-types/byte-vector) | Entry value. Maximum size - 5 Kbytes |
