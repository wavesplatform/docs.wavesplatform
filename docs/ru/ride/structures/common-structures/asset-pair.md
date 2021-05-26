# AssetPair

Структура пары токенов ордера в составе структуры [Order](/ru/ride/structures/common-structures/order).

## Конструктор

``` ride
AssetPair(amountAsset: ByteVector|Unit, priceAsset: ByteVector|Unit)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | amountAsset | [ByteVector](/ru/ride/data-types/byte-vector)&#124;[Unit](/ru/ride/data-types/unit) | Первый токен пары |
| 2 | priceAsset | [ByteVector](/ru/ride/data-types/byte-vector)&#124;[Unit](/ru/ride/data-types/unit) | Второй токен пары |
