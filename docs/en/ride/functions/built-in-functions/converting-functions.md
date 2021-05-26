# Converting functions

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [addressFromPublicKey(ByteVector): Address](#address-from-public-key)| Gets the corresponding [address](/en/blockchain/account/address) of the account public key | 63 |
| [parseBigInt(String): BigInt&#124;Unit](#parse-bigint) | Converts the string representation of a number to its [big integer](/en/ride/data-types/bigint) equivalent | 65 |
| [parseBigIntValue(String): BigInt](#parse-bigint-value) | Converts the string representation of a number to its big integer equivalent.<br>Fails if the string cannot be parsed | 65 |
| [parseInt(String): Int&#124;Unit](#parse-int) | Converts the string representation of a number to its integer equivalent | 2 |
| [parseIntValue(String): Int](#parse-int-value) | Converts the string representation of a number to its integer equivalent.<br>Fails if the string cannot be parsed | 2 |
| [toBigInt(ByteVector): BigInt](#to-bigint-bytevector) | Converts an array of bytes to a big integer | 65 |
| [toBigInt(ByteVector, Int, Int): BigInt](#to-bigint-bytevector-int-int) | Converts an array of bytes starting from a certain index to a big integer | 65 |
| [toBigInt(Int): BigInt](#to-bigint-int) | Converts an integer to a big integer | 1 |
| [toBytes(Boolean): ByteVector](#tobytes-bool) | Converts a boolean value to an array of bytes | 1 |
| [toBytes(Int): ByteVector](#tobytes-int) | Converts an integer to an array of bytes | 1 |
| [toBytes(String): ByteVector](#tobytes-string) | Converts a string to an array of bytes | 8 |
| [toBytes(BigInt): ByteVector](#to-bytes-bigint) | Converts a big integer to an array of bytes | 65 |
| [toInt(BigInt): Int](#to-int-bigint) | Converts a big integer to an integer.<br>Fails if the number cannot be converted | 1 |
| [toInt(ByteVector): Int](#toint-bytes) | Converts an array of bytes to an integer | 1 |
| [toInt(ByteVector, Int): Int](#toint-bytes-int) | Converts an array of bytes to an integer starting from a certain index | 1 |
| [toString(Address): String](#to-string-address) | Converts an array of bytes of an [address](/en/blockchain/account/address) to a string | 10 |
| [toString(Boolean): String](#tostring-bool) | Converts a boolean value to a string | 1 |
| [toString(Int): String](#tostring-int) | Converts an integer to a string | 1 |
| [toString(BigInt): String](#to-string-bigint) | Converts a big integer to a string | 65 |
| [toUtf8String(ByteVector): String](#to-utf8-string) | Converts an array of bytes to a [UTF-8](https://en.wikipedia.org/wiki/UTF-8) string | 7 |
| [transferTransactionFromProto(ByteVector): TransferTransaction&#124;Unit](#transfertransactionfromproto) | Deserializes transfer transaction | 5 |

## addressFromPublicKey(ByteVector): Address<a id="address-from-public-key"></a>

Gets the corresponding [address](/en/blockchain/account/address) of the account public key.

```
addressFromPublicKey(publicKey: ByteVector): Address
```

For a description of the return value, see the [Address](/en/ride/structures/common-structures/address) article.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `publicKey`: [ByteVector](/en/ride/data-types/byte-vector) | Public key |

### Examples

```ride
let address = addressFromPublicKey(base58'J1t6NBs5Hd588Dn7mAPytqkhgeBshzv3zecScfFJWE2D')
```

## parseBigInt(String): BigInt&#124;Unit<a id="parse-bigint"></a>

Converts the string representation of a number to its [big integer](/en/ride/data-types/bigint) equivalent.

```ride
parseBigInt(str: String): BigInt|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `str`: [String](/en/ride/data-types/string) | String to parse |

## parseBigIntValue(String): BigInt<a id="parse-bigint-value"></a>

Converts the string representation of a number to its [big integer](/en/ride/data-types/bigint) equivalent.

Fails if the string cannot be parsed.

```ride
parseBigIntValue(str: String): BigInt
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `str`: [String](/en/ride/data-types/string) | String to parse |

### parseInt(String): Int|Unit<a id="parse-int"></a>

Converts the string representation of a number to its integer equivalent.

```
parseInt(str: String): Int|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `str`: [String](/en/ride/data-types/string) | String to parse |

### Examples

```ride
parseInt("10") # Returns 10
parseInt("010") # Returns 10
parseInt("Ride") # Returns Unit
parseInt("10.30") # Returns Unit
```

### parseIntValue(String): Int<a id="parse-int-value"></a>

Converts the string representation of a number to its integer equivalent.

Fails if the string cannot be parsed.

```
parseIntValue(str: String): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `str`: [String](/en/ride/data-types/string) | String to parse |

### Examples

```ride
parseIntValue("10") # Returns 10
parseIntValue("010") # Returns 10
parseIntValue("Ride") # Error while parsing string to integer
parseIntValue("10.30") # Error while parsing string to integer
parseIntValue("20 WAVES") # Error while parsing string to integer
```

## toBigInt(ByteVector): BigInt<a id="to-bigint-bytevector"></a>

Converts an array of bytes to a [big integer](/en/ride/data-types/bigint) using the [big-endian](https://en.wikipedia.org/wiki/Endianness) byte order.

```ride
toBigInt(bin: ByteVector): BigInt
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `bin`: [ByteVector](/en/ride/data-types/byte-vector) | Array of bytes to convert |

## toBigInt(ByteVector, Int, Int): BigInt<a id="to-bigint-bytevector-int-int"></a>

Converts an array of bytes starting from a certain index to a [big integer](/en/ride/data-types/bigint) using the [big-endian](https://en.wikipedia.org/wiki/Endianness) byte order.

```ride
toBigInt(bin: ByteVector, offset: Int, size: Int): BigInt
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `bin`: [ByteVector](/en/ride/data-types/byte-vector) | Array of bytes to convert |
| `offset`: [Int](/en/ride/data-types/int) | Index to start from |
| `size`: [Int](/en/ride/data-types/int) | Number of bytes (subarray length) to convert |

## toBigInt(Int): BigInt<a id="to-bigint-int"></a>

Converts an integer to a [big integer](/en/ride/data-types/bigint).

```ride
toBigInt(n: Int): BigInt
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `n`: [Int](/en/ride/data-types/int) | Integer to convert |

## toBytes(Boolean): ByteVector<a id="tobytes-bool"></a>

Converts a boolean value to an array of bytes.

```
toBytes(b: Boolean): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `b`: [Boolean](/en/ride/data-types/boolean) | Boolean to convert |

### Examples

```ride
toBytes(true) # Returns base58'2'
toBytes(false) # Returns base58'1'
```

## toBytes(Int): ByteVector<a id="tobytes-int"></a>

Converts an integer to an array of bytes using the [big-endian](https://en.wikipedia.org/wiki/Endianness) byte order.

```
toBytes(n: Int): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `n`: [Int](/en/ride/data-types/int) | Integer to convert |

### Examples

```ride
toBytes(10) # Returns base58'1111111B'
```

## toBytes(String): ByteVector<a id="tobytes-string"></a>

Converts a string to an array of bytes.

```
toBytes(s: String): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `s`: [String](/en/ride/data-types/string) | String to convert |

### Examples

```ride
toBytes("Ride") # Returns base58'37BPKA'
```

## toBytes(BigInt): ByteVector<a id="to-bytes-bigint"></a>

Converts a [big integer](/en/ride/data-types/bigint) to an array of bytes using the [big-endian](https://en.wikipedia.org/wiki/Endianness) byte order.

``` ride
toBytes(n: BigInt): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `n`: [BigInt](/en/ride/data-types/bigint) | Big integer to convert |

## toInt(BigInt): Int<a id="to-int-bigint"></a>

Converts a [big integer](/en/ride/data-types/bigint) to an integer.

Fails if the number cannot be converted

```ride
toInt(n: BigInt): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `n`: [BigInt](/en/ride/data-types/bigint) | Big integer to convert |

## toInt(ByteVector): Int<a id="toint-bytes"></a>

Converts an array of bytes to an integer using the [big-endian](https://en.wikipedia.org/wiki/Endianness) byte order.

```
toInt(bin: ByteVector) : Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `bin`: [ByteVector](/en/ride/data-types/byte-vector) | Array of bytes to convert |

### Examples

```ride
toInt(base58'1111111B') # Returns 10
```

### toInt(ByteVector, Int): Int<a id="toint-bytes-int"></a>

Converts an array of bytes to an integer starting from a certain index using the [big-endian](https://en.wikipedia.org/wiki/Endianness) byte order.

```
toInt(bin: ByteVector, offset: Int): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `bin`: [ByteVector](/en/ride/data-types/byte-vector) | Array of bytes to convert |
| `offset`: [Int](/en/ride/data-types/int) | Index to start from |

### Examples

```ride
let bytes = toBytes("Ride on Waves")
toInt(bytes, 2) # Returns 7234224039401641825
toInt(bytes, 6) # Index out of bounds
```

## toString(Address): String<a id="to-string-address"></a>

Converts an array of bytes of an [address](/en/blockchain/account/address) to a string.

``` ride
toString(addr: Address): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addr`: [Address](/en/ride/structures/common-structures/address) | Address to convert |

### Examples

```ride
let address = Address(base58'3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF')
toString(address) # Returns "3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF"
```

### toString(Boolean): String<a id="tostring-bool"></a>

Converts a boolean value to a string.

```
toString(b: Boolean): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `b`: [Boolean](/en/ride/data-types/boolean) | Boolean to convert |

### Examples

```ride
toString(true) # Returns "true"
toString(false) # Returns "false"
```

### toString(Int): String<a id="tostring-int"></a>

Converts an integer to a string.

```
toString(n: Int): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `n`: [Int](/en/ride/data-types/int) | Integer to convert |

### Examples

```ride
toString(10) # Returns "10"
```

## toString(BigInt): String<a id="to-string-bigint"></a>

 Converts a [big integer](/en/ride/data-types/bigint) to a string.

``` ride
toString(n: BigInt): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `n`: [BigInt](/en/ride/data-types/bigint) | Big integer to convert |

### toUtf8String(ByteVector): String<a id="to-utf8-string"></a>

Converts an array of bytes to a [UTF-8](https://en.wikipedia.org/wiki/UTF-8) string.

Fails if the array of bytes cotains an invalid UTF-8 sequence.

```
toUtf8String(u: ByteVector): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `u`: [ByteVector](/en/ride/data-types/byte-vector) | Array of bytes to convert |

### Examples

```ride
let bytes = toBytes("Ride on Waves")
toUtf8String(bytes) # Returns "Ride on Waves"
```

## transferTransactionFromProto

Deserializes transfer transaction: converts protobuf-encoded [binary format](/en/blockchain/binary-format/transaction-binary-format/transfer-transaction-binary-format) specified in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) to a [TransferTransaction](/en/ride/structures/transaction-structures/transfer-transaction) structure. Returns `unit` if deserialization failed.

```ride
transferTransactionFromProto(b: ByteVector): TransferTransaction|Unit
```

For a description of the return value, see the [TransferTransaction](/en/ride/structures/transaction-structures/transfer-transaction) article.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `b`: [ByteVector](/en/ride/data-types/byte-vector) | Transfer transaction in protobuf-encoded binary format |

### Examples

```ride
let transfer = base64'Cr4BCFQSIA7SdnwUqEBY+k4jUf9sCV5+xj0Ry/GYuwmDMCdKTdl3GgQQoI0GIPLIyqL6LSgDwgaHAQoWChT+/s+ZWeOWzh1eRnhdRL3Qh9bxGRIkCiBO/wEBhwH/f/+bAWBRMv+A2yiAOUeBc9rY+UR/a4DxKBBkGkcaRYCcAQAB//9/AX9//0695P8EiICAfxgBgIkefwHYuDmA//83/4ABJgEBAf8d9N+8AAERyo1/j3kAGn/SAb7YIH8y/4CAXg=='
let x = match transferTransactionFromProto(transfer) {
    case ttx:TransferTransaction =>
        ttx.amount # 3500000000
    case _ => throw("Can't find transaction")
}
```
