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

:warning: **Important:** Blockchain Updates requires the history of changes since the blockchain creation. Therefore, you can either start the node with the extension from scratch and synchronize the blockchain during regular node operation (see the [Synchronize Waves Blockchain](/en/waves-node/options-for-getting-actual-blockchain/) article) or import the blockchain from a binary file (see the [Import/Export Blockchain](/en/waves-node/options-for-getting-actual-blockchain/import-from-the-blockchain) article). This can take 1–3 days. Downloading the latest blockchain database is not applicable.

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

<details><summary><b>Example</b></summary>

```json
{
  "id" : "7gcuQwOgRC8Cz+wWquTieR15PA+kctdFcSf10E98l7inxH5NOY7+BRmMSbVi/jxcvpluywxSVM/uIAIKxbtkCA==",
  "height" : 2,
  "append" : {
    "block" : {
      "block" : {
        "header" : {
          "chainId" : 84,
          "reference" : "8SKLHdB+1z/Pi99SOdhHyA4aL/GOOsdCXKaCADyGjG3mh4hIuzzeI7P1/1ePyyuMXnJoTHe9rpCoIS7RieKICw==",
          "baseTarget" : "60",
          "generationSignature" : "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
          "featureVotes" : [ ],
          "timestamp" : "1614956693029",
          "version" : 2,
          "generator" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "rewardVote" : "-1",
          "transactionsRoot" : ""
        },
        "signature" : "7gcuQwOgRC8Cz+wWquTieR15PA+kctdFcSf10E98l7inxH5NOY7+BRmMSbVi/jxcvpluywxSVM/uIAIKxbtkCA==",
        "transactions" : [ {
          "transaction" : {
            "chainId" : 84,
            "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
            "fee" : {
              "assetId" : "",
              "amount" : "1000000"
            },
            "timestamp" : "1614956690976",
            "version" : 1,
            "transfer" : {
              "recipient" : {
                "publicKeyHash" : "PTrYhPoEKSe51sN99wr1wL2VFsU="
              },
              "amount" : {
                "assetId" : "",
                "amount" : "100000000"
              },
              "attachment" : ""
            }
          },
          "proofs" : [ "WIkitBii4d0LjMCxRiC6i+9QPVXQyKJxvRLj/uIao6KDP9dnd4oCEPIcKJPXiVnrAp1xExti3levPAtK7lDqDw==" ]
        }, {
          "transaction" : {
            "chainId" : 84,
            "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
            "fee" : {
              "assetId" : "",
              "amount" : "1000000"
            },
            "timestamp" : "1614956690977",
            "version" : 2,
            "lease" : {
              "recipient" : {
                "publicKeyHash" : "PTrYhPoEKSe51sN99wr1wL2VFsU="
              },
              "amount" : "1000000000"
            }
          },
          "proofs" : [ "VOdvKFrjMeq8YodWYsuMIlI2XuUB3hYP85l49pqKzDRL+s4+2OqeZWxNZAwynyrtD39woxy/mZaV01TKQSPYDw==" ]
        }, {
          "transaction" : {
            "chainId" : 84,
            "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
            "fee" : {
              "assetId" : "",
              "amount" : "100000000"
            },
            "timestamp" : "1614956690978",
            "version" : 2,
            "issue" : {
              "name" : "test",
              "description" : "",
              "amount" : "1000",
              "decimals" : 0,
              "reissuable" : true,
              "script" : ""
            }
          },
          "proofs" : [ "6vyW+hzk5g5wgwJAjfdcSCCQxECjLa2tX+SDYm7b20/vzADqNXNjrcV6ra1Qvl/OLQcJdppcnUrVBpEjfxPKAA==" ]
        }, {
          "transaction" : {
            "chainId" : 84,
            "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
            "fee" : {
              "assetId" : "",
              "amount" : "1000000"
            },
            "timestamp" : "1614956690979",
            "version" : 2,
            "reissue" : {
              "assetAmount" : {
                "assetId" : "hsQkyz38InYtnW1muswEf7qEeAsRpc5SG4MC27K/mRc=",
                "amount" : "1000"
              },
              "reissuable" : true
            }
          },
          "proofs" : [ "5adqKEbN0OHdpBhrRtBgfGtXhWK8zFOkuNOrnUYTsU2wAjrdVJrG/xjHHBh0e0NBbg3WEpUeOl93WyqitIKpDA==" ]
        }, {
          "transaction" : {
            "chainId" : 84,
            "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
            "fee" : {
              "assetId" : "",
              "amount" : "3000000"
            },
            "timestamp" : "1614956690980",
            "version" : 1,
            "dataTransaction" : {
              "data" : [ {
                "key" : "test",
                "stringValue" : "test"
              } ]
            }
          },
          "proofs" : [ "ZiR8Xy5rN5CZ/5sPQEAd3qQ9vdj4tenpD58T4Hla5TpCWi3va+o391X6bQ0evwfBMP6EVfJ8e5d0toFzStRrCQ==" ]
        } ]
      },
      "updatedWavesAmount" : "10000000600000000"
    },
    "transactionIds" : [ "l7zm8/8YT753CHgPrsTJU4ol/luwt3rUM1xSob4vA6E=", "YXkv6kf4P+C8Hed93ouMQs9SQRRLF9+l+6S165ZQS3w=", "hsQkyz38InYtnW1muswEf7qEeAsRpc5SG4MC27K/mRc=", "1gevjcLmf8R6lqRP8iWmWvU8rTHyWGRVmj4aFLlvvXo=", "XOHOVbrsTJa9Kg0VjEZHY7ckqdUpKTP+aZ7KJZWGzVA=" ],
    "transactionsMetadata" : [ {
      "transfer" : {
        "recipientAddress" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME="
      }
    }, {
      "leaseMeta" : {
        "recipientAddress" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME="
      }
    }, { }, { }, { } ],
    "stateUpdate" : {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001242400000"
        },
        "amountBefore" : "10000000600000000"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ ],
      "assets" : [ ],
      "individualLeases" : [ ]
    },
    "transactionStateUpdates" : [ {
      "balances" : [ {
        "address" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "100000000"
        },
        "amountBefore" : "0"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001141400000"
        },
        "amountBefore" : "10000001242400000"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ ],
      "assets" : [ ],
      "individualLeases" : [ ]
    }, {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001140400000"
        },
        "amountBefore" : "10000001141400000"
      } ],
      "leasingForAddress" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "inAfter" : "0",
        "outAfter" : "1000000000",
        "inBefore" : "0",
        "outBefore" : "0"
      }, {
        "address" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "inAfter" : "1000000000",
        "outAfter" : "0",
        "inBefore" : "0",
        "outBefore" : "0"
      } ],
      "dataEntries" : [ ],
      "assets" : [ ],
      "individualLeases" : [ {
        "leaseId" : "YXkv6kf4P+C8Hed93ouMQs9SQRRLF9+l+6S165ZQS3w=",
        "statusAfter" : "ACTIVE",
        "amount" : "1000000000",
        "sender" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
        "recipient" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "originTransactionId" : "YXkv6kf4P+C8Hed93ouMQs9SQRRLF9+l+6S165ZQS3w="
      } ]
    }, {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001040400000"
        },
        "amountBefore" : "10000001140400000"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "hsQkyz38InYtnW1muswEf7qEeAsRpc5SG4MC27K/mRc=",
          "amount" : "1000"
        },
        "amountBefore" : "0"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ ],
      "assets" : [ {
        "after" : {
          "assetId" : "hsQkyz38InYtnW1muswEf7qEeAsRpc5SG4MC27K/mRc=",
          "issuer" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "decimals" : 0,
          "name" : "test",
          "description" : "",
          "reissuable" : true,
          "volume" : "1000",
          "sponsorship" : "0",
          "nft" : false,
          "lastUpdated" : 2,
          "safeVolume" : "A+g="
        }
      } ],
      "individualLeases" : [ ]
    }, {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001039400000"
        },
        "amountBefore" : "10000001040400000"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "hsQkyz38InYtnW1muswEf7qEeAsRpc5SG4MC27K/mRc=",
          "amount" : "2000"
        },
        "amountBefore" : "1000"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ ],
      "assets" : [ {
        "before" : {
          "assetId" : "hsQkyz38InYtnW1muswEf7qEeAsRpc5SG4MC27K/mRc=",
          "issuer" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "decimals" : 0,
          "name" : "test",
          "description" : "",
          "reissuable" : true,
          "volume" : "1000",
          "sponsorship" : "0",
          "nft" : false,
          "lastUpdated" : 2,
          "safeVolume" : "A+g="
        },
        "after" : {
          "assetId" : "hsQkyz38InYtnW1muswEf7qEeAsRpc5SG4MC27K/mRc=",
          "issuer" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "decimals" : 0,
          "name" : "test",
          "description" : "",
          "reissuable" : true,
          "volume" : "2000",
          "sponsorship" : "0",
          "nft" : false,
          "lastUpdated" : 2,
          "safeVolume" : "B9A="
        }
      } ],
      "individualLeases" : [ ]
    }, {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001036400000"
        },
        "amountBefore" : "10000001039400000"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "dataEntry" : {
          "key" : "test",
          "stringValue" : "test"
        },
        "dataEntryBefore" : {
          "key" : "test"
        }
      } ],
      "assets" : [ ],
      "individualLeases" : [ ]
    } ]
  },
  "referencedAssets" : [ {
    "id" : "hsQkyz38InYtnW1muswEf7qEeAsRpc5SG4MC27K/mRc=",
    "decimals" : 0,
    "name" : "test"
  } ]
}
```
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

