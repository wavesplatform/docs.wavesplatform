# Бинарный формат транзакции установки скрипта

> Узнать больше о [транзакции установки скрипта](/ru/blockchain/transaction-type/set-script-transaction-transaction)

## Транзакция версии 1

| Порядковый номер поля | Название поля | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Указывает что [версия транзакции](/ru/blockchain/transaction/transaction-version) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/ru/blockchain/transaction-type) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 15 |
| 3 | [Версия транзакции](/ru/blockchain/transaction/transaction-version) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 1 |
| 4 | [Байт сети](/ru/blockchain/blockchain-network/chain-id) | chainId | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 84 для [тестовой сети](/ru/blockchain/blockchain-network/test-network), 87 для [основной сети](/ru/blockchain/blockchain-network/main-network) |
| 5 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 6 | Флаг наличия скрипта |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — скрипт не установлен<br>1 — скрипт установлен |
| 7 | Длина скрипта |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | `S` | `S` = 0 если значение поля 6 равно 0.<br>S = 2 если значение поля 6 равно 1 |
| 8 | Скрипт | script | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 если значение поля 6 равно 0.<br>1 <= `S` <= 32768 если значение поля 6 равно 1 |
| 9 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 11 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | [Подтверждения](/ru/blockchain/transaction/transaction-proof) | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах. Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/8Nwjd2tcQWff3S9WAhBa7vLRNpNnigWqrTbahvyfMVrU) в Node API.
