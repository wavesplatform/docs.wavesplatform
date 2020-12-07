# TransferSet (for Standard Library version 3)

> :warning: The structure is disabled in Standard library version 4. Starting with version 4 use `ScriptTransfer` directly, see the [Callable function](/en/ride/functions/callable-function) section.

**TransferSet** is a structure that combines multiple [ScriptTransfer](/en/ride/structures/script-actions/script-transfer) structures. Token transfers set by ScriptTransfer structures will be performed as the result of [callable function](/en/ride/functions/callable-function) invocation.

## Constructor

``` ride
TransferSet(transfers: List[ScriptTransfer])
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | transfers | [List](/en/ride/data-types/list)[[ScriptTransfer](/en/ride/structures/script-actions/script-transfer)] | List of token transfers |
