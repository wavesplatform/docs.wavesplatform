# Коды ответов и ошибки

HTTP-коды ответов REST API ноды представлены в таблице.

| Значение | Описание |
| :--- | :--- |
| 200 OK | Успешный запрос и ответ |
| 400 Bad Request | Неверные параметры запроса |
| 403 Forbidden | Отсутствует или указан неверный API-ключ при вызове [приватного метода](/ru/waves-node/node-api/#приватные-методы) |
| 404 Not Found | Запрошенный объект (блок, транзакция, алиас, ключ записи в хранилище данных) не найден |
| 429 Too Many Requests | Размер очереди запросов превысил ограничение, установленное для [публичных нод](/ru/waves-node/api-limitations-of-the-pool-of-public-nodes) |
| 500 Internal Server Error | Ошибка сервера |
| 501 Not Implemented | Неподдерживаемый тип транзакции |
| 503 Service Unavailable | API недоступен, или нода не успела обработать запрос в отведенное время (см. раздел [Медленные запросы](/ru/waves-node/node-api/slow-requests)), или превышено количество одновременных соединений, установленное для [публичных нод](/ru/waves-node/api-limitations-of-the-pool-of-public-nodes) |

В случае ошибки 4xx или 501 возвращается следующая структура:

```json
{
  "error": (number),
  "message": "(string)"
}
```

Пример:

```json
{
  "error": 10,
  "message": "Too big sequences requested"
}
```

| Код ошибки | Текст сообщения | Комментарий, возможные причины |
| :--- | :--- | :--- |
| 0 | Error is unknown | |
| 1 | failed to parse json message | • Невалидный JSON<br>• Отсутствует обязательное поле<br>• Невалидное значение поля |
| 2 | Provided API key is not correct | Отсутствует или указан неверный API-ключ при вызове [приватного метода](/ru/waves-node/node-api/#приватные-методы) |
| 10 | Too big sequences requested | Количество данных больше установленного лимита:<br>• Запрошено транзакций больше, чем указано в настройке `waves.rest-api.transactions-by-address-limit`<br>• Запрошено больше 100 блоков<br>• Превышены ограничения для [транзакции данных](/ru/blockchain/transaction-type/data-transaction)<br>• Превышена длина поля `attachment` для [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction) или [массового перевода](/ru/blockchain/transaction-type/mass-transfer-transaction) |
| 101 | Invalid signature | |
| 102 | Invalid address | |
| 108 | Invalid public key | |
| 110 | Invalid message | Не удалось декодировать сообщение, подпись или ключ в `/addresses/verify/{address}` or `/addresses/verifyText/{address}` |<!-- | 111 | Invalid name | Невалидное имя токена | | 112 | State check failed. Reason: ... | Ошибка применения транзакции к блокчейну | -->
| 113 | Overflow error | Сумма `fee`+`amount` или итоговая сумма в транзакции массового перевода больше максимального значения [Long](/ru/blockchain/blockchain/blockchain-data-types) |<!-- | 114 | Transaction to yourself | Отправитель и получатель лизинга совпадают || 115 | no private key for sender address in wallet | | -->
| 116 | Request contains invalid IDs. id1, id2, ... | Невалидные base58 в списке ID транзакций |
| 199 | ... | Прочие ошибки валидации |
| 301 | Block does not exist | |
| 302 | • alias '...' doesn't exist<br>• alias for address '...' doesn't exist | |
| 303 | • Transaction timestamp ... is more than ... ms in the future relative to block timestamp ...<br>• Transaction timestamp ... is more than ... ms in the past relative to previous block timestamp ... | |
| 304 | no data for this key | Запрашиваемый ключ отсутствует в хранилище данных аккаунта |
| 305 | ... | Ошибка компиляции скрипта |
| 306 | Error while executing (token\|account)-script: ... | Ошибка при выполнении скрипта ассета или аккаунта |
| 307 | Transaction is not allowed by account-script | |
| 308 | Transaction is not allowed by token-script | |
| 311 | transactions does not exist | • Не найден ассет по ID<br>• Не найдена транзакция по ID |
| 312 | transaction type not supported | |<!-- | 111 | negative amount | | | 112 | insufficient fee | | | 114 | negative fee per: ... | Отрицательное значение `min fee в sponsor транзакции | | 115 | non-positive amount: ... | amount имеет не положительное значение | -->
| 400 | Transaction ... is already in the state on a height of ... | Повторная отправка транзакции |
| 402 | Accounts balance errors | • У отправителя транзакции недостаточно средств для уплаты комиссии или для перевода<br>• У dApp недостаточно средств для выполнения [действий](/ru/ride/structures/script-actions/) (`ScriptTransfer` или `Burn`) |
| 403 | Order validation error: ... | • Указанное в ордере количество уже исполнено<br>• Недостаточная комиссия |
| 404 | Wrong chain-id. Expected - ..., provided - ... | |
| 405 | • Too many proofs (...), only ... allowed<br>• Too large proof (...), must be max ... bytes | |
| 4001 | • Transaction ID was not specified<br>• Wrong char<br>• ... has invalid length .... Length can either be ... or ... | ID транзакции отсутствует, невалидный или имеет недопустимую длину |
| 4002 | • Wrong char<br>• ... has invalid length .... Length can either be ... or ... | ID блока невалидный или имеет недопустимую длину |
| 4007 | Invalid asset id | |
