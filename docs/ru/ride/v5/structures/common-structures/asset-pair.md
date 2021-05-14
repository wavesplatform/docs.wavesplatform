# [Ride v5] AssetPair

:warning: Это документация Стандартной библиотеки **версии 5**, которая доступна с момента активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations”. [Перейти к&nbsp;версии&nbsp;4](/ru/ride/structures/common-structures/asset-pair)

Структура пары токенов ордера в составе структуры [Order](/ru/ride/v5/structures/common-structures/order).

## Конструктор

``` ride
AssetPair(amountAsset: ByteVector|Unit, priceAsset: ByteVector|Unit)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | amountAsset | [ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Unit](/ru/ride/v5/data-types/unit) | Первый токен пары |
| 2 | priceAsset | [ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Unit](/ru/ride/v5/data-types/unit) | Второй токен пары |
