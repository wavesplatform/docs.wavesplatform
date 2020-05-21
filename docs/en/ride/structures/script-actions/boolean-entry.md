# BooleanEntry

> :warning: The structure is introduced in Standard library **version 4** that is currenlty available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

`BooleanEntry` is a structure that sets key and value of the [account data storage](/en/blockchain/account/account-data-storage) boolean entry. Adding or changing an entry is performed only if the structure is included in the [callable function result](/en/ride/functions/callable-function#callable-function-invocation-results-2).

## Constructor

```ride
BooleanEntry(key: String, value: Boolean)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/data-types/string) | Entry key. The maximum size is 400 bytes |
| 2 | value| [Boolean](/en/ride/data-types/boolean) | Entry value |
