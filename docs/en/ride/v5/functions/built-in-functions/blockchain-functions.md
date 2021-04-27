# [Ride v5] Blockchain functions

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/functions/built-in-functions/blockchain-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [addressFromRecipient(Address&#124;Alias): Address](#address-from-recipient) | Gets the corresponding [address](/en/blockchain/account/address) of the [alias](/en/blockchain/account/alias) | 5 |
| [assetBalancе(Address&#124;Alias, ByteVector): Int](#assetbalance) | Gets account balance by token ID | 10 |
| [assetInfo(ByteVector): Аsset&#124;Unit](#assetinfo) | Gets the information about a [token](/en/blockchain/token/) | 15 |
| [blockInfoByHeight(Int): BlockInfo&#124;Unit](#blockinfobyheight) | Gets the information about a [block](/en/blockchain/block/) by the [block height](/en/blockchain/block/block-height) | 5 |
| [calculateAssetId(Issue): ByteVector](#calculateassetid) | Calculates ID of the token formed by the [Issue](/en/ride/v5/structures/script-actions/issue) structure when executing the [callable function](/en/ride/v5/functions/callable-function) | 10 |
| [calculateLeaseId(Lease): ByteVector](#calculateleaseid) | Calculates ID of the lease formed by the [Lease](/en/ride/v5/structures/script-actions/lease) structure when executing the callable function | 1 |
| [hashScriptAtAddress(Address&#124;Alias): ByteVector&#124;Unit](#hashscriptataddress) | Returns [BLAKE2b-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) hash of the script assigned to a given account | 200 |
| [transactionHeightById(ByteVector): Int&#124;Unit](#transactionheightbyid) | Gets the [block height](/en/blockchain/block/block-height) of a transaction | 20 |
| [transferTransactionById(ByteVector): TransferTransaction&#124;Unit](#transfertransactionbyid) | Gets the data of a transfer transaction | 60 |
| [wavesBalance(Address&#124;Alias): BalanceDetails](#waves-balance) | Gets account balance in [WAVES](/en/blockchain/token/waves) | 10 |

## addressFromRecipient(Address|Alias): Address<a id="address-from-recipient"></a>

Gets the corresponding [address](/en/blockchain/account/address) of the [alias](/en/blockchain/account/alias).

```ride
addressFromRecipient(AddressOrAlias: Address|Alias): Address
```

For a description of the return value, see the [Address](/en/ride/v5/structures/common-structures/address) article.

### Parameters

| Parameter | Description |
| :--- | :--- |
| AddressOrAlias: [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | 
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
| addressOrAlias: [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| assetId: [ByteVector](/en/ride/v5/data-types/byte-vector) | Token ID |

## assetInfo

Gets the information about a [token](/en/blockchain/token/).

```
assetInfo(id: ByteVector): Аsset|Unit
```

For a description of the return value, see the [Asset](/en/ride/v5/structures/common-structures/asset) article.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `id`: [ByteVector](/en/ride/v5/data-types/byte-vector) | ID of the [token](/en/blockchain/token/) |

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

For a description of the return value, see the [BlockInfo](/en/ride/v5/structures/common-structures/block-info) article.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `height`: [Int](/en/ride/v5/data-types/int) | Block height |

### Example

```
let x = match blockInfoByHeight(1234567) {
    case block:BlockInfo =>
        block.generator.toString() # "3P38Z9aMhGKAWnCiyMW4T3PcHcRaTAmTztH"
    case _ => throw("Can't find block")
}
```

## calculateAssetId

Calculates ID of the token formed by the [Issue](/en/ride/v5/structures/script-actions/issue) structure when executing the [callable function](/en/ride/v5/functions/callable-function).

```
calculateAssetId(issue: Issue): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `issue`: [Issue](/en/ride/v5/structures/script-actions/issue) | Structure that sets the parameters of the token issue |

### Example

```
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(inv)
func issueAndId() = {
  let issue = Issue("CryptoRouble", "Description", 1000, 2, true)
  let id = calculateAssetId(issue)
  (
    [
      issue,
      BinaryEntry("id", id)
    ],
    null
  )
}
```

<!--State Changes:

```json
{
  "data": [
    {
      "key": "id",
      "type": "binary",
      "value": "base64:iHAg1I7BMhvuW8+EPQdIRkyJFft45IJ6DxVZDEg+xdI="
    }
  ],
  "transfers": [],
  "issues": [
    {
      "assetId": "ABbcbRoJF4WaxiBCRr2xFiA1VgJ3a6FGrD68B4grkbmj",
      "name": "CryptoRouble",
      "description": "Description",
      "quantity": 1000,
      "decimals": 2,
      "isReissuable": true,
      "compiledScript": null,
      "nonce": 0,
      "money": {
        "amount": "10",
        "currency": {
          "id": "ABbcbRoJF4WaxiBCRr2xFiA1VgJ3a6FGrD68B4grkbmj",
          "displayName": "CryptoRouble",
          "shortName": "CryptoRouble",
          "precision": 2,
          "roundingMode": 4
        }
      }
    }
  ],
  "reissues": [],
  "burns": [],
  "sponsorFees": []
}
```
-->

## calculateLeaseId

Calculates ID of the lease formed by the [Lease](/en/ride/v5/structures/script-actions/lease) structure when executing the [callable function](/en/ride/v5/functions/callable-function).

```
calculateLeaseId(lease: Lease): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `lease`: [Lease](/en/ride/v5/structures/script-actions/lease) | Structure that sets the lease parameters |

### Example

```
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(i)
func foo() = {
  let lease = Lease(Alias("merry"),100000000)
  let id = calculateLeaseId(lease)
  (
    [
      lease,
      BinaryEntry("lease", id)
    ],
    null
  )
}
```

## hashScriptAtAddress

Returns [BLAKE2b-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) hash of the script assigned to a given account. Returns `unit` if there is no script.

The function can be used to verify that the script is exactly the same as expected.

```
hashScriptAtAddress(addressOrAlias: Address|Alias): ByteVector|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |

### Example

```scala
let addr = Address(base58'3MxBZbnN8Z8sbYjjL5N3oG5C8nWq9NMeCEm')

hashScriptAtAddress(addr) # Returns base58'G6ihnWN5mMedauCgNa8TDrSKWACPJKGQyYagmMQhPuja'
```

## transactionHeightById

Gets the [block height](/en/blockchain/block/block-height) of a transaction.

```
transactionHeightById(id: ByteVector): Int|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `id`: [ByteVector](/en/ride/v5/data-types/byte-vector) | ID of the transaction |

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

For a description of the return value, see the [TransferTransaction](/en/ride/v5/structures/transaction-structures/transfer-transaction) article.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `id`: [ByteVector](/en/ride/v5/data-types/byte-vector) | ID of the transfer transaction |

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

Gets all types of [WAVES](/en/blockchain/token/waves) balances. For description of balance types, see the [Account Balance](/en/blockchain/account/account-balance) article.

``` ride
wavesBalance(addressOrAlias: Address|Alias): BalanceDetails
```

For a description of the return value, see the [BalanceDetails](/en/ride/v5/structures/common-structures/balance-details) article.

### Parameters

| Parameter | Description |
| :--- | :--- |
| addressOrAlias: [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
