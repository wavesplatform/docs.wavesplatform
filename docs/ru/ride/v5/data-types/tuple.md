# [Ride v5] Кортеж

Кортеж — упорядоченный набор элементов. Элементы могут быть любого типа. Длина кортежа  — от 2 до 22 элементов.

Ограничения по весу см. в разделе [Вес данных](/ru/ride/limits/weight).

## Пример

```ride
let x=("Hello Waves",42,true)
x._2
```

Результат: 42

```ride
let (a,b,c)=x
c
```

Результат: true

```
match (if true then (1, 2) else (true, "q")) {
   case _: (Boolean, String) => false
   case _: (Int, Int)        => true
}
```

Результат: true
