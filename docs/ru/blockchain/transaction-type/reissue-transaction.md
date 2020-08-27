# Транзакция довыпуска

Транзакция довыпуска увеличивает количество [токена](/ru/blockchain/token/) на блокчейне и/или запрещает его довыпуск. Отправить транзакцию довыпуска может только аккаунт, выпустивший токен. Возможность довыпуска токена регулируется полем `reissuable`.

## Комиссия за транзакцию

Минимальная комиссия за транзакцию довыпуска:
* 0,001 WAVES — после активации фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”.
* 1 WAVES — до активации фичи № 15.

В случае довыпуска [смарт-ассета](/ru/blockchain/token/smart-asset) минимальная комиссия увеличивается на 0,004 WAVES. 

Если отправитель транзакции —  [dApp](/ru/blockchain/account/dapp) или [смарт-аккаунт](/ru/blockchain/account/smart-account), минимальная комиссия также увеличивается на 0,004 WAVES.

## JSON-представление

```json
{
  "senderPublicKey": "DjYEAb3NsQiB6QdmVAzkwJh7iLgUs3yDLf7oFEeuZjfM",
  "quantity": 200000,
  "fee": 100000000,
  "type": 5,
  "version": 2,
  "reissuable": true,
  "sender": "3PLJciboJqgKsZWLj7k1VariHgre6uu4S2T",
  "feeAssetId": null,
  "chainId": 87,
  "proofs": [
    "5mEveeUwBdBqe8naNoV5eAe5vj6fk8U743eHGkhxhs3v9PMsb3agHqpe4EtzpUFdpASJegXyjrGSbynZg557cnSq"
  ],
  "assetId": "GA4gB3Lf3AQdF1vBCbqGMTeDrkUxY7L83xskRx6Z7kEH",
  "id": "27ETigYaHym2Zbdp4x1gnXnZPF1VJCqQpXmhszC35Qac",
  "timestamp": 1548521785933,
  "height": 1368623
}
```

| Поле | Описание |
| :--- | :--- |
| assetId | ID токена в кодировке base58 |
| quantity | Количество токена к довыпуску. Целое число, выраженное в минимальных неделимых единицах («копейках») токена. Итоговое количество токена в результате довыпуска не должно превышать 9&nbsp;223&nbsp;372&nbsp;036&nbsp;854&nbsp;775&nbsp;807 |
| chainId | [Байт сети](/ru/blockchain/blockchain-network/#байт-сети) |
| reissuable | Флаг возможности довыпуска |

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат транзакции довыпуска](/ru/blockchain/binary-format/transaction-binary-format/reissue-transaction-binary-format).

## Структура Ride

Для операций с транзакцией в смарт-контрактах используется структура [ReissueTransaction](/ru/ride/structures/transaction-structures/reissue-transaction).

