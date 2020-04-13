# ScriptResult (for Standard Library version 3)

> :warning: The structure is disabled in Standard library version 4. Use `List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry|ScriptTranfer|Issue|Reissue|Burn]` instead of it.

**ScriptResult** is a structure used when both token transfers and adding/modifying of accound data storage entries must be performed as the result of [callable function](/en/ride/functions/callable-function) invocation.

## For Standard Library version 3

### Constructor

``` ride
ScriptResult(writeSet: WriteSet, transferSet: TransferSet)
```

### Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | writeSet | [WriteSet](/en/ride/structures/script-results/write-set) | List of records of an [account data storage](/en/blockchain/account/account-data-storage) |
| 2 | transferSet | [TransferSet](/en/ride/structures/script-results/transfer-set) | List of [tokens](/en/blockchain/token) of a transfer |
