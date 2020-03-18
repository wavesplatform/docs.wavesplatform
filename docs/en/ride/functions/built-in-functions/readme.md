# Built-in functions

A **built-in function** is a [function](/en/ride/functions) of the [script context](/en/ride/script/script-context).

## [Account data storage functions](/en/ride/functions/built-in-functions/account-data-storage-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| assetBalancе(Address&#124;Alias, ByteVector): Int | Gets account balance by token ID | 100 |
| getBinary(Address&#124;Alias, String): ByteVector&#124;Unit | Gets an array of bytes by key | 100 |
| getBinaryValue(Address&#124;Alias, String): ByteVector | Gets an array of bytes by key. Throws an exception if there is no data | 100 |
| getBoolean(Address&#124;Alias, String): Boolean&#124;Unit | Gets a boolean value by key | 100 |
| getBooleanValue(Address&#124;Alias, String): Boolean | Gets a boolean value by key. Throws an exception if there is no data | 100 |
| getInteger(Address&#124;Alias, String): Int&#124;Unit | Gets an integer by key | 100 |
| getIntegerValue(Address&#124;Alias, String): Int | Gets an integer by key. Throws an exception if there is no data | 100 |
| getString(Address&#124;Alias, String): String&#124;Unit | Gets a string by key | 100 |
| getStringValue(Address&#124;Alias, String): String | Gets a string by key. Throws an exception if there is no data | 100 |
| wavesBalance(Address&#124;Alias): Int | Gets account balance in [WAVES](/en/blockchain/token/waves) | 109 |

## [Blockchain functions](/en/ride/functions/built-in-functions/blockchain-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| assetInfo(ByteVector): Аsset&#124;Unit | Gets the information about a [token](/en/blockchain/token) | 100 |
| blockInfoByHeight(Int): BlockInfo &#124;Unit | Gets the information about a [block](/en/blockchain/block) by the [block height](/en/blockchain/block/block-height) | 100 |
| calculateAssetId(Issue): ByteVector | Calculates the ID of the asset, created by [Issue](/en/ride/structures/common-structures/issue) structure during [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction) execution | 10 |
| transactionHeightById(ByteVector):  Int&#124;Unit | Gets the [block height](/en/blockchain/block/block-height) of a transaction | 100 |
| transferTransactionById(ByteVector): TransferTransaction&#124;Unit | Gets the data of a [transfer transaction](/en/blockchain/transaction-type/transfer-transaction) | 100 |

## [Byte array functions](/en/ride/functions/built-in-functions/byte-array-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| drop(ByteVector, Int): ByteVector | Returns the byte array without the first `N` bytes | 1 |
| dropRight(ByteVector, Int): ByteVector | Returns the byte array without the last `N` bytes | 19 |
| size(ByteVector): Int | Returns the number of bytes in the byte array | 1 |
| take(ByteVector, Int): ByteVector | Returns the first `N` bytes of the byte array | 1 |
| takeRight(ByteVector, Int): ByteVector | Returns the last `N` bytes of the byte array | 19 |

## [Converting functions](/en/ride/functions/built-in-functions/converting-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| addressFromPublicKey(ByteVector): Address | Converts account public key to [address](/en/blockchain/account/address) | 82 |
| addressFromRecipient(Address&#124;Alias): Address | Gets the corresponding [address](/en/blockchain/account/address) of the [alias](/en/blockchain/account/alias) | 100 |
| parseInt(String): Int&#124;Unit | Converts the string representation of a number to its integer equivalent | 20 |
| parseIntValue(String): Int | Converts the string representation of a number to its integer equivalent.Raises an exception if the string cannot be parsed | 20 |
| toBytes(Boolean): ByteVector | Converts a boolean to an array of bytes | 1 |
| toBytes(Int): ByteVector | Converts an integer to an array of bytes | 1 |
| toBytes(String): ByteVector | Converts a string to an array of bytes | 1 |
| toInt(ByteVector): Int | Converts an array of bytes to an integer | 10 |
| toInt(ByteVector, Int): Int | Converts an array of bytes to an integer starting from a certain index | 10 |
| toString(Address): String | Converts an [address](/en/blockchain/account/address) to a string | 10 |
| toString(Boolean): String | Converts a boolean to a string | 1 |
| toString(Int): String | Converts an integer to a string | 1 |
| toUtf8String(ByteVector): String | Converts an array of bytes to a UTF-8 string | 20 |

## [Data transaction functions](/en/ride/functions/built-in-functions/data-transaction-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| getInteger(List[DataEntry], String): Int&#124;Unit | Gets an integer value from a list of data entires by key | 10 |
| getInteger(List[DataEntry], Int): Int&#124;Unit | Gets an integer value from a list of data entires by index | 30 |
| getIntegerValue(List[DataEntry], String): Int | Gets an integer value from a list of data entires by key. Throws an exception if there is no data | 10 |
| getIntegerValue(List[DataEntry], Int): Int | Gets an integer value from a list of data entires by index. Throws an exception if there is no data | 30 |
| getBoolean(List[DataEntry], String): Boolean&#124;Unit | Gets a boolean value from a list of data entires by key | 10 |
| getBoolean(List[DataEntry], Int): Boolean&#124;Unit | Gets a boolean value from a list of data entires by index | 30 |
| getBooleanValue(List[DataEntry], String): Boolean | Gets a boolean value from a list of data entires by key. Throws an exception if there is no data | 10 |
| getBooleanValue(List[DataEntry], Int): Boolean | Gets a boolean value from a list of data entires by index. Throws an exception if there is no data | 30 |
| getBinary(List[DataEntry], String): ByteVector&#124;Unit | Gets a binary value from a list of data entires by key | 10 |
| getBinary(List[DataEntry], Int): ByteVector&#124;Unit | Gets a binary value from a list of data entires by index | 30 |
| getBinaryValue(ListDataEntry, String): ByteVector | Gets a binary value from a list of data entires by key. Throws an exception if there is no data | 10 |
| getBinaryValue(List[DataEntry], Int): ByteVector | Gets a binary value from a list of data entires by index. Throws an exception if there is no data | 30 |
| getString(List[DataEntry] String): String&#124;Unit | Gets a string value from a list of data entires by key | 10 |
| getString(List[DataEntry], Int): String&#124;Unit | Gets a string value from a list of data entires by index | 30 |
| getStringValue(List[DataEntry], String): String | Gets a string value from a list of data entires by key. Throws an exception if there is no data | 10 |
| getStringValue(List[DataEntry], Int): String | Gets a string value from a list of data entires by index. Throws an exception if there is no data | 30 |

## [Decoding functions](/en/ride/functions/built-in-functions/decoding-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| addressFromString(String): Address&#124;Unit | Decodes address from [Base58](https://en.wikipedia.org/wiki/Base58) string | 124 |
| addressFromStringValue(String): Address | Decodes address from [Base58](https://en.wikipedia.org/wiki/Base58) string.Raises an exception if the address cannot be decoded | 124 |
| fromBase16String(String): ByteVector | Decodes [Base16](https://en.wikipedia.org/wiki/Hexadecimal) string to an array of bytes | 10 |
| fromBase58String(String): ByteVector | Decodes [Base58](https://en.wikipedia.org/wiki/Base58) string to an array of bytes | 10 |
| fromBase64String(String): ByteVector | Decodes [Base64](https://en.wikipedia.org/wiki/Base64) string to an array of bytes | 10 |

## [Encoding functions](/en/ride/functions/built-in-functions/encoding-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| toBase16String(ByteVector): String | Encodes array of bytes to [Base16](https://en.wikipedia.org/wiki/Hexadecimal) string | 10 |
| toBase58String(ByteVector): String | Encodes array of bytes to [Base58](https://en.wikipedia.org/wiki/Base58) string | 10 |
| toBase64String(ByteVector): String | Encodes array of bytes to [Base64](https://en.wikipedia.org/wiki/Base64) string | 10 |

## [Exception functions](/en/ride/functions/built-in-functions/exception-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| throw() | Raises an exception | 1 |
| throw(String) | Raises an exception with a message | 1 |

## [Hashing functions](/en/ride/functions/built-in-functions/hashing-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| blake2b256(ByteVector): ByteVector | Range of functions.<br>Hash an array of bytes using [BLAKE-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) | 10–200 |
| keccak256(ByteVector): ByteVector | Range of functions.<br>Hash an array of bytes using [SHA-3-256](https://en.wikipedia.org/wiki/SHA-3) | 10–200 |
| sha256(ByteVector): ByteVector | Range of functions.<br>Hash an array of bytes using [SHA-256](https://en.wikipedia.org/wiki/SHA-2) | 10–200 |

## [List functions](/en/ride/functions/built-in-functions/list-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| getElement(List[T], Int): T | Gets the element by index | 2 |
| cons(T, List[T]): List[T] | Inserts the element at the beginning of the list | 2 |
| size(List[T]): Int | Returns the size of the list | 2 |

## [Math functions](/en/ride/functions/built-in-functions/math-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| fraction(Int, Int, Int): Int | Multiplies and divides an integer to avoid the integer overflow | 1 |
| log(Int, Int, Int, Int, Int, Union): Int | Calculates logarithm of the number | 100 |
| median(List[Int]): Int | Returns the median of a list of integers | 10 |
| pow(Int, Int, Int, Int, Int, Union): Int | Raises the number to a power | 100 |

## [String functions](/en/ride/functions/built-in-functions/string-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| contains(String, String): Boolean | Checks whether the string contains substring | 20 |
| drop(String, Int): String | Drops the first `n` characters of a string | 1 |
| dropRight(String, Int): String | Drops the last `n` characters of a string | 19 |
| indexOf(String, String): Int&#124;Unit | Returns the index of the first occurrence of a substring | 20 |
| indexOf(String, String, Int): Int&#124;Unit | Returns the index of the first occurrence of a substring after a certain index | 20 |
| size(String): Int | Returns the size of a string | 1 |
| split(String, String): List[String] | Splits a string delimited by a separator into a list of substrings. | 100 |
| take(String, Int): String | Takes the first `n` characters from a string | 1 |
| takeRight(String, Int): String | Takes the last `n` characters from a string | 19 |

## [Union functions](/en/ride/functions/built-in-functions/union-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| extract(T&#124;Unit): T | Gets a data type from an union | 13 |
| isDefined(List[T]&#124;Unit): Boolean | Checks if a value is not an union | 1 |
| value(T&#124;Unit): T | Gets a data type from an union | 13 |
| valueOrErrorMessage(T&#124;Unit, String): T | Gets a data type from an union. Throws an exception if there is no data | 13 |

## [Verification functions](/en/ride/functions/built-in-functions/verification-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| checkMerkleProof(ByteVector, ByteVector, ByteVector): Boolean | Checks that the data is part of the [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree) | 30 |
| groth16Verify(ByteVector, ByteVector, ByteVector): Boolean | Range of functions.<br>Check [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) by [groth16](https://eprint.iacr.org/2016/260.pdf) protocol | 1900–3900 |
| rsaVerify(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | Range of functions.<br>Check that the [RSA](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) digital signature is valid, i.e. it was created by the owner of the public key | 300–1000 |
| sigVerify(ByteVector, ByteVector, ByteVector): Boolean | Range of functions.<br>Check that the [Curve25519](https://en.wikipedia.org/wiki/Curve25519) digital signature is valid, i.e. it was created by the owner of the public key | 100–200 |
