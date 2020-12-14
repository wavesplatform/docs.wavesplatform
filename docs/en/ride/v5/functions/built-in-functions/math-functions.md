# [Ride v5] Math functions

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/functions/built-in-functions/math-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [fraction](#fraction) | Multiplies and divides [integers](/en/ride/v5/data-types/int) to avoid overflow | 1 |
| [log](#log)| Calculates logarithm of a number with a given base | 100 |
| [median](#median)| Returns the median of a list of integers | 20 |
| [pow](#pow) | Raises a number to a given power | 100 |

## fraction

Multiplies [integers](/en/ride/v5/data-types/int) `a`, `b` and divides the result by the integer `c` to avoid overflow.

Fraction `a × b / c` should not exceed the maximum value of the integer type 9,223,372,036,854,755,807.

```ride
fraction(a: Int, b: Int, c: Int): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `a`: [Int](/en/ride/v5/data-types/int) | Integer `a` |
| `b`: [Int](/en/ride/v5/data-types/int) | Integer `b` |
| `c`: [Int](/en/ride/v5/data-types/int) | Integer `c` |

### Example

Lets assume that:

a = 100,000,000,000,

b = 50,000,000,000,000,

c = 2,500,000.

The following formula, with [operators](/en/ride/v5/operators/) `*` and `/`, fails due to overflow:

```ride
a * b / c #  overflow, because a × b exceeds max integer value
```

The fraction function with no overflow:

```ride
fraction(a, b, c) # Result: 2,000,000,000,000,000,000
```

## log

Calculates `log`<sub>`b`</sub>`a`.

``` ride
log(value: Int, vp: Int, base: Int, bp: Int, rp: Int, round: UP|DOWN|CEILING|FLOOR|HALFUP|HALFDOWN|HALFEVEN): Int
```

In Ride, there is no [data type](/en/ride/v5/data-types/) with the floating point. That is why, for example, when you need to calculate `log`<sub>2.7</sub>16.25 then the number `value` = 1625, `vp` = 2 and the `base` = 27, `bp` = 1.

More examples:

| a | value | vp |
| :--- | :--- | :--- |
| 16.25 | 1625 | 2 |
| 5 | 5 | 0 |
| 5.00 | 500 | 2 |

If the `log` function returns, for example, 2807, and the parameter of function `rp` = 3, then the result is 2.807; in the number 2807 the last 3 digits is a fractional part.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `value`: [Int](/en/ride/v5/data-types/int) | Number `a` without decimal point |
| `vp`: [Int](/en/ride/v5/data-types/int) | Number of decimals of `a` |
| `base`: [Int](/en/ride/v5/data-types/int) | Logarithm base `b` without decimal point |
| `bp`: [Int](/en/ride/v5/data-types/int) | Number of decimals of `b` |
| `rp`: [Int](/en/ride/v5/data-types/int) | Number of decimals in the resulting value, from 0 to 8 inclusive. Specifies the accuracy of the calculated result. |
| `round`: UP&#124;DOWN&#124;CEILING&#124;FLOOR&#124;HALFUP&#124;HALFDOWN&#124;HALFEVEN | One of the [rounding variables](#rounding-variables) |

### Examples

`log`<sub>2.7</sub>16.25 = 2.807035421...

```ride
log(1625, 2, 27, 1, 2, HALFUP) # Function returns 281, so the result is: 2.81
log(1625, 2, 27, 1, 5, HALFUP) # Function returns 280703542, so the result is: 2.80704
```

```ride
log(0, 0, 2, 0, 0, HALFUP)     # Result: -Infinity
```

## median

Returns the median of the [list](/en/ride/v5/data-types/list). The list can't be empty, otherwise, the function fails.

```ride
median(arr: List[Int]): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `arr`: [List[Int]](/en/ride/v5/data-types/list) | List of integers |

### Examples

```ride
median([1, 2, 3])         # Returns 2
median([2, 4, 9, 20])     # Returns 6
median([-2, -4, -9, -20]) # Returns -7
```

## pow

Calculates `a`<sup>`b`</sup>.

``` ride
pow(base: Int, bp: Int, exponent: Int, ep: Int, rp: Int, round: UP|DOWN|CEILING|FLOOR|HALFUP|HALFDOWN|HALFEVEN): Int
```

In Ride, there is no [data type](/en/ride/v5/data-types/) with the floating point. That is why, for example, when you need to calculate, 16.25<sup>2.7</sup>, then the number `base` = 1625, `bp` = 2, and the `exponent` = 27, `ep` = 1.

If the `pow` function returns, for example, 18591057, and the parameter of function `rp` = 4, then the result is 1859.1057; in the number 18591057 the last 4 digits is a fractional part.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `base`: [Int](/en/ride/v5/data-types/int) | Number `a` without decimal point |
| `bp`: [Int](/en/ride/v5/data-types/int) | Number of decimals of `a` |
| `exponent`: [Int](/en/ride/v5/data-types/int) | Exponent `b` without decimal point |
| `ep`: [Int](/en/ride/v5/data-types/int) | Number of decimals of `b` |
| `rp`: [Int](/en/ride/v5/data-types/int) | Number of decimals in the resulting value. Specifies the accuracy of the calculated result. The value of the variable can be 0 to 8 integer inclusive |
| `round`: UP&#124;DOWN&#124;CEILING&#124;FLOOR&#124;HALFUP&#124;HALFDOWN&#124;HALFEVEN | One of the [rounding variables](#rounding-variables) |

### Examples

16.25<sup>2.7</sup> = 1859,1057168...

```ride
pow(1625, 2, 27, 1, 2, HALFUP) # function returns 185911, so the result is: 1859.11
pow(1625, 2, 27, 1, 5, HALFUP) # function returns 185910572, so, the result is: 1859.10572
```

## Rounding Variables

Below is the list of built-in rounding variables. Every variable corresponds to the [rounding method](https://en.wikipedia.org/wiki/Rounding).

The rounding variables are _only_ used as the parameters of functions [log](#log) and [pow](#pow).

|Name | Description |
| :--- | :--- |
| CEILING | Rounds towards positive infinity |
| DOWN | Rounds towards zero |
| FLOOR | Rounds towards negative infinity |
| HALFDOWN | Rounds towards the nearest integer; if the integers are equidistant - rounds towards zero |
| HALFEVEN | Rounds towards the nearest integer; if the integers are equidistant - rounds towards the nearest even integer |
| HALFUP   | Rounds towards the nearest integer; if the integers are equidistant - rounds away from zero   |
| UP | Rounding away from zero |

### Examples

|Input number/Rounding method | UP | DOWN | CEILING | FLOOR | HALFUP | HALFDOWN | HALFEVEN |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 5.5 | 6 | 5 | 6 | 5 | 6 | 5 | 6 |
| 2.5 | 3 | 2 | 3 | 2 | 3 | 2 | 2 |
| 1.6 | 2 | 1 | 2 | 1 | 2 | 2 | 2 |
| 1.1 | 2 | 1 | 2 | 1 | 1 | 1 | 1 |
| 1.0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| -1.0 | -1 | -1 | -1 | -1 | -1 | -1 | -1 |
| -1.1 | -2 | -1 | -1 | -2 | -1 | -1 | -1 |
| -1.6 | -2 | -1 | -1 | -2 | -2 | -2 | -2 |
| -2.5 | -3 | -2 | -2 | -3 | -3 | -2 | -2 |
| -5.5 | -6 | -5 | -5 | -6 | -6 | -5 | -6 |
