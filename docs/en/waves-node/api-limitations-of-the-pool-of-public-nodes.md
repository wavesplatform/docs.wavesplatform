# API Limitations of Pool of Public Nodes

**Pool of public nodes** is a set of public nodes which provide data via [REST API](/en/waves-node/node-api/). You can use our public nodes to retreive the information from the Waves blockchain, but we recommend to use your own nodes, because our pool has some limitations listed below.

There is <a href="https://www.nginx.com">Nginx</a> web server in front of each node in the pool, which limits:
* The maximum number of simultaneous connections per IP address. If limit is exceeded, HTTP Status 503 is returned.
* The maximum number of the requests per second (r/s) or requests per minute (r/m) from IP-address. If the requests rate exceeds the defined value, all the exceeding requests are put in the queue. The `burst` is the size of that queue. If the number of the exceeding requests begins to surpass the `burst` value, the new exceeding requests are not put in the queue and HTTP Status 429 is returned. Read more in the <a href="http://nginx.org/en/docs/http/ngx_http_limit_req_module.html">documentation</a>.</li></ul>

In addition, the web server caches node responses, so the data may be out of date.

In the tables below regular expressions are used to define paths, for example, <a href="https://stackoverflow.com/questions/2841550/what-does-d-mean-in-regular-expression-terms">\d+</a>.</li>

## Limitations on [Mainnet Pool](https://nodes.wavesnodes.com/)

| Path | Connections | Request rate | Сaching time |
| --- | :---: | :---: | :---: |
| / | 15 | 20 r/s (burst 50) | 1 s |
| /blocks/seq/\d+/\d+ | 1 | 1 r/s | 5 s |
| /blocks/at/.+ | 1 | 1 r/s | 30 s |
|/blocks/last<br/>/consensus/algo<br/>/consensus/basetarget<br/>/transactions/address/.+/limit/.+<br/>/addresses/validate/.+<br/>/blocks/delay/.+/.+<br/>/consensus/generatingbalance/.+<br/>/peers/connected<br/>/peers/all<br/>/node/version<br/>/node/status<br/>/addresses/effectiveBalance/.+<br/>/alias/.+ | 100| 20 r/s (burst 50) | 1 s |
| /transactions/info/.+ | 15 | 20 r/s (burst 50) | 1 m |
| /blocks/height<br/>/transactions/unconfirmed | 15 | 20 r/s (burst 50) | 15 s |
| /addresses/balance/.+<br/>/assets/balance/.+ | 15 | 100 r/s (burst 100) | 3 s |
| ^/transactions/address/.\*<br/>^/addresses/data/[^/]+$<br>^/assets/balance/[^/]+$<br>^/assets/[^/]/distribution.\* | – | 17 r/m (burst 17) | 1 s |
| /utils/script/evaluate | – | 10 r/m | 1 s |

## Limitations on [Testnet Pool](https://nodes-testnet.wavesnodes.com/)

| Path | Connections | Request rate | Сaching time |
| --- | :---: | :---: | :---: |
| / | 15 | 20 r/s (burst 50) | 1 s |
| /blocks/seq/\d+/\d+ | 1 | 1 r/s | 5 s |
| /blocks/at/.+ | 1 | 1 r/s | 30 s |
|/blocks/last<br/>/consensus/algo<br/>/consensus/basetarget<br/>/transactions/address/.+/limit/.+<br/>/addresses/validate/.+<br/>/blocks/delay/.+/.+<br/>/consensus/generatingbalance/.+<br/>/peers/connected<br/>/peers/all<br/>/node/version<br/>/node/status<br/>/addresses/effectiveBalance/.+<br/>/alias/.+ | 100| 20 r/s (burst 50) | 1 s |
| /transactions/info/.+ | 15 | 20 r/s (burst 50) | 1 m |
| /blocks/height<br/>/transactions/unconfirmed | 15 | 20 r/s (burst 50) | 15 s |
| /addresses/balance/.+<br/>/assets/balance/.+ | 15 | 100 r/s (burst 100) | 3 s |
| /utils/script/evaluate | – | 10 r/m | 1 s |
