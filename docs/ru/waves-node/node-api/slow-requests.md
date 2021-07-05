# Медленные запросы

Вызовы следующих методов могут выполняться длительное время:

* `/addresses/data/{address}` в случае запроса данных по регулярному выражению или всех данных аккаунта;
* `/leasing/active/{address}`
* `/assets/balance/{address}`
* `/assets/{assetId}/distribution` — метод устарел, используйте вместо него `/assets/{assetId}/distribution/{height}/limit/{limit}`.

Если нода не может обработать запрос в отведенное время, возвращается ошибка с HTTP-кодом 503 и следующим текстом:

```
The server was not able to produce a timely response to your request.
Please try again in a short while!
```

На собственной ноде вы можете увеличить таймаут обработки запросов, добавив в [конфигурацию ноды](/ru/waves-node/node-configuration) следующие параметры:

```
waves {
  ...
  akka {
    http.server {
      idle-timeout = 10m
      request-timeout = 10m
    }
  }
}
```

`idle-timeout` должен быть не меньше, чем `request-timeout`.
