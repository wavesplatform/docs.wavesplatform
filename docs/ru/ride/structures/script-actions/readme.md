# Действия скрипта

Действия скрипта выполняются, то есть приводят к изменениям на блокчейне, только если включены в результирующее выражение вызываемой функции. Подробнее см. в разделе [Вызываемая функция](/ru/ride/functions/callable-function).

| Действие скрипта | Версия стандартной библиотеки | Описание |
|---|---|---|
| [BinaryEntry](/ru/ride/structures/script-actions/binary-entry) | 4 | Добавление/изменение записи бинарного типа в [хранилище данных аккаунта](/ru/blockchain/account/account-data-storage)|
| [BooleanEntry](/ru/ride/structures/script-actions/boolean-entry) | 4 | Добавление/изменение записи логического типа |
| [Burn](/ru/ride/structures/script-actions/burn) | 4 | Сжигание токена |
| [DataEntry](/ru/ride/structures/script-actions/data-entry) | 3 | Добавление/изменение записи любого типа |
| [DeleteEntry](/ru/ride/structures/script-actions/delete-entry) | 4 | Удаление записи |
| [IntegerEntry](/ru/ride/structures/script-actions/int-entry) | 4 | Добавление/изменение записи целочисленного типа |
| [Issue](/ru/ride/structures/script-actions/issue) | 4 | Выпуск токена |
| [Reissue](/ru/ride/structures/script-actions/reissue) | 4 | Довыпуск токена |
| [ScriptTransfer](/ru/ride/structures/script-actions/script-transfer) | 3, 4 | Перевод токена |
| [SponsorFee](/ru/ride/structures/script-actions/sponsor-fee) | 4 | Настройка спонсирования |
| [StringEntry](/ru/ride/structures/script-actions/string-entry) | 4 | Добавление/изменение записи строкового типа |

> :warning: Стандартная библиотека версии 4 доступна начиная с версии ноды 1.2.0 после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”. Версии 1.2.x в настоящее время работают только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).