<details><summary><b>Example</b></summary>

```json
{
  "id" : "PM99HiRDmeepqQ9ezrTjs85WnjTavOuTfC84X7mdL9IHEI9dMdZ43JXQCYHFoy9ul9RLIsUL/vtwaFt1FeIODA==",
  "height" : 2,
  "append" : {
    "microBlock" : {
      "microBlock" : {
        "microBlock" : {
          "version" : 3,
          "reference" : "kMZ1rAlt+eNoHqHfuM6R5MS1NslQXDUJ2R3AreDjYWHEU5YIaU9unXZTTRcOBq/8zQEeI57scSgF7zH94N21Bw==",
          "updatedBlockSignature" : "PM99HiRDmeepqQ9ezrTjs85WnjTavOuTfC84X7mdL9IHEI9dMdZ43JXQCYHFoy9ul9RLIsUL/vtwaFt1FeIODA==",
          "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "transactions" : [ {
            "transaction" : {
              "chainId" : 84,
              "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
              "fee" : {
                "assetId" : "",
                "amount" : "1000000"
              },
              "timestamp" : "1614955693251",
              "version" : 1,
              "transfer" : {
                "recipient" : {
                  "publicKeyHash" : "PTrYhPoEKSe51sN99wr1wL2VFsU="
                },
                "amount" : {
                  "assetId" : "",
                  "amount" : "100000000"
                },
                "attachment" : ""
              }
            },
            "proofs" : [ "c7gEcrOqeKhyJgdY0HO6lmp9WCCHJTMjL0IZhehtTvRIFMZWGPb5YOTumytK3dGi1vORxvw1UmBNioLxJBdSAw==" ]
          }, {
            "transaction" : {
              "chainId" : 84,
              "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
              "fee" : {
                "assetId" : "",
                "amount" : "1000000"
              },
              "timestamp" : "1614955693252",
              "version" : 2,
              "lease" : {
                "recipient" : {
                  "publicKeyHash" : "PTrYhPoEKSe51sN99wr1wL2VFsU="
                },
                "amount" : "1000000000"
              }
            },
            "proofs" : [ "sTTAbbdtEFRbwqlly2fc16oWpu5+hJN5am2AQvz5gix162EEepo/SqoTkIjMJ3OgnGWSBKXstJcqYtwPTPEZBQ==" ]
          }, {
            "transaction" : {
              "chainId" : 84,
              "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
              "fee" : {
                "assetId" : "",
                "amount" : "100000000"
              },
              "timestamp" : "1614955693253",
              "version" : 2,
              "issue" : {
                "name" : "test",
                "description" : "",
                "amount" : "1000",
                "decimals" : 0,
                "reissuable" : true,
                "script" : ""
              }
            },
            "proofs" : [ "iPmPbzPN9tff59mPowWT2zFocMVp4IKxZhGHQfisrQLrNw1zRmGBUuL34T6AgYmvKuPuL38TWd4VMBUPsSmWDQ==" ]
          }, {
            "transaction" : {
              "chainId" : 84,
              "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
              "fee" : {
                "assetId" : "",
                "amount" : "1000000"
              },
              "timestamp" : "1614955693254",
              "version" : 2,
              "reissue" : {
                "assetAmount" : {
                  "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
                  "amount" : "1000"
                },
                "reissuable" : true
              }
            },
            "proofs" : [ "41dTNu6FK52a0aWIo0iHQ7F2qJteanKBVdyrD3PJC//xOr5zSWMv+JZ9BsJRs1INQGr0+nLVAnvoYq/aFdb1Cg==" ]
          }, {
            "transaction" : {
              "chainId" : 84,
              "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
              "fee" : {
                "assetId" : "",
                "amount" : "3000000"
              },
              "timestamp" : "1614955693255",
              "version" : 1,
              "dataTransaction" : {
                "data" : [ {
                  "key" : "test",
                  "stringValue" : "test"
                } ]
              }
            },
            "proofs" : [ "ryDXoAbjbOvLZasQ6/QE+9ewT2D009y8NA5qJQbA/nxS+QHCSj6CVHvVaoagSwykAujIn9FiA3tY4nSqEjX3AA==" ]
          } ]
        },
        "signature" : "GlRrocxMSmUugmNdtVXueL/5gKNxoLQEXVgrtTD8sXHAzM4s9lpiIGLJ0Kajwvq8jS1isxpgkBRPnCSo/t4cCw==",
        "totalBlockId" : "PM99HiRDmeepqQ9ezrTjs85WnjTavOuTfC84X7mdL9IHEI9dMdZ43JXQCYHFoy9ul9RLIsUL/vtwaFt1FeIODA=="
      },
      "updatedTransactionsRoot" : ""
    },
    "transactionIds" : [ "pRhzG3hnik7QM0SBcSUJeUUASaqCrJoX+nFzY+qydE0=", "egBkLVBeTLm4tPaPhuo6SkAFYY35TWFIGQFn5K4EGp4=", "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=", "Ya9WrfvwSsxRzgmvrbf4t4S+k6SrTuesJ8MPJNf148w=", "Ht2ILo1jmsy1Do8AdwMtFb3rAzybI43bNP62e3nPkws=" ],
    "transactionsMetadata" : [ {
      "transfer" : {
        "recipientAddress" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME="
      }
    }, {
      "leaseMeta" : {
        "recipientAddress" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME="
      }
    }, { }, { }, { } ],
    "stateUpdate" : {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001242400000"
        },
        "amountBefore" : "10000001200000000"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ ],
      "assets" : [ ],
      "individualLeases" : [ ]
    },
    "transactionStateUpdates" : [ {
      "balances" : [ {
        "address" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "100000000"
        },
        "amountBefore" : "0"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001141400000"
        },
        "amountBefore" : "10000001242400000"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ ],
      "assets" : [ ],
      "individualLeases" : [ ]
    }, {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001140400000"
        },
        "amountBefore" : "10000001141400000"
      } ],
      "leasingForAddress" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "inAfter" : "0",
        "outAfter" : "1000000000",
        "inBefore" : "0",
        "outBefore" : "0"
      }, {
        "address" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "inAfter" : "1000000000",
        "outAfter" : "0",
        "inBefore" : "0",
        "outBefore" : "0"
      } ],
      "dataEntries" : [ ],
      "assets" : [ ],
      "individualLeases" : [ {
        "leaseId" : "egBkLVBeTLm4tPaPhuo6SkAFYY35TWFIGQFn5K4EGp4=",
        "statusAfter" : "ACTIVE",
        "amount" : "1000000000",
        "sender" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
        "recipient" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "originTransactionId" : "egBkLVBeTLm4tPaPhuo6SkAFYY35TWFIGQFn5K4EGp4="
      } ]
    }, {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001040400000"
        },
        "amountBefore" : "10000001140400000"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
          "amount" : "1000"
        },
        "amountBefore" : "0"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ ],
      "assets" : [ {
        "after" : {
          "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
          "issuer" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "decimals" : 0,
          "name" : "test",
          "description" : "",
          "reissuable" : true,
          "volume" : "1000",
          "sponsorship" : "0",
          "nft" : false,
          "lastUpdated" : 2,
          "safeVolume" : "A+g="
        }
      } ],
      "individualLeases" : [ ]
    }, {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001039400000"
        },
        "amountBefore" : "10000001040400000"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
          "amount" : "2000"
        },
        "amountBefore" : "1000"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ ],
      "assets" : [ {
        "before" : {
          "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
          "issuer" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "decimals" : 0,
          "name" : "test",
          "description" : "",
          "reissuable" : true,
          "volume" : "1000",
          "sponsorship" : "0",
          "nft" : false,
          "lastUpdated" : 2,
          "safeVolume" : "A+g="
        },
        "after" : {
          "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
          "issuer" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "decimals" : 0,
          "name" : "test",
          "description" : "",
          "reissuable" : true,
          "volume" : "2000",
          "sponsorship" : "0",
          "nft" : false,
          "lastUpdated" : 2,
          "safeVolume" : "B9A="
        }
      } ],
      "individualLeases" : [ ]
    }, {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001036400000"
        },
        "amountBefore" : "10000001039400000"
      } ],
      "leasingForAddress" : [ ],
      "dataEntries" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "dataEntry" : {
          "key" : "test",
          "stringValue" : "test"
        },
        "dataEntryBefore" : {
          "key" : "test"
        }
      } ],
      "assets" : [ ],
      "individualLeases" : [ ]
    } ]
  },
  "referencedAssets" : [ {
    "id" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
    "decimals" : 0,
    "name" : "test"
  } ]
}
```
</details>

