# Бинарный формат транзакции лизинга

## Транзакция версии 2

| Порядковый номер поля | Поле | Название JSON-поля |Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии | | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Указывает что [версия транзакции](/ru/blockchain/binary-format/transaction-binary-format.md) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/ru/blockchain/transaction-type.md) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 8 |
| 3 | [Версия транзакции](/ru/blockchain/transaction/transaction-version.md) |version| [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 2 |
| 4 | Зарезервированное поле |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 0 |
| 5 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 6 | [Адрес](/ru/blockchain/account/address.md) или [псевдоним](/ru/blockchain/alias/alias.md) получателя | recipient | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | 32 | Если первый байт поля равен 1, то в поле хранится адрес; если 2 — псевдоним |
| 7 | Количество токенов, отдаваемых в лизинг | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 8 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 9 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 10 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof.md) |proofs| [Подтверждения](/ru/blockchain/transaction/transaction-proof.md) | `S` | Если массив пустой, то `S`= 3. <br>Если массив не пустой, то `S`= 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>), <br>где <br>`N` — количество подтверждений в массиве, <br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах.<br> Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/J6jZCzLpWJX8EDVhopKFx1mcbFizLGHVb44dvqPzH4QS) в Node API.

## Транзакция версии 1

| Порядковый номер поля | Поле | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/ru/blockchain/transaction-type.md) | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 8 |
| 2 | Открытый ключ аккаунта отправителя транзакции | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | 32 |  |
| 3 | [Адрес](/ru/blockchain/account/address.md) или [псевдоним](/ru/blockchain/account/alias.md) получателя | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | 32 | Если первый байт поля равен 1, то в поле хранится адрес; если 2 — псевдоним |
| 4 | Количество токенов, отдаваемых в лизинг | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 5 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 6 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) | [Long](/ru/blockchain/blockchain/blockchain-data-types.md)| 8 |  |
| 7 | [Подпись транзакции](/ru/blockchain/transaction/transaction-signature.md) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | 64 |  |  |
