# IntegerEntry

> :warning: The structure is introduced in Standard library **version 4** that is currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

**IntegerEntry** is a structure that sets key and value of [account data storage](/en/blockchain/account/account-data-storage) integer entry, which is created or modified as result of the [callable function](/en/ride/functions/callable-function) invocation.

## Constructor

```ride
IntegerEntry(key: String, value: Int)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/data-types/string) | Entry key. The maximum size is 400 bytes |
| 2 | value | [Int](/en/ride/data-types/int) | Entry value |
