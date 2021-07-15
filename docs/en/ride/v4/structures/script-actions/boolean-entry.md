# [Ride v4] BooleanEntry

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/structures/script-actions/boolean-entry)

> :warning: The structure is added in Standard library **version 4**.

`BooleanEntry` is a structure that sets key and value of the [account data storage](/en/blockchain/account/account-data-storage) boolean entry. Adding or changing an entry is performed only if the structure is included in the [callable function result](/en/ride/v4/functions/callable-function#invocation-result-2).

## Constructor

```ride
BooleanEntry(key: String, value: Boolean)
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | key | [String](/en/ride/v4/data-types/string) | Entry key. The maximum size is 400 bytes |
| 2 | value| [Boolean](/en/ride/v4/data-types/boolean) | Entry value |
