# List

`List` — списочный тип данных.

Список может содержать элементы разных типов, в том числе вложенные списки.

Количество элементов списка — не более 1000. Глубина вложенности не ограничена. Ограничения по весу см. в разделе [Вес данных](/ru/ride/limits/weight).

## Операции со списками

Списки поддерживают [конкатенацию](https://ru.wikipedia.org/wiki/Конкатенация), добавление элементов в начало и конец списка.

| Операция  | Обозначение | Сложность |
|---|---|---|
| Конкатенация  | ++  | 10  |
| Добавление элемента в конец списка (слева список, справа элемент) | :+ | 3  |
| Добавление элемента в начало списка (слева элемент, справа список) | :: | 2 |

> :warning: Операторы `++` и `:+` добавлены в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая доступна после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions” (в настоящее время только на [Stagenet](/ru/blockchain/blockchain-network/stage-network)).

## Пример

```ride
nil :+ 1 :+ 2 :+ 3
```

Результат: [1, 2, 3]

```ride
1 :: 2 :: 3 :: nil
```

Результат: [1, 2, 3]

```ride
let intList  = [1, 2]             # List[Int]
let strList  = ["3", "4"]         # List[String]
let joined   = intList ++ strList # List[Int|String]
joined
```

Результат: [1, 2, "3", "4"]

```ride
let appended = joined :+ true     # List[Boolean|Int|String]
appended
```

Результат: [1, 2, "3", "4", true]

```ride
let nested    = intList :: joined  # List[Int|List[Int]|String]
nested
```

Результат: [[1, 2], 1, 2, "3", "4"]
