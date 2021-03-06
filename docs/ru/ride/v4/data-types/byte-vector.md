# [Ride v4 и v3] ByteVector

:warning: Это документация Стандартной библиотеки версии 4 и 3. Рекомендуем использовать версию 5. [Перейти к&nbsp;версии&nbsp;5](/ru/ride/data-types/byte-vector)

`ByteVector` — [тип данных](/ru/ride/v4/data-types/) для массива байтов.

Чтобы присвоить значение переменной типа `ByteVector`, можно использовать строку в кодировке [Base16](https://en.wikipedia.org/wiki/Hexadecimal#Base16_&#40;Transfer_encoding&#41;), [Base58](https://ru.wikipedia.org/wiki/Base58) или [Base64](https://ru.wikipedia.org/wiki/Base64) с соответствующим префиксом, например:

``` ride
let a = base16'52696465'
let b = base58'8t38fWQhrYJsqxXtPpiRCEk1g5RJdq9bG5Rkr2N7mDFC'
let c = base64'UmlkZQ=='
```

Этот способ, в отличие от функций [fromBase16String](/ru/ride/v4/functions/built-in-functions/decoding-functions#from-base-16-string), [fromBase58String](/ru/ride/v4/functions/built-in-functions/decoding-functions#from-base-58-string) и [fromBase64String](/ru/ride/v4/functions/built-in-functions/decoding-functions#from-base-64-string), не увеличивает сложность скрипта, поскольку декодирование выполняется компилятором.

Конвертировать [целочисленные](/ru/ride/v4/data-types/int), [логические](/ru/ride/v4/data-types/boolean) и [строковые](/ru/ride/v4/data-types/string) значения в массив байтов можно с помощью функции [toBytes](/ru/ride/v4/functions/built-in-functions/converting-functions):

``` ride
let a = 42.toBytes()
let b = true.toBytes()
let c = "Ride".toBytes()
```

Другие функции работы с массивом байтов см. в разделе [Встроенные функции](/en/ride/v4/functions/built-in-functions/).

## Ограничения

Максимальный размер переменной типа `ByteVector`:

* В [Стандартной библиотеке](/ru/ride/script/standard-library) версии 3 — 65&nbsp;536 байт.
* В Стандартной библиотеке версии 4 — 32&nbsp;767 байт.

   Исключение: поле `bodyBytes` из [структуры транзакции](/ru/ride/v4/structures/transaction-structures/). Это значение можно передать в качестве аргумента [функций верификации](/ru/ride/v4/functions/built-in-functions/verification-functions) `rsaVerify` и `sigVerify` (но нельзя объединять с другими массивами байтов, если ограничение превышено).
