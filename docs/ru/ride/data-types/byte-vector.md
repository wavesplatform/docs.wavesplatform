# ByteVector

**ByteVector** — ключевое слово [типа данных](/ru/ride/data-types) массива байтов.

Для присвоения переменной массива байтов используйте один из литералов: `base16`, `base58` или `base64`. За названием литерала в одинарных кавычках следует строка в [Base16](https://en.wikipedia.org/wiki/Hexadecimal#Base16_&#40;Transfer_encoding&#41;), [Base58](https://ru.wikipedia.org/wiki/Base58) или [Base64](https://ru.wikipedia.org/wiki/Base64).

``` ride
let a = base16'52696465'
let b = base58'8t38fWQhrYJsqxXtPpiRCEk1g5RJdq9bG5Rkr2N7mDFC'
let c = base64'UmlkZQ=='
```

С помощью функции [toBytes](/ru/ride/functions/built-in-functions/converting-functions) можно конвертировать [целочисленные](/ru/ride/data-types/int), [логические](/ru/ride/data-types/boolean) и [строковые](/ru/ride/data-types/string) значения в массив байтов:

``` ride
let a = 42.toBytes()
let b = true.toBytes()
let c = "Ride".toBytes()
```

## Ограничения

Максимальный размер переменной типа `ByteVector`:

* В [Стандартной библиотеке](/ru/ride/script/standard-library) версии 3 — 65&nbsp;536 байт.
* В Стандартной библиотеке версии 4 — 32&nbsp;767 байт.
   Исключение: поле `bodyBytes`, полученное из структуры [DataTransaction](/ru/ride/structures/transaction-structures/data-transaction), может иметь размер до 165&nbsp;996 байт. Это значение можно передать в качестве аргумента [функций верификации](/ru/ride/functions/built-in-functions/verification-functions) `rsaVerify` и `sigVerify`, но нельзя объединять с другими массивами байтов.

> :warning: Стандартная библиотека версии 4 доступна начиная с версии ноды 1.2.0 после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”. Версии 1.2.x в настоящее время работают только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).
