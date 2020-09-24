# CORS: поддержка кросс-доменных запросов

CORS (Cross-origin resource sharing) — это технология, которая позволяет выполнять кросс-доменные запросы, то есть веб-приложению из одного домена обращаться к HTTP-ресурсам другого домена. По умолчанию браузеры в целях безопасности ограничивают кросс-доменные запросы, поэтому веб-приложения могут запрашивать ресурсы только с того домена, с которого были загружены.

Таким образом, чтобы веб-приложения с других доменов могли делать запрос к REST API вашей ноды, необходимо настроить CORS. В противном случае при запросе возникает ошибка **Cors origin policy error**.

Чтобы настроить CORS, используйте один из следующих способов:
* [Способ 1. Включить CORS в настройках ноды](#method1)
* [Способ 2. Настроить веб-сервер](#method2)

Если вы используете пул из нескольких нод, для соединения с одной и той же нодой в рамках одной сессии используйте **способ 2**. Если нода только одна, подходит любой из способов.

## Способ 1.<a id="method1"></a> Включить CORS в настройках ноды

По умолчанию кросс-доменные запросы разрешены. Убедитесь, что в [файле конфигурации ноды](/ru/waves-node/node-configuration) указано `waves.rest-api.cors = yes` или параметр отсутствует.

Если вы используете этот способ, отключите на фронтенде отправку авторизационных данных в запросе к REST API. В библиотеках `Signer` или `waves-transaction` отправка авторизационных данных по умолчанию включена, для ее отключения выполните следующую настройку:

* Для [Signer](/ru/building-apps/waves-api-and-sdk/client-libraries/signer)

   ```javascript
   
   ```

* Для [waves-transactions](https://wavesplatform.github.io/waves-transactions)

   ```javascript
   
   ```

## Способ 2.<a id="method2"></a> Настроить веб-сервер

1. Отключите CORS в [файле конфигурации ноды](/ru/waves-node/node-configuration): укажите `waves.rest-api.cors = no`.
2. Добавьте веб-сервер — например, nginx — который будет работать между веб-сайтом и нодой и добавлять в ответ REST API ноды следующие HTTP заголовки:

   ```
   Access-control-allow-credentials: true
   Access-control-allow-headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,signature,timestamp
   Access-control-allow-methods: GET, POST, OPTIONS, PUT, DELETE
   Access-control-allow-origin: https://example.com
   Access-control-expose-headers: Content-Length,Content-Range
   ```

   Обратите внимание: в заголовке `Access-control-allow-origin` должен быть указан конкретный домен (не *). Если вы хотите, чтобы любые веб-сайты могли использовать REST API вашей ноды, настройте веб-сервер таким образом, чтобы он передавал в этом заголовке домен, указанный в запросе в заголовке `Origin`.

   Пример настройки nginx:

   ```
   server {
       listen 80;
       server_name "";
 
       access_log /var/log/nginx/access.log;
       error_log /var/log/nginx/error.log error;
   ...
       location / {
           proxy_pass http://wavesrpc ;
       ...
           if ($request_method = 'OPTIONS') {
             return 204;
           }
           set $ref "*";
           if ($http_referer ~* ^(http?\:\/\/)(.*?)\/(.*)$) {
             set $ref $1$2;
           }
           add_header 'Access-Control-Allow-Origin' $ref always;
           add_header 'Access-Control-Allow-Credentials' 'true' always;
           add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS, PUT, DELETE' always;
           add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,signature,timestamp' always;
           add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range' always;
       }
   ...
   }
   ```


Если вы используете этот способ, включите на фронтенде отправку авторизационных данных в запросе к REST API. Пример:

```javascript
const response = await fetch(url, {
    mode: 'cors',
    credentials: 'include',
    ...
    body: JSON.stringify(data)
});
```

В библиотеках [Signer](/ru/building-apps/waves-api-and-sdk/client-libraries/signer) и [waves-transactions](https://wavesplatform.github.io/waves-transactions) отправка авторизационных данных по умолчанию включена.
