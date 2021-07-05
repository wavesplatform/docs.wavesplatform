# Waves Data Service API

Waves data service aggregates blockchain data into a PostrgreSQL relational database and provides fast and convenient information retrieval using variety of filters.

The Data Service API lets you get the following data:

* List of transactions, including transactions of each type.
* Parameters of tokens (assets) by ID or exchange tickers.
* Market data on cryptocurrency trading.

The Waves team provides data service instances with *public* API. The interactive documentation of endpoints in Swagger UI is available on the following links:
* Mainnet: <https://api.wavesplatform.com/v0/docs/>
* Testnet: <https://api-testnet.wavesplatform.com/v0/docs/>
* Stagenet: <https://api-stagenet.wavesplatform.com/v0/docs/>

:bulb: All endpoints of the Data Service API can be accessed both via POST and GET method. POST request parameters are specified in the request body in JSON format; the keys are the same as the query parameters in the GET request.

## Search Transactions

* The [/transactions/{txType}](https://api.wavesplatform.com/v0/docs/#/transactions) endpoints provide a list of transactions of a given type, applying filters depending on the type. For example, the [/transactions/transfer](https://api.wavesplatform.com/v0/docs/#/transactions/searchTxsTransfer) endpoint returns a list of transfer transactions with selection by sender, recipient, and asset ID.
* The [/transactions/all](https://api-testnet.wavesplatform.com/v0/docs/#/transactions/searchTxsAll) endpoint provides a list of transactions regardless of their types, with selection by sender address and timestamp.

Pagination is available for transaction lists. Together with the list of transactions, the endpoints return the `isLastPage` and `lastCursor` fields. If `"isLastPage": false`, then you can get the next page by specifying the `lastCursor` value as the `after` request parameter.

## Get Market Data

The Data Service API provides market data for **any pair of assets**. The data source is Exchange transactions. The tickers are sourced from the [Waves.Exchange](https://waves.exchange/), developed by a third-party team from the community.

* The [/pairs*](https://api.wavesplatform.com/v0/docs/#/pairs) endpoints provide current market data: last trade price and data for the last 24 hours: minimum, maximum and average price, volume and number of transactions, etc.

   :warning: Current market data, including last price, is not available for a pair of assets if there has not been a deal (Exchange transaction) for it in the last 24 hours.

* The [/candles](https://api.wavesplatform.com/v0/docs/#/candles) endpoint provides data for the OHCLV (open-high-low-close-volume) candlestick chart for a given period.

<details>
   <summary> <b>If there is no data in the response</b></summary>

If the endpoint returns `null` or `Not found` for the selected pair `{amountAsset}/{priceAsset}`, the reasons may be as follows:

1. The assets are specified in the request in the wrong order. Determine which of the assets is the amount asset (base currency), and which is the price asset (quote currency):

   • You can see asset pairs in the Waves.Exchange app ([for Mainnet](https://waves.exchange/), [Testnet](https://testnet.waves.exchange/), or [Stagenet](https://stagenet.waves.exchange/)). The first asset in the pair is the amount asset, the second is the price asset.

      ![](./_assets/asset-pair.png)

   • You can also use the `GET /matcher/settings` endpoint of the Мatcher API ([for Mainnet](https://matcher.waves.exchange), [Testnet](https://matcher-testnet.waves.exchange), or [Stagenet](https://matcher-stagenet.waves.exchange)) that returns the `priceAssets` list:

   &nbsp;&nbsp;&nbsp;• If both assets are in the `priceAssets` list, the price asset is the one that comes first.

   &nbsp;&nbsp;&nbsp;• If there is only one asset of the pair in the list, this asset is a price asset.

   &nbsp;&nbsp;&nbsp;• If both assets are not in the list, their IDs in byte representation should be sorted lexicographically: the first (smallest) one is a price asset.

   For more details, see the [Matcher API](https://docs.waves.exchange/en/waves-matcher/matcher-api) article in the Waves.Exchange documentation.

2. There were no Exchange transactions for the selected pair in the period for which the endpoint provides data (last 24 hours for the `/pairs*` endpoints). You can check this using the [/transactions/exchange](https://api.wavesplatform.com/v0/docs/#/transactions/searchTxsExchange) endpoint by getting, for example, the last 10 Exchange transactions for this pair.
</details>

Market data is available for all [matchers](https://docs.waves.exchange/en/waves-matcher/) (senders of Exchange transactions) or for a given matcher. To receive data for a given matcher, specify its address in the request.

:bulb: Address of the Waves.Exchange matcher:
* Mainnet: 3PEjHv3JGjcWNpYEEkif2w8NXV4kbhnoGgu
* Testnet: 3N8aZG6ZDfnh8YxS6aNcteobN8eXTWHaBBd
* Stagenet: 3MQkebjth2vaisUu7ENGYWEij3qWQdLxibe

## Limitations

* The maximum number of simultaneous connections per IP address is 15. If the limit is exceeded, HTTP Status 418 is returned.
* The maximum number of the requests per second (r/s) from IP-address is 40. If the requests rate exceeds the limit, the exceeding requests are queued. The size of the queue (burst) is 20. If the number of redundant requests has exceeded the size of the queue, new requests are not queued, HTTP status 429 is returned.

:warning: Please check the performance of your requests to the Data Service API before you run your application in production and load it. If the combination of filters you are using is slow (the response time is about a second), contact the [developer chat in Telegram](https://t.me/waves_ride_dapps_dev): we can suggest more effective way to obtain required data or optimize the processing of such requests in the data service.
