# Директивы

**Директива** — инструкция, которая задает режим компиляции [скрипта](/ru/ride/script/).

``` ride
{-# НАЗВАНИЕ_ДИРЕКТИВЫ ЗНАЧЕНИЕ #-}
```

## Список директив

| № | Название директивы | Функция директивы | Возможные значения |
| :--- | :--- | :--- | :--- |
| 1 | CONTENT_TYPE | Определяет, чем является [тело скрипта](/ru/ride/script/script-body) — [выражением](/ru/ride/base-concepts/expression) или _набором_ [определений](/ru/ride/base-concepts/definition) | `EXPRESSION` — логическое выражение<br>`DAPP` — набор определений |
| 2 | SCRIPT_TYPE | Определяет [контекст скрипта](/ru/ride/script/script-context) | `ACCOUNT`<br>`ASSET` |
| 3 | STDLIB_VERSION | Задает версию [Стандартной библиотеки](/ru/ride/script/standard-library) | `4` (доступна после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”)<br>`3`<br>`2`<br>`1` |
