---
sidebarDepth: 2
---

# How to Buy and Sell Tokens

Any asset issued on the Waves blockchain (except [NFTs](/en/blockchain/token/non-fungible-token)) can be bought or sold on the [Waves.Exchange](https://waves.exchange/). Waves.Exchange developed by Waves.Exchange team is a part of the Waves ecosystem. It combines a user wallet and decentralized exchange that execute trades swiftly and securely.

To buy or sell tokens, you submit an order to Matcher (exchange engine). You don't transfer your assets to exchange, money remains on your account until Matcher executes the order and creates an exchange transaction. The blockchain guarantees that the transaction will be made on the conditions that are not worse than in the user's order.

See the [Order](/en/blockchain/order) article for more information about orders.

## Create Trading Order

### Using Waves.Exchange

You can use online, desktop or mobile app. See the [Start Trading (Online & Desktop)](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-trading) and [Start Trading (Mobile)](https://docs.waves.exchange/en/waves-exchange/waves-exchange-mobile/mobile-trading/mobile-start-trading) sections of the Waves.Exchange documentation.

### Using JavaScript

#### Step 1. Set Matcher Params

Use the following Matcher URL:

* Testnet: <https://matcher.testnet.wavesnodes.com>
* Mainnet: <https://matcher.waves.exchange>

Use the `GET /matcher` method of Matcher API to retrieve Matcher public key.

#### Step 2. Set Asset Pair

Asset pair is a pair of assets you want to exchange: an amount asset ID and price asset ID. Which asset is a price asset does not depend on which asset is 'spend' and which is 'received'.

For Mainnet, you can see asset pairs and asset IDs on the **Trading** page of Waves.Exchange. The first asset in pair is amount asset and the second is price asset.

![](./_assets/asset-pair.png)

For both Mainnet and Testnet, you can get asset pairs using `GET /matcher/orderbook` or `GET /matcher/settings` API method. For more information, see [Matcher API](https://docs.waves.exchange/en/waves-matcher/matcher-api) article of Waves.Exchange documentation.

> :warning: Asset IDs differ on Mainnet and Testnet.

WAVES doesn't have asset ID, use 'WAVES' instead.

#### Step 3. Fill in Orders Fields, Sign Order and Send to Matcher

Use `waves-transactions` library. Order proof is derived from seed. Matcher fee is calculated automatically.

See method descriptions in [documentation](https://wavesplatform.github.io/waves-transactions/index.html).

```javascript
import { order, submitOrder } from "@waves/waves-transactions";

const matcherUrl = 'https://matcher.testnet.wavesnodes.com';
const matcherPublicKey: '8QUAqtTckM5B8gvcuP7mMswat9SjKUuafJMusEoSn1Gy';

const amountAssetId: 'BrmjyAWT5jjr3Wpsiyivyvg5vDuzoX2s93WgiexXetB3'; // asset ID of ETH on Testnet
const priceAssetId: 'WAVES';

const seed = 'insert your seed here';

const orderParams = {
    amount: 100000000, // 1 ETH: actual volume of amount asset multiplied by 10^amountAssetDecimals
    price: 19900000000, // 199 WAVES for 1 ETH: actual price denominated in priceAsset and multiplied by 10^(8 + priceAssetDecimals – amountAssetDecimals)
    amountAsset: amountAssetId,
    priceAsset: priceAssetId,
    matcherPublicKey: matcherPublicKey,
    orderType: 'buy'
}

const signedOrder = order(orderParams, seed);
await submitOrder(signedOrder, matcherUrl);

let orderId = signedOrder.id;
console.log('Order ID: '+ orderId);
```

### Using Python

```python
import pywaves as pw

matcher_url = 'https://matcher.testnet.wavesnodes.com'
pw.setMatcher(matcher_url)

# ETH asset on Testnet
amount_asset = pw.Asset('BrmjyAWT5jjr3Wpsiyivyvg5vDuzoX2s93WgiexXetB3')

# WAVES
price_asset = pw.Asset('')

asset_pair = pw.AssetPair(amount_asset, price_asset)

my_address = pw.Address(privateKey='some_private_key')

buy_order = my_address.buy(asset_pair=asset_pair, amount=1e8, price=50e8)

print(f'Buy order ID: {buy_order.orderId}')
```

## Get Order Status

### Using Waves.Exchange

The submitted order is displayed in the **My Open Orders** tab (Online & Desktop app) or in the **My Orders** tab (Mobile) until it is completed. See the [Start Trading (Online & Desktop)](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-trading) and [Start Trading (Mobile)](https://docs.waves.exchange/en/waves-exchange/waves-exchange-mobile/mobile-trading/mobile-start-trading) sections of the Waves.Exchange documentation.

### Using JavaScript

To get order status, you need to know order ID and asset pair.

```javascript
let response = await fetch(matcherUrl + '/matcher/orderbook/' + amountAsset + '/' + priceAsset + '/' + orderId);
let json = await response.json();
console.log('Order status: ' + json.status);
```

### Using Python

```python
# using order from previous example
print(buy_order.status())
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
# using order from previous example
buy_order.cancel()
```
