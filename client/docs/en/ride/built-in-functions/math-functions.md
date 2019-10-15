# Math functions

| # | Name | Description | Complexity |
|:---| :--- | :--- | :--- |
| 1 |[log(Int, Int, Int, Int, Int, Union): Int](#log)| Returns the logarithm of a number | 100 |
| 2 |[pow(Int, Int, Int, Int, Int, Union): Int](#pow) | Returns a number raised to a power| 100 |

## log(Int, Int, Int, Int, Int, Union): Int<a id="log"></a>

Returns the logarithm of a number.

``` ride
log(value: Int, ep: Int, base: Int, bp: Int, rp: Int, round: Union): Int
```

### Parameters

#### `value`: Int

The number which logarithm should be calculated.

#### `ep`: Int

The number of decimals of the number.

#### `base`: Int

The base of the logarithm.

#### `bp`: Int

The number of decimals of the base.

#### `rp`: Int

The number of decimals of the resulting value.

#### `round`: Union

The [rounding function](#rounding-functions).

The `HalfUp()` function may be used as the default value.

## pow(Int, Int, Int, Int, Int, Union): Int<a id="pow"></a>

Returns a number raised to a power.

``` ride
pow(base: Int, bp: Int, exponent: Int, ep: Int, rp: Int, round: Union): Int
```

### Parameters

#### `base`: Int

The base.

#### `bp`: Int

The number of decimals of the base.

#### `exponent`: Int

The exponent.

#### `ep`: Int

The number of decimals of the exponent.

#### `rp`: Int

The number of decimals of the resulting value.

#### `round`: Union

One of the [rounding functions](#rounding-functions).

The `HalfUp()` function may be used as the default value.

## Rounding functions

The rounding functions are _only_ used as the parameters of [log](#log) and [pow](#pow) functions and they are not used by themselves.

|Name | Description |
| :--- | :--- |
| Ceiling(): Int | Rounding towards positive infinity |
| Down(): Int | Rounding towards zero |
| Floor(): Int | Rounding towards negative infinity |
| HalfDown(): Int | Rounding down towards the nearest integer |
| HalfEven(): Int | Rounding towards the nearest even integer |
| HalfUp(): Int   | Rounding up towards the nearest integer   |
| Up(): Int | Rounding away from zero |

### Examples

| | -1.6 | -1.5 | -1.4 | -1.0 | 1.0 | 1.4 | 1.5 | 1.6 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Ceiling | -1 | -1 | -1 | -1 | 1 | 2 | 2 | 2 |
| Down | -1 | -1 | -1 | -1 | 1 | 1 | 1 | 1 |
| Floor | -2 | -2 | -2 | -1 | 1 | 1 | 1 | 1 |
| HalfDown | -2 | -1 | -1 | -1 | 1 | 1 | 1 | 2 |
| HalfEven | -2 | -2 | -1 | -1 | 1 | 1 | 2 | 2 |
| HalfUp | -2 | -2 | -1 | -1 | 1 | 1 | 2 | 2 |
| Up | -2 | -2 | -2 | -1 | 1 | 2 | 2 | 2 |
