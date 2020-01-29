# Order

An **order** is an instruction from the [account owner](/en/blockchain/account) to the [Matcher](https://docs.waves.exchange/en/waves-matcher/) to buy or sell the [token](/en/blockchain/token).

## Order cancellation

The order sender may cancel the order before it is executed.

Unexecuted orders are automatically canceled after 30 days from the date of opening.

## Order expiration date

An **order expiration date** is a date when the order is automatically canceled if it is not executed by this date.

The date is specified in _milliseconds_ which have passed since the beginning of the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time) until the expiration date.

The expiration time varies from 1 minute to 30 days.

## Order timestamp

An **order timestamp** is a time when [matcher](https://docs.waves.exchange/en/waves-matcher/) adds the [order](/en/blockchain/order) to the [order book](https://en.wikipedia.org/wiki/Order_book_%28trading%29).

The time is specified in _milliseconds_ that have passed since the beginning of the [Unix epoch](https://en.wikipedia.org/wiki/Unix_time).

## Order binary format

See the [Order binary format](/en/blockchain/binary-format/order-binary-format) page.

## Amount and price in order

In order, the amount and price are represented in normalized (i.e. integer) format.

To convert the amount to normalized format, it is being multiplied by 10<sup>amountAssetDecimals</sup>.

To convert the price to normalized format, it is being multiplied by

* in version 1, 2, 3 orders: by 10<sup>(8 + priceAssetDecimals - amountAssetDecimals)</sup>,
* in version 4 orders: by 10<sup>8</sup>.

In version 4 orders, the price asset quantity in normalized format is being calculated by following formula:

spendAmount = amount × price × 10<sup>(priceAssetDecimals - amountAssetDecimals - 8)</sup>,

where

* spendAmount — the quantity of price asset in the normalized format,
* amount — the amount in a normalized format,
* price — price in a normalized format,
* priceAssetDecimals — price asset quantity of decimals,
* amountAssetDecimals — price asset quantity of decimals.

### Calculation example for order v4

Let's review the purchase of 2,13 Tidex for 0,35 WAVES per Tidex.

The amount asset is Tidex, the value of amountAssetDecimals equals 2.

Price asset is Waves, the value of priceAssetDecimals equals 8.

Amount value in normalized format is equals to 2,13 × 10<sup>amountAssetDecimals</sup> = 213.

Price value in normalized format is equals to 0,35016774 × 10<sup>amountAssetDecimals</sup> = 35016774.

Quantity of price-asset in normalized format will be calculated by the following formula:  213 × 35016774 × 10<sup>(8 - 2 - 8)</sup> = 74585728.

As a result, 0,74585728 Waves will be gained for 2,13 Tidex.
