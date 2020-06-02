# Скрипт аккаунта

**Скрипт аккаунта** — [скрипт](/ru/ride/script/), у которого есть следующие [директивы](/ru/ride/script/directives):

``` ride
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

[Тело](/ru/ride/script/script-body) скрипта аккаунта — [выражение](/ru/ride/base-concepts/expression) логического типа.

## Прикрепление скрипта аккаунта

Скрипт аккаунта прикрепляется к [аккаунту](/ru/blockchain/account/) с помощью [транзакции установки скрипта](/ru/blockchain/transaction-type/set-script-transaction).

Аккаунт с прикрепленным к нему скриптом аккаунта называется [смарт-аккаунтом](/ru/blockchain/account/smart-account).

К аккаунту можно прикрепить только один скрипт.
