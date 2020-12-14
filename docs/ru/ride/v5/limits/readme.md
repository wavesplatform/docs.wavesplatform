# [Ride v5] Ограничения

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/limits/)

| Ограничение | Максимальное значение |
| :--- | :--- |
| Размер скрипта dApp | 32 Кбайт |
| Размер скрипта аккаунта или скрипта ассета | 8 Кбайт |
| [Сложность](/ru/ride/base-concepts/complexity) скрипта аккаунта | 2000 |
| Сложность скрипта ассета | 4000 |
| Сложность одного этапа [вычислений с продолжением](/ru/ride/advanced/continuation) | 4000 |
| Суммарная сложность всех вызываемых функций и скриптов ассетов, участвующих в [вызове dApp из dApp](/ru/ride/advanced/dapp-to-dapp). Сложность скрипта аккаунта отправителя не учитывается в этом лимите | 52&nbsp;000 |
| Порог сложности для сохранения неуспешных транзакций: если до его превышения вызываемая функция завершилась ошибкой или выбрасыванием исключения, транзакция вызова скрипта отклоняется и комиссия за нее не взимается | 1000 |
| Сложность функции-верификатора dApp-скрипта | 2000 |
| Имя функции или переменной | 255 байт |
| Размер значения переменной типа [String](/ru/ride/v5/data-types/string) | 32&nbsp;767 байт |
| Размер значения переменной типа [ByteVector](/ru/ride/v5/data-types/byte-vector) | 32&nbsp;767 байт (кроме поля `bodyBytes` структуры транзакции) |
| Вес данных | См. [Вес данных](/ru/ride/v5/limits/weight) |
| Количество аргументов вызываемой функции | 22 |
| Суммарное количество структур [ScriptTransfer](/ru/ride/v5/structures/script-actions/script-transfer), [Issue](/ru/ride/v5/structures/script-actions/issue), [Reissue](/ru/ride/v5/structures/script-actions/reissue), [Burn](/ru/ride/v5/structures/script-actions/burn), [SponsorFee](/ru/ride/v5/structures/script-actions/sponsor-fee) в [результате выполнения](/ru/ride/v5/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции | 10 |
| Суммарное количество структур [BinaryEntry](/ru/ride/v5/structures/script-actions/binary-entry), [BooleanEntry](/ru/ride/v5/structures/script-actions/boolean-entry), [DeleteEntry](/ru/ride/v5/structures/script-actions/delete-entry), [IntegerEntry](/ru/ride/v5/structures/script-actions/int-entry), [StringEntry](/ru/ride/v5/structures/script-actions/string-entry) в результате выполнения вызываемой функции | 100 |
| Суммарный размер записей [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) для всех структур `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, `StringEntry` в результате выполнения вызываемой функции | 5 Кбайт |
