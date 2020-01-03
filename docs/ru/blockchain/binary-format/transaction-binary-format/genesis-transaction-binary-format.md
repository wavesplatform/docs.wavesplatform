# Бинарный формат транзакции генезиса

> Узнать больше о [транзакции генезиса](/ru/blockchain/transaction-type/genesis-transaction.md)

## Транзакция версии 1

| Порядковый номер поля | Поле | Название JSON-поля |Тип поля | Размер поля в байтах | Комментарий |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [ID типа транзакции](/ru/blockchain/transaction-type.md) |type| [Byte](/ru/blockchain/blockchain/blockchain-data-types.md) | 1 | Значение должно быть равно 1 |
| 2 | [Временная метка транзакции](/ru/blockchain/transaction/transaction-timestamp.md) | timestamp | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 3 | [Адрес](/ru/blockchain/account/address.md) получателя | recipient | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | 26 |  |
| 4 | Количество [WAVES](/ru/blockchain/token/waves.md), которое будет переведено на [аккаунт](/ru/blockchain/account.md) | amount | [Long](/ru/blockchain/blockchain/blockchain-data-types.md) | 8 |  |
| 5 | [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee.md) | fee | [Long](/ru/blockchain/blockchain/blockchain-data-types.md)| 8 |  |
| 6 | [Подпись транзакции](/ru/blockchain/transaction/transaction-signature.md) | signature | Array[[Byte](/ru/blockchain/blockchain/blockchain-data-types.md)] | 64 |  ||

## JSON-представление транзакции

Смотрите [пример](https://nodes.wavesplatform.com/transactions/info/2DVtfgXjpMeFf2PQCqvwxAiaGbiDsxDjSdNQkc5JQ74eWxjWFYgwvqzC4dn7iB1AhuM32WxEiVi1SGijsBtYQwn8) в Node API.
