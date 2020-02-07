---
sidebarDepth: 2
---

# How to Buy and Sell Tokens

Any token or asset issued on the Waves blockchain can be bought or sold on the [Waves.Exchange](https://waves.exchange/). Waves.Exchange developed by Waves.Exchange team is a part of the Waves ecosystem. It combines a user wallet and decentralized exchange that execute trades swiftly and securely.

To buy or sell tokens, a user submits an order. He/she doesn't transfer his/her tokens to exchange, his/her money remains on his/her account until the order is matched with counter-order. The Matcher (exchange engine) creates exchange transaction while the blockchain guarantees that the transaction will be made on the conditions that are not worse than in the user's order. After the transaction is confirmed on blockchain, the user account's balances of assets are changed according to the amount, order execution price, and the Matcher fee.

## Create Trading Order

### Using Waves.Exchange

You can use online, desktop or mobile app. See the [Start Trading (Online & Desktop)](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-trading) and [Start Trading (Mobile)](https://docs.waves.exchange/en/waves-exchange/waves-exchange-mobile/mobile-trading/mobile-start-trading) sections of the Waves.Exchange documentation.

### Using JavaScript

Use `waves-transactions` library. Order proof is derived from seed. Fee is calculated automatically.

See method descriptions in [documentation](https://wavesplatform.github.io/waves-transactions/index.html).

```javascript
import @waves/waves-transactions';

const seed = 'example seed phrase';
const matcherUrl = 'https://matcher.waves.exchange';
const matcherPublicKey = '9cpfKN9suPNvfeUNphzxXMjcnn974eme8ZhWUjaktzU5';

const params = {
  amount: 100000000, //1 WAVES
  price: 10, //for 0.00000010 BTC
  priceAsset: '8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS',
  matcherPublicKey: matcherPublicKey,
  orderType: 'buy'
}

const signedOrder = order(params, seed);
await submitOrder(order, matcherUrl);

console.log('Order ID: '+ signedOrder.id);
```

### Using Python

```python
sample
```

## Get Order Status

### Using Waves.Exchange

The placed order is displayed in the **My Open Orders** tab (Online & Desktop app) or in the **My Orders** tab (Mobile) until it is completed. See the [Start Trading (Online & Desktop)](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-trading) and [Start Trading (Mobile)](https://docs.waves.exchange/en/waves-exchange/waves-exchange-mobile/mobile-trading/mobile-start-trading) sections of the Waves.Exchange documentation.

### Using JavaScript

```javascript
const matcherUrl = 'https://matcher.waves.exchange';
const amountAsset = 'WAVES'
const priceAsset = '8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS';

let orderId = 'sefdqregvqergqerg';

const xhr = new XMLHttpRequest();
xhr.open('GET', matcherUrl + '/' + amountAsset + '/' + priceAsset + '/' + orderId, false);
xhr.send();
xhr.onload  = function() {
  let orderStatus = xhr.response;;
  console.log('Order status: ' + orderStatus.status);
}
```

### Using Python

```python
sample
```

## Cancel Order

You can cancel previously submitted order if it's not already filled completely.

### Using Waves.Exchange

You can cancel an order:

* In Online or Desktop app: click **Cancel** in **My Open Orders** tab.
* In Mobile app: Note: tap **X** in **My orders** tab.

### Using JavaScript

Use `cancelSubmittedOrder` function of `waves-transactions` library. See function description in [documentation](https://wavesplatform.github.io/waves-transactions/index.html).

**Exapmle**

```javascript
import @waves/waves-transactions';

const seed = 'example seed phrase';
const matcherUrl = 'https://matcher.waves.exchange';
const matcherPublicKey = '9cpfKN9suPNvfeUNphzxXMjcnn974eme8ZhWUjaktzU5';

let orderId = 'sefdqregvqergqerg';
let cancelOrderRequest = cancelOrder({ orderId },seed);
await cancelSubmittedOrder(cancelOrderRequest, amountAsset, priceAsset, matcherUrl);
```

### Using Python

```python
sample
```
