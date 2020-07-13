# Built-in functions

A **built-in function** is a [function](/en/ride/functions/) of the [script context](/en/ride/script/script-context).

## [Account data storage functions](/en/ride/functions/built-in-functions/account-data-storage-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| assetBalancе(Address&#124;Alias, ByteVector): Int | Gets account balance by token ID | 100 for [Standard Library](/en/ride/script/standard-library) **version&nbsp;3**<br>10 for Standard Library **version&nbsp;4** |
| getBinary(Address&#124;Alias, String): ByteVector&#124;Unit | Gets an array of bytes by key | 100 for Standard Library **version&nbsp;3**<br>10 for Standard Library **version&nbsp;4** |
| getBinaryValue(Address&#124;Alias, String): ByteVector | Gets an array of bytes by key. Throws an exception if there is no data | 100 for Standard Library **version&nbsp;3**<br>10 for Standard Library **version&nbsp;4** |
| getBoolean(Address&#124;Alias, String): Boolean&#124;Unit | Gets a boolean value by key | 100 for Standard Library **version&nbsp;3**<br>10 for Standard Library **version&nbsp;4** |
| getBooleanValue(Address&#124;Alias, String): Boolean | Gets a boolean value by key. Throws an exception if there is no data | 100 for Standard Library **version&nbsp;3**<br>10 for Standard Library **version&nbsp;4** |
| getInteger(Address&#124;Alias, String): Int&#124;Unit | Gets an integer by key | 100 for Standard Library **version&nbsp;3**<br>10 for Standard Library **version&nbsp;4** |
| getIntegerValue(Address&#124;Alias, String): Int | Gets an integer by key. Throws an exception if there is no data | 100 for Standard Library **version&nbsp;3**<br>10 for Standard Library **version&nbsp;4** |
| getString(Address&#124;Alias, String): String&#124;Unit | Gets a string by key | 100 for Standard Library **version&nbsp;3**<br>10 for Standard Library **version&nbsp;4** |
| getStringValue(Address&#124;Alias, String): String | Gets a string by key. Throws an exception if there is no data | 100 for Standard Library **version&nbsp;3**<br>10 for Standard Library **version&nbsp;4** |
| wavesBalance(Address&#124;Alias): Int | Gets account balance in [WAVES](/en/blockchain/token/waves) | 100 for Standard Library **version&nbsp;3**<br>10 for Standard Library **version&nbsp;4** |

## [Blockchain functions](/en/ride/functions/built-in-functions/blockchain-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| assetInfo(ByteVector): Аsset&#124;Unit | Gets the information about a [token](/en/blockchain/token/) | 100 for [Standard Library](/en/ride/script/standard-library) **version&nbsp;3**<br>15 for Standard Library **version&nbsp;4** |
| blockInfoByHeight(Int): BlockInfo &#124;Unit | Gets the information about a [block](/en/blockchain/block/) by the [block height](/en/blockchain/block/block-height) | 100 for Standard Library **version&nbsp;3**<br>5 for Standard Library **version&nbsp;4** |
| calculateAssetId(Issue): ByteVector | Calculates the ID of the asset, created by [Issue](/en/ride/structures/script-actions/issue) structure during [invoke script transaction](/en/blockchain/transaction-type/invoke-script-transaction) execution | 10 |
| transactionHeightById(ByteVector):  Int&#124;Unit | Gets the [block height](/en/blockchain/block/block-height) of a transaction | 100 for Standard Library **version&nbsp;3**<br>20 for Standard Library **version&nbsp;4** |
| transferTransactionById(ByteVector): TransferTransaction&#124;Unit | Gets the data of a [transfer transaction](/en/blockchain/transaction-type/transfer-transaction) | 100 for Standard Library **version&nbsp;3**<br>60 for Standard Library **version&nbsp;4** |

## [Byte array functions](/en/ride/functions/built-in-functions/byte-array-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| drop(ByteVector, Int): ByteVector | Returns the byte array without the first `N` bytes | 1 for [Standard Library](/en/ride/script/standard-library) **version&nbsp;3**<br>6 for Standard Library **version&nbsp;4** |
| dropRight(ByteVector, Int): ByteVector | Returns the byte array without the last `N` bytes | 19 for Standard Library **version&nbsp;3**<br>6 for Standard Library **version&nbsp;4** |
| size(ByteVector): Int | Returns the number of bytes in the byte array | 1 |
| take(ByteVector, Int): ByteVector | Returns the first `N` bytes of the byte array | 1 for Standard Library **version&nbsp;3**<br>6 for Standard Library **version&nbsp;4** |
| takeRight(ByteVector, Int): ByteVector | Returns the last `N` bytes of the byte array | 19 for Standard Library **version&nbsp;3**<br>6 for Standard Library **version&nbsp;4** |

## [Converting functions](/en/ride/functions/built-in-functions/converting-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| addressFromPublicKey(ByteVector): Address | Converts account public key to [address](/en/blockchain/account/address) | 82 for [Standard Library](/en/ride/script/standard-library) **version&nbsp;3**<br>63 for Standard Library **version&nbsp;4** |
| addressFromRecipient(Address&#124;Alias): Address | Gets the corresponding [address](/en/blockchain/account/address) of the [alias](/en/blockchain/account/alias) | 100 for Standard Library **version&nbsp;3**<br>5 for Standard Library **version&nbsp;4** |
| parseInt(String): Int&#124;Unit | Converts the string representation of a number to its integer equivalent | 20 for Standard Library **version&nbsp;3**<br>2 for Standard Library **version&nbsp;4** |
| parseIntValue(String): Int | Converts the string representation of a number to its integer equivalent.Raises an exception if the string cannot be parsed | 20 for Standard Library **version&nbsp;3**<br>2 for Standard Library **version&nbsp;4** |
| toBytes(Boolean): ByteVector | Converts a boolean to an array of bytes | 1 |
| toBytes(Int): ByteVector | Converts an integer to an array of bytes | 1 |
| toBytes(String): ByteVector | Converts a string to an array of bytes | 1 for Standard Library **version&nbsp;3**<br>8 for Standard Library **version&nbsp;4** |
| toInt(ByteVector): Int | Converts an array of bytes to an integer | 10 for Standard Library **version&nbsp;3**<br> 1 for Standard Library **version&nbsp;4** |
| toInt(ByteVector, Int): Int | Converts an array of bytes to an integer starting from a certain index | 10 for Standard Library **version&nbsp;3**<br>1 for Standard Library **version&nbsp;4** |
| toString(Address): String | Converts an [address](/en/blockchain/account/address) to a string | 10 |
| toString(Boolean): String | Converts a boolean to a string | 1 |
| toString(Int): String | Converts an integer to a string | 1 |
| toUtf8String(ByteVector): String | Converts an array of bytes to a UTF-8 string | 20 for Standard Library **version&nbsp;3**<br>7 for Standard Library **version&nbsp;4** |
| transferTransactionFromProto(ByteVector): TransferTransaction&#124;Unit | Deserializes transfer transaction | 5 |

## [Data transaction functions](/en/ride/functions/built-in-functions/data-transaction-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| getInteger(List[DataEntry], String): Int&#124;Unit | Gets an integer value from a list of data entires by key | 10 |
| getInteger(List[DataEntry], Int): Int&#124;Unit | Gets an integer value from a list of data entires by index | 30 for [Standard Library](/en/ride/script/standard-library) **version&nbsp;3**<br>4 for Standard Library **version&nbsp;4** |
| getIntegerValue(List[DataEntry], String): Int | Gets an integer value from a list of data entires by key. Throws an exception if there is no data | 10 |
| getIntegerValue(List[DataEntry], Int): Int | Gets an integer value from a list of data entires by index. Throws an exception if there is no data | 30 for Standard Library **version&nbsp;3**<br>4 for Standard Library **version&nbsp;4** |
| getBoolean(List[DataEntry], String): Boolean&#124;Unit | Gets a boolean value from a list of data entires by key | 10 |
| getBoolean(List[DataEntry], Int): Boolean&#124;Unit | Gets a boolean value from a list of data entires by index | 30 for Standard Library **version&nbsp;3**<br>4 for Standard Library **version&nbsp;4** |
| getBooleanValue(List[DataEntry], String): Boolean | Gets a boolean value from a list of data entires by key. Throws an exception if there is no data | 10 |
| getBooleanValue(List[DataEntry], Int): Boolean | Gets a boolean value from a list of data entires by index. Throws an exception if there is no data | 30 for Standard Library **version&nbsp;3**<br>4 for Standard Library **version&nbsp;4** |
| getBinary(List[DataEntry], String): ByteVector&#124;Unit | Gets a binary value from a list of data entires by key | 10 |
| getBinary(List[DataEntry], Int): ByteVector&#124;Unit | Gets a binary value from a list of data entires by index | 30 for Standard Library **version&nbsp;3**<br>4 for Standard Library **version&nbsp;4** |
| getBinaryValue(List[DataEntry], String): ByteVector | Gets a binary value from a list of data entires by key. Throws an exception if there is no data | 10 |
| getBinaryValue(List[DataEntry], Int): ByteVector | Gets a binary value from a list of data entires by index. Throws an exception if there is no data | 30 for Standard Library **version&nbsp;3**<br>4 for Standard Library **version&nbsp;4** |
| getString(List[DataEntry] String): String&#124;Unit | Gets a string value from a list of data entires by key | 10 |
| getString(List[DataEntry], Int): String&#124;Unit | Gets a string value from a list of data entires by index | 30 for Standard Library **version&nbsp;3**<br>4 for Standard Library **version&nbsp;4** |
| getStringValue(List[DataEntry], String): String | Gets a string value from a list of data entires by key. Throws an exception if there is no data | 10 |
| getStringValue(List[DataEntry], Int): String | Gets a string value from a list of data entires by index. Throws an exception if there is no data | 30 for Standard Library **version&nbsp;3**<br>4 for Standard Library **version&nbsp;4** |

## [Decoding functions](/en/ride/functions/built-in-functions/decoding-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| addressFromString(String): Address&#124;Unit | Decodes address from [Base58](https://en.wikipedia.org/wiki/Base58) string | 124 for [Standard Library](/en/ride/script/standard-library) **version&nbsp;3**<br>1 for Standard Library **version&nbsp;4** |
| addressFromStringValue(String): Address | Decodes address from [Base58](https://en.wikipedia.org/wiki/Base58) string. Raises an exception if the address cannot be decoded | 124 for Standard Library **version&nbsp;3**<br>1 for Standard Library **version&nbsp;4** |
| fromBase16String(String): ByteVector | Decodes [Base16](https://en.wikipedia.org/wiki/Hexadecimal) string to an array of bytes | 10 |
| fromBase58String(String): ByteVector | Decodes [Base58](https://en.wikipedia.org/wiki/Base58) string to an array of bytes | 10 for Standard Library **version&nbsp;3**<br>1 for Standard Library **version&nbsp;4** |
| fromBase64String(String): ByteVector | Decodes [Base64](https://en.wikipedia.org/wiki/Base64) string to an array of bytes | 10 for Standard Library **version&nbsp;3**<br>40 for Standard Library **version&nbsp;4** |

## [Encoding functions](/en/ride/functions/built-in-functions/encoding-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| toBase16String(ByteVector): String | Encodes array of bytes to [Base16](https://en.wikipedia.org/wiki/Hexadecimal) string | 10 |
| toBase58String(ByteVector): String | Encodes array of bytes to [Base58](https://en.wikipedia.org/wiki/Base58) string | 10 for [Standard Library](/en/ride/script/standard-library) **version&nbsp;3**<br>3 for Standard Library **version&nbsp;4** |
| toBase64String(ByteVector): String | Encodes array of bytes to [Base64](https://en.wikipedia.org/wiki/Base64) string | 10 for Standard Library **version&nbsp;3**<br>35 for Standard Library **version&nbsp;4** |

## [Exception functions](/en/ride/functions/built-in-functions/exception-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| throw() | Raises an exception | 1 |
| throw(String) | Raises an exception with a message | 1 |

## [Hashing functions](/en/ride/functions/built-in-functions/hashing-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| blake2b256(ByteVector): ByteVector | Range of functions.<br>Hash an array of bytes using [BLAKE2b-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) | 10 for [Standard Library](/en/ride/script/standard-library) **version&nbsp;3**<br>10–200 for Standard Library **version&nbsp;4** |
| keccak256(ByteVector): ByteVector | Range of functions.<br>Hash an array of bytes using [Keccak-256](https://keccak.team/files/Keccak-submission-3.pdf) | 10 for Standard Library **version&nbsp;3**<br>10–200 for Standard Library **version&nbsp;4** |
| sha256(ByteVector): ByteVector | Range of functions.<br>Hash an array of bytes using [SHA-256](https://en.wikipedia.org/wiki/SHA-2) | 10 for Standard Library **version&nbsp;3**<br>10–200 for Standard Library **version&nbsp;4** |

## [List functions](/en/ride/functions/built-in-functions/list-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| cons(T, List[T]): List[T] | Inserts element to the beginning of the [list](/en/ride/data-types/list) | 2 for [Standard Library](/en/ride/script/standard-library) **version&nbsp;3**<br>1 for Standard Library **version&nbsp;4** |
| containsElement(list: List[T], element: T): Boolean | Check if the element is in the list | 5 |
| getElement(List[T], Int): T | Gets element from the list | 2 |
| indexOf(list: List[T], element: T): Int&#124;Unit | Returns the index of the first occurrence of the element in the list | 5 |
| lastIndexOf(list: List[T], element: T): Int&#124;Unit | Returns the index of the last occurrence of the element in the list | 5 |
| max(List[Int]): Int | Returns the largest element in the list | 3 |
| min(List[Int]): Int | Returns the smallest item in the list | 3 |
| removeByIndex(list: List[T], index: Int): List[T] | Removes an element from the list by index | 7 |
| size(List[T]): Int | Returns the size of the list | 2 |

`T` is a short designation for `Boolean|ByteVector|Int|String`.

## [Math functions](/en/ride/functions/built-in-functions/math-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| fraction(Int, Int, Int): Int | Multiplies and divides an integer to avoid the integer overflow | 1 |
| log(Int, Int, Int, Int, Int, Union): Int | Calculates logarithm of the number | 100 |
| median(List[Int]): Int | Returns the median of a list of integers | 20 |
| pow(Int, Int, Int, Int, Int, Union): Int | Raises the number to a power | 100 |

## [String functions](/en/ride/functions/built-in-functions/string-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| contains(String, String): Boolean | Checks whether the string contains substring | 3 |
| drop(String, Int): String | Drops the first `n` characters of a string | 1 for [Standard Library](/en/ride/script/standard-library) **version&nbsp;3**<br>20 for Standard Library **version&nbsp;4** |
| dropRight(String, Int): String | Drops the last `n` characters of a string | 19 for Standard Library **version&nbsp;3**<br>20 for Standard Library **version&nbsp;4** |
| indexOf(String, String): Int&#124;Unit | Returns the index of the first occurrence of a substring | 20 for Standard Library **version&nbsp;3**<br>3 for Standard Library **version&nbsp;4** |
| indexOf(String, String, Int): Int&#124;Unit | Returns the index of the first occurrence of a substring after a certain index | 20 for Standard Library **version&nbsp;3**<br>3 for Standard Library **version&nbsp;4** |
| lastIndexOf(String, String): Int&#124;Unit | Returns the index of the last occurrence of a substring | 20 for Standard Library **version&nbsp;3**<br>3 for Standard Library **version&nbsp;4** |
| lastindexOf(String, String, Int): Int&#124;Unit | Returns the index of the last occurrence of a substring before a certain index | 20 for Standard Library **version&nbsp;3**<br>3 for Standard Library **version&nbsp;4** |
| makeString(List[String], String): String | Concatenates list strings adding a separator | 10 |
| size(String): Int | Returns the size of a string | 1 |
| split(String, String): List[String] | Splits a string delimited by a separator into a list of substrings. | 100 for Standard Library **version&nbsp;3**<br>75 for Standard Library **version&nbsp;4** |
| take(String, Int): String | Takes the first `n` characters from a string | 1 for Standard Library **version&nbsp;3**<br>20 for Standard Library **version&nbsp;4** |
| takeRight(String, Int): String | Takes the last `n` characters from a string | 19 for Standard Library **version&nbsp;3**<br>20 for Standard Library **version&nbsp;4** |

## [Union functions](/en/ride/functions/built-in-functions/union-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| extract(T&#124;Unit): T | Gets a data type from an union | 13 |
| isDefined(List[T]&#124;Unit): Boolean | Checks if a value is not an union | 1 |
| value(T&#124;Unit): T | Gets a data type from an union | 13 for [Standard Library](/en/ride/script/standard-library) **version&nbsp;3**<br>2 for Standard Library **version&nbsp;4** |
| valueOrElse(T&#124;Unit, T): T | Returns value from [union](/en/ride/data-types/union) type argument if it's not [unit](/en/ride/data-types/unit). Otherwise, returns the second argument | 2 |
| valueOrErrorMessage(T&#124;Unit, String): T | Gets a data type from an union. Throws an exception if there is no data | 13 for Standard Library **version&nbsp;3**<br>2 for Standard Library **version&nbsp;4** |

## [Verification functions](/en/ride/functions/built-in-functions/verification-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| bn256groth16Verify(ByteVector, ByteVector, ByteVector): Boolean | Range of functions.<br>Check [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) by groth16 protocol on the bn254 curve | 800–1650 |
| checkMerkleProof(ByteVector, ByteVector, ByteVector): Boolean | Checks that the data is part of the [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree) | 30 |
| createMerkleRoot(List[ByteVector], ByteVector, Int) : ByteVector | Calculates the [Merkle root hash](/en/blockchain/block/merkle-root) for transactions of block | 30 |
| ecrecover(messageHash: ByteVector, signature: ByteVector) | Recovers public key from the message hash and the [ECDSA](https://en.wikipedia.org/wiki/ECDSA) digital signature | 70 |
| groth16Verify(ByteVector, ByteVector, ByteVector): Boolean | Range of functions.<br>Check [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) by [groth16](https://eprint.iacr.org/2016/260.pdf) protocol on the bls12-381 curve | 1200–2700 |
| rsaVerify(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | Range of functions.<br>Check that the [RSA](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) digital signature is valid, i.e. it was created by the owner of the public key | 300 for [Standard Library](/en/ride/script/standard-library) **version&nbsp;3**<br>500–1000 for Standard Library **version&nbsp;4** |
| sigVerify(ByteVector, ByteVector, ByteVector): Boolean | Range of functions.<br>Check that the [Curve25519](https://en.wikipedia.org/wiki/Curve25519) digital signature is valid, i.e. it was created by the owner of the public key | 100 for Standard library **version&nbsp;3**<br>47–200 for Standard Library **version&nbsp;4** |
