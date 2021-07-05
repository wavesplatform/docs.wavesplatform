# Slow Requests

Requests to the following endpoints can take a long time:

* `/addresses/data/{address}` in case of requesting data by a regular expression or requesting all account data;
* `/leasing/active/{address}`
* `/assets/balance/{address}`
* `/assets/{assetId}/distribution`: the endpoint is deprecated, use `/assets/{assetId}/distribution/{height}/{limit/{limit}` instead.

If the node cannot process the request within the allotted time, the node returns HTTP code 503 and the following text:

```
The server was not able to produce a timely response to your request.
Please try again in a short while!
```

On your own node, you can increase the request processing timeout by adding the following parameters to the [node configuration](/en/waves-node/node-configuration):

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

The `idle-timeout` should be not less than `request-timeout`.

