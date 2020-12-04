# dApp Developer Guide

The Waves ecosystem offers a diverse range of tools, products, and components to streamline the process of building and running  blockchain-empowered applications and smart contracts. This overview will put you in the picture.

Before you start, we recommend that you learn the basic concepts:

* [Account](/en/blockchain/account/)
* [Token (Asset)](/en/blockchain/token/)
* [Transaction](/en/blockchain/transaction/)

## Node API

The Waves node REST API is the main interface for interacting with the blockchain. Node REST API provides the following features:

* broadcast a signed transaction to the blockchain
* obtain account data, token info, transactions, blocks, etc.
* validate transactions, use various utilities, and much more.

You can use the node pools with the public API supported by the Waves team, or [launch your own node](/en/waves-node/how-to-install-a-node/how-to-install-a-node) and enable its REST API. On your node, you additionally have access to private API methods including signing a transaction on behalf of accounts stored in the node's wallet and debugging tools.

Please note: the Node API is not able to sign transactions on behalf of an arbitrary accounts. To do this, use the client libraries.

> [Node REST API Documentation](/en/waves-node/node-api/) in the “Node” chapter

> [All Waves APIs](/en/building-apps/waves-api-and-sdk/)

## Client Libraries

Libraries for various programming languages provide functions for operating with the Waves blockchain: signing transactions and exchange orders, interacting with the Node REST API, and generating account keys. Libraries differ in their features.

> [All libraries](/en/building-apps/waves-api-and-sdk/client-libraries/)

## Secure Transactions Signing

To sign a transaction, for example, a dApp script invocation or a token transfer, the [private key](/en/blockchain/account/#keys) of the sender account is needed. However, if your application serves multiple users, you do not have access to their private keys. Knowing the secret phrase (seed) or private key, you can do anything on behalf of the account, that's why you **should not ask** users for their secret phrase or private key. Users are strongly advised not to share the secret phrase and private key with anyone, and users do not trust sites and applications that require this data.

The solution is to obtain a user signature for each transaction. To do this, you need an interface with a wallet application that stores the user's account keys securely and signs transactions itself. Before signing, the user can view the details of the transaction, confirm or reject it.

The following tools provide such interfaces:

* [Waves Keeper API](/en/ecosystem/waves-keeper/waves-keeper-api) uses the Waves Keeper extension installed in the user's browser. Waves Keeper is one of the most secure ways to manage keys, however its installation can be a threshold for new users. In addition, Waves Keeper is not available in mobile browsers.
* [Waves Signer](/en/building-apps/waves-api-and-sdk/client-libraries/signer) is a TypeScript/JavaScript library that works in any browser. Signer is a unified interface for interacting with third-party signature provider libraries. The only provider currently available is ProviderWeb developed by the Waves.Exchange team. In prospect, when other signature providers appear, it will suffice to initialize the new libraries in your application and use the same functions for obtaining the signature. Furthermore, Signer delivers a smooth user experience based on the iframe.
* [Waves SDK for Android](https://github.com/wavesplatform/WavesSDK-android) and [Waves SDK for iOS](https://github.com/wavesplatform/WavesSDK-iOS) use the Waves.Exchange mobile app installed on the user's device.

## Smart Contract

The Waves protocol maintains three types of smart contracts:

* [dApp](/en/building-apps/smart-contracts/what-is-a-dapp) comprises functions that can be called using an Invoke Script transaction. The called functions can accept payments to the dApp and perform various actions on the blockchain. In addition, the dApp can comprise a verifier function that allows or denies transactions and orders sent on behalf of the account depending on whether they meet the specified conditions.
* [Smart account](/en/building-apps/smart-contracts/what-is-smart-account) allows or rejects transactions or orders sent on behalf of the account.
* [Smart asset](/en/building-apps/smart-contracts/smart-assets) allows or rejects transactions involving the asset.

For smart development creation, Waves provides its native language called Ride. Ride is a functional, expression-based programming language specifically designed for execution within a blockchain environment, straightforward and concise. [More about Ride](/en/ride/) in the “Ride” chapter.

## Developer Tools

The [Waves IDE](/en/building-apps/smart-contracts/tools/waves-ide) online environment is the best suited for starting development on the Waves blockchain. Beyond the Ride support, Waves IDE enables creating accounts, signing and sending transactions. It contains a library of code samples.

> [All tools](/en/building-apps/smart-contracts/tools/)

## Exchange & Trading

You can buy or sell tokens (assets) issued on the Waves blockchain (except for [NFT](/en/blockchain/token/non-fungible-token); smart assets trading is temporarily unavailable) on the [Waves.Exchange](https://waves.exchange/) developed by the third-party team from the community. Waves.Exchange's [Matcher API](https://docs.waves.exchange/en/waves-matcher/matcher-api) is aimed at creating and controlling exchange orders.

[CCXT](https://docs.waves.exchange/en/ccxt/), the popular JavaScript/Python/PHP library for trading cryptocurrencies and obtaining market data, supports for Waves.Exchange, but only trading pairs from the [white list](https://marketdata.wavesplatform.com/api/v1/tickers) are available.

To trade custom assets, use the client libraries, see examples in the [How to Buy and Sell Tokens](/en/building-apps/how-to/basic/trading) article.

## Developer Chat

Feel free to join the [Waves developers group](https://t.me/waves_ride_dapps_dev) in Telegram.

## Resources

* [Mastering Web3 with Waves](https://www.coursera.org/learn/mastering-web3-waves): a Coursera hands-on course
* [Awesome Waves](https://github.com/msmolyakov/awesome-waves): a curated list of useful things for developing on the Waves blockchain
