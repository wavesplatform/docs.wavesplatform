# Бинарный формат транзакции обмена

> Подробнее о [транзакции обмена](/ru/blockchain/transaction-type/exchange-transaction).

## Версия 3

Бинарный формат версии 3 соответствует protobuf-схеме [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). Описание полей, общих для всех типов транзакций, представлено в разделе [Бинарный формат транзакции](/ru/blockchain/binary-format/transaction-binary-format/).

Транзакция версии 3 может сoдержать ордера версий [1](/ru/blockchain/binary-format/order-binary-format#v1)–[4](/ru/blockchain/binary-format/order-binary-format#v4).

Версия 3 появилась с момента активации фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”.

```
message ExchangeTransactionData {
    int64 amount = 1;
    int64 price = 2;
    int64 buy_matcher_fee = 3;
    int64 sell_matcher_fee = 4;
    repeated Order orders = 5;
};
```

| Поле | Размер | Описание |
| :--- | :--- | :--- |
| amount | 8 байт | Количество amount-ассета (базовой валюты), которое получил отправитель ордера на покупку от отправителя ордера на продажу, в минимальных единицах («копейках») |
| price | 8 байт |  Цена сделки: стоимость amount-ассета (базовой валюты), выраженная в price-ассете (валюте котировки), умноженная на 10<sup>8</sup>. Подробнее см. в разделе [Биржевая заявка](/ru/blockchain/order) |
| buy_matcher_fee | 8 байт | [Комиссия матчера](/ru/blockchain/glossary#к) за покупку. ID токена комиссии указан в ордере на покупку |
| sell_matcher_fee | 8 байт | [Комиссия матчера](/ru/blockchain/glossary#к) за продажу. ID токена комиссии указан в ордере на продажу |
| orders | | Ордер на покупку и ордер на продажу. См. раздел [Бинарный формат ордера](/ru/blockchain/binary-format/order-binary-format) | 

## Версия 2

Транзакция версии 2 может сoдержать ордера версии [1](/ru/blockchain/binary-format/order-binary-format#v1), [2](/ru/blockchain/binary-format/order-binary-format#v2) и [3](/ru/blockchain/binary-format/order-binary-format#v3).

| № | Поле | Название JSON-поля | Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | Флаг версии |  | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Указывает, что версия транзакции является второй или выше.<br>Значение должно быть равно 0 |
| **2** | [ID типа транзакции](/ru/blockchain/transaction-type/) | type | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 7 |
| **3** | Версия транзакции | version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 2 |
| **4.1** | Размер ордера на покупку |  | [Int](/ru/blockchain/blockchain/blockchain-data-types) | 4 | Размер с учетом флага 4.2 |
| **4.2** | Флаг версии ордера на покупку | order1.version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | `S` | `S` = 1, если версия ордера 1.<br>`S` = 0, если версия ордера 2 или 3 |
| **4.3** | Ордер на покупку токена | order1 | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] |  | См. [Бинарный формат ордера](/ru/blockchain/binary-format/order-binary-format) |
| **5.1** | Размер ордера на продажу |  | [Int](/ru/blockchain/blockchain/blockchain-data-types) | 4 | Размер с учетом флага 5.2 |
| **5.2** | Флаг версии ордера на продажу | order2.version | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | `S` | `S` = 1, если версия ордера 1.<br>`S` = 0, если версия ордера 2 или 3 |
| **5.3** | Ордер на продажу токена | order2 | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] |  | См. [Бинарный формат ордера](/ru/blockchain/binary-format/order-binary-format) |
| **6** | Цена сделки | price | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 | Стоимость amount-ассета (базовой валюты), выраженная в price-ассете (валюте котировки) |
| **7** | Количество | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 | Количество amount-ассета (базовой валюты), которое получил отправитель ордера на покупку от отправителя ордера на продажу |
| **8** | [Комиссия матчера](/ru/blockchain/glossary#к) за покупку | buyMatcherFee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **9** | Комиссия матчера за продажу | sellMatcherFee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **10** | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **11** | Временная метка транзакции | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 12 | [Подтверждения транзакции](/ru/blockchain/transaction/transaction-proof) | proofs | См. раздел [Бинарный формат подтверждений](/ru/blockchain/binary-format/transaction-proof-binary-format) | `S` | Если массив пустой, то `S` = 3. <br>Если массив не пустой, то `S` = 3 + 2 × `N` + 64 × `N`, где `N` — количество подтверждений в массиве.<br>Максимальное количество подтверждений в массиве — 8. Размер каждого подтверждения — 64 байта |

> Поля, номера которых выделены жирным шрифтом, составляют байты тела транзакции.

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesnodes.com/transactions/info/9VJCXTdLqtsfvk1d68G5MT237ezQ4g9nuQhWZXR47vi9) в Node API.

## Версия 1

Транзакция версии 1 может принимать ордера только версии 1.

| № | Поле | Тип поля | Размер поля в байтах | Комментарии |
| :--- | :--- | :--- | :--- | :--- |
| **1** | [ID типа транзакции](/ru/blockchain/transaction-type/) | [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 7 |
| **2** | Размер ордера на покупку в байтах | [Int](/ru/blockchain/blockchain/blockchain-data-types) | 4 |  |
| **3** | Размер ордера на продажу в байтах | [Int](/ru/blockchain/blockchain/blockchain-data-types) | 4 |  |
| **4** | Ордер на покупку | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] |  |  |
| **5** | Ордер на продажу | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] |  |  |
| **6** | Цена сделки | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 | Стоимость amount-ассета (базовой валюты), выраженная в price-ассете (валюте котировки) |
| **7** | Количество | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 | Количество amount-ассета (базовой валюты), которое получил отправитель ордера на покупку от отправителя ордера на продажу |
| **8** | [Комиссия матчера](/ru/blockchain/glossary#к) за покупку | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **9** | Комиссия матчера за продажу | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **10** | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee) | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| **11** | Временная метка транзакции | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 12 | [Подпись транзакции](/ru/blockchain/transaction/transaction-proof) | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 64 |  |  |

> Поля, номера которых выделены жирным шрифтом, составляют байты тела транзакции.
