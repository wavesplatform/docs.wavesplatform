# Функции блокчейна

|   #   | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
|   1  | [assetInfo(ByteVector): Аsset&#124;Unit](#asset-info) | Получает информацию о [токене](/ru/blockchain/token) | 100 |
|   2  | [blockInfoByHeight(Int): BlockInfo&#124;Unit](#block-info-by-height) | Получает информацию о [блоке](/ru/blockchain/block) по [высоте блока](/ru/blockchain/block/block-height) | 100 |
|   3  | [transactionHeightById(ByteVector): Int&#124;Unit](#transaction-height-by-id) | Получает [высоту блока](/ru/blockchain/block/block-height) транзакции | 100 |
|   4  | [transferTransactionById(ByteVector): TransferTransaction&#124;Unit](#transfer-transaction-by-id) | Получает данные [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction) | 100 |

## assetInfo(ByteVector): Аsset|Unit<a id="asset-info"></a>

Получает информацию о [токене](/ru/blockchain/token).

```
assetInfo(id: ByteVector): Аsset|Unit
```

### Параметры

#### `id`: ByteVector

ID [токена](/ru/blockchain/token).

## blockInfoByHeight(Int): BlockInfo|Unit<a id="block-info-by-height"></a>

Получает информацию о [блоке](/ru/blockchain/block) по [высоте блока](/ru/blockchain/block/block-height).

```
blockInfoByHeight(height: Int): BlockInfo|Unit
```

### Параметры

#### `height`: Int

Высота блока.

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
