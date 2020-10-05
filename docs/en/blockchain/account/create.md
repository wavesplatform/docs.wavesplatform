# How to Create Account / Waves Wallet

You don't need to register anywhere to create a Waves account. To create Waves account means to generate [account key pair](/en/blockchain/account/#key-pair) and [address](/en/blockchain/account/address) based on a secret (seed) phrase.

:warning: **Security Information**
* The secret phrase or the private key derived from it provides complete control over the account, including the ability to dispose of funds. Do not give your secret phrase and private key to anyone, and do not publish or send them.
* The secret phrase cannot be changed: another secret phrase (even one that differs by single character) will generate a different key pair, and therefore a different account.
* If you lose your secret phrase and private key, you will no longer be able to access your account permanently. We strongly encourage that you write down the secret phrase on a piece of paper and store it in a safe place.
* If the secret phrase is compromised (you have accidentally sent it to someone or suspect that it was taken by fraudsters), immediately create a new account and transfer all assets to it.

You can use one of the recommended apps to create an account:

* [Waves Keeper](/en/ecosystem/waves-keeper/) browser extension

   See instructions in the [Getting Started with Waves Keeper](/en/ecosystem/waves-keeper/getting-started-with-keeper) article.

* [Waves.Exchange](https://waves.exchange/) online/desktop/mobile app developed by the third party team from the community.

   See instructions in the [Create Account](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-account/online-desktop-creation) or [Create Account (mobile)](https://docs.waves.exchange/en/waves-exchange/waves-exchange-mobile/mobile-account/mobile-creation) articles of Waves.Exchange documentation.

* [WavesFX](https://wavesfx.github.io/) app developed by the third party team from the community.

Alternatively, you can use one of the [client libraries](/en/building-apps/waves-api-and-sdk/client-libraries/), such as:

* TypeScript/JavaScript library [ts-lib-crypto](https://github.com/wavesplatform/ts-lib-crypto) (it is also included in [waves-transactions](https://wavesplatform.github.io/waves-transactions/index.html)):

   ```javascript
   const libCrypto = require('@waves/ts-lib-crypto')

   const seed = libCrypto.randomSeed() // or input your existing seed
   const sk = libCrypto.privateKey(seed)
   const pk = libCrypto.publicKey(seed)
   const addressBase58 = libCrypto.address(seed) // address for Mainnet
   const addressTestnetBase58 = libCrypto.address(seed, 'T') // address for Testnet
   ```

* Python module [Pywaves](https://github.com/PyWaves/PyWaves)

   ```python
   import pywaves as pw

   # pw.setChain('testnet') # Mainnet by default

   # generate a new address
   myAddress = pw.Address(seed='<insert your seed here>')

   print(f'Your seed:   {myAddress.seed}')
   print(f'Private Key: {myAddress.privateKey}')
   print(f'Public Key:  {myAddress.publicKey}')
   print(f'Address:     {myAddress.address}')
   ```

* Java library [WavesJ](https://github.com/wavesplatform/WavesJ)

   ```java
   String seed = Crypto.getRandomSeedPhrase();
   PrivateKey privateKey = PrivateKey.fromSeed(seed);
   PublicKey publicKey = PublicKey.from(privateKey);
   Address address = Address.from(publicKey);
   ```

Please note:
* An account key pair and address are generated and stored locally. No data needs to be sent to the node or anywhere else.
* The address is immediately available for transferring tokens. In particular, it can be specified as the recipient in the [Transfer transaction](/en/blockchain/transaction-type/transfer-transaction).
* Address appears on the blockchain along with the first transaction in which the account participates.
* To use your account in another application or on another device, you need to enter a secret phrase on it and repeat the key pair generation.

## How to Create Wallets for Users in Bulk?

It is bad practice to generate accounts for users in a centralized. Knowing the secret phrase and private key allows you to do anything on behalf of the account. It is unsafe to store and transfer this data: in addition to the abuse of confidence, there is a risk of data theft or leakage.

Each user should create their own account, and the application should request a user signature separately for each transaction. To do this, you can use the [Signer](/en/building-apps/waves-api-and-sdk/client-libraries/signer) library on your site. Signer provides the user with the ability to log into his account or create it and then sign transactions without transferring their secret phrase or private key to your app.
