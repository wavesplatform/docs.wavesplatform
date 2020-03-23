# BooleanEntry

> :warning: The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

**BooleanEntry** is a structure that sets key and value of the [account data storage](/en/blockchain/account/account-data-storage) boolean entry, which is created or modified as the result of [callable function](/en/ride/functions/callable-function) invocation.

## Constructor

```ride
BooleanEntry(key: String, value: Boolean)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/data-types/string) | Key of a record. Maximum of 100 characters |
| 2 | value| [Boolean](/en/ride/data-types/boolean) | Value of a record |
