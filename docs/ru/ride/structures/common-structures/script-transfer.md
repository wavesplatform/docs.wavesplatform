# ScriptTransfer

Структура перевода [токенов](/ru/blockchain/token).

### Конструктор

``` ride
ScriptTransfer(recipient: Address|Alias, amount: Int, asset: ByteVector|Unit)
```

### Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | recipient | [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) получателя токенов |
| 2 | amount | [Int](/ru/ride/data-types/int) | Количество токенов |
| 3 | asset | [ByteVector](/ru/ride/data-types/byte-vector)&#124;[Unit](/ru/ride/data-types/unit) | ID токена |
