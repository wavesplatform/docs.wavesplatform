# Data transaction functions

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/functions/built-in-functions/data-transaction-functions)

The functions listed below retrieve data by key from the [Data transaction](/en/ride/v5/structures/transaction-structures/data-transaction) structure or from any list of data entries.

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [getBinary(List[], String): ByteVector&#124;Unit](#get-binary-string) | Gets a binary value from a list of data entires by key | 10 |
| [getBinary(List[], Int): ByteVector&#124;Unit](#get-binary-integer) | Gets a binary value from a list of data entires by index | 4 |
| [getBinaryValue(List[], String): ByteVector](#get-binary-value-string) | Gets a binary value from a list of data entires by key. Fails if there is no data | 10 |
| [getBinaryValue(List[], Int): ByteVector](#get-binary-value-integer) | Gets a binary value from a list of data entires by index. Fails if there is no data | 4 |
| [getBoolean(List[], String): Boolean&#124;Unit](#get-boolean-string) | Gets a boolean value from a list of data entires by key | 10 |
| [getBoolean(List[], Int): Boolean&#124;Unit](#get-boolean-integer) | Gets a boolean value from a list of data entires by index | 4 |
| [getBooleanValue(List[], String): Boolean](#get-boolean-value-string) | Gets a boolean value from a list of data entires by key. Fails if there is no data | 10 |
| [getBooleanValue(List[], Int: Boolean](#get-boolean-value-integer) | Gets a boolean value from a list of data entires by index. Fails if there is no data | 4 |
| [getInteger(List[], String): Int&#124;Unit](#get-integer-string) | Gets an integer value from a list of data entires by key | 10 |
| [getInteger(List[], Int): Int&#124;Unit](#get-integer-integer) | Gets an integer value from a list of data entires by index | 4 |
| [getIntegerValue(List[], String): Int](#get-integer-value-string) | Gets an integer value from a list of data entires by key. Fails if there is no data | 10 |
| [getIntegerValue(List[], Int): Int](#get-integer-value-integer) | Gets an integer value from a list of data entires by index. Fails if there is no data | 4 |
| [getString(List[] String): String&#124;Unit](#get-string-string) | Gets a string value from a list of data entires by key | 10 |
| [getString(List[], Int): String&#124;Unit](#get-string-integer) | Gets a string value from a list of data entires by index | 4 |
| [getStringValue(List[], String): String](#get-string-value-string) | Gets a string value from a list of data entires by key. Fails if there is no data | 10 |
| [getStringValue(List[], Int): String](#get-string-value-integer) | Gets a string value from a list of data entires by index. Fails if there is no data | 4 |

## getBinary(List[], String): ByteVector|Unit<a id="get-binary-string"></a>

Gets a binary value from a list of data entires by key.

``` ride
getBinary(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): ByteVector|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| data: [List](/en/ride/v5/data-types/list)[] | List of data entries, usually `tx.data` |
| key: [String](/en/ride/v5/data-types/string) | Key |

## getBinary(List[], Int): ByteVector|Unit<a id="get-binary-integer"></a>

Gets a binary value from a list of data entires by index.

``` ride
getBinary(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): ByteVector|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| data: [List](/en/ride/v5/data-types/list)[] | List of data entries, usually `tx.data` |
| index: [Int](/en/ride/v5/data-types/int) | Index |

## getBinaryValue(List[], String): ByteVector<a id="get-binary-value-string"></a>

Gets a binary value from a list of data entires by key. Fails if there is no data.

``` ride
getBinaryValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| data: [List](/en/ride/v5/data-types/list)[] | List of data entries, usually `tx.data` |
| key: [String](/en/ride/v5/data-types/string) | Key |

## getBinaryValue(List[], Int): ByteVector<a id="get-binary-value-integer"></a>

Gets a binary value from a list of data entires by index. Fails if there is no data.

``` ride
getBinaryValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| data: [List](/en/ride/v5/data-types/list)[] | List of data entries, usually `tx.data` |
| index: [Int](/en/ride/v5/data-types/int) | Index |

## getBoolean(List[], String): Boolean|Unit<a id="get-boolean-string"></a>

Gets a boolean value from a list of data entires by key.

``` ride
getBoolean(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): Boolean|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| data: [List](/en/ride/v5/data-types/list)[] | List of data entries, usually `tx.data` |
| key: [String](/en/ride/v5/data-types/string) | Key |

## getBoolean(List[], Int): Boolean|Unit<a id="get-boolean-integer"></a>

Gets a boolean value from a list of data entires by index.

``` ride
getBoolean(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): Boolean|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| data: [List](/en/ride/v5/data-types/list)[] | List of data entries, usually `tx.data` |
| index: [Int](/en/ride/v5/data-types/int) | Index |

## getBooleanValue(List[], String): Boolean<a id="get-boolean-value-string"></a>

Gets a boolean value from a list of data entires by key. Fails if there is no data.

``` ride
getBooleanValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): Boolean
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| data: [List](/en/ride/v5/data-types/list)[] | List of data entries, usually `tx.data` |
| key: [String](/en/ride/v5/data-types/string) | Key |

## getBooleanValue(List[], Int): Boolean<a id="get-boolean-value-integer"></a>

Gets a boolean value from a list of data entires by index. Fails if there is no data.

``` ride
getBooleanValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): Boolean
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| data: [List](/en/ride/v5/data-types/list)[] | List of data entries, usually `tx.data` |
| index: [Int](/en/ride/v5/data-types/int) | Index |

## getInteger(List[], String): Int|Unit<a id="get-integer-string"></a>

Gets integer from a list of data entires by key.

``` ride
getInteger(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): Int|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| data: [List](/en/ride/v5/data-types/list)[] | List of data entries, usually `tx.data` |
| key: [String](/en/ride/v5/data-types/string) | Key |

## getInteger(List[], Int): Int|Unit<a id="get-integer-integer"></a>

Gets an integer value from a list of data entires by index.

``` ride
getInteger(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): Int|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| data: [List](/en/ride/v5/data-types/list)[] | List of data entries, usually `tx.data` |
| index: [Int](/en/ride/v5/data-types/int) | Index |

## getIntegerValue(List[], String): Int<a id="get-integer-value-string"></a>

Gets an integer value from a list of data entires by key. Fails if there is no data.

``` ride
getIntegerValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| data: [List](/en/ride/v5/data-types/list)[] | List of data entries, usually `tx.data` |
| key: [String](/en/ride/v5/data-types/string) | Key |

## getIntegerValue(List[], Int): Int<a id="get-integer-value-integer"></a>

Gets an integer value from a list of data entires by index. Fails if there is no data.

``` ride
getIntegerValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| data: [List](/en/ride/v5/data-types/list)[] | List of data entries, usually `tx.data` |
| index: [Int](/en/ride/v5/data-types/int) | Index |

## getString(List[], String): String|Unit<a id="get-string-string"></a>

Gets a string value from a list of data entires by key.

``` ride
getString(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): String|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| data: [List](/en/ride/v5/data-types/list)[] | List of data entries, usually `tx.data` |
| key: [String](/en/ride/v5/data-types/string) | Key |

## getString(List[], Int): String|Unit<a id="get-string-integer"></a>

Gets a string value from a list of data entires by index.

``` ride
getString(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): String|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| data: [List](/en/ride/v5/data-types/list)[] | List of data entries, usually `tx.data` |
| index: [Int](/en/ride/v5/data-types/int) | Index |

## getStringValue(List[], String): String<a id="get-string-value-string"></a>

Gets a string value from a list of data entires by key. Fails if there is no data.

``` ride
getStringValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| data: [List](/en/ride/v5/data-types/list)[] | List of data entries, usually `tx.data` |
| key: [String](/en/ride/v5/data-types/string) | Key |

## getStringValue(List[], Int): String<a id="get-string-value-integer"></a>

Gets a string value from a list of data entires by index. Fails if there is no data.

``` ride
getStringValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| data: [List](/en/ride/v5/data-types/list)[] | List of data entries, usually `tx.data` |
| index: [Int](/en/ride/v5/data-types/int) | Index |
