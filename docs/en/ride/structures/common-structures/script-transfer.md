# ScriptTransfer

Structure of a [token](/en/blockchain/token.md) transfer.

### Constructor

``` ride
ScriptTransfer(recipient: Address|Alias, amount: Int, asset: ByteVector|Unit)
```

### Fields

|   #   | Name | Data type | Description |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/en/ride/structures/common-structures/address.md)&#124;[Alias](/en/ride/structures/common-structures/alias.md) | [Address](/en/blockchain/account/address.md) or the [alias](/en/blockchain/account/alias.md) of a recipient of tokens |
| 2 | amount | [Int](/en/ride/data-types/int.md) | Number of tokens |
| 3 | asset | [ByteVector](/en/ride/data-types/byte-vector.md)&#124;[Unit](/en/ride/data-types/unit.md) | ID of a token |
