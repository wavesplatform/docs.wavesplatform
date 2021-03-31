# [Ride v5] Функции списка

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/functions/built-in-functions/list-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [cons](#cons)  | Вставляет элемент в начало [списка](/ru/ride/v5/data-types/list) | 1 |
| [containsElement](#containselement)  | Проверяет наличие элемента в списке | 5 |
| [getElement](#getelement)  | Получает элемент списка по индексу | 2 |
| [indexOf](#indexof)  | Возвращает индекс первого вхождения элемента в списке | 5 |
| [lastIndexOf](#lastindexof)  | Возвращает индекс последнего вхождения элемента в списке | 5 |
| [max](#max) | Возвращает наибольший элемент в списке целых чисел | 3 |
| [maxBigInt](#maxBigInt) | Возвращает наибольший элемент в списке [больших целых чисел](/ru/ride/v5/data-types/bigint) | 192 |
| [min](#min)  | Возвращает наименьший элемент в списке целых чисел | 3 |
| [minBigInt](#minBigInt) | Возвращает наименьший элемент в списке [больших целых чисел](/ru/ride/v5/data-types/bigint) | 192 |
| [removeByIndex](#removebyindex) | Удаляет элемент из списка по индексу | 7 |
| [size](#size)  | Возвращает размер списка | 2 |

`T` означает любой допустимый тип.

## cons

Вставляет элемент в начало [списка](/ru/ride/v5/data-types/list).

``` ride
cons(head:T, tail: List[T]): List[T]
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `head`: T | Элемент |
| `tail`: [List[T]](/ru/ride/v5/data-types/list) | Список |

### Примеры

```ride
cons("Ride", ["on", "Waves"]) # Возвращает ["Ride", "on", "Waves"]
cons(1, [2, 3, 4, 5]) # Возвращает [1, 2, 3, 4, 5]
```

## containsElement

Проверяет наличие элемента в списке.

```ride
containsElement(list: List[T], element: T): Boolean
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List[T]](/ru/ride/v5/data-types/list) | Список |
| `element`: T | Искомый элемент |

## getElement

Получает элемент [списка](/ru/ride/v5/data-types/list) по индексу.

``` ride
getElement(arr: List[T], pos: Int): T
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `arr`: [List[T]](/ru/ride/v5/data-types/list) | Список |
| `pos`: Int | Индекс элемента |

### Примеры

```ride
getElement(["Ride", "on", "Waves"], 0)  # Возвращает "Ride"
getElement([false, true], 1) # Возвращает true
```

## indexOf

Возвращает индекс первого вхождения элемента в списке или `unit`, если элемент отсутствует.

``` ride
indexOf(list: List[T], element: T): Int|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List[T]](/ru/ride/v5/data-types/list) | Список |
| `element`: T | Искомый элемент |

### Пример

```ride
let stringList = ["a","b","a","c"]
indexOf("a", stringList) # Возвращает 0
```

## lastIndexOf

Возвращает индекс последнего вхождения элемента в списке или `unit`, если элемент отсутствует.

``` ride
lastIndexOf(list: List[T], element: T): Int|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List[T]](/ru/ride/v5/data-types/list) | Список |
| `element`: T | Искомый элемент |

### Пример

```ride
let stringList = ["a","b","a","c"]
lastIndexOf("a", stringList) # Возвращает 2
```

## max

Возвращает наибольший элемент в списке целых чисел. Если список пустой, возвращает ошибку.

``` ride
max(List[Int]): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List](/ru/ride/v5/data-types/list)[[Int](/ru/ride/v5/data-types/int)] | Список |

## maxBigInt

Возвращает наибольший элемент в списке [больших целых чисел](/ru/ride/v5/data-types/bigint). Если список пустой, возвращает ошибку.

``` ride
maxBigInt(List[BigInt]): BigInt
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List](/ru/ride/v5/data-types/list)[[BigInt](/ru/ride/v5/data-types/bigint)] | Список |


## min

Возвращает наименьший элемент в списке целых чисел. Если список пустой, возвращает ошибку.

``` ride
min(List[Int]): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List](/ru/ride/v5/data-types/list)[[Int](/ru/ride/v5/data-types/int)] | Список |

## minBigInt

Возвращает наименьший элемент в списке [больших целых чисел](/ru/ride/v5/data-types/bigint). Если список пустой, возвращает ошибку.

``` ride
minBigInt(List[BigInt]): BigInt
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List](/ru/ride/v5/data-types/list)[[BigInt](/ru/ride/v5/data-types/bigint)] | Список |


## removeByIndex

Удаляет элемент из списка по индексу.

``` ride
removeByIndex(list: List[T], index: Int): List[T]
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List[T]](/ru/ride/v5/data-types/list) | Список |
| `index`: T | Индекс элемента |

### Примеры

```ride
removeByIndex(["Waves", 42, true], 1) # Возвращает ["Waves", true]
```

## size

Возвращает размер [списка](/ru/ride/v5/data-types/list).

``` ride
size(arr: List[T]): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `arr`: [List[T]](/ru/ride/v5/data-types/list) | Список |

### Пример

```ride
size(["Ride", "on", "Waves"]) # Возвращает 3
```
