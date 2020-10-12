# About Ride

**Ride** is a straightforward, developer-friendly functional programming language for smart contracts and decentralized applications (dApps) on the Waves blockchain.

## Script Types

Waves smart contracts are scripts written in Ride. Scripts can be assigned to accounts or tokens (assets). An account with a script assigned to it becomes a [dApp](/en/building-apps/smart-contracts/what-is-a-dapp) or [smart account](/en/building-apps/smart-contracts/what-is-smart-account). An asset with a script assigned to it becomes a [smart asset](/en/building-apps/smart-contracts/smart-assets).

Script functionality depends on its [type](/en/ride/script):

* [dApp script](/en/ride/script/script-types/dapp-script) enables you to define сallable functions that can perform various actions on the blockchain and a verifier function that allows or denies transactions and orders that are sent on behalf of the dApp account.
* [Account script](/en/ride/script/script-types/account-script) allows or denies transactions and orders that are sent on behalf of the account.
* [Asset script](/en/ride/script/script-types/asset-script) allows or denies transactions involving the asset.

## Blockchain Operation

Ride is created specifically for execution within a blockchain environment and optimised for this purpose. Since the blockchain is a distributed ledger, located on many computers all around the world, there is no way to access the filesystem or display anything in the console. Instead, Ride functions can read data from the blockchain:

* Entries in account data storages (both dApp or smart account and any other account).
* Balances of accounts.
* Parameters of tokens.
* The current blockchain height.
* Headers of blocks.
* Transfer transactions (by transaction ID).

Appropriate functions are described in the [Account Data Storage Functions](/en/ride/functions/built-in-functions/account-data-storage-functions) and [Blockchain Functions](/en/ride/functions/built-in-functions/blockchain-functions) articles.

[Callable functions](/en/ride/functions/callable-function) of a dApp script can accept payments to the dApp and also perform [actions](/en/ride/structures/script-actions/) applied to the blockchain:

* Add, modify or delete entries of the dApp account data storage.
* Transfer token from the dApp balance.
* Issue, reissue, burn token on behalf of the dApp, sponsorship setup.

Available script actions depend on [Standard library](/en/ride/script/standard-library) version used.

## Predictable Computational Cost

The [complexity](/en/ride/base-concepts/complexity) is defined for each Ride function and operator. The complexities of the used functions and operators make up the script complexity. There are no loops or recursions in Ride, so the script complexity can be calculated in advance. The maximum script complexity is limited. Due to these limitations, Waves has low and predictable [fees](/en/blockchain/transaction/transaction-fee) for script execution.

Because of the lack of loops, the Ride language is not Turing complete. That's why it is not always possible to implement the necessary logic within a single script call. However, it is still possible to perform Turing-complete computations if the algorithm is split into several functions (or even several smart contracts) and invoked sequentially using several transactions.

## Getting Started

Learn the language syntax with the [Introduction to Ride](/en/ride/getting-started).

## Useful Links

* [Ride White Paper](https://s3.eu-central-1.amazonaws.com/waves.tech/White_paper_waves_smart_contracts_7a48be1231.pdf) (2018)
* [Developer Tools](/en/building-apps/smart-contracts/tools/)
* [How to Create and Launch dApp: Complete Tutorial](/en/building-apps/smart-contracts/writing-dapps)
* [Mastering Web3 with Waves](https://www.coursera.org/learn/mastering-web3-waves): the practical course on Coursera.
