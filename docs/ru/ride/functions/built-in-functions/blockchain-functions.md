# Функции блокчейна

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | [assetInfo](#assetinfo)(ByteVector): Аsset&#124;Unit | Получает информацию о [токене](/ru/blockchain/token/) | 100 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>15 для Стандартной библиотеки **версии 4** |
| 2 | [blockInfoByHeight](#blockinfobyheight)(Int): BlockInfo &#124;Unit | Получает информацию о [блоке](/ru/blockchain/block/) по [высоте блока](/ru/blockchain/block/block-height) | 100 для Стандартной библиотеки **версии 3**<br>5 для Стандартной библиотеки **версии 4** |
| 3 | [calculateAssetId](#calculateassetid)(Issue): ByteVector | Вычисляет ID ассета, созданного структурой [Issue](/ru/ride/structures/script-actions/issue) при выполнении [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction) | 10 |
| 4 | [transactionHeightById](#transactionheightbyid)(ByteVector):  Int&#124;Unit | Получает [высоту блока](/ru/blockchain/block/block-height) транзакции | 100 для Стандартной библиотеки **версии 3**<br>20 для Стандартной библиотеки **версии 4** |
| 5 | [transferTransactionById](#transfertransactionbyid)(ByteVector): TransferTransaction&#124;Unit | Получает данные [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction) | 100 для Стандартной библиотеки **версии 3**<br>60 для Стандартной библиотеки **версии 4** |

## assetInfo

Получает информацию о [токене](/ru/blockchain/token/).

```
assetInfo(id: ByteVector): Аsset|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `id`: ByteVector | ID [токена](/ru/blockchain/token/) |

### Пример

```
let bitcoinId = base58'8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS'
let x = match assetInfo(bitcoinId) {
    case asset:Asset =>
        asset.decimals # 8
    case _ => throw("Can't find asset")
}
```

## blockInfoByHeight

Получает информацию о [блоке](/ru/blockchain/block/) по [высоте блока](/ru/blockchain/block/block-height).

```
blockInfoByHeight(height: Int): BlockInfo|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `height`: Int | Высота блока. |

### Пример

```
let x = match blockInfoByHeight(1234567) {
    case block:BlockInfo =>
        block.generator.toString() # "3P38Z9aMhGKAWnCiyMW4T3PcHcRaTAmTztH"
    case _ => throw("Can't find block")
}
```

## calculateAssetId

Вычисляет ID ассета, созданного структурой [Issue](/ru/ride/structures/script-actions/issue) при выполнении [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction).

> :warning: Функция `calculateAssetId` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая доступна начиная с версии ноды 1.2.0 после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”.

```
calculateAssetId(issue: Issue): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `issue`: Issue | Структура, при помощи которой сформирован ассет. |

### Пример

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
 
// Результат:
//   {
//     "type": "string",
//     "value": "55jbTUxWkbLbfd6Z7Wy93DcyD7xikBg5GRDmccD4s8uv",
//     "key": "id"
//   }
```

## transactionHeightById

Получает [высоту блока](/ru/blockchain/block/block-height) транзакции.

```
transactionHeightById(id: ByteVector): Int|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `id`: ByteVector | ID транзакции. |

## transferTransactionById

Получает данные транзакции перевода.

```
transferTransactionById(id: ByteVector): TransferTransaction|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `id`: ByteVector | ID транзакции перевода. |

### Пример

```
let transferId = base58'J2rcMzCWCZ1P3SFZzvz9PR2NtBjomDh57HTcqptaAJHK'
let x = match transferTransactionById(transferId) {
    case ttx:TransferTransaction =>
        ttx.amount # 3500000000
    case _ => throw("Can't find transaction")
}
```
