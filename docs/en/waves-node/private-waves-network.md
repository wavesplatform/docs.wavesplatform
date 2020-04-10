# Custom Blockchain

This article explains how to setup custom Waves blockchain network that can be used for experimental activities.

## Setup Custom Blockchain Network

Follow the steps below to setup custom blockchain network.

### Step 1

Install Git, [Java 8](https://java.com/en/download/) and [sbt](http://www.scala-sbt.org/).

### Step 2

Clone [Waves repository](https://github.com/wavesplatform/Waves/).

### Step 3

Edit the `node/src/test/resources/genesis.example.conf` file with genesis block parameters.

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

```sbt "node/runMain com.wavesplatform.GenesisBlockGenerator node/src/test/resources/genesis.example.conf genesis.conf"```

The result will be written to the `genesis.conf` file (instead of `genesis.conf`, you can use arbitrary name), and it will look like this:

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

If you built a fat JAR, you can generate a genesis block.

**Example**:

```bash
java -cp ./node/target/waves-all-0.17.2-grpc-27-g0fab715-DIRTY.jar com.wavesplatform.GenesisBlockGenerator node/src/test/resources/genesis.example.conf
```

The output will be the same.

### Step 5

Create `*.conf` file with any name (for example `waves-custom-network.conf`) and open it in a text editor.

See [Node Configuration](/en/waves-node/node-configuration) article for more information about Waves configuration file.

You can enable features on your node by modifying the `pre-activated-features` parameter in the file. The supported features are listed in [Features](/en/waves-node/features) article.

If the directory parameter was not redefined, the waves folder will be created in:
| *nix | macOS | Windows |
| :--- | :--- | :--- |
| `$XDG_DATA_HOME/waves-custom-<character>*` or `$HOME/.local/share/waves-custom-<character>*` | `$HOME/Library/Application Support/waves-custom-<character>*` | `%LOCALAPPDATA%/waves-custom-<character>*` |

> The `address-scheme-character` parameter value from below must be the same as the `network-type` value from the step 3.

> The contents of the `genesis` section below is what was generated on the step 4. Instead of pasting this section, you can just write `include "genesis.conf"`, where the `genesis.conf` is a filename from the step 4.

Example:

```bash
# Waves node settings
waves
{
  # data storage folder
  directory=/tmp/custom

  logging-level = DEBUG

  blockchain
  {
    type: CUSTOM
    custom
    {
      address-scheme-character = "L" # this value must be the same as the `network-type` value from the step 3
      # various parameters of network consensus
      functionality {
        feature-check-blocks-period = 30
        blocks-for-feature-activation = 25
        pre-activated-features = {
        2 = 0
        }
      }
      genesis {
        average-block-delay = 60000ms
        initial-base-target = 153722867
        timestamp = 1500635421931
        block-timestamp = 1500635421931
        signature = "3NELFXiQqQoYUfgLba5YAS1z8gJLc19zfzSvmYRX9eLso4zGByRGDpWdL4cooHTocyi5boFiu6H7hyW3ukVGtswP"
        initial-balance = 10000000000000000
        transactions = [
          {recipient = "3JfE6tjeT7PnpuDQKxiVNLn4TJUFhuMaaT5", amount = 10000000000000000}
        ]
      }
      # the contents of the above `genesis` section is what was generated on the step 4
      # please note that instead of pasting this section, you can just write
      # `include "genesis.conf"`, where the `genesis.conf` is a filename from # the step 4
    }
  }

  network
  {
    bind-address = "0.0.0.0"
    port = 6860
    known-peers = []
    node-name = "L custom node 1"
    declared-address = "127.0.0.1:6860"
  }

  wallet
  {
    password = "password"
    seed = "3csAfH"
  }

  rest-api
  {
    # Enable/disable REST API
    enable = yes
    # Network address to bind to
    bind-address = "0.0.0.0"
    # Port to listen to REST API requests
    port = 6861
    # Hash of API key string
    api-key-hash = "H6nsiifwYKYEx6YzYD7woP1XCn72RVvx6tC1zjjLXqsu"
  }

  miner
  {
    # Enable block generation only in the last block is not older the given period of time
    interval-after-last-block-then-generation-is-allowed = 999d
    # Required number of connections (both incoming and outgoing) to attempt block generation. Setting this value to 0
    # enables "off-line generation".
    quorum = 0
  }
}
```

**Note**: In this example the feature activation period will not be `30`, but `60`, however the `feature-check-blocks-period` is set to `30`. This is because the `double-features-periods-after-height` is by deafult set to `0`

Pay attention to the parameters `waves.blockchain.custom.address-scheme-character` and `waves.blockchain.custom.genesis`. They were copied from the result and settings of genesis generator tool. Also, look at `waves.wallet.seed` value. This value can be copied from "Seed" value for one of the genesis addresses from the result of genesis generator tool.

`waves.blockchain.custom.functionality` section contains parameters allowing to enable/disable some features in your blockchain system.

**Note**: The developers can add new parameters in `waves.blockchain.custom.functionality` section, which are not present in this example; as an example of a working configuration, see the [waves-devnet.conf file in root folder of repository](https://github.com/wavesplatform/Waves/blob/master/node/waves-devnet.conf).

### Step 6

Start your custom network node by running:

```sbt "node/run waves-custom-network.conf"```

Also, you can run already built release package (deb or jar) with this configuration file manually.

## Add Nodes to Your Network

You can add more nodes to your network using `waves.network.known-peers` parameter, specify the address and port of the existing node with the same network parameters like "127.0.0.1:6860". If you are making several nodes locally, then do not forget to change for the new nodes the network port `waves.network.port`, the API port `waves.rest-api.port`, folder for the data `waves.directory` and wallet seed `waves.wallet.seed`.

## Setup Other Services

You can setup your custom blockchain with other services such as:

* [Data services](/en/building-apps/waves-api-and-sdk/waves-data-service-api) to retrieve data from the blockchain quickly and conveniently via REST API similar to Mainnet and Testnet described in [Waves Data Service API](/en/building-apps/waves-api-and-sdk/waves-data-service-api) article. For details, see [deploy examples](https://github.com/wavesplatform/deploy-examples) and [How to Run Data Services](https://wavestalk.ru/t/kak-zapustit-data-services-za-30-minut-iz-korobki/272) article (in Russian language).

* [dApps](https://docs.wavesplatform.com/en/blockchain/account/dapp). For details, see [How to Build, Deploy and Test a Waves RIDE dApp](https://blog.wavesplatform.com/how-to-build-deploy-and-test-a-waves-ride-dapp-785311f58c2) article.

* [Waves explorer](/en/ecosystem/waves-explorer/about-waves-explorer) to view blockchain data in human-readable format.

   You can deploy Waves explorer [docker container](https://hub.docker.com/r/wavesplatform/explorer) on localhost. Use the following comand:

   ```bash
   docker run -d -e API_NODE_URL=http://localhost:6869 -e NODE_LIST=http://localhost:6869 -p 3000:8080 wavesplatform/explorer
   ```

* [DEX Extension](https://github.com/wavesplatform/dex): Interface for DEX Server to comunicate with the Node code.

<!--* [Matcher](https://docs.waves.exchange/en/waves-matcher/) -->
