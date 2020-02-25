---
sidebarDepth: 2
---

# Как покупать или продавать токены

Любой ассет, выпущенный на блокчейне Waves (кроме [NFT](/en/blockchain/token/non-fungible-token)), можно продать или купить на бирже [Waves.Exchange](https://waves.exchange/). Приложение Waves.Exchange, разработанное командой Waves.Exchange, является частью экосистемы Waves и включает пользовательский кошелек и децентрализованную биржу, которая выполняет сделки быстро и надежно.

Чтобы продать или купить токены, нужно отправить ордер (биржевую заявку) на Матчер (движок биржи). При этом вы не передаете токены на биржу — они остаются на вашем аккаунте до момента, когда Матчер выполнит заявку и создаст транзакцию обмена. Блокчейн гарантирует, что условия обмена будут не хуже, чем указаны в заявке.

Подробнее см. в разделе [Биржевая заявка](/ru/blockchain/order).

## Создание ордера

### С помощью Waves.Exchange

Используйте online, desktop или мобильное приложение. См. разделы [Торговля на бирже (Online/Desktop)](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-trading) и [Торговля на бирже (Мобильные приложения)](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-mobile/mobile-trading/mobile-start-trading) документации Waves.Exchange.

### С помощью JavaScript

#### Установка параметров Матчера

Используйте следующий адрес Матчера:

* Для Testnet: <https://matcher.testnet.wavesnodes.com>
* Для Mainnet: <https://matcher.waves.exchange>

Чтобы получить публичный ключ Матчера, используйте метод `GET /matcher` API Матчера.

#### Установка ассетной пары

Ассетную пару образуют два ассета, которые вы хотите обменять: amount-ассет и price-ассет. Который из двух ассетов является price-ассетом, не зависит от того, какой ассет вы отдаете и какой получаете.

На Mainnet вы можете посмотреть ассетные пары и идентификаторы ассетов в Waves.Exchange на странице **Торговля**. Первый ассет в паре — это amount-ассет, второй — price-ассет.

![](./_assets/asset-pair.png)

Как на Mainnet, так и на Testnet вы можете получить ассетные пары с помощью метода `GET /matcher/orderbook` или `GET /matcher/settings`. Подробнее см. раздел [Matcher API](https://docs.waves.exchange/ru/waves-matcher/matcher-api) документации Waves.Exchange.

> :warning: Идентификаторы ассетов отличаются на Mainnet и на Testnet.

WAVES — главный токен платформы Waves — не имеет идентификатора, вместо ID нужно указывать значение 'WAVES'.

#### Заполнение параметров ордера, подписание и отправка на Матчер

Используйте функции библиотеки `waves-transactions`:

* функция `order` создает ордер и генерирует подпись. Для генерации подписи используется секретная фраза (seed) аккаунта. По умолчанию комиссия Матчера рассчитывается автоматически.
* функция `submitOrder` отправляет подписанный ордер на Матчер.

Описание функций приведено в [документации библиотеки](https://wavesplatform.github.io/waves-transactions/index.html) на Github.

```javascript
import { order, submitOrder } from "@waves/waves-transactions";

const matcherUrl = 'https://matcher.testnet.wavesnodes.com';
const matcherPublicKey: '8QUAqtTckM5B8gvcuP7mMswat9SjKUuafJMusEoSn1Gy';

const amountAssetId: 'BrmjyAWT5jjr3Wpsiyivyvg5vDuzoX2s93WgiexXetB3'; // Идентификатор ETH на Testnet
const priceAssetId: 'WAVES';

const seed = 'insert your seed here';

const orderParams = {
    amount: 100000000, // 1 ETH: фактическое количество amount-ассета нужно умножить на 10^amountAssetDecimals
    price: 19900000000, // 199 WAVES за один 1 ETH: цену, выраженную в price-ассете, нужно умножить на 10^(8 + priceAssetDecimals – amountAssetDecimals)
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

### С помощью Python

```python
import pywaves as pw

matcher_url = 'https://matcher.testnet.wavesnodes.com'
pw.setMatcher(matcher_url)

# ETH на Testnet
amount_asset = pw.Asset('BrmjyAWT5jjr3Wpsiyivyvg5vDuzoX2s93WgiexXetB3')

# WAVES
price_asset = pw.Asset('')

asset_pair = pw.AssetPair(amount_asset, price_asset)

my_address = pw.Address(privateKey='some_private_key')

buy_order = my_address.buy(asset_pair=asset_pair, amount=1e8, price=50e8)

print(f'Buy order ID: {buy_order.orderId}')
```

## Проверка статуса ордера

### С помощью Waves.Exchange

The submitted order is displayed in the **My Open Orders** tab (Online & Desktop app) or in the **My Orders** tab (Mobile) until it is completed. See the [Start Trading (Online & Desktop)](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-trading) and [Start Trading (Mobile)](https://docs.waves.exchange/en/waves-exchange/waves-exchange-mobile/mobile-trading/mobile-start-trading) sections of the Waves.Exchange documentation.

### Using Matcher API

To get order status, you need to know order ID and asset pair. Use `GET /matcher/orderbook/{amountAsset}/{priceAsset}/{orderId}` method. Status is returned for orders submitted not earlier than 30 days ago. For partially filled orders, the method aslo returns filled amount.

See method description in [Matcher API](https://docs.waves.exchange/en/waves-matcher/matcher-api) article of Waves.Exchange documentation.

**Request example:**

```
curl 'https://matcher.testnet.wavesnodes.com/matcher/orderbook/BrmjyAWT5jjr3Wpsiyivyvg5vDuzoX2s93WgiexXetB3/WAVES/6hgoJMKAMPVZb11epd2vCjqk47dGcr9eT8cJQ2HpYnHp'
```

The example is suitable for the `cURL` utility. You can adjust the proposed request to your app written in any programming language.

### Using JavaScript

```javascript
const matcherUrl = 'https://matcher.testnet.wavesnodes.com';

const amountAssetId: 'BrmjyAWT5jjr3Wpsiyivyvg5vDuzoX2s93WgiexXetB3'; // asset ID of ETH on Testnet
const priceAssetId: 'WAVES';

const orderId= '6hgoJMKAMPVZb11epd2vCjqk47dGcr9eT8cJQ2HpYnHp';

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

The request to cancel the order must be signed by the order sender.

Use functions of `waves-transactions` library:

* `cancelOrder` function creates and signs cancel order request.
* `cancelSubmittedOrder` sends signed request to Matcher.

See function descriptions in [waves-transactions documentation](https://wavesplatform.github.io/waves-transactions/index.html) on Github.

**Exapmle**

```javascript
import {cancelOrder, cancelSubmittedOrder } from "@waves/waves-transactions";

const matcherUrl = 'https://matcher.testnet.wavesnodes.com';

const amountAssetId: 'BrmjyAWT5jjr3Wpsiyivyvg5vDuzoX2s93WgiexXetB3'; // asset ID of ETH on Testnet
const priceAssetId: 'WAVES';

const seed = 'insert your seed here';
const orderId= '6hgoJMKAMPVZb11epd2vCjqk47dGcr9eT8cJQ2HpYnHp';

const co = cancelOrder({ orderId: orderId }, seed);
const cancelledOrder = await cancelSubmittedOrder(co, amountAsset, priceAsset, matcherUrl);

console.log(cancelledOrder.status);
```

### Using Python

```python
# using order from previous example
buy_order.cancel()
```
