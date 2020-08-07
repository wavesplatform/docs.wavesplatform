
# API Key

[Node API](/en/waves-node/node-api/) private methods require [API key](https://en.wikipedia.org/wiki/Application_programming_interface_key) to be provided in HTTP request. Node owner can [set API key](#specify-api-key) and other parameters in the [REST API Settings](/en/waves-node/node-configuration#rest-api-settings) section of the node configuration file.

Your node API key is very important just like the [seed phrase](/en/blockchain/glossary#secret-phrase) and the wallet password.

**Note:** The API key is transmitted in the HTTP header as unprotected plain text. An attacker can intercept your network transit and use it to steal your assets! It is highly important to protect the transmission using HTTPS or SSH port forwarding.

## Set API Key

To set API key, you need to generate API key hash and then use it in your node configuration.

1. Create unique string value that you will use as `API key`.

2. Go to [Swagger web interface](/en/waves-node/node-api#swagger-web-interface).

3. Open the [/utils/hash/secure](https://nodes.wavesnodes.com/api-docs/index.html#!/utils/hashSecure_1) API method and input your unique string in the `message` field.

4. Click **Execute** to get the `hashed API key`.

5. Use the `hashed API key` as the value of the `api-key-hash` parameter in your [node configuration](/en/waves-node/node-configuration) file.

6. Restart your node.

## API Key for Private Methods

Private API methods require original API Key (not the the hashed value) provided in HTTP request using `X-Api-Key` header.

**Note**: Private API methods are marked with :lock: icon in [Swagger Web Interface](/en/waves-node/node-api#swagger-web-interface).

Example of CURL command signing transaction that already exists in the node owner wallet:

```bash
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'X-API-Key: YOUR UNIQUE API KEY'
-d '{ \
"amount": 5800000000, \
"fee": 100000, \
"type": 4, \
"version": 1, \
"attachment": "", \
"sender": "3P3pUKEAKxegWr3PZkGYNq1mzQQaQ5zxZbw", \
"feeAssetId": null, \
"assetId": null, \
"recipient": "3P9p39MwZ5JjwdBSYEWC6XYri4jpovzcAbs", \
"feeAsset": null, \
"timestamp": 1568020044350 \
}' 'http://nodes.wavesnodes.com/transactions/sign'
```


**Note**: Node API allows to sign transactions only with the keys that are stored on the node. If you want to sign your transaction/other user transaction, but the node is not yours, see libraries.
