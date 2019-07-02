# Транзакция генезиса

**Транзакция генезиса** — самая первая [транзакция](/blockchain/transaction.md) в блокчейне.

Транзакция генезиса отвечает за первоначальное распределение токенов между [адресами](/blockchain/address.md).

В блокчейне может быть только одна транзакция генезиса.

## Структура данных

| Порядковый номер поля | Название поля | Название JSON-поля |Тип поля | Размер поля в байтах | Описание поля |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Тип транзакции |type| Байт | 1 | ID [типа транзакции](/blockchain/transaction-type.md). <br>Значение должно быть равно 6 |
| 2 | Временная метка | timestamp | Длинное целое | 8 | Unix-время отправки транзакции в блокчейн |
| 3 | Адрес аккаунта | recipient | Массив байтов | 26 |  |
| 4 | Количество | amount | Длинное целое | 8 | Количество [WAVES](/blockchain/token/waves.md), которое будет начислено аккаунту |
| 5 | Комиссия|fee | Длинное целое | 8 | Комиссия за транзакцию в [WAVELET](/blockchain/token/wavelet.md) |
| 6 | Подпись | signature | Массив байтов | 64 | [Подпись транзакции](/blockchain/transaction-signature.md) |

## JSON-представление транзакции

```json
{ 
   "type":1,
   "timestamp":2686163577562422135,
   "recipient":"3MowSBodyYH25xayqCWoCtY7KBHc7wvv8cs",
   "amount":3074457345618258602,
   "id":"3E2qJVdMC1wzFEZwCyejA1a1AwDv52wwi2CRPaf5uNw3WTQYNW9C32cxGWBehJi2ED5f2YtYg2RJRcAX2U3wPhxy",
   "fee":0,
   "signature":"3E2qJVdMC1wzFEZwCyejA1a1AwDv52wwi2CRPaf5uNw3WTQYNW9C32cxGWBehJi2ED5f2YtYg2RJRcAX2U3wPhxy",
}
```
