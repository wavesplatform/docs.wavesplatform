# API limitations of the pool of public nodes

**Pool of public nodes** is a set of public [nodes](/en/blockchain/node/) which provide data via REST API [https://nodes.wavesnodes.com](https://nodes.wavesnodes.com/).

You can use our public nodes to retreive the information from Waves blockchain, but we recommend to use your own nodes, because our pool has some limitations listed in the table below.

<note type="info" title="">
<ul><li>There is <a href="https://www.nginx.com">Nginx-server</a> in front of each node in the pool, which limits the amount of connections and the number of requests per second a client is allowed to send to a node.</li>
<li>In the table below regular expressions are used to express path names, for example, <a href="https://stackoverflow.com/questions/2841550/what-does-d-mean-in-regular-expression-terms">\d+</a>.</li>
<li>The term burst below — is the Nginx setting that defines the maximum size of the "splash" of the requests. If the amount of arriving requests per second exceeds the defined value, all the exceeding requests are put in queue. The burst is the size of that queue. If the number of the exceeding requests begins to surpass the value of the burst, the new exceeding requests will not be put in the queue, and will be canceled with error. Read more in the <a href="http://nginx.org/en/docs/http/ngx_http_limit_req_module.html">documentation</a>.</li></ul>
</note>

| Path | Maximum number of simultaneous connections to Nginx-server per IP-address (if limit will be exceeded, the client will get HTTP Status 503) | Maximum number of the requests to Nginx-server per IP-address |
| --- | :---: | :---: |
|  | 15 | 20 (burst 50) |
| /blocks/seq/\d+/\d+ | 1 | 1 |
| /blocks/at/.+ | 1 | 1 |
|/blocks/last<br/>/scorex/version<br/>/scorex/status<br/>/consensus/algo<br/>/consensus/basetarget<br/>/waves/address<br/>/transactions/address/.+/limit/.+<br/>/addresses/validate/.+<br/>/blocks/signature/.+<br/>/blocks/delay/.+/.+<br/>/consensus/generatingbalance/.+<br/>/waves/external-payment<br/>/peers/connected<br/>/peers/all<br/>/node/version<br/>/node/status<br/>/addresses/effectiveBalance/.+<br/>/assets/broadcast/issue<br/>/assets/broadcast/reissue<br/>/assets/broadcast/transfer<br/>/waves/broadcast-signed-payment.+<br/>/waves/external-payment<br/>/waves/broadcast-signed-payment<br/>/leasing/broadcast/lease<br/>/leasing/broadcast/cancel<br/>/alias/.+<br/>/assets/broadcast/burn |  100|  20 (burst 50) |
| /transactions/info/.+ | 15 | 20 (burst 50) |
| /blocks/height\|/transactions/unconfirmed | 15 | 20 (burst 50) |
| /addresses/balance/.+|/assets/balance/.+ | 15 | 100 (burst 50) |
