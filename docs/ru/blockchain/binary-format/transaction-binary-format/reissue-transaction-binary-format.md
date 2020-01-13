# Бинарный формат транзакции довыпуска

> Узнать больше о [транзакции довыпуска](/ru/blockchain/transaction-type/reissue-transaction)

## Транзакция версии 2

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Указывает, что [версия транзакции](/ru/blockchain/transaction/transaction-version) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/ru/blockchain/transaction-type) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 5 |
| 3 | [Версия транзакции](/ru/blockchain/transaction/transaction-version) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 2 |
| 4 | [Байт сети](/ru/blockchain/blockchain-network/chain-id) | chainId | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 84 для [тестовой сети](/ru/blockchain/blockchain-network/test-network), 87 для [основной сети](/ru/blockchain/blockchain-network/main-network) |
| 5 | Открытый ключ аккаунта отправителя | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 6 | ID токена | assetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 7 | Количество токена | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 8 | Флаг довыпуска | reissuable | [Boolean](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — повторный выпуск невозможен<br>1 — повторный выпуск возможен |
| 9 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 11 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | [Подтверждения](/ru/blockchain/transaction/transaction-proof) | S |  |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/5CZV9RouJs7uaRkZY741WDy9zV69npX1FTZqxo5fsryL) в Node API.

## Транзакция версии 1

| Порядковый номер поля | Название поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/ru/blockchain/transaction-type) | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 5 |
| 2 | [Подпись транзакции](/ru/blockchain/transaction/transaction-signature) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 64 |  |
| 3 | Открытый ключ аккаунта отправителя транзакции | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 4 | ID токена | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 5 | Количество токена | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 6 | Флаг возможности повторного выпуска | [Boolean](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — повторный выпуск невозможен<br>1 — повторный выпуск возможен |
| 7 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 8 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
