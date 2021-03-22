# [Ride v5] Версия 5 Стандартной библиотеки

Версия 5 [Стандартной библиотеки](/ru/ride/script/standard-library) добавлена в версии ноды 1.3.0 и включается с активацией фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations, Continuations”. Версии 1.3.x в настоящее время доступны только для [Stagenet](/ru/blockchain/blockchain-network/).

## Вызов dApp из dApp

Вызываемая функция dApp-скрипта может выполнять вложенные вызовы. Из dApp можно вызвать вызываемую функцию другого dApp или того же самого dApp, в том числе функция может вызвать сама себя. Последующие вычисления выполняются с учетом действий скрипта вызванной функции (как если бы они были применены к состоянию блокчейна). Все функции выполняются в рамках одной транзакции вызова скрипта. Общая сложность скриптов ограничена. [Подробнее о вызове dApp из dApp](/ru/ride/advanced/dapp-to-dapp)

Изменения в Ride:

* Добавлена встроенная функция [Invoke](/ru/ride/v5/functions/built-in-functions/dapp-to-dapp) для вызова dApp из dApp.
* Добавлены [нетерпеливые переменные](/ru/ride/v5/variables/), которые вычисляются прежде следующего выражения, чтобы гарантировать порядок выполнения и применения действий скрипта вызываемых функций.
* Изменена структура [Invocation](/ru/ride/v5/structures/common-structures/invocation): в случае вызова dApp из dApp она содержит адрес и публичный ключ как отправителя транзакции вызова скрипта, так и аккаунта dApp, который вызывает функцию.
* Изменен [формат результата](/ru/ride/v5/functions/callable-function#result) вызываемой функции: добавлено возвращаемое значение.

<!-- ## Вычисления с продолжением

Добавлена поддержка dApp-скриптов, сложность которых превышает 4000. Выполнение такого скрипта разбивается на несколько этапов: первый этап вычислений выполняется в рамках транзакции вызова скрипта, последующие этапы — в рамках транзакций продолжения. Транзакции продолжения создаются генераторами блоков автоматически. [Подробнее о вычислениях с продолжением](/ru/ride/advanced/continuation)

Добавлены встроенные [функции хранилища данных аккаунта](/ru/ride/v5/functions/built-in-functions/account-data-storage-functions), позволяющие dApp-скрипту читать записи из собственного хранилища данных на любом этапе вычислений:
* `getBinary(key: String): ByteVector|Unit`
* `getBinaryValue(key: String): ByteVector`
* `getBoolean(key: String): Boolean|Unit`
* `getBooleanValue(key: String): Boolean`
* `getInteger(key: String): Int|Unit`
* `getIntegerValue(key: String): Int`
* `getString(key: String): String|Unit`
* `getStringValue(key: String): String`

> Вычисления с продолжением и вызов dApp из dApp несовместимы, то есть не могут быть инициированы одной и той же транзакцией.
--> 

## Лизинг и отмена лизинга как действия скрипта

Добавлены действия скрипта, которые может выполнять вызываемая функция:
* [Lease](/ru/ride/v5/structures/script-actions/lease) — передает WAVES в лизинг.
* [LeaseCancel](/ru/ride/v5/structures/script-actions/lease-cancel) — прекращает лизинг.

C помощью действий `Lease` и `LeaseCancel` можно изменить сумму лизинга, в частности, извлечь часть средств из лизинга. Если в одном вызове скрипта отменить лизинг на большую сумму и создать новый лизинг на меньшую сумму с тем же получателем, генерирующий баланс получателя уменьшится на разницу. Если же отправить две отдельные транзакции — транзакцию отмены лизинга и транзакцию лизинга, генерирующий баланс сразу же уменьшится на сумму отмененного лизинга, а увеличится на сумму нового лизинга только через 1000 блоков.

Добавлена также встроенная функция [calculateLeaseId](/ru/ride/v5/functions/built-in-functions/blockchain-functions#calculateleaseid) для получения ID лизинга, сформированного структурой `Lease`.

## Большие целые числа

Добавлен тип данных [BigInt](/ru/ride/v5/data-types/bigint) размером 64 байта (512 бит) и поддерживающие его функции:

* [fractionBigInt(BigInt, BigInt, BigInt): BigInt](/ru/ride/v5/functions/built-in-functions/math-functions#fractionbigint)
* [fractionBigInt(BigInt, BigInt, BigInt, Union): BigInt](/ru/ride/v5/functions/built-in-functions/math-functions#fractionbigintround)
* [logBigInt(BigInt, Int, BigInt, Int, Int, Union): BigInt](/ru/ride/v5/functions/built-in-functions/math-functions#logbigint)
* [maxBigInt(List[BigInt]): BigInt](/ru/ride/v5/functions/built-in-functions/list-functions#maxbigint)
* [medianBigInt(List[BigInt]): BigInt](/ru/ride/v5/functions/built-in-functions/math-functions#medianbigint)
* [minBigInt(List[BigInt]): BigInt](/ru/ride/v5/functions/built-in-functions/list-functions#minbigint)
* [powBigInt(BigInt, Int, BigInt, Int, Int, Union): BigInt](/ru/ride/v5/functions/built-in-functions/math-functions#powbigint)
* [parseBigInt(String): BigInt|Unit](/ru/ride/v5/functions/built-in-functions/converting-functions#parse-bigint)
* [parseBigIntValue(String): BigInt](/ru/ride/v5/functions/built-in-functions/converting-functions#parse-bigintvalue)
* [toBigInt(ByteVector): BigInt](/ru/ride/v5/functions/built-in-functions/converting-functions#to-bigint-bytevector)
* [toBigInt(ByteVector, Int, Int): BigInt](/ru/ride/v5/functions/built-in-functions/converting-functions#to-bigint-bytevector-int-int)
* [toBigInt(Int): BigInt](/ru/ride/v5/functions/built-in-functions/converting-functions#to-bigint-int)
* [toBytesBigInt(BigInt): ByteVector](/ru/ride/v5/functions/built-in-functions/converting-functions#to-bytes-bigint)
* [toInt(BigInt): Int](/ru/ride/v5/functions/built-in-functions/converting-functions#to-int-bigint)
* [toStringBigInt(BigInt): String](/ru/ride/v5/functions/built-in-functions/converting-functions#to-string-bigint)

## Разное

Добавлены встроенные функции:
* [isDataStorageUntouched](/ru/ride/v5/functions/built-in-functions/account-data-storage-functions#isdatastorageuntouched) — проверяет, что хранилице данных указанного аккаунта никогда не содержало записей.
* [hashScriptAtAddress]((/ru/ride/v5/functions/built-in-functions/blockchain-functions#hashscriptataddress) — возвращает [BLAKE2b-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29)-хеш скрипта, установленного на аккаунте.
