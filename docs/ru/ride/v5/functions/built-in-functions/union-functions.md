# [Ride v5] Функции объединения

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/functions/built-in-functions/union-functions)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [isDefined(T&#124;Unit): Boolean](#isDefined) | Проверяет, что параметр отличен от `unit` | 1 |
| [value(T&#124;Unit): T](#value) | Возвращает значение из параметра типа данных объединение.<br>Завершается ошибкой, если параметр равен `unit` | 2 |
| [valueOrElse(T&#124;Unit, T): T](#valueOrElse) | Возвращает значение из параметра типа данных объединение, если параметр не равен `unit`. В противном случае возвращает второй параметр | 2 |
| [valueOrErrorMessage(T&#124;Unit, String): T](#value-error) | Возвращает значение из параметра типа данных объединение, если параметр не равен `unit`.<br>В противном случае завершается ошибкой с сообщением, заданным во втором параметре | 2 |

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `a`: T&#124;Unit | Параметр типа данных объединение |

## isDefined(T|Unit): T<a id="isDefined"></a>

Проверяет, что параметр отличен от [unit](/ru/ride/v5/data-types/unit).

```ride
isDefined(a: T|Unit): Boolean
```

| Параметр | Описание |
| :--- | :--- |
| `a`: T&#124;Unit | Параметр типа данных объединение |

### Пример

```ride
let value = getString(this, "some key")
if isDefined(value) then
    value.extract() == "expected value"
else
    throw("data entry with key 'some key' doesn't exist")
```

## value(T|Unit): T<a id="value"></a>

Возвращает значение из параметра типа данных [объединение](/ru/ride/v5/data-types/union).

Завершается ошибкой, если параметр равен [unit](/ru/ride/v5/data-types/unit).

``` ride
value(a: T|Unit): T
```

| Параметр | Описание |
| :--- | :--- |
| `a`: T&#124;Unit | Параметр типа данных объединение |

## valueOrElse(T|Unit, T): T<a id="valueOrElse"></a>

Возвращает значение из параметра типа данных [объединение](/ru/ride/v5/data-types/union).

Если параметр равен [unit](/ru/ride/v5/data-types/unit), возвращает второй параметр.

``` ride
valueOrElse(t: T|Unit, t0: T): T
```

| Параметр | Описание |
| :--- | :--- |
| `t`: T&#124;Unit | Параметр типа данных объединение |
| `t0`: T | Возвращается, если параметр `t` равен [unit](/ru/ride/v5/data-types/unit) |

## valueOrErrorMessage(T|Unit, String): T<a id="value-error"></a>

Возвращает значение из параметра типа данных [объединение](/ru/ride/v5/data-types/union).

Если параметр равен [unit](/ru/ride/v5/data-types/unit), завершается ошибкой с сообщением, заданным во втором параметре.

``` ride
valueOrErrorMessage(a: T|Unit, msg: String): T
```

| Параметр | Описание |
| :--- | :--- |
| `a`: T&#124;Unit | Параметр типа данных объединение |
| `msg`: String | Сообщение об ошибке |
