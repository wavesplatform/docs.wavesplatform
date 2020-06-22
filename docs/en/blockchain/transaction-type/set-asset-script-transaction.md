# Set asset script transaction

A **set asset script transaction** is a [transaction](/en/blockchain/transaction/) that attaches an [asset script](/en/ride/script/script-types/asset-script) to the [token](/en/blockchain/token/).

## JSON Representation

```json
{
  "senderPublicKey": "AwQYJRHZNd9bvF7C13uwnPiLQfTzvDFJe7DTUXxzrGQS",
  "fee": 100000000,
  "type": 15,
  "version": 1,
  "script": "base64:AQa3b8tH",
  "sender": "3P67JUW8Djit7hMjKhADmn6CWvKPbRuh2sQ",
  "feeAssetId": null,
  "chainId": 87,
  "proofs": [
    "nzYhVKmRmd7BiFDDfrFVnY6Yo98xDGsKrBLWentF7ibe4P9cGWg4RtomHum2NEMBhuyZb5yjThcW7vsCLg7F8NQ"
  ],
  "assetId": "7qJUQFxniMQx45wk12UdZwknEW9cDgvfoHuAvwDNVjYv",
  "id": "FwYSpmVDbWQ2BA5NCBZ9z5GSjY39PSyfNZzBayDiMA88",
  "timestamp": 1547201038106,
  "height": 1346345
}
```

| Field | Description |
| :--- | :--- |
| assetId | Base58 encoded token ID |
| chainId | [Chain ID](/en/blockchain/blockchain-network/chain-id) |
| script | The compiled [asset script](/en/ride/script/script-types/asset-script), up to 8192 bytes, base64 encoded |

The fields that are common to all types of transactions are described in the [Transaction](/en/blockchain/transaction/#json-representation) article.

## Binary Format

See the [Set Asset Script Transaction Binary Format](/en/blockchain/binary-format/transaction-binary-format/set-asset-script-transaction-binary-format).

## Ride Structure

The [SetAssetScriptTransaction](/en/ride/structures/transaction-structures/set-asset-script-transaction) structure is used for transaction handling in smart contracts.
