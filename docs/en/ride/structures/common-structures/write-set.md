# WriteSet (for Standard Library version 3)

> [!WARNING]
> The structure is disabled in Standard library version 4. Use `BinaryEntry`, `BooleanEntry`, `IntEntry`, and `StringEntry` in `ScriptResult`.

Structure of a list of data records of an [account data storage](/en/blockchain/account/account-data-storage.md).

## Constructor

``` ride
WriteSet(data: List[DataEntry])
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | data | [List](/en/ride/data-types/list.md)[[DataEntry](/en/ride/structures/common-structures/data-entry.md)] | List of data records of an account data storage |
