---
sidebarDepth: 2
---

# How to Create and Manage Your Own Token

One of the key benefits of the Waves platform is the simplicity of issuing tokens. To launch your own token, you don't have to write a smart contract – just create an issue transaction and put it to the blockchain. The only threshold for the creator is to pay a fee: 1 WAVES for reqular token (asset) or 0.001 for non-fungible token (NFT).

New tokens are immediately available:

* for transfers between accounts,
* for trading on [Waves.Exchange](https://waves.exchange/) developed by Waves.Exchange team (except NFTs),
* for payments attached to dApp script invocation.

You can use your tokens:

* as a digital currency – to pay for goods and services in your project or for crowdfunding,
* as in-game objects or arbitratry resources and so on.

See the [Token](/en/blockchain/token/) article for more information about token.

In this chapter, tokens and assets are synonyms (but for NFT we always use the word 'token').

## Issue Asset

> :bulb: Asset issued without a script cannot be converted to smart asset. If you want to add a script later, issue an asset with the script `AwZd0cYf` (base64 encoded Ride expression that is always true). Fee for the transaction with smart asset is larger by 0.004 WAVES.

### Using Waves.Exchange

You can use online or desktop app. See the [Create Token](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-asset/online-desktop-token-creation) article of the Waves.Exchange documentation.

### Using JavaScript

Use functions of `waves-transactions` library:

* `issue` function creates and signs an issue transaction. Transaction proof is derived from seed. By default, fee is calculated automatically.
* `broadcast` sends a transation to the blockchain.

The issue transaction ID becomes also the token ID.

See function descriptions in [waves-transactions documentation](https://wavesplatform.github.io/waves-transactions/index.html) on Github.

```javascript
import { nodeInteraction } from "@waves/waves-transactions";
import { issue } from "@waves/waves-transactions";

const nodeUrl = 'https://nodes-testnet.wavesnodes.com'; // Mainnet node
const seed = 'insert your seed here';

  // Issue transaction: specify token params

const myToken = {
  name: 'Spring',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  quantity: 100000, // real amount (1000) multiplied by 10^decimals (100); set 1 for NFT
  reissuable: true, // set false for NFT
  decimals: 2, // set 0 for NFT
  chainId: 'T' // Testnet; set 'W' for Mainnet
};

const issueTx = issue(myToken, seed); // Create and sign issue transaction

nodeInteraction.broadcast(issueTx,nodeUrl).then(resp => console.log(resp));

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

### Using dApp

Starting with Standard Library version 4, dApp callable function can issue a token. See [Callable Function](/en/ride/functions/callable-function) and [Issue](/en/ride/structures/common-structures/issue) articles of [Ride](/en/ride) chapter for more information.

> :warning: Standard Library Version 4 becomes available from node version 1.2.0, after activation of the "Ride V4 and multiple attached payments for Invoke Script Transaction" (No. 16) feature. See Activation Protocol. Version 1.2.x is currently available on Stagenet only.

In this example, `myToken` function issues a token with following params:

* `name` contains the address of the account which invoked the function (for example, `Spring_3MbwwebM61Y11UFZwkdQ1gXUJjY27ww1r6z`),
* number of tokens equals to 1000 and decimals id 2,
* token is reissuable.

```ride
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(i)
func myToken() = [
  Issue("Spring_" + toBase58String(i.caller.bytes), "", 100000, 2, true, unit, 0)
]
```

## Issue NFT

A non-fungible token or NFT is a special type of a token, that represents some unique object. Each NFT has its own unique identifier. See the [Non-fungible Token](/en/blockchain/token/non-fungible-token) article for more information.

To issue an NFT, you can use any of the methods described above. Specify the following parameters of token:

* `"quantity": 1`
* `"decimals": 0`
* `"reissuable": false`

## Reissue Asset

If your token is reissuable (you set `"reissuable": true`), you can append an additional amount of token (and also change a `reissuable` flag, if necessary).

### Using JavaScript

```javascript
import { nodeInteraction } from "@waves/waves-transactions";
import { reissue } from "@waves/waves-transactions";

const nodeUrl = 'https://nodes-testnet.wavesnodes.com';
const seed = 'insert your seed here';

const myToken = {
  assetId: '39M7cn3PZ7T468vGGfkc4VtxqbeDS5ssU4tLYJeoKfn4',
  quantity: 50000, // append 500 Spring tokens
  reissuable: true,
  chainId: 'T' // Testnet; 'W' for Mainnet
};

const reissueTx = reissue(myToken, seed); // Create and sign reissue transaction

nodeInteraction.broadcast(reissueTx,nodeUrl).then(resp => console.log(resp));
```

### Using Python

```python
sample
```

## Burn Asset

Account that owns an asset (not necessarily asset issuer) can destroy some amount of the asset using burn transaction. The burn transaction decreases the amount of the asset on sender's account and thereby the total amount of the asset on the blockchain.

### Using Waves.Exchange

You can use online, desktop or mobile app. See the [Burn Token (Online & Desktop)](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-asset/online-desktop-token-token-burn) and [Burn Token (Mobile)](https://docs.waves.exchange/en/waves-exchange/waves-exchange-mobile/mobile-asset/mobile-token-burn) articles of the Waves.Exchange documentation.

### Using JavaScript

```javascript
import { nodeInteraction } from "@waves/waves-transactions";
import { burn } from "@waves/waves-transactions";

const nodeUrl = 'https://nodes-testnet.wavesnodes.com';
const seed = 'insert your seed here';

const myToken = {
  assetId: '39M7cn3PZ7T468vGGfkc4VtxqbeDS5ssU4tLYJeoKfn4',
  quantity: 10000, // destroy 100 Spring tokens
  chainId: 'T' // Testnet; 'W' for Mainnet
};

const burnTx = burn(myToken, seed); // Create and sign burn transaction

nodeInteraction.broadcast(burnTx,nodeUrl).then(resp => console.log(resp));
```

### Using Python

```python
sample
```
