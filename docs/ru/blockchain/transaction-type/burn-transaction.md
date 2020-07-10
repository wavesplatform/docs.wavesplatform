# Транзакция сжигания токена

Транзакция сжигания токена уменьшает количество токена на аккаунте отправителя и тем самым общее количество токена на блокчейне. Отправить транзакцию может любой владелец токена (не только создатель). Сожженные токены нельзя восстановить на аккаунт.

## Комиссия за транзакцию

Минимальная комиссия за транзакцию сжигания токена — 0,001 WAVES. В случае сжигания [смарт-ассета](/ru/blockchain/token/smart-asset) — 0,005 WAVES.

Если отправитель транзакции —  [dApp](/ru/blockchain/account/dapp) или [смарт-аккаунт](/ru/blockchain/account/smart-account), минимальная комиссия увеличивается на 0,004 WAVES.

## JSON-представление

```json
{
  "senderPublicKey": "9GaQj7gktEiiS1TTTjGbVjU9bva3AbCiawZ11qFZenBX",
  "amount": 9999,
  "fee": 100000,
  "type": 6,
  "version": 2,
  "sender": "3P9QZNrHbyxXj8P9VrJZmVu2euodNtA11UW",
  "feeAssetId": null,
  "chainId": 87,
  "proofs": [
    "61jCivdv3KTuTY6QHgxt4jaGrXcszWg3vb9TmUR26xv7mjWWwjyqs7X5VDUs9c2ksndaPogmdunHDdjWCuG1GGhh"
  ],
  "assetId": "FVxhjrxZYTFCa9Bd4JYhRqXTjwKuhYbSAbD2DWhsGidQ",
  "id": "csr25XQHT1c965Fg7cY2vJ7XHYVsudPYrUbdaFqgaqL",
  "timestamp": 1548660675277,
  "height": 1370971
}
```

| Поле | Описание |
| :--- | :--- |
| amount | Количество сжигаемого токена. Целое число, выраженное в минимальных неделимых единицах («копейках») токена |
| assetId | ID сжигаемого токена в кодировке base58 |

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат транзакции сжигания токена](/ru/blockchain/binary-format/transaction-binary-format/burn-transaction-binary-format).

## Структура Ride

Для операций с транзакцией в смарт-контрактах используется структура [BurnTransaction](/ru/ride/structures/transaction-structures/burn-transaction).
