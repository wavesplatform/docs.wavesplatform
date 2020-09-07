---
sidebarDepth: 2
---

# Как купить или продать токены

Любой ассет, выпущенный на блокчейне Waves, можно продать или купить на бирже [Waves.Exchange](https://waves.exchange/) (кроме [NFT](/ru/blockchain/token/non-fungible-token); также временно недоступна торговля смарт-ассетами). Приложение Waves.Exchange, разработанное командой Waves.Exchange, является частью экосистемы Waves и включает пользовательский кошелек и децентрализованную биржу, которая выполняет сделки быстро и надежно.

Чтобы продать или купить токены, нужно отправить ордер (биржевую заявку) на матчер (движок биржи). При этом вы не передаете токены на биржу — они остаются на вашем аккаунте до момента, когда матчер выполнит заявку и создаст транзакцию обмена. Блокчейн гарантирует, что условия обмена будут не хуже, чем указаны в заявке.

Подробнее см. в разделе [Биржевая заявка](/ru/blockchain/order).

## Создание ордера

### С помощью Waves.Exchange

Используйте online/desktop- или мобильное приложение. См. разделы [Торговля на бирже (online/desktop-приложение)](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-trading) и [Торговля на бирже (мобильные приложения)](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-mobile/mobile-trading/mobile-start-trading) документации Waves.Exchange.

### С помощью JavaScript

#### Установка параметров матчера

Используйте следующий адрес матчера:

* Для Testnet: <https://matcher-testnet.waves.exchange>
* Для Mainnet: <https://matcher.waves.exchange>

Чтобы получить публичный ключ матчера, используйте метод `GET /matcher` API матчера.

#### Установка ассетной пары

Ассетную пару образуют два ассета, которые вы хотите обменять: amount-ассет и price-ассет. Который из двух ассетов является price-ассетом, не зависит от того, какой ассет вы отдаете и какой получаете.

Вы можете посмотреть ассетные пары и идентификаторы ассетов в Waves.Exchange [для Mainnet](https://waves.exchange) и [для Testnet](https://testnet.waves.exchange) на странице **Торговля**. Первый ассет в паре — это amount-ассет, второй — price-ассет.

![](./_assets/asset-pair.png)

Вы также можете получить ассетные пары с помощью метода `GET /matcher/orderbook` или `GET /matcher/settings`. Подробнее см. раздел [Matcher API](https://docs.waves.exchange/ru/waves-matcher/matcher-api) документации Waves.Exchange.

> :warning: Идентификаторы ассетов отличаются на Mainnet и на Testnet.

WAVES — главный токен блокчейна Waves — не имеет идентификатора, вместо ID нужно указывать значение 'WAVES'.

#### Заполнение параметров ордера, подписание и отправка на матчер

Используйте функции библиотеки `waves-transactions`:

* Функция `order` создает ордер и генерирует подпись. Для генерации подписи используется секретная фраза (seed) аккаунта. По умолчанию комиссия матчера рассчитывается автоматически.
* Функция `submitOrder` отправляет подписанный ордер на матчер.

Описание функций приведено в [документации библиотеки](https://wavesplatform.github.io/waves-transactions/index.html) на Github.

```javascript
import { order, submitOrder } from "@waves/waves-transactions";

// Для Mainnet укажите 'https://matcher.waves.exchange'
const matcherUrl = 'https://matcher-testnet.waves.exchange';

const matcherPublicKey = '8QUAqtTckM5B8gvcuP7mMswat9SjKUuafJMusEoSn1Gy';
// Для Mainnet укажите '9cpfKN9suPNvfeUNphzxXMjcnn974eme8ZhWUjaktzU5'

const amountAssetId = 'WAVES';
const priceAssetId = '3KFXBGGLCjA5Z2DuW4Dq9fDDrHjJJP1ZEkaoajSzuKsC'; // USDN на Testnet
// Для Mainnet укажите 'DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p'

const seed = 'insert your seed here';

const orderParams = {

    // Фактическое количество amount-ассета нужно умножить на 10^amountAssetDecimals
    amount: 100000000, // 1 WAVES

    // Цену, выраженную в price-ассете, нужно умножить на 10^(8 + priceAssetDecimals – amountAssetDecimals)
    price: 1100000, // 1,1 USDN за один WAVES

    amountAsset: amountAssetId,
    priceAsset: priceAssetId,
    matcherPublicKey: matcherPublicKey,
    orderType: 'buy'
}

const signedOrder = order(orderParams, seed);
await submitOrder(signedOrder, matcherUrl);

let orderId = signedOrder.id;
console.log('ID ордера: '+ orderId);
```

### С помощью Python

```python
import pywaves as pw

matcher_url = 'https://matcher-testnet.waves.exchange'
pw.setMatcher(matcher_url)

waves = pw.Asset('WAVES')
usdn = pw.Asset('3KFXBGGLCjA5Z2DuW4Dq9fDDrHjJJP1ZEkaoajSzuKsC') # USDN на Testnet
# Для Mainnet укажите 'DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p'

asset_pair = pw.AssetPair(waves, usdn)

my_address = pw.Address(privateKey='your_private_key')

buy_order = my_address.buy(asset_pair=asset_pair, amount=1e8, price=1.1e6)

print(f'Buy order ID: {buy_order.orderId}')
```

## Проверка статуса ордера

### С помощью Waves.Exchange

Размещенный ордер отображается на вкладке **Мои открытые ордера** в online/desktop-приложении или на вкладке **Мои ордера** в мобильном приложении. См. разделы [Торговля на бирже (online/desktop-приложение)](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-trading) и [Торговля на бирже (мобильные приложения)](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-mobile/mobile-trading/mobile-start-trading) документации Waves.Exchange.

### С помощью API матчера

Чтобы получить статус ордера, достаточно знать его идентификатор и ассетную пару. Используйте метод `GET /matcher/orderbook/{amountAsset}/{priceAsset}/{orderId}`. Получение статуса доступно для ордеров, размещенный не более 30 дней назад. Для частично выполненных ордеров метод также возвращает сумму выполненной части.

Описание метода приведено в разделе [Matcher API](https://docs.waves.exchange/ru/waves-matcher/matcher-api) документации Waves.Exchange.

**Пример запроса:**

```
curl 'https://matcher-testnet.waves.exchange/matcher/orderbook/WAVES/3KFXBGGLCjA5Z2DuW4Dq9fDDrHjJJP1ZEkaoajSzuKsC/9kRXfmrhWhsGBohygMoo91RgcnmJUB37K4rQQN4rEidT'
```

Приведенный пример подходит для утилиты `cURL`. Вы можете адаптировать запрос для своего языка программирования.

### С помощью JavaScript

```javascript
const matcherUrl = 'https://matcher-testnet.waves.exchange';

const amountAssetId = 'WAVES';
const priceAssetId = '3KFXBGGLCjA5Z2DuW4Dq9fDDrHjJJP1ZEkaoajSzuKsC'; // USDN на Testnet
// Для Mainnet укажите 'DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p'

const orderId= '9kRXfmrhWhsGBohygMoo91RgcnmJUB37K4rQQN4rEidT';

let response = await fetch(matcherUrl + '/matcher/orderbook/' + amountAsset + '/' + priceAsset + '/' + orderId);
let json = await response.json();
console.log('Статус ордера: ' + json.status);
```

### С помощью Python

```python
# Используем ордер из предыдущего примера
print(buy_order.status())
```

## Отмена ордера

Вы можете отменить ордер, если он еще не выполнен полностью.

### С помощью Waves.Exchange

Вы можете отменить ордер:

* В online/desktop-приложении: нажмите **Отмена** на вкладке **Мои открытые ордера**.
* В мобильном приложении: Note: нажмите **X** на вкладке **Мои ордера**.

### С помощью JavaScript

Запрос на отмену ордера должен быть подписан отправителем ордера.

Используйте функции библиотеки `waves-transactions`:

* Функция `cancelOrder` создает и подписывает запрос на отмену ордера.
* Функция `cancelSubmittedOrder` отправляет подписанный запрос на матчер.

Описание функций см. в [документации библиотеки](https://wavesplatform.github.io/waves-transactions/index.html) на Github.

**Пример:**

```javascript
import {cancelOrder, cancelSubmittedOrder } from "@waves/waves-transactions";

const matcherUrl = 'https://matcher-testnet.waves.exchange';

const amountAssetId = 'WAVES';
const priceAssetId = '3KFXBGGLCjA5Z2DuW4Dq9fDDrHjJJP1ZEkaoajSzuKsC'; // USDN на Testnet
// Для Mainnet укажите 'DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p'

const seed = 'insert your seed here';
const orderId= '9kRXfmrhWhsGBohygMoo91RgcnmJUB37K4rQQN4rEidT';

const co = cancelOrder({ orderId: orderId }, seed);
const cancelledOrder = await cancelSubmittedOrder(co, amountAsset, priceAsset, matcherUrl);

console.log(cancelledOrder.status);
```

### С помощью Python

```python
# Используем ордер из предыдущего примера
buy_order.cancel()
```

## Получение списка ордеров

### С помощью Waves.Exchange

Список ордеров можно посмотреть на вкладках **Мои открытые ордера** и **Моя история ордеров** в online/desktop-приложении или на вкладке **Мои ордера** в мобильном приложении. См. разделы [Торговля на бирже (online/desktop-приложение)](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-trading) и [Торговля на бирже (мобильные приложения)](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-mobile/mobile-trading/mobile-start-trading) документации Waves.Exchange.

### С помощью JavaScript

Для получения списка размещенных аккаунтом ордеров предназначен метод `GET /matcher/orderbook/{publicKey}`. Описание метода приведено в разделе [Matcher API](https://docs.waves.exchange/ru/waves-matcher/matcher-api) документации Waves.Exchange.

В заголовке запроса необходимо указать подпись массива байтов, состоящего из байтов публичного ключа аккаунта и байтов текущей временной метки. Для генерации подписи используется функция [signBytes](https://github.com/wavesplatform/ts-lib-crypto#signbytes) и секретная фраза (seed) аккаунта.

```javascript
import { libs } from '@waves/waves-transactions';

const matcherUrl = 'https://matcher-testnet.waves.exchange';
const seed = 'insert your seed here';

const { LONG, BASE58_STRING } = libs.marshall.serializePrimitives;

const getOrdersApiSignature = (seed, senderPublicKey, timestamp) => {
    const pBytes = BASE58_STRING(senderPublicKey);
    const timestampBytes = LONG(timestamp);
    const bytes = Uint8Array.from([
        ...Array.from(pBytes),
        ...Array.from(timestampBytes),
    ]);
    return libs.crypto.signBytes(seed, bytes);
};

const timestamp = Date.now();
const senderPublicKey = libs.crypto.publicKey(seed);
const signature = getOrdersApiSignature(seed, senderPublicKey, timestamp);
const url = `${matcherUrl}/matcher/orderbook/${senderPublicKey}`; // Добавьте ?activeOnly=true для получения только активных ордеров

let response = await fetch(url, {
        headers: {
            "Timestamp": timestamp,
            "Signature": signature
        }
    });

let json = await response.json();
console.table(json);
```

### С помощью Python

Получить список ордеров по заданной ассетной паре, отправленных аккаунтом, можно с помощью функции `getOrderHistory` библиотеки [PyWaves](https://github.com/PyWaves/PyWaves/).

```python
import pywaves as pw

my_address = pw.Address(seed='insert your seed here')

matcher_url = 'https://matcher-testnet.waves.exchange'
# Для Mainnet укажите 'https://matcher.waves.exchange'

pw.setMatcher(matcher_url)

waves = pw.Asset('WAVES')
usdn = pw.Asset('3KFXBGGLCjA5Z2DuW4Dq9fDDrHjJJP1ZEkaoajSzuKsC') # USDN на Testnet
# Для Mainnet укажите 'DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p'

asset_pair = pw.AssetPair(waves, usdn)
my_orders = my_address.getOrderHistory(asset_pair)
```
