# ScriptTransfer

Структура перевода [токенов](/ru/blockchain/token.md).

### Конструктор

``` ride
ScriptTransfer(recipient: Address|Alias, amount: Int, asset: ByteVector|Unit)
```

### Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/ru/ride/structures/common-structures/address.md)&#124;[Alias](/ru/ride/structures/common-structures/alias.md) | [Адрес](/ru/blockchain/account/address.md) или [псевдоним](/ru/blockchain/account/alias.md) получателя токенов |
| 2 | amount | [Int](/ru/ride/data-types/int.md) | Количество токенов |
| 3 | asset | [ByteVector](/ru/ride/data-types/byte-vector.md)&#124;[Unit](/ru/ride/data-types/unit.md) | ID токена |
