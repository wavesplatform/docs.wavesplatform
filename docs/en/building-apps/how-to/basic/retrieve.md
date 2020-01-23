---
sidebarDepth: 2
---

# How to Retrieve Information from the Blockchain

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

```curl 'https://nodes-testnet.wavesnodes.com/addresses/data/3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7'
```

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


## Account Balance

Each account on the Waves blockchain has an account data storage that stores data records in key-value format. See the [Account Data Storage](/en/blockchain/account/account-data-storage) section for more information.

### Using Waves Explorer

1. Open <https://wavesexplorer.com/>.
2. Press ![](./_assets/settings.png) button and switch to Mainnet ot Testnet.
3. Search for an account by its address or alias.
4. Switch to **Data** tab.