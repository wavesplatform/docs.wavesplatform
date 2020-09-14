# CORS: поддержка кросс-доменных запросов

CORS (Cross-origin resource sharing) — это технология, которая позволяет выполнять кросс-доменные запросы, то есть веб-приложению из одного домена обращаться к HTTP-ресурсам другого домена. По умолчанию браузеры в целях безопасности ограничивают кросс-доменные запросы, поэтому веб-приложения могут запрашивать ресурсы только с того домена, с которого были загружены.

Таким образом, чтобы веб-приложения с других доменов могли делать запрос к REST API вашей ноды, необходимо настроить CORS. Если этого не сделать, при запросе возникает ошибка **Cors origin policy error**. Выполните следующие действия:

1. Отключите CORS в настройках ноды.
2. Настройте веб-сервер.
3. Включите CORS и отправку авторизационных данных в запросе к REST API.

## 1. Отключите CORS в настройках ноды

В [файле конфигурации ноды](/ru/waves-node/node-configuration) укажите `waves.rest-api.cors = no`.

## 2. Настройте веб-сервер

Добавьте веб-сервер — например, nginx — который будет работать между веб-сайтом и нодой и добавлять в ответ REST API ноды следующие HTTP заголовки:

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

## 3. Включите CORS и отправку авторизационных данных в запросе к REST API

Пример:

```javascript
const response = await fetch(url, {
    mode: 'cors',
    credentials: 'include',
    ...
    body: JSON.stringify(data)
});
```
