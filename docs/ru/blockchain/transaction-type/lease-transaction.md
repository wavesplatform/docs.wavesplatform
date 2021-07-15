# Транзакция лизинга

Транзакция лизинга передает WAVES в лизинг другому аккаунту. Средства, переданные в лизинг, начинают учитываться в генерирующем балансе получателя через 1000 блоков. Чем больше генерирующий баланс ноды, тем выше вероятность, что эта нода будет выбрана для создания следующего блока. Как правило, лизингополучатели делятся полученным вознаграждением за генерацию блока с лизингодателями.

Средства, переданные в лизинг, остаются заблокированными на аккаунте отправителя под его полным контролем. Отменить лизинг можно в любой момент с помощью [транзакции отмены лизинга](/ru/blockchain/transaction-type/lease-cancel-transaction).

## Комиссия за транзакцию

Минимальная комиссия за транзакцию лизинга — 0,001 WAVES.

Если отправитель транзакции — [dApp или смарт-аккаунт](/ru/blockchain/account/dapp), а сложность скрипта аккаунта или функции-верификатора dApp-скрипта больше [порога сложности отправителя](/ru/ride/limits/), минимальная комиссия увеличивается на 0,004 WAVES. (До активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations” дополнительная комиссия 0,004 WAVES требовалась независимо от сложности скрипта аккаунта или наличия и сложности функции-верификатора скрипта dApp.)

## JSON-представление

```json
{
  "senderPublicKey": "b8AB1PQWE7kH55cS48uDTV5fezrAyDTCf7iePyXNzNm",
  "amount": 500000000,
  "signature": "3n34MYd3Acx1JpTtvYffdVYCVySuRgZvSbHMA3AxqQwr4xvfZedv9UbqSB9k84PGY5C8RSwGRjDnMGcYwQu2x7B5",
  "fee": 100000,
  "type": 8,
  "version": 1,
  "sender": "3P6iv9tYo3ELne7tc9HR8BzhK3LE2aDDu1A",
  "feeAssetId": null,
  "proofs": [
    "3n34MYd3Acx1JpTtvYffdVYCVySuRgZvSbHMA3AxqQwr4xvfZedv9UbqSB9k84PGY5C8RSwGRjDnMGcYwQu2x7B5"
  ],
  "recipient": "3P2HNUd5VUPLMQkJmctTPEeeHumiPN2GkTb",
  "id": "7k4EPgA3VxoE56TMJLjvF9FMpywyfeS5qRJSEEN9XGuU",
  "timestamp": 1528813353617,
  "status": "canceled",
  "height": 1038624
}
```

| Поле | Описание |
| :--- | :--- |
| amount | Количество WAVELET, передаваемое в лизинг (то есть количество WAVES, умноженное на 10<sup>8</sup>) |
| recipient | Адрес получателя в кодировке base58 или псевдоним адреса |
| *status* | Статус лизинга:<br>- `active` — лизинг действует.<br>- `canceled` — лизинг отменен, см. [Транзакция отмены лизинга](/ru/blockchain/transaction-type/lease-cancel-transaction). |

Поле `status` не нужно заполнять при отправке транзакции, и оно не хранится на блокчейне: его вычисляет нода при предоставлении данных о транзакции через REST API.

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат транзакции лизинга](/ru/blockchain/binary-format/transaction-binary-format/lease-transaction-binary-format).

## Структура Ride

Для операций с транзакцией в смарт-контрактах используется структура [LeaseTransaction](/ru/ride/structures/transaction-structures/lease-transaction).
