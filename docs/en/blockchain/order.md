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

In user interface, the amount and price are displayed as the  values with a decimal part, but in order itself they are represented in normalized (i.e. integer) format.

To make the amount normalized, it is multiplied by 10<sup>amountAssetDecimals</sup>.

To make the price normalized, it is multiplied

* in version 1, 2, 3 orders: by 10<sup>(8 + priceAssetDecimals - amountAssetDecimals)</sup>,
* in version 4 orders: by 10<sup>8</sup>.

Quantity of the price asset in normalized format is calculated by the following formula:

* in version 1, 2, 3 orders: amount × price × 10<sup>-8</sup>,
* in version 4 orders: amount × price × 10<sup>(priceAssetDecimals - amountAssetDecimals - 8)</sup>.

In both cases the decimal part is omitted.

In the above formula

* amount — normalized amount,
* price — normalized price,
* priceAssetDecimals — price asset decimals,
* amountAssetDecimals — amount asset decimals.

## Calculation example for v1/v2/v3 order

Let's review the purchase of 2,13 Tidex for 0,35016774 Waves per one Tidex.

The amount asset is Tidex, amountAssetDecimals value equals 2.

The price asset is Waves, priceAssetDecimals value equals 8.

Normalized amount value equals 2,13 × 10<sup>amountAssetDecimals</sup> = 213.

Normalized price value equals 0,35016774 × 10<sup>(8 + 8 - 2)</sup> = 35016774 × 10<sup>6</sup>.

Quantity of normalized price asset equals to 213 × 35016774 × 10<sup>6</sup> × 10<sup>-8</sup> = 74585728,62. The decimal part will be omitted.

As a result, 0,74585728 Waves will be gained for 2,13 Tidex.

## Calculation example for v4 order

Let's review the purchase of 2,13 Tidex for 0,35016774 Waves per one Tidex.

The amount asset is Tidex, amountAssetDecimals value equals 2.

The price asset is Waves, priceAssetDecimals value equals 8.

Normalized amount value equals 2,13 × 10<sup>amountAssetDecimals</sup> = 213.

Normalized price value equals 0,35016774 × 10<sup>8</sup> = 35016774.

Quantity of normalized price asset equals to 213 × 35016774 × 10<sup>(8 - 2 - 8)</sup> = 74585728,62. The decimal part will be omitted.

As a result, 0,74585728 Waves will be gained for 2,13 Tidex.
