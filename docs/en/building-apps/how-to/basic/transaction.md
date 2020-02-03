# How to Create Transaction and Broadcast It to Blockchain

All actions on the blockchain are represented as transations. Waves provides a large number of transaction types. See the [Transaction Type](/en/blockchain/transaction-type) section for more information. Depending on the type, transactions may contain different fields.

**Proof**

On Waves, each transaction can be sent only from the account. Transaction that is sent from ordinary (unscripted) accounts must contain a proof – a sender's digital signature. (Smart accounts and dApps can set their own rules of verification of outgoing transations). See the [Transaction Proof](/en/blockchain/transaction/transaction-proof) section for more information.

There are two option to sign a transaction:

* If your app sends trancastions on your behalf, you can use your own seed phrase to sing transactions. This way is described in (Sign Transaction Using Your Own Seed)[#sign-transaction-using-your-own-seed] section below.
* If your app sends transactions on behalf of range of users, we don't recommend to inquire their seed phrases. Use wallet software instead. This way is described in (Sign Transaction on Behalf of User){#sign-transaction-on-behalf-of-user] section below.

**Fee**

Waves transactions are very cheap but not free. Each transaction must contain a fee not less than specified in [Transaction fee](/en/blockchain/transaction/transaction-fee) article.

> :bulb: On Testnet, a user can top up his/her balance using [Testnet Faucet](/en/ecosystem/waves-explorer/account-balance-top-up-in-the-test-network).

**Workflow**

In order to put a transaction on the blockchain, complete the following steps:

1. Fill in the transaction fields.
2. Sign transaction: generate sender's signature and add to the transaction.
3. Send transaction to a node.

The node checks transaction for validity. If a transaction is valid, then it is put to a generated block in the blockchain, if not — it's rejected by the blockchain.

## Sign Transaction Using Your Own Seed

### Using Javascript

Use `waves-transactions` library. Transaction proof is derived from seed. Fee is calculated automatically.

See method descriptions in [documentation](https://wavesplatform.github.io/waves-transactions/index.html).

```js
import @waves/waves-transactions';

const seed = 'example seed phrase'

// Data transaction: add records to the sender's account data storage

const records = [
  { key: 'integerVal', value: 1 },
  { key: 'booleanVal', value: true },
  { key: 'stringVal', value: 'Lorem ipsum dolor sit amet' }
]

const dataTx = data({ { data: records }, seed); // Create and sign data transaction

await broadcast(dataTx);

// Transfer transaction: send 1 WAVES to the specified address

const money = {
  recipient: '3P8pGyzZL9AUuFs9YRYPDV3vm73T48ptZxs',
  amount: 100000000
}

const transferTx = transfer(money, seed); // Create and sign transaction

await broadcast(transferTx);

const signedDataTx = data(params, seed)
```

### Using Python

```
sample
```

## Sign Transaction on Behalf of User

### Using Javascript

Use `Signer` library together with `ProviderWeb` developed by Waves.Exchange team.

ProviderWeb opens a windows where user can confirm a transaction. After that ProviderWeb generates a transaction proof.

If transaction fee is not specified, it is calculated by `Signer` automatically.

> :warning: Note: `ProviderWeb` now implements signing only for **transfer**, **data** and **invoke** transactions.

See full descriptions in [Signer](/en/building-apps/waves-api-and-sdk/client-libraries/signer) documentation.

**Example:**

```js
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

const [dataTx] = await signer
  .data(records)
  .broadcast(); // Promise is resolved after the transaction is put in UTX pool

// Transfer transaction: send 1 WAVES to the specified address

const money = {
  recipient: '3P8pGyzZL9AUuFs9YRYPDV3vm73T48ptZxs',
  amount: 100000000,
  }

const [transferTx] = await signer
  .transfer(money)
  .broadcast();
```

### Using Python

```
sample
```
