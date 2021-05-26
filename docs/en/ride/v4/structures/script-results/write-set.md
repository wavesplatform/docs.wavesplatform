# [Ride v3] WriteSet

> :warning: The structure is disabled in Standard library version 4. Use `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, and `StringEntry` directly, see the [Callable function](/en/ride/functions/callable-function) section.

**WriteSet** is a structure that combines multiple [DataEntry](/en/ride/structures/script-actions/data-entry) structures. Adding/modifying the account data storage entries will be performed as the result of [callable function](/en/ride/functions/callable-function) invocation.

## Constructor

``` ride
WriteSet(data: List[DataEntry])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | data | [List](/en/ride/data-types/list)[[DataEntry](/en/ride/structures/script-actions/data-entry)] | List of data records of an account data storage |
