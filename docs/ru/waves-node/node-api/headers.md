# Request Headers

## api-key

[API ключ](https://en.wikipedia.org/wiki/Application_programming_interface_key) владельца ноды очень важен, также как [seed](http://confluence.wavesplatform.com/display/WDOCS/Seed+phrase) фраза и пароль кошелька.

API ключ передается в HTTP как незащищённый plain text в `api-key` заголовке. Злоумышленник может перехватить его во время передачи по сети и использовать для переводов с вашего адреса! Очень важно защитить передачу по сети с помощью HTTPS или SSH ретрансляции.

Пожалуйста, помните, что нода не имеет встроенной поддержки HTTPS. Рассмотрите возможность применения HTTPS-proxy, например, nginx.

## large-significand-format=string

Устанавливает формат сериализации для денежных полей. Если установлено, поле будет сериализовано в JSON как строка, в противном случае - как число. Это может быть полезно для значений с длинной мантиссой.

### Пример

```bash
curl -X GET --header 'Accept: application/json; large-significand-format=string' 'https://nodes.wavesnodes.com/blocks/headers/last'

```

Ниже приведен список конечных точек, принимающих этот заголовок.

#### GET /addresses/balance/{address}/{confirmations}

Задействованное поле: `balance`.

#### GET /addresses/balance/details/{address}

Задействованные поля: `regular`, `generating`, `available`, `effective`.

#### GET /addresses/effectiveBalance/{address}/{confirmations}

Задействованное поле: `balance`.

#### GET /addresses/effectiveBalance/{address}

Задействованное поле: `balance`.

#### GET /addresses/balance/{address}

Задействованное поле: `balance`.

#### GET /blocks/headers/last

Задействованные поля: `reward`, `totalFee`.

#### GET /blocks/headers/at/{height}

Задействованные поля: `reward`, `totalFee`.

#### GET /blocks/headers/seq/{from}/{to}

Задействованные поля: `reward`, `totalFee`.

#### GET /blocks/at/{height}

Задействованные поля: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

#### GET /blocks/signature/{signature}

Задействованные поля: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

#### GET /blocks/address/{address}/{from}/{to}

Задействованные поля: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

#### GET /blocks/last

Задействованные поля: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

#### GET /blocks/seq/{from}/{to}

Задействованные поля: `reward`, `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`, `totalFee`.

#### GET /blockchain/rewards/{height}

Задействованные поля: `totalWavesAmount`, `currentReward`, `minIncrement`.

#### GET /blockchain/rewards

Задействованные поля: `totalWavesAmount`, `currentReward`, `minIncrement`.

#### POST /transactions/calculateFee

Задействованное поле: `feeAmount`.

#### GET /transactions/info/{id}

Задействованные поля: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

#### GET /transactions/unconfirmed/info/{id}

Задействованные поля: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

#### GET /transactions/address/{address}/limit/{limit}

Задействованные поля: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

#### POST /transactions/broadcast

Задействованные поля: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

#### GET /transactions/unconfirmed

Задействованные поля: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

#### GET /assets/balance/{address}

Задействованные поля: `balance`, `minSponsoredAssetFee`, `sponsorBalance`, `quantity`, `fee`

#### GET /assets/nft/{address}/limit/{limit}

Задействованные поля: `balance`, `minSponsoredAssetFee`, `sponsorBalance`, `quantity`, `fee`

#### GET /assets/{assetId}/distribution/{height}/limit/{limit}

Задействованное поле: `asset ID`.

#### GET /assets/details/{assetId}

Задействованное поле: `quantity`.

#### GET /assets/balance/{address}/{assetId}

Задействованное поле: `balance`.

#### GET /consensus/generatingbalance/{address}

Задействованное поле: `balance`.

#### GET /debug/balances/history/{address}

Задействованное поле: `balance`.

#### GET /debug/stateChanges/info/{id}

Задействованное поле: `fee`.

#### GET /debug/stateChanges/address/{address}/limit/{limit}

Задействованные поля: `fee`, `amount`, `sellMatcherFee`, `price`, `matcherFee`, `buyMatcherFee`, `totalAmount`.

#### GET /debug/portfolios/{address}

Задействованные поля: `balance`, `in`, `out`.
