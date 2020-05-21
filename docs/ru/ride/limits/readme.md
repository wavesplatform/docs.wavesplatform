# Ограничения

| Ограничение | Максимальное значение |
| :--- | :--- |
| Размер скрипта dApp | 32 Кбайт |
| Размер скрипта аккаунта или скрипта ассета | 8 Кбайт |
| [Сложность](/ru/ride/base-concepts/complexity) скрипта аккаунта | 4000 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии&nbsp;3**<br>3000 для **версии 4** |
| Сложность скрипта ассета | 4000 |
| Сложность вызываемой функции dApp-скрипта | 4000 |
| Сложность функции-верификатора dApp-скрипта | 4000 для **версии 3**<br>3000 для **версии 4** |
| Имя функции или переменной | 255 байт |
| Размер значения переменной типа [String](/ru/ride/data-types/string) | 32&nbsp;767 символов для **версии&nbsp;3**<br>32&nbsp;767 **байт** для **версии 4** |
| Размер значения переменной типа [ByteVector](/ru/ride/data-types/string) | 65&nbsp;536 байт для **версии&nbsp;3**<br>32&nbsp;767 байт (165&nbsp;947 байт для поля `bodyBytes` структуры транзакции) для **версии&nbsp;4** |
| Вес данных | См. [Вес данных](/ru/ride/limits/weight) |
| Количество аргументов вызываемой функции | 22 |
| Суммарное количество структур [ScriptTransfer](/ru/ride/structures/script-actions/script-transfer), [Issue](/ru/ride/structures/script-actions/issue), [Reissue](/ru/ride/structures/script-actions/reissue), [Burn](/ru/ride/structures/script-actions/burn), [SponsorFee](/ru/ride/structures/script-actions/sponsor-fee) в [результате выполнения](/ru/ride/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции (применимо для **версии&nbsp;4** ) | 10 |
| Суммарное количество структур [BinaryEntry](/ru/ride/structures/script-actions/binary-entry), [BooleanEntry](/ru/ride/structures/script-actions/boolean-entry), [DeleteEntry](/ru/ride/structures/script-actions/delete-entry), [IntegerEntry](/ru/ride/structures/script-actions/int-entry), [StringEntry](/ru/ride/structures/script-actions/string-entry) в результате выполнения вызываемой функции (применимо для  **версии 4**) | 100 |
| Суммарный размер записей [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) для всех структур `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, `StringEntry` в результате выполнения вызываемой функции (применимо для **версии 4**) | 5 Кбайт |
| Количество структур [ScriptTransfer](/ru/ride/structures/script-actions/script-transfer) в [TransferSet](/ru/ride/structures/script-results/transfer-set) (применимо для  **версии&nbsp;3**) | 10 |
| Количество структур [DataEntry](/ru/ride/structures/script-actions/data-entry) в [WriteSet](/ru/ride/structures/script-results/write-set) (применимо для **версии 3**) | 100 |
| Суммарный размер записей хранилища данных аккаунта для всех структур `DataEntry` в `WriteSet` (применимо для **версии 3**) | 5 Кбайт |
