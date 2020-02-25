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
| Smart asset | Verifies transactions involving the asset | No |
| Smart account | Verifies transactions issuing from the account  | No |
| dApp  | - Verifies transactions issuing from the account<br> - Allows invoking its [callable functions](/en/ride/functions/callable-function) by other accounts | Yes  |

As denoted in the table above, the smart contracts accommodate some logic that checks outgoing transactions for compliance with the specified conditions. The transaction is sent only if this conditions are satisfied.

> :bulb: The best intuition about smart assets and smart accounts are locks. There is a default lock for regular accounts and assets, which checks signatures of transactions. Smart Contracts allow to change that lock to custom, i.e. open lock (all transactions are allowed), multisignature (the transaction can be sent if several people sign it), time lock (transactions can be send only after specified blockchain height).

The dApps can bear not only the compliance checks, but also they allow other accounts to invoke its functions.

Each Waves Smart Contract has access to:

* **Blockchain height**. There is height function in the global scope of a script which returns the blockchain height at the execution time.

> :warning: Note that when the smart account validates order, it has access to the order fields only. It does not have access to global scope functions, including the mentioned `height` function.

* **Key-value storage of any account**.

Smart accounts and dApps has access to **transaction proofs**. Any transaction can contain an array of proofs up to 8 elements. By default proofs array used for signatures, but you can put any data in the array (each element is up to 64 bytes).

> :warning: `Proofs` array is not available in an asset script.

Smart assets, smart accounts and dApps' verifier function (i.e. function that checks dApp's outgoing transactions for compliance with the specified conditions) have access to current transaction fields. There is `tx` variable in the global scope of a script which contains all fields of current outgoing transaction, including proofs array.

dApps' Callable function has an access only to Invoke transaction's Invokation structure.

## Ride Specifics

### Absence of Gas

Ride is non-Turing complete language. With absence of cycles and quite severe resctictions on script size, this means that Ride scripts are executed for predictable time. This feature allowed to **reject gas** usage. [Execution fee](/en/blockchain/transaction/transaction-fee) is fixed and always known upfront (0.004 WAVES for each script invocation).

> For example, minimal fee for transfer transaction is 0.001 WAVES for usual account and 0.005 (0.001 + 0.004) for smart account.

### Working with State

If you're familiar with Ethereum smart contracts model you have to consider the main difference between them and Waves Smart Contracts:

> :bulb: Waves smart **contract** does **not** have its' own state. Instead, the [account's key-value storage](/en/blockchain/account/account-data-storage) is used. It is managed by [data transactions](https://docs.wavesplatform.com/en/blockchain/transaction-type/data-transaction). Also, Waves smart contract can make request to key-value storage of an arbitrary account.

So for working with the state, the following tools are available:

| Tool | Used with | Read | Write |
|---|---|---|---|
| Data transaction | Smart accounts, dApps | No | Yes |
| [Account data storage functions](/en/ride/functions/built-in-functions/account-data-storage-functions)  | Smart accounts, dApps | Yes | No |
| Callable functions | dApps  | Yes | Yes |

## Smart Accounts

Waves uses account-based model, there are no inputs and outputs of transactions like in some other blockchain networks. All assets and data [associates](https://docs.wavesplatform.com/en/blockchain/transaction-type/data-transaction) with an account and bound to its' public key.

> :bulb: By default, public key "owns" assets and stores key-value data attached by [data transactions](https://docs.wavesplatform.com/en/blockchain/transaction-type/data-transaction). To spend funds or update key-value storage the sender provides **a valid signature** matching transaction body and public key.

**The main idea** that before the transaction is submitted to be included in the next block, the account checks if the transaction meets certain requirements, defined in a **script**. The script is attached to the account so the account can validate every transaction before confirming it. To attach the script to account and therefore make it smart account, the [set script transaction](/en/blockchain/transaction-type/set-script-transaction.md) is issued.

Every regular account can become smart account.

> [Detailed explanation of Smart Accounts with examples](https://docs.wavesplatform.com/en/building-apps/smart-contracts/what-is-smart-account#account-script-structure)

## Smart Assets

If we plan to apply constraints on all operations for a specific asset, we cannot use a smart account. In our paradigm, we have smart assets for this purpose: the script will be attached to the asset and will work in a similar way. Transactions for such assets are valid only if the script returns True. For example, a script can check if a notary/escrow approves the transaction or that operations with the asset are not locked for a specified time. The script for the token is invoked upon the following operations with an asset:

* Transfer transaction
* Mass Transfer transaction
* Reissue transaction
* Burn transaction
* Exchange transaction
* Set Asset Script transaction
* Update Asset Info transaction

## dApps

Read [What is a dApp](/en/building-apps/smart-contracts/what-is-a-dapp.md) article for quick acquaitance with dApps features.

Proceed to [How-to guides](/en/building-apps/waves-api-and-sdk/examples/) to learn dApps in more detail.

## Additional Information

> :bulb: Here you can find [White Paper](https://wavesplatform.com/files/docs/white_paper_waves_smart_contracts.pdf?cache=b) which describes Waves Smart Contracts approach: basic use-cases, implementation details and Ride language description.
