---
sidebarDepth: 2
---

# How to Read Blockchain Data

For example, you can retrive data from account data storage, account balance, a list of transactions by certain asset, or current blockchain height and time.

## Data from Account Data Storage

Each account on the Waves blockchain has an account data storage that stores data records in key-value format. See the [Account Data Storage](/en/blockchain/account/account-data-storage) section for more information.

### Using Waves Explorer

1. Open <https://wavesexplorer.com/>.
2. Press ![](./_assets/settings.png) button and switch to Mainnet ot Testnet.
3. Search for an account by its address or alias.
4. Switch to **Data** tab.

![](./_assets/data-storage-explorer.png)

### Using Node REST API

You can send a request to your own node or to one of the Waves nodes with public API:
* Testnet: <https://nodes-testnet.wavesnodes.com>
* Mainnet: <https://nodes.wavesnodes.com>

To retrieve all the data records from an account data storage, use `GET /addresses/data/{address}` method.

To retrieve a data record by key, use `GET /addresses/data/{address}/{key}` method.

See method descriptions in [Swagger web interface](https://nodes-testnet.wavesnodes.com/).

**Request example:**

```
curl 'https://nodes-testnet.wavesnodes.com/addresses/data/3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7'
```

The examples shown here and below are suitable for the `cURL` utility. You can adjust the proposed request to your app written in any programming language.

### Using JavaScript

You can use functions of `waves-transactions` library:

* `accountData` function retrieves all the data records from an account data storage, optionally filtered by certain regexp.
* `accountDataByKey` retrieves a data record by key.

See [nodeinteraction module description](https://wavesplatform.github.io/waves-transactions/modules/nodeinteraction.html) on Github.

**Example:**

```js
import { nodeInteraction } from "@waves/waves-transactions";

let nodeUrl = 'https://nodes-testnet.wavesnodes.com';
let address = '3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7';

let price = await nodeInteraction.accountDataByKey('price',address,nodeUrl);
```

### Using Python

```
Could anybody help me?
```

## Account Balance

Each account can store different assets (tokens) in different amounts. For WAVES, there are four types of balance: regular, effective, available, and generating. See the [Account Balance](/en/blockchain/account/account-balance) for more information.

### Using Waves Explorer

1. Open <https://wavesexplorer.com/>.
2. Press ![](./_assets/settings.png) button and switch to Mainnet ot Testnet.
3. Search for an account by its address or alias.
4. Balances in WAVES are displayed below the address. Switch to **Assets** tab to see balances in other tokens.

> NFTs are displayed on the **Non-fungible tokens** tab.

### Using Node REST API

To retrieve all types of balalnces of WAVES, use `GET /addresses/balance/details/{address}` method.

To retrieve balances of other assets, use `GET /assets/balance/{address}` or `GET /assets/balance/{address}/{assetId}` method.

See method descriptions in [Swagger web interface](https://nodes-testnet.wavesnodes.com/).

**Request example:**

```
curl 'https://nodes.wavesnodes.com/assets/balance/3P8pGyzZL9AUuFs9YRYPDV3vm73T48ptZxs/G9hT3ntXUenjCr2UwXRVa1PP6kWZtfotBLGYhfw8J7GG'
```

You can adjust the proposed request to your app written in any programming language.

> To get a list of NFTs that belong to account, use `GET /assets/nft/{address}/limit/{limit}` method.

### Using JavaScript

#### Without user authentication

You can use functions of `waves-transactions` library:

* `balanceDetails` function retrieves all types of balalnces of WAVES.
* `assetBalance` function retrieve balances of other assets.

See [nodeinteraction module description](https://wavesplatform.github.io/waves-transactions/modules/nodeinteraction.html) on Github.

**Example:**

```js
import { nodeInteraction } from "@waves/waves-transactions";

let nodeUrl = 'https://nodes-testnet.wavesnodes.com';
let address = '3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7';

let wavesBalance = await nodeInteraction.balanceDetails('price',address,nodeUrl);
let assetsBalance = await nodeInteraction.assetBalance('price',address,nodeUrl);
```

#### With user authentication

If user is authentication in your app, you can use functions of `Signer` library:

### Using Python

```
I need help!
```

## List of Transactions by Address

You can get a list of transactions related to the specified account: outgoing transactions that are sent from the account; incoming transfers; exchanges that the account participated in; dApp script invokations etc.

### Using Waves Explorer

1. Open <https://wavesexplorer.com/>.
2. Press ![](./_assets/settings.png) button and switch to Mainnet ot Testnet.
3. Search for an account by its address or alias.
4. Switch to **Transactions** tab.

### Using Node REST API

To retrieve all the transactions related to an account, use `GET /transactions/address/{address}/limit/{limit}` method. In this method, you can use pagination: to get the next page, specify the `after` parameter as ID of the last transaction in previous response.

See method descriptions in [Swagger web interface](https://nodes-testnet.wavesnodes.com/).

**Request example:**

```
curl 'address/3PPcVp7fzNgdncv9HSN7V22mjRESGUNmXGE/limit/20?after=5VsNkFuEsxwaZRHezQkTsfkf7cJxjRGBiahn3H1raKsT'
```

You can adjust the proposed request to your app written in any programming language.

### Using JavaScript

You can use functions of `waves-transactions` library:

* `accountData` function retrieves all the data records from an account data storage, optionally filtered by certain regexp.
* `accountDataByKey` retrieves a data record by key.

See [nodeinteraction module description](https://wavesplatform.github.io/waves-transactions/modules/nodeinteraction.html) on Github.

**Example:**

```js
import { nodeInteraction } from "@waves/waves-transactions";

let nodeUrl = 'https://nodes-testnet.wavesnodes.com';
let address = '3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7';

let price = await nodeInteraction.accountDataByKey('price',address,nodeUrl);
```

### Using Python

```
Could anybody help me?
```

## List of Transactions by Address

## Data from Account Data Storage