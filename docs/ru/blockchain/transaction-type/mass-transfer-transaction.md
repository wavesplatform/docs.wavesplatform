# Транзакция массового перевода

Транзакция массового перевода выполняет перевод токена нескольким получателям (от 1 до 100).

## Комиссия за транзакцию

Минимальная комиссия за транзакцию массового перевода — 0,001 + 0,0005 × N WAVES, в случае перевода [смарт-ассета](/ru/blockchain/token/smart-asset) — 0,005 + 0,0005 × N WAVES, где N — количество получателей. Значение округляется вверх до тысячных.

Если отправитель транзакции —  [dApp](/ru/blockchain/account/dapp) или [смарт-аккаунт](/ru/blockchain/account/smart-account), минимальная комиссия увеличивается на 0,004 WAVES.

## JSON-представление

```json
{
  "senderPublicKey": "5DphrhGy6MM4N3yxfB2uR2oFUkp2MNMpSzhZ4uJEm3U1",
  "fee": 5100000,
  "type": 11,
  "transferCount": 100,
  "version": 1,
  "totalAmount": 500000000000,
  "attachment": "xZBWqm9Ddt5BJVFvHUaQwB7Dsj78UQ5HatQjD8VQKj4CHG48WswJxUUeHEDZJkHgt9LycUpHBFc8ENu8TF8vvnDJCgfy1NeKaUNydqy9vkACLZjSqaVmvfaM3NQB",
  "sender": "3P2rvn2Hpz6pJcH8oPNrwLsetvYP852QQ2m",
  "feeAssetId": null,
  "proofs": [
    "FmGBaWABAy5bif7Qia2LWQ5B4KNmBnbXETL1mE6XEy4AAMjftt3FrxAa8x2pZ9ux391oY5c2c6ZSDEM4nzrvJDo"
  ],
  "assetId": "Fx2rhWK36H1nfXsiD4orNpBm2QG1JrMhx3eUcPVcoZm2",
  "transfers": [
    {
      "recipient": "3PHnjQrdK389SbzwPEJHYKzhCqWvaoy3GQB",
      "amount": 5000000000
    },
    {
      "recipient": "3PGNLwUG2GPpw74teTAxXFLxgFt3T2uQJsF",
      "amount": 5000000000
    },
    {
      "recipient": "3P5kQneM9EdpVUbFLgefD385LLYTXY5J32c",
      "amount": 5000000000
    },
    ...
  ],
  "id": "3LRfudet7avpQcW1AdauiBGb8SSRAaoCugDzngDPLVcv",
  "timestamp": 1528973951321,
  "height": 1041197
}
```

| Поле | Описание |
| :--- | :--- |
| assetId | ID переводимого токена, в кодировке base58. `null` — перевод  в WAVES |
| attachment | Произвольные данные (обычно комментарий к транзакции), до 140 байт, в кодировке base58 |
| transfers.recipient | Адрес получателя в кодировке base58 или [псевдоним](/ru/blockchain/account/alias) адреса |
| transfers.amount | Количество токена к переводу. Целое число, выраженное в минимальных неделимых единицах («копейках») токена |
| *transferCount* | Количество получателей |
| *totalAmount* | Сумма переводов в транзакции |

Поля `transferCount`, `totalAmount` не нужно заполнять при отправке транзакции. Они присутствуют в ответе методов получения транзакций Node REST API.

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат транзакции массового перевода](/ru/blockchain/binary-format/transaction-binary-format/mass-transfer-transaction-binary-format).

## Структура Ride

Для операций с транзакцией в смарт-контрактах используется структура [MassTransferTransaction](/ru/ride/structures/transaction-structures/mass-transfer-transaction).
