# [Ride v4 и v3] AssetPair

:warning: Это документация Стандартной библиотеки версии 4 и 3. Рекомендуем использовать версию 5. [Перейти к&nbsp;версии&nbsp;5](/ru/ride/structures/common-structures/asset-pair)

Структура пары токенов ордера.

## Конструктор

``` ride
AssetPair(amountAsset: ByteVector|Unit, priceAsset: ByteVector|Unit)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | amountAsset | [ByteVector](/ru/ride/v4/data-types/byte-vector)&#124;[Unit](/ru/ride/v4/data-types/unit) | Первый токен пары |
| 2 | priceAsset | [ByteVector](/ru/ride/v4/data-types/byte-vector)&#124;[Unit](/ru/ride/v4/data-types/unit) | Второй токен пары |
