# Директивы

Скрипт Ride должен начинаться с директив для компилятора. Директивы определяют формат скрипта, а также доступные скрипту встроенные функции, структуры и переменные.

Формат директивы:

``` ride
{-# НАЗВАНИЕ_ДИРЕКТИВЫ ЗНАЧЕНИЕ #-}
```

## Список директив

| Название директивы | Функция директивы | Возможные значения |
| :--- | :--- | :--- |
| STDLIB_VERSION | Версия [Стандартной библиотеки](/ru/ride/script/standard-library) | `4` (доступна после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”)<br>`3`<br>`2`<br>`1` |
| CONTENT_TYPE | Содержание скрипта | `DAPP` — скрипт представляет собой набор определений и содержит функции, которые можно вызвать с другого аккаунта.<br>`EXPRESSION` — скрипт представляет собой логическое выражение, используется для верификации транзакций<br> |
| SCRIPT_TYPE | Объект, к которому прикреплен скрипт | `ACCOUNT`<br>`ASSET` |

## Примеры директив

Для [скрипта dApp](/ru/ride/script/script-types/dapp-script):

```scala
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

Для [скрипта аккаунта](/ru/ride/script/script-types/account-script):

```scala
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

Для [скрипта ассета](/ru/ride/script/script-types/account-script):

```scala
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}
```

Не все комбинации директив допустимы. Следующий пример не будет работать, поскольку тип содержания `DAPP` допустим только для аккаунтов:

```scala
# Неправильный пример, не будет работать

{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ASSET #-}
```
