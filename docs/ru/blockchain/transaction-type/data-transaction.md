# Транзакция данных

Транзакция данных добавляет, удаляет или изменяет записи в [хранилище данных аккаунта](/ru/blockchain/account/account-data-storage) отправителя.

> Удаление записи доступно начиная с версии ноды 1.2.0 после активации фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”.

Ограничения:
* Количество записей — не более 100.
* Для версии 2 максимальный размер данных (ключи + значения) — 165&nbsp;890 байт.
* Для версии 1 максимальный размер транзакции (исключая подтверждения) — 153&nbsp;600 байт.

## Комиссия за транзакцию

Минимальная комиссия за транзакцию данных — 0,001 WAVES за килобайт. Значение округляется вверх до тысячных.

Если отправитель транзакции —  [dApp](/ru/blockchain/account/dapp) или [смарт-аккаунт](/ru/blockchain/account/smart-account), минимальная комиссия увеличивается на 0,004 WAVES.

## JSON-представление

```json
{
  "senderPublicKey": "38bYRUxFCaoa9h822nMnsoTX1qfczqtHJLgouNcNnd8h",
  "data": [
    {
      "type": "boolean",
      "value": true,
      "key": "bool"
    },
    {
      "type": "binary",
      "value": "base64:SGVsbG8gV2F2ZXM=",
      "key": "bin"
    },
    {
      "type": "integer",
      "value": 1234567,
      "key": "int"
    },
    {
      "type": "string",
      "value": "some text",
      "key": "str"
    }
  ],
  "sender": "3N4iKL6ikwxiL7yNvWQmw7rg3wGna8uL6LU",
  "feeAssetId": null,
  "proofs": [
    "kE1hjN1yW68j8DsYGNB7Gg1ydC4hqRmt3wBaFQUPkftnbiM7QfJCn1gTHgveJ7pCLXvvqffhKBmiF8qS1Uqk6SR"
  ],
  "fee": 100000,
  "id": "3EPJuvQiJYiu9Y5g6mYDQgHVu8GFUfnZurHrVwwF1ViH",
  "type": 12,
  "version": 2,
  "timestamp": 1591351545000,
  "height": 1029815
}
```

| Поле | Описание |
| :--- | :--- |
| data.key | Ключ записи. Строка, до 400 байт |
| data.type | Тип данных:<br>- binary<br>- boolean<br>- integer<br>- string<br>null — удаление записи |
| data.value | Значение записи. До 32 767 байт. Бинарное значение должно быть в кодировке base64.<br>null — удаление записи |

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат транзакции данных](/ru/blockchain/binary-format/transaction-binary-format/data-transaction-binary-format).

## Структура Ride

Для операций с транзакцией в смарт-контрактах используется структура [DataTransaction](/ru/ride/structures/transaction-structures/data-transaction).
