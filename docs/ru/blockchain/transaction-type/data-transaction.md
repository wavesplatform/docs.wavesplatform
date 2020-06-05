# Транзакция данных

Транзакция данных добавляет, удаляет или изменяет записи в [хранилище данных аккаунта](/ru/blockchain/account/account-data-storage).

В одной транзакции может 

## Комиссия за транзакцию

Минимальная комиссия за транзакцию сжигания токена — 0,001 WAVES. В случае сжигания [смарт-ассета](/ru/blockchain/token/smart-asset) — 0,005 WAVES.

## JSON-представление

```json
{
    "senderPublicKey":"9GaQj7gktEiiS1TTTjGbVjU9bva3AbCiawZ11qFZenBX",
    "amount":9999,
    "fee":100000,
    "type":6,
    "version":2,
    "sender":"3P9QZNrHbyxXj8P9VrJZmVu2euodNtA11UW",
    "feeAssetId":null,
    "chainId":87,
    "proofs":["61jCivdv3KTuTY6QHgxt4jaGrXcszWg3vb9TmUR26xv7mjWWwjyqs7X5VDUs9c2ksndaPogmdunHDdjWCuG1GGhh"],
    "assetId":"FVxhjrxZYTFCa9Bd4JYhRqXTjwKuhYbSAbD2DWhsGidQ",
    "id":"csr25XQHT1c965Fg7cY2vJ7XHYVsudPYrUbdaFqgaqL",
    "timestamp":1548660675277,
    "height":1370971
}
```

| Поле | Описание |
| :--- | :--- |
| amount | Количество сжигаемого токена. Всегда целое число, выраженное в минимальных неделимых единицах («копейках») токена |
| assetId | ID сжигаемого токена в кодировке base58.

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат транзакции сжигания токена](/ru/blockchain/binary-format/transaction-binary-format/burn-transaction-binary-format).

## Структура Ride

Для операций с транзакцией в смарт-контрактах используется структура [BurnTransaction](/ru/ride/structures/transaction-structures/burn-transaction).



## Массив данных

Максимальная длина массива — 100 элементов.

Максимальный размер массива — 150 килобайт.

Каждый элемент массива представляет собой объект, у которого есть 3 поля — `key`, `type`, `value`.

Массив не может содержать элементы с одинаковым значением поля key.

### Поле `key`

Поле `key` — непустая строка в кодировке [UTF-8](https://ru.wikipedia.org/wiki/UTF-8).

На этапе [валидации транзакции](/ru/blockchain/transaction/transaction-validation) поле `key` конвертируется из кодировки UTF-8 в [UTF-16](https://ru.wikipedia.org/wiki/UTF-16). Размер получившегося массива 16-битных слов не должен превышать 100 элементов. Таким образом, размер ключа должен быть от 1 до 200 байтов включительно.

При отправке ключа без `type` и `value` выполняется удаление записи по ключу.

> Эта возможность доступна с версии ноды 1.2.0 и включается после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”. Версии 1.2.x в настоящее время доступны только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

При удалении ключа с использованием JSON-представления транзакции в качестве `type` и `value` ключа используется `null`. В одной транзакции данных возможно использование ключей как для записи, так и для удаления.

### Поле `type`

Поле type определяет тип поля value:

- binary
- boolean
- integer
- string

### Поле `value`

Размер поля `value` может составлять от 0 до 32767 байт.

## Бинарный формат

Смотрите страницу [Бинарный формат транзакции данных](/ru/blockchain/binary-format/transaction-binary-format/data-transaction-binary-format).
