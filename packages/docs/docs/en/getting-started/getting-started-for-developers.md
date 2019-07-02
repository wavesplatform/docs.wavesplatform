# Getting started for developers

This page introduces you to the things you'll need to get started on your journey.

This will give you all the information you need as a developer to get started in an easy to read and concise format.

## Client Libraries

Waves Client is supported by many libraries, please Get to know our client libraries\_** **\_and use them depending on which language you're familiar with:

* [_**Python: PyWaves**_](/waves-api-and-sdk/client-libraries/pywaves.md)
* [_**Java: WavesJ**_](/waves-api-and-sdk/client-libraries/wavesj.md)
* [_**C\#: WavesCS**_](/waves-api-and-sdk/client-libraries/wavescs.md)
* [_**TypeScript/JavaScript, Waves Signature Adapter**_](/waves-api-and-sdk/client-libraries/waves-signature-adapter.md) and [_**Waves Transactions**_](#)
* [_**C: WavesC**_](/waves-api-and-sdk/client-libraries/waves-c.md)
* [_**Community Libraries**_](/waves-api-and-sdk/client-libraries/unofficial-libraries.md)

## Node REST API

[_**The Waves Node API**_](/waves-api-and-sdk/waves-node-rest-api.md) provides RESTful platform for implementing blockchain functionality in apps using Waves blockchain.

Use the API to integrate a variety of functionalities including orders, transaction history, and balances.

## Smart Contracts

Usually as a developer, you will need two things: **theoretical understanding** and **tools** to make your coding life easier, in our guide we will provide you with both:

### _**Theoretical Understanding **_

You will need to know:

* How Waves smart contract works \(You can go through our [_**smart contract guide**_ ](/smart-contracts/waves-smart-contracts-overview.md)to get more information about it\) and you can read about our [_**smart accounts**_](/smart-contracts/smart-accounts.md) and [_**smart assets.**_](/smart-contracts/smart-assets.md)

* Which programming language to use \(we're using our own language which called RIDE, [_**Get to know RIDE**_](/ride/about-ride.md)_**\)**_.

* How to write a dApp \([_**Go ahead and write your first dApp**_](/smart-contracts/writing-dapps.md)\)

let's suppose now that you understand the main idea of our smart contracts and you want to go through all functions and to understand how they work, please find here our_** **_[_**built-in functions**_](/ride/built-in-functions.md)_**, **_[_**operators**_](/ride/operators.md)_** **\_and_** **_\[_**structures**_\]\(/ride/structures.md\)_**.**\_

### _**Tools to help you with RIDE**_

In Waves, we always think about the best way to help external developers and because of that we will provide you with some useful tools:

* [_**Waves IDE **_](https://ide.wavesplatform.com), Try out the new non-turing complete Waves smart contract language Ride by using our IDE.
* [_**Waves console and its commands**_](/developer-tools/waves-console.md), Waves IDE has a Waves console feature which supports different commands.
* Get to our [_**videos**_](/smart-contracts/video-tutorials.md) and [_**articles**_](/smart-contracts/articles-on-dapps.md), We believe that the best way to learn is by practical examples.

## DEX API

The reason behind decentralized exchange is to perform secure exchange of assets issued on Waves platform.

The real-time trading is achieved thanks to the only centralized design element of our DEX - the order book Matcher, which matches incoming orders and execute trades at high speed, typically within milliseconds. There is no need to wait for the next block to know whether a trade has been executed successfully, this provides speed at the level of centralized exchange and the security of the decentralized protocol.

Please take a look to [_**Waves DEX API **_](/waves-api-and-sdk/dex-api/matcher.md)for more details and get the theoretical details by reading our [_**DEX article**_](/waves-environment/decentralized-cryptocurrency-exchange-dex.md)_**.**_

## Keeper API

Check the new [_**Waves Keeper**_](/waves-api-and-sdk/waves-keeper-api.md)\_** **\_browser extension which turns your browser into a keychain that enables you to sign transactions securely on third-party web resources without entering your seed or password. So now, if a Waves-integrated website or Dapp requires you to sign a transaction, you can do it with just a couple of clicks, right in your browser.

The extension will be particularly _**useful to developers**_ who want to embed Waves functionality in their projects, because it supports the Auth and Payment APIs. For testing purposes you can switch between using it on MainNet and TestNet.

