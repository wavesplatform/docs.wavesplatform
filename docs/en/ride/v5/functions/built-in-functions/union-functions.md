# Union Functions

| Name | Description | Complexity |
| :--- | :--- | :--- |
| isDefined(T&#124;Unit): Boolean | Checks if an argument is not `unit` | 1 |
| value(T&#124;Unit): T | Gets a value from a `union` type argument. Fails if it is `unit` | 2 |
| valueOrElse(T&#124;Unit, T): T | Returns a value from a `union` type argument if it's not `unit`. Otherwise, returns the second argument | 2 |
| valueOrErrorMessage(T&#124;Unit, String): T | Gets a value from a `union` type argument if it's not `unit`. Otherwise, fails with the message specified in the second argument | 2 |

## isDefined(T|Unit): Boolean<a id="is-defined"></a>

Checks if an argument is not `unit`.

``` ride
isDefined(a: T|Unit): Boolean
```

| Parameter | Description |
| :--- | :--- |
| `a`: T&#124;Unit | Argument to check |

## value(T|Unit): T<a id="value"></a>

Gets a value from a [union](/en/ride/v5/data-types/union) type argument. Fails if it is [unit](/en/ride/v5/data-types/unit).

``` ride
value(a: T|Unit): T
```

| Parameter | Description |
| :--- | :--- |
| `a`: T&#124;Unit | Argument to return value from |

## valueOrElse(T|Unit, T): T<a id="valueOrElse"></a>

Returns a value from a [union](/en/ride/v5/data-types/union) type argument if it's not [unit](/en/ride/v5/data-types/unit). Otherwise, returns the second argument.

``` ride
valueOrElse(t: T|Unit, t0: T): T
```

| Parameter | Description |
| :--- | :--- |
| `t`: T&#124;Unit | Argument to return value from |
| `t0`: T | Returned if `t` is `unit` |

## valueOrErrorMessage(T|Unit, String): T<a id="value-error"></a>

Gets a value from a [union](/en/ride/v5/data-types/union) type argument if it's not [unit](/en/ride/v5/data-types/unit). Otherwise, fails with the message specified in the second argument.

``` ride
valueOrErrorMessage(a: T|Unit, msg: String): T
```

| Parameter | Description |
| :--- | :--- |
| `a`: T&#124;Unit | Argument to return value from |
| `msg`: String | Error message |
