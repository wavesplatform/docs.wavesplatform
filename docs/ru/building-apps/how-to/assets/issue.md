---
sidebarDepth: 2
---

# Как выпустить токен. Управление токеном

Одно из преимуществ блокчейна Waves — простота выпуска токенов. Чтобы создать токен, не нужно писать смарт-контракт — достаточно отправить в блокчейн транзакцию выпуска. Комиссия за транзакцию составляет 1 WAVES для обычного токена (ассета) или 0,001 для невзаимозаменяемого токена (NFT).

Новый токен сразу же доступен:

* для переводов между аккаунтами;
* для торговли на бирже [Waves.Exchange](https://waves.exchange/), разработанной сторонней командой из сообщества (кроме NFT; также временно недоступна торговля смарт-ассетами);
* для платежей, приложенных к транзакции вызова скрипта.

Вы можете использовать свой токен:

* как цифровую валюту – для оплаты товаров и услуг в рамках вашего проекта, а также для краудфандинга;
* как объекты или ресурсы в играх и др.

См. раздел [Токен](/ru/blockchain/token/) для более подробной информации о токене.

В этой статье слова «токен» и «ассет» используются как синонимы (но NFT всегда «токен»).

## Выпуск ассета

> :bulb: Если при выпуске к ассету не прикреплен скрипт, то в дальнейшем его нельзя сделать смарт-ассетом. Если вы хотите добавить скрипт позже, выпустите ассет со скриптом `AwZd0cYf` (скрипт Ride, всегда возвращающий true, в кодировке base64). Минимальная комиссия за любую транзакцию с участием смарт-ассета увеличивается на 0,004 WAVES.

### С помощью Waves.Exchange

Используйте online- или desktop-приложение. См. раздел [Создать токены](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-asset/online-desktop-token-creation) документации Waves.Exchange.

### С помощью JavaScript

Используйте функци библиотеки `waves-transactions`:

* функция `issue` создает и подписывает транзакцию выпуска. Для генерации подписи используется секретная фраза (seed) аккаунта. Если комиссия за транзакцию не указана, она рассчитывается автоматически.
* функция `broadcast` отправляет транзакцию в блокчейн.

Идентификатор транзакции выпуска становится также идентификатором токена.

Описание функций приведено в [документации библиотеки](https://wavesplatform.github.io/waves-transactions/index.html) на Github.

```javascript
const { issue, broadcast } = require('@waves/waves-transactions');

const nodeUrl = 'https://nodes-testnet.wavesnodes.com'; // Нода Testnet
const seed = 'insert your seed here';

  // Транзакция выпуска: параметры токена

const myToken = {
  name: 'Spring',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  quantity: 100000, // Фактическое количество ассета (1000) нужно умножить на 10^decimals (100); для выпуска NFT укажите 1
  reissuable: true, // Для NFT укажите false
  decimals: 2, // Для NFT укажите 0
  chainId: 'T' // Testnet; для Mainnet укажите 'W'
};

const issueTx = issue(myToken, seed); // Создание и подписание транзакции выпуска

broadcast(issueTx,nodeUrl).then(resp => console.log(resp));

console.log('Token ID: ' + issueTx.id);
```

### Using Python

```python
import pywaves as pw

my_address = pw.Address(privateKey='some_private_key')
my_address.issueAsset(
    name='Spring', description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', quantity=100000, decimals=2
)
```

### С помощью dApp

В Стандартной библиотеке начиная с версии 4 вызываемая функция может выпустить токен. Подробнее см. разделы [Вызываемая функция](/ru/ride/functions/callable-function) и [Issue](/ru/ride/structures/script-actions/issue) главы [Ride](/ru/ride/).

В следующем примере функция `myToken` выпускает токен со следующими параметрами:

* `name` содержит часть адреса аккаунта, вызвавшего функцию (например, `S_3Mw48B`);
* количество токена: 1000, знаков после запятой: 2;
* возможен довыпуск токена.

```ride
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(i)
func myToken() = [
  Issue("S_" + take(toBase58String(i.caller.bytes),6), "", 100000, 2, true)
]
```

:warning: Минимальная комиссия за транзакцию вызова скрипта увеличивается на 1 WAVES за каждый токен, выпускаемый вызываемой функцией.

## Выпуск NFT

Невзаимозаменяемый токен (non-fungible token, NFT) — особый тип токена, представляющий некоторый уникальный объект. Каждый NFT имеет уникальный идентификатор. Подробнее см. в разделе [Невзаимозаменяемый токен](/ru/blockchain/token/non-fungible-token).

Чтобы выпустить NFT, используйте любой из описанных выше способов. Укажите следующие параметры токена:

* `"quantity": 1`
* `"decimals": 0`
* `"reissuable": false`

## Довыпуск ассета

Если токен довыпускаемый (вы указали `"reissuable": true`), вы можете увеличить количество токена (а также изменить значение `reissuable`, если требуется).

### С помощью Waves.Exchange

Используйте online- или desktop-приложение. См. раздел [Перевыпустить токены](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-asset/online-desktop-token-reissue) документации Waves.Exchange.

### С помощью JavaScript

```javascript
const { reissue, broadcast } = require('@waves/waves-transactions');

const nodeUrl = 'https://nodes-testnet.wavesnodes.com';
const seed = 'insert your seed here';

const myToken = {
  assetId: '39M7cn3PZ7T468vGGfkc4VtxqbeDS5ssU4tLYJeoKfn4',
  quantity: 50000, // Добавление 500 токенов Spring
  reissuable: true,
  chainId: 'T' // Testnet; для Mainnet укажите 'W'
};

const reissueTx = reissue(myToken, seed); // Создание и подписание транзакции довыпуска

broadcast(reissueTx,nodeUrl).then(resp => console.log(resp));
```

### С помощью Python

```python
import pywaves as pw

my_address = pw.Address(privateKey=some_private_key)
my_token = pw.Asset('39M7cn3PZ7T468vGGfkc4VtxqbeDS5ssU4tLYJeoKfn4')
my_address.reissueAsset(my_token, quantity=50000, reissuable=True)
```

## Сжигание ассета

Владелец ассета (не только создатель) может с помощью транзакции сжигания ассета уменьшить количество ассета на своем аккаунте и тем самым общее количество ассета на блокчейне.

### С помощью Waves.Exchange

Используйте online/desktop- или мобильное приложение. См. разделы [Сжечь токены (Online/Desktop)](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-asset/online-desktop-token-token-burn) и [Сжечь токены (Mobile)](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-mobile/mobile-asset/mobile-token-burn) документации Waves.Exchange.

### С помощью JavaScript

```javascript
const { burn, broadcast } = require('@waves/waves-transactions');

const nodeUrl = 'https://nodes-testnet.wavesnodes.com';
const seed = 'insert your seed here';

const myToken = {
  assetId: '39M7cn3PZ7T468vGGfkc4VtxqbeDS5ssU4tLYJeoKfn4',
  quantity: 10000, // Сжигание 100 токенов Spring
  chainId: 'T' // Testnet; для Mainnet укажите 'W'
};

const burnTx = burn(myToken, seed); // Создание и подписание транзакции сжигания токена

broadcast(burnTx,nodeUrl).then(resp => console.log(resp));
```

### С помощью Python

```python
import pywaves as pw

my_address = pw.Address(privateKey=some_private_key)
asset_to_burn = pw.Asset('39M7cn3PZ7T468vGGfkc4VtxqbeDS5ssU4tLYJeoKfn4')
my_address.burnAsset(asset_to_burn, quantity=10000)
```

## Изменение названия и описания ассета

Вы можете изменить название и/или описание своего ассета:
* на Mainnet и Testnet — не ранее чем через 100 000 блоков (около 70 дней) от последнего изменения (или выпуска ассета);
* на Stagenet — не ранее чем через 10 блоков.

:bulb: Вместо переименования ассета вы можете [выпустить](#выпуск-ассета) новый ассет и использовать его вместо прежнего.

### С помощью Waves.Exchange

1. Нажмите на аватар аккаунта в правом верхнем углу. Выберите **Настройки**. В окне **Настройки** установите галочку **Расширенные возможности**.
2. Перейдите на вкладку **Кошелек**. Нажмите кнопку **{} JSON** в правом верхнем углу.
3. Вставьте код транзакции:

   ```json
   {
      "type": 17,
      "version": 1,
      "assetId": "ВСТАВЬТЕ ID СВОЕГО АССЕТА",
      "name": "ВСТАВЬТЕ НОВОЕ ИМЯ",
      "description": "ВСТАВЬТЕ НОВОЕ ОПИСАНИЕ",
      "fee": 100000
   }
   ```

   > В поле `fee` указывается комиссия за транзакцию в WAVELET. `"fee": 100000` соответствует комиссии 0,001 WAVES.

4.  Нажмите **Продолжить**, затем **Подписать**, затем **Отправить**.

### С помощью JavaScript

```javascript
const { updateAssetInfo, broadcast } = require('@waves/waves-transactions');

const nodeUrl = 'https://nodes-testnet.wavesnodes.com';
const seed = 'insert your seed here';

const myToken = {
  assetId: '39M7cn3PZ7T468vGGfkc4VtxqbeDS5ssU4tLYJeoKfn4',
  name: "New name",
  description: "New description",
  chainId: 'T' // Testnet; для Mainnet укажите 'W'
};

const renameTx = updateAssetInfo(myToken, seed); // Создание и подписание транзакции

broadcast(renameTx,nodeUrl).then(resp => console.log(resp));
```

### С помощью Python

```python
import pywaves as pw

pw.setNode(node = 'https://nodes-testnet.wavesnodes.com', chain = 'testnet')
my_address = pw.Address(seed = 'insert your seed here')
my_address.updateAssetInfo('H1g2vAaNt6v1oDmxRWiv6KZeQbb5gCbcLosRfi6PqYjH', name = 'New name', description = 'New description')
```
