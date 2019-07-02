# Converting functions

| # | Name | Description | Complexity |
|:--- | :--- | :--- | :--- |
| 1 | [addressFromPublicKey(ByteVector): Address](#address-from-public-key)| Converts account public key to [address](blockhain/address.md) | 82 |
| 2 | [parseInt(String): Int&#124;Unit](#parse-int) | Converts the string representation of a number to its integer equivalent | 20 |
| 3 | [parseIntValue(String): Int](#parse-int-value) | Converts the string representation of a number to its integer equivalent.<br>Raises an exception if the string cannot be parsed | 20 |
| 4 | [toBytes(Boolean): ByteVector](#tobytes-bool) | Converts a boolean to an array of bytes | 1 |
| 5 | [toBytes(Int): ByteVector](#tobytes-int) | Converts an integer to an array of bytes | 1 |
| 6 | [toBytes(String): ByteVector](#tobytes-string) | Converts a string to an array of bytes | 1 |
| 7 | [toInt(ByteVector): Int](#toint-bytes) | Converts an array of bytes to an integer | 10 |
| 8 | [toInt(ByteVector, Int): Int](#toint-bytes-int) | Converts an array of bytes to an integer starting from a certain index | 10 |
| 9 | [toString(Boolean): String](#tostring-bool) | Converts a boolean to a string | 1 |
| 10 | [toString(Int): String](#tostring-int) | Converts an integer to a string | 1 |
| 11 | [toUtf8String(ByteVector): String](#to-utf8-string) | Converts an array of bytes to a UTF-8 string | 20 |


## addressFromPublicKey(ByteVector): Address<a id="address-from-public-key"></a>

Converts account public key to [address](blockhain/address.md).

```
addressFromPublicKey(publicKey: ByteVector): Int
```

### Parameters

#### `publicKey`: ByteVector

The public key to convert.

### parseInt(String): Int|Unit<a id="parse-int"></a>

Converts the string representation of a number to its integer equivalent.

```
parseInt(str: String): Int|Unit
```

### Parameters

#### `str`: String

The string to parse.

### parseIntValue(String): Int<a id="parse-int-value"></a>

Converts the string representation of a number to its integer equivalent.

Raises an exception if the string cannot be parsed.

```
parseIntValue(str: String): Int
```

### Parameters

#### `str`: String

The string to parse.

## toBytes(Boolean): ByteVector<a id="tobytes-bool"></a>

Converts a boolean to an array of bytes.

```
toBytes(b: Boolean): ByteVector
```

### Parameters

#### `b`: Boolean

The boolean to convert.

## toBytes(Int): ByteVector<a id="tobytes-int"></a>

Converts an integer to an array of bytes.

```
toBytes(n: Int): ByteVector
```

### Parameters

#### `n`: Int

The integer to convert.

## toBytes(String): ByteVector<a id="tobytes-string"></a>

Converts a string to an array of bytes.

```
toBytes(s: String): ByteVector
```

### Parameters

#### `s`: String

The string to convert.

## toInt(ByteVector): Int<a id="toint-bytes"></a>

Converts an array of bytes to an integer.

```
toInt(bin: ByteVector) : Int
```

### Parameters

#### `bin`: ByteVector

The array of bytes to convert.

### toInt(ByteVector, Int): Int<a id="toint-bytes-int"></a>

Converts an array of bytes to an integer starting from a certain index.

```
toInt(bin: ByteVector, offset: Int): Int
```

### Parameters

#### `bin`: ByteVector

The array of bytes to convert.

#### `offset`: Int

The index to start from.

### toString(Boolean): String<a id="tostring-bool"></a>

Converts a boolean to a string.

```
toString(b: Boolean): String
```

### Parameters

#### `b`: Boolean

The boolean to convert.

### toString(Int): String<a id="tostring-int"></a>

Converts an integer to a string.

```
toString(n: Int): String
```

### Parameters

#### `n`: Int

The integer to convert.

### toUtf8String(ByteVector): String<a id="to-utf8-string"></a>

Converts an array of bytes to a UTF-8 string.

```
toUtf8String(u: ByteVector): String
```

### Parameters

#### `u`: ByteVector

The array of bytes to convert.
