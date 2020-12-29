# [Ride v5] Функции строки

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/functions/built-in-functions/string-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [contains(String, String): Boolean](#contains-string-string-boolean) | Проверяет, содержится ли строка в строке | 3 |
| [drop(String, Int): String](#drop-string-int-string)  | Удаляет первые `n` символов строки | 20 |
| [dropRight(String, Int): String](#dropright-string-int-string)  | Удаляет последние `n` символов строки | 20 |
| [indexOf(String, String): Int&#124;Unit](#indexof-string-string-int-unit) | Возвращает индекс первого вхождения подстроки  | 3 |
| [indexOf(String, String, Int): Int&#124;Unit](#indexof-string-string-int-int-unit)  | Возвращает индекс первого вхождения подстроки после указанного индекса | 3 |
| [lastIndexOf(String, String): Int&#124;Unit](#lastindexof-string-string-int-unit) | Возвращает индекс последнего вхождения подстроки | 3 |
| [lastindexOf(String, String, Int): Int&#124;Unit](#lastindexof-string-string-int-int-unit) | Возвращает индекс последнего вхождения подстроки перед указанным индексом | 3 |
| [makeString(List[String], String): String](#makestring-list-string-string-string) | Объединяет строки из списка, используя разделитель | 10 |
| [size(String): Int](#size-string-int) | Возвращает длину строки | 1 |
| [split(String, String): List[String]](#split-string-string-list-string) | Разбивает строку на список подстрок, используя разделитель | 75 |
| [take(String, Int): String](#take) | Возвращает первые `n` символов строки | 20 |
| [takeRight(String, Int): String](#take-right)  | Возвращает последние `n` символов строки | 20 |

## contains(String, String): Boolean

Проверяет, содержится ли строка в строке.

``` ride
contains(haystack: String, needle: String): Boolean
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `haystack`: [String](/ru/ride/v5/data-types/string) | Строка, в которой осуществляется поиск |
| `needle`: [String](/ru/ride/v5/data-types/string) | Искомая строка |

### Примеры

```ride
"hello".contains("hell") # Возвращает true
"hello".contains("world") # Возвращает false
```

## drop(String, Int): String<a id=drop></a>

Удаляет первые `n` символов строки.

``` ride
drop(xs: String, number: Int): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `xs`: [String](/ru/ride/v5/data-types/string) | Строка |
| `number`: [Int](/ru/ride/v5/data-types/int) | Число `n` |

### Примеры

```ride
drop("Apple", 0) # Возвращает "Apple"
drop("Apple", 1) # Возвращает "pple"
drop("Apple", 3) # Возвращает "le"
drop("Apple", 5) # Возвращает пустую строку
drop("Apple", 15) # Возвращает пустую строку
```

## dropRight(String, Int): String<a id=drop-right></a>

Удаляет последние `n` символов строки.

``` ride
dropRight(xs: String, number: Int): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `xs`: [String](/ru/ride/v5/data-types/string) | Строка |
| `number`: [Int](/ru/ride/v5/data-types/int) | Число `n` |

### Примеры

```ride
dropRight("Apple", 0) # Возвращает "Apple"
dropRight("Apple", 1) # Возвращает "Appl"
dropRight("Apple", 3) # Возвращает "Ap"
dropRight("Apple", 5) # Возвращает пустую строку
dropRight("Apple", 15) # Возвращает пустую строку
```

## indexOf(String, String): Int&#124;Unit<a id=index-of></a>

Возвращает индекс первого вхождения подстроки.

``` ride
indexOf(str: String, substr: String): Int|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `str`: [String](/ru/ride/v5/data-types/string) | Строка |
| `substr`: [String](/ru/ride/v5/data-types/string) | Подстрока |

### Примеры

```ride
indexOf("Apple","ple") # Возвращает 3
indexOf("Apple","le") # Возвращает 4
indexOf("Apple","e") # Возвращает 5
```

## indexOf(String, String, Int): Int&#124;Unit<a id=index-of></a>

Возвращает индекс первого вхождения подстроки после указанного индекса.

``` ride
indexOf(str: String, substr: String, offset: Int): Int|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `str`: [String](/ru/ride/v5/data-types/string) | Строка |
| `substr`: [String](/ru/ride/v5/data-types/string) | Подстрока |
| `offset`: [Int](/ru/ride/v5/data-types/int) | Индекс |

### Примеры

```ride
indexOf("Apple","ple", 1) # Возвращает 2
indexOf("Apple","le", 2) # Возвращает 3
indexOf("Apple","e", 3) # Возвращает 4
```

## lastIndexOf(String, String): Int|Unit

Возвращает индекс последнего вхождения подстроки.

``` ride
lastIndexOf(str: String, substr: String): Int|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `str`: [String](/ru/ride/v5/data-types/string) | Строка |
| `substr`: [String](/ru/ride/v5/data-types/string) | Подстрока |

### Примеры

```ride
lastIndexOf("Apple","pp") # Возвращает 1
lastIndexOf("Apple","p") # Возвращает 2
lastIndexOf("Apple","s") # Возвращает unit
```

## lastIndexOf(String, String, Int): Int|Unit

Возвращает индекс последнего вхождения подстроки перед указанным индексом.

``` ride
lastIndexOf(str: String, substr: String, offset: Int): Int|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `str`: [String](/ru/ride/v5/data-types/string) | Строка |
| `substr`: [String](/ru/ride/v5/data-types/string) | Подстрока |
| `offset`: [Int](/ru/ride/v5/data-types/int) | Индекс |

### Примеры

```ride
lastIndexOf("mamamama","ma",4) # Возвращает 4
lastIndexOf("mamamama","ma",3) # Возвращает 2
```

## makeString(List[String], String): String

Объединяет строки из списка, используя разделитель.

```ride
makeString(arr: List[String], separator: String): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `arr`: [List](/ru/ride/v5/data-types/list)[[String](/ru/ride/v5/data-types/string)] | Список строк для объединения |
| `separator`: [String](/ru/ride/v5/data-types/string) | Разделитель |

### Пример

```ride
makeString(["Apple","Orange","Mango"], " & ") # Возвращает "Apple & Orange & Mango"
```

## size(String): Int<a id=size></a>

Возвращает длину строки.

``` ride
size(xs: String): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `xs`: [String](/ru/ride/v5/data-types/string) | Строка |

### Примеры

```ride
size("Ap") # Возвращает 2
size("Appl") # Возвращает 4
size("Apple") # Возвращает 5
```

## split(String, String): List[String]<a id=split></a>

Разбивает строку на список подстрок, используя разделитель.

``` ride
split(str: String, separator: String): List[String]
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `str`: [String](/ru/ride/v5/data-types/string) | Строка |
| `separator`: [Int](/ru/ride/v5/data-types/int) | Разделитель |

### Примеры

```ride
split("A.p.p.l.e", ".") # Возвращает ["A", "p", "p", "l", "e"]
split("Apple", ".") # Возвращает ["Apple"]
split("Apple", "") # Возвращает ["A", "p", "p", "l", "e"]
split("Ap.ple", ".") # Возвращает ["Ap","ple"]
```

## take(String, Int): String<a id=take></a>

Возвращает первые n символов строки.

``` ride
take(xs: String, number: Int): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `xs`: [String](/ru/ride/v5/data-types/string) | Строка |
| `number`: [Int](/ru/ride/v5/data-types/int) | Число `n` |

### Примеры

```ride
take("Apple", 0) # Возвращает пустую строку
take("Apple", 1) # Возвращает "A"
take("Apple", 3) # Возвращает "App"
take("Apple", 5) # Возвращает "Apple"
take("Apple", 15) # Возвращает "Apple"
take("Apple", -10) # Возвращает ""
```

## takeRight(String, Int): String<a id=take-right></a>

Возвращает последние `n` символов строки.

``` ride
takeRight(xs: String, number: Int): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `xs`: [String](/ru/ride/v5/data-types/string) | Строка |
| `number`: [Int](/ru/ride/v5/data-types/int) | Число `n` |

### Примеры

```ride
takeRight("Apple", 0) # Возвращает пустую строку
takeRight("Apple", 1) # Возвращает "A"
takeRight("Apple", 3) # Возвращает "ple"
takeRight("Apple", 5) # Возвращает "Apple"
takeRight("Apple", 15) # Возвращает "Apple"
```
