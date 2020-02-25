# Функции блокчейна

|   #   | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
|   1  | [assetInfo(ByteVector): Аsset&#124;Unit](#asset-info) | Получает информацию о [токене](/ru/blockchain/token) | 100 |
|   2  | [blockInfoByHeight(Int): BlockInfo&#124;Unit](#block-info-by-height) | Получает информацию о [блоке](/ru/blockchain/block) по [высоте блока](/ru/blockchain/block/block-height) | 100 |
|   3  | [calculateAssetId(Issue): ByteVector](#calculate) | Вычисляет ID ассета, созданного структурой [Issue](/ru/ride/structures/common-structures/issue) при выполнении [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction) | 10 |
|   4  |  [groth16Verify(ByteVector, ByteVector, ByteVector): Boolean](#groth) | Осуществляет проверку [снарка](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу [groth16](https://eprint.iacr.org/2016/260.pdf) | 1900 |
|   5  | [transactionHeightById(ByteVector): Int&#124;Unit](#transaction-height-by-id) | Получает [высоту блока](/ru/blockchain/block/block-height) транзакции | 100 |
|   6  | [transferTransactionById(ByteVector): TransferTransaction&#124;Unit](#transfer-transaction-by-id) | Получает данные [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction) | 100 |

## assetInfo(ByteVector): Аsset|Unit<a id="asset-info"></a>

Получает информацию о [токене](/ru/blockchain/token).

```
assetInfo(id: ByteVector): Аsset|Unit
```

### Параметры

#### `id`: ByteVector

ID [токена](/ru/blockchain/token).

### Пример

```
let bitcoinId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
let x = match assetInfo(bitcoinId) {
    case asset:Asset =>
        asset.decimals # 8
    case _ => throw("Can't find asset")
}
```

## blockInfoByHeight(Int): BlockInfo|Unit<a id="block-info-by-height"></a>

Получает информацию о [блоке](/ru/blockchain/block) по [высоте блока](/ru/blockchain/block/block-height).

```
blockInfoByHeight(height: Int): BlockInfo|Unit
```

### Параметры

#### `height`: Int

Высота блока.

### Пример

```
let x = match blockInfoByHeight(1234567) {
    case block:BlockInfo =>
        block.generator.toString() # "3P38Z9aMhGKAWnCiyMW4T3PcHcRaTAmTztH"
    case _ => throw("Can't find block")
}
```

## calculateAssetId(Issue): ByteVector <a id="calculate"></a>

Вычисляет ID ассета, созданного структурой [Issue](/ru/ride/structures/common-structures/issue) при выполнении [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction).

```
calculateAssetId(issue: Issue): ByteVector
```

### Параметры

#### `issue`: Issue

Структура, при помощи которой сформирован ассет.

### Пример

```
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(inv)
func issueAndSend() = {
  let issue = Issue(unit, "CryptoRouble", "Description", 1000, 2, true, 0)
  let id = calculateAssetId(issue)
  [
    issue,
    ScriptTransfer(inv.caller, issue.quantity, id),
    BinaryEntry("id", id)
  ]
}
 
// Результат:
//   {
//     "type": "string",
//     "value": "55jbTUxWkbLbfd6Z7Wy93DcyD7xikBg5GRDmccD4s8uv",
//     "key": "id"
//   }
```

## groth16Verify(ByteVector, ByteVector, ByteVector): Boolean
 <a id="groth"></a>

Осуществляет проверку [снарка](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу [groth16](https://eprint.iacr.org/2016/260.pdf) | 1900.

```
groth16Verify(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
```

### Параметры

#### `vk`: ByteVector

Ключ для проверки.

#### `proof`: ByteVector

[Доказательство с нулевым разглашением](https://ru.wikipedia.org/wiki/Доказательство_с_нулевым_разглашением).

#### `inputs`: ByteVector

Массив публичных входов доказательства с нулевым разглашением.

### Пример

```
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
 
groth16Verify(vk, proof, inputs)
```

## transactionHeightById(ByteVector): Int|Unit<a id="transaction-height-by-id"></a>

Получает [высоту блока](/ru/blockchain/block/block-height) транзакции.

```
transactionHeightById(id: ByteVector): Int|Unit
```

### Параметры

#### `id`: ByteVector

ID транзакции.

## transferTransactionById(ByteVector): TransferTransaction|Unit<a id="transfer-transaction-by-id"></a>

Получает данные транзакции перевода.

```
transferTransactionById(id: ByteVector): TransferTransaction|Unit
```

### Параметры

#### `id`: ByteVector

ID транзакции перевода.

### Пример

```
let transferId = base58'J2rcMzCWCZ1P3SFZzvz9PR2NtBjomDh57HTcqptaAJHK'
let x = match transferTransactionById(transferId) {
    case ttx:TransferTransaction =>
        ttx.amount # 3500000000
    case _ => throw("Can't find transaction")
}
```
