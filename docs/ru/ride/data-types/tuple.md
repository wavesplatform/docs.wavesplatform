# Кортеж

> :warning: Кортежи добавлены в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая доступна после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions” (в настоящее время только на [Stagenet](/ru/blockchain/blockchain-network/stage-network)).

Кортеж — упорядоченный набор элементов. Элементы могут быть любого типа. Длина кортежа  — от 2 до 22 элементов.

Типы данных кортежей:

```
Tuple2[T₁,T₂]
Tuple3[T₁,T₂,T₃]
...
Tuple22[T₁,T₂, ..., T₂₂]
```

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
