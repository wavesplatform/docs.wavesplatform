# Транзакция закрытия лизинга

Транзакция закрытия лизинга прекращает лизинг. См. [Транзакция лизинга](/ru/blockchain/transaction-type/lease-transaction).

## Комиссия за транзакцию

Минимальная комиссия за транзакцию закрытия лизинга — 0,001 WAVES.

Если отправитель транзакции — [dApp или смарт-аккаунт](/ru/blockchain/account/dapp), а сложность скрипта аккаунта или функции-верификатора dApp-скрипта больше [порога сложности отправителя](/ru/ride/limits/), минимальная комиссия увеличивается на 0,004 WAVES. (До активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations” дополнительная комиссия 0,004 WAVES требовалась независимо от сложности скрипта аккаунта или наличия и сложности функции-верификатора скрипта dApp.)

## JSON-представление

```json
{
  "type": 9,
  "id": "6rzxZ3rEsCxgmkcn6DDPB9f9Phi28D4JWZsCtwcViD8C",
  "sender": "3Mx7kNAFcGrAeCebnt3yXceiRSwru6N3XZd",
  "senderPublicKey": "81fxJw7HM2VX1ucq1vNKiedM1XBGX7H2TDUtxN6ib68Z",
  "fee": 100000,
  "feeAssetId": null,
  "timestamp": 1622579112096,
  "proofs": [
    "3eFnprsRSeczc371bQ7AUsbh6qjiUFze6y5BZGKbxyHG27K1cU6jVUgRdthYz9uWVw1FgVpLjMciGCb64rJnMp3k"
  ],
  "version": 2,
  "leaseId": "BhHPPHBZpfp8FBy8DE7heTpWGJySYg2uU2r4YM6qaisw",
  "chainId": 84,
  "height": 1551763,
  "applicationStatus": "succeeded",
  "lease": {
    "id": "BhHPPHBZpfp8FBy8DE7heTpWGJySYg2uU2r4YM6qaisw",
    "originTransactionId": "BhHPPHBZpfp8FBy8DE7heTpWGJySYg2uU2r4YM6qaisw",
    "sender": "3Mx7kNAFcGrAeCebnt3yXceiRSwru6N3XZd",
    "recipient": "3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7",
    "amount": 124935000,
    "height": 1551763,
    "status": "canceled"
  }
}
```

| Поле | Описание |
| :--- | :--- |
| leaseId | Идентификатор транзакции лизинга, который нужно отменить |
| *lease* | Параметры отмененного лизинга |
| chainId | [Байт сети](/ru/blockchain/blockchain-network/#байт-сети) |

Структуру `lease` не нужно заполнять при отправке транзакции: ее добавляет нода при предоставлении данных о транзакции через REST API.

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат транзакции закрытия лизинга](/ru/blockchain/binary-format/transaction-binary-format/lease-cancel-transaction-binary-format).

## Структура Ride

Для операций с транзакцией в смарт-контрактах используется структура [LeaseCancelTransaction](/ru/ride/structures/transaction-structures/lease-cancel-transaction).
