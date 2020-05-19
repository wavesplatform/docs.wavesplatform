# Ограничения

| Ограничение | Максимальное значение |
| :--- | :--- |
| Размер скрипта | 32 Кбайт |
| [Сложность](/ru/ride/base-concepts/complexity) скрипта аккаунта | 4000 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>3000 для **версии 4** |
| Сложность скрипта ассета | 4000 |
| Сложность вызываемой функции dApp-скрипта | 4000 |
| Сложность функции-верификатора dApp-скрипта | 4000 для **версии 3**<br>3000 для **версии 4** |
| Имя функции или переменной | 255 байт |
| Размер значения переменной типа [String](/ru/ride/data-types/string) | 32&nbsp;767 символов для **версии 3**<br>32&nbsp;767 **байт** для **версии 4** |
| Размер значения переменной типа [ByteVector](/ru/ride/data-types/string) | 65&nbsp;536 байт для **версии 3**<br>32&nbsp;767 байт (165&nbsp;996 байт для `DataTransaction.bodyBytes`) для **версии 4** |
| Количество аргументов вызываемой функции | 22 |
| Количество вызовов [ScriptTransfer](/ru/ride/structures/script-actions/script-transfer), [Issue](/ru/ride/structures/script-actions/issue), [Reissue](/ru/ride/structures/script-actions/reissue), [Burn](/ru/ride/structures/script-actions/burn) в одном вызове скрипта (применимо для**версии 4** ) | 10 |
| Количество вызовов [BinaryEntry](/ru/ride/structures/script-actions/binary-entry), [BooleanEntry](/ru/ride/structures/script-actions/boolean-entry), [IntegerEntry](/ru/ride/structures/script-actions/int-entry), [StringEntry](/ru/ride/structures/script-actions/string-entry) в одном вызове скрипта (применимо для  **версии 4**) | 100 |
| Размер записи [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) для всех вызовов структур [BinaryEntry](/ru/ride/structures/script-actions/binary-entry), [BooleanEntry](/ru/ride/structures/script-actions/boolean-entry), [IntegerEntry](/ru/ride/structures/script-actions/int-entry), [StringEntry](/ru/ride/structures/script-actions/string-entry) в одном вызове скрипта (применимо для **версии 4**) | 5 Кбайт |
| Размер `WriteSet` (применимо для **версии 3**) | 100 |
| Количество переводов в [TransferSet](/ru/ride/structures/script-results/transfer-set) (применимо для  **версии 3**) | 10 |

> См. также [Вес данных](/ru/ride/limits/weight)
