# Функции блокчейна

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | [assetInfo](#assetinfo)(ByteVector): Аsset&#124;Unit | Получает информацию о [токене](/ru/blockchain/token) | 100 |
| 2 | [blockInfoByHeight](#blockinfobyheight)(Int): BlockInfo &#124;Unit | Получает информацию о [блоке](/ru/blockchain/block) по [высоте блока](/ru/blockchain/block/block-height) | 100 |
| 3 | [calculateAssetId](#calculateassetid)(Issue): ByteVector | Вычисляет ID ассета, созданного структурой [Issue](/ru/ride/structures/common-structures/issue) при выполнении [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction) | 10 |
| 4 |  [groth16Verify](#groth16verify)_1inputs(ByteVector, ByteVector, ByteVector): Boolean] | Осуществляет проверку [снарка](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу [groth16](https://eprint.iacr.org/2016/260.pdf) | 1900 |
| 5 |  groth16Verify_2inputs(ByteVector, ByteVector, ByteVector): Boolean] | 〃 | 2000 |
| 6 |  groth16Verify_3inputs(ByteVector, ByteVector, ByteVector): Boolean] | 〃 | 2150 |
| 7 |  groth16Verify_4inputs(ByteVector, ByteVector, ByteVector): Boolean] | 〃 | 2300 |
| 8 |  groth16Verify_5inputs(ByteVector, ByteVector, ByteVector): Boolean] | 〃 | 2450 |
| 9 |  groth16Verify_6inputs(ByteVector, ByteVector, ByteVector): Boolean] | 〃 | 2550 |
| 10 |  groth16Verify_7inputs(ByteVector, ByteVector, ByteVector): Boolean] | 〃 | 2700 |
| 11 |  groth16Verify_8inputs(ByteVector, ByteVector, ByteVector): Boolean] | 〃 | 2900 |
| 12 |  groth16Verify_9inputs(ByteVector, ByteVector, ByteVector): Boolean] | 〃 | 3000 |
| 13 |  groth16Verify_10inputs(ByteVector, ByteVector, ByteVector): Boolean] | 〃 | 3150 |
| 14 |  groth16Verify_11inputs(ByteVector, ByteVector, ByteVector): Boolean] | 〃 | 3250 |
| 15 |  groth16Verify_12inputs(ByteVector, ByteVector, ByteVector): Boolean] | 〃 | 3400 |
| 16 |  groth16Verify_13inputs(ByteVector, ByteVector, ByteVector): Boolean] | 〃 | 3500 |
| 17 |  groth16Verify_14inputs(ByteVector, ByteVector, ByteVector): Boolean] | 〃 | 3650 |
| 18 |  groth16Verify_15inputs(ByteVector, ByteVector, ByteVector): Boolean] | 〃 | 3750 |
| 19 |  groth16Verify(ByteVector, ByteVector, ByteVector): Boolean] | 〃 | 3900 |
| 20 | [transactionHeightById](#transactionheightbyid)(ByteVector):  Int&#124;Unit | Получает [высоту блока](/ru/blockchain/block/block-height) транзакции | 100 |
| 21 | [transferTransactionById](#transfertransactionbyid)(ByteVector): TransferTransaction&#124;Unit | Получает данные [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction) | 100 |

## assetInfo

Получает информацию о [токене](/ru/blockchain/token).

```
assetInfo(id: ByteVector): Аsset|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `id`: ByteVector | ID [токена](/ru/blockchain/token) |

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

Получает информацию о [блоке](/ru/blockchain/block) по [высоте блока](/ru/blockchain/block/block-height).

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

Вычисляет ID ассета, созданного структурой [Issue](/ru/ride/structures/common-structures/issue) при выполнении [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction).

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

## groth16Verify

Осуществляет проверку [снарка](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу [groth16](https://eprint.iacr.org/2016/260.pdf).

> :warning: Семейство функций `groth16Verify` появилось в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

```
groth16Verify_1inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_2inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_3inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_4inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_5inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_6inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_7inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_8inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_9inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_10inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_11inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_12inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_13inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_14inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_15inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `vk`: ByteVector | Ключ для проверки. |
| `proof`: ByteVector | [Доказательство с нулевым разглашением](https://ru.wikipedia.org/wiki/Доказательство_с_нулевым_разглашением). |
| `inputs`: ByteVector | Массив публичных входов доказательства с нулевым разглашением.<br>Максимальный размер:<br>• Для функций `groth16Verify_<N>inputs` — не более 32 × `N` байт.<br>• Для функции `groth16Verify_<N>inputs`— не более 512 байт. |

### Пример

```
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
 
groth16Verify(vk, proof, inputs)
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
