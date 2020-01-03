# Бинарный формат транзакции перевода

> Узнать больше о [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction)

## Транзакция версии 2

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Указывает, что [версия транзакции](/ru/blockchain/transaction/transaction-version) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/ru/blockchain/transaction-type) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 4 |
| 3 | [Версия транзакции](/ru/blockchain/transaction/transaction-version) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 2 |
| 4 | Открытый ключ аккаунта отправителя транзакции | senderPublicKey | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 5 | Флаг типа переводимого токена |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — [WAVES](/ru/blockchain/token/waves)<br>1 — другой токен |
| 6 | [ID](/ru/blockchain/token/token-id) переводимого токена | assetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 если значение поля 5 равно 0.<br>`S` = 32 если значение поля 5 не равно 0 |
| 7 | Флаг типа токена комиссии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — WAVES<br>1 — другой токен |
| 8 | ID токена комиссии | feeAssetId | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 если значение поля 7 равно 0.<br>`S` = 32 если значение поля 7 не равно 0 |
| 9 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | Количество токена для перевода | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 11 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 12 | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) получателя | recipient | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 | Если первым байтом поля является 1, то за ним следует адрес.<br>Если первым байтом поля является 2, то за ним следует псевдоним |
| 13 | Длина вложения |  | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 |  |
| 14 | Вложение | attachment | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | До 140 включительно | Может включать произвольные данные |
| 15 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | Array[[Подтверждение](/ru/blockchain/transaction/transaction-proof)] | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × `N` + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер N-го подтверждения в байтах.<br>Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/FwYSpmVDbWQ2BA5NCBZ9z5GSjY39PSyfNZzBayDiMA88) в Node API.

## Транзакция версии 1

| Порядковый номер поля | Название поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/ru/blockchain/transaction-type) | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 4 |
| 2 | [Подпись транзакции](/ru/blockchain/transaction/transaction-signature) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 64 |  |
| 3 | Открытый ключ аккаунта отправителя транзакции | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 |  |
| 4 | Флаг типа переводимого токена | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — [WAVES](/ru/blockchain/token/waves)<br>1 — другой токен |
| 5 | [ID](/ru/blockchain/token/token-id) переводимого токена | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 если значение поля 4 равно 0.<br>`S` = 32 если значение поля 4 не равно 0 |
| 6 | Флаг типа токена комиссии | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | 0 — WAVES<br>1 — другой токен |
| 7 | ID токена комиссии | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | `S` | `S` = 0 если значение поля 4 равно 0.<br>`S` = 32 если значение поля 4 не равно 0 |
| 8 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | Количество токена для перевода | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 11 | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) получателя | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 32 | Если первым байтом поля является 1, то за ним следует адрес.<br>Если первым байтом поля является 2, то за ним следует псевдоним |
| 12 | Длина вложения | [Short](/ru/blockchain/blockchain/blockchain-data-types) | 2 |  |
| 13 | Вложение | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | До 140 включительно | Может включать произвольные данные |
