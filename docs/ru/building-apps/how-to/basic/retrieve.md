---
sidebarDepth: 2
---

# Как прочитать данные из блокчейна

Все данные в блокчейне Waves доступны для чтения. Например, вы можете прочитать записи в хранилище данных любого аккаунта, баланс аккаунта, список транзакций аккаунта, текущую высоту и время на блокчейне.

Запросна чтение данных вы можете отправить на собственную ноду или одну из нод с публичным API:
* Testnet: <https://nodes-testnet.wavesnodes.com>
* Mainnet: <https://nodes.wavesnodes.com>

## Записи хранилища данных аккаунта

У каждого аккаунта есть хранилище данных, которое содержит записи в формате ключ-значение. Подробнее см. в разделе [Хранилище данных аккаунта](/ru/blockchain/account/account-data-storage).

### С помощью Waves Explorer

1. Откройте <https://wavesexplorer.com/>.
2. Нажмите кнопку ![](./_assets/settings.png) и переключитесь на ![](./_assets/mainnet.png) или ![](./_assets/testnet.png).
3. Найдите аккаунт по адресу или алиасу.
4. Перейдите на вкладку **Data**.

![](./_assets/data-storage-explorer.png)

### С помощью Node REST API

Чтобы получить все записи из хранилища данных аккаунта, используйте метод `GET /addresses/data/{address}`.

Чтобы получить запись по ее ключу, используйте метод `GET /addresses/data/{address}/{key}`.

