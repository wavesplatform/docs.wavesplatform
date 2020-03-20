# Node Wallet

Every node has a connected wallet providing:

* ability to mine.
* ability to sign transactions.

A node can have a single wallet with a single seed, contained in the wallet.

In this article, the following use cases of wallet are reviewed:

* [creating a new wallet from scratch](#new).
* [creating wallet using existing seed](#existing-seed).
* [using existing wallet](#existing-wallet).
* [changing node's account](#re-create).

## Creating a New Wallet From Scratch <a id="new"></a>

On startup a node creates wallet if the directory listed in `wallet` section of [node's configuration file](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/application.conf) does not already contain wallet.dat file. In this case the node will also generate random seed.

When wallet.dat is created, the node will request in the console a password which must be set for newly created wallet.dat. This password will be used to encrypt file contents to prevent stealing seed.

As a result, the full-featured account capable of signing transactions will be created.

**Warning:** Wallet is a critical part of your node. It is better to create its file in a safe and protected location. Don’t forget to backup your wallet’s file. It’s recommended to remove the seed from the configuration file immediately after the start of the node. If an attacker gains access to the seed string, he will have access to your funds on all your addresses!

## Creating Wallet Using Existing Seed <a id="existing-seed"></a>

If you already have a seed, then input the following parameters in the `wallet` section of [node's configuration file](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/application.conf):

* base58-encoded seed.
* password.

If necessary, change the path to directory where the generated wallet.dat must be placed. `wallet` section example with described settings is provided below:

```bash
wallet {
    file = ${waves.directory}"/wallet/wallet.dat"
    password = "some-string-as-password"
    seed = "base58-encoded-seed"
}
```

As a result, the wallet.dat will be generated in the selected directory based on the existing seed.

## Using Existing Wallet <a id="existing-wallet"></a>

If you already have the wallet.dat created before, then just put it in the directory listed in the `wallet` section, and specify a password for it with the `password` parameter. Additional actions are not required.

## Updating Wallet's Settings

If you want to run the node with another wallet, use one of the following instuctions:

* Replace `wallet.dat` file with the file which contains SEED phrase of another wallet.

OR

* Delete/move to another location your `wallet.dat` file to empty `/wallet` directory. Then update SEED in config file.

After restarting the node will use another wallet settings.

## Changing node's account <a id="re-create"></a>

If you need to change node's account, first of all, delete the existing wallet.dat. After that, you can:

* [create a new wallet from scratch](#new).
* [create a wallet using existing seed](#existing-seed).
* [use other wallet](#existing-wallet).
