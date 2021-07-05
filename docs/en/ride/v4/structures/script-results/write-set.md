# [Ride v3] WriteSet

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5.

> :warning: The structure is disabled in Standard library version 4. Use `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, and `StringEntry` directly, see the [Callable function](/en/ride/v4/functions/callable-function) section.

**WriteSet** is a structure that combines multiple [DataEntry](/en/ride/v4/structures/script-actions/data-entry) structures. Adding/modifying the account data storage entries will be performed as the result of [callable function](/en/ride/v4/functions/callable-function) invocation.

## Constructor

``` ride
WriteSet(data: List[DataEntry])
```

## Fields

| # | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | data | [List](/en/ride/v4/data-types/list)[[DataEntry](/en/ride/v4/structures/script-actions/data-entry)] | List of data records of an account data storage |
