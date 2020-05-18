# Встроенные функции

**Встроенная функция** — [функция](/ru/ride/functions) [контекста скрипта](/ru/ride/script/script-context).

## [Математические функции](/ru/ride/functions/built-in-functions/math-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| fraction(Int, Int, Int): Int | Конвертирует произвольно большое знаковое целое число в целое число | 1 |
| log(Int, Int, Int, Int, Int, Union): Int | Находит логарифм числа | 100 |
| median(List[Int]): Int | Возвращает медиану списка целых чисел | 10 |
| pow(Int, Int, Int, Int, Int, Union): Int | Возводит число в степень | 100 |

## [Функции блокчейна](/ru/ride/functions/built-in-functions/blockchain-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| assetInfo(ByteVector): Аsset&#124;Unit | Получает информацию о [токене](/ru/blockchain/token) | 100 |
| blockInfoByHeight(Int): BlockInfo &#124;Unit | Получает информацию о [блоке](/ru/blockchain/block) по [высоте блока](/ru/blockchain/block/block-height) | 100 |
| calculateAssetId(Issue): ByteVector | Вычисляет ID ассета, созданного структурой [Issue](/ru/ride/structures/script-actions/issue) при выполнении [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction) | 10 |
| transactionHeightById(ByteVector):  Int&#124;Unit | Получает [высоту блока](/ru/blockchain/block/block-height) транзакции | 100 |
| transferTransactionById(ByteVector): TransferTransaction&#124;Unit | Получает данные [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction) | 100 |

