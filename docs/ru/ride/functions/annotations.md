# Аннотации

**Аннотация** — форма метаданных, которая добавляется к [функции](/ru/ride/functions/) [dApp-скрипта](/ru/ride/script/script-types/dapp-script).

В настоящее время существуют две аннотации: `@Callable` и `@Verifier`.

Аннотированная функция не может быть вызвана внутри dApp-скрипта.

## @Callable(inv: [Invocation](/ru/ride/structures/common-structures/invocation))

Аннотация [вызываемой функции](/ru/ride/functions/callable-function).

Переменная `inv` содержит информацию о транзакции, которая вызвала функцию [dApp](/ru/blockchain/account/dapp).

## @Verifier(tx: Transaction|[Order](/ru/ride/structures/common-structures/order))

Аннотация [функции-верификатора](/ru/ride/functions/verifier-function).

Переменная `tx` содержит информацию об отправляемой транзакции или ордере.
