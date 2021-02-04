# Ограничения API пула публичных нод

**Пул публичных нод** — это множество публичных нод, предоставляющих данные через [REST API](/ru/waves-node/node-api/). Вы можете пользоваться публичными нодами для получения информации из блокчейна, но мы рекомендуем использовать собственные ноды, поскольку публичный пул имеет ограничения.

Перед каждой публичной нодой в пуле находится <a href="https://www.nginx.com/">веб-сервер Nginx</a>, который ограничивает:
* Количество одновременных соединений с одного IP-адреса. При превышении лимита возвращается HTTP Status 503.
* Количество запросов в секунду (r/s) или в минуту (r/m) с одного IP-адреса. Если количество поступающих запросов превышает заданное значение, то избыточные запросы ставятся в очередь на обработку. Размер очереди ограничен настройкой `burst`. Если количество избыточных запросов превысило `burst`, новые запросы не ставятся в очередь, возвращается HTTP Status 429. Подробнее см. в <a href="http://nginx.org/ru/docs/http/ngx_http_limit_req_module.html">документации</a>.

Кроме того, веб-сервер кеширует ответы ноды, поэтому данные могут быть устаревшими.

В таблицах ниже пути для запросов заданы с использованием регулярных выражений, например [d+](https://stackoverflow.com/questions/2841550/what-does-d-mean-in-regular-expression-terms).

## Ограничения для [пула Mainnet](https://nodes.wavesnodes.com/)

| Путь | Соединения | Запросы | Время кеширования |
| --- | :---: | :---: | :---: |
| / | 15 | 20 r/s (burst 50) | 1 s |
| /blocks/seq/\d+/\d+ | 1 | 1 r/s | 5 s |
| /blocks/at/.+ | 1 | 1 r/s | 30 s |
|/blocks/last<br/>/consensus/algo<br/>/consensus/basetarget<br/>/transactions/address/.+/limit/.+<br/>/addresses/validate/.+<br/>/blocks/delay/.+/.+<br/>/consensus/generatingbalance/.+<br/>/peers/connected<br/>/peers/all<br/>/node/version<br/>/node/status<br/>/addresses/effectiveBalance/.+<br/>/alias/.+ | 100| 20 r/s (burst 50) | 1 s |
| /transactions/info/.+ | 15 | 20 r/s (burst 50) | 1 m |
| /blocks/height<br/>/transactions/unconfirmed | 15 | 20 r/s (burst 50) | 15 s |
| /addresses/balance/.+<br/>/assets/balance/.+ | 15 | 100 r/s (burst 100) | 3 s |
| ^/transactions/address/.\*<br/>^/addresses/data/[^/]+$<br>^/assets/balance/[^/]+$<br>^/assets/[^/]/distribution.\* | | 17 r/m (burst 17) | – |
| /utils/script/evaluate | – | 10 r/m | – |

## Ограничения для [пула Testnet](https://nodes-testnet.wavesnodes.com/)

| Путь | Соединения | Запросы | Время кеширования |
| --- | :---: | :---: | :---: |
| / | 15 | 20 r/s (burst 50) | 1 s |
| /blocks/seq/\d+/\d+ | 1 | 1 r/s | 5 s |
| /blocks/at/.+ | 1 | 1 r/s | 30 s |
|/blocks/last<br/>/consensus/algo<br/>/consensus/basetarget<br/>/transactions/address/.+/limit/.+<br/>/addresses/validate/.+<br/>/blocks/delay/.+/.+<br/>/consensus/generatingbalance/.+<br/>/peers/connected<br/>/peers/all<br/>/node/version<br/>/node/status<br/>/addresses/effectiveBalance/.+<br/>/alias/.+ | 100| 20 r/s (burst 50) | 1 s |
| /transactions/info/.+ | 15 | 20 r/s (burst 50) | 1 m |
| /blocks/height<br/>/transactions/unconfirmed | 15 | 20 r/s (burst 50) | 15 s |
| /addresses/balance/.+<br/>/assets/balance/.+ | 15 | 100 r/s (burst 100) | 3 s |
| /utils/script/evaluate | – | 10 r/m | – |
