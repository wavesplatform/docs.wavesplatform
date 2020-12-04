# Формат денежных полей

По умолчанию значения денежных полей представлены в ответах API в виде чисел. Такие числа могут занимать до 64 бит, и их обработка может представлять проблему в языках программирования, в которых для хранения целых чисел отведено менее 64 бит, например в JavaScript. Чтобы обойти эту проблему, вы можете получать значения денежных полей в виде строк, указав в запросе HTTP-заголовок

```
Accept: application/json; large-significand-format=string
```

Пример:

```bash
curl -X GET --header 'Accept: application/json;large-significand-format=string' 'https://nodes.wavesnodes.com/blocks/headers/last'
```

Список методов, принимающих этот заголовок:

* `GET /addresses/balance/{address}/{confirmations}`

   Поле: `balance`.

* `GET /addresses/balance/details/{address}`

   Поля: `regular`, `generating`, `available`, `effective`.

* `GET /addresses/effectiveBalance/{address}/{confirmations}`

   Поле: `balance`.

* `GET /addresses/effectiveBalance/{address}`

   Поле: `balance`.

* `GET /addresses/balance/{address}`

   Поле: `balance`.

* `GET /blocks/headers/last`

   Поля: `reward`, `totalFee`.

* `GET /blocks/headers/at/{height}`

   Поля: `reward`, `totalFee`.

* `GET /blocks/headers/seq/{from}/{to}`

   Поля: `reward`, `totalFee`.

* `GET /blocks/at/{height}`

   Поля: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

* `GET /blocks/signature/{signature}`

   Поля: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

* `GET /blocks/address/{address}/{from}/{to}`

   Поля: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

* `GET /blocks/last`

   Поля: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

* `GET /blocks/seq/{from}/{to}`

   Поля: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

* `GET /blockchain/rewards/{height}`

   Поля: `totalWavesAmount`, `currentReward`, `minIncrement`.

* `GET /blockchain/rewards`

   Поля: `totalWavesAmount`, `currentReward`, `minIncrement`.

* `POST /transactions/calculateFee`

   Поле: `feeAmount`.

* `GET /transactions/info/{id}`

   Поля: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

* `GET /transactions/unconfirmed/info/{id}`

   Поля: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

* `GET /transactions/address/{address}/limit/{limit}`

   Поля: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

* `POST /transactions/broadcast`

   Поля: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

* `GET /transactions/unconfirmed`

   Поля: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

* `GET /assets/balance/{address}`

   Поля: `balance`, `minSponsoredAssetFee`, `sponsorBalance`, `quantity`, `fee`

* `GET /assets/nft/{address}/limit/{limit}`

   Поля: `balance`, `minSponsoredAssetFee`, `sponsorBalance`, `quantity`, `fee`

* `GET /assets/{assetId}/distribution/{height}/limit/{limit}`

   Поле: `asset ID`.

* `GET /assets/details/{assetId}`

   Поле: `quantity`.

* `GET /assets/balance/{address}/{assetId}`

   Поле: `balance`.

* `GET /consensus/generatingbalance/{address}`

   Поле: `balance`.

* `GET /debug/balances/history/{address}`

   Поле: `balance`.

* `GET /debug/stateChanges/info/{id}`

   Поле: `fee`.

* `GET /debug/stateChanges/address/{address}/limit/{limit}`

   Поля: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

* `GET /debug/portfolios/{address}`

   Поля: `balance`, `in`, `out`.
