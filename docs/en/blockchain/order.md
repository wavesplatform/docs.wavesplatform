# Order

**Order** is the instruction from the [account](/en/blockchain/account/) to matcher to buy or sell a [token](/en/blockchain/token/) on the exchange.
The matcher is developed by the third-party team from the community. For details, see the [Waves.Exchange documentation](https://docs.waves.exchange/en/waves-matcher/).

## Asset pair

Each order contains amount asset / price asset pair, also called asset pair.

### Example

```js
"assetPair": {
    "amountAsset": "3QvxP6YFBKpWJSMAfYtL8Niv8KmmKsnpb9uQwQpg8QN2",
    "priceAsset": "null"
}
```

### Asset pair fields

| Field name | Description |
|---|---|
| amountAsset | ID of the pair's first asset, that the order's sender wants to buy or sell |
| priceAsset | ID of the pair's second asset, in which the price of the order is expressed. null value means that asset is WAVES |

## Order's amount and price

In the user interface, the amount and price are usually presented as values with a fractional part (for example, 0.74585728 WAVES), i.e. in the denormalized form. The denormalized form is the convenient for humans, but [not for calculations](https://en.wikipedia.org/wiki/Round-off_error). To solve the problem of calculations accuracy, the normalization is performed, i.e. amount and price are represented as an integer. So, 0.74585728 WAVES is 0.74585728 × 10<sup>8</sup> or 74585728 [WAVELET](/en/blockchain/token/waves). In this case, the exponent is 8, because WAVES has 8 decimals after the decimal point. Other assets may have different amount of decimals. For example, TDX has 2 decimals.

### Amount

Consider buying 2.13 TDX at the price of 0.35016774 WAVES for one TDX. Here the asset pair is TDX / WAVES. The amount in the order is the number of units sold or bought in conventional "pennies". This value in the current case is 213, since 2.13 TDX = 2.13 × 10<sup>2</sup> = 213 "pennies" of TDX.

So, to bring the amount to the normalized form, it is multiplied by 10<sup>amountAssetDecimals</sup>.

### Price

Price is the value of 1 unit of the amount asset, expressed in the price asset.

In the TDX / WAVES example above, this is the price in WAVES for 1 TDX.

To normalize price, it is multiplied

* in orders of versions 1, 2, 3: by 10<sup>(8 + priceAssetDecimals - amountAssetDecimals)</sup>
* in orders of version 4: at 10<sup>8</sup>

The exponent of 8 is selected because there cannot be an asset with the exceeding quantity of decimals on the Waves blockchain.

Without going into detail, we note that the method of the price normalizing proposed in Ride v4 orders provides more flexibility when working with order pairs having a different number of decimals.

> The matcher algoritm has a limitation in relation to price: the last N digits of the normalized price must be zeros (N is price_decimals minus amount_decimals). If this is not so, then the matcher rejects the order on placement.

### Price Asset Quantity Calculation

The quantity of price asset in normalized form which

* will be given by sender if order is BUY
* will be acquired by sender if order is SELL

is calculated by the following formula:

* in version 1, 2, 3 orders: amount × price × 10<sup>-8</sup>
* version 4 orders: amount × price × 10<sup>(priceAssetDecimals - amountAssetDecimals - 8)</sup>

If the result of the calculation is a value with a fractional part, then the fractional part is discarded.

Designations in the above formula:

* amount — amount in normalized form
* price — price in normalized form
* priceAssetDecimals — the number of decimal places of the price asset
* amountAssetDecimals — the number of decimal places of the amount asset

### Сalculation Example for Order v1/2/3

Let's review the purchase of 2.13 TDX at the price of 0.35016774 WAVES for one TDX.

The amount asset is TDX, amountAssetDecimals is 2.

The price asset is WAVES, priceAssetDecimals is 8.

The amount value in the normalized form is 2.13 × 10<sup>amountAssetDecimals</sup> = 213.

The price value in the normalized form is 0.35016774 × 10<sup>(8 + 8 - 2)</sup> = 35016774000000.

The quantity of price asset in the normalized form will be calculated as follows: 213 × 35016774000000 × 10<sup>-8</sup> = 74585728.62. The fractional part is discarded.

As a result, 2.13 TDX will be gained for 0.74585728 WAVES.

### Calculation Example for Order v4

Let's review the purchase of 2.13 TDX at the price of 0.35016774 WAVES for one TDX.

The amount asset is TDX, amountAssetDecimals is 2.

The price asset is WAVES, priceAssetDecimals is 8.

The amount value in the normalized form is 2.13 × 10<sup>amountAssetDecimals</sup> = 213.

The price value in normalized form is 0.35016774 × 10<sup>8</sup> = 35016774.

The quantity of price asset in the normalized form will be calculated as follows: 213 × 35016774 × 10<sup>(8 - 2 - 8)</sup> = 74585728.62. The fractional part is discarded.

As a result, 2.13 TDX will be gained for 0.74585728 WAVES.

## Order cancellation

The order sender may cancel the order before it is executed.

Unexecuted orders are automatically canceled at the date and time specified by the order sender.

## Order expiration date

**Order expiration date** is the date and time of automatic cancellation of unexecuted order.

The date is specified in milliseconds which have passed since the beginning of the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time).

The expiration time can't be earlier than matcher time + 1 minute and later than matcher time + 30 days.

## Order timestamp

**Order timestamp** is the time when the matcher added the order to the [order book](https://en.wikipedia.org/wiki/Order_book_%28trading%29).

The time is specified in milliseconds that have passed since the beginning of the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time).

## Order binary format

See the [Order binary format](/en/blockchain/binary-format/order-binary-format) page.
