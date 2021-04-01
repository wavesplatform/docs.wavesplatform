# [Ride v5] Математические функции

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/functions/built-in-functions/math-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [fraction(Int, Int, Int): Int](#fraction) | Умножает два целых числа и делит на третье без переполнения | 1 |
| [fractionBigInt(BigInt, BigInt, BigInt): BigInt](#fractionbigint) | Умножает два [больших целых числа](/ru/ride/v5/data-types/bigint) и делит на третье без переполнения | 128 |
| [fractionBigInt(BigInt, BigInt, BigInt, Union): BigInt](#fractionbigintround) | Умножает два больших целых числа](/ru/ride/v5/data-types/bigint) и делит на третье без переполнения, применяя указанный метод округления | 128 |
| [log(Int, Int, Int, Int, Int, Union): Int](#log) | Вычисляет логарифм числа по заданному основанию | 100 |
| [logBigInt(BigInt, Int, BigInt, Int, Int, Union): BigInt](#logbigint) | Вычисляет логарифм числа по заданному основанию с высокой точностью | 200 |
| [median(List[Int]): Int](#median) | Возвращает медиану списка целых чисел | 20 |
| [medianBigInt(List[BigInt]): BigInt](#medianbigint) | Возвращает медиану списка больших целых чисел | 160 |
| [pow(Int, Int, Int, Int, Int, Union): Int](#pow) | Возводит число в степень | 100 |
| [powBigInt(BigInt, Int, BigInt, Int, Int, Union): BigInt](#powbigint) | Возводит число в степень с высокой точностью | 200 |

## fraction(Int, Int, Int): Int<a id="fraction"></a>

Умножает [целые числа](/ru/ride/v5/data-types/int) `a` и `b` и делит на целое число `c` без переполнения.

Результат `a × b / c` не должен превышать максимальное целочисленное значение 9&nbsp;223&nbsp;372&nbsp;036&nbsp;854&nbsp;755&nbsp;807.

```ride
fraction(a: Int, b: Int, c: Int): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `a`: Int | Целое `a` |
| `b`: Int | Целое `b` |
| `c`: Int | Целое `c` |

### Примеры

Пусть:

a = 100&nbsp;000&nbsp;000&nbsp;000,

b = 50&nbsp;000&nbsp;000&nbsp;000&nbsp;000,

c = 2&nbsp;500&nbsp;000.

Следующее выражение с [операторами](/ru/ride/v5/operators/) `*` and `/` вызывает ошибку переполнения:

```ride
a × b /c # ошибка, поскольку a × b превышает максимальное целочисленное значение
```

Использование функции `fraction` не приводит к переполнению:

```ride
fraction(a, b, c) # Результат: 2 000 000 000 000 000 000
```

## fractionBigInt(BigInt, BigInt, BigInt): BigInt<a id="fractionbigint"></a>

Умножает [большие целые числа](/ru/ride/v5/data-types/bigint) `a` и `b` и делит на большое целое число `c` без переполнения.

Результат `a × b / c` не должен превышать максимальное значение большого целого.

```ride
fractionBigInt(a: BigInt, b: BigInt, c: BigInt): BigInt
```
### Параметры

| Параметр | Описание |
| :--- | :--- |
| `a`: BigInt | Большое целое `a` |
| `b`: BigInt | Большое целое `b` |
| `c`: BigInt | Большое целое `c` |

## fractionBigInt(BigInt, BigInt, BigInt, Union): BigInt<a id="fractionbigintround"></a>

Умножает [большие целые числа](/ru/ride/v5/data-types/bigint) `a` и `b` и делит на большое целое число `c` без переполнения, применяя указанный метод округления.

Результат `a × b / c` не должен превышать максимальное значение большого целого.

```ride
fractionBigInt(a: BigInt, b: BigInt, c: BigInt, round: DOWN|CEILING|FLOOR|HALFUP|HALFEVEN): BigInt
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `a`: BigInt | Большое целое `a` |
| `b`: BigInt | Большое целое `b` |
| `c`: BigInt | Большое целое `c` |
| `round`: DOWN&#124;CEILING&#124;FLOOR&#124;HALFUP&#124;HALFEVEN | Одна из [переменных округления](#переменные-округления) |

## log(Int, Int, Int, Int, Int, Union): Int<a id="log"></a>

Вычисляет `log`<sub>`b`</sub>`a`.

``` ride
log(value: Int, ep: Int, base: Int, bp: Int, rp: Int, round: DOWN|CEILING|FLOOR|HALFUP|HALFEVEN): Int
```

В Ride нет [типа данных](/ru/ride/v5/data-types/) с плавающей точкой. Поэтому, чтобы вычислить `log`<sub>2,7</sub>16,25, нужно указать `value` = 1625, `vp` = 2 и `base` = 27, `bp` = 1.

Еще примеры:

| a | value | vp |
| :--- | :--- | :--- |
| 16,25 | 1625 | 2 |
| 5 | 5 | 0 |
| 5,00 | 500 | 2 |

Если функция `log` возвращает, например, 2807, а параметр `rp` = 3, это значит, что результат вычисления равен 2,807; в числе 2807 последние 3 цифры — дробная часть.

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `value`: [Int](/ru/ride/v5/data-types/int) | Число `a` без десятичной точки |
| `vp`: [Int](/ru/ride/v5/data-types/int) | Количество знаков после запятой у `a` |
| `base`: [Int](/ru/ride/v5/data-types/int) | Основание логарифма `b` без десятичной точки |
| `bp`: [Int](/ru/ride/v5/data-types/int) | Количество знаков после запятой у `b` |
| `rp`: [Int](/ru/ride/v5/data-types/int) | Количество знаков после запятой у результата, от 0 до 8 включительно. Задает точность вычисления |
| `round`: DOWN&#124;CEILING&#124;FLOOR&#124;HALFUP&#124;HALFEVEN | Одна из [переменных округления](#переменные-округления) |

### Примеры

`log`<sub>2,7</sub>16,25 = 2,807035421...

```ride
log(1625, 2, 27, 1, 2, HALFUP) # Функция возвращает 281, поэтому результат: 2.81
log(1625, 2, 27, 1, 5, HALFUP) # Функция возвращает 280703542, поэтому результат: 2.80704
```

```ride
log(0, 0, 2, 0, 0, HALFUP)     # Результат: -Infinity
```

## logBigInt(BigInt, Int, BigInt, Int, Int, Union): BigInt<a id="logbigint"></a>

Вычисляет `log`<sub>`b`</sub>`a` с высокой точностью.

``` ride
logBigInt(value: BigInt, ep: Int, base: BigInt, bp: Int, rp: Int, round: DOWN|CEILING|FLOOR|HALFUP|HALFEVEN): BigInt
```

В Ride нет [типа данных](/ru/ride/v5/data-types/) с плавающей точкой. Поэтому, чтобы вычислить `log`<sub>2,7</sub>16,25, нужно указать `value` = 1625, `vp` = 2 и `base` = 27, `bp` = 1.

Если функция `logBigInt` возвращает, например, 2807035420964590265, а параметр `rp` = 18, это значит, что результат вычисления равен 2,807035420964590265; в числе 2807035420964590265 последние 18 цифр — дробная часть.

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `value`: [BigInt](/ru/ride/v5/data-types/bigint) | Число `a` без десятичной точки |
| `vp`: [Int](/ru/ride/v5/data-types/int) | Количество знаков после запятой у `a` |
| `base`: [BigInt](/ru/ride/v5/data-types/bigint) | Основание логарифма `b` без десятичной точки |
| `bp`: [Int](/ru/ride/v5/data-types/int) | Количество знаков после запятой у `b` |
| `rp`: [Int](/ru/ride/v5/data-types/int) | Количество знаков после запятой у результата, от 0 до 18 включительно. Задает точность вычисления |
| `round`: DOWN&#124;CEILING&#124;FLOOR&#124;HALFUP&#124;HALFEVEN | Одна из [переменных округления](#переменные-округления) |

## median(List[Int]): Int<a id="median"></a>

Возвращает медиану [списка](/ru/ride/v5/data-types/list) целых чисел. Завершается ошибкой, если список пустой.

``` ride
median(arr: List[Int]): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `arr`: List[Int] | Список целых чисел |

### Примеры

```ride
median([1, 2, 3]) # Возвращает 2
median([2, 4, 9, 20]) # Возвращает 6
median([-2, -4, -9, -20]) # Возвращает -7
```

## medianBigInt(List[BigInt]): BigInt<a id="medianbigint"></a>

Возвращает медиану [списка](/ru/ride/v5/data-types/list) [больших целых чисел](/ru/ride/v5/data-types/bigint). Завершается ошибкой, если список пустой или содержит более 100 элементов.

``` ride
medianBigInt(arr: List[BigInt]): BigInt
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `arr`: List[BigInt] | Список больших целых чисел |

## pow(Int, Int, Int, Int, Int, Union): Int<a id="pow"></a>

Вычисляет `a`<sup>`b`</sup>.

``` ride
pow(base: Int, bp: Int, exponent: Int, ep: Int, rp: Int, round: DOWN|CEILING|FLOOR|HALFUP|HALFEVEN): Int
```

В Ride нет [типа данных](/ru/ride/v5/data-types/) с плавающей точкой. Поэтому, чтобы вычислить 16,25<sup>2,7</sup>, нужно указать `base` = 1625, `bp` = 2 и `exponent` = 27, `ep` = 1.

Если функция `pow` возвращает, например, 18591057, а параметр `rp` = 4, это значит, что результат вычисления равен 1859,1057; в числе 18591057 последние 4 цифры — дробная часть.

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `base`: [Int](/ru/ride/v5/data-types/int) | Число `a` без десятичной точки |
| `bp`: [Int](/ru/ride/v5/data-types/int) | Количество знаков после запятой у `a` |
| `exponent`: [Int](/ru/ride/v5/data-types/int) | Показатель степени `b` без десятичной точки |
| `ep`: [Int](/ru/ride/v5/data-types/int) | Количество знаков после запятой у `b` |
| `rp`: [Int](/ru/ride/v5/data-types/int) | Количество знаков после запятой у результата, от 0 до 8 включительно. Задает точность вычисления |
| `round`: DOWN&#124;CEILING&#124;FLOOR&#124;HALFUP&#124;HALFEVEN | Одна из [переменных округления](#переменные-округления) |

### Примеры

16.25<sup>2.7</sup> = 1859,1057168...

```ride
pow(1625, 2, 27, 1, 2, HALFUP) # function returns 185911, so the result is: 1859.11
pow(1625, 2, 27, 1, 5, HALFUP) # function returns 185910572, so, the result is: 1859.10572
```

## powBigInt(BigInt, Int, BigInt, Int, Int, Union): BigInt<a id="powbigint"></a>

Вычисляет `a`<sup>`b`</sup> с высокой точностью.

``` ride
powBigInt(base: BigInt, bp: Int, exponent: BigInt, ep: Int, rp: Int, round: DOWN|CEILING|FLOOR|HALFUP|HALFEVEN): BigInt
```

В Ride нет [типа данных](/ru/ride/v5/data-types/) с плавающей точкой. Поэтому, чтобы вычислить 16,25<sup>2,7</sup>, нужно указать `base` = 1625, `bp` = 2 и `exponent` = 27, `ep` = 1.

Если функция `powBigInt` возвращает, например, 1859105716849757217692, а параметр `rp` = 18, это значит, что результат вычисления равен 1859,105716849757217692; в числе 1859105716849757217692 последние 18 цифр — дробная часть.

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `base`: [BigInt](/ru/ride/v5/data-types/bigint) | Число `a` без десятичной точки |
| `bp`: [Int](/ru/ride/v5/data-types/int) | Количество знаков после запятой у `a` |
| `exponent`: [BigInt](/ru/ride/v5/data-types/bigint) | Показатель степени `b` без десятичной точки |
| `ep`: [Int](/ru/ride/v5/data-types/int) | Количество знаков после запятой у `b` |
| `rp`: [Int](/ru/ride/v5/data-types/int) | Количество знаков после запятой у результата, от 0 до 18 включительно. Задает точность вычисления |
| `round`: DOWN&#124;CEILING&#124;FLOOR&#124;HALFUP&#124;HALFEVEN | Одна из [переменных округления](#переменные-округления) |

## Переменные округления

Переменные округления соответствуют [методам округления](https://ru.wikipedia.org/wiki/Округление).

Переменные округления используются _только_ в качестве параметров функций [fractionBigInt](#fractionbigintround), [log](#log), [logBigInt](#logbigint), [pow](#pow), [powBigInt](#powbigint).

| Название | Описание |
| :--- | :--- |
| DOWN | Округление к меньшему по модулю (к нулю) |
| CEILING | Округление вверх (к положительной бесконечности) |
| FLOOR | Округление вниз (к отрицательной бесконечности) |
| HALFUP | Округление к ближайшему целому, ±0,5 округляется к большему по модулю |
| HALFEVEN | Округление к ближайшему целому, ±0,5 округляется к четному числу |

### Примеры

| Число/Метод округления | DOWN | CEILING | FLOOR | HALFUP | HALFEVEN |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 5.5 | 5 | 6 | 5 | 6 | 6 |
| 2.5 | 2 | 3 | 2 | 3 | 2 |
| 1.6 | 1 | 2 | 1 | 2 | 2 |
| 1.1 | 1 | 2 | 1 | 1 | 1 |
| 1.0 | 1 | 1 | 1 | 1 | 1 |
| -1.0 | -1 | -1 | -1 | -1 | -1 |
| -1.1 | -1 | -1 | -2 | -1 | -1 |
| -1.6 | -1 | -1 | -2 | -2 | -2 |
| -2.5 | -2 | -2 | -3 | -3 | -2 |
| -5.5 | -5 | -5 | -6 | -6 | -6 |
