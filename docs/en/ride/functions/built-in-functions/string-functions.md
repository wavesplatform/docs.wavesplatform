# String functions

| Name | Description | Complexity | 
| :--- | :--- | :--- |
| [contains(String, String): Boolean](#contains-string-string-boolean) | Checks whether the string contains substring | 3 |
| [drop(String, Int): String](#dropstring-int-string) | Drops the first `n` characters of a string | 1 for [Standard Library](/en/ride/script/standard-library) **version 3**<br>20 for Standard Library **version 4** |
| [dropRight(String, Int): String](#droprightstring-int-string) | Drops the last `n` characters of a string | 19 for Standard Library **version 3**<br>20 for Standard Library **version 4** |
| [indexOf(String, String): Int&#124;Unit](#indexofstring-stringintunit) | Returns the index of the first occurrence of a substring | 20 for Standard Library **version 3**<br>3 for Standard Library **version 4** |
| [indexOf(String, String, Int): Int&#124;Unit](#indexofstring-string-intintunit) | Returns the index of the first occurrence of a substring after a certain index | 20 for Standard Library **version 3**<br>3 for Standard Library **version 4** |
| [lastIndexOf(String, String): Int&#124;Unit](#lastindexofstring-stringintunit) | Returns the index of the last occurrence of a substring | 20 for Standard Library **version 3**<br>3 for Standard Library **version 4** |
| [lastindexOf(String, String, Int): Int&#124;Unit](#lastindexofstring-string-intintunit) | Returns the index of the last occurrence of a substring before a certain index | 20 for Standard Library **version 3**<br>3 for Standard Library **version 4** |
| [makeString(List[String], String): String](#makestring-list-string-string-string) | Concatenates list strings adding a separator | 10 |
| [size(String): Int](#sizestring-int) | Returns the size of a string | 1 |
| [split(String, String): List[String]](#splitstring-string-liststring) | Splits a string delimited by a separator into a list of substrings | 100 for Standard Library **version 3**<br>75 for Standard Library **version 4** |
| [take(String, Int): String](#take) | Takes the first `n` characters from a string | 1 for Standard Library **version 3**<br>20 for Standard Library **version 4** |
| [takeRight(String, Int): String](#take-right) | Takes the last `n` characters from a string | 19 for Standard Library **version 3**<br>20 for Standard Library **version 4** |

## contains(String, String): Boolean

Checks whether the string contains substring.

> :warning: The `contains` function is added in Standard library **version 4** which becomes available since node version 1.2.0, after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

``` ride
drop(haystack: String, needle: String): Boolean
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `haystack`: String | String to search in |
| `needle`: String | String to search for |

### Examples

```ride
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
"hello".contains("hell") # Возвращает true
"hello".contains("world") # Возвращает false
```

## drop(String, Int): Str<a id="drop"></a>

Drops the first `n` characters of a string.

``` ride
drop(xs: String, number: Int): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `xs`: String | The string |
| `number`: Int | The number `n` |

### Examples

```ride
drop("Apple", 0) # Returns "Apple"
drop("Apple", 1) # Returns "pple"
drop("Apple", 3) # Returns "le"
drop("Apple", 5) # Returns an empty string
drop("Apple", 15) # Returns an empty string
```

## dropRight(String, Int): String<a id="drop-right"></a>

Drops the last `n` characters of a string.

``` ride
dropRight(xs: String, number: Int): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `xs`: String | The string |
| `number`: Int | The number `n` |

### Examples

```ride
dropRight("Apple", 0) # Returns "Apple"
dropRight("Apple", 1) # Returns "Appl"
dropRight("Apple", 3) # Returns "Ap"
dropRight("Apple", 5) # Returns an empty string
dropRight("Apple", 15) # Returns an empty string
```

## indexOf(String, String): Int|Unit<a id="index-of-string"></a>

Returns the index of the first occurrence of a substring.

``` ride
indexOf(str: String, substr: String): Int|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `str`: String | The string |
| `substr`: String | The substring |

### Examples

```ride
indexOf("Apple","ple") # Returns 3
indexOf("Apple","le") # Returns 4
indexOf("Apple","e") # Returns 5
```

## indexOf(String, String, Int): Int|Unit<a id="index-of-string-int"></a>

Returns the index of the first occurrence of a substring after a certain index.

``` ride
indexOf(str: String, substr: String, offset: Int): Int|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `str`: String | The string |
| `substr`: String | The substring |
| `offset`: Int | The index |

### Examples

```ride
indexOf("Apple","ple", 1) # Returns 2
indexOf("Apple","le", 2) # Returns 3
indexOf("Apple","e", 3) # Returns 4
```

## lastIndexOf(String, String): Int|Unit

Returns the index of the last occurrence of a substring.

``` ride
lastIndexOf(str: String, substr: String): Int|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `str`: String | The string |
| `substr`: String | The substring |

### Examples

```ride
lastIndexOf("Apple","pp") # Returns 1
lastIndexOf("Apple","p") # Returns 2
lastIndexOf("Apple","s") # Returns unit
```

## lastIndexOf(String, String, Int): Int|Unit

Returns the index of the last occurrence of a substring before a certain index.

``` ride
lastIndexOf(str: String, substr: String, offset: Int): Int|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `str`: String | The string |
| `substr`: String | The substring |
| `offset`: Int | The index |

### Examples

```ride
lastIndexOf("mamamama","ma",4) # Returns 4
lastIndexOf("mamamama","ma",3) # Returns 2
```

## makeString(List[String], String): String

Concatenates list strings adding a separator.

```ride
makeString(arr: List[String], separator: String): String
```

### Параметры

### Parameters

| Parameter | Description |
| :--- | :--- |
| `arr`: [List](/en/ride/data-types/list)[[String](/en/ride/data-types/string)] | List of strings to concatenate |
| `separator`: [String](/en/ride/data-types/string) | Separator |

### Пример

```ride
makeString(["Apple","Orange","Mango"], " & ") # Returns "Apple & Orange & Mango"
```

## size(String): Int<a id="size"></a>

Returns the size of a string.

``` ride
size(xs: String): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `xs`: String | The string |

### Examples

```ride
size("Ap") # Returns 2
size("Appl") # Returns 4
size("Apple") # Returns 5
```

## split(String, String): List[String]<a id="split"></a>

Splits a string delimited by a separator into a list of substrings.

``` ride
split(str: String, separator: String): List[String]
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `str`: String | The string |
| `separator`: Int | The separator |

### Examples

```ride
split("A.p.p.l.e", ".") # Returns ["A", "p", "p", "l", "e"]
split("Apple", ".") # Returns ["Apple"]
split("Apple", "") # Returns ["A", "p", "p", "l", "e"]
split("Ap.ple", ".") # Returns ["Ap","ple"]
```

## take(String, Int): String<a id="take"></a>

Takes the first `n` characters from a string.

``` ride
take(xs: String, number: Int): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `xs`: String | The string |
| `number`: Int | The number `n` |

### Examples

```ride
take("Apple", 0) # Returns an empty string
take("Apple", 1) # Returns "A"
take("Apple", 3) # Returns "App"
take("Apple", 5) # Returns "Apple"
take("Apple", 15) # Returns "Apple"
take("Apple", -10) # Returns an empty string
```

## takeRight(String, Int): String<a id="take-right"></a>

Takes the last `n` characters from a string.

``` ride
takeRight(xs: String, number: Int): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `xs`: String | The string |
| `number`: Int | The number `n` |

### Examples

```ride
takeRight("Apple", 0) # Returns an empty string
takeRight("Apple", 1) # Returns "A"
takeRight("Apple", 3) # Returns "ple"
takeRight("Apple", 5) # Returns "Apple"
takeRight("Apple", 15) # Returns "Apple"
```
