# Функции объединения

| # | Name | Description | Complexity |
| :--- | :--- | :--- | :--- |
| 1 | [extract(T&#124;Unit): T](#extract) | Возвращает значение из параметра типа данных [объединение](/ru/ride/data-types/union).<br>Выбрасывает исключение, если параметром является [unit](/ru/ride/data-types/unit) | 13 |
| 2 | [isDefined(List[T]&#124;Unit): Boolean](#isDefined) | Проверяет, относится ли значение параметра к типу [unit](/ru/ride/data-types/unit) | 1 |
| 3 | [value(T&#124;Unit): T](#value) | Возвращает значение из параметра типа данных [объединение](/ru/ride/data-types/union).<br>Выбрасывает исключение, если параметром является [unit](/ru/ride/data-types/unit) | 13 |
| 4 | [valueOrElse(T&#124;Unit, T): T](#valueOrElse) | Возвращает из параметра [типа данных объединение](/ru/ride/data-types/union) значение, если оно не является к типу [unit](/ru/ride/data-types/unit). Если значение является пустым, возвращает второй параметр | 13 |
| 5 | [valueOrErrorMessage(T&#124;Unit, String): T](#value-error) | Возвращает значение из параметра типа данных [объединение](/ru/ride/data-types/union).<br>Если параметром является [unit](/ru/ride/data-types/unit), возвращает сообщение об ошибке, заданное во втором параметре | 13 |

## extract(T|Unit): T<a id="extract"></a>

Возвращает значение из параметра типа данных [объединение](/ru/ride/data-types/union).

Выбрасывает исключение, если параметром является [unit](/ru/ride/data-types/unit).

``` ride
extract(a: T|Unit): T
```

### Параметры

#### `a`: T|Unit

Параметр типа данных [объединение](/ru/ride/data-types/union).

## isDefined(List[T]|Unit): T<a id="isDefined"></a>

Проверяет, относится ли значение параметра к типу [unit](/ru/ride/data-types/unit).

```ride
isDefined(a: List[T]|Unit): Boolean
```

### Параметры

#### a: T|Unit

Проверяемое значение.

### Пример

```ride
let value = getString(this, "some key")
if isDefined(value) then
    value.extract() == "expected value"
else
    throw("data entry with key 'some key' doesn't exist")
```

## value(T|Unit): T<a id="value"></a>

Возвращает значение из параметра типа данных [объединение](/ru/ride/data-types/union).

Выбрасывает исключение, если параметром является [unit](/ru/ride/data-types/unit).

``` ride
value(a: T|Unit): T
```

### Параметры

#### a: T|Unit

Параметр типа данных [объединение](/ru/ride/data-types/union).

## valueOrElse(T|Unit, T): T<a id="valueOrElse"></a>

Возвращает значение из параметра типа данных [объединение](/ru/ride/data-types/union).

Если значение является пустым, возвращает второй параметр.

``` ride
valueOrElse(t: T|Unit, t0: T): T
```

### Параметры

#### t: T|Unit

Параметр типа данных [объединение](/ru/ride/data-types/union), в котором осуществляется поиск.

#### t0: T

Возвращается, если параметр `t` относится к типу [unit](/ru/ride/data-types/unit).

## valueOrErrorMessage(T|Unit, String): T<a id="value-error"></a>

Возвращает значение из параметра типа данных [объединение](/ru/ride/data-types/union).

Если параметром является [unit](/ru/ride/data-types/unit), возвращает сообщение об ошибке, заданное во втором параметре.

``` ride
valueOrErrorMessage(a: T|Unit, msg: String): T
```

### Параметры

#### a: T|Unit

Параметр типа данных [объединение](/ru/ride/data-types/union).

#### msg: String

Сообщение об ошибке.
