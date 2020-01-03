# Бинарный формат транзакции обмена

> Подробнее о [транзакции обмена](/ru/blockchain/transaction-type/exchange-transaction.md)

## Транзакция версии 2 <a id="v2"></a>

Транзакция версии 2 может принимать ордера версии [1](/ru/blockchain/binary-format/order-binary-format.md#v1), [2](/ru/blockchain/binary-format/order-binary-format.md#v2) и [3](/ru/blockchain/binary-format/order-binary-format.md#v3).

| Порядковый номер поля | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Указывает, что [версия транзакции](/ru/blockchain/transaction/transaction-version.md) является второй или выше.<br>Значение должно быть равно 0 |
| 2 | [ID типа транзакции](/ru/blockchain/transaction-type.md) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 7 |
| 3 | [Версия транзакции](/ru/blockchain/transaction/transaction-version.md) | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 2 |
| 4.1 | Размер ордера на покупку |  | [Int](/ru/blockchain/blockchain/blockchain-data-types.md) | 4 |  |
| 4.2 | Флаг версии ордера на покупку | order1.version | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | `S` | `S` = 1 если версия ордера 1.<br>`S` = 0 если версия ордера 2 |
| 4.3 | Ордер на покупку токена | order1 | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] |  |  |
| 5.1 | Размер ордера на продажу |  | [Int](/ru/blockchain/blockchain/blockchain-data-types.md) | 4 |  |
| 5.2 | Флаг [версии ордера](/ru/blockchain/binary-format/order-binary-format.md) на продажу | order2.version | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | `S` | `S` = 1 если версия ордера 1.<br>`S` = 0 если версия ордера 2 |
| 5.3 | Ордер на продажу токена | order2 | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] |  |  |
| 6 | Стоимость токена для покупки или продажи | price | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 | Количество [токена](/ru/blockchain/token.md) Б, которое отправитель ордера предлагает за один токен А |
| 7 | Количество | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 | Количество токена А, которое отправитель ордера хочет купить |
| 8 | [Комиссия матчера](/ru/blockchain/matcher-fee.md) за покупку | buyMatcherFee | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 9 | Комиссия матчера за продажу | sellMatcherFee | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 10 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 11 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 12 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof.md) | proofs | [Подтверждения](/ru/blockchain/transaction/transaction-proof.md) | `S` | Если массив пустой, то `S` = 3.<br>Если массив не пустой, то `S` = 3 + 2 × N + (`P`<sub>1</sub> + `P`<sub>2</sub> + ... + `P`<sub>n</sub>),<br>где<br>`N` — количество подтверждений в массиве,<br>`P`<sub>n</sub> — размер `N`-го подтверждения в байтах. Максимальное количество подтверждений в массиве — 8. Максимальный размер каждого подтверждения — 64 байта |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/9VJCXTdLqtsfvk1d68G5MT237ezQ4g9nuQhWZXR47vi9) в Node API.

## Транзакция версии 1 <a id="v1"></a>

Транзакция версии 1 может принимать ордера только версии 1.

| Порядковый номер поля | Поле | Тип поля | Размер поля в байтах | Комментарии |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/ru/blockchain/transaction-type.md) | [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 7 |
| 2 | Размер ордера на покупку в байтах | [Int](/ru/blockchain/blockchain/blockchain-data-types.md) | 4 |  |
| 3 | Размер ордера на продажу в байтах | [Int](/ru/blockchain/blockchain/blockchain-data-types.md) | 4 |  |
| 4 | Ордер на покупку | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] |  |  |
| 5 | Ордер на продажу | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] |  |  |
| 6 | Стоимость | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 | Количество [токена](/ru/blockchain/token.md) А, которое отправитель ордера предлагает за один токен Б |
| 7 | Количество | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 | Количество токена Б, которое отправитель ордера хочет купить |
| 8 | [Комиссия матчера](/ru/blockchain/matcher-fee.md) за покупку | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 9 | Комиссия матчера за продажу | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 10 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 11 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 12 | [Подпись транзакции](/ru/blockchain/transaction/transaction-signature.md) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | 64 |  |  |
