# Транзакция закрытия лизинга

Транзакция закрытия лизинга прекращает лизинг. См. [Транзакция лизинга](/ru/blockchain/transaction-type/lease-transaction).

## Комиссия за транзакцию

Минимальная комиссия за транзакцию закрытия лизинга — 0,001 WAVES.

Если отправитель транзакции — [dApp или смарт-аккаунт](/ru/blockchain/account/dapp), минимальная комиссия увеличивается на 0,004 WAVES.

Начиная с версии ноды 1.3.1, с момента активации фичи №&nbsp;16 “dApp-to-dApp invocations, Ride V5”, дополнительная комиссия 0,004 WAVES требуется только в случае, если сложность скрипта аккаунта или функции-верификатора dApp-скрипта больше [порога сложности отправителя](/ru/ride/limits/). Версии 1.3.x в настоящее время доступны только на [Stagenet](/ru/blockchain/blockchain-network/).

## JSON-представление

```json
{
  "senderPublicKey": "BEPNBjo9Pi9hJ3hVtxpwyEfXCW3qWUNk5dMD7aFdiHsa",
  "fee": 100000,
  "type": 9,
  "version": 2,
  "leaseId": "BggRaeNCVmzuFGohzF4dQeYXSWr8i5zNSnGtdKc5eGrY",
  "sender": "3PMBXG13f89pq3WyJHHKX2m5zN6kt2CEkHQ",
  "feeAssetId": null,
  "chainId": 87,
  "proofs": [
    "3cqVVsaEDzBz367KTBFGgMXEYJ2r3yLWd4Ha8r3GzmAFsm2CZ3GeNW22wqxfK4LNRFgsM5kCWRVhf6gu2Nv6zVqW"
  ],
  "id": "7siEtrJAvmVzM1WDX6v9RN4qkiCtk7qQEeD5ZhE6955E",
  "lease": {
    "senderPublicKey": "BEPNBjo9Pi9hJ3hVtxpwyEfXCW3qWUNk5dMD7aFdiHsa",
    "amount": 406813214,
    "sender": "3PMBXG13f89pq3WyJHHKX2m5zN6kt2CEkHQ",
    "feeAssetId": null,
    "signature": "4u1sBnSrBiLE7DdE3Uj7R8kVqW3BFoBcwnuqDyssqxaYrF5hs6ABbw5hVT9S1AjQmgDr18euS5bYgedy7wdFUBjC",
    "proofs": [
      "4u1sBnSrBiLE7DdE3Uj7R8kVqW3BFoBcwnuqDyssqxaYrF5hs6ABbw5hVT9S1AjQmgDr18euS5bYgedy7wdFUBjC"
    ],
    "fee": 100000,
    "recipient": "3PMWRsRDy882VR2viKPrXhtjAQx7ygQcnea",
    "id": "BggRaeNCVmzuFGohzF4dQeYXSWr8i5zNSnGtdKc5eGrY",
    "type": 8,
    "version": 1,
    "timestamp": 1548192718874
  },
  "timestamp": 1548660629957,
  "height": 1370970
}
```

| Поле | Описание |
| :--- | :--- |
| leaseId | Идентификатор транзакции лизинга, который нужно отменить |
| *lease* | Поля транзакции лизинга |
| chainId | [Байт сети](/ru/blockchain/blockchain-network/#байт-сети) |

Структуру `lease` не нужно заполнять при отправке транзакции: ее добавляет нода при предоставлении данных о транзакции через REST API.

Описание полей, общих для всех типов транзакций, представлено в разделе [JSON-представление транзакции](/ru/blockchain/transaction/#json-представление-транзакции).

## Бинарный формат

См. раздел [Бинарный формат транзакции закрытия лизинга](/ru/blockchain/binary-format/transaction-binary-format/lease-cancel-transaction-binary-format).

## Структура Ride

Для операций с транзакцией в смарт-контрактах используется структура [LeaseCancelTransaction](/ru/ride/structures/transaction-structures/lease-cancel-transaction).
