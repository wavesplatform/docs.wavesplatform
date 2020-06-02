# Custom Blockchain

This article explains how to setup custom Waves blockchain to be used for experimental activities.

For most tasks such as getting familiar with blockchain, sending transactions and developing smart contracts its enough to [deploy one node with custom blockchain in Docker](#deploy-node-with-custom-blockchain-in-docker).

To setup private blockchain with multiple nodes proceed with [Setup Jar Node With Custom Blockchain](#setup-jar-node-with-custom-blockchain) section.

## Deploy Node With Custom Blockchain in Docker

The easiest way to setup custom Waves blockchain with one private node is to [install docker](https://docs.docker.com/engine/install/) and [run Docker container with Waves custom blockchain node](https://hub.docker.com/r/wavesplatform/waves-private-node).

## Setup Jar Node With Custom Blockchain

You can run one or multiple Jar-nodes to setup custom blockchain.
For that, create genesis block and specify blockchain parameters in node configuration file.

### Step 1

Install [Java 8 or 11](https://java.com/en/download/).

### Step 2

Download the latest version of [jar node](https://github.com/wavesplatform/Waves/releases) (`waves-all-{version}.jar` file).

### Step 3

Create `genesis.example.conf` file with genesis block parameters in the `.jar` file location folder.

**Example**:

```bash
genesis-generator
{
  network-type: "L"  #your custom network identifier byte
  initial-balance: 10000000000000000  #initial balance in wavelets
  base-target: 153722867  #the initial complexity parameter
  average-block-delay: 60s #average block delay
  timestamp: 1500635421931 #comment this to use the current time

  # the sum of shares should be = initial-balance
  distributions
  {
    foo0 { # name for this account. Will be printed in generator's output
      seed-text: "foo0"
      nonce: 0
      amount: 10000000000000000
    }
  }
}
```

### Step 4

Run the genesis block generator command:

```bash
java -cp waves-all-{version}.jar com.wavesplatform.GenesisBlockGenerator genesis.example.conf
```

The result will be written to the `genesis.conf` file (you can use arbitrary file name), and it will look as follows:

```bash
Addresses:
foo0:
 Seed text:           foo0
 Seed:                3csAfH
 Account seed:        58zgAnBg775J6NKd4qVtfeX3m5TBMeizHNY9STvm2N87
 Private account key: FYLXp1ecxQ6WCPD4axTotHU9RVfPCBLfSeKx1XSCyvdT
 Public account key:  GbGEY3XVc2ohdv6hQBukVKSTQyqP8rjQ8Kigkj6bL57S
 Account address:     3JfE6tjeT7PnpuDQKxiVNLn4TJUFhuMaaT5
Settings:
genesis {
  average-block-delay: 60000ms
  initial-base-target: 153722867
  timestamp: 1500635421931
  block-timestamp: 1500635421931
  signature: "3NELFXiQqQoYUfgLba5YAS1z8gJLc19zfzSvmYRX9eLso4zGByRGDpWdL4cooHTocyi5boFiu6H7hyW3ukVGtswP"
  initial-balance: 10000000000000000
  transactions = [
    {recipient: "3JfE6tjeT7PnpuDQKxiVNLn4TJUFhuMaaT5", amount: 10000000000000000}
  ]
}
```

The `Addresses` section lists the accounts to which the assets are distributed in the genesis block, the `genesis` section will be used later in [Step 5](#step-5).

### Step 5

In the `.jar` file location folder create `*.conf` file with any name (for example `waves-custom-network.conf`) and edit it with a text editor. Use [example configuration file](https://github.com/wavesplatform/private-node-docker-image/blob/stagenet/waves.custom.conf) for reference.

See [Node Configuration](/en/waves-node/node-configuration) article for more information about Waves configuration file.

If the `directory` parameter is not redefined, the default node folder is:

| *nix | macOS | Windows |
| :--- | :--- | :--- |
| `$XDG_DATA_HOME/waves-custom-<character>*` or `$HOME/.local/share/waves-custom-<character>*` | `$HOME/Library/Application Support/waves-custom-<character>*` | `%LOCALAPPDATA%/waves-custom-<character>*` |

The `waves.blockchain.custom.functionality` section allows to set the timestamps of activation of different blockchain validations. In this section developers can add new parameters, which are not present in the standard node configuration. You can enable/disable features on your node by modifying the `pre-activated-features` parameter. The supported features are listed in [Features](/en/waves-node/features/) article.

Paste the content generated in [Step 4](#step-4) in `waves.blockchain.custom.genesis` section of configuration file. Instead of pasting the section manually, you can write `include "genesis.conf"`, where the `genesis.conf` is a filename from the Step 4.

The `waves.blockchain.custom.address-scheme-character` parameter value must be the same as the `network-type` value in [Step 3](#step-3).

Set `waves.wallet` parameters. Use `Seed` (`Seed text` in base58) value generated with genesis generator tool in [Step 4](#step-4) as the value of `waves.wallet.seed` parameter.

In `waves.network` section set `port`, `known-peers` (list the [nodes of your custom network](#add-nodes-to-your-network)), `node-name` and `declared-address` parameters.

To enable REST API for your node set `enable`, `port` and `api-key-hash` (can be created [here](https://nodes.wavesnodes.com/api-docs/index.html#/utils/hashSecure_1)) parameters in `waves.rest-api` section.

### Step 6

Start your custom node with the following command:

```
java -jar waves-all-{version}.jar waves-custom-network.conf
```

**Note**: You can run an existing node (deb or jar) with your custom configuration file manually.

### Add Nodes to Your Network

You can add more nodes to your network using `waves.network.known-peers` parameter. Specify the address and port of the existing node with the same network parameters like "127.0.0.1:6860". If you are making several nodes locally, then do not forget to change for the new nodes the network port `waves.network.port`, the API port `waves.rest-api.port`, folder for the data `waves.directory` and wallet seed `waves.wallet.seed`.

## Setup Other Services

You can setup your custom blockchain with other services such as:

* [Data services](/en/building-apps/waves-api-and-sdk/waves-data-service-api) to retrieve data from the blockchain quickly and conveniently via REST API similar to Mainnet and Testnet as described in [Waves Data Service API](/en/building-apps/waves-api-and-sdk/waves-data-service-api) article. For details, see [deploy examples](https://github.com/wavesplatform/deploy-examples) and [How to Run Data Services](https://wavestalk.ru/t/kak-zapustit-data-services-za-30-minut-iz-korobki/272) article (in Russian language).

* [dApps](/en/blockchain/account/dapp). For details, see [How to Build, Deploy and Test a Waves RIDE dApp](https://medium.com/wavesprotocol/how-to-build-deploy-and-test-a-waves-ride-dapp-785311f58c2) article.

* [Waves Explorer](/en/ecosystem/waves-explorer/about-waves-explorer) to view blockchain data in human-readable format.

   You can deploy Waves explorer [docker container](https://hub.docker.com/r/wavesplatform/explorer) on localhost. Use the following comand:

   ```bash
   docker run -d -e API_NODE_URL=http://localhost:6869 -e NODE_LIST=http://localhost:6869 -p 3000:8080 wavesplatform/explorer
   ```

* [Matcher](https://github.com/wavesplatform/matcher) that executes buy and sell orders.

<!--* [Matcher](https://docs.waves.exchange/en/waves-matcher/) -->
