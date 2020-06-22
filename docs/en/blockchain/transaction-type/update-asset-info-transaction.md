# Update Asset Info transaction

An **Update Asset Info transaction** — a [transaction](/en/blockchain/transaction/) that changes name and description of [asset](/en/blockchain/token/) issued before.

> The Update Asset Info transaction is added since node version 1.2.0, after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”. Versions 1.2.x are currently available on [Stagenet](/en/blockchain/blockchain-network/stage-network) only.

The asset name and/or description can be changed:
* on Mainnet and Testnet – after 100,000 or more blocks from the last change (or the asset issue);
* on Stagenet – after 10 or more blocks.

## JSON Representation

```json
{
  "senderPublicKey": "6a6r9d3r2ccyE9SvuxmdZbfSHXmKPUoExnigvippJLfu",
  "fee": 100000,
  "description": "xxxXXXxxx",
  "type": 17,
  "version": 1,
  "applicationStatus": "succeed",
  "sender": "3MQdH4MAmM5RNz5TAT43UXXCvMtCa9YgHq9",
  "feeAssetId": null,
  "chainId": 83,
  "proofs": [
    "4DfvJL4cVisQaMuMB7ar15EtYZTvTZzAUQQMkq4RA3uTMzziVYLrbNHSL2a1eCqBV3YQb7dddXdjywETXHuu65ij"
  ],
  "assetId": "syXBywr2HVY7wxqkaci1jKY73KMpoLh46cp1peJAZNJ",
  "name": "zzzz",
  "id": "4DL8K4bRvYb9Qrys9Auq7hSGuLGq8XsUYZqDDBBfVGMf",
  "timestamp": 1591886337668,
  "height": 411389
}
```

| Field | Description |
| :--- | :--- |
| name | Token name. From 4 to 16 bytes |
| description | Token description. From 0 to 1000 bytes |
| chainId | [Chain ID](/en/blockchain/blockchain-network/chain-id) |
| assetId | Base58 encoded token ID |

The fields that are common to all types of transactions are described in the [JSON Representation](/en/blockchain/transaction/#json-representation) section.

## Binary Format

See the [Update Asset Info Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/update-asset-info-transaction-binary-format).

## Ride Structure

The [UpdateAssetInfoTransaction](/en/ride/structures/transaction-structures/update-asset-info-transaction) structure is used for transaction handling in smart contracts.
