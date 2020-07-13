# Функции списка

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [cons](#cons)  | Вставляет элемент в начало [списка](/ru/ride/data-types/list) | 2 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>1 для Стандартной библиотеки **версии 4** |
| [containsElement](#containselement)  | Проверяет наличие элемента в списке | 5 |
| [getElement](#getelement)  | Получает элемент списка по индексу | 2 |
| [indexOf](#indexof)  | Возвращает индекс первого вхождения элемента в списке | 5 |
| [lastIndexOf](#lastindexof)  | Возвращает индекс последнего вхождения элемента в списке | 5 |
| [max](#max)  | Возвращает наибольший элемент в списке | 3 |
| [min](#min)  | Возвращает наименьший элемент в списке | 3 |
| [removeByIndex](#removebyindex) | Удаляет элемент из списка по индексу | 7 |
| [size](#size)  | Возвращает размер списка | 2 |

`T` — сокращенная запись для `Boolean|ByteVector|Int|String`.

## cons

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

## containsElement

Проверяет наличие элемента в списке.

> :warning: Функция `containsElement` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) версии 4, которая доступна начиная с версии ноды 1.2.0 после активации фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”. Версии 1.2.x в настоящее время работают только на Stagenet.

```ride
containsElement(list: List[T], element: T): Boolean
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List[T]](/ru/ride/data-types/list) | Список |
| `element`: T | Искомый элемент |

## getElement

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

## indexOf

Возвращает индекс первого вхождения элемента в списке или `unit`, если элемент отсутствует.

> :warning: Функция `indexOf` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) версии 4, которая доступна начиная с версии ноды 1.2.0 после активации фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”. Версии 1.2.x в настоящее время работают только на Stagenet.

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

## lastIndexOf

Возвращает индекс последнего вхождения элемента в списке или `unit`, если элемент отсутствует.

> :warning: Функция `lastIndexOf` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) версии 4, которая доступна начиная с версии ноды 1.2.0 после активации фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”. Версии 1.2.x в настоящее время работают только на Stagenet.

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

## max

Возвращает наибольший элемент в списке. Если список пустой, возвращает ошибку.

> :warning: Функция `max` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) версии 4, которая доступна начиная с версии ноды 1.2.0 после активации фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”. Версии 1.2.x в настоящее время работают только на Stagenet.

``` ride
max(List[Int]): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List[T]](/ru/ride/data-types/list) | Список |

## min

Возвращает наименьший элемент в списке. Если список пустой, возвращает ошибку.

> :warning: Функция `min` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) версии 4, которая доступна начиная с версии ноды 1.2.0 после активации фичи № 15 “Ride V4, VRF, Protobuf, Failed transactions”. Версии 1.2.x в настоящее время работают только на Stagenet.

``` ride
min(List[Int]): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `list`: [List[T]](/ru/ride/data-types/list) | Список |

## removeByIndex

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

## size

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
