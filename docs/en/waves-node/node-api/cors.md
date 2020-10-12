# How to Configure CORS: Support For Cross Domain Requests

CORS (Cross-origin resource sharing) is a mechanism that allows a web application to make cross domain requests, that is, to access the HTTP resources of another domain. By default, browsers restrict cross domain requests for security, so web applications can only request resources from the domain from which they are loaded.

So, in order for web applications from other domains to make a request to your node's REST API, you need to configure CORS. Otherwise, the request will get the **Cors origin policy error**. Complete the following steps:

1. Disable CORS in node settings.
2. Configure Web Server.
3. Enable CORS and send credentials in REST API request.

## 1. Disable CORS in Node Settings

In [node configuration file](/en/waves-node/node-configuration) set `waves.rest-api.cors = no`.

## 2. Configure Web Server

Add a web server, for example, nginx, between the web app and your node. The web server should add the following HTTP headers to the REST API response:

```
Access-control-allow-credentials: true
Access-control-allow-headers: DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,signature,timestamp
Access-control-allow-methods: GET, POST, OPTIONS, PUT, DELETE
Access-control-allow-origin: https://example.com
Access-control-expose-headers: Content-Length,Content-Range
```

Please note: the `Access-control-allow-origin` header should contain a certain domain, but not `*`. If you want any websites to be able to use your node's REST API, configure your web server to pass the domain specified in the request in the `Origin` header.

Example for configuring nginx:

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

## 3. Enable CORS and Send Credentials in REST API Request

Example:

```javascript
const response = await fetch(url, {
    mode: 'cors',
    credentials: 'include',
    ...
    body: JSON.stringify(data)
});
```
