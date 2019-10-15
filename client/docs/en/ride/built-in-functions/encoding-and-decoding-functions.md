# Encoding and decoding functions

## Encoding functions

|#| Name | Description | Complexity |
|:---| :--- | :--- | :--- |
|1| [blake2b256(ByteVector): ByteVector](#blake2b256) | [BLAKE-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) hash function | 10 |
|2| [keccak256(ByteVector): ByteVector](#keccak256)| [SHA-3-256](https://en.wikipedia.org/wiki/SHA-3) hash function | 10 |
|3| [sha256(ByteVector): ByteVector](#sha256) | [SHA-256](https://en.wikipedia.org/wiki/SHA-2) hash function | 10 |
|4| [toBase16String(ByteVector): String](#to-base-16-string)  | Encodes array of bytes to [Base16](https://en.wikipedia.org/wiki/Hexadecimal) string | 10 |
|5| [toBase58String(ByteVector): String](#to-base-58-string) | Encodes array of bytes to [Base58](https://en.wikipedia.org/wiki/Base58) string | 10 |
|6| [toBase64String(ByteVector): String](#to-base-64-string) | Encodes array of bytes to [Base64](https://en.wikipedia.org/wiki/Base64) string | 10 |

## Decoding functions

|#| Name | Description | Complexity |
|:---| :--- | :--- | :--- |
| 1 | [addressFromString(String): Address&#124;Unit](#address-from-string)| Decodes address from [Base58](https://en.wikipedia.org/wiki/Base58) string | 124 |
| 2 | [addressFromStringValue(String): Address](#address-from-string-value) | Decodes address from [Base58](https://en.wikipedia.org/wiki/Base58) string.<br>Raises an exception if the address cannot be decoded | 124 |
| 3 | [fromBase16String(String): ByteVector](#from-base-16-string) | Decodes [Base16](https://en.wikipedia.org/wiki/Hexadecimal) string to an array of bytes | 10 |
| 4 | [fromBase58String(String): ByteVector](#from-base-58-string) | Decodes [Base58](https://en.wikipedia.org/wiki/Base58) string to an array of bytes | 10 |
| 5 | [fromBase64String(String): ByteVector](#from-base-64-string)| Decodes [Base64](https://en.wikipedia.org/wiki/Base64) string to an array of bytes | 10 |

## blake2b256(ByteVector): ByteVector<a id="blake2b256"></a>

[BLAKE-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) hash function.

```
blake2b256(bytes: ByteVector): ByteVector
```

### Parameters

#### `bytes`: ByteVector

The array of bytes to encode.

## keccak256(ByteVector): ByteVector<a id="keccak256"></a>

[SHA-3-256](https://en.wikipedia.org/wiki/SHA-3) hash function.

```
keccak256(bytes: ByteVector): ByteVector
```

### Parameters

#### `bytes`: ByteVector

The array of bytes to encode.

## sha256(ByteVector): ByteVector<a id="sha256"></a>

[SHA-256](https://en.wikipedia.org/wiki/SHA-2) hash function.

```
sha256(bytes: ByteVector): ByteVector
```

### Parameters

#### `bytes`: ByteVector

The array of bytes to encode.

## toBase16String(ByteVector): String<a id="to-base-16-string"></a>

Encodes an array of bytes to a [Base16](https://en.wikipedia.org/wiki/Hexadecimal) string.

```
toBase16String(bytes: ByteVector): String
```

### Parameters

#### `bytes`: ByteVector

The array of bytes to encode.

## toBase58String(ByteVector): String<a id="to-base-58-string"></a>

Encodes an array of bytes to a [Base58](https://en.wikipedia.org/wiki/Base58) string.

```
toBase58String(bytes: ByteVector): String
```

### Parameters

#### `bytes`: ByteVector

The array of bytes to encode.

## toBase64String(ByteVector): String<a id="to-base-64-string"></a>

Encodes an array of bytes to a [Base64](https://en.wikipedia.org/wiki/Base64) string.

```
toBase64String(bytes: ByteVector): String
```

### Parameters

#### `bytes`: ByteVector

The array of bytes to encode.

### addressFromString(String): Address|Unit<a id="address-from-string"></a>

Decodes address from [Base58](https://en.wikipedia.org/wiki/Base58) string.

```
addressFromString(string: String): Address|Unit
```

### Parameters

#### `string`: String

The string to decode.

## addressFromStringValue(String): Address <a id="address-from-string-value"></a>

Decodes address from [Base58](https://en.wikipedia.org/wiki/Base58) string.

Raises an exception if the address cannot be decoded.

```
addressFromStringValue(string: String): Address
```

### Parameters

#### `string`: String

The string to decode.

## fromBase16String(String): ByteVector<a id="from-base-16-string"></a>

Decodes a [Base16](https://en.wikipedia.org/wiki/Hexadecimal) string to an array of bytes.

```
fromBase16String(str: String): ByteVector
```

### Parameters

#### `str`: String

The string to decode.

## fromBase58String(String): ByteVector<a id="from-base-58-string"></a>

Decodes a [Base58](https://en.wikipedia.org/wiki/Base58) string to an array of bytes.

```
fromBase58String(str: String): ByteVector
```

### Parameters

#### `str`: String

The string to decode.

## fromBase64String(String): ByteVector<a id="from-base-64-string"></a>

Decodes a [Base64](https://en.wikipedia.org/wiki/Base64) string to an array of bytes.

```
fromBase64String(str: String): ByteVector
```

### Parameters

#### `str`: String

The string to decode.
