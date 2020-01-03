# ScriptResult (for Standard Library version 3)

> [!WARNING]
> The structure is disabled in Standard library version 4. Use List[BinaryEntry|BooleanEntry|IntEntry|StringEntry|ScriptTranfer|Issue|Reissue|Burn] instead of it.

Structure of the execution result of a callable function.

## For Standard Library version 3

### Constructor

``` ride
ScriptResult(writeSet: WriteSet, transferSet: TransferSet)
```

### Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | writeSet | [WriteSet](/en/ride/structures/common-structures/write-set.md) | List of records of an [account data storage](/en/blockchain/account/account-data-storage.md) |
| 2 | transferSet | [TransferSet](/en/ride/structures/common-structures/transfer-set.md) | List of [tokens](/en/blockchain/token.md) of a transfer |
