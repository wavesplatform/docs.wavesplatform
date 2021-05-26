# [Ride v3] Script results

> :warning: The structures are disabled in Standard library version 4. Use `List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry|ScriptTransfer|Issue|Reissue|Burn]` instead.

The script results listed below combine script actions, which must be executed as result of invoking the [callable function](/en/ride/v4/functions/callable-function).

| Action | Description |
|---|---|
| [TransferSet](/en/ride/v4/structures/script-results/transfer-set) | Combines token transfers defined by [ScriptTransfer](/en/ride/v4/structures/script-actions/script-transfer) structures |
| [WriteSet](/en/ride/v4/structures/script-results/write-set) | Combines actions on [account data storage](/en/blockchain/account/account-data-storage), entries, set by [DataEntry](/en/ride/v4/structures/script-actions/data-entry) structures |
| [ScriptResult](/en/ride/v4/structures/script-results/script-result) | Combines [TransferSet](/en/ride/v4/structures/script-results/transfer-set) and [WriteSet](/en/ride/v4/structures/script-results/write-set) |
