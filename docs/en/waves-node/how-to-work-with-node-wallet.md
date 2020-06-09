# Node Wallet

Every node has a connected wallet providing:

* ability to mine.
* ability to sign transactions.

A node can have a single wallet with a single seed, contained in the wallet.

In this article, the following use cases of wallet are reviewed:

* [creating a new wallet from scratch](#new).
* [creating wallet using existing seed](#existing-seed).
* [using existing wallet](#existing-wallet).
* [updating wallet's settings](#wallet-settings).
* [changing node's account](#re-create).

## Creating a New Wallet From Scratch <a id="new"></a>

On startup a node creates wallet if the directory listed in `wallet` section of [node's configuration file](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/application.conf) does not already contain `wallet.dat` file. In this case the node will also .

During the wallet creation the node will:

* generate random seed;
* write the generated seed to STDOUT;
* request in the console password to encrypt seed.

> The seed phrase written to STDOUT should be stored in a safe location. The seed phrase can not be restored. You can only restore the hash of the seed phrase: you can get it with `GET /addresses/seed/{address}` [Node REST API](/en/waves-node/node-api/) method. You can then use the hash to [get the accout private key](/en/blockchain/waves-protocol/cryptographic-practical-details).

Encripted seed phrase will be saved in `wallet.dat` file. To avoid entering password every time you run the node it is recommended to specify it in `wallet` section of the node configuration file.

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

## Updating Wallet's Settings <a id="wallet-settings"></a>

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
