# [Ride v4 and v3] Blockchain functions

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/functions/built-in-functions/blockchain-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [addressFromRecipient(Address&#124;Alias): Address](#address-from-recipient) | Gets the corresponding [address](/en/blockchain/account/address) of the [alias](/en/blockchain/account/alias) | 100 for Standard Library **version 3**<br>5 for Standard Library **version 4** |
| [assetBalancе(Address&#124;Alias, ByteVector): Int](#asset-balance) | Gets account balance by token ID | 100 for [Standard Library](/en/ride/script/standard-library) **version 3**<br>10 for Standard Library **version 4** |
| [assetInfo(ByteVector): Аsset&#124;Unit](#assetinfo) | Gets the information about a [token](/en/blockchain/token/) | 100 for [Standard Library](/en/ride/script/standard-library) **version 3**<br>15 for Standard Library **version 4** |
| [blockInfoByHeight(Int): BlockInfo&#124;Unit](#blockinfobyheight) | Gets the information about a [block](/en/blockchain/block/) by the [block height](/en/blockchain/block/block-height) | 100 for Standard Library **version 3**<br>5 for Standard Library **version 4** |
| [calculateAssetId(Issue): ByteVector](#calculateassetid) | Calculates the ID of the asset, created by [Issue](/en/ride/v4/structures/script-actions/issue) structure during [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction) execution | 10 |
| [transactionHeightById(ByteVector): Int&#124;Unit](#transactionheightbyid) | Gets the [block height](/en/blockchain/block/block-height) of a transaction | 100 for Standard Library **version 3**<br>20 for Standard Library **version 4** |
| [transferTransactionById(ByteVector): TransferTransaction&#124;Unit](#transfertransactionbyid) | Gets the data of a transfer transaction | 100 for Standard Library **version 3**<br>60 for Standard Library **version 4** |
| [wavesBalance(Address&#124;Alias): BalanceDetails](#waves-balance) | Gets account balance in [WAVES](/en/blockchain/token/waves) | 100 for Standard Library **version 3**<br>10 for Standard Library **version 4** |

## addressFromRecipient(Address|Alias): Address<a id="address-from-recipient"></a>

Gets the corresponding [address](/en/blockchain/account/address) of the [alias](/en/blockchain/account/alias).

```ride
addressFromRecipient(AddressOrAlias: Address|Alias): Address
```

For a description of the return value, see the [Address](/en/ride/v4/structures/common-structures/address) article.

### Parameters

| Parameter | Description |
| :--- | :--- |
| AddressOrAlias: [Address](/en/ride/v4/structures/common-structures/address)&#124;[Alias](/en/ride/v4/structures/common-structures/alias) | 
Address or alias, usually tx.recipient |

### Examples

```ride
let address =Address(base58'3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF')
addressFromRecipient(address)
```

## assetBalance<a id="asset-balance"></a>

Gets account balance by token ID.

``` ride
assetBalance(addressOrAlias: Address|Alias, assetId: ByteVector): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| addressOrAlias: [Address](/en/ride/v4/structures/common-structures/address)&#124;[Alias](/en/ride/v4/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| assetId: [ByteVector](/en/ride/v4/data-types/byte-vector) | Token ID |

## assetInfo

Gets the information about a [token](/en/blockchain/token/).

```
assetInfo(id: ByteVector): Аsset|Unit
```

For a description of the return value, see the [Asset](/en/ride/v4/structures/common-structures/asset) article.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `id`: [ByteVector](/en/ride/v4/data-types/byte-vector) | ID of the [token](/en/blockchain/token/) |

### Example

```
let bitcoinId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
let x = match assetInfo(bitcoinId) {
    case asset:Asset =>
        asset.decimals # 8
    case _ => throw("Can't find asset")
}
```

## blockInfoByHeight

Gets the information about a [block](/en/blockchain/block/) by the [block height](/en/blockchain/block/block-height).

```
blockInfoByHeight(height: Int): BlockInfo|Unit
```

For a description of the return value, see the [BlockInfo](/en/ride/v4/structures/common-structures/block-info) article.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `height`: [Int](/en/ride/v4/data-types/int) | Block height |

### Example

```
let x = match blockInfoByHeight(1234567) {
    case block:BlockInfo =>
        block.generator.toString() # "3P38Z9aMhGKAWnCiyMW4T3PcHcRaTAmTztH"
    case _ => throw("Can't find block")
}
```

## calculateAssetId

Calculates the ID of the asset, created by [Issue](/en/ride/v4/structures/script-actions/issue) structure during [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction) execution.

> :warning: The `calculateAssetId` function is added in Standard library **version 4**.

```
calculateAssetId(issue: Issue): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `issue`: [Issue](/en/ride/v4/structures/script-actions/issue) | The structure by which the asset is formed |

### Example

```
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(inv)
func issueAndSend() = {
  let issue = Issue("CryptoRouble", "Description", 1000, 2, true)
  let id = calculateAssetId(issue)
  [
    issue,
    ScriptTransfer(inv.caller, issue.quantity, id),
    BinaryEntry("id", id)
  ]
}
 
// Result:
//   {
//     "type": "string",
//     "value": "55jbTUxWkbLbfd6Z7Wy93DcyD7xikBg5GRDmccD4s8uv",
//     "key": "id"
//   }
```

## transactionHeightById

Gets the [block height](/en/blockchain/block/block-height) of a transaction.

```
transactionHeightById(id: ByteVector): Int|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `id`: [ByteVector](/en/ride/v4/data-types/byte-vector) | ID of the transaction |

### Example

```
let bitcoinId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
let x = match transactionHeightById(bitcoinId) {
    case h:Int => h # 257457
    case _ => throw("Can't find transaction")
}
```

## transferTransactionById

Gets the data of a [transfer transaction](/en/blockchain/transaction-type/transfer-transaction).

```
transferTransactionById(id: ByteVector): TransferTransaction|Unit
```

For a description of the return value, see the [TransferTransaction](/en/ride/v4/structures/transaction-structures/transfer-transaction) article.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `id`: [ByteVector](/en/ride/v4/data-types/byte-vector) | ID of the transfer transaction |

### Example

```
let transferId = base58'J2rcMzCWCZ1P3SFZzvz9PR2NtBjomDh57HTcqptaAJHK'
let x = match transferTransactionById(transferId) {
    case ttx:TransferTransaction =>
        ttx.amount # 3500000000
    case _ => throw("Can't find transaction")
}
```

## wavesBalance<a id="waves-balance"></a>

### For Standard Library Version 3

Gets available balance of [WAVES](/en/blockchain/token/waves).

``` ride
wavesBalance(addressOrAlias: Address|Alias): Int
```

### For Standard Library Version 4

Gets all types of [WAVES](/en/blockchain/token/waves) balances. For description of balance types, see the [Account Balance](/en/blockchain/account/account-balance) article.

``` ride
wavesBalance(addressOrAlias: Address|Alias): BalanceDetails
```

For a description of the return value, see the [BalanceDetails](/en/ride/v4/structures/common-structures/balance-details) article.

### Parameters

| Parameter | Description |
| :--- | :--- |
| addressOrAlias: [Address](/en/ride/v4/structures/common-structures/address)&#124;[Alias](/en/ride/v4/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
