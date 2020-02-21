# Blockchain functions

|   #  | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
|   1  | [assetInfo(ByteVector): Аsset&#124;Unit](#asset-info) | Gets the information about a [token](/en/blockchain/token) | 100 |
|   2  | [blockInfoByHeight(Int): BlockInfo&#124;Unit](#block-info-by-height) | Gets the information about a [block](/en/blockchain/block) by the [block height](/en/blockchain/block/block-height) | 100 |
|   3  |  [groth16Verify(ByteVector, ByteVector, ByteVector): Boolean](#groth) | Checks [snark](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) by [groth16](https://eprint.iacr.org/2016/260.pdf) protocol | 1900 |
|   4  | [transactionHeightById(ByteVector): Int&#124;Unit](#transaction-height-by-id) | Gets the [block height](/en/blockchain/block/block-height) of a transaction | 100 |
|   5  | [transferTransactionById(ByteVector): TransferTransaction&#124;Unit](#transfer-transaction-by-id) | Gets the data of a transfer transaction | 100 |

## assetInfo(ByteVector): Аsset|Unit<a id="asset-info"></a>

Gets the information about a [token](/en/blockchain/token).

```
assetInfo(id: ByteVector): Аsset|Unit
```

### Parameters

#### `id`: ByteVector

ID of the [token](/en/blockchain/token).

## blockInfoByHeight(Int): BlockInfo|Unit<a id="block-info-by-height"></a>

Gets the information about a [block](/en/blockchain/block) by the [block height](/en/blockchain/block/block-height).

```
blockInfoByHeight(height: Int): BlockInfo|Unit
```

### Parameters

#### `height`: Int

Block height.

## groth16Verify(ByteVector, ByteVector, ByteVector): Boolean
 <a id="groth"></a>

Checks [snark](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) by [groth16](https://eprint.iacr.org/2016/260.pdf) protocol.

```
groth16Verify(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
```

### Parameters

#### `vk`: ByteVector

Key for the check.

#### `proof`: ByteVector

[Zero-knowledge proof](https://en.wikipedia.org/wiki/Zero-knowledge_proof).

#### `inputs`: ByteVector

Zero-knowledge proof's public inputs array.

### Example

```
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
 
groth16Verify(vk, proof, inputs)
```

## transactionHeightById(ByteVector): Int|Unit<a id="transaction-height-by-id"></a>

Gets the [block height](/en/blockchain/block/block-height) of a transaction

```
transactionHeightById(id: ByteVector): Int|Unit
```

### Parameters

#### `id`: ByteVector

ID of the transaction.

## transferTransactionById(ByteVector): TransferTransaction|Unit<a id="transfer-transaction-by-id"></a>

Gets the data of a [transfer transaction](/en/blockchain/transaction-type/transfer-transaction).

```
transferTransactionById(id: ByteVector): TransferTransaction|Unit
```

### Parameters

#### `id`: ByteVector

ID of the transfer transaction.
