# Функции списка

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [cons(A, List[B]): List[A&#124;B]](#cons-a-list-b-list-a-b) | Вставляет элемент в начало [списка](/ru/ride/data-types/list) | 1 |
| [containsElement(List[T], T): Boolean](#containselement-list-t-t-boolean) | Проверяет наличие элемента в списке | 5 |
| [getElement(List[T], Int): T](#getelement-list-t-int-t) | Получает элемент списка по индексу | 2 |
| [indexOf(List[T], T): Int&#124;Unit](#indexof-list-t-t-int-unit) | Возвращает индекс первого вхождения элемента в списке | 5 |
| [lastIndexOf(List[T], T): Int&#124;Unit](#lastindexof-list-t-t-int-unit) | Возвращает индекс последнего вхождения элемента в списке | 5 |
| [max(List[Int]): Int](#max-list-int-int) | Возвращает наибольший элемент в списке целых чисел | 3 |
| [max(List[BigInt]): BigInt](#max-list-bigint-bigint) | Возвращает наибольший элемент в списке [больших целых чисел](/ru/ride/data-types/bigint) | 192 |
| [min(List[Int]): Int](#min-list-int-int)  | Возвращает наименьший элемент в списке целых чисел | 3 |
| [min(List[BigInt]): BigInt](#min-list-bigint-bigint) | Возвращает наименьший элемент в списке [больших целых чисел](/ru/ride/data-types/bigint) | 192 |
| [removeByIndex(List[T], Int): List[T]](#removebyindex-list-t-int-list-t) | Удаляет элемент из списка по индексу | 7 |
| [size(List[T]): Int](#size-list-t-int)  | Возвращает размер списка | 2 |

`A`, `B`, `T` означает любой допустимый тип.

## cons(A, List[B]): List[A|B]

Вставляет элемент в начало [списка](/ru/ride/data-types/list).

``` ride
cons(head:T, tail: List[T]): List[T]
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `head`: T | Элемент |
| `tail`: [List[T]](/ru/ride/data-types/list) | Список |

### Примеры

```ride
cons("Ride", ["on", "Waves"]) # Возвращает ["Ride", "on", "Waves"]
cons(1, [2, 3, 4, 5]) # Возвращает [1, 2, 3, 4, 5]
```

## containsElement(List[T], T): Boolean

Проверяет наличие элемента в списке.

```ride
containsElement(list: List[T], element: T): Boolean
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List[T]](/ru/ride/data-types/list) | Список |
| `element`: T | Искомый элемент |

## getElement(List[T], Int): T

Получает элемент [списка](/ru/ride/data-types/list) по индексу.

``` ride
getElement(arr: List[T], pos: Int): T
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `arr`: [List[T]](/ru/ride/data-types/list) | Список |
| `pos`: Int | Индекс элемента |

### Примеры

```ride
getElement(["Ride", "on", "Waves"], 0)  # Возвращает "Ride"
getElement([false, true], 1) # Возвращает true
```

## indexOf(List[T], T): Int|Unit

Возвращает индекс первого вхождения элемента в списке или `unit`, если элемент отсутствует.

``` ride
indexOf(list: List[T], element: T): Int|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List[T]](/ru/ride/data-types/list) | Список |
| `element`: T | Искомый элемент |

### Пример

```ride
let stringList = ["a","b","a","c"]
indexOf("a", stringList) # Возвращает 0
```

## lastIndexOf(List[T], T): Int|Unit

Возвращает индекс последнего вхождения элемента в списке или `unit`, если элемент отсутствует.

``` ride
lastIndexOf(list: List[T], element: T): Int|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List[T]](/ru/ride/data-types/list) | Список |
| `element`: T | Искомый элемент |

### Пример

```ride
let stringList = ["a","b","a","c"]
lastIndexOf("a", stringList) # Возвращает 2
```

## max(List[Int]): Int

Возвращает наибольший элемент в списке целых чисел. Если список пустой, возвращает ошибку.

``` ride
max(List[Int]): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List](/ru/ride/data-types/list)[[Int](/ru/ride/data-types/int)] | Список |

## max(List[BigInt]): BigInt

Возвращает наибольший элемент в списке [больших целых чисел](/ru/ride/data-types/bigint). Если список пустой, возвращает ошибку.

``` ride
max(List[BigInt]): BigInt
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List](/ru/ride/data-types/list)[[BigInt](/ru/ride/data-types/bigint)] | Список |


## min(List[Int]): Int

Возвращает наименьший элемент в списке целых чисел. Если список пустой, возвращает ошибку.

``` ride
min(List[Int]): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List](/ru/ride/data-types/list)[[Int](/ru/ride/data-types/int)] | Список |

## min(List[BigInt]): BigInt

Возвращает наименьший элемент в списке [больших целых чисел](/ru/ride/data-types/bigint). Если список пустой, возвращает ошибку.

``` ride
min(List[BigInt]): BigInt
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List](/ru/ride/data-types/list)[[BigInt](/ru/ride/data-types/bigint)] | Список |


## removeByIndex(List[T], Int): List[T]

Удаляет элемент из списка по индексу.

``` ride
removeByIndex(list: List[T], index: Int): List[T]
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List[T]](/ru/ride/data-types/list) | Список |
| `index`: T | Индекс элемента |

### Примеры

```ride
removeByIndex(["Waves", 42, true], 1) # Возвращает ["Waves", true]
```

## size(List[T]): Int

Возвращает размер [списка](/ru/ride/data-types/list).

``` ride
size(arr: List[T]): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `arr`: [List[T]](/ru/ride/data-types/list) | Список |

### Пример

```ride
size(["Ride", "on", "Waves"]) # Возвращает 3
```
