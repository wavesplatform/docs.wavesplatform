# [Ride v5] Функции конвертации

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/functions/built-in-functions/converting-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [addressFromPublicKey(ByteVector): Address](#address-from-public-key) | Получает [адрес](/ru/blockchain/account/address), соответствующий открытому ключу аккаунта | 63 |
| [parseInt(String): Int&#124;Unit](#parse-int) | Конвертирует строковое представление числа в эквивалентное целое число | 2 |
| [parseIntValue(String): Int](#parse-int-value) | Конвертирует строковое представление числа в эквивалентное целое число.<br>Завершается ошибкой, если строка не может быть спарсена | 2 |
| [toBytes(Boolean): ByteVector](#to-bytes-boolean) | Конвертирует логическое значение в массив байтов | 1 |
| [toBytes(Int): ByteVector](#to-bytes-int) | Конвертирует целое число в массив байтов | 1 |
| [toBytes(String): ByteVector](#to-bytes-string) | Конвертирует строку в массив байтов | 8 |
| [toInt(ByteVector): Int](#to-int-bytevector) | Конвертирует массив байтов в целое число | 1 |
| [toInt(ByteVector, Int): Int](#to-int-bytevector-int) | Конвертирует массив байтов начиная с указанного индекса в целое число | 1 |
| [toString(Address): String](#to-string-address) | Конвертирует массив байтов [адреса](/ru/blockchain/account/address) в строку | 10 |
| [toString(Boolean): String](#to-string-boolean) | Конвертирует логическое значение в строку | 1 |
| [toString(Int): String](#to-string-int) | Конвертирует целое число в строку | 1 |
| [toUtf8String(ByteVector): String](#to-utf8-string-bytevector) | Конвертирует массив байтов в строку в [UTF-8](https://ru.wikipedia.org/wiki/UTF-8) | 7 |
| [transferTransactionFromProto(ByteVector): TransferTransaction&#124;Unit](#transfertransactionfromproto) | Десериализует транзакцию перевода | 5 |


## addressFromPublicKey(ByteVector): Address<a id="address-from-public-key"></a>

Получает [адрес](/ru/blockchain/account/address), соответствующий открытому ключу аккаунта.

```ride
addressFromPublicKey(publicKey: ByteVector): Address
```

Описание возвращаемой структуры см. в разделе [Address](/ru/ride/v5/structures/common-structures/address).

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `publicKey`: [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ для конвертации |

### Примеры

```ride
let address = addressFromPublicKey(base58'J1t6NBs5Hd588Dn7mAPytqkhgeBshzv3zecScfFJWE2D')
```

## parseInt(String): Int&#124;Unit<a id="parse-int"></a>

Конвертирует строковое представление числа в эквивалентное целое число.

```ride
parseInt(str: String): Int|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `str`: [String](/ru/ride/v5/data-types/string) | Строка для конвертации |

### Примеры

```ride
parseInt("10") # Возвращает 10
parseInt("010") # Возвращает 10
parseInt("Ride") # Возвращает Unit
parseInt("10.30") # Возвращает Unit
```

## parseIntValue(String): Int<a id="parse-int-value"></a>

Конвертирует строковое представление числа в эквивалентное целое число.

Завершается ошибкой, если строка не может быть сконвертирована.

```ride
parseIntValue(str: String): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `str`: [String](/ru/ride/v5/data-types/string) | Строка для конвертации |

### Примеры

``` ride
parseIntValue("10") # Возвращает 10
parseIntValue("010") # Возвращает 10
parseIntValue("Ride") # Ошибка при разборе строки на целое число
parseIntValue("10.30") # Ошибка при разборе строки на целое число
parseIntValue("20 WAVES") # Ошибка при разборе строки на целое число
```

## toBytes(Boolean): ByteVector<a id="to-bytes-boolean"></a>

Конвертирует логическое значение в массив байтов.

``` ride
toBytes(b: Boolean): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `b`: [Boolean](/ru/ride/v5/data-types/boolean) | Логическое значение для конвертации |

### Примеры

```ride
toBytes(true) # Возвращает 2
toBytes(false) # Возвращает 1
```

## toBytes(Int): ByteVector<a id="to-bytes-int"></a>

Конвертирует целое число в массив байтов.

``` ride
toBytes(n: Int): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `n`: [Int](/ru/ride/v5/data-types/int) | Целое число для конвертации |

### Примеры

```ride
toBytes(10) # Возвращает 1111111B
```

## toBytes(String): ByteVector<a id="to-bytes-string"></a>

Конвертирует строку в массив байтов.

```ride
toBytes(s: String): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `s`: [String](/ru/ride/v5/data-types/string) | Строка для конвертации |

### Примеры

``` ride
toBytes("Ride") # Возвращает 37BPKA
```

## toInt(ByteVector): Int<a id="to-int-bytevector"></a>

Конвертирует массив байтов в целое число.

```ride
toInt(bin: ByteVector): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `bin`: [ByteVector](/ru/ride/v5/data-types/byte-vector) | Массив байтов для конвертации |

### Примеры

``` ride
toInt(bytes) # Возвращает 10
```

## toInt(ByteVector, Int): Int<a id="to-int-bytevector-int"></a>

Конвертирует массив байтов начиная с указанного индекса в целое число.

```ride
toInt(bin: ByteVector, offset: Int): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `bin`: [ByteVector](/ru/ride/v5/data-types/byte-vector) | Массив байтов для конвертации |
| `offset`: [Int](/ru/ride/v5/data-types/int) | Индекс |

### Примеры

``` ride
let bytes = toBytes("Ride on Waves")
toInt(bytes, 2) # Возвращает 7234224039401641825
toInt(bytes, 6) # Индекс за пределами границ
```

## toString(Address): String<a id="to-string-address"></a>

Конвертирует массив байтов [адреса](/ru/blockchain/account/address) в строку.

``` ride
toString(Address: Address): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `Address`: [Address](/ru/ride/v5/structures/common-structures/address) | Адрес для конвертации |

### Примеры

``` ride
let address =Address(base58'3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF')
toString(address) # Возвращает "3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF"
```

## toString(Boolean): String<a id="to-string-boolean"></a>

Конвертирует логическое значение в строку.

``` ride
toString(b: Boolean): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `b`: [Boolean](/ru/ride/v5/data-types/boolean) | Логическое значение для конвертации |

### Примеры

``` ride
toString(true) # Возвращает "true"
toString(false) # Возвращает "false"
```

## toString(Int): String<a id="to-string-int"></a>

Конвертирует целое число в строку.

``` ride
toString(n: Int): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `n`: [Int](/ru/ride/v5/data-types/int) | Целое число для конвертации |

### Примеры

``` ride
toString(10) # Возвращает "10"
```

## toUtf8String(ByteVector): String<a id="to-utf8-string-bytevector"></a>

Конвертирует массив байтов в строку в [UTF-8](https://ru.wikipedia.org/wiki/UTF-8).

``` ride
toUtf8String(u: ByteVector): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `u`: [ByteVector](/ru/ride/v5/data-types/byte-vector) | Массив байтов для конвертации |

### Примеры

``` ride
let bytes = toBytes("Ride on Waves")
toUtf8String(bytes) # Возвращает "Ride on Waves"
```

## transferTransactionFromProto

Десериализует транзакцию перевода: конвертирует [бинарный формат](/ru/blockchain/binary-format/transaction-binary-format/transfer-transaction-binary-format) в структуру [TransferTransaction](/ru/ride/v5/structures/transaction-structures/transfer-transaction). Бинарный формат должен соответствовать [protobuf-схеме](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto). В случае если конвертация не удалась, возвращает значение `unit`.

```ride
transferTransactionFromProto(b: ByteVector): TransferTransaction|Unit
```

Описание возвращаемой структуры см. в разделе [TransferTransaction](/ru/ride/v5/structures/transaction-structures/transfer-transaction).

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `b`: [ByteVector](/ru/ride/v5/data-types/byte-vector) | Транзакция перевода в бинарном формате на основе protobuf |

### Примеры

```ride
let transfer = base64'Cr4BCFQSIA7SdnwUqEBY+k4jUf9sCV5+xj0Ry/GYuwmDMCdKTdl3GgQQoI0GIPLIyqL6LSgDwgaHAQoWChT+/s+ZWeOWzh1eRnhdRL3Qh9bxGRIkCiBO/wEBhwH/f/+bAWBRMv+A2yiAOUeBc9rY+UR/a4DxKBBkGkcaRYCcAQAB//9/AX9//0695P8EiICAfxgBgIkefwHYuDmA//83/4ABJgEBAf8d9N+8AAERyo1/j3kAGn/SAb7YIH8y/4CAXg=='
let x = match transferTransactionFromProto(transfer) {
    case ttx:TransferTransaction =>
        ttx.amount # 3500000000
    case _ => throw("Can't find transaction")
}
```
