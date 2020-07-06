# Функции объединения

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [extract(T&#124;Unit): T](#extract) | Возвращает значение из параметра типа данных [объединение](/ru/ride/data-types/union).<br>Выбрасывает исключение, если параметром является [unit](/ru/ride/data-types/unit) | 13 |
| [isDefined(List[T]&#124;Unit): Boolean](#isDefined) | Проверяет, относится ли значение параметра к типу [unit](/ru/ride/data-types/unit) | 1 |
| [value(T&#124;Unit): T](#value) | Возвращает значение из параметра типа данных [объединение](/ru/ride/data-types/union).<br>Выбрасывает исключение, если параметром является [unit](/ru/ride/data-types/unit) | 13 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>2 для Стандартной библиотеки **версии 4** |
| [valueOrElse(T&#124;Unit, T): T](#valueOrElse) | Возвращает из параметра [типа данных объединение](/ru/ride/data-types/union) значение, если оно не является к типу [unit](/ru/ride/data-types/unit). Если значение является пустым, возвращает второй параметр | 2 |
| [valueOrErrorMessage(T&#124;Unit, String): T](#value-error) | Возвращает значение из параметра типа данных [объединение](/ru/ride/data-types/union).<br>Если параметром является [unit](/ru/ride/data-types/unit), возвращает сообщение об ошибке, заданное во втором параметре | 13 для Стандартной библиотеки **версии 3**<br>2 для Стандартной библиотеки **версии 4** |

## extract(T|Unit): T<a id="extract"></a>

> :warning: Функция `extract` не входит в [Стандартную библиотеку](/ru/ride/script/standard-library) версии 4. Используйте `value` вместо нее.

Возвращает значение из параметра типа данных [объединение](/ru/ride/data-types/union).

Выбрасывает исключение, если параметром является [unit](/ru/ride/data-types/unit).

``` ride
extract(a: T|Unit): T
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `a`: T&#124;Unit | Параметр типа данных [объединение](/ru/ride/data-types/union) |

## isDefined(List[T]|Unit): T<a id="isDefined"></a>

Проверяет, относится ли значение параметра к типу [unit](/ru/ride/data-types/unit).

```ride
isDefined(a: List[T]|Unit): Boolean
```

| Параметр | Описание |
| :--- | :--- |
| `a`: T&#124;Unit | Проверяемое значение |

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

| Параметр | Описание |
| :--- | :--- |
| `a`: T&#124;Unit | Параметр типа данных [объединение](/ru/ride/data-types/union) |

## valueOrElse(T|Unit, T): T<a id="valueOrElse"></a>

Возвращает значение из параметра типа данных [объединение](/ru/ride/data-types/union).

Если значение является пустым, возвращает второй параметр.

``` ride
valueOrElse(t: T|Unit, t0: T): T
```

| Параметр | Описание |
| :--- | :--- |
| `t`: T&#124;Unit | Параметр типа данных [объединение](/ru/ride/data-types/union), в котором осуществляется поиск |
| `t0`: T | Возвращается, если параметр `t` относится к типу [unit](/ru/ride/data-types/unit) |

## valueOrErrorMessage(T|Unit, String): T<a id="value-error"></a>

Возвращает значение из параметра типа данных [объединение](/ru/ride/data-types/union).

Если параметром является [unit](/ru/ride/data-types/unit), возвращает сообщение об ошибке, заданное во втором параметре.

``` ride
valueOrErrorMessage(a: T|Unit, msg: String): T
```

| Параметр | Описание |
| :--- | :--- |
| `a`: T&#124;Unit | Параметр типа данных [объединение](/ru/ride/data-types/union) |
| `msg`: String | Сообщение об ошибке |
