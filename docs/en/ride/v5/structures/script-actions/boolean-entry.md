# [Ride v5] BooleanEntry

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/structures/script-actions/boolean-entry)

`BooleanEntry` is a structure that sets key and value of the [account data storage](/en/blockchain/account/account-data-storage) boolean entry. Adding or changing an entry is performed only if the structure is included in the [callable function result](/en/ride/v5/functions/callable-function#invocation-result-2).

## Constructor

```ride
BooleanEntry(key: String, value: Boolean)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/v5/data-types/string) | Entry key. The maximum size is 400 bytes |
| 2 | value| [Boolean](/en/ride/v5/data-types/boolean) | Entry value |