### Rollback of Block or Microblock

Message fields:

| Name | Type | Description |
| :--- | :--- | :--- |
| type | RollbackType | Message type: BLOCK — block rollback, MICROBLOCK — microblock rollback |
| removed_transaction_ids | repeated bytes | IDs of transactions deleted as a result of the rollback |
| removed_blocks | repeated [Block](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/block.proto) | Blocks deleted as a result of the rollback. Empty for microblock rollback |
| rollback_state_update | StateUpdate | Blockchain state updates generated by the rollback (the reverse of changes related to transactions and blocks/microblocks that are rolled back). See [StateUpdate](#StateUpdate) below |

**Examples:**

<details><summary>Block rollbaсk</summary>

```json
{
  "id" : "fJP16HbHyQ2Bib7fEUoZAS9Hm/IjCprhYxa3XuYKdY+7No72rCHtoXgInd3Pn9WMS3k9KvJMRMZbJTeYDdz0AA==",
  "height" : 1,
  "rollback" : {
    "type" : "BLOCK",
    "removedTransactionIds" : [ "Ht2ILo1jmsy1Do8AdwMtFb3rAzybI43bNP62e3nPkws=", "Ya9WrfvwSsxRzgmvrbf4t4S+k6SrTuesJ8MPJNf148w=", "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=", "egBkLVBeTLm4tPaPhuo6SkAFYY35TWFIGQFn5K4EGp4=", "pRhzG3hnik7QM0SBcSUJeUUASaqCrJoX+nFzY+qydE0=" ],
    "removedBlocks" : [ {
      "header" : {
        "chainId" : 84,
        "reference" : "fJP16HbHyQ2Bib7fEUoZAS9Hm/IjCprhYxa3XuYKdY+7No72rCHtoXgInd3Pn9WMS3k9KvJMRMZbJTeYDdz0AA==",
        "baseTarget" : "60",
        "generationSignature" : "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
        "featureVotes" : [ ],
        "timestamp" : "1614955695404",
        "version" : 3,
        "generator" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
        "rewardVote" : "-1",
        "transactionsRoot" : ""
      },
      "signature" : "PM99HiRDmeepqQ9ezrTjs85WnjTavOuTfC84X7mdL9IHEI9dMdZ43JXQCYHFoy9ul9RLIsUL/vtwaFt1FeIODA==",
      "transactions" : [ {
        "transaction" : {
          "chainId" : 84,
          "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "fee" : {
            "assetId" : "",
            "amount" : "1000000"
          },
          "timestamp" : "1614955693251",
          "version" : 1,
          "transfer" : {
            "recipient" : {
              "publicKeyHash" : "PTrYhPoEKSe51sN99wr1wL2VFsU="
            },
            "amount" : {
              "assetId" : "",
              "amount" : "100000000"
            },
            "attachment" : ""
          }
        },
        "proofs" : [ "c7gEcrOqeKhyJgdY0HO6lmp9WCCHJTMjL0IZhehtTvRIFMZWGPb5YOTumytK3dGi1vORxvw1UmBNioLxJBdSAw==" ]
      }, {
        "transaction" : {
          "chainId" : 84,
          "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "fee" : {
            "assetId" : "",
            "amount" : "1000000"
          },
          "timestamp" : "1614955693252",
          "version" : 2,
          "lease" : {
            "recipient" : {
              "publicKeyHash" : "PTrYhPoEKSe51sN99wr1wL2VFsU="
            },
            "amount" : "1000000000"
          }
        },
        "proofs" : [ "sTTAbbdtEFRbwqlly2fc16oWpu5+hJN5am2AQvz5gix162EEepo/SqoTkIjMJ3OgnGWSBKXstJcqYtwPTPEZBQ==" ]
      }, {
        "transaction" : {
          "chainId" : 84,
          "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "fee" : {
            "assetId" : "",
            "amount" : "100000000"
          },
          "timestamp" : "1614955693253",
          "version" : 2,
          "issue" : {
            "name" : "test",
            "description" : "",
            "amount" : "1000",
            "decimals" : 0,
            "reissuable" : true,
            "script" : ""
          }
        },
        "proofs" : [ "iPmPbzPN9tff59mPowWT2zFocMVp4IKxZhGHQfisrQLrNw1zRmGBUuL34T6AgYmvKuPuL38TWd4VMBUPsSmWDQ==" ]
      }, {
        "transaction" : {
          "chainId" : 84,
          "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "fee" : {
            "assetId" : "",
            "amount" : "1000000"
          },
          "timestamp" : "1614955693254",
          "version" : 2,
          "reissue" : {
            "assetAmount" : {
              "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
              "amount" : "1000"
            },
            "reissuable" : true
          }
        },
        "proofs" : [ "41dTNu6FK52a0aWIo0iHQ7F2qJteanKBVdyrD3PJC//xOr5zSWMv+JZ9BsJRs1INQGr0+nLVAnvoYq/aFdb1Cg==" ]
      }, {
        "transaction" : {
          "chainId" : 84,
          "senderPublicKey" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "fee" : {
            "assetId" : "",
            "amount" : "3000000"
          },
          "timestamp" : "1614955693255",
          "version" : 1,
          "dataTransaction" : {
            "data" : [ {
              "key" : "test",
              "stringValue" : "test"
            } ]
          }
        },
        "proofs" : [ "ryDXoAbjbOvLZasQ6/QE+9ewT2D009y8NA5qJQbA/nxS+QHCSj6CVHvVaoagSwykAujIn9FiA3tY4nSqEjX3AA==" ]
      } ]
    } ],
    "rollbackStateUpdate" : {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000000600000000"
        },
        "amountBefore" : "10000001036400000"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
          "amount" : "0"
        },
        "amountBefore" : "2000"
      }, {
        "address" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "0"
        },
        "amountBefore" : "100000000"
      } ],
      "leasingForAddress" : [ {
        "address" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "inAfter" : "0",
        "outAfter" : "0",
        "inBefore" : "1000000000",
        "outBefore" : "0"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "inAfter" : "0",
        "outAfter" : "0",
        "inBefore" : "0",
        "outBefore" : "1000000000"
      } ],
      "dataEntries" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "dataEntry" : {
          "key" : "test"
        },
        "dataEntryBefore" : {
          "key" : "test",
          "stringValue" : "test"
        }
      } ],
      "assets" : [ {
        "before" : {
          "assetId" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
          "issuer" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "decimals" : 0,
          "name" : "test",
          "description" : "",
          "reissuable" : true,
          "volume" : "2000",
          "sponsorship" : "0",
          "nft" : false,
          "lastUpdated" : 2,
          "safeVolume" : "B9A="
        }
      } ],
      "individualLeases" : [ {
        "leaseId" : "egBkLVBeTLm4tPaPhuo6SkAFYY35TWFIGQFn5K4EGp4=",
        "statusAfter" : "INACTIVE",
        "amount" : "1000000000",
        "sender" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
        "recipient" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "originTransactionId" : "egBkLVBeTLm4tPaPhuo6SkAFYY35TWFIGQFn5K4EGp4="
      } ]
    }
  },
  "referencedAssets" : [ {
    "id" : "OaYhGK7uhe44lfBbsNswXc3fmO0luXGwQjVmBAXvqDc=",
    "decimals" : 0,
    "name" : "test"
  } ]
}
```
</details>
<details><summary>Microblock rollbaсk</summary>

```json
{
  "id" : "EmnPnXsOTq90SzwR3Qa0IsWhw4CmZKdgLsbfEa9TbYv/FGCK7dHFn+j2V8raFpwIzawihhLO5WJRDN+8EP/jBg==",
  "height" : 2,
  "rollback" : {
    "type" : "MICROBLOCK",
    "removedTransactionIds" : [ "Hfg/QwbcdGzIOSl6U0FXj/aD4nDYUhJge7FrOo6H+yc=", "i7r7ySkIkiL6hiRIDuYAroH7sd8ottXj1dryf6n/vdI=", "Eg82h+UU/rRKorf8f08HeKeoN4W431XsEJcxxJK+ZNc=", "pdjI2EDDWvIUi/mCJOGtR4AGVOmfOqkPpuuwskJjR/I=", "UbF1cV8thQ7koJzBOAqslD4wrtq7sCJAoJjBI5srLyo=" ],
    "removedBlocks" : [ ],
    "rollbackStateUpdate" : {
      "balances" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "10000001200000000"
        },
        "amountBefore" : "10000001036400000"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "amountAfter" : {
          "assetId" : "Eg82h+UU/rRKorf8f08HeKeoN4W431XsEJcxxJK+ZNc=",
          "amount" : "0"
        },
        "amountBefore" : "2000"
      }, {
        "address" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "amountAfter" : {
          "assetId" : "",
          "amount" : "0"
        },
        "amountBefore" : "100000000"
      } ],
      "leasingForAddress" : [ {
        "address" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "inAfter" : "0",
        "outAfter" : "0",
        "inBefore" : "1000000000",
        "outBefore" : "0"
      }, {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "inAfter" : "0",
        "outAfter" : "0",
        "inBefore" : "0",
        "outBefore" : "1000000000"
      } ],
      "dataEntries" : [ {
        "address" : "AVQv1P2H4On4q9JvwDzjIpknHO4wLHCiOl4=",
        "dataEntry" : {
          "key" : "test"
        },
        "dataEntryBefore" : {
          "key" : "test",
          "stringValue" : "test"
        }
      } ],
      "assets" : [ {
        "before" : {
          "assetId" : "Eg82h+UU/rRKorf8f08HeKeoN4W431XsEJcxxJK+ZNc=",
          "issuer" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
          "decimals" : 0,
          "name" : "test",
          "description" : "",
          "reissuable" : true,
          "volume" : "2000",
          "sponsorship" : "0",
          "nft" : false,
          "lastUpdated" : 2,
          "safeVolume" : "B9A="
        }
      } ],
      "individualLeases" : [ {
        "leaseId" : "i7r7ySkIkiL6hiRIDuYAroH7sd8ottXj1dryf6n/vdI=",
        "statusAfter" : "INACTIVE",
        "amount" : "1000000000",
        "sender" : "eYy9ZNeMSg+6M4sqY0ljSUDcTltgHbECngLEHg/gVnk=",
        "recipient" : "AVQ9OtiE+gQpJ7nWw333CvXAvZUWxetoaME=",
        "originTransactionId" : "i7r7ySkIkiL6hiRIDuYAroH7sd8ottXj1dryf6n/vdI="
      } ]
    }
  },
  "referencedAssets" : [ {
    "id" : "Eg82h+UU/rRKorf8f08HeKeoN4W431XsEJcxxJK+ZNc=",
    "decimals" : 0,
    "name" : "test"
  } ]
}
```
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
