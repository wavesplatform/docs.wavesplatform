# [Ride v5] Converting functions

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/functions/built-in-functions/converting-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [addressFromPublicKey(ByteVector): Address](#address-from-public-key)| Gets the corresponding [address](/en/blockchain/account/address) of the account public key | 63 |
| [parseInt(String): Int&#124;Unit](#parse-int) | Converts the string representation of a number to its integer equivalent | 2 |
| [parseIntValue(String): Int](#parse-int-value) | Converts the string representation of a number to its integer equivalent.<br>Fails if the string cannot be parsed | 2 |
| [toBytes(Boolean): ByteVector](#tobytes-bool) | Converts a boolean value to an array of bytes | 1 |
| [toBytes(Int): ByteVector](#tobytes-int) | Converts an integer to an array of bytes | 1 |
| [toBytes(String): ByteVector](#tobytes-string) | Converts a string to an array of bytes | 8 |
| [toInt(ByteVector): Int](#toint-bytes) | Converts an array of bytes to an integer | 1 |
| [toInt(ByteVector, Int): Int](#toint-bytes-int) | Converts an array of bytes to an integer starting from a certain index | 1 |
| [toString(Address): String](#to-string-address) | Converts an array of bytes of an [address](/en/blockchain/account/address) to a string | 10 |
| [toString(Boolean): String](#tostring-bool) | Converts a boolean value to a string | 1 |
| [toString(Int): String](#tostring-int) | Converts an integer to a string | 1 |
| [toUtf8String(ByteVector): String](#to-utf8-string) | Converts an array of bytes to a [UTF-8](https://en.wikipedia.org/wiki/UTF-8) string | 7 |
| [transferTransactionFromProto(ByteVector): TransferTransaction&#124;Unit](#transfertransactionfromproto) | Deserializes transfer transaction | 5 |

## addressFromPublicKey(ByteVector): Address<a id="address-from-public-key"></a>

Gets the corresponding [address](/en/blockchain/account/address) of the account public key.

```
addressFromPublicKey(publicKey: ByteVector): Address
```

For a description of the return value, see the [Address](/en/ride/v5/structures/common-structures/address) article.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `publicKey`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Public key |

### Examples

```ride
let address = addressFromPublicKey(base58'J1t6NBs5Hd588Dn7mAPytqkhgeBshzv3zecScfFJWE2D')
```

### parseInt(String): Int|Unit<a id="parse-int"></a>

Converts the string representation of a number to its integer equivalent.

```
parseInt(str: String): Int|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `str`: [String](/en/ride/v5/data-types/string) | String to parse |

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
| `str`: [String](/en/ride/v5/data-types/string) | String to parse |

### Examples

```ride
parseIntValue("10") # Returns 10
parseIntValue("010") # Returns 10
parseIntValue("Ride") # Error while parsing string to integer
parseIntValue("10.30") # Error while parsing string to integer
parseIntValue("20 WAVES") # Error while parsing string to integer
```

## toBytes(Boolean): ByteVector<a id="tobytes-bool"></a>

Converts a boolean value to an array of bytes.

```
toBytes(b: Boolean): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `b`: [Boolean](/en/ride/v5/data-types/boolean) | Boolean to convert |

### Examples

```ride
toBytes(true) # Returns 2
toBytes(false) # Returns 1
```

## toBytes(Int): ByteVector<a id="tobytes-int"></a>

Converts an integer to an array of bytes.

```
toBytes(n: Int): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `n`: [Int](/en/ride/v5/data-types/int) | Integer to convert |

### Examples

```ride
toBytes(10) # Returns 1111111B
```

## toBytes(String): ByteVector<a id="tobytes-string"></a>

Converts a string to an array of bytes.

```
toBytes(s: String): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `s`: [String](/en/ride/v5/data-types/string) | String to convert |

### Examples

```ride
toBytes("Ride") # Returns 37BPKA
```

## toInt(ByteVector): Int<a id="toint-bytes"></a>

Converts an array of bytes to an integer.

```
toInt(bin: ByteVector) : Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `bin`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Array of bytes to convert |

### Examples

```ride
toInt(bytes) # Returns 10
```

### toInt(ByteVector, Int): Int<a id="toint-bytes-int"></a>

Converts an array of bytes to an integer starting from a certain index.

```
toInt(bin: ByteVector, offset: Int): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `bin`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Array of bytes to convert |
| `offset`: [Int](/en/ride/v5/data-types/int) | Index to start from |

### Examples

```ride
let bytes = toBytes("Ride on Waves")
toInt(bytes, 2) # Returns 7234224039401641825
toInt(bytes, 6) # Index out of bounds
```

## toString(Address): String<a id="to-string-address"></a>

Converts an array of bytes of an [address](/en/blockchain/account/address) to a string.

``` ride
toString(Address: Address): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `Address`: [Address](/en/ride/v5/structures/common-structures/address) | Address to convert |

### Examples

```ride
let address =Address(base58'3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF')
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
| `b`: [Boolean](/en/ride/v5/data-types/boolean) | Boolean to convert |

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
| `n`: [Int](/en/ride/v5/data-types/int) | Integer to convert |

### Examples

```ride
toString(10) # Returns "10"
```

### toUtf8String(ByteVector): String<a id="to-utf8-string"></a>

Converts an array of bytes to a [UTF-8](https://en.wikipedia.org/wiki/UTF-8) string.

```
toUtf8String(u: ByteVector): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `u`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Array of bytes to convert |

### Examples

```ride
let bytes = toBytes("Ride on Waves")
toUtf8String(bytes) # Returns "Ride on Waves"
```

## transferTransactionFromProto

Deserializes transfer transaction: converts protobuf-encoded [binary format](/en/blockchain/binary-format/transaction-binary-format/transfer-transaction-binary-format) specified in [transaction.proto](https://github.com/wavesplatform/protobuf-schemas/blob/master/proto/waves/transaction.proto) to a [TransferTransaction](/en/ride/v5/structures/transaction-structures/transfer-transaction) structure. Returns `unit` if deserialization failed.

```ride
transferTransactionFromProto(b: ByteVector): TransferTransaction|Unit
```

For a description of the return value, see the [TransferTransaction](/en/ride/v5/structures/transaction-structures/transfer-transaction) article.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `b`: [ByteVector](/en/ride/v5/data-types/byte-vector) | Transfer transaction in protobuf-encoded binary format |

### Examples

```ride
let transfer = base64'Cr4BCFQSIA7SdnwUqEBY+k4jUf9sCV5+xj0Ry/GYuwmDMCdKTdl3GgQQoI0GIPLIyqL6LSgDwgaHAQoWChT+/s+ZWeOWzh1eRnhdRL3Qh9bxGRIkCiBO/wEBhwH/f/+bAWBRMv+A2yiAOUeBc9rY+UR/a4DxKBBkGkcaRYCcAQAB//9/AX9//0695P8EiICAfxgBgIkefwHYuDmA//83/4ABJgEBAf8d9N+8AAERyo1/j3kAGn/SAb7YIH8y/4CAXg=='
let x = match transferTransactionFromProto(transfer) {
    case ttx:TransferTransaction =>
        ttx.amount # 3500000000
    case _ => throw("Can't find transaction")
}
```
