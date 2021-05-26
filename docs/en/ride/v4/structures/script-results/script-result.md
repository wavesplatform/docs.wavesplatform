# [Ride v3] ScriptResult

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5.

> :warning: The structure is disabled in Standard library version 4. Use `List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry|ScriptTransfer|Issue|Reissue|Burn]` instead.

**ScriptResult** is a structure used when both token transfers and adding/modifying of accound data storage entries must be performed as the result of [callable function](/en/ride/v4/functions/callable-function) invocation.

## For Standard Library version 3

### Constructor

``` ride
ScriptResult(writeSet: WriteSet, transferSet: TransferSet)
```

### Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | writeSet | [WriteSet](/en/ride/v4/structures/script-results/write-set) | List of records of an [account data storage](/en/blockchain/account/account-data-storage) |
| 2 | transferSet | [TransferSet](/en/ride/v4/structures/script-results/transfer-set) | List of [tokens](/en/blockchain/token/) of a transfer |
