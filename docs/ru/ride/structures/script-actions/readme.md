# Действия скрипта

Действия скрипта выполняются, то есть приводят к изменениям на блокчейне, только если включены в результирующее выражение вызываемой функции. Подробнее см. в разделе [Вызываемая функция](/ru/ride/functions/callable-function).

Набор доступных действий скрипта зависит от версии [Стандартной библиотеки](/ru/ride/script/standard-library).

> Стандартная библиотека версии 5 добавлена в версии ноды 1.3.0 и включается с активацией фичи №&nbsp;16 “Continuations”. Версии 1.3.x в настоящее время доступны только для [Stagenet](/ru/blockchain/blockchain-network/).

| Действие скрипта | v5 | v4 | v3 | Описание |
|---|---|---|---|---|
| [BinaryEntry](/ru/ride/structures/script-actions/binary-entry) | ✓ | ✓ | | Добавление/изменение записи бинарного типа в [хранилище данных аккаунта](/ru/blockchain/account/account-data-storage)|
| [BooleanEntry](/ru/ride/structures/script-actions/boolean-entry) | ✓ | ✓ | | Добавление/изменение записи логического типа |
| [Burn](/ru/ride/structures/script-actions/burn) | ✓ | ✓ | | Сжигание токена |
| [DataEntry](/ru/ride/structures/script-actions/data-entry) | | | ✓ | Добавление/изменение записи любого типа |
| [DeleteEntry](/ru/ride/structures/script-actions/delete-entry) | ✓ | ✓ | | Удаление записи |
| [IntegerEntry](/ru/ride/structures/script-actions/int-entry) | ✓ | ✓ | | Добавление/изменение записи целочисленного типа |
| [Issue](/ru/ride/structures/script-actions/issue) | ✓ | ✓ | | Выпуск токена |
| [Lease](/ru/ride/structures/script-actions/issue) | ✓ | | | Лизинг |
| [LeaseCancel](/ru/ride/structures/script-actions/issue) | ✓ | | | Отмена лизинга |
| [Reissue](/ru/ride/structures/script-actions/reissue) | ✓ | ✓ | | Довыпуск токена |
| [ScriptTransfer](/ru/ride/structures/script-actions/script-transfer) | ✓ | ✓ | ✓ | Перевод токена |
| [SponsorFee](/ru/ride/structures/script-actions/sponsor-fee) | ✓ | ✓ | | Настройка спонсирования |
| [StringEntry](/ru/ride/structures/script-actions/string-entry) | ✓ | ✓ | | Добавление/изменение записи строкового типа |
