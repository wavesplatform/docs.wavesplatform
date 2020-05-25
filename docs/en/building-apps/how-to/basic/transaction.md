# How to Create Transaction and Broadcast It to Blockchain

All events on the blockchain are represented as transactions. For example:

* data transaction writes data to an account data storage;
* transfer transaction moves a certain amount of the token from one account to another.

Waves provides variety of transaction types. See the [Transaction Type](/en/blockchain/transaction-type) article for more information. Depending on the type, transactions may contain different fields.

**Transaction Proof**

On Waves, each transaction can be sent only from the account. Transaction that is sent from ordinary account (without script) must contain a proof – sender's digital signature. (Smart accounts and dApps can set their own rules for verification of outgoing transations). See the [Transaction Proof](/en/blockchain/transaction/transaction-proof) section for more information. 

There are two options to sign a transaction:

* If your app sends trancastions on your behalf, you can use your own seed phrase to sign transactions. This way is described in [Sign Transaction Using Your Own Seed](#sign-transaction-using-your-own-seed) section below.
* If your app sends transactions on behalf of range of users, we don't recommend to ask them for their seed phrases. Instead, use the official wallet software – for example, provided by Waves.Exchange team. This way is described in [Sign Transaction on Behalf of User](#sign-transaction-on-behalf-of-user) section below.

**Transaction Fee**

Waves transactions are very cheap but not free. Each transaction must contain a fee not less than specified in [Transaction fee](/en/blockchain/transaction/transaction-fee) article.

> :bulb: On Testnet, a user can top up their WAVES balance using [Testnet Faucet](/en/ecosystem/waves-explorer/account-balance-top-up-in-the-test-network).

**Workflow**

In order to put a transaction on the blockchain, complete the following steps:

1. Fill in the transaction fields.
2. Sign transaction: generate sender's signature and add it to the transaction.
3. Send transaction to a node.

You can send a request to your own node or to one of the Waves nodes with public API:

* Testnet: <https://nodes-testnet.wavesnodes.com>
* Mainnet: <https://nodes.wavesnodes.com>

The node checks transaction for validity. If a transaction is valid, then it is put to a generated block in the blockchain, if not — it's rejected by the blockchain.

## Sign Transaction Using Your Own Seed

### Using JavaScript

Use `waves-transactions` library. Transaction proof is generated using your seed phrase. If transaction fee is not specified, it is calculated automatically.

See function descriptions in [documentation](https://wavesplatform.github.io/waves-transactions/index.html) on Github.

```javascript
import { broadcast } from "@waves/waves-transactions";
import { data, transfer } from "@waves/waves-transactions";

const nodeUrl = 'https://nodes-testnet.wavesnodes.com';
const seed = 'insert your seed here';

  // Data transaction: add records to the sender's account data storage

  const records = [
    { key: 'integerVal', value: 1 },
    { key: 'booleanVal', value: true },
    { key: 'stringVal', value: 'Lorem ipsum dolor sit amet' }
  ]

  const dataTx = data({ data: records }, seed); // Create and sign data transaction

  broadcast(dataTx,nodeUrl).then(resp => console.log(resp));

  // Transfer transaction: send 1 WAVES to the specified address

  const money = {
    recipient: '3N1HYdheNiiTtHgi2n3jLAek6N3H4guaciG',
    amount: 100000000 // Actual amount multiplied by 10^decimals
  }

  const transferTx = transfer(money, seed); // Create and sign transfer transaction

  broadcast(transferTx,nodeUrl).then(resp => console.log(resp));

```

### Using Python

The simplest way to send a transaction using Python is implementing [PyWaves](https://github.com/PyWaves/PyWaves) library developed by Waves community. Use `Address` class to do the operations in blockchain. Explore more use cases in their [readme file](https://github.com/PyWaves/PyWaves/blob/master/README.md).

```python
import pywaves as pw

myAddress = pw.Address(seed='insert your seed here')

data = [{'type':'string', 'key': 'stringVal', 'value':'Lorem ipsum dolor sit amet'},
        {'type':'integer',  key: 'integerVal', value: 1 },
        {'type':'boolean',  key: 'booleanVal', value: true }]

myAddress.dataTransaction(data)
myAddress.sendWaves(recipient = pw.Address('3P8pGyzZL9AUuFs9YRYPDV3vm73T48ptZxs'),
                    amount = 100000000)
```

## Sign Transaction on Behalf of User

### Using JavaScript

Use `Signer` library together with `ProviderWeb` developed by Waves.Exchange team.

`ProviderWeb` opens a windows where user can confirm a transaction. After that `ProviderWeb` generates a transaction proof.

If transaction fee is not specified, it is calculated by `Signer` automatically.

> :warning: `ProviderWeb` now implements signing for all types of transactions except exchange transactions.

See full description in [Signer](/en/building-apps/waves-api-and-sdk/client-libraries/signer) documentation.

**Example:**

```javascript
import Signer from '@waves/signer';
import Provider from '@waves.exchange/provider-web';

// Library initialization

const signer = new Signer({
  NODE_URL: 'https://nodes-testnet.wavesnodes.com'
});
signer.setProvider(new Provider());

// Data transaction: add records to the sender's account data storage

const records = [
  { key: 'integerVal', value: 1 },
  { key: 'booleanVal', value: true },
  { key: 'stringVal', value: 'Lorem ipsum dolor sit amet' }
]

const dataTx = signer
  .data({ data: records })
  .broadcast();

dataTx.then(resp => console.log(resp));

console.log('Data tx: ' + dataTx);

// Transfer transaction: send 1 WAVES to the specified address

const money = {
  recipient: '3N1HYdheNiiTtHgi2n3jLAek6N3H4guaciG',
  amount: 100000000,
  }

const transferTx = signer
  .transfer(money)
  .broadcast();
  
transferTx.then(resp => console.log(resp));
```
