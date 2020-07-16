
# API Key

To use [node API](/en/waves-node/node-api/) you need to provide hashed [API key](https://en.wikipedia.org/wiki/Application_programming_interface_key) and set other parameters in the [REST API Settings](/en/waves-node/node-configuration#rest-api-settings) section of the node configuration file. Some API functions require original API Key (not the the hashed value) to be provided in HTTP request.

Your node API key is very important just like the [seed phrase](/en/blockchain/glossary#secret-phrase) and the wallet password.

## To Generate API Key Hash

1. Create unique string value that you will use as `API key`.

    **Note**: Default API Key is `ridethewaves!`.

2. Go to [Swagger web interface](/en/waves-node/node-api#swagger-web-interface).

3. Open the [/utils/hash/secure](https://nodes.wavesnodes.com/api-docs/index.html#!/utils/hashSecure_1) API method and input your unique string in the `message` field.

4. Click **Execute** to get the hashed API key. Use the hashed API key as the value of `api-key-hash` parameter in your node configuration file.

**Note:** The API key is transmitted in the HTTP header as unprotected plain text. An attacker can intercept your network transit and use it to steal your assets! It is highly important to protect the transmission using HTTPS or SSH port forwarding.

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
