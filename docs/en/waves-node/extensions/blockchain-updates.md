---
sidebarDepth: 3
---

# Blockchain Updates Extension

**Blockchain Updates** is a [node extension](/en/waves-node/extensions/) that sends blockchain updates via [gRPC](https://en.wikipedia.org/wiki/GRPC).

Blockchain Updates enables tracking changes made by each transaction and block:

* balance updates,
* leased or unleased WAVES,
* account data storage updates,
* token issues and token parameter updates (including reissue/burning, sponsorship setup, replacing script).

You can obtain updates over a specified range of height or in real time.

Examples of usage:
* Integration with the messenger to send notifications about events on your account.
* Tracking payments to [dApp](/en/building-apps/smart-contracts/what-is-a-dapp) in Invoke Script transactions.
* Calculation of the average weekly account balance (used in the [market maker program](https://medium.com/wavesexchange/waves-exchange-launches-a-market-maker-program-enabling-users-to-mine-with-their-liquidity-3d229c856f67)).
* Services for searching tokens by parameters, searching through account data storages, etc.

## Hardware Requirements

For a node with the Blockchain Updates extension, we recommended to increase the disk space by 50 GB (for instance, at height 2422450, 35 GB is used for extension data).

## Launch Node with Extension

:warning: **Important:** Blockchain Updates requires the history of changes since the blockchain creation. Therefore, you should start the node with the extension from scratch and synchronize the blockchain during regular node operation, see the [Synchronize Waves Blockchain](/en/waves-node/options-for-getting-actual-blockchain/) article. This can take 1–3 days. Neither importing blockchain from a binary file, nor downloading the latest blockchain database are applicable.

There are two ways to install the node with Blockchain Updates extension: using a DEB package or a JAR file. The Blockchain Updates extension is in the same package and archive as [gRPC Server](/en/waves-node/extensions/grpc-server/). You can install these extensions both together and separately, only the settings in the node configuration file differ.

### Installation via DEB Package

1. Download the latest versions of DEB packages of node and extension from the [Releases](https://github.com/wavesplatform/Waves/releases) page (Assets section) on Github.

   The extension package name is as follows:

   • for Mainnet: `grpc-server_{version number}_all.deb`

   • for Testnet: `grpc-server-testnet_{version number}_all.deb`

   • for Stagenet: `grpc-server-stagenet_{version number}_all.deb`

2. Install the packages.

   Mainnet:

   ```bash
   sudo dpkg -i waves_{version number}_all.deb
   sudo dpkg -i grpc-server_{version number}_all.deb
   ```

   Testnet:

   ```bash
   sudo dpkg -i waves-testnet_{version number}_all.deb
   sudo dpkg -i grpc-server-testnet_{version number}_all.deb
   ```

   Stagenet:

   ```bash
   sudo dpkg -i waves-stagenet_{version number}_all.deb
   sudo dpkg -i grpc-server-stagenet_{version number}_all.deb
   ```

3. Edit the node configuration file as described in the [Node Configuration](/en/waves-node/node-configuration) article. For Mainnet, the configuration file is located at `/etc/waves/waves.conf`, for Testnet at `/etc/waves-testnet/waves.conf`, for Stagenet at `/etc/waves-stagenet/waves.conf`.

   3.1. Add Blockchain Updates to the `waves.extensions` section:
   
   ```
   waves {
      ...
      extensions = [
         com.wavesplatform.events.BlockchainUpdates
      ]
   }
   ```

   3.2. If you want to change the port for client connection (default is 6881), add the following setting:

   ```
   waves {
      ...
      blockchain-updates {
         grpc-port = 6888 # Specify port
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

If the extension runs, it writes messages to the [node log](/en/waves-node/logging-configuration):

```
BlockchainUpdates extension starting with settings <...>
BlockchainUpdates startup check successful at height <...>
BlockchainUpdates extension started gRPC API on port <...>
```

### Installation via JAR File

1. Download the latest versions of node JAR file and extension TGZ archive from the [Releases](https://github.com/wavesplatform/Waves/releases) page (Assets section) on Github.

   TGZ archive name is as follows:

   • for Mainnet: `grpc-server-{version number}.tgz`

   • for Testnet: `grpc-server-testnet-{version number}.tgz`

   • for Stagenet: `grpc-server-stagenet-{version number}.tgz`

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

   3.2. If you want to change the port for client connection (default is 6881), add the following setting:

   ```
   waves {
      ...
      blockchain-updates {
         grpc-port = 6888 # Specify port
   }
   ```


4. Run the command:

   Mainnet

   ```bash
   java -cp 'waves-all-{version number}.jar:grpc-server-{version number}/lib/*' com.wavesplatform.Application {configuration file name}.conf
   ```

   Testnet:

   ```bash
   java -cp 'waves-all-{version number}.jar:grpc-server-testnet-{version number}/lib/*' com.wavesplatform.Application {configuration file name}.conf
   ```

   Stagenet:

   ```bash
   java -cp 'waves-all-{version number}.jar:grpc-server-stagenet-{version number}/lib/*' com.wavesplatform.Application {configuration file name}.conf
   ```

   On Windows, use `;` instead of `:`, for example:

   ```bash
   java -cp 'waves-all-{version number}.jar;grpc-server-{version number}/lib/*' com.wavesplatform.Application {configuration file name}.conf
   ```

If the extension runs, it writes messages to the [node log](/en/waves-node/logging-configuration):

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

## Usage

API Blockchain Updates provides the following functions:
* `GetBlockUpdate` returns updates performed by the block at the given height.
* [GetBlockUpdatesRange](#GetBlockUpdatesRange) returns updates performed by the blocks at the given range of height.
* [Subscribe](#Subscribe) returns stream of messages, first historical data (i.e. updates up to the current blockchain height), then current events in real time. Optionally, you can specify the start and/or end height.

See the format of requests and responses in the [blockchain_updates.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/grpc/blockchain_updates.proto) file.

### Subscribe

The `Subscribe` function returns all the events in real time: block append, microblock append, block rollback, microblock rollback (see the [Waves-NG](/en/blockchain/waves-protocol/waves-ng-protocol) protocol description).

If the connection was interrupted, roll back the last block on the client and restart receiving events from the previous block.

Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| from_height | int32 | Start height. Optional, 1 by default |
| to_height | int32 | End height. Optional, by default the height is not limited |

The function returns a stream of `SubscribeEvent` messages.

Message fields:

| Name | Type| Description |
| :--- | :--- | :--- |
| update.id | bytes | ID of the last block or microblock on the blockchain after the event |
| update.height | int32 | Height |
| update.update | Append or Rollback | Event: append or rollback of a block or a microblock. See [Event Format](#event-format) below |
| referenced_assets | repeated StateUpdate.AssetInfo | Assets involved in the event. See [AssetInfo](#AssetInfo) below |

### GetBlockUpdatesRange

The `GetBlockUpdatesRange` function returns only historical data of blocks that are already applied. Use it for analytical tasks, where real-time events are not needed, for example, it is enough to update the data once an hour or once a day. We recommend to indicate the end height of the range a few blocks less than the current blockchain height to avoid issues with rollbacks.

Parameters:

| Name | Type | Description |
| :--- | :--- | :--- |
| from_height | int32 | Start height. Required |
| to_height | int32 | End height. Required |

The function returns an array of `SubscribeEvent` messages. The message format is the same as for the `Subscribe` function, but contains only messages of a block append.

## Event Format

See the event format in the [events.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/events/events.proto) file.

Some updates on the blockchain are not associated with any transaction, they are performed at the block level. For example, updates of the block generator balance: 40% of transaction fee that the generator of the current block receives is related to the transaction, and the 60% that the generator of the next block receives is related to the block. The block reward is also related to the block only.

If the transaction fee is indicated in the sponsored asset, then Blockchain Updates returns, in addition to the sender's balance and block generator's balance updates, the sponsor's balance update: the sponsor receives the fee in the sponsored asset and pays the fee equivalent in WAVES. [More about sponsorship](/en/blockchain/waves-protocol/sponsored-fee)

### Block Append

When receiving events in real time, the message of a block append can contain transactions and state updates generated by them (if a key block + a microblock are created) or there can be no transactions (if only a key block is created).

Message fields:

| Name | Type | Description |
| :--- | :--- | :--- |
| block | [Block](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/block.proto) | Block data: headers and transactions. See also the [Block Binary Format](/en/blockchian/binary-format/block-binary-format) article |
| updated_waves_amount | int64 | Total number of WAVES including the block reward |
| transaction_ids | repeated bytes | IDs of block's transactions |
| transactions_metadata | repeated TransactionMetadata | Additional info about transactions. See [TransactionMetadata](#TransactionMetadata) below |
| state_update | StateUpdate | Blockchain state updates related to a block. See [StateUpdate](#StateUpdate) below |
| transaction_state_updates | repeated StateUpdate | Blockchain state updates related to transactions. See [StateUpdate](#StateUpdate) below |

`transaction_ids`, `transactions_metadata`, `transaction_state_updates` are parallel arrays: the same index corresponds to the data related to the same transaction. If there is no additional info, then the `transactions_metadata` array contains an empty value by this index.

<details><summary>Example</summary>

</details>

### Microblock Append

The message of a microblock append contains only transactions and state updates generated by them that are missed in the previous block/microblock.

Message fields:

| Name | Type | Description |
| :--- | :--- | :--- |
| micro_block | [SignedMicroBlock](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/block.proto) | Microblock data |
| updated_transactions_root | int64 | [Transactions Root Hash](/en/blockchain/block/merkle-root) of all transactions of the current block |
| transaction_ids | repeated bytes | IDs of microblock's transactions |
| transactions_metadata | repeated TransactionMetadata | Additional info about transactions. See [TransactionMetadata](#TransactionMetadata) below |
| state_update | StateUpdate | Blockchain state updates related to a block. See [StateUpdate](#StateUpdate) below |
| transaction_state_updates | repeated StateUpdate | Blockchain state updates related to transactions. See [StateUpdate](#StateUpdate) below |

`transaction_ids`, `transactions_metadata`, `transaction_state_updates` are parallel arrays: the same index corresponds to the data related to the same transaction. If there is no additional info, then the `transactions_metadata` array contains an empty value by this index.

<details><summary>Example</summary>

</details>

### Rollback of Block or Microblock

Message fields:

| Name | Type | Description |
| :--- | :--- | :--- |
| type | RollbackType | Message type: BLOCK — block rollback, MICROBLOCK — microblock rollback |
| removed_transaction_ids | repeated bytes | IDs of transactions deleted as a result of the rollback |
| removed_blocks | repeated [Block](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/block.proto) | Blocks deleted as a result of the rollback. Empty for microblock rollback |
| rollback_state_update | StateUpdate | Blockchain state updates generated by the rollback (the reverse of changes related to transactions and blocks/microblocks that are rolled back). See [StateUpdate](#StateUpdate) below |

<details><summary>Example</summary>

</details>

### StateUpdate

Blockchain state updates generated by a transaction, block, microblock, or rollback.

Unlike in transactions, account addresses in `StateUpdate` are given in full, including the entity type, chain ID, and checksum. See the [Address Binary Format](/en/blockchain/binary-format/address-binary-format) article.

#### Changes in Account Balances

| Name | Type | Description |
| :--- | :--- | :--- |
| balances.address | bytes | Address |
| balances.amount_after | [Amount](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/amount.proto) | New balance |
| balances.amount_before | int64 | Previous balance |

#### Changes in Account Lease Balances

| Name | Type | Description |
| :--- | :--- | :--- |
| leasing_for_address.address | bytes | Address |
| leasing_for_address.in_after | int64 | New amount of incoming leases |
| leasing_for_address.out_after | int64 | New amount of outgoing leases |
| leasing_for_address.in_before | int64 | Previous amount of incoming leases |
| leasing_for_address.out_before | int64 | Previous amount of outgoing leases |

#### Changes in Account Data Storage Entries

| Name | Type | Description |
| :--- | :--- | :--- |
| data_entries.address | bytes | Address |
| data_entries.data_entry | [DataTransactionData.DataEntry](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto#L67) | Entry with the new value |
| data_entries.data_entry_before | [DataTransactionData.DataEntry](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto#L67) | Entry with the previous value |

#### Changes in Leases

| Name | Type | Description |
| :--- | :--- | :--- |
| individual_leases.lease_id | bytes | Lease ID |
| individual_leases.status_after | LeaseStatus | New status of the lease: ACTIVE or INACTIVE |
| individual_leases.amount | int64 | Lease amount |
| individual_leases.sender | bytes | Lessor's address |
| individual_leases.recipient | bytes | Lessee's address |
| individual_leases.origin_transaction_id | bytes | Transaction that created, modified, or canceled the lease |

#### Changes in Token Parameters

| Name | Type | Description |
| :--- | :--- | :--- |
| assets.before | AssetDetails | Previous token parameters. Empty for the token issue. See [AssetDetails](#AssetDetails) below |
| assets.after | AssetDetails | New token parameters. Empty for the rollback of a block/microblock that generated the token issue |

#### AssetDetails

| Name | Type | Description |
| :--- | :--- | :--- |
| asset_id | bytes | Token ID |
| issuer | bytes | Address of the issuer account |
| decimals | int32 | Number of decimal places |
| name | string | Token name |
| description | string | Token description |
| reissuable | bool | Reissue availability flag |
| volume | int64 | Total supply |
| script_info.script | bytes | Compiled asset script |
| script_info.complexity | int64 | Complexity of the asset script |
| sponsorship | int64 | For a sponsored asset: amount of the asset that is equivalent to 0.001 WAVES. Otherwise, empty |
| nft | bool | Indication that the token is [NFT](/en/blockchain/token/non-fungible-token) |
| last_updated | int32 | The height at which the last change in token parameters occurred |
| safe_volume | bytes | Related to a past behavior in the blockchain when it was possible to reissue assets so that the total volume became more then int64 max value. This field represents accurate volume even for those assets. Can be ignored if the target system does not need such accuracy. Encoding: like Java BigInteger, see <https://docs.oracle.com/javase/7/docs/api/java/math/BigInteger.html#toByteArray()> |

#### AssetInfo

| Name | Type | Description |
| :--- | :--- | :--- |
| id | bytes | Token ID  |
| decimals | int32 | Number of decimal places |
| name | string | Token name |

### TransactionMetadata

Additional information about the transaction.

Unlike in transactions, account addresses in `TransactionMetadata` are given in full, including the entity type, chain ID, and checksum. See the [Address Binary Format](/en/blockchain/binary-format/address-binary-format) article.

#### For Invoke Script Transaction

| Name | Type | Description |
| :--- | :--- | :--- |
| d_app_address | bytes | dApp address |
| function_name | string | Callable function name. |
| arguments | repeated Argument | Arguments for the callable function |
| payments | repeated [Amount](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/amount.proto) | Payments attached to the invocation |
| result | [InvokeScriptResult](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/invoke_script_result.proto) | Script actions performed by the callable function |

#### For Transfer Transaction

| Name | Type | Description |
| :--- | :--- | :--- |
| recipient_address | bytes | Recipient's address |

#### For Mass Transfer Transaction

| Name | Type | Description |
| :--- | :--- | :--- |
| recipient_addresses | repeated bytes | Recipients' addresses |

#### For Lease Transaction

| Name | Type | Description |
| :--- | :--- | :--- |
| recipient_address | bytes | Recipient's address |
