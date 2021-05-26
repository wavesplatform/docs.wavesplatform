# [Ride v5] Версия 5 Стандартной библиотеки

Версия 5 [Стандартной библиотеки](/ru/ride/script/standard-library) включается с активацией фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations”.

## Вызов dApp из dApp

Вызываемая функция dApp-скрипта может выполнять вложенные вызовы. Из dApp можно вызвать вызываемую функцию другого dApp или того же самого dApp, в том числе функция может вызвать сама себя. Последующие вычисления выполняются с учетом действий скрипта вызванной функции (как если бы они были применены к состоянию блокчейна). Все функции выполняются в рамках одной транзакции вызова скрипта. Общая сложность скриптов ограничена. [Подробнее о вызове dApp из dApp](/ru/ride/advanced/dapp-to-dapp)

Изменения в Ride:

* Добавлены функции для вызова dApp из dApp:
   * [invoke](/ru/ride/functions/built-in-functions/dapp-to-dapp#invoke)
   * [reentrantInvoke](/ru/ride/functions/built-in-functions/dapp-to-dapp#reentrantinvoke)
* Добавлены [нетерпеливые переменные](/ru/ride/variables/), которые вычисляются прежде следующего выражения, чтобы гарантировать порядок выполнения и применения действий скрипта вызываемых функций.
* Изменена структура [Invocation](/ru/ride/structures/common-structures/invocation): в случае вызова dApp из dApp она содержит адрес и публичный ключ как отправителя транзакции вызова скрипта, так и аккаунта dApp, который вызывает функцию.
* Изменен [формат результата](/ru/ride/functions/callable-function#result) вызываемой функции: добавлено возвращаемое значение.

## Лизинг и отмена лизинга как действия скрипта

Добавлены действия скрипта, которые может выполнять вызываемая функция:
* [Lease](/ru/ride/structures/script-actions/lease) — передает WAVES в лизинг.
* [LeaseCancel](/ru/ride/structures/script-actions/lease-cancel) — прекращает лизинг.

C помощью действий `Lease` и `LeaseCancel` можно изменить сумму лизинга, в частности, извлечь часть средств из лизинга. Если в одном вызове скрипта отменить лизинг на большую сумму и создать новый лизинг на меньшую сумму с тем же получателем, генерирующий баланс получателя уменьшится на разницу. Если же отправить две отдельные транзакции — транзакцию отмены лизинга и транзакцию лизинга,  они могут попасть в разные блоки, и тогда генерирующий баланс сразу же уменьшится на сумму отмененного лизинга, а увеличится на сумму нового лизинга только через 1000 блоков.

Добавлена также встроенная функция [calculateLeaseId](/ru/ride/functions/built-in-functions/blockchain-functions#calculateleaseid) для получения ID лизинга, сформированного структурой `Lease`.

## Большие целые числа

Добавлен тип данных [BigInt](/ru/ride/data-types/bigint) размером 64 байта (512 бит) и поддерживающие его функции:

* [fraction(BigInt, BigInt, BigInt): BigInt](/ru/ride/functions/built-in-functions/math-functions#fractionbigint)
* [fraction(BigInt, BigInt, BigInt, Union): BigInt](/ru/ride/functions/built-in-functions/math-functions#fractionbigintround)
* [log(BigInt, Int, BigInt, Int, Int, Union): BigInt](/ru/ride/functions/built-in-functions/math-functions#logbigint)
* [max(List[BigInt]): BigInt](/ru/ride/functions/built-in-functions/list-functions#max-list-bigint-bigint)
* [median(List[BigInt]): BigInt](/ru/ride/functions/built-in-functions/math-functions#medianbigint)
* [min(List[BigInt]): BigInt](/ru/ride/functions/built-in-functions/list-functions#min-list-bigint-bigint)
* [pow(BigInt, Int, BigInt, Int, Int, Union): BigInt](/ru/ride/functions/built-in-functions/math-functions#powbigint)
* [parseBigInt(String): BigInt|Unit](/ru/ride/functions/built-in-functions/converting-functions#parse-bigint)
* [parseBigIntValue(String): BigInt](/ru/ride/functions/built-in-functions/converting-functions#parse-bigintvalue)
* [toBigInt(ByteVector): BigInt](/ru/ride/functions/built-in-functions/converting-functions#to-bigint-bytevector)
* [toBigInt(ByteVector, Int, Int): BigInt](/ru/ride/functions/built-in-functions/converting-functions#to-bigint-bytevector-int-int)
* [toBigInt(Int): BigInt](/ru/ride/functions/built-in-functions/converting-functions#to-bigint-int)
* [toBytes(BigInt): ByteVector](/ru/ride/functions/built-in-functions/converting-functions#to-bytes-bigint)
* [toInt(BigInt): Int](/ru/ride/functions/built-in-functions/converting-functions#to-int-bigint)
* [toString(BigInt): String](/ru/ride/functions/built-in-functions/converting-functions#to-string-bigint)

## Разное

Добавлены встроенные функции:
* [isDataStorageUntouched](/ru/ride/functions/built-in-functions/account-data-storage-functions#isdatastorageuntouched) — проверяет, что хранилище данных указанного аккаунта никогда не содержало записей.
* [scriptHash](/ru/ride/functions/built-in-functions/blockchain-functions#scripthash) — возвращает [BLAKE2b-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29)-хеш скрипта, установленного на аккаунте.
* [fraction(Int, Int, Int, Union): BigInt](/ru/ride/functions/built-in-functions/math-functions#fractionintround) — умножает два целых числа и делит на третье без переполнения, применяя указанный метод округления.

Добавлены встроенные [функции хранилища данных аккаунта](/ru/ride/functions/built-in-functions/account-data-storage-functions), позволяющие dApp-скрипту читать записи из собственного хранилища данных:
* `getBinary(key: String): ByteVector|Unit`
* `getBinaryValue(key: String): ByteVector`
* `getBoolean(key: String): Boolean|Unit`
* `getBooleanValue(key: String): Boolean`
* `getInteger(key: String): Int|Unit`
* `getIntegerValue(key: String): Int`
* `getString(key: String): String|Unit`
* `getStringValue(key: String): String`

Максимальная сложность вызываемой функции скрипта dApp изменена на 10&nbsp;000.
