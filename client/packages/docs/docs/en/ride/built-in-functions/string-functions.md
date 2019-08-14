# String functions

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | [drop(String, Int): String](#drop) | Drops the first `n` characters of a string | 1 |
| 2 | [dropRight(String, Int): String](#drop-right) | Drops the last `n` characters of a string | 19 |
| 3 | [indexOf(String, String): Int&#124;Unit](#index-of-string) | Returns the index of the first occurrence of a substring | 20 |
| 4 | [indexOf(String, String, Int): Int&#124;Unit](#index-of-string-int) | Returns the index of the first occurrence of a substring after a certain index | 20 |
| 5 | [size(String): Int](#size) | Returns the size of a string | 1 |
| 6 | [split(String, String): List[String]](#split) | Splits a string delimited by a separator into a list of substrings | 100 |
| 7 | [take(String, Int): String](#take) | Takes the first `n` characters from a string | 1 |
| 8 | [takeRight(String, Int): String](#take-right) | Takes the last `n` characters from a string | 19 |

## drop(String, Int): Str<a id="drop"></a>

Drops the first `n` characters of a string.

``` ride
drop(xs: String, number: Int): String
```

### Parameters

#### `xs`: String

The string.

#### `number`: Int

The number `n`.

## dropRight(String, Int): String<a id="drop-right"></a>

Drops the last `n` characters of a string.

``` ride
dropRight(xs: String, number: Int): String
```

### Parameters

#### `xs`: String

The string.

#### `number`: Int

The number `n`.

## indexOf(String, String): Int|Unit<a id="index-of-string"></a>

Returns the index of the first occurrence of a substring.

``` ride
indexOf(str: String, substr: String): Int|Unit
```

### Parameters

#### `str`: String

The string.

#### `substr`: String

The substring.

## indexOf(String, String, Int): Int|Unit<a id="index-of-string-int"></a>

Returns the index of the first occurrence of a substring after a certain index.

``` ride
indexOf(str: String, substr: String, offset: Int): Int|Unit
```

### Parameters

#### `str`: String

The string.

#### `substr`: String

The substring.

#### `offset`: Int

The index.

## size(String): Int<a id="size"></a>

Returns the size of a string.

``` ride
size(xs: String): Int
```

### Parameters

#### `xs`: String

The string.

## split(String, String): List[String]<a id="split"></a>

Splits a string delimited by a separator into a list of substrings.

``` ride
split(str: String, separator: String): List[String]
```

### Parameters

#### `str`: String

The string.

#### `separator`: Int

The separator.

## take(String, Int): String<a id="take"></a>

Takes the first `n` characters from a string.

``` ride
take(xs: String, number: Int): String
```

### Parameters

#### `xs`: String

The string.

#### `number`: Int

The number `n`.

## takeRight(String, Int): String<a id="take-right"></a>

Takes the last `n` characters from a string.

``` ride
takeRight(xs: String, number: Int): String
```

### Parameters

#### `xs`: String

The string.

#### `number`: Int

The number `n`.
