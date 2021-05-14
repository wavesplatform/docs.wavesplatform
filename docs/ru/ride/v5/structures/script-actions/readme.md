# [Ride v5] Действия скрипта

:warning: Это документация Стандартной библиотеки **версии 5**, которая доступна с момента активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations”. [Перейти к&nbsp;версии&nbsp;4](/ru/ride/structures/script-actions/)

Действия скрипта выполняются, то есть приводят к изменениям на блокчейне, только если включены в результирующее выражение вызываемой функции. Подробнее см. в разделе [Вызываемая функция](/ru/ride/v5/functions/callable-function).

| Действие скрипта | Описание |
|---|---|---|
| [BinaryEntry](/ru/ride/v5/structures/script-actions/binary-entry) | Добавление/изменение записи бинарного типа в [хранилище данных аккаунта](/ru/blockchain/account/account-data-storage)|
| [BooleanEntry](/ru/ride/v5/structures/script-actions/boolean-entry) | Добавление/изменение записи логического типа |
| [Burn](/ru/ride/v5/structures/script-actions/burn) | Сжигание токена |
| [DeleteEntry](/ru/ride/v5/structures/script-actions/delete-entry) | Удаление записи |
| [IntegerEntry](/ru/ride/v5/structures/script-actions/int-entry) | Добавление/изменение записи целочисленного типа |
| [Issue](/ru/ride/v5/structures/script-actions/issue) | Выпуск токена |
| [Lease](/ru/ride/v5/structures/script-actions/issue) | Лизинг |
| [LeaseCancel](/ru/ride/v5/structures/script-actions/issue) | Отмена лизинга |
| [Reissue](/ru/ride/v5/structures/script-actions/reissue) | Довыпуск токена |
| [ScriptTransfer](/ru/ride/v5/structures/script-actions/script-transfer)  Перевод токена |
| [SponsorFee](/ru/ride/v5/structures/script-actions/sponsor-fee) | Настройка спонсирования |
| [StringEntry](/ru/ride/v5/structures/script-actions/string-entry) | Добавление/изменение записи строкового типа |

Набор доступных действий скрипта зависит от версии [Стандартной библиотеки](/ru/ride/script/standard-library).
