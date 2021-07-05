# Waves Smart Contracts Overview

Welcome! We are excited that you want to learn Waves smart contracts.

A smart contract is a protocol of interaction between participants under certain terms without third parties. From a technical point of view, a smart contract is a script executed in a decentralized environment like a blockchain: not on a single server but multiple nodes of a network. The script contains various checks, data reading and writing, operations with digital assets.

Smart contracts have a variety of applications, including financial (DeFi), gaming/gambling, and many others. Because of running on the blockchain, smart contracts are transparent: anyone can read the code and understand how it works.

## Waves Smart Contracts

Smart contracts on the Waves blockchain are [accounts](/en/blockchain/account/) and [assets](/en/blockchain/token/) with assigned scripts written in [Ride](/en/ride/). Ride is a domain-specific programming language for developing decentralized applications focusing on security and ease of development.

There are three types of smart contracts on the Waves blockchain:

* **dApps** can perform almost all operations possible on the Waves blockchain. dApp callable functions can transfer, issue and burn [tokens](/en/blockchain/token/), change data in dApp’s [data storage](/en/blockchain/account/account-data-storage), and much more. A dApp script can be invoked by sending an [Invoke Script transaction](/en/blockchain/transaction-type/invoke-script-transaction), and dApps can also invoke each other. An invocation can contain payments in favor of the dApp. A dApp also provides functionality similar to a smart account. [More about dApp](/en/building-apps/smart-contracts/what-is-a-dapp)
* **Smart accounts** check transactions and orders sent on behalf of the account whether they meet certain conditions specified in the script. If the conditions are not met, the transaction is discarded. An example of a smart account is a multi-signature account by which several users jointly manage assets: a transaction from such an account is allowed if it contains valid signatures of co-owners. [More about smart accounts](/en/building-apps/smart-contracts/what-is-smart-account)
* **Smart assets** apply constraints on transactions involving the asset. For example, a script can allow only exchanges at a specific price, or transfers only to recipients on a trusted list, or lock operations outside a given blockchain height interval. [More about smart assets](/en/building-apps/smart-contracts/what-is-smart-asset)

Smart contracts can use blockchain data: the current height, account balances, asset parameters, and entries in data storage of any account. Since the blockchain is a distributed ledger stored on many computers worldwide, smart contracts cannot access the filesystem. Data from the outside world can be delivered to the blockchain by [oracles](/en/blockchain/oracle).

## Waves Smart Contracts Features

* No “gas”

   Running scripts on the Waves blockchain does not require “gas” fees depending on computational effort, which greatly improves the reliability of applications. The Ride smart contract language is non-Turing Complete: there are no loops in it. That’s why the computational costs are known in advance: before starting the calculations and even before installing the script. The complexity of the scripts involved in a single transaction is limited. Due to these limitations, Waves has low and predictable fees for script execution while maintaining high blockchain throughput.

   For example, the [minimum fee](/en/blockchain/transaction/transaction-fee) for a dApp invocation transaction is 0.005 WAVES (just a few cents). An additional fee is required only in case the callable function issues a new asset (which is not NFT): 1 WAVES per asset; extra 0.004 WAVES are required if the transaction is sent on behalf of a smart account or dApp with complexity higher than a certain threshold.

* Working with state

   Waves smart contracts do not have an internal state. Instead, a key-value data storage is used. Each Waves account can add, modify and delete entries in its storage using [data transactions](/en/blockchain/transaction-type/data-transaction). In addition, callable functions of a dApp can modify the data in its storage. All Waves smart contracts can read data from the data storage of an arbitrary account.

## Examples of Apps Based on Waves Smart Contracts

* [Neutrino](http://neutrino.at/) is an algorithmic price-stable assetization protocol acting as an accessible DeFi toolkit. It enables the creation of stablecoins pegged to specific real-world assets, such as national currencies or commodities. The Neutrino protocol is represented by a set of interacting smart contracts deployed to the Waves blockchain. Neutrino TVL (Total Value Locked) surpassed $1 billion.
* [Swop.fi](https://swop/fi) is an instant crypto exchange based on AMM (Automated Market Maker) model. Swop.fi also generates passive income from cryptocurrency investments. TVL exceeds $100 million.
* [Waves Ducks](https://wavesducks.com/) is a game focused on collectible digital duck images of celebrities and memes in the NFT format. The game motivates the community to promote the Waves ecosystem.
* [SIGN Art](https://sign-art.app/) is a web gallery of Blockchain-Certified Digital Art and a marketplace for NFTs. Artists can create a portfolio of digital creations, tokenize and sell NFTs. Collectors can buy NFTs and display NFT-collection.
* [Waves DAO](https://dao.wavesassociation.org/) (decentralized autonomous organization) is the Waves Association’s decision-making framework for supporting initiatives and projects based on the Waves protocol.

For more examples of Waves-based apps, visit [dAppOcean](https://www.dappocean.io/).