Описание методов см. в [Swagger](https://nodes-testnet.wavesnodes.com/).

**Пример запроса:**

```
curl 'https://nodes-testnet.wavesnodes.com/addresses/data/3N4iKL6ikwxiL7yNvWQmw7rg3wGna8uL6LU'
```

Приведенные здесь и далее примеры пригодны для использования с помощью утилиты `cURL`. Вы можете адаптировать запрос под ваш язык программирования.

### С помощью JavaScript

Используйте функции библиотеки `waves-transactions`:

* функция `accountData` получает все записи из хранилища данных аккаунта, опционально для отбора записей можно использовать регулярное выражение.
* функция `accountDataByKey` получает запись по ее ключу.

См. [документацию библиотеки](https://wavesplatform.github.io/waves-transactions/modules/nodeinteraction.html) на Github.

**Пример:**

```javascript
import { nodeInteraction } from "@waves/waves-transactions";

const nodeUrl = 'https://nodes-testnet.wavesnodes.com';
const address = '3N4iKL6ikwxiL7yNvWQmw7rg3wGna8uL6LU';

let stringVal = await nodeInteraction.accountDataByKey('stringVal',address,nodeUrl);

console.log('stringVal: ' + stringVal.value);
```

### С помощью Python

```python
import requests

node_url = 'https://nodes-testnet.wavesnodes.com'
address = '3N4iKL6ikwxiL7yNvWQmw7rg3wGna8uL6LU'

account_data_storage_data = requests.get(f'{node_url}/addresses/data/{address}').json()
print(account_data_storage_data)
```

## Баланс аккаунта

Аккаунту могут принадлежать несколько ассетов (токенов) в разных количествах. Для WAVES есть четыре типа баланса: регулярный, эффективный, доступный, генерирующий. Подробнее см. в разделe [Баланс аккаунта](/ru/blockchain/account/account-balance).

### С помощью Waves Explorer

1. Откройте <https://wavesexplorer.com/>.
2. Нажмите кнопку ![](./_assets/settings.png) и переключитесь на ![](./_assets/mainnet.png) или ![](./_assets/testnet.png).
3. Найдите аккаунт по адресу или алиасу.
4. Балансы в WAVES отображаются прямо под адресом аккаунта. Перейдите на вкладку **Assets**, чтобы увидеть балансы в других ассетах.

![](./_assets/data-storage-explorer.png)

> Невзаимозаменяемые токены (NFT) отображаются на вкладке **Non-fungible tokens**.

### С помощью Node REST API

Чтобы получить [все типы баланса](/ru/blockchain/account/account-balance) в WAVES, используйте метод `GET /addresses/balance/details/{address}`.

Чтобы получить балансы в других ассетах, используйте метод `GET /assets/balance/{address}` или `GET /assets/balance/{address}/{assetId}`.

Описание методов см. в [Swagger](https://nodes-testnet.wavesnodes.com/).

> :bulb: Самый простой способ узнать ID ассета по названию и наоборот — посмотреть в приложении [Waves.Exchange](https://waves.exchange/), разработанном командой Waves.Exchange. Перейдите на вкладку **Торговля** и введите название или ID ассета в строке поиска.

![](./_assets/asset-id.png)

**Пример запроса:**

```
curl 'https://nodes.wavesnodes.com/assets/balance/3P8pGyzZL9AUuFs9YRYPDV3vm73T48ptZxs/G9hT3ntXUenjCr2UwXRVa1PP6kWZtfotBLGYhfw8J7GG'
```

Вы можете адаптировать запрос под ваш язык программирования.

> Чтобы получить список принадлежащих аккаунту NFT, используйте метод `GET /assets/nft/{address}/limit/{limit}`.

### С помощью JavaScript

#### Без входа в аккаунт

Используйте функции библиотеки `waves-transactions`:

* функция `balanceDetails` получает все типы баланса в WAVES.
* функция `assetBalance` получает балансы в других ассетах.

См. [документацию библиотеки](https://wavesplatform.github.io/waves-transactions/modules/nodeinteraction.html) на Github.

**Пример:**

```javascript
import { nodeInteraction } from "@waves/waves-transactions";

const nodeUrl = 'https://nodes-testnet.wavesnodes.com';
const address = '3Mvpp7v6G11tKNgsoNhbgnZS9thdZ6TvAXK';
const assetId = 'DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p';

let wavesBalance = await nodeInteraction.balanceDetails(address,nodeUrl);
let assetBalance = await nodeInteraction.assetBalance(assetId,address,nodeUrl);

console.log('WAVES available balance: ' + wavesBalance.available);
console.log('WAVES effictive balance: ' + wavesBalance.effective);
console.log('Neutrino balance: ' + assetBalance.balance);
```

#### 

If user is authenticated in your app, you can use functions of `Signer` library:

* `getBalance` provides balances of all assets in user's portfolio. For WAVES, available balance is returned.
* `getSponsoredBalances` prodives balances of sponsored assets in user's portfolio. См. [Sponsored Fee Transactions](https://docs.wavesplatform.com/en/blockchain/waves-protocol/sponsored-fee).

See [Signer documentation](/en/building-apps/waves-api-and-sdk/client-libraries/signer).

**Example:**

```javascript
import Signer from '@waves/signer';
import Provider from '@waves.exchange/provider-web';

// Library initialization

const signer = new Signer({
  NODE_URL: 'https://nodes-testnet.wavesnodes.com'
});
signer.setProvider(new Provider());

const user = await signer.login();
let balances = await signer.getBalance();

console.log('User balances: ' + JSON.stringify(balances));
```

### Using Python

```python
import requests

node_url = 'https://nodes-testnet.wavesnodes.com'
address = '3N4iKL6ikwxiL7yNvWQmw7rg3wGna8uL6LU'
asset_id = 'DG2xFkPdDwKUoBkzGAhQtLpSGzfXLiCYPEzeKH2Ad24p'

waves_balances = requests.get(f'{node_url}/addresses/balance/details/{address}').json()
print(waves_balances)

asset_balance = requests.get(f'{node_url}/assets/balance/{address}/{asset_id}').json()
print(asset_balance)
```

## List of Transactions by Address

You can get a list of transactions related to the specified account: outgoing transactions that are sent from the account; incoming transfers; exchanges that the account participated in; dApp script invocations etc.

### Using Waves Explorer

1. Open <https://wavesexplorer.com/>.
2. Press ![](./_assets/settings.png) button and switch to ![](./_assets/mainnet.png) or ![](./_assets/testnet.png).
3. Search for an account by its address or alias.
4. Switch to **Transactions** tab.

### Using Node REST API

To retrieve all the transactions related to an account, use `GET /transactions/address/{address}/limit/{limit}` method. In this method, you can use pagination: to get the next page, specify the `after` parameter as ID of the last transaction in previous response.

See method description in [Swagger web interface](https://nodes-testnet.wavesnodes.com/).

**Request example:**

```
curl 'https://nodes-testnet.wavesnodes.com/transactions/address/3N1HYdheNiiTtHgi2n3jLAek6N3H4guaciG/limit/20?after=Ay5J4ZiFDVhRrLq4fdViiHHm5aiyrK3CYAN2nK6AkMA9'
```

You can adjust the proposed request to your app written in any programming language.

### Using JavaScript

You can use the `fetchTransactions` function of `node-api-js` library.

**Example:**

```javascript
import { create } from "@waves/node-api-js";

const nodeUrl = 'https://nodes-testnet.wavesnodes.com';
const api = create(nodeUrl);

let address = '3N1HYdheNiiTtHgi2n3jLAek6N3H4guaciG';

let txList = await api.transactions.fetchTransactions(address,10);

console.log('Transactions:' + txList.map(tx => '\nid: ' + tx.id + ' | type: ' + tx.type + ' | senderPublicKey: ' + tx.senderPublicKey));
```

### Using Python

```python
import requests

node_url = 'https://nodes-testnet.wavesnodes.com'
address = '3N4iKL6ikwxiL7yNvWQmw7rg3wGna8uL6LU'
limit = 10
after = '5VsNkFuEsxwaZRHezQkTsfkf7cJxjRGBiahn3H1raKsT'

transactions = requests.get(f'{node_url}/transactions/address/{address}/limit/{limit}?after={after}').json()
print(transactions)
```

## Blockchain Height and Current Time

The block height is a sequence number of a block in the blockchain. The blockchain height is a sequence number of the last block.

You can use timestamp of the last block as a current time of the blockchain.

### Using Waves Explorer

1. Open <https://wavesexplorer.com/>.
2. Press ![](./_assets/settings.png) button and switch to ![](./_assets/mainnet.png) or ![](./_assets/testnet.png).
3. Current height is displayed above the block list. If don't see block timestamps, click last block number.

### Using Node REST API

To retrieve the blockchain height only, use `GET /blocks/height` method.

To retrieve all the headers of the last block, including height and timestamp, use `GET /blocks/headers/last` method.

See method descriptions in [Swagger web interface](https://nodes-testnet.wavesnodes.com/).

**Request example:**

```
curl 'https://nodes-testnet.wavesnodes.com/blocks/headers/last'
```

You can adjust the proposed request to your app written in any programming language.

> To get the entire block, both headers and transactions, use `GET /blocks/last` method.

### Using JavaScript

You can use the `fetchHeadersLast` function of `node-api-js` library.

**Example:**

```javascript
import { create } from "@waves/node-api-js";

const  nodeUrl = 'https://nodes-testnet.wavesnodes.com';
const api = create(nodeUrl);

let topBlock = await api.blocks.fetchHeadersLast();

console.log('Currrent height: ' + topBlock.height);
console.log('Current time: '+ Date(topBlock.timestamp));
```

### Using Python

```python
import requests

node_url = 'https://nodes-testnet.wavesnodes.com'

blockchain_height = requests.get(f'{node_url}/blocks/height').json()
print(blockchain_height)

last_block_headers = requests.get(f'{node_url}/blocks/headers/last').json()
print(last_block_headers)
```
