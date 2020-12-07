# Функции транзакции данных

Приведенные в этом разделе функции получают данные ключу из структуры [транзакции данных](/ru/ride/v5/structures/transaction-structures/data-transaction) или из произвольного списка записей:
* List[[BinaryEntry](/ru/ride/v5/structures/script-actions/binary-entry)|[BooleanEntry](/ru/ride/v5/structures/script-actions/boolean-entry)|[IntegerEntry](/ru/ride/v5/structures/script-actions/int-entry)|[StringEntry](/ru/ride/v5/structures/script-actions/string-entry)] — для Стандартной библиотеки **версии 4**.
* List[[DataEntry](/ru/ride/v5/structures/script-actions/data-entry)] — для Стандартной библиотеки **версии 3**.

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [getBinary(List[], String): ByteVector&#124;Unit](#get-binary-key) | Возвращает массив байтов из списка записей данных по ключу | 10 |
| [getBinary(List[], Int): ByteVector&#124;Unit](#get-binary-index) | Возвращает массив байтов из списка записей данных по индексу | 30 для Стандартной библиотеки **версии 3**<br>4 для Стандартной библиотеки **версии 4** |
| [getBinaryValue(List[], String): ByteVector](#get-binary-value-key) | Возвращает массив байтов из списка записей данных по ключу. Завершается ошибкой, если данных нет | 10 |
| [getBinaryValue(List[], Int): ByteVector](#get-binary-value-index) | Возвращает массив байтов из списка записей данных по индексу. Завершается ошибкой, если данных нет | 30 для Стандартной библиотеки **версии 3**<br>4 для Стандартной библиотеки **версии 4** |
| [getBoolean(List[], String): Boolean&#124;Unit](#get-boolean-key) | Возвращает логическое значение из списка записей данных по ключу | 10 |
| [getBoolean(List[], Int): Boolean&#124;Unit](#get-boolean-index) | Возвращает логическое значение из списка записей данных по индексу | 30 для Стандартной библиотеки **версии 3**<br>4 для Стандартной библиотеки **версии 4** |
| [getBooleanValue(List[], String): Boolean](#get-boolean-value-key) | Возвращает логическое значение из списка записей данных по ключу. Завершается ошибкой, если данных нет | 10 |
| [getBooleanValue(List[], Int): Boolean](#get-boolean-value-index) | Возвращает логическое значение из списка записей данных по индексу. Завершается ошибкой, если данных нет | 30 для Стандартной библиотеки **версии 3**<br>4 для Стандартной библиотеки **версии 4** |
| [getInteger(List[], String): Int&#124;Unit](#get-integer-key) | Возвращает целое число из списка записей данных по ключу | 10 |
| [getInteger(List[], Int): Int&#124;Unit](#get-integer-index) | Возвращает целое число из списка записей данных по индексу | 30 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>4 для Стандартной библиотеки **версии 4** |
| [getIntegerValuе(List[], String): Int](#get-integer-value-key) | Возвращает целое число из списка записей данных по ключу. Завершается ошибкой, если данных нет | 10 |
| [getIntegerValue(List[], Int): Int](#get-integer-value-index) | Возвращает целое число из списка записей данных по индексу. Завершается ошибкой, если данных нет | 30 для Стандартной библиотеки **версии 3**<br>4 для Стандартной библиотеки **версии 4** |
| [getString(List[], String): String&#124;Unit](#get-string-key) | Возвращает строку из списка записей данных по ключу | 10 |
| [getString(List[], Int): String&#124;Unit](#get-string-index) | Возвращает строку из списка записей данных по индексу | 30 для Стандартной библиотеки **версии 3**<br>4 для Стандартной библиотеки **версии 4** |
| [getStringValue(List[], String) : String](#get-string-value-key) | Возвращает строку из списка записей данных по ключу. Завершается ошибкой, если данных нет | 10 |
| [getStringValue(List[], Int): String](#get-string-value-index) | Возвращает строку из списка записей данных по индексу. Завершается ошибкой, если данных нет | 30 для Стандартной библиотеки **версии 3**<br>4 для Стандартной библиотеки **версии 4** |

## getBinary(List[], String): ByteVector|Unit <a id="get-binary-key"></a>

Возвращает массив байтов из списка записей данных по ключу.

### В Стандартной библиотеке версии 4

``` ride
getBinary(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): ByteVector|Unit
```

### В Стандартной библиотеке версии 3

``` ride
getBinary(data: List[DataEntry], key: String): ByteVector|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| key: [String](/ru/ride/v5/data-types/string) | Ключ |

## getBinary(List[], Int): ByteVector|Unit <a id="get-binary-index"></a>

Возвращает массив байтов из списка записей данных по индексу.

### В Стандартной библиотеке версии 4

``` ride
getBinary(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): ByteVector|Unit
```

### В Стандартной библиотеке версии 3

``` ride
getBinary(data: List[DataEntry], index: Int): ByteVector|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| index: [Int](/ru/ride/v5/data-types/int) | Индекс |

## getBinaryValue(List[], String): ByteVector <a id="get-binary-value-key"></a>

Возвращает массив байтов из списка записей данных по ключу.

Завершается ошибкой, если данных нет.

### В Стандартной библиотеке версии 4

``` ride
getBinaryValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): ByteVector
```

### В Стандартной библиотеке версии 3

``` ride
getBinaryValue(data: List[DataEntry], key: String): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| key: [String](/ru/ride/v5/data-types/string) | Ключ |

## getBinaryValue(List[], Int): ByteVector <a id="get-binary-value-index"></a>

Возвращает массив байтов из списка записей данных по индексу.

Завершается ошибкой, если данных нет.

### В Стандартной библиотеке версии 4

``` ride
getBinaryValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): ByteVector
```

### В Стандартной библиотеке версии 3

``` ride
getBinaryValue(data: List[DataEntry], index: Int): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| index: [Int](/ru/ride/v5/data-types/int) | Индекс |

## getBoolean(List[], String): Boolean|Unit <a id="get-boolean-key"></a>

Возвращает логическое значение из списка записей данных по ключу.

### В Стандартной библиотеке версии 4

``` ride
getBoolean(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): Boolean|Unit
```

### В Стандартной библиотеке версии 3

``` ride
getBoolean(data: List[DataEntry], key: String): Boolean|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| key: [String](/ru/ride/v5/data-types/string) | Ключ |

## getBoolean(data: List[], index: Int): Boolean|Unit <a id="get-boolean-index"></a>

Возвращает логическое значение из списка записей данных по индексу.

### В Стандартной библиотеке версии 4

``` ride
getBoolean(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): Boolean|Unit
```

### В Стандартной библиотеке версии 3

``` ride
getBoolean(data: List[DataEntry], index: Int): Boolean|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| index: [Int](/ru/ride/v5/data-types/int) | Индекс |

## getBooleanValue(List[], String): Boolean <a id="get-boolean-value-key"></a>

Возвращает логическое значение из списка записей данных по ключу.

Завершается ошибкой, если данных нет.

### В Стандартной библиотеке версии 4

``` ride
getBooleanValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): Boolean
```

### В Стандартной библиотеке версии 3

``` ride
getBooleanValue(data: List[DataEntry], key: String): Boolean
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| key: [String](/ru/ride/v5/data-types/string) | Ключ |

## getBooleanValue(List[], Int): Boolean <a id="get-boolean-value-index"></a>

Возвращает логическое значение из списка записей данных по индексу.

Завершается ошибкой, если данных нет.

### В Стандартной библиотеке версии 4

``` ride
getBooleanValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): Boolean
```

### В Стандартной библиотеке версии 3

``` ride
getBooleanValue(data: List[DataEntry], index: Int): Boolean
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

### В Стандартной библиотеке версии 3

``` ride
getInteger(data: List[DataEntry], key: String): Int|Unit
```
### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| key: [String](/ru/ride/v5/data-types/string) | Ключ |

## getInteger(List[], Int): Unit|Int <a id="get-integer-index"></a>

Возвращает целое число из списка записей данных по индексу.

### В Стандартной библиотеке версии 4

``` ride
getInteger(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): Int|Unit
```

### В Стандартной библиотеке версии 3

``` ride
getInteger(data: List[DataEntry], index: Int): Int|Unit
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

### В Стандартной библиотеке версии 3

``` ride
getIntegerValue(data: List[DataEntry], key: String): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| key: [String](/ru/ride/v5/data-types/string) | Ключ |

## getIntegerValue(List[], Int): Int <a id="get-integer-value-index"></a>

Возвращает целое число из списка записей данных по индексу.

Завершается ошибкой, если данных нет

### В Стандартной библиотеке версии 4

``` ride
getIntegerValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): Int
```

### В Стандартной библиотеке версии 3

``` ride
getIntegerValue(data: List[DataEntry], index: Int): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| index: [Int](/ru/ride/v5/data-types/int) | Индекс |

## getString(List[], String): String|Unit <a id="get-string-key"></a>

Возвращает строку из списка записей данных по ключу.

### В Стандартной библиотеке версии 4

``` ride
getString(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): String|Unit
```

### В Стандартной библиотеке версии 3

``` ride
getString(data: List[DataEntry], key: String): String|Unit
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

### В Стандартной библиотеке версии 3

``` ride
getString(data: List[DataEntry], index: Int): String|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| index: [Int](/ru/ride/v5/data-types/int) | Индекс |

## getStringValue(List[], String) : String <a id="get-string-value-key"></a>

Возвращает строку из списка записей данных по ключу.

Завершается ошибкой, если данных нет.

### В Стандартной библиотеке версии 4

``` ride
getStringValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], key: String): String
```

### В Стандартной библиотеке версии 3

``` ride
getStringValue(data: List[DataEntry], key: String): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| key: [String](/ru/ride/v5/data-types/string) | Ключ |

## getStringValue(List[], Int): String <a id="get-string-value-index"></a>

Возвращает строку из списка записей данных по индексу.

Завершается ошибкой, если данных нет.

### В Стандартной библиотеке версии 4

``` ride
getStringValue(data: List[BinaryEntry|BooleanEntry|IntegerEntry|StringEntry], index: Int): String
```

### В Стандартной библиотеке версии 3

``` ride
getStringValue(data: List[DataEntry], index: Int): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| data: [List](/ru/ride/v5/data-types/list)[] | Список записей данных, обычно `tx.data` |
| index: [Int](/ru/ride/v5/data-types/int) | Индекс |
