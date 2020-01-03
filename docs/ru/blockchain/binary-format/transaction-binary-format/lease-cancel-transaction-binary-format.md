# Бинарный формат транзакции закрытия лизинга

> Узнать больше о [транзакции закрытия лизинга](/ru/blockchain/transaction-type/burn-transaction.md)

## Транзакция версии 2

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Указывает, что [версия транзакции](/ru/blockchain/transaction/transaction-version.md) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/ru/blockchain/transaction-type.md) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 9 |
| 3 | [Версия транзакции](/ru/blockchain/transaction/transaction-version.md) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 2 |
| 4 | [Байт сети](/ru/blockchain/blockchain-network/chain-id.md) | chainId | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | 84 для [тестовой сети](/ru/blockchain/blockchain-network/test-network.md), 87 для [основной сети](/ru/blockchain/blockchain-network/main-network.md) |
| 5 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 6 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 7 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 8 | ID лизинга | leaseId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 9 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof.md) | proofs | [Подтверждения](/ru/blockchain/transaction/transaction-proof.md) | `S` | Если массив пустой, то `S`= 3. <br>Если массив не пустой, то `S`= 3 + 2 × `N` + \(`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>\), <br>где <br>`N` — количество подтверждений в массиве, <br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах.<br> Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/7siEtrJAvmVzM1WDX6v9RN4qkiCtk7qQEeD5ZhE6955E) в Node API.

## Транзакция версии 1

| Порядковый номер поля | Название поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/ru/blockchain/transaction-type.md) | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 9 |
| 2 | Открытый ключ аккаунта отправителя транзакции | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 3 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 4 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 5 | ID лизинга | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 6 | [Подпись транзакции](/ru/blockchain/transaction/transaction-signature.md) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | 64 |  |  |
