# Версия 5 Стандартной библиотеки

Версия 5 [Стандартной библиотеки](/ru/ride/script/standard-library) добавлена в версии ноды 1.3.0 и включается с активацией фичи №&nbsp;16 “Continuations”. Версии 1.3.x в настоящее время доступны только для [Stagenet](/ru/blockchain/blockchain-network/).

## Вычисления с продолжением

Добавлена поддержка dApp-скриптов, сложность которых превышает 4000. Выполнение такого скрипта разбивается на несколько этапов: первый этап вычислений выполняется в рамках транзакции вызова скрипта, последующие этапы — в рамках транзакций продолжения. Транзакции продолжения создаются генераторами блоков автоматически. [Подробнее о вычислениях с продолжением](/ru/ride/advanced/continuation)

Добавлены встроенные [функции хранилища данных аккаунта](/ru/ride/v5/functions/built-in-functions/account-data-storage-functions), позволяющие dApp-скрипту читать данные собственного хранилища данных на любом этапе вычислений:
* `getBinary(key: String): ByteVector|Unit`
* `getBinaryValue(key: String): ByteVector`
* `getBoolean(key: String): Boolean|Unit`
* `getBooleanValue(key: String): Boolean`
* `getInteger(key: String): Int|Unit`
* `getIntegerValue(key: String): Int`
* `getString(key: String): String|Unit`
* `getStringValue(key: String): String`

## Вызов dApp из dApp