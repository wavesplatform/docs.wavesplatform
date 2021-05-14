# [Ride v5] Функции транзакции данных

:warning: Это документация Стандартной библиотеки **версии 5**, которая доступна с момента активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations”. [Перейти к&nbsp;версии&nbsp;4](/ru/ride/functions/built-in-functions/data-transaction-functions)

Приведенные в этом разделе функции получают данные ключу из структуры [транзакции данных](/ru/ride/v5/structures/transaction-structures/data-transaction) или из произвольного списка записей.

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [getBinary(List[], String): ByteVector&#124;Unit](#get-binary-key) | Возвращает массив байтов из списка записей данных по ключу | 10 |
| [getBinary(List[], Int): ByteVector&#124;Unit](#get-binary-index) | Возвращает массив байтов из списка записей данных по индексу | 4 |
| [getBinaryValue(List[], String): ByteVector](#get-binary-value-key) | Возвращает массив байтов из списка записей данных по ключу. Завершается ошибкой, если данных нет | 10 |
| [getBinaryValue(List[], Int): ByteVector](#get-binary-value-index) | Возвращает массив байтов из списка записей данных по индексу. Завершается ошибкой, если данных нет | 4 |
| [getBoolean(List[], String): Boolean&#124;Unit](#get-boolean-key) | Возвращает логическое значение из списка записей данных по ключу | 10 |
| [getBoolean(List[], Int): Boolean&#124;Unit](#get-boolean-index) | Возвращает логическое значение из списка записей данных по индексу | 4 |
| [getBooleanValue(List[], String): Boolean](#get-boolean-value-key) | Возвращает логическое значение из списка записей данных по ключу. Завершается ошибкой, если данных нет | 10 |
| [getBooleanValue(List[], Int): Boolean](#get-boolean-value-index) | Возвращает логическое значение из списка записей данных по индексу. Завершается ошибкой, если данных нет | 4 |
| [getInteger(List[], String): Int&#124;Unit](#get-integer-key) | Возвращает целое число из списка записей данных по ключу | 10 |
| [getInteger(List[], Int): Int&#124;Unit](#get-integer-index) | Возвращает целое число из списка записей данных по индексу | 4 |
| [getIntegerValuе(List[], String): Int](#get-integer-value-key) | Возвращает целое число из списка записей данных по ключу. Завершается ошибкой, если данных нет | 10 |
| [getIntegerValue(List[], Int): Int](#get-integer-value-index) | Возвращает целое число из списка записей данных по индексу. Завершается ошибкой, если данных нет | 4 |
| [getString(List[], String): String&#124;Unit](#get-string-key) | Возвращает строку из списка записей данных по ключу | 10 |
| [getString(List[], Int): String&#124;Unit](#get-string-index) | Возвращает строку из списка записей данных по индексу | 4 |
| [getStringValue(List[], String) : String](#get-string-value-key) | Возвращает строку из списка записей данных по ключу. Завершается ошибкой, если данных нет | 10 |
| [getStringValue(List[], Int): String](#get-string-value-index) | Возвращает строку из списка записей данных по индексу. Завершается ошибкой, если данных нет | 4 |

## getBinary(List[], String): ByteVector|Unit <a id="get-binary-key"></a>

Возвращает массив байтов из списка записей данных по ключу.

``` ride
getBinary(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): ByteVector|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| key: [String](/ru/ride/v5/data-types/string) | Ключ |

## getBinary(List[], Int): ByteVector|Unit <a id="get-binary-index"></a>

Возвращает массив байтов из списка записей данных по индексу.

``` ride
getBinary(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): ByteVector|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| index: [Int](/ru/ride/v5/data-types/int) | Индекс |

## getBinaryValue(List[], String): ByteVector <a id="get-binary-value-key"></a>

Возвращает массив байтов из списка записей данных по ключу.

Завершается ошибкой, если данных нет.

``` ride
getBinaryValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| key: [String](/ru/ride/v5/data-types/string) | Ключ |

## getBinaryValue(List[], Int): ByteVector <a id="get-binary-value-index"></a>

Возвращает массив байтов из списка записей данных по индексу.

Завершается ошибкой, если данных нет.

``` ride
getBinaryValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| index: [Int](/ru/ride/v5/data-types/int) | Индекс |

## getBoolean(List[], String): Boolean|Unit <a id="get-boolean-key"></a>

Возвращает логическое значение из списка записей данных по ключу.

``` ride
getBoolean(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): Boolean|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| key: [String](/ru/ride/v5/data-types/string) | Ключ |

## getBoolean(data: List[], index: Int): Boolean|Unit <a id="get-boolean-index"></a>

Возвращает логическое значение из списка записей данных по индексу.

``` ride
getBoolean(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): Boolean|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| index: [Int](/ru/ride/v5/data-types/int) | Индекс |

## getBooleanValue(List[], String): Boolean <a id="get-boolean-value-key"></a>

Возвращает логическое значение из списка записей данных по ключу.

Завершается ошибкой, если данных нет.

``` ride
getBooleanValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): Boolean
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| key: [String](/ru/ride/v5/data-types/string) | Ключ |

## getBooleanValue(List[], Int): Boolean <a id="get-boolean-value-index"></a>

Возвращает логическое значение из списка записей данных по индексу.

Завершается ошибкой, если данных нет.

``` ride
getBooleanValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): Boolean
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| index: [Int](/ru/ride/v5/data-types/int) | Индекс |

## getInteger(List[], String): Int|Unit <a id="get-integer-key"></a>

Возвращает целое число из списка записей данных по ключу.

``` ride
getInteger(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): Int|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| key: [String](/ru/ride/v5/data-types/string) | Ключ |

## getInteger(List[], Int): Unit|Int <a id="get-integer-index"></a>

Возвращает целое число из списка записей данных по индексу.

``` ride
getInteger(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): Int|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| index: [Int](/ru/ride/v5/data-types/int) | Индекс |

## getIntegerValue(List[], String): Int <a id="get-integer-value-key"></a>

Возвращает целое число из списка записей данных по ключу.

Завершается ошибкой, если данных нет.

``` ride
getIntegerValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| key: [String](/ru/ride/v5/data-types/string) | Ключ |

## getIntegerValue(List[], Int): Int <a id="get-integer-value-index"></a>

Возвращает целое число из списка записей данных по индексу.

Завершается ошибкой, если данных нет

``` ride
getIntegerValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| index: [Int](/ru/ride/v5/data-types/int) | Индекс |

## getString(List[], String): String|Unit <a id="get-string-key"></a>

Возвращает строку из списка записей данных по ключу.

``` ride
getString(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): String|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| key: [String](/ru/ride/v5/data-types/string) | Ключ |

## getString(List[], Int): String|Unit <a id="get-string-index"></a>

Возвращает строку из списка записей данных по индексу.

``` ride
getString(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): String|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| index: [Int](/ru/ride/v5/data-types/int) | Индекс |

## getStringValue(List[], String) : String <a id="get-string-value-key"></a>

Возвращает строку из списка записей данных по ключу.

Завершается ошибкой, если данных нет.

``` ride
getStringValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| key: [String](/ru/ride/v5/data-types/string) | Ключ |

## getStringValue(List[], Int): String <a id="get-string-value-index"></a>

Возвращает строку из списка записей данных по индексу.

Завершается ошибкой, если данных нет.

``` ride
getStringValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| index: [Int](/ru/ride/v5/data-types/int) | Индекс |
