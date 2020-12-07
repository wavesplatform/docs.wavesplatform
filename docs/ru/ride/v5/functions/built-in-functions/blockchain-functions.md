# Функции блокчейна

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [addressFromRecipient(Address&#124;Alias): Address](#address-from-recipient) | Получает [адрес](/ru/blockchain/account/address), соответствующий [псевдониму](/ru/blockchain/account/alias) | 100 для Стандартной библиотеки **версии 3**<br>5 для Стандартной библиотеки **версии 4** |
| [assetBalancе(Address&#124;Alias, ByteVector): Int](#asset-balance)  | Получает баланс аккаунта по ID токена | 100 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [assetInfo](#assetinfo)(ByteVector): Аsset&#124;Unit | Получает информацию о [токене](/ru/blockchain/token/) | 100 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>15 для Стандартной библиотеки **версии 4** |
| [blockInfoByHeight](#blockinfobyheight)(Int): BlockInfo &#124;Unit | Получает информацию о [блоке](/ru/blockchain/block/) по [высоте блока](/ru/blockchain/block/block-height) | 100 для Стандартной библиотеки **версии 3**<br>5 для Стандартной библиотеки **версии 4** |
| [calculateAssetId](#calculateassetid)(Issue): ByteVector | Вычисляет ID ассета, созданного структурой [Issue](/ru/ride/structures/script-actions/issue) при выполнении [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction) | 10 |
| [transactionHeightById](#transactionheightbyid)(ByteVector):  Int&#124;Unit | Получает [высоту блока](/ru/blockchain/block/block-height) транзакции | 100 для Стандартной библиотеки **версии 3**<br>20 для Стандартной библиотеки **версии 4** |
| [transferTransactionById](#transfertransactionbyid)(ByteVector): TransferTransaction&#124;Unit | Получает данные [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction) | 100 для Стандартной библиотеки **версии 3**<br>60 для Стандартной библиотеки **версии 4** |
| [wavesBalance(Address&#124;Alias): Int](#waves-balance) | Получает баланс аккаунта в [WAVES](/ru/blockchain/token/waves) | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |

## addressFromRecipient(Address&#124;Alias): Address<a id="address-from-recipient"></a>

Получает [адрес](/ru/blockchain/account/address), соответствующий [псевдониму](/ru/blockchain/account/alias).

```ride
addressFromRecipient(AddressOrAlias: Address|Alias): Address
```

Описание возвращаемой структуры см. в разделе [Address](/ru/ride/structures/common-structures/address).

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `AddressOrAlias`: [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | Адрес или псевдоним, обычно получателя транзакции |

### Примеры

```ride
let address =Address(base58'3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF')
addressFromRecipient(address)
```
## assetBalance

Получает баланс аккаунта по ID токена.

``` ride
assetBalance(addressOrAlias: Address|Alias, assetId: ByteVector): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `assetId`: [ByteVector](/ru/ride/data-types/byte-vector) | ID токена |

## assetBalance <a id="asset-balance"></a>

Получает баланс аккаунта по ID токена.

``` ride
assetBalance(addressOrAlias: Address|Alias, assetId: ByteVector): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `assetId`: [ByteVector](/ru/ride/data-types/byte-vector) | ID токена |

## assetInfo

Получает информацию о [токене](/ru/blockchain/token/).

```
assetInfo(id: ByteVector): Аsset|Unit
```

Описание возвращаемой структуры см. в разделе [Asset](/ru/ride/structures/common-structures/asset).

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `id`: [ByteVector](/ru/ride/data-types/byte-vector) | ID [токена](/ru/blockchain/token/) |

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

Описание возвращаемой структуры см. в разделе [BlockInfo](/ru/ride/structures/common-structures/block-info).

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `height`: [Int](/ru/ride/data-types/int) | Высота блока |

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

> :warning: Функция `calculateAssetId` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**.

```
calculateAssetId(issue: Issue): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `issue`: [Issue](/ru/ride/structures/script-actions/issue) | Структура, при помощи которой сформирован ассет |

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
| `id`: [ByteVector](/ru/ride/data-types/byte-vector) | ID транзакции |

## transferTransactionById

Получает данные транзакции перевода.

```
transferTransactionById(id: ByteVector): TransferTransaction|Unit
```

Описание возвращаемой структуры см. в разделе [TransferTransaction](/ru/ride/structures/transaction-structures/transfer-transaction).

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `id`: [ByteVector](/ru/ride/data-types/byte-vector) | ID транзакции перевода |

### Пример

```
let transferId = base58'J2rcMzCWCZ1P3SFZzvz9PR2NtBjomDh57HTcqptaAJHK'
let x = match transferTransactionById(transferId) {
    case ttx:TransferTransaction =>
        ttx.amount # 3500000000
    case _ => throw("Can't find transaction")
}
```

## wavesBalance: Int<a id="waves-balance"></a>

### В Стандартной библиотеке версии 3

Возвращает доступный баланс [WAVES](/ru/blockchain/token/waves) аккаунта.

``` ride
wavesBalance(addressOrAlias: Address|Alias): Int
```

### В Стандартной библиотеке версии 4

Возвращает все виды баланса [WAVES](/ru/blockchain/token/waves) аккаунта. О видах баланса см. в разделe [Баланс аккаунта](/ru/blockchain/account/account-balance).

``` ride
wavesBalance(addressOrAlias: Address|Alias): BalanceDetails
```

Описание возвращаемой структуры см. в разделе [BalanceDetails](/ru/ride/structures/common-structures/balance-details).

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
