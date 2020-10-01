# Blockchain Updates Extension

**Blockchain Updates** is a [node extensions](/en/waves-node/extensions/) that sends blockchain updates via [gRPC](https://en.wikipedia.org/wiki/GRPC).

Blockchain Updates enables tracking changes made by each transaction and block:

* balance updates,
* leased or unleased WAVES,
* account data storage updates,
* token issues and token parameter updates (including reissue/burning, sponsorship setup, replacing script).

You can obtain updates over a specified range of height or in real time.

Examples of usage:
* Integration with the messenger to send notifications about events on your account.
* Tracking payments to [dApp](/en/building-apps/smart-contracts/what-is-a-dapp) in Invoke Script transactions.
* Calculation of the average account balance for a week (used in the [market maker program](https://medium.com/wavesexchange/waves-exchange-launches-a-market-maker-program-enabling-users-to-mine-with-their-liquidity-3d229c856f67)).
* Services for searching tokens by parameters, searching through account data storages, etc.

## Launch Node with Extension

:warning: **Important:** Blockchain Updates requires the history of changes since the blockchain creation. Therefore, you should start the node with the extension from scratch and synchronize the blockchain during regular node operation, this can take 1–3 days (see the [Synchronize Waves Blockchain](/en/waves-node/options-for-getting-actual-blockchain/) article). Importing blockchain from a binary file or downloading the latest blockchain database are not applicable.

The node with Blockchain Updates extension can be installed by two methods: using DEB package or JAR file.

### Installation via DEB Package

1. Download the latest versions of DEB packages of node and extension from the [Releases](https://github.com/wavesplatform/Waves/releases) page (Assets section) on Github.

2. Install the packages:

   Mainnet:

   ```bash
   sudo dpkg -i waves_{version number}_all.deb
   sudo dpkg -i blockchain-updates_{version number}_all.deb
   ```

   Testnet:

   ```bash
   sudo dpkg -i waves-testnet_{version number}_all.deb
   sudo dpkg -i blockchain-updates-testnet_{version number}_all.deb
   ```

   Stagenet:

   ```bash
   sudo dpkg -i waves-stagenet_{номер версии}_all.deb
   sudo dpkg -i blockchain-updates-stagenet_{номер версии}_all.deb
   ```

3. Edit the node configuration file as described in the [Node Configuration](/en/waves-node/node-configuration) article. For Mainnet, the configuration file is located at `/etc/waves/waves.conf`, for Testnet at `/etc/waves-testnet/waves.conf`, for Testnet at `/etc/waves-stagenet/waves.conf`.

   3.1. Add Blockchain Updates to the `waves.extensions` section:
   
   ```
   waves {
      ...
      extensions = [
         com.wavesplatform.events.BlockchainUpdates
      ]
   }
   ```

   3.2. Below the `waves` section, at the same level, add the following section:

   ```
   blockchain-updates {
      grpc-port = 6881 # Specify the port for client connection
   }
   ```

4. Start the node.

   Mainnet:

   ```bash
   sudo systemctl start waves
   ```

   Testnet:

   ```bash
   sudo systemctl start waves-testnet
   ```

   Stagenet:

   ```bash
   sudo systemctl start waves-stagenet
   ```

If the extension runs, it writes messages to the [node log](/ren/waves-node/logging-configuration):

```
BlockchainUpdates extension starting with settings <...>
BlockchainUpdates startup check successful at height <...>
BlockchainUpdates extension started gRPC API on port <...>
```

### Installation via JAR File

1. Download the latest versions of node JAR file and Blockchain Updates extension ZIP archive from the [Releases](https://github.com/wavesplatform/Waves/releases) page (Assets section) on Github.

2. Unpack the TGZ archive to the directory containing node's JAR file.

3. Create a new configuration file or open the existing one, see the [Node Configuration](/en/waves-node/node-configuration) article. 

   3.1. Add Blockchain Updates to the `waves.extensions` section:
   
   ```
   waves {
      ...
      extensions = [
         com.wavesplatform.events.BlockchainUpdates
      ]
   }
   ```

   3.2. Below the `waves` section, at the same level, add the following section:

   ```
   blockchain-updates {
      grpc-port = 6881 # Specify the port for client connection
   }
   ```

4. Run the command:

   ```bash
   java -cp 'waves-all-{version number}.jar:blockchain-updates-{номер версии}/lib/*' com.wavesplatform.Application {configuration file name}.conf
   ```

5. Start the node:

   ```bash
   java -jar waves-all-{номер версии}.jar {имя файла конфигурации}.conf.
   ```

If the extension runs, it writes messages to the [node log](/ren/waves-node/logging-configuration):

```
BlockchainUpdates extension starting with settings <...>
BlockchainUpdates startup check successful at height <...>
BlockchainUpdates extension started gRPC API on port <...>
```

## Client Generation

Clone the repository containing protobuf schemes:

```
git clone https://github.com/wavesplatform/protobuf-schemas/
```

Generate your client code from the [blockchain_updates.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/grpc/blockchain_updates.proto) scheme. Use the gRPC tools for your programming language, find the instructions on the [Supported languages and platforms](https://www.grpc.io/docs/languages/) page of gRPC documentation.

## Best Practices

API Blockchain Updates provides the following functions:
* `GetBlockUpdate` returns updates performed by the block at the given height.
* `GetBlockUpdatesRange` returns updates performed by the blocks at the given range of height.
* `Subscribe` returns stream of messages, first historical data (i.e. updates up to the current blockchain height), then current events in real time. Optionally, you can specify the start and/or end height.

The `Subscribe` function returns all the events in real time: block append, microblock append, block rollback, microblock rollback (see the [Waves-NG](/en/blockchain/waves-protocol/waves-ng-protocol) protocol description). To handle rollbacks, we recommend that your client stores the previous states of the blockchain 10–100 blocks back from the current one, this is sufficient in the vast majority of cases (the maximum possible rollback height is 2000 blocks, but the probability of such a rollback is negligible). If the connection was interrupted, roll back the last block on the client and restart receiving events from the previous block.

For some analytical tasks, real-time events are not needed, for example, it is enough to update the data once an hour or once a day. In such cases, we recommend to use the `GetBlockUpdatesRange` function. It only returns historical data of blocks that are already applied, which is much easier to process. It is better to indicate the end height of the range a few blocks less than the current blockchain height to avoid issues with rollbacks.

See the format of requests and responses in the [blockchain_updates.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/grpc/blockchain_updates.proto) and [events.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/events.proto) files.

Events examples:
<details><summary>BlockAppend</summary>
<code>
update {<br>
&nbsp;&nbsp;id: 6AmsQJEEmxu3wtTRFVzEWgVHf1WBh8nwTNJhDxRKts7U<br>
&nbsp;&nbsp;height: 1199932<br>
&nbsp;&nbsp;append {<br>
&nbsp;&nbsp;&nbsp;&nbsp;block {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;block {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;header {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chain_id: 84<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reference: 7ebn8KgNxaWVK1U4teSJVg24oiesDFPei9njdNMbVFL1<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;base_target: 1508<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;generation_signature: Wbtq75BMT4zw35MiWHBcycbG3157byfA8vWYgjaMRUW1V6w6yJZ1TgdUoHe4H7xSZnSXuKJvBotn1nZV8xF8WiQMbfdzjppUvMjcXzkxssy8LK6z7ZKcd9rq1BugZcqnK1R<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timestamp: 1601462351767<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;version: 5<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;generator: GzkwrZ2tcc2Hu4X2yBHHHsM5cFQAPygFHuRCUSA9chnU<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reward_vote: -1<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transactions_root: E2SUKG7CVPQYF7ccZWD4zf2W3Ygdp59ZhLFU1R9cFafC<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signature: 3jaZa2DhvSN16b65e369MBDbypgXEysMZGdNTXx4N8uU9Qn25xsg8xg3nsbySuQWPM9ftjypLEVNkMffHA3cSrxQ<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transactions {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transaction {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chain_id: 84<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sender_public_key: 57C4SttrQ3a2s6nHqTyPoKo6g7JFKhvojLkS3qgrVqyv<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fee {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 500000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timestamp: 1601462356424<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;version: 1<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;invoke_script {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d_app {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public_key_hash: 3D7mfXL6hAbaKGqCTWC6r2tjdM5Y<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function_call: BkiQZbtVDKYHAvYcq6FfTfibZCkBt5UF9wF6Y5DwhBQfEoezXDzmvUwfUmuX4mcRiW66ReRuVbCo1M6946wJrUciG94jozz1umDzYYkvWzfQ4mcfEbQgVU5afhxHooyJJruaY9WpPUQQwwzauPg9hmZNyTxDFy7yN2nYyWJKpdF9KC7ucuAMAjw1uifVVufdVwfYi1yxMVtduWGEGuPCzd2UJXSs27EeQtS7AM8ZxtjeQbPbuMxUhCcnVKVhuQ9WLmwwgLecqJEgRPg3KjHMijjtUz2mHKsjupiELThYQCM1NiTCV1wZTwNThW3NZ8jt4rSi3wk38u5JfRH9t8umgoYAVbAmhvgYwDjEFKm9YExJufedEeLFQ1MGx83AqKjmawWLE8Z41JBdMb98mtmu3SbJ8xJpehSZhfJKV23dpBfNXouPsnScQDPHgfvTdr7oDoz71p2qQqLinZkVtEn8fiXgDtQyzHNRY1juMS3WGxKyzK8rKAPSbpoNCaF1fmznm6wyD25k9dJ91ZpKYfLDGg5Ag6ySgXKvFVVUREMrsgqKirwaz7wHmTRrc7f2Va<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;proofs: 4WhHHPj6T9xa2y9rLAJtdko3dgkMQ1gaKsuVpkKgEW8NH6QqANsJSHqe13pTwYEG3XzVWAjcefyyszgKZZvoZ4oo<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;updated_waves_amount: 10000000600000000<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;transaction_ids: DAunM3yCYmoPoAHD5z5ddX225Pa47BNBNsMoMLM2ApFC<br>
&nbsp;&nbsp;&nbsp;&nbsp;state_update {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;balances {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3NAhtLNFJhfB6TgMia9HzdaSkKiJD5N2V3b<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 1480157680000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;transaction_state_updates {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;balances {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3MuhGCajV9HXunkyuQpwXvHTjTLaMy93g9Y<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 5932500000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entries {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entry {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: "deficit_1199932"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int_value: -379468596950<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entries {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entry {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: "deficit_percent_1199932"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int_value: -31<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entries {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entry {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: "price"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int_value: 5500000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entries {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entry {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: "price_index"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int_value: 159817<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entries {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entry {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: "neutrinoSupply_1199932"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int_value: 1230373751604<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entries {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entry {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: "price_index_159817"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int_value: 1199932<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entries {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3N4NS7d4Jo9a6F14LiFUKKYVdUkkf2eP4Zx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data_entry {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key: "price_1199932"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int_value: 5500000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
}
</code>
</details>
<details><summary>MicroBlockAppend</summary>
<code>
update {<br>
&nbsp;&nbsp;id: 5DbKdfhsDaFRNfzmYwPLivksKE28VUtBZA8qt7eGwL4W<br>
&nbsp;&nbsp;height: 1199936<br>
&nbsp;&nbsp;append {<br>
&nbsp;&nbsp;&nbsp;&nbsp;micro_block {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;micro_block {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;micro_block {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;version: 5<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reference: 2EvXRVtn7sEXxFKqmfqHtJQM9r2muQUjjbY3g1D8JJHb<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;updated_block_signature: 3jBu2vx5arqPtDgTahxdWYGByjwafXranfMm8sFtyr71wcQM5w4e2k8UPBa12gHAaWS31wA1JsBvJdwe19345tZA<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sender_public_key: 3ikUmWkNpbkeVZaoA7fogfDjKw5hn4ZWVbP4gW7dMQNi<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transactions {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transaction {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chain_id: 84<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sender_public_key: 4yLsZuHMtyc4nQaF5MSGkKRQqGYfQBMim1qVLKCtacqx<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fee {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 900000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timestamp: 1601462611517<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;version: 2<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transfer {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;recipient {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;public_key_hash: 4W5hFHdYbrx7fBFP7ofmZNLsjwPB<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;asset_id: LVf3qaCtb9tieS1bHD8gg5XjWvqpBm5TaDxeSVcqPwn<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 10000000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;proofs: 4d1YtV7e9XaVGgmiZZcDNXUri6ycKmECf1R59Bz8CnvfrN31Bd3eiHzSJnFPrLTEjZ5oQLpDmcYsTaxZWdWbtsBB<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signature: 571Xg1T5aYsChW3nzKxH7N9te7xgsZsJj3yKQWwwUr4fTQehzYn5tzdudDrwdVnDuKQC7AccNqhzTPDk9AM7oVZ8<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total_block_id: 5DbKdfhsDaFRNfzmYwPLivksKE28VUtBZA8qt7eGwL4W<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;updated_transactions_root: Cv59LBRGPd1Qipk9zT8V6d2yawGVuxBLfR2JejKgCnUP<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;transaction_ids: GXTbnhwEtZLrsq7GhwSjmff12Luc1ABTjZsLq6Bun9AD<br>
&nbsp;&nbsp;&nbsp;&nbsp;state_update {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;balances {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3MtQQX9NwYH5URGGcS2e6ptEgV7wTFesaRW<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 40776090986764<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;transaction_state_updates {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;balances {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3NCpyPuNzUaB7LFS4KBzwzWVnXmjur582oy<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;asset_id: LVf3qaCtb9tieS1bHD8gg5XjWvqpBm5TaDxeSVcqPwn<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 9786003244627670<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;balances {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3MzykUc8kraFGbuYVWXtsYrnvkA8w6JeWuK<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 138800000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;balances {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;address: 3MzykUc8kraFGbuYVWXtsYrnvkA8w6JeWuK<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;asset_id: LVf3qaCtb9tieS1bHD8gg5XjWvqpBm5TaDxeSVcqPwn<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount: 99320000000<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
}
</code>
</details>
<details><summary>Rollback (for block)</summary>
<code>
update {<br>
&nbsp;&nbsp;id: 7Z4md34VUp5Db2wwYW21tb9UdVVuMbFnDqQiTy1E99uZ<br>
&nbsp;&nbsp;height: 1199939<br>
&nbsp;&nbsp;rollback {<br>
&nbsp;&nbsp;&nbsp;&nbsp;type: BLOCK<br>
&nbsp;&nbsp;}<br>
}
</code>
</details>
<details><summary>Rollback (for microblock)</summary>
<code>
update {<br>
&nbsp;&nbsp;id: C6zsDGh2a<br>hvTbDLA5ESGtaPMcGdUeg2g5FzB7XVCRTBP<br>
&nbsp;&nbsp;height: 1199973<br>
&nbsp;&nbsp;rollback {<br>
&nbsp;&nbsp;&nbsp;&nbsp;type: MICROBLOCK<br>
&nbsp;&nbsp;}<br>
}
</code>
</details>

> Some updates on the blockchain are not associated with any transaction, they are performed at the block level. For example, updates of balance of the block generator: 40% of transaction fee that is recieved by the generator of the current block and is associated with the transaction, and 60% that the generator of the next block receives is associated only with the block. The block reward is also associated with the block only.
