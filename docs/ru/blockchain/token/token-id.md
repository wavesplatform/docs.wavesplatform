# ID токена

Идентификатор токена представляет собой последовательность байтов:
* Если токен выпущен [транзакцией выпуска](/ru/blockchain/transaction-type/issue-transaction), идентификатор токена совпадает с идентификатором транзакции.
* Если токен выпущен [транзакцией вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction), то есть вызываемая функция выполнила действие [Issue](/ru/ride/structures/script-actions/issue), то идентификатор токена вычисляется как хеш BLAKE2b-256 данных структуры `Issue` и временной метки транзакции вызова скрипта.

В [REST API](/ru/waves-node/node-api/) ноды Waves идентификатор токена представлен в кодировке [base58](https://ru.wikipedia.org/wiki/Base58). Например:

```
 "assetId": "8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS"
```

У WAVES нет идентификатора. В REST API для WAVES используется значение `null`.
