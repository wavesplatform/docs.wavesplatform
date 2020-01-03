# Built-in functions

A **built-in function** is a [function](/en/ride/functions) of the [script context](/en/ride/script/script-context).

## List of the built-in functions

### [Account data storage functions](/en/ride/functions/built-in-functions/account-data-storage-functions)

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | assetBalancе(Address&#124;Alias, ByteVector): Int | Gets account balance by token ID | 100 |
| 2 | getBinary(Address&#124;Alias, String): ByteVector&#124;Unit | Gets an array of bytes by key | 100 |
| 3 | getBinaryValue(Address&#124;Alias, String): ByteVector | Gets an array of bytes by key. Throws an exception if there is no data | 100 |
| 4 | getBoolean(Address&#124;Alias, String): Boolean&#124;Unit | Gets a boolean value by key | 100 |
| 5 | getBooleanValue(Address&#124;Alias, String): Boolean | Gets a boolean value by key. Throws an exception if there is no data | 100 |
| 6 | getInteger(Address&#124;Alias, String): Int&#124;Unit | Gets an integer by key | 100 |
| 7 | getIntegerValue(Address&#124;Alias, String): Int | Gets an integer by key. Throws an exception if there is no data | 100 |
| 8 | getString(Address&#124;Alias, String): String&#124;Unit | Gets a string by key | 100 |
| 9 | getStringValue(Address&#124;Alias, String): String | Gets a string by key. Throws an exception if there is no data | 100 |
| 10 | wavesBalance(Address&#124;Alias): Int | Gets account balance in [WAVES](/en/blockchain/token/waves) | 109 |

### [Blockchain functions](/en/ride/functions/built-in-functions/blockchain-functions)

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | assetInfo(ByteVector): Аsset&#124;Unit | Gets the information about a [token](/en/blockchain/token) | 100 |
| 2 | blockInfoByHeight(Int): BlockInfo &#124;Unit | Gets the information about a [block](/en/blockchain/block) by the [block height](/en/blockchain/block/block-height) | 100 |
| 3 | transactionHeightById(ByteVector):  Int&#124;Unit | Gets the [block height](/en/blockchain/block/block-height) of a transaction | 100 |
| 4 | transferTransactionById(ByteVector): TransferTransaction&#124;Unit | Gets the data of a [transfer transaction](/en/blockchain/transaction-type/transfer-transaction) | 100 |

### [Byte array functions](/en/ride/functions/built-in-functions/byte-array-functions)

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | drop(ByteVector, Int): ByteVector | Returns the byte array without the first `N` bytes | 1 |
| 2 | dropRight(ByteVector, Int): ByteVector | Returns the byte array without the last `N` bytes | 19 |
| 3 | size(ByteVector): Int | Returns the number of bytes in the byte array | 1 |
| 4 | take(ByteVector, Int): ByteVector | Returns the first `N` bytes of the byte array | 1 |
| 5 | takeRight(ByteVector, Int): ByteVector | Returns the last `N` bytes of the byte array | 19 |

### [Converting functions](/en/ride/functions/built-in-functions/converting-functions)

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | addressFromPublicKey(ByteVector): Address | Converts account public key to [address](/en/blockchain/account/address) | 82 |
| 2 | addressFromRecipient(Address&#124;Alias): Address | Gets the corresponding [address](/en/blockchain/account/address) of the [alias](/en/blockchain/account/alias) | 100 |
| 3 | parseInt(String): Int&#124;Unit | Converts the string representation of a number to its integer equivalent | 20 |
| 4 | parseIntValue(String): Int | Converts the string representation of a number to its integer equivalent.Raises an exception if the string cannot be parsed | 20 |
| 5 | toBytes(Boolean): ByteVector | Converts a boolean to an array of bytes | 1 |
| 6 | toBytes(Int): ByteVector | Converts an integer to an array of bytes | 1 |
| 7 | toBytes(String): ByteVector | Converts a string to an array of bytes | 1 |
| 8 | toInt(ByteVector): Int | Converts an array of bytes to an integer | 10 |
| 9 | toInt(ByteVector, Int): Int | Converts an array of bytes to an integer starting from a certain index | 10 |
| 10 | toString(Address): String | Converts an [address](/en/blockchain/account/address) to a string | 10 |
| 11 | toString(Boolean): String | Converts a boolean to a string | 1 |
| 12 | toString(Int): String | Converts an integer to a string | 1 |
| 13 | toUtf8String(ByteVector): String | Converts an array of bytes to a UTF-8 string | 20 |

### [Data transaction functions](/en/ride/functions/built-in-functions/data-transaction-functions)

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | getInteger(List[DataEntry], String): Int&#124;Unit | Gets an integer value from a list of data entires by key | 10 |
| 2 | getInteger(List[DataEntry], Int): Int&#124;Unit | Gets an integer value from a list of data entires by index | 30 |
| 3 | getIntegerValue(List[DataEntry], String): Int | Gets an integer value from a list of data entires by key. Throws an exception if there is no data | 10 |
| 4 | getIntegerValue(List[DataEntry], Int): Int | Gets an integer value from a list of data entires by index. Throws an exception if there is no data | 30 |
| 5 | getBoolean(List[DataEntry], String): Boolean&#124;Unit | Gets a boolean value from a list of data entires by key | 10 |
| 6 | getBoolean(List[DataEntry], Int): Boolean&#124;Unit | Gets a boolean value from a list of data entires by index | 30 |
| 7 | getBooleanValue(List[DataEntry], String): Boolean | Gets a boolean value from a list of data entires by key. Throws an exception if there is no data | 10 |
| 8 | getBooleanValue(List[DataEntry], Int): Boolean | Gets a boolean value from a list of data entires by index. Throws an exception if there is no data | 30 |
| 9 | getBinary(List[DataEntry], String): ByteVector&#124;Unit | Gets a binary value from a list of data entires by key | 10 |
| 10 | getBinary(List[DataEntry], Int): ByteVector&#124;Unit | Gets a binary value from a list of data entires by index | 30 |
| 11 | getBinaryValue(ListDataEntry, String): ByteVector | Gets a binary value from a list of data entires by key. Throws an exception if there is no data | 10 |
| 12 | getBinaryValue(List[DataEntry], Int): ByteVector | Gets a binary value from a list of data entires by index. Throws an exception if there is no data | 30 |
| 13 | getString(List[DataEntry] String): String&#124;Unit | Gets a string value from a list of data entires by key | 10 |
| 14 | getString(List[DataEntry], Int): String&#124;Unit | Gets a string value from a list of data entires by index | 30 |
| 15 | getStringValue(List[DataEntry], String): String | Gets a string value from a list of data entires by key. Throws an exception if there is no data | 10 |
| 16 | getStringValue(List[DataEntry], Int): String | Gets a string value from a list of data entires by index. Throws an exception if there is no data | 30 |

### [Decoding functions](/en/ride/functions/built-in-functions/decoding-functions)

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | addressFromString(String): Address&#124;Unit | Decodes address from [Base58](https://en.wikipedia.org/wiki/Base58) string | 124 |
| 2 | addressFromStringValue(String): Address | Decodes address from [Base58](https://en.wikipedia.org/wiki/Base58) string.Raises an exception if the address cannot be decoded | 124 |
| 3 | fromBase16String(String): ByteVector | Decodes [Base16](https://en.wikipedia.org/wiki/Hexadecimal) string to an array of bytes | 10 |
| 4 | fromBase58String(String): ByteVector | Decodes [Base58](https://en.wikipedia.org/wiki/Base58) string to an array of bytes | 10 |
| 5 | fromBase64String(String): ByteVector | Decodes [Base64](https://en.wikipedia.org/wiki/Base64) string to an array of bytes | 10 |

### [Encoding functions](/en/ride/functions/built-in-functions/encoding-functions)

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | toBase16String(ByteVector): String | Encodes array of bytes to [Base16](https://en.wikipedia.org/wiki/Hexadecimal) string | 10 |
| 2 | toBase58String(ByteVector): String | Encodes array of bytes to [Base58](https://en.wikipedia.org/wiki/Base58) string | 10 |
| 3 | toBase64String(ByteVector): String | Encodes array of bytes to [Base64](https://en.wikipedia.org/wiki/Base64) string | 10 |

### [Exception functions](/en/ride/functions/built-in-functions/exception-functions)

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | throw() | Raises an exception | 1 |
| 2 | throw(String) | Raises an exception with a message | 1 |

### [Hashing functions](/en/ride/functions/built-in-functions/hashing-functions)

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | blake2b256(ByteVector): ByteVector | Hashes an array of bytes using [BLAKE-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) | 10 |
| 2 | keccak256(ByteVector): ByteVector | Hashes an array of bytes using [SHA-3-256](https://en.wikipedia.org/wiki/SHA-3) | 10 |
| 3 | sha256(ByteVector): ByteVector | Hashes an array of bytes using [SHA-256](https://en.wikipedia.org/wiki/SHA-2) | 10 |

### [List functions](/en/ride/functions/built-in-functions/list-functions)

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | getElement(List[T], Int): T | Gets the element by index | 2 |
| 2 | cons(T, List[T]): List[T] | Inserts the element at the beginning of the list | 2 |
| 3 | size(List[T]): Int | Returns the size of the list | 2 |

### [Math functions](/en/ride/functions/built-in-functions/math-functions)

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | fraction(Int, Int, Int): Int | Multiplies and divides an integer to avoid the integer overflow | 1 |
| 2 | log(Int, Int, Int, Int, Int, Union): Int | Calculates logarithm of the number | 100 |
| 3 | median(List[Int]): Int | Returns the median of a list of integers | 10 |
| 4 | pow(Int, Int, Int, Int, Int, Union): Int | Raises the number to a power | 100 |

### [String functions](/en/ride/functions/built-in-functions/string-functions)

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | contains(String, String): Boolean | Checks whether the string contains substring | 20 |
| 2 | drop(String, Int): String | Drops the first `n` characters of a string | 1 |
| 3 | dropRight(String, Int): String | Drops the last `n` characters of a string | 19 |
| 4 | indexOf(String, String): Int&#124;Unit | Returns the index of the first occurrence of a substring | 20 |
| 5 | indexOf(String, String, Int): Int&#124;Unit | Returns the index of the first occurrence of a substring after a certain index | 20 |
| 6 | size(String): Int | Returns the size of a string | 1 |
| 7 | split(String, String): List[String] | Splits a string delimited by a separator into a list of substrings. | 100 |
| 8 | take(String, Int): String | Takes the first `n` characters from a string | 1 |
| 9 | takeRight(String, Int): String | Takes the last `n` characters from a string | 19 |

### [Union functions](/en/ride/functions/built-in-functions/union-functions)

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | extract(T&#124;Unit): T | Gets a data type from an union | 13 |
| 2 | isDefined(List[T]&#124;Unit): Boolean | Checks if a value is not an union | 1 |
| 3 | value(T&#124;Unit): T | Gets a data type from an union | 13 |
| 4 | valueOrErrorMessage(T&#124;Unit, String): T | Gets a data type from an union. Throws an exception if there is no data | 13 |

### [Verification functions](/en/ride/functions/built-in-functions/verification-functions)

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | checkMerkleProof(ByteVector, ByteVector, ByteVector): Boolean | Checks that the data is part of the [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree) | 30 |
| 2 | rsaVerify(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | Checks that the [RSA](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) digital signature is valid, i.e. it was created by the owner of the public key | 300 |
| 3 | sigVerify(ByteVector, ByteVector, ByteVector): Boolean | Checks that the [Curve25519](https://en.wikipedia.org/wiki/Curve25519) digital signature is valid, i.e. it was created by the owner of the public key | 100 |
