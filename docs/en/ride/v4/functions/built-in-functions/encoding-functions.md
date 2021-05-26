# [Ride v4 and v3] Encoding functions

:warning: This is the documentation for the Standard library version 4 and 3. We recommend to use version 5. [Go to version 5](/en/ride/functions/built-in-functions/encoding-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [toBase16String(ByteVector): String](#to-base-16-string)  | Encodes array of bytes to [base16](https://en.wikipedia.org/wiki/Hexadecimal) string | 10 |
| [toBase58String(ByteVector): String](#to-base-58-string) | Encodes array of bytes to [base58](https://en.bitcoin.it/wiki/Base58Check_encoding) string | 10 for [Standard Library](/en/ride/script/standard-library) **version 3**<br>3 for Standard Library **version 4** |
| [toBase64String(ByteVector): String](#to-base-64-string) | Encodes array of bytes to [base64](https://en.wikipedia.org/wiki/Base64) string | 10 for Standard Library **version 3**<br>35 for Standard Library **version 4** |

## toBase16String(ByteVector): String<a id="to-base-16-string"></a>

Encodes an array of bytes to a [base16](https://en.wikipedia.org/wiki/Hexadecimal) string.

```
toBase16String(bytes: ByteVector): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `bytes`: [ByteVector](/en/ride/data-types/byte-vector) | Array of bytes to encode |

### Examples

```ride
toBase16String("Ride".toBytes()) # Returns "52696465"
toBase16String(base16'52696465') # Returns "52696465"
```

## toBase58String(ByteVector): String<a id="to-base-58-string"></a>

Encodes an array of bytes to a [base58](https://en.bitcoin.it/wiki/Base58Check_encoding) string.

```
toBase58String(bytes: ByteVector): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `bytes`: [ByteVector](/en/ride/data-types/byte-vector) | Array of bytes to encode |

### Examples

```ride
toBase58String("Ride".toBytes()) # Returns "37BPKA"
toBase58String(base58'37BPKA')  # Returns "37BPKA"
```

## toBase64String(ByteVector): String<a id="to-base-64-string"></a>

Encodes an array of bytes to a [base64](https://en.wikipedia.org/wiki/Base64) string.

```
toBase64String(bytes: ByteVector): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `bytes`: [ByteVector](/en/ride/data-types/byte-vector) | Array of bytes to encode |

### Examples

```ride
toBase64String("Ride".toBytes()) # Returns "UmlkZQ=="
toBase64String(base64'UmlkZQ==') # Returns "UmlkZQ=="
```
