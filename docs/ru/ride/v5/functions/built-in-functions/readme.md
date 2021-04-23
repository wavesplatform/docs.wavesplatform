# [Ride v5] Встроенные функции

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/functions/built-in-functions/)

**Встроенная функция** — [функция](/ru/ride/functions/) [Стандартной библиотеки](/ru/ride/script/standard-library).

## [Математические функции](/ru/ride/v5/functions/built-in-functions/math-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| fraction(Int, Int, Int): Int | Умножает два целых числа и делит на третье без переполнения | 14 |
| fraction(Int, Int, Int, Union): Int | Умножает два целых числа и делит на третье без переполнения, применяя указанный метод округления | 17 |
| fraction(BigInt, BigInt, BigInt): BigInt | Умножает два [больших целых числа](/ru/ride/v5/data-types/bigint) и делит на третье без переполнения | 128 |
| fraction(BigInt, BigInt, BigInt, Union): BigInt | Умножает два больших целых числа и делит на третье без переполнения, применяя указанный метод округления | 128 |
| log(Int, Int, Int, Int, Int, Union): Int | Вычисляет логарифм числа по заданному основанию| 100 |
| log(BigInt, Int, BigInt, Int, Int, Union): BigInt | Вычисляет логарифм числа по заданному основанию с высокой точностью | 200 |
| median(List[Int]): Int | Возвращает медиану списка целых чисел | 20 |
| median(List[BigInt]): BigInt | Возвращает медиану списка больших целых чисел | 160 |
| pow(Int, Int, Int, Int, Int, Union): Int | Возводит число в степень | 100 |
| pow(BigInt, Int, BigInt, Int, Int, Union): BigInt | Возводит число в степень с высокой точностью | 200 |

