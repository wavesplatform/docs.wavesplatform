# Ограничения

| Ограничение | Максимальное значение |
| :--- | :--- |
| Размер скрипта | 32 Кбайт |
| [Сложность](/ru/ride/base-concepts/complexity) скрипта аккаунта | 3000 |
| Сложность скрипта ассета | 4000 |
| Сложность вызываемой функции dApp-скрипта | 4000 |
| Сложность функции-верификатора dApp-скрипта | 3000 |
| Количество аргументов вызываемой функции | 22 |
| Размер имени аннотированной функции | 255 байт |
| Количество вызовов [ScriptTransfer](/ru/ride/structures/script-actions/script-transfer), [Issue](/ru/ride/structures/script-actions/issue), [Reissue](/ru/ride/structures/script-actions/reissue), [Burn](/ru/ride/structures/script-actions/burn), [SponsorFee](/ru/ride/structures/script-actions/sponsor-fee) в одном вызове скрипта (применимо для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 4** ) | 10 |
| Количество вызовов [BinaryEntry](/ru/ride/structures/script-actions/binary-entry), [BooleanEntry](/ru/ride/structures/script-actions/boolean-entry), [IntegerEntry](/ru/ride/structures/script-actions/int-entry), [StringEntry](/ru/ride/structures/script-actions/string-entry), [DeleteEntry](/ru/ride/structures/script-actions/delete-entry) в одном вызове скрипта (применимо для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 4**) | 100 |
| Размер записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) для всех вызовов структур [BinaryEntry](/ru/ride/structures/script-actions/binary-entry), [BooleanEntry](/ru/ride/structures/script-actions/boolean-entry), [IntegerEntry](/ru/ride/structures/script-actions/int-entry), [StringEntry](/ru/ride/structures/script-actions/string-entry) в одном вызове скрипта (применимо для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 4**) | 5 Кбайт |
| Размер WriteSet (применимо для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**) | 100 |
| Количество переводов в [TransferSet](/ru/ride/structures/script-results/transfer-set) (применимо для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**) | 10 |
| Размер значения переменной типа String | 32767 символов |
| Размер значения переменной типа ByteVector | 65536 байт |

> См. также [Вес данных](/ru/ride/limits/weight)