# StringEntry

> :warning: The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

**StringEntry** is a structure that sets key and value of [account data storage](/en/blockchain/account/account-data-storage) string entry, which is created or modified as the result of [callable function](/en/ride/functions/callable-function) invocation.

## Constructor

```ride
BinaryEntry(key: String, value: String)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/data-types/string) | Key of a record. Maximum of 100 characters |
| 2 | value| [String](/en/ride/data-types/byte-vector) | Value of a record. Maximum of 5 Kbytes |
