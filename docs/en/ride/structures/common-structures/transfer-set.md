# TransferSet (for Standard Library version 3)

> [!WARNING]
> The structure is disabled in Standard library version 4. Starting with version 4 use `ScriptTransfer` in `ScriptResult` directly.

Structure of a list of [token](/en/blockchain/token.md) transfers.

## Constructor

``` ride
TransferSet(transfers: List[ScriptTransfer])
```

## Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | transfers | [List](/en/ride/data-types/list.md)[[ScriptTransfer](/en/ride/structures/common-structures/script-transfer.md)] | List of token transfers |
