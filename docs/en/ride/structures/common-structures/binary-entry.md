# BinaryEntry

> :warning: The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

Structure of a binary data record of an [account data storage](/en/blockchain/account/account-data-storage).

## Constructor

```ride
BinaryEntry(key: String, value: ByteVector)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/data-types/string) | Key of a record. Maximum of 100 characters |
| 2 | value| [ByteVector](/en/ride/data-types/byte-vector) | Value of a record. Maximum of 5 Kbytes |
