# Ограничения

| Ограничение | Максимальное значение |
| :--- | :--- |
| Размер скрипта dApp | 32 Кбайт |
| Размер скрипта аккаунта или скрипта ассета | 8 Кбайт |
| [Сложность](/ru/ride/base-concepts/complexity) скрипта аккаунта | 2000 |
| Сложность скрипта ассета | 4000 |
| Сложность вызываемой функции dApp-скрипта | 10&nbsp;000 |
| Количество [вызовов dApp из dApp](/ru/ride/advanced/dapp-to-dapp) в одной транзакции вызова скрипта | 100 |
| Суммарная сложность всех вызываемых функций и скриптов ассетов в одной транзакции вызова скрипта. Сложность скрипта отправителя не учитывается в этом лимите |
| Порог сложности для сохранения неуспешных транзакций: если до его превышения вызываемая функция завершилась ошибкой или выбрасыванием исключения, транзакция вызова скрипта отклоняется и комиссия за нее не взимается | 1000 |
| Сложность функции-верификатора dApp-скрипта | 2000 |
| Порог сложности отправителя: если сложность скрипта аккаунта или функции-верификатора dApp-скрипта превышает этот порог, минимальная комиссия за отправку транзакции с этого аккаунта увеличивается на 0,004 WAVES | 200 |
| Имя функции или переменной | 255 байт |
| Размер значения переменной типа [String](/ru/ride/data-types/string) | 32&nbsp;767 байт |
| Размер значения переменной типа [ByteVector](/ru/ride/data-types/byte-vector) | 32&nbsp;767 байт (кроме поля `bodyBytes` структуры транзакции) |
| Вес данных | См. [Вес данных](/ru/ride/limits/weight) |
| Количество аргументов вызываемой функции | 22 |
| Количество платежей, приложенных к вызову | 10 |
| Общее количество действий скрипта [Issue](/ru/ride/structures/script-actions/issue), [Reissue](/ru/ride/structures/script-actions/reissue), [Burn](/ru/ride/structures/script-actions/burn), [SponsorFee](/ru/ride/structures/script-actions/sponsor-fee), [ScriptTransfer](/ru/ride/structures/script-actions/script-transfer), [Lease](/ru/ride/structures/script-actions/lease) и [LeaseCancel](/ru/ride/structures/script-actions/lease-cancel), выполняемых всеми вызываемыми функциями в одной транзакции | 30 |
| Общее количество действий скрипта [BinaryEntry](/ru/ride/structures/script-actions/binary-entry), [BooleanEntry](/ru/ride/structures/script-actions/boolean-entry), [DeleteEntry](/ru/ride/structures/script-actions/delete-entry), [IntegerEntry](/ru/ride/structures/script-actions/int-entry), [StringEntry](/ru/ride/structures/script-actions/string-entry), выполняемых всеми вызываемыми функциями в одной транзакции | 100 |
| Суммарный размер записей [хранилища данных аккаунта](/ru/blockchain/account/account-data-storage) для всех структур `BinaryEntry`, `BooleanEntry`, `IntegerEntry`, `StringEntry` в результате выполнения вызываемой функции | 5 Кбайт |

