# IntEntry

<note type="warning" title="">The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.</note>

Structure of an integer data record of an [account data storage](/en/blockchain/account/account-data-storage).

## Constructor

```ride
IntEntry(key: String, value: Int)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/data-types/string) | Key of a record. Maximum of 100 characters |
| 2 | value | [Int](/en/ride/data-types/int) | Value of a record |