## [Функции блокчейна](/ru/ride/v5/functions/built-in-functions/blockchain-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| addressFromRecipient(Address&#124;Alias): Address | Получает [адрес](/ru/blockchain/account/address), соответствующий [псевдониму](/ru/blockchain/account/alias) | 5 |
| assetBalancе(Address&#124;Alias, ByteVector): Int | Получает баланс аккаунта по ID токена | 10 |
| assetInfo(ByteVector): Аsset&#124;Unit | Получает информацию о [токене](/ru/blockchain/token/) | 15 |
| blockInfoByHeight(Int): BlockInfo &#124;Unit | Получает информацию о [блоке](/ru/blockchain/block/) по [высоте блока](/ru/blockchain/block/block-height) | 5 |
| calculateAssetId(Issue): ByteVector | Вычисляет ID ассета, созданного структурой [Issue](/ru/ride/v5/structures/script-actions/issue) при выполнении [вызываемой функции](/ru/ride/v5/functions/callable-function) | 10 |
| calculateLeaseId(Lease): ByteVector | Вычисляет ID лизинга, созданного структурой [Lease](/ru/ride/v5/structures/script-actions/issue) при выполнении вызываемой функции | 1 |
| hashScriptAtAddress(Address&#124;Alias): ByteVector&#124;Unit | Возвращает [BLAKE2b-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29)-хеш скрипта, установленного на аккаунте | 200 |
| transactionHeightById(ByteVector):  Int&#124;Unit | Получает [высоту блока](/ru/blockchain/block/block-height) транзакции | 20 |
| transferTransactionById(ByteVector): TransferTransaction&#124;Unit | Получает данные [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction) | 60 |
| wavesBalance(Address&#124;Alias): Int | Получает баланс аккаунта в [WAVES](/ru/blockchain/token/waves) | 10 |

## [Функции верификации](/ru/ride/v5/functions/built-in-functions/verification-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| bn256groth16Verify(ByteVector, ByteVector, ByteVector): Boolean | Семейство функций.<br>Осуществляют проверку [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу groth16 на кривой bn254 | 800–1650 |
| createMerkleRoot(List[ByteVector], ByteVector, Int) : ByteVector | Вычисляет [корневой хеш дерева Меркла транзакций блока](/ru/blockchain/block/merkle-root) | 30 |
| ecrecover(messageHash: ByteVector, signature: ByteVector) | Восстанавливает открытый ключ из хеша сообщения и цифровой подписи [ECDSA](https://ru.wikipedia.org/wiki/ECDSA) | 70 |
| groth16Verify(ByteVector, ByteVector, ByteVector): Boolean | Семейство функций.<br>Осуществляют проверку [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу [groth16](https://eprint.iacr.org/2016/260.pdf) на кривой bls12-381 | 1200–2700 |
| rsaVerify(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | Семейство функций.<br>Проверяют, что цифровая подпись [RSA](https://ru.wikipedia.org/wiki/RSA) достоверна | 500–1000 |
| sigVerify(ByteVector, ByteVector, ByteVector): Boolean | Семейство функций.<br>Проверяют, что цифровая подпись [Curve25519](https://en.wikipedia.org/wiki/Curve25519) достоверна | 47–200 |

## [Функции вызова dApp из dApp](/ru/ride/v5/functions/built-in-functions/dapp-to-dapp)

| Name | Description | Complexity |
| :--- | :--- | :--- |
| invoke(Address&#124;Alias, String, List[Any], List[AttachedPayments]): Any | Вызывает вызываемую функцию dApp, c ограничением на [повторные вызовы](/ru/ride/v5/functions/built-in-functions/dapp-to-dapp#reentrancy) исходного dApp | 75 |
| reentrantInvoke(Address&#124;Alias, String, List[Any], List[AttachedPayments]): Any | Вызывает вызываемую функцию dApp, без ограничения на повторные вызовы исходного dApp  | 75 |

## [Функции декодирования](/ru/ride/v5/functions/built-in-functions/decoding-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| addressFromString(String): Address&#124;Unit | Декодирует адрес из строки [base58](https://ru.wikipedia.org/wiki/Base58) | 1 |
| addressFromStringValue(String): Address | Декодирует адрес из строки base58. <br>Завершается ошибкой, если адрес невозможно декодировать | 1 |
| fromBase16String(String): ByteVector | Декодирует строку [base16](https://ru.wikipedia.org/wiki/Шестнадцатеричная_система_счисления) в массив байтов | 10 |
| fromBase58String(String): ByteVector | Декодирует строку [base58](https://ru.wikipedia.org/wiki/Base58) в массив байтов | 1 |
| fromBase64String(String): ByteVector | Декодирует строку [base64](https://ru.wikipedia.org/wiki/Base64) в массив байтов | 40 |

## [Функции исключения](/ru/ride/v5/functions/built-in-functions/exception-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| throw() | Выбрасывает исключение | 1 |
| throw(String) | Выбрасывает исключение с сообщением | 1 |

## [Функции кодирования](/ru/ride/v5/functions/built-in-functions/encoding-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| toBase16String(ByteVector): String | Кодирует массив байтов в строку [base16](https://ru.wikipedia.org/wiki/Шестнадцатеричная_система_счисления) | 10 |
| toBase58String(ByteVector): String | Кодирует массив байтов в строку [base58](https://ru.wikipedia.org/wiki/Base58) | 3 |
| toBase64String(ByteVector): String | Кодирует массив байтов в строку [base64](https://ru.wikipedia.org/wiki/Base64) | 35 |

## [Функции конвертации](/ru/ride/v5/functions/built-in-functions/converting-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| addressFromPublicKey(ByteVector): Address | Получает [адрес](/ru/blockchain/account/address), соответствующий открытому ключу аккаунта | 63 |
| parseBigInt(String): BigInt&#124;Unit | Конвертирует строковое представление числа в эквивалентное [большое целое число](/ru/ride/v5/data-types/bigint) | 65 |
| parseBigIntValue(String): BigInt | Конвертирует строковое представление числа в эквивалентное большое целое число.<br>Завершается ошибкой, если строка не может быть преобразована | 65 |
| parseInt(String): Int&#124;Unit | Конвертирует строковое представление числа в эквивалентное целое число | 2 |
| parseIntValue(String): Int | Конвертирует строковое представление числа в эквивалентное целое число. <br>Завершается ошибкой, если строка не может быть преобразована | 2 |
| toBigInt(ByteVector): BigInt | Конвертирует массив байтов в большое целое число | 65 |
| toBigInt(ByteVector, Int, Int | Конвертирует массив байтов начиная с указанного индекса в большое целое число | 65 |
| toBigInt(Int): BigInt | Конвертирует целое число в большое целое | 1 |
| toBytes(Boolean): ByteVector | Конвертирует логическое значение в массив байтов | 1 |
| toBytes(Int): ByteVector | Конвертирует целое число в массив байтов | 1 |
| toBytes(String): ByteVector | Конвертирует строку в массив байтов | 8 |
| toBytes(BigInt): ByteVector | Конвертирует большое целое число в массив байтов | 65 |
| toInt(BigInt): Int | Конвертирует большое целое число в обычное целое.<br>Завершается ошибкой, если число не может быть преобразовано | 1 |
| toInt(ByteVector): Int | Конвертирует массив байтов в целое число | 1 |
| toInt(ByteVector, Int): Int | Конвертирует массив байтов, начиная с указанного индекса, в целое число | 1 |
| toString(Address): String | Конвертирует массив байтов [адреса](/ru/blockchain/account/address) в строку | 10 |
| toString(Boolean): String | Конвертирует логическое значение в строку | 1 |
| toString(Int): String | Конвертирует целое число в строку | 1 |
| toString(BigInt): String | Конвертирует большое целое число в строку | 65 |
| toUtf8String(ByteVector): String | Конвертирует массив байтов в строку в [UTF-8](https://ru.wikipedia.org/wiki/UTF-8) | 7 |
| transferTransactionFromProto(ByteVector): TransferTransaction&#124;Unit | Десериализует транзакцию перевода | 5 |

## [Функции массива байтов](/ru/ride/v5/functions/built-in-functions/byte-array-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| drop(ByteVector, Int): ByteVector | Возвращает массив байтов без первых `N` байтов | 6 |
| dropRight(ByteVector, Int): ByteVector | Возвращает массив байтов без последних `N` байтов | 6 |
| size(ByteVector): Int | Возвращает количество байтов в массиве байтов     | 1 |
| take(ByteVector, Int): ByteVector | Возвращает первые `N` байтов массива байтов | 6 |
| takeRight(ByteVector, Int): ByteVector | Возвращает последние `N` байтов массива байтов     | 6 |

## [Функции объединения](/ru/ride/v5/functions/built-in-functions/union-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| isDefined(T&#124;Unit): Boolean | Проверяет, что параметр отличен от `unit` | 1 |
| value(T&#124;Unit): T | Возвращает значение из параметра типа данных объединение.<br>Завершается ошибкой, если параметр равен `unit` | 2 |
| valueOrElse(T&#124;Unit, T): T | Возвращает значение из параметра типа данных объединение, если параметр не равен `unit`. В противном случае возвращает второй параметр | 2 |
| valueOrErrorMessage(T&#124;Unit, String): T |Возвращает значение из параметра типа данных объединение, если параметр не равен `unit`. В противном случае завершается ошибкой с сообщением, заданным во втором параметре | 2 |

## [Функции получения данных из хранилища данных аккаунта](/ru/ride/v5/functions/built-in-functions/account-data-storage-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| getBinary(Address&#124;Alias, String): ByteVector&#124;Unit | Получает массив байтов по ключу | 10 |
| getBinary(String): ByteVector&#124;Unit | Получает массив байтов по ключу из собственного хранилища данных | 10 |
| getBinaryValue(Address&#124;Alias, String): ByteVector | Получает массив байтов по ключу. Завершается ошибкой, если данных нет | 10 |
| getBinaryValue(String): ByteVector | Получает массив байтов по ключу из собственного хранилища данных. Завершается ошибкой, если данных нет | 10 |
| getBoolean(Address&#124;Alias, String): Boolean&#124;Unit | Получает логическое значение по ключу | 10 |
| getBoolean(String): Boolean&#124;Unit | Получает логическое значение по ключу из собственного хранилища данных | 10 |
| getBooleanValue(Address&#124;Alias, String): Boolean | Получает логическое значение по ключу. Завершается ошибкой, если данных нет | 10 |
| getBooleanValue(String): Boolean | Получает логическое значение по ключу из собственного хранилища данных. Завершается ошибкой, если данных нет | 10 |
| getInteger(Address&#124;Alias, String | Получает целое число по ключу | 10 |
| getInteger(String): Int&#124;Unit | Получает целое число по ключу из собственного хранилища данных | 10 |
| getIntegerValue(Address&#124;Alias, String): Int | Получает целое число по ключу. Завершается ошибкой, если данных нет | 10 |
| getIntegerValue(String): Int | Получает целое число по ключу из собственного хранилища данных. Завершается ошибкой, если данных нет | 10 |
| getString(Address&#124;Alias, String): String&#124;Unit | Получает строку по ключу | 10 |
| getString(String): String&#124;Unit | Получает строку по ключу из собственного хранилища данных | 10 |
| getStringValue(Address&#124;Alias, String): String | Получает строку по ключу. Завершается ошибкой, если данных нет | 10 |
| getStringValue(String): String | Получает строку по ключу из собственного хранилища данных. Завершается ошибкой, если данных нет | 10 |
| isDataStorageUntouched(Address&#124;Alias): Boolean | Проверяет, что хранилище данных указанного аккаунта никогда не содержало записей | 10 |

## [Функции списка](/ru/ride/v5/functions/built-in-functions/list-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| cons(A, List[B]): List[A&#124;B] | Вставляет элемент в начало списка | 1 |
| containsElement(list: List[T], element: T): Boolean | Проверяет наличие элемента в списке | 5 |
| getElement(List[T], Int): T | Получает элемент по индексу | 2 |
| indexOf(List[T], T): Int&#124;Unit | Возвращает индекс первого вхождения элемента в списке | 5 |
| lastIndexOf(List[T], T): Int&#124;Unit | Возвращает индекс последнего вхождения элемента в списке | 5 |
| max(List[Int]): Int | Возвращает наибольший элемент в списке целых чисел | 3 |
| max(List[BigInt]): BigInt | Возвращает наибольший элемент в списке [больших целых чисел](/ru/ride/v5/data-types/bigint) | 192 |
| min(List[Int]): Int | Возвращает наименьший элемент в списке целых чисел | 3 |
| min(List[BigInt]): BigInt | Возвращает наибольший элемент в списке больших целых чисел | 192 |
| removeByIndex(List[T], Int): List[T] | Удаляет элемент из списка по индексу | 7 |
| size(List[T]): Int | Возвращает размер списка | 2 |

`A`, `B`, `T` означает любой допустимый тип.

## [Функции строки](/ru/ride/v5/functions/built-in-functions/string-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| contains(String, String): Boolean | Проверяет, содержится ли строка в строке | 3 |
| drop(String, Int): String | Удаляет первые `n` символов строки | 20 |
| dropRight(String, Int): String | Удаляет последние `n` символов строки | 20 |
| indexOf(String, String): Int&#124;Unit | Возвращает индекс первого вхождения подстроки | 3 |
| indexOf(String, String, Int): Int&#124;Unit | Возвращает индекс первого вхождения подстроки после указанного индекса | 3 |
| lastIndexOf(String, String): Int&#124;Unit | Возвращает индекс последнего вхождения подстроки | 3 |
| lastIndexOf(String, String, Int): Int&#124;Unit | Возвращает индекс последнего вхождения подстроки после указанного индекса | 3 |
| makeString(List[String], String): String | Объединяет строки из списка, используя разделитель | 30 |
| size(String): Int | Возвращает длину строки | 1 |
| split(String, String): List[String] | Разбивает строку на список подстрок, используя разделитель | 75 |
| take(String, Int): String | Возвращает первые `n` символов строки | 20 |
| takeRight(String, Int): String | Возвращает последние `n` символов строки | 20 |

## [Функции транзакции данных](/ru/ride/v5/functions/built-in-functions/data-transaction-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| getInteger(List[], String): Int&#124;Unit | Возвращает целое число из списка записей данных по ключу | 10 |
| getInteger(List[], Int): Int&#124;Unit | Возвращает целое число из списка записей данных по индексу | 4 |
| getIntegerValue(List[], String): Int | Возвращает целое число из списка записей данных по ключу. Завершается ошибкой, если данных нет | 10 |
| getIntegerValue(List[], Int): Int | Возвращает целое число из списка записей данных по индексу. Завершается ошибкой, если данных нет | 4 |
| getBoolean(List[], String): Boolean&#124;Unit | Возвращает логическое значение из списка записей данных по ключу | 10 |
| getBoolean(List[], Int): Boolean&#124;Unit | Возвращает логическое значение из списка записей данных по индексу | 4 |
| getBooleanValue(List[], String): Boolean | Возвращает логическое значение из списка записей данных по ключу. Завершается ошибкой, если данных нет | 10 |
| getBooleanValue(List[], Int): Boolean | Возвращает логическое значение из списка записей данных по индексу. Завершается ошибкой, если данных нет | 4 |
| getBinary(List[], String): ByteVector&#124;Unit | Возвращает массив байтов из списка записей данных по ключу | 10 |
| getBinary(List[], Int): ByteVector&#124;Unit | Возвращает массив байтов из списка записей данных по индексу | 4 |
| getBinaryValue(List[], String): ByteVector | Возвращает массив байтов из списка записей данных по ключу. Завершается ошибкой, если данных нет | 10 |
| getBinaryValue(List[], Int): ByteVector | Возвращает массив байтов из списка записей данных по индексу. Завершается ошибкой, если данных нет | 4 |
| getString(List[] String): String&#124;Unit | Возвращает строку из списка записей данных по ключу | 10 |
| getString(List[], Int): String&#124;Unit | Возвращает строку из списка записей данных по индексу | 4 |
| getStringValue(List[], String): String | Возвращает строку из списка записей данных по ключу. Завершается ошибкой, если данных нет | 10 |
| getStringValue(List[], Int): String | Возвращает строку из списка записей данных по индексу. Завершается ошибкой, если данных нет | 4 |

## [Функции хеширования](/ru/ride/v5/functions/built-in-functions/hashing-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| blake2b256(ByteVector): ByteVector | Семейство функций.<br>Хешируют массив байтов с помощью алгоритма [BLAKE2b-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) | 10–200 |
| keccak256(ByteVector): ByteVector | Семейство функций.<br>Хешируют массив байтов с помощью алгоритма [Keccak-256](https://keccak.team/files/Keccak-submission-3.pdf) | 10–200 |
| sha256(ByteVector): ByteVector | Семейство функций.<br>Хешируют массив байтов с помощью алгоритма [SHA-256](https://en.wikipedia.org/wiki/SHA-2) | 10–200 |