## [Функции верификации](/ru/ride/functions/built-in-functions/verification-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| checkMerkleProof(ByteVector, ByteVector, ByteVector): Boolean | Проверяет, что данные являются частью [дерева Меркла](https://ru.wikipedia.org/wiki/Дерево_хешей) | 30 |
| createMerkleRoot(List[ByteVector], ByteVector, Int) : ByteVector | Вычисляет [корневой хеш дерева Меркла транзакций блока](/ru/blockchain/block/merkle-root) | 30 |
| ecrecover(messageHash: ByteVector, signature: ByteVector) | Восстанавливает открытый ключ из хеша сообщения и цифровой подписи [ECDSA](https://ru.wikipedia.org/wiki/ECDSA) | 70 |
| groth16Verify(ByteVector, ByteVector, ByteVector): Boolean | Семейство функций.<br>Осуществляют проверку [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу [groth16](https://eprint.iacr.org/2016/260.pdf) | 1200–2700 |
| rsaVerify(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | Семейство функций.<br>Проверяют, что цифровая подпись [RSA](https://ru.wikipedia.org/wiki/RSA) достоверна | 300 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>500–1000 для Стандартной библиотеки **версии 4** |
| sigVerify(ByteVector, ByteVector, ByteVector): Boolean | Семейство функций.<br>Проверяют, что цифровая подпись [Curve25519](https://en.wikipedia.org/wiki/Curve25519) достоверна | 100 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>100–200 для Стандартной библиотеки **версии 4** |

## [Функции декодирования](/ru/ride/functions/built-in-functions/decoding-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| addressFromString(String): Address&#124;Unit | Декодирует адрес из строки [Base58](https://en.wikipedia.org/wiki/Base58) | 124 |
| addressFromStringValue(String): Address | Декодирует адрес из строки [Base58](https://en.wikipedia.org/wiki/Base58). <br>Выбрасывает исключение, если адрес невозможно декодировать | 124 |
| fromBase16String(String): ByteVector | Декодирует строку [Base16](https://en.wikipedia.org/wiki/Hexadecimal) в массив байтов | 10 |
| fromBase58String(String): ByteVector | Декодирует строку [Base58](https://en.wikipedia.org/wiki/Base58) в массив байтов | 10 |
| fromBase64String(String): ByteVector | Декодирует строку [Base64](https://en.wikipedia.org/wiki/Base64) в массив байтов | 10 |

## [Функции исключения](/ru/ride/functions/built-in-functions/exception-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| throw() | Выбрасывает исключение | 1 |
| throw(String) | Выбрасывает исключение с сообщением | 1 |

## [Функции кодирования](/ru/ride/functions/built-in-functions/encoding-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| toBase16String(ByteVector): String | Кодирует массив байтов в строку [Base16](https://en.wikipedia.org/wiki/Hexadecimal) | 10 |
| toBase58String(ByteVector): String | Кодирует массив байтов в строку [Base58](https://en.wikipedia.org/wiki/Base58) | 10 |
| toBase64String(ByteVector): String | Кодирует массив байтов в строку [Base64](https://en.wikipedia.org/wiki/Base64) | 10 |

## [Функции конвертации](/ru/ride/functions/built-in-functions/converting-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| addressFromPublicKey(ByteVector): Address | Получает [адрес](/ru/blockchain/account/address), соответствующий открытому ключу аккаунта | 82 |
| addressFromRecipient(Address&#124;Alias): Address | Получает [адрес](/ru/blockchain/account/address), соответствующий [псевдониму](/ru/blockchain/account/alias) | 100 |
| parseInt(String): Int&#124;Unit | Конвертирует строковое представление числа в эквивалентное целое число | 20 |
| parseIntValue(String): Int | Конвертирует строковое представление числа в эквивалентное целое число. <br>Выбрасывает исключение, если строка не может быть спарсена | 20 |
| toBytes(Boolean): ByteVector | Конвертирует логическое значение в массив байтов | 1 |
| toBytes(Int): ByteVector | Конвертирует целое число в массив байтов | 1 |
| toBytes(String): ByteVector | Конвертирует строку в массив байтов | 1 |
| toInt(ByteVector): Int | Конвертирует массив байтов в целое число | 10 |
| toInt(ByteVector, Int): Int | Конвертирует массив байтов, начиная с указанного индекса, в целое число | 10 |
| toString(Address): String | Конвертирует массив байтов [адреса](/ru/blockchain/account/address) в строку | 10 |
| toString(Boolean): String | Конвертирует логическое значение в строку | 1 |
| toString(Int): String | Конвертирует целое число в строку | 1 |
| toUtf8String(ByteVector): String | Конвертирует массив байтов в строку в [UTF-8](https://ru.wikipedia.org/wiki/UTF-8) | 20 |
| transferTransactionFromProto(ByteVector): TransferTransaction&#124;Unit | Десериализует транзакцию перевода | 5 |


## [Функции массива байтов](/ru/ride/functions/built-in-functions/byte-array-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| drop(ByteVector, Int): ByteVector | Возвращает массив байтов без первых `N` байтов | 1 |
| dropRight(ByteVector, Int): ByteVector | Возвращает массив байтов без последних `N` байтов | 19 |
| size(ByteVector): Int | Возвращает количество байтов в массиве байтов     | 1 |
| take(ByteVector, Int): ByteVector | Возвращает первые `N` байтов массива байтов | 1 |
| takeRight(ByteVector, Int): ByteVector | Возвращает последние `N` байтов массива байтов     | 19 |

## [Функции объединения](/ru/ride/functions/built-in-functions/union-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| extract(T&#124;Unit): T | Возвращает значение из параметра типа данных [объединение](/ru/ride/data-types/union). Выбрасывает исключение, если параметром является [unit](/ru/ride/data-types/unit) | 13 |
| isDefined(List[T]&#124;Unit): Boolean | Проверяет, относится ли параметр к типу [unit](/ru/ride/data-types/unit) | 1 |
| value(T&#124;Unit): T | Возвращает значение из параметра типа данных [объединение](/ru/ride/data-types/union). Выбрасывает исключение, если параметром является [unit](/ru/ride/data-types/unit) | 13 |
| valueOrErrorMessage(T&#124;Unit, String): T | Возвращает значение из параметра типа данных [объединение](/ru/ride/data-types/union). Если параметром является [unit](/ru/ride/data-types/unit), возвращает сообщение об ошибке, заданное во втором параметре | 13 |

## [Функции получения данных из хранилища данных аккаунта](/ru/ride/functions/built-in-functions/account-data-storage-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| assetBalancе(Address&#124;Alias, ByteVector): Int | Получает баланс аккаунта по ID токена | 100 |
| getBinary(Address&#124;Alias, String): ByteVector&#124;Unit | Получает массив байтов по ключу | 100 |
| getBinaryValue(Address&#124;Alias, String): ByteVector | Получает массив байтов по ключу. Выбрасывает исключение, если данных нет | 100 |
| getBoolean(Address&#124;Alias, String): Boolean&#124;Unit | Получает логическое значение по ключу | 100 |
| getBooleanValue(Address&#124;Alias, String): Boolean | Получает логическое значение по ключу. Выбрасывает исключение, если данных нет | 100 |
| getInteger(Address&#124;Alias, String): Int&#124;Unit | Получает целое число по ключу | 100 |
| getIntegerValue(Address&#124;Alias, String): Int | Получает целое число по ключу. Выбрасывает исключение, если данных нет | 100 |
| getString(Address&#124;Alias, String): String&#124;Unit | Получает строку по ключу | 100 |
| getStringValue(Address&#124;Alias, String): String | Получает строку по ключу. Выбрасывает исключение, если данных нет | 100 |
| wavesBalance(Address&#124;Alias): Int | Получает баланс аккаунта в [WAVES](/ru/blockchain/token/waves) | 109 |

## [Функции списка](/ru/ride/functions/built-in-functions/list-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| getElement(List[T], Int): T | Получает элемент по индексу | 2 |
| cons(T, List[T]): List[T] | Вставляет элемент в начало списка | 2 |
| size(List[T]): Int | Возвращает размер списка | 2 |

## [Функции строки](/ru/ride/functions/built-in-functions/string-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| contains(String, String): Boolean | Проверяет, содержится ли строка в строке  | 20 |
| drop(String, Int): String | Удаляет первые `n` символов строки | 1 |
| dropRight(String, Int): String | Удаляет последние `n` символов строки | 19 |
| indexOf(String, String): Int&#124;Unit | Возвращает индекс первого вхождения подстроки | 20 |
| indexOf(String, String, Int): Int&#124;Unit | Возвращает индекс первого вхождения подстроки после указанного индекса | 20 |
| size(String): Int | Возвращает длину строки | 1 |
| split(String, String): List[String] | Разбивает строку на список подстрок, используя разделитель | 100 |
| take(String, Int): String | Возвращает первые `n` символов строки | 1 |
| takeRight(String, Int): String | Возвращает последние `n` символов строки | 19 |

## [Функции транзакции данных](/ru/ride/functions/built-in-functions/data-transaction-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| getInteger(List[DataEntry], String): Int&#124;Unit | Возвращает целое число из списка записей данных по ключу | 10 |
| getInteger(List[DataEntry], Int): Int&#124;Unit | Возвращает целое число из списка записей данных по индексу | 30 |
| getIntegerValue(List[DataEntry], String): Int | Возвращает целое число из списка записей данных по ключу. Выбрасывает исключение, если данных нет | 10 |
| getIntegerValue(List[DataEntry], Int): Int | Возвращает целое число из списка записей данных по индексу. Выбрасывает исключение, если данных нет | 30 |
| getBoolean(List[DataEntry], String): Boolean&#124;Unit | Возвращает логическое значение из списка записей данных по ключу | 10 |
| getBoolean(List[DataEntry], Int): Boolean&#124;Unit | Возвращает логическое значение из списка записей данных по индексу | 30 |
| getBooleanValue(List[DataEntry], String): Boolean | Возвращает логическое значение из списка записей данных по ключу. Выбрасывает исключение, если данных нет | 10 |
| getBooleanValue(List[DataEntry], Int): Boolean | Возвращает логическое значение из списка записей данных по индексу. Выбрасывает исключение, если данных нет | 30 |
| getBinary(List[DataEntry], String): ByteVector&#124;Unit | Возвращает массив байтов из списка записей данных по ключу | 10 |
| getBinary(List[DataEntry], Int): ByteVector&#124;Unit | Возвращает массив байтов из списка записей данных по индексу | 30 |
| getBinaryValue(List[DataEntry], String): ByteVector | Возвращает массив байтов из списка записей данных по ключу. Выбрасывает исключение, если данных нет | 10 |
| getBinaryValue(List[DataEntry], Int): ByteVector | Возвращает массив байтов из списка записей данных по индексу. Выбрасывает исключение, если данных нет | 30 |
| getString(List[DataEntry] String): String&#124;Unit | Возвращает строку из списка записей данных по ключу | 10 |
| getString(List[DataEntry], Int): String&#124;Unit | Возвращает строку из списка записей данных по индексу | 30 |
| getStringValue(List[DataEntry], String): String | Возвращает строку из списка записей данных по ключу. Выбрасывает исключение, если данных нет | 10 |
| getStringValue(List[DataEntry], Int): String | Возвращает строку из списка записей данных по индексу. Выбрасывает исключение, если данных нет | 30 |

## [Функции хеширования](/ru/ride/functions/built-in-functions/hashing-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| blake2b256(ByteVector): ByteVector | Семейство функций.<br>Хешируют массив байтов с помощью алгоритма [BLAKE2b-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) | 10 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>10–200 для Стандартной библиотеки **версии 4** |
| keccak256(ByteVector): ByteVector | Семейство функций.<br>Хешируют массив байтов с помощью алгоритма [SHA3-256](https://en.wikipedia.org/wiki/SHA-3) | 10 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>10–200 для Стандартной библиотеки **версии 4** |
| sha256(ByteVector): ByteVector | Семейство функций.<br>Хешируют массив байтов с помощью алгоритма [SHA-256](https://en.wikipedia.org/wiki/SHA-2) | 10 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>10–200 для Стандартной библиотеки **версии 4** |
