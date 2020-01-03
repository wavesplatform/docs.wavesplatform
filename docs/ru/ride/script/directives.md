# Директивы

**Директива** — инструкция, которая задает режим компиляции [скрипта](/ru/ride/script.md).

``` ride
{-# НАЗВАНИЕ_ДИРЕКТИВЫ ЗНАЧЕНИЕ #-}
```

## Список директив

| № | Название директивы | Функция директивы | Возможные значения |
| :--- | :--- | :--- | :--- |
| 1 | CONTENT_TYPE | Определяет, чем является [тело скрипта](/ru/ride/script/script-body.md) — [выражением](/ru/ride/base-concepts/expression.md) или _набором_ [определений](/ru/ride/base-concepts/definition.md) | `EXPRESSION` — логическое выражение<br>`DAPP` — набор определений |
| 2 | SCRIPT_TYPE | Определяет [контекст скрипта](/ru/ride/script/script-context.md) | `ACCOUNT`<br>`ASSET` |
| 3 | STDLIB_VERSION | Задает версию [Стандартной библиотеки](/ru/ride/script/standard-library.md) | `4` (доступна только на [stagenet](/ru/blockchain/blockchain-network/stage-network.md))<br>`3`<br>`2`<br>`1` |
