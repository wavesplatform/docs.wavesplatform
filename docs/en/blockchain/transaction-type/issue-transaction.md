# Issue transaction

An **issue transaction** is a [transaction](/en/blockchain/transaction/) that [issues token](/en/blockchain/token/).

## Issue of NFT <a id="nft"></a>

The issue of an [NFT](/en/blockchain/token/non-fungible-token) is made by an issue transaction that has the "Amount" field equal 1, and the "Number of decimal places" and "Reissue flag" fields equal 0.

The fee for the issue of a single NFT is 0.001 [WAVES](/en/blockchain/token/waves).

To issue NFTs you can use the [waves-games](https://www.npmjs.com/package/@waves/waves-games) npm package.

## JSON Representation

```json
{
  "senderPublicKey": "2M25DqL2W4rGFLCFadgATboS8EPqyWAN3DjH12AH5Kdr",
  "quantity": 50000,
  "fee": 100000000,
  "description": "Script true.",
  "type": 3,
  "version": 2,
  "reissuable": true,
  "script": "base64:AQa3b8tH",
  "sender": "3Mz9N7YPfZPWGd4yYaX6H53Gcgrq6ifYiH7",
  "feeAssetId": null,
  "chainId": 84,
  "proofs": [
    "4yjVxzrLuXUq5y2QCa2LDn1Fp9P63hPBmqDLGQCqn41EB1uZ1pys79NP81h7FxRBnZSbpNGbz1xjwckHcPAQHmFX"
  ],
  "assetId": "7Xpp9PPeZbG4wboJrcbRQdq3SxCJqbeFRUjjKccM1DsD",
  "decimals": 2,
  "name": "Smart",
  "id": "7Xpp9PPeZbG4wboJrcbRQdq3SxCJqbeFRUjjKccM1DsD",
  "timestamp": 1548653407494,
  "height": 469677
}
```

| Field | Description |
| :--- | :--- |
| name | Token name. From 4 to 16 bytes (1 character can take up to 4 bytes) |
| description | Token description. From 0 to 1000 bytes |
| quantity | Token quantity: an integer value specified in the minimum fraction (“cents”), that is, the real quantity multiplied by 10<sup>decimals</sup>. From 1 to 9&nbsp;223&nbsp;372&nbsp;036&nbsp;854&nbsp;775&nbsp;807 |
| decimals | Number of decimal places, from 0 to 8 |
| reissuable | Reissue availability flag, see the [Reissue Transaction](/en/blockchain/transaction-type/reissue-transaction) article |
| script | For the [smart asset](/en/blockchain/token/smart): the compiled [asset script](/en/ride/script/script-types/asset-script), up to 8192 bytes, base64 encoded.<br>For token without a script: `null`. Token issued without a script cannot be converted to a smart asset |
| chainId | [Chain ID](/en/blockchain/blockchain-network/chain-id) |
| *assetId* | Base58 encoded token ID. The token ID is the same as the issue transaction ID |

The `assetId` field is not needed when sending a transaction, and it is not stored on the blockchain. The node calculates this field when providing transaction data via the REST API.

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Issue Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/issue-transaction-binary-format).

## Ride Structure

The [IssueTransaction](/en/ride/structures/transaction-structures/issue-transaction) structure is used for transaction handling in smart contracts.
