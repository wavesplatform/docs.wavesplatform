# Аннотации

**Аннотация** — форма метаданных, которая добавляется к [функции](/ru/ride/functions/) [скрипта dApp](/ru/ride/script/script-types/dapp-script).

В настоящее время существуют две аннотации: `@Callable(i)` и `@Verifier(tx)`. Имя переменной в аннотации обязательно, даже если функция ее не использует.

Аннотированная функция не может быть вызвана внутри скрипта dApp.

## @Callable(i)

Аннотация [вызываемой функции](/ru/ride/functions/callable-function).

Переменная `i` содержит структуру [Invocation](/ru/ride/structures/common-structures/invocation)) с информацией о вызове.

## @Verifier(tx)

Аннотация [функции-верификатора](/ru/ride/functions/verifier-function).

Переменная `tx` содержит структуру [транзакции](/ru/ride/structures/transaction-structures/) или [ордера](/ru/ride/structures/common-structures/order), отправляемых с аккаунта dApp.
