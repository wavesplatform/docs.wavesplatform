# [Ride v6] Версия 6 Стандартной библиотеки (проект)

## Вычисления с продолжением

Добавлена поддержка dApp-скриптов, сложность которых превышает 4000. Выполнение такого скрипта разбивается на несколько этапов: первый этап вычислений выполняется в рамках транзакции вызова скрипта, последующие этапы — в рамках транзакций продолжения. Транзакции продолжения создаются генераторами блоков автоматически. [Подробнее о вычислениях с продолжением](/ru/ride/advanced/continuation)

Добавлены встроенные [функции хранилища данных аккаунта](/ru/ride/v6/functions/built-in-functions/account-data-storage-functions), позволяющие dApp-скрипту читать записи из собственного хранилища данных на любом этапе вычислений:
* `getBinary(key: String): ByteVector|Unit`
* `getBinaryValue(key: String): ByteVector`
* `getBoolean(key: String): Boolean|Unit`
* `getBooleanValue(key: String): Boolean`
* `getInteger(key: String): Int|Unit`
* `getIntegerValue(key: String): Int`
* `getString(key: String): String|Unit`
* `getStringValue(key: String): String`

> Вычисления с продолжением и вызов dApp из dApp несовместимы, то есть не могут быть инициированы одной и той же транзакцией.
