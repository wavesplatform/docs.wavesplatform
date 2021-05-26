# [Ride v4 и v3] Ограничения

:warning: Это документация Стандартной библиотеки версии 4 и 3. Рекомендуем использовать версию 5. [Перейти к&nbsp;версии&nbsp;5](/ru/ride/limits/)

| Ограничение | Максимальное значение |
| :--- | :--- |
| Размер скрипта dApp | 32 Кбайт |
| Размер скрипта аккаунта или скрипта ассета | 8 Кбайт |
| [Сложность](/ru/ride/base-concepts/complexity) скрипта аккаунта | 2000 |
| Сложность скрипта ассета | 4000 |
| Сложность вызываемой функции dApp-скрипта | 4000 |
| Суммарная сложность вызываемой функций и скриптов ассетов в одной транзакции вызова скрипта. Сложность скрипта отправителя не учитывается в этом лимите.<br>Действует с момента активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations” независимо от версии Стандартной библиотеки | 26&nbsp;000 |
| Порог сложности для сохранения неуспешных транзакций: если до его превышения вызываемая функция завершилась ошибкой или выбрасыванием исключения, транзакция вызова скрипта отклоняется и комиссия за нее не взимается | 1000 |
| Сложность функции-верификатора dApp-скрипта | 2000 |
| Порог сложности отправителя: если сложность скрипта аккаунта или функции-верификатора dApp-скрипта превышает этот порог, минимальная комиссия за отправку транзакции с этого аккаунта увеличивается на 0,004 WAVES.<br>Действует с момента активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations” независимо от версии Стандартной библиотеки | 200 |
| Имя функции или переменной | 255 байт |
| Размер значения переменной типа [String](/ru/ride/v4/data-types/string) | 32&nbsp;767 символов для **версии&nbsp;3**<br>32&nbsp;767 **байт** для **версии 4** |
| Размер значения переменной типа [ByteVector](/ru/ride/v4/data-types/byte-vector) | 65&nbsp;536 байт для **версии&nbsp;3**<br>32&nbsp;767 байт (кроме поля `bodyBytes` структуры транзакции) для **версии&nbsp;4** |
| Вес данных | См. [Вес данных](/ru/ride/v4/limits/weight) |
| Количество аргументов вызываемой функции | 22 |
| Суммарное количество структур [ScriptTransfer](/ru/ride/v4/structures/script-actions/script-transfer), [Issue](/ru/ride/v4/structures/script-actions/issue), [Reissue](/ru/ride/v4/structures/script-actions/reissue), [Burn](/ru/ride/v4/structures/script-actions/burn), [SponsorFee](/ru/ride/v4/structures/script-actions/sponsor-fee) в [результате выполнения](/ru/ride/v4/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции (применимо для **версии&nbsp;4** ) | 10 |
| Суммарное количество структур [BinaryEntry](/ru/ride/v4/structures/script-actions/binary-entry), [BooleanEntry](/ru/ride/v4/structures/script-actions/boolean-entry), [DeleteEntry](/ru/ride/v4/structures/script-actions/delete-entry), [IntegerEntry](/ru/ride/v4/structures/script-actions/int-entry), [StringEntry](/ru/ride/v4/structures/script-actions/string-entry) в результате выполнения вызываемой функции (применимо для  **версии 4**) | 100 |
| Суммарный размер записей [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) для всех структур `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, `StringEntry` в результате выполнения вызываемой функции (применимо для **версии 4**) | 5 Кбайт |
| Количество структур [ScriptTransfer](/ru/ride/v4/structures/script-actions/script-transfer) в [TransferSet](/ru/ride/v4/structures/script-results/transfer-set) (применимо для  **версии&nbsp;3**) | 10 |
| Количество структур [DataEntry](/ru/ride/v4/structures/script-actions/data-entry) в [WriteSet](/ru/ride/v4/structures/script-results/write-set) (применимо для **версии 3**) | 100 |
| Суммарный размер записей хранилища данных аккаунта для всех структур `DataEntry` в `WriteSet` (применимо для **версии 3**) | 5 Кбайт |
