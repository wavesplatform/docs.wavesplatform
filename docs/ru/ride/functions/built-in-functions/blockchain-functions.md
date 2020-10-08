# Функции блокчейна

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [addressFromRecipient(Address&#124;Alias): Address](#address-from-recipient) | Получает [адрес](/ru/blockchain/account/address), соответствующий [псевдониму](/ru/blockchain/account/alias) | 100 для Стандартной библиотеки **версии 3**<br>5 для Стандартной библиотеки **версии 4** |
| [assetInfo](#assetinfo)(ByteVector): Аsset&#124;Unit | Получает информацию о [токене](/ru/blockchain/token/) | 100 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>15 для Стандартной библиотеки **версии 4** |
| [blockInfoByHeight](#blockinfobyheight)(Int): BlockInfo &#124;Unit | Получает информацию о [блоке](/ru/blockchain/block/) по [высоте блока](/ru/blockchain/block/block-height) | 100 для Стандартной библиотеки **версии 3**<br>5 для Стандартной библиотеки **версии 4** |
| [calculateAssetId](#calculateassetid)(Issue): ByteVector | Вычисляет ID ассета, созданного структурой [Issue](/ru/ride/structures/script-actions/issue) при выполнении [вызываемой функции](/ru/ride/functions/callable-function) | 10 |
| [calculateLeaseId](#calculateleaseid)(Issue): ByteVector | Вычисляет ID ассета, созданного структурой [Lease](/ru/ride/structures/script-actions/lease) при выполнении вызываемой функции | 10 |
| [transactionHeightById](#transactionheightbyid)(ByteVector):  Int&#124;Unit | Получает [высоту блока](/ru/blockchain/block/block-height) транзакции | 100 для Стандартной библиотеки **версии 3**<br>20 для Стандартной библиотеки **версии 4** |
| [transferTransactionById](#transfertransactionbyid)(ByteVector): TransferTransaction&#124;Unit | Получает данные [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction) | 100 для Стандартной библиотеки **версии 3**<br>60 для Стандартной библиотеки **версии 4** |

## addressFromRecipient(Address&#124;Alias): Address<a id="address-from-recipient"></a>

Получает [адрес](/ru/blockchain/account/address), соответствующий [псевдониму](/ru/blockchain/account/alias).

```ride
addressFromRecipient(AddressOrAlias: Address|Alias): Address
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `AddressOrAlias`: [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | Адрес или псевдоним, обычно получателя транзакции |

### Примеры

```ride
let address =Address(base58'3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF')
addressFromRecipient(address)
```

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

Вычисляет ID ассета, созданного структурой [Issue](/ru/ride/structures/script-actions/issue) при выполнении [вызываемой функции](/ru/ride/functions/callable-function).

> :warning: Функция `calculateAssetId` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**.

```
calculateAssetId(issue: Issue): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `issue`: [Issue](/ru/ride/structures/script-actions/issue) | Структура, задающая параметры выпуска токена |

### Пример

```
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(inv)
func issueAndId() = {
  let issue = Issue("CryptoRouble", "Description", 1000, 2, true)
  let id = calculateAssetId(issue)
  [
    issue,
    ScriptTransfer(inv.caller, issue.quantity, id),
    BinaryEntry("id", id)
  ]
}
```

Изменения на блокчейне:

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

## calculateLeaseId

Вычисляет ID лизинга, созданного структурой [Issue](/ru/ride/structures/script-actions/issue) при выполнении [вызываемой функции](/ru/ride/functions/callable-function).

> :warning: Функция `calculateLeaseId` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 5**, которая в настоящее время доступна только на Stagenet.

```
calculateLeaseId(lease: Lease): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `lease`: [Lease](/ru/ride/structures/script-actions/lease) | Структура, задающая параметры лизинга |

### Пример

```
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(i)
func foo() = {
  let lease = Lease(Alias("merry"),100000000)
  let id = calculateLeaseId(lease)
  [
    lease,
    BinaryEntry("lease", id)
  ]
}
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
