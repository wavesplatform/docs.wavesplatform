# Бинарный формат транзакции генезиса

> Узнать больше о [транзакции генезиса](/ru/blockchain/transaction-type/genesis-transaction).

| № | Поле | Название JSON-поля |Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/ru/blockchain/transaction-type/) |type| [Byte](/ru/blockchain/blockchain/blockchain-data-types) | 1 | Значение должно быть равно 1 |
| 2 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |
| 3 | [Адрес](/ru/blockchain/account/address) получателя | recipient | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types)] | 26 |  |
| 4 | Количество [WAVES](/ru/blockchain/token/waves), которое будет переведено на [аккаунт](/ru/blockchain/account/) | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types) | 8 |  |

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesnodes.com/transactions/info/2DVtfgXjpMeFf2PQCqvwxAiaGbiDsxDjSdNQkc5JQ74eWxjWFYgwvqzC4dn7iB1AhuM32WxEiVi1SGijsBtYQwn8) в Node API.
