# Функции списка

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | [getElement(List[T], Int): T](#get-element)  | Получает элемент [списка](/ru/ride/data-types/list) по индексу | 2 |
| 2 | [cons(T, List[T]): List[T]](#cons)  | Вставляет элемент в начало [списка](/ru/ride/data-types/list) | 2 |
| 3 | [size(List[T]): Int](#size)  | Возвращает размер [списка](/ru/ride/data-types/list) | 2 |

## getElement(List[T], Int): T<a id="get-element"></a>

Получает элемент [списка](/ru/ride/data-types/list) по индексу.

``` ride
getElement(arr: List[T], pos: Int): T
```

### Параметры

#### `arr`: [List[T]](/ru/ride/data-types/list)

Список.

#### `pos`: Int

Индекс элемента.

### Примеры

```ride
getElement(["Ride", "on", "Waves"], 0)  # Возвращает "Ride"
getElement([false, true], 1) # Возвращает true
```

## cons(T, List[T]): List[T] <a id="cons"></a>

Вставляет элемент в начало [списка](/ru/ride/data-types/list).

``` ride
cons(head:T, tail: List[T]): List[T]
```

### Параметры

#### `head`: T

Элемент.

#### `tail`: [List[T]](/ru/ride/data-types/list)

Список.

### Примеры

```ride
cons("Ride", ["on", "Waves"]) # Возвращает ["Ride", "on", "Waves"]
cons(1, [2, 3, 4, 5]) # Возвращает [1, 2, 3, 4, 5]
```

## size(List[T]): Int <a id="size"></a>

Возвращает размер [списка](/ru/ride/data-types/list).

``` ride
size(arr: List[T]): Int
```

### Параметры

#### `arr`: [List[T]](/ru/ride/data-types/list)

Список.

### Примеры

```ride
size(["Ride", "on", "Waves"]) # Возвращает 3
```
