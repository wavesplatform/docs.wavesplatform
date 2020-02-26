# Waves Smart Contracts Overview

Welcome! We are excited that you want to learn Waves Smart Contracts.

## Orientation

Waves Smart Contracts are scripts written using Ride programming language.

There are 3 types of Waves Smart Contracts:

* Smart assets
* Smart accounts
* dApps

| Smart contract type | Designation | Is callable |
|---|---|---|
| [Smart asset](#smart-assets) | Verifies transactions involving the asset | No |
| [Smart account](#smart-accounts) | Verifies transactions issuing from the account  | No |
| [dApp](#dapp) | - Verifies transactions issuing from the account<br> - Allows invoking its [callable functions](/en/ride/functions/callable-function) by other accounts | Yes  |

## Smart Contracts Types

### Smart Assets <a id="smart-assets"></a>

There are no constraints on operations with "regular" assets. But when the constraints are needed, for example, to get notary/escrow approval of the transaction or to ensure that  operations with the asset are locked for a specified time, the asset can be "promoted" to smart asset to follow the limitations. To convert asset to the smart asset, the script containing one or more checks is attached to it. If the checks return `True`, then the transaction is good to be sent to blockchain.

To attach the script to the asset and therefore make it smart asset, the [set asset script transaction](/en/blockchain/transaction-type/set-asset-script-transaction.md) must be issued. Every regular asset can become smart asset.

When an [order](/en/blockchain/order) with a smart asset is placed on matcher, the matcher validates orders with smart asset's script. Then, when an ExchangeTransaction with this order is put into blockchain, it is validated with smart asset's script (`case tx: ExchangeTransaction => ...`)

### Smart Accounts <a id="smart-accounts"></a>

Resembling smart assets, the smart accounts ensure if the transaction passes one or more checks defined in the script attached to the account. If the checks are passed, the transaction is submitted to be included to the next block.

To attach the script to account and therefore make it smart account, the [set script transaction](/en/blockchain/transaction-type/set-script-transaction.md) is issued. Every regular account can become smart account.

When a smart account places an order, the matcher validates the order with the account's script `(case tx: Order => ...)` the same way as the blockchain does.

> :bulb: The best intuition about smart assets and smart accounts are locks. There is a default lock for regular accounts and assets, which checks signatures of transactions. Smart Contracts allow to change that lock to custom, i.e.
> * open lock - all transactions are allowed
> * multisignature - the transaction can be sent if several people sign it
> * time lock - transactions can be send only after specified blockchain height, and others.

### dApps

dApps are smart accounts with the important additional feature: they can bear not only the compliance checks, but also allow other accounts to invoke its functions.

Read [What is a dApp](/en/building-apps/smart-contracts/what-is-a-dapp.md) article for quick acquaitance with dApps features.

Proceed to [How-to guides](/en/building-apps/waves-api-and-sdk/examples/) to learn dApps in more detail.

## Data Available for Smart Contracts

Each Waves Smart Contract has access to:

* **Blockchain height**. There is height function in the global scope of a script which returns the blockchain height at the execution time.

> :warning: Note that when the smart account validates order, it has access to the order fields only. It does not have access to global scope blockchain-related [functions](/en/ride/functions/built-in-functions/blockchain-functions) and [variables](/en/ride/variables/built-in-variables), and account data storage.


When an Order with a smart asset is placed on Matcher, Matcher validates orders with Smart Asset's script (create fake ExhcangeTransaction and validate it).

Then, when an ExchangeTransaction with this order is put into blockchain, it is validated with Smart Asset's script (case tx: ExchangeTransaction => ...)

* **Key-value storage of any account**.

Smart accounts and dApps has access to **transaction proofs**. Any transaction can contain an array of proofs up to 8 elements. By default proofs array used for signatures, but you can put any data in the array (each element is up to 64 bytes).

> :warning: `Proofs` array is not available in an asset script.

Smart assets, smart accounts and dApps' verifier function (i.e. function that checks dApp's outgoing transactions for compliance with the specified conditions) have access to current transaction fields. There is `tx` variable in the global scope of a script which contains all fields of current outgoing transaction, including proofs array.

dApps' Callable function has an access only to Invoke transaction's Invoсation structure.

## Waves Smart Contracts Specifics

### Absence of Gas

Ride is non-Turing complete language. With absence of cycles and quite severe resctictions on script size, this means that Ride scripts are executed for predictable time. This feature allowed to **reject gas** usage. [Execution fee](/en/blockchain/transaction/transaction-fee) is fixed and always known upfront (at least 0.001 WAVES plus 0.004 WAVES for each script invocation).

### Working with State

If you're familiar with Ethereum smart contracts model you have to consider the main difference between them and Waves Smart Contracts:

> :bulb: Waves smart **contract** does **not** have its' own state. Instead, the [account's key-value storage](/en/blockchain/account/account-data-storage) is used. It is managed by [data transactions](https://docs.wavesplatform.com/en/blockchain/transaction-type/data-transaction). Also, Waves smart contract can make request to key-value storage of an arbitrary account.

So for working with the state, the following tools are available:

| Tool | Used with | Read | Write |
|---|---|---|---|
| Data transaction | Smart accounts, dApps | No | Yes |
| [Account data storage functions](/en/ride/functions/built-in-functions/account-data-storage-functions)  | Smart accounts, dApps | Yes | No |
| Callable functions | dApps  | Yes | Yes |