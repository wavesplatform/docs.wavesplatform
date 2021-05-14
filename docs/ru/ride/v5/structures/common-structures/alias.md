# [Ride v5] Alias

:warning: Это документация Стандартной библиотеки **версии 5**, которая доступна с момента активации фичи №&nbsp;16 “Ride V5, dApp-to-dApp invocations”. [Перейти к&nbsp;версии&nbsp;4](/ru/ride/structures/common-structures/alias)

Структура [псевдонима](/ru/blockchain/account/alias).

## Конструктор

``` ride
Alias(alias: String)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | alias | [String](/ru/ride/v5/data-types/string) | [Псевдоним](/ru/blockchain/account/alias) |

## Пример

```scala
let alias = Alias("merry")
addressFromRecipient(alias)
```
