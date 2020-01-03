# Бинарный формат транзакции обмена

> Подробнее о [транзакции обмена](/ru/blockchain/transaction-type/exchange-transaction)

## Транзакция версии 2 <a id="v2"></a>

Транзакция версии 2 может принимать ордера версии [1](/ru/blockchain/binary-format/order-binary-format#v1), [2](/ru/blockchain/binary-format/order-binary-format#v2) и [3](/ru/blockchain/binary-format/order-binary-format#v3).

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Указывает, что [версия транзакции](/ru/blockchain/transaction/transaction-version) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/ru/blockchain/transaction-type) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 7 |
| 3 | [Версия транзакции](/ru/blockchain/transaction/transaction-version) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 2 |
| 4.1 | Размер ордера на покупку |  | [Int](/ru/blockchain/blockchain/blockchain-data-types) | 4 |  |
| 4.2 | Флаг версии ордера на покупку | order1.version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | `S` | `S` = 1 если версия ордера 1.<br>`S` = 0 если версия ордера 2 |
| 4.3 | Ордер на покупку токена | order1 | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] |  |  |
| 5.1 | Размер ордера на продажу |  | [Int](/ru/blockchain/blockchain/blockchain-data-types) | 4 |  |
| 5.2 | Флаг [версии ордера](/ru/blockchain/binary-format/order-binary-format) на продажу | order2.version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | `S` | `S` = 1 если версия ордера 1.<br>`S` = 0 если версия ордера 2 |
| 5.3 | Ордер на продажу токена | order2 | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] |  |  |
| 6 | Стоимость токена для покупки или продажи | price | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 | Количество [токена](/ru/blockchain/token) Б, которое отправитель ордера предлагает за один токен А |
| 7 | Количество | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 | Количество токена А, которое отправитель ордера хочет купить |
| 8 | [Комиссия матчера](/ru/blockchain/matcher-fee) за покупку | buyMatcherFee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | Комиссия матчера за продажу | sellMatcherFee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 11 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 12 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | [Подтверждения](/ru/blockchain/transaction/transaction-proof) | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × N + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах. Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/9VJCXTdLqtsfvk1d68G5MT237ezQ4g9nuQhWZXR47vi9) в Node API.

## Транзакция версии 1 <a id="v1"></a>

Транзакция версии 1 может принимать ордера только версии 1.

| Порядковый номер поля | Поле | Тип поля | Размер поля в байтах | Комментарии |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/ru/blockchain/transaction-type) | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 7 |
| 2 | Размер ордера на покупку в байтах | [Int](/ru/blockchain/blockchain/blockchain-data-types) | 4 |  |
| 3 | Размер ордера на продажу в байтах | [Int](/ru/blockchain/blockchain/blockchain-data-types) | 4 |  |
| 4 | Ордер на покупку | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] |  |  |
| 5 | Ордер на продажу | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] |  |  |
| 6 | Стоимость | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 | Количество [токена](/ru/blockchain/token) А, которое отправитель ордера предлагает за один токен Б |
| 7 | Количество | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 | Количество токена Б, которое отправитель ордера хочет купить |
| 8 | [Комиссия матчера](/ru/blockchain/matcher-fee) за покупку | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 9 | Комиссия матчера за продажу | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 10 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 11 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 12 | [Подпись транзакции](/ru/blockchain/transaction/transaction-signature) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 64 |  |  |
