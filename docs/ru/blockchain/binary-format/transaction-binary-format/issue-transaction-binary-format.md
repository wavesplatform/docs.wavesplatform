# Бинарный формат транзакции выпуска

> Узнать больше о [транзакции выпуска](/ru/blockchain/transaction-type/issue-transaction.md)

## Транзакция версии 2

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Указывает, что [версия транзакции](/ru/blockchain/transaction/transaction-version.md) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/ru/blockchain/transaction-type.md) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 3 |
| 3 | [Версия транзакции](/ru/blockchain/transaction/transaction-version.md) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 2 |
| 4 | [Байт сети](/ru/blockchain/blockchain-network/chain-id.md) | chainId | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | 84 для [тестовой сети](/ru/blockchain/blockchain-network/test-network.md), 87 для [основной сети](/ru/blockchain/blockchain-network/main-network.md) |
| 5 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 6.1 | Длина названия токена |  | [Short](/ru/blockchain/blockchain/blockchain-data-types.md) | 2 |  |
| 6.2 | Название токена | name | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | От 4 до 16 включительно |  |
| 7.1 | Длина описания токена |  | [Short](/ru/blockchain/blockchain/blockchain-data-types.md) | 2 |  |
| 7.2 | Описание токена | description | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | От 0 до 1000 включительно |  |
| 8 | Количество токенов, которые будут выпущены | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 9 | Число знаков после запятой у токена | decimals | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 |  |
| 10 | Флаг возможности довыпуска | reissuable | [Boolean](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Если значение равно 0, то довыпуск невозможен.<br>Если значение равно 1, то довыпуск возможен |
| 11 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 12 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 13.1 | Флаг наличия скрипта |  | [Boolean](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Если значение равно 0, то токен не имеет скрипт.<br>Если значение равно 1, то токен имеет скрипт |
| 13.2 | Длина скрипта |  | [Short](/ru/blockchain/blockchain/blockchain-data-types.md) | `S` | `S` = 0, если значение поля "Флаг наличия скрипта" равно 0.<br>`S` = 2, если значение поля "Флаг наличия скрипта" равно 1 |
| 13.3 | [Скрипт ассета](/ru/ride/script/script-types/asset-script.md) или [скрипт аккаунта](/ru/ride/script/script-types/account-script.md) | script | [String](/ru/blockchain/blockchain/blockchain-data-types.md) | `S` | `S` = 0, если значение поля "Флаг наличия скрипта" равно 0.<br>0 < `S` ≤ 32768, если значение поля "Флаг наличия скрипта" равно 1 |
| 14 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof.md) | proofs | [Подтверждения](/ru/blockchain/transaction/transaction-proof.md) | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах.<br>Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/FTQvw9zdYirRksUFCKDvor3hiu2NiUjXEPTDEcircqti) в Node API.

## Транзакция версии 1

| Порядковый номер поля | Название поля | Тип поля | Размер поля в байтах | Описание |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/ru/blockchain/transaction-type.md) | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 3 |
| 2 | Подпись транзакции | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | 64 |  |
| 3 | Открытый ключ аккаунта отправителя транзакции | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 4 | Длина имени токена | [Short](/ru/blockchain/blockchain/blockchain-data-types.md) | 2 |  |
| 5 | Имя токена | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | От 4 до 16 включительно |  |
| 6 | Длина описания токена | [Short](/ru/blockchain/blockchain/blockchain-data-types.md) | 2 |  |
| 7 | Описание токена | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | От 0 до 1000 включительно |  |
| 8 | Количество токенов | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 9 | Количество знаков после запятой у токена | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 |  |
| 10 | Флаг возможности довыпуска | [Boolean](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Если значение равно 0, то довыпуск невозможен.<br>Если значение равно 1, то довыпуск возможен |
| 11 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 12 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |  |
