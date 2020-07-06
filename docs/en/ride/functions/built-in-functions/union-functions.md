# Union functions

| Name | Description | Complexity |
| | :--- | :--- | :--- |
| [extract(T&#124;Unit): T](#extract) | Gets a data type from a [union](/en/ride/data-types/union) | 13 |
| [isDefined(List[T]&#124;Unit): Boolean](#is-defined) | Checks if a value is not [unit](/en/ride/data-types/unit) | 1 |
| [value(T&#124;Unit): T](#value) | Gets a data type from a [union](/en/ride/data-types/union) | 13 for [Standard Library](/en/ride/script/standard-library) **version 3**<br>2 for Standard Library **version 4** |
| [valueOrElse(T&#124;Unit, T): T](#valueOrElse) | Returns value from [union](/en/ride/data-types/union) type argument if it's not [unit](/en/ride/data-types/unit). Otherwise, returns the second argument | 2 |
| [valueOrErrorMessage(T&#124;Unit, String): T](#value-error) | Gets a data type from a [union](/en/ride/data-types/union). Throws an exception if there is no data | 13 for Standard Library **version 3**<br>2 for Standard Library **version 4** |

## extract(T|Unit): T<a id="extract"></a>

> :warning: This function is disabled in [Standard library](/en/ride/script/standard-library) version 4. Use `value]` instead of it.

Gets a data type from a [union](/en/ride/data-types/union).

``` ride
extract(T|Unit): T
```

| Parameter | Description |
| :--- | :--- |
| `a`: T&#124;Unit | The argument |

## isDefined(List[T]|Unit): Boolean<a id="is-defined"></a>

Checks if a value is not `Unit`.

``` ride
isDefined(a: List[T]|Unit): Boolean
```

| Parameter | Description |
| :--- | :--- |
| `a`: List[T]&#124;Unit | The argument |

## value(T|Unit): T<a id="value"></a>

Gets a data type from a [union](/en/ride/data-types/union).

``` ride
value(a: T|Unit): T
```

| Parameter | Description |
| :--- | :--- |
| `a`: T&#124;Unit | Value from an option |

## valueOrElse(T|Unit, T): T<a id="valueOrElse"></a>

Returns value from [union](/en/ride/data-types/union) type argument if it's not [unit](/en/ride/data-types/unit). Otherwise, returns the second argument.

``` ride
valueOrElse(t: T|Unit, t0: T): T
```

| Parameter | Description |
| :--- | :--- |
| `t`: T&#124;Unit | The argument to return value from |
| `t0`: T | Returned if the value of `t` is unit |

## valueOrErrorMessage(T|Unit, String): T<a id="value-error"></a>

Gets a data type from a [union](/en/ride/data-types/union). Throws an exception if there is no data.

``` ride
valueOrErrorMessage(a: T|Unit, msg: String): T
```

| Parameter | Description |
| :--- | :--- |
| `a`: T&#124;Unit | Value from an option |
| `msg`: String | Error message |
