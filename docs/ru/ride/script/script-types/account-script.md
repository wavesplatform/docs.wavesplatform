# Скрипт аккаунта

**Скрипт аккаунта** — [скрипт](/ru/ride/script.md), у которого есть следующие [директивы](/ru/ride/script/directives.md):

``` ride
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

[Тело](/ru/ride/script/script-body.md) скрипта аккаунта — [выражение](/ru/ride/base-concepts/expression.md) логического типа.

## Прикрепление скрипта аккаунта

Скрипт аккаунта прикрепляется к [аккаунту](/ru/blockchain/account.md) с помощью [транзакции установки скрипта](/ru/blockchain/transaction-type/set-script-transaction.md).

Аккаунт с прикрепленным к нему скриптом аккаунта называется [смарт-аккаунтом](/ru/blockchain/account/smart-account.md).

К аккаунту можно прикрепить только один скрипт.
