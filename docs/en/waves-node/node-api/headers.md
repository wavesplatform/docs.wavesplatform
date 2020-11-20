# Monetary Fields Format

By default, monetary values are represented in API responses as numbers. These numbers can take up to 64 bit that can cause issues with programming languages that represent integers with fewer than 64 bit, such as JavaScript. To work around these issues, you can obtain monetary values as strings by specifying the following HTTP header in the request:

```
Accept: application/json; large-significand-format=string
```

Example:

```bash
curl -X GET --header 'Accept: application/json;large-significand-format=string' 'https://nodes.wavesnodes.com/blocks/headers/last'
```

Below is the list of endpoints accepting this header:

* `GET /addresses/balance/{address}/{confirmations}`

   Field: `balance`.

* `GET /addresses/balance/details/{address}`

   Fields: `regular`, `generating`, `available`, `effective`.

* `GET /addresses/effectiveBalance/{address}/{confirmations}`

   Field: `balance`.

* `GET /addresses/effectiveBalance/{address}`

   Field: `balance`.

* `GET /addresses/balance/{address}`

   Field: `balance`.

* `GET /blocks/headers/last`

   Fields: `reward`, `totalFee`.

* `GET /blocks/headers/at/{height}`

   Fields: `reward`, `totalFee`.

* `GET /blocks/headers/seq/{from}/{to}`

   Fields: `reward`, `totalFee`.

* `GET /blocks/at/{height}`

   Fields: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

* `GET /blocks/signature/{signature}`

   Fields: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

* `GET /blocks/address/{address}/{from}/{to}`

   Fields: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

* `GET /blocks/last`

   Fields: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

* `GET /blocks/seq/{from}/{to}`

   Fields: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

* `GET /blockchain/rewards/{height}`

   Fields: `totalWavesAmount`, `currentReward`, `minIncrement`.

* `GET /blockchain/rewards`

   Fields: `totalWavesAmount`, `currentReward`, `minIncrement`.

* `POST /transactions/calculateFee`

   Field: `feeAmount`.

* `GET /transactions/info/{id}`

   Fields: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

* `GET /transactions/unconfirmed/info/{id}`

   Fields: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

* `GET /transactions/address/{address}/limit/{limit}`

   Fields: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

* `POST /transactions/broadcast`

   Fields: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

* `GET /transactions/unconfirmed`

   Fields: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

* `GET /assets/balance/{address}`

   Fields: `balance`, `minSponsoredAssetFee`, `sponsorBalance`, `quantity`, `fee`

* `GET /assets/nft/{address}/limit/{limit}`

   Fields: `balance`, `minSponsoredAssetFee`, `sponsorBalance`, `quantity`, `fee`

* `GET /assets/{assetId}/distribution/{height}/limit/{limit}`

   Field: `asset ID`.

* `GET /assets/details/{assetId}`

   Field: `quantity`.

* `GET /assets/balance/{address}/{assetId}`

   Field: `balance`.

* `GET /consensus/generatingbalance/{address}`

   Field: `balance`.

* `GET /debug/balances/history/{address}`

   Field: `balance`.

* `GET /debug/stateChanges/info/{id}`

   Field: `fee`.

* `GET /debug/stateChanges/address/{address}/limit/{limit}`

   Fields: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

* `GET /debug/portfolios/{address}`

   Fields: `balance`, `in`, `out`.
