# Ограничения

| Ограничение | Максимальное значение |
| :--- | :--- |
| Размер скрипта | 32 Кбайт |
| [Complexity](/ru/ride/base-concepts/complexity) | 4000 |
| Количество аргументов Callable-функции | 22 |
| Размер имени аннотированной функции | 255 байт |
| Количество вызовов [ScriptTransfer](/ru/ride/structures/common-structures/script-transfer), [Issue](/ru/ride/structures/common-structures/issue), [Reissue](/ru/ride/structures/common-structures/reissue), [Burn](/ru/ride/structures/common-structures/burn) в одном вызове скрипта (применимо для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 4** ) | 10 |
| Количество вызовов [BinaryEntry](/ru/ride/structures/common-structures/binary-entry), [BooleanEntry](/ru/ride/structures/common-structures/boolean-entry), [IntegerEntry](/ru/ride/structures/common-structures/int-entry), [StringEntry](/ru/ride/structures/common-structures/string-entry) в одном вызове скрипта (применимо для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 4**) | 100 |
| Размер записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) для всех вызовов структур [BinaryEntry](/ru/ride/structures/common-structures/binary-entry), [BooleanEntry](/ru/ride/structures/common-structures/boolean-entry), [IntegerEntry](/ru/ride/structures/common-structures/int-entry), [StringEntry](/ru/ride/structures/common-structures/string-entry) в одном вызове скрипта (применимо для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 4**) | 5 Кбайт |
| Размер WriteSet (применимо для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**) | 100 |
| Количество переводов в [TransferSet](/ru/ride/structures/common-structures/transfer-set) (применимо для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**) | 10 |
| Размер значения переменной типа String | 32767 символов |
| Размер значения переменной типа ByteVector | 65536 байт |

> См. также (/ru/ride/limits/weight)