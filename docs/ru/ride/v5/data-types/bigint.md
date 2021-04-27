# [Ride v5] BigInt

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/).

`BigInt` — специальный числовой [тип данных](/ru/ride/v5/data-types/). Предназначен для обработки значений, выходящих за диапазон [Int](/ru/ride/v5/data-types/int), и выполнения вычислений с высокой точностью.

Переменная типа `BigInt` имеет размер 64 байта (512 бит) и содержит целое число из промежутка от –2<sup>511</sup> до 2<sup>511</sup>–1 включительно. Вес значения — 64.

:warning: Значение типа `BigInt` может использоваться только внутри скрипта. [Вызываемая функция](/ru/ride/v5/functions/callable-function) **не может** принимать аргумент типа `BigInt` и возвращать значение типа `BigInt`. Большое значение можно передавать в виде строки, затем использовать функции `parseBigInt` или `parseBigIntValue`.

## Операции с BigInt

Для вычислений с `BigInt` можно использовать операторы:

* Арифметические операторы: **+**, **-**, **\***, **/**, **%**, унарный минус.
* Операторы сравнения: **\<**, **\>**, **<=** и **>=**.
* Операторы равенства: **==** и **!=**.

Оба операнда должны быть `BigInt`.

Следующие функции работают со значениями типа `BigInt`:

* [fraction(BigInt, BigInt, BigInt): BigInt](/ru/ride/v5/functions/built-in-functions/math-functions#fractionbigint)
* [fraction(BigInt, BigInt, BigInt, Union): BigInt](/en/ride/v5/functions/built-in-functions/math-functions#fractionbigintround)
* [log(BigInt, Int, BigInt, Int, Int, Union): BigInt](/ru/ride/v5/functions/built-in-functions/math-functions#logbigint)
* [max(List[BigInt]): BigInt](/ru/ride/v5/functions/built-in-functions/list-functions#max-list-bigint-bigint)
* [median(List[BigInt]): BigInt](/ru/ride/v5/functions/built-in-functions/math-functions#medianbigint)
* [min(List[BigInt]): BigInt](/ru/ride/v5/functions/built-in-functions/list-functions#min-list-bigint-bigint)
* [pow(BigInt, Int, BigInt, Int, Int, Union): BigInt](/ru/ride/v5/functions/built-in-functions/math-functions#powbigint)
* [parseBigInt(String): BigInt|Unit](/ru/ride/v5/functions/built-in-functions/converting-functions#parse-bigint)
* [parseBigIntValue(String): BigInt](/ru/ride/v5/functions/built-in-functions/converting-functions#parse-bigintvalue)
* [toBigInt(ByteVector): BigInt](/ru/ride/v5/functions/built-in-functions/converting-functions#to-bigint-bytevector)
* [toBigInt(ByteVector, Int, Int): BigInt](/ru/ride/v5/functions/built-in-functions/converting-functions#to-bigint-bytevector-int-int)
* [toBigInt(Int): BigInt](/ru/ride/v5/functions/built-in-functions/converting-functions#to-bigint-int)
* [toBytes(BigInt): ByteVector](/ru/ride/v5/functions/built-in-functions/converting-functions#to-bytes-bigint)
* [toInt(BigInt): Int](/ru/ride/v5/functions/built-in-functions/converting-functions#to-int-bigint)
* [toString(BigInt): String](/ru/ride/v5/functions/built-in-functions/converting-functions#to-string-bigint)
