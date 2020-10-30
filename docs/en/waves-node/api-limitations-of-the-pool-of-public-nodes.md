# API Limitations of Pool of Public Nodes

**Pool of public nodes** is a set of public nodes which provide data via [REST API](/en/waves-node). You can use our public nodes to retreive the information from Waves blockchain, but we recommend to use your own nodes, because our pool has some limitations listed below.

There is <a href="https://www.nginx.com">Nginx-server</a> in front of each node in the pool, which limits:
* The maximum number of simultaneous connections per IP address. If limit is exceeded, HTTP Status 503 is returned.
* The maximum number of the requests per second (r/s) or requests per minute (r/m) from IP-address. If the requests rate exceeds the defined value, all the exceeding requests are put in queue. The `burst` is the size of that queue. If the number of the exceeding requests begins to surpass the value of the `burst`, the new exceeding requests are not put in the queue and HTTP Status 429 is returned. Read more in the <a href="http://nginx.org/en/docs/http/ngx_http_limit_req_module.html">documentation</a>.</li></ul>

In the tables below regular expressions are used to define paths, for example, <a href="https://stackoverflow.com/questions/2841550/what-does-d-mean-in-regular-expression-terms">\d+</a>.</li>

## Limitations on [Mainnet Pool](https://nodes.wavesnodes.com/)

| Path | Connections | Request rate |
| --- | :---: | :---: |
| / | 15 | 20 r/s (burst 50) |
| /blocks/seq/\d+/\d+ | 1 | 1 r/s |
| /blocks/at/.+ | 1 | 1 r/s |
|/blocks/last<br/>/scorex/version<br/>/scorex/status<br/>/consensus/algo<br/>/consensus/basetarget<br/>/waves/address<br/>/transactions/address/.+/limit/.+<br/>/addresses/validate/.+<br/>/blocks/signature/.+<br/>/blocks/delay/.+/.+<br/>/consensus/generatingbalance/.+<br/>/waves/external-payment<br/>/peers/connected<br/>/peers/all<br/>/node/version<br/>/node/status<br/>/addresses/effectiveBalance/.+<br/>/assets/broadcast/issue<br/>/assets/broadcast/reissue<br/>/assets/broadcast/transfer<br/>/waves/broadcast-signed-payment.+<br/>/waves/external-payment<br/>/waves/broadcast-signed-payment<br/>/leasing/broadcast/lease<br/>/leasing/broadcast/cancel<br/>/alias/.+<br/>/assets/broadcast/burn | 100| 20 r/s (burst 50) |
| /transactions/info/.+ | 15 | 20 r/s (burst 50) |
| /blocks/height<br/>/transactions/unconfirmed | 15 | 20 r/s (burst 50) |
| /addresses/balance/.+<br/>/assets/balance/.+ | 15 | 100 r/s (burst 100) |
| ^/transactions/address/.\*<br/>^/addresses/data/[^/]+$<br>^/assets/balance/[^/]+$<br>^/assets/[^/]/distribution.\* | | 17 r/m (burst 17) |

## Limitations on [Testnet Pool](https://nodes-testnet.wavesnodes.com/)

| Path | Connections | Request rate |
| --- | :---: | :---: |
| /blocks/seq/\d+/\d+ | 1 | 1 r/s |
| /blocks/at/.+ | 1 | 1 r/s |
|/blocks/last<br/>/scorex/version<br/>/scorex/status<br/>/consensus/algo<br/>/consensus/basetarget<br/>/waves/address<br/>/transactions/address/.+/limit/.+<br/>/addresses/validate/.+<br/>/blocks/signature/.+<br/>/blocks/delay/.+/.+<br/>/consensus/generatingbalance/.+<br/>/waves/external-payment<br/>/peers/connected<br/>/peers/all<br/>/node/version<br/>/node/status<br/>/addresses/effectiveBalance/.+<br/>/assets/broadcast/issue<br/>/assets/broadcast/reissue<br/>/assets/broadcast/transfer<br/>/waves/broadcast-signed-payment.+<br/>/waves/external-payment<br/>/waves/broadcast-signed-payment<br/>/leasing/broadcast/lease<br/>/leasing/broadcast/cancel<br/>/alias/.+<br/>/assets/broadcast/burn | 10 | 100 r/s |
| /transactions/info/.+ | 10 | 100 r/s |
| /blocks/height<br/>/transactions/unconfirmed | 10 | 100 r/s |
