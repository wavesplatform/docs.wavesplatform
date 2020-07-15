# Транзакция обновления информации ассета

Транзакция обновления информации ассета которая изменяет название и описание [токена](/ru/blockchain/token/).

> Транзакция обновления информации ассета добавлена в версии ноды 1.2.0. Возможность использовать эту транзакцию включается после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”.

Изменить наименование и/или описание токена можно:
* на Mainnet и Testnet — не ранее чем через 100 000 блоков от последнего изменения (или выпуска ассета);
* на Stagenet — не ранее чем через 10 блоков.

## Комиссия за транзакцию

Минимальная комиссия за транзакцию обновления информации ассета — 0,001 WAVES, в случае [смарт-ассета](/ru/blockchain/token/smart-asset) — 0,005 WAVES.

Если отправитель транзакции —  [dApp](/ru/blockchain/account/dapp) или [смарт-аккаунт](/ru/blockchain/account/smart-account), минимальная комиссия увеличивается на 0,004 WAVES.

## JSON-представление

```json
{
  "senderPublicKey": "6a6r9d3r2ccyE9SvuxmdZbfSHXmKPUoExnigvippJLfu",
  "fee": 100000,
  "description": "xxxXXXxxx",
  "type": 17,
  "version": 1,
  "applicationStatus": "succeed",
  "sender": "3MQdH4MAmM5RNz5TAT43UXXCvMtCa9YgHq9",
  "feeAssetId": null,
  "chainId": 83,
  "proofs": [
    "4DfvJL4cVisQaMuMB7ar15EtYZTvTZzAUQQMkq4RA3uTMzziVYLrbNHSL2a1eCqBV3YQb7dddXdjywETXHuu65ij"
  ],
  "assetId": "syXBywr2HVY7wxqkaci1jKY73KMpoLh46cp1peJAZNJ",
  "name": "zzzz",
  "id": "4DL8K4bRvYb9Qrys9Auq7hSGuLGq8XsUYZqDDBBfVGMf",
  "timestamp": 1591886337668,
  "height": 411389
}
```

| Поле | Описание |
| :--- | :--- |
| name | Название токена. От 4 до 16 байт |
| description | Описание токена. От 0 до 1000 байт |
| chainId | [Байт сети](/ru/blockchain/) |
| assetId | ID токена в кодировке base58 |

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат транзакции обновления информации ассета](/ru/blockchain/binary-format/transaction-binary-format/update-asset-info-transaction-binary-format).

## Структура Ride

Для операций с транзакцией в смарт-контрактах используется структура [UpdateAssetInfoTransaction](/ru/ride/structures/transaction-structures/update-asset-info-transaction).
