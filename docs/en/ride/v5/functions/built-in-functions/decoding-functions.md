# [Ride v5] Decoding functions

:warning: This is the documentation for the Standard Library **version 5**, which becomes available after activation of feature #16 “Ride V5, dApp-to-dApp invocations”. [Go to version 4](/en/ride/functions/built-in-functions/decoding-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [addressFromString(String): Address&#124;Unit](#address-from-string)| Decodes address from [base58](https://en.bitcoin.it/wiki/Base58Check_encoding) string | 1 |
| [addressFromStringValue(String): Address](#address-from-string-value) | Decodes address from base58 string.<br>Fails if the address cannot be decoded | 1 |
| [fromBase16String(String): ByteVector](#from-base-16-string) | Decodes [base16](https://en.wikipedia.org/wiki/Hexadecimal) string to an array of bytes | 10 |
| [fromBase58String(String): ByteVector](#from-base-58-string) | Decodes base58 string to an array of bytes | 1 |
| [fromBase64String(String): ByteVector](#from-base-64-string)| Decodes [base64](https://en.wikipedia.org/wiki/Base64) string to an array of bytes | 40 |

### addressFromString(String): Address|Unit<a id="address-from-string"></a>

Decodes address from [base58](https://en.bitcoin.it/wiki/Base58Check_encoding) string.

```
addressFromString(string: String): Address|Unit
```

For a description of the return value, see the [Address](/en/ride/v5/structures/common-structures/address) article.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `string`: [String](/en/ride/v5/data-types/string) | String to decode |

### Examples

```ride
let address = addressFromString("3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF")
```

## addressFromStringValue(String): Address <a id="address-from-string-value"></a>

Decodes address from [base58](https://en.bitcoin.it/wiki/Base58Check_encoding) string.

Fails if the address cannot be decoded.

```
addressFromStringValue(string: String): Address
```

For a description of the return value, see the [Address](/en/ride/v5/structures/common-structures/address) article.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `string`: [String](/en/ride/v5/data-types/string) | String to decode |

### Examples

```ride
let address = addressFromStringValue("3NADPfTVhGvVvvRZuqQjhSU4trVqYHwnqjF")
```

## fromBase16String(String): ByteVector<a id="from-base-16-string"></a>

Decodes a [base16](https://en.wikipedia.org/wiki/Hexadecimal) string to an array of bytes.

```
fromBase16String(str: String): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `str`: [String](/en/ride/v5/data-types/string) | String to decode |

### Examples

```ride
let bytes = fromBase16String("52696465")
```

## fromBase58String(String): ByteVector<a id="from-base-58-string"></a>

Decodes a [base58](https://en.bitcoin.it/wiki/Base58Check_encoding) string to an array of bytes.

```
fromBase58String(str: String): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `str`: [String](/en/ride/v5/data-types/string) | String to decode |

### Examples

```ride
let bytes = fromBase58String("37BPKA")
```

## fromBase64String(String): ByteVector<a id="from-base-64-string"></a>

Decodes a [base64](https://en.wikipedia.org/wiki/Base64) string to an array of bytes.

```
fromBase64String(str: String): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `str`: [String](/en/ride/v5/data-types/string) | String to decode |

### Examples

```ride
let bytes = fromBase64String("UmlkZQ==")
```
