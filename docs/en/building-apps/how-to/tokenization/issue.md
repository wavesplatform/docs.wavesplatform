# How to Create Your Own Token

One of the key benefits of the Waves platform is the simplicity of issuing tokens. To launch your own token, you don't have to write a smart contract – just create an issue transaction and put it to the blockchain. The only threshold for the creator is to pay a fee: 1 WAVES for reqular token (asset) or 0.001 for non-fungible token (NFT). New tokens are immediately available for transfers between accounts. Assets are also available for trading on [Waves.Exchange](https://waves.exchange/) developed by Waves.Exchange team.

Custom tokens can be used as a digital currency – to pay for goods and services in your project or for crowdfunding. Tokens can also represent in-game objects or arbitratry resources. See the [Token](/en/blockchain/token/) article for more information about token params.

### Using Waves.Exchange

You can use online, desktop or mobile app. See the [Create Token](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-asset/online-desktop-token-creation) article of the Waves.Exchange documentation.

Use functions of `waves-transactions` library:

* `issue` function creates and signs an issue transaction. Transaction proof is derived from seed. By default, fee is calculated automatically.
* `broadcast` sends a trnansation to the blockchain.

The issue transaction ID is also the token ID.

See function descriptions in [waves-transactions documentation](https://wavesplatform.github.io/waves-transactions/index.html) on Github.

```javascript
import { nodeInteraction } from "@waves/waves-transactions";
import { issue } from "@waves/waves-transactions";

const nodeUrl = 'https://nodes.wavesnodes.com'; // Mainnet node
const seed = 'insert your seed here';

  // Issue transaction: specify token params

const myToken = {
  name: 'My TOKEN',
  description: 'It is a gaming token',
  quantity: 1000000, // real amount multiplied by 10^decimals; 1 for NFT
  reissuable: true, // false for NFT
  decimals: 8 // 0 
}

const issueTx = issue(myToken, seed); // create and sign issue transaction

nodeInteraction.broadcast(issueTx,nodeUrl).then(resp => console.log(resp));

console.log('Token ID: ' + issueTx.id);
```

### Using Python

```python
sample
```

### Using dApp

Starting with Standard Library from version 4, you can issue a token directly from dApp.

```ride
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(i)
func myToken(args: List[String]) = [
    StringEntry("entry1", args[0]),
    StringEntry("entry1", args[1])
]
```
