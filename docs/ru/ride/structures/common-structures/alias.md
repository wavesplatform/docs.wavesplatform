# Alias

Структура [псевдонима](/ru/blockchain/account/alias).

## Конструктор

``` ride
Alias(alias: String)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | alias | [String](/ru/ride/data-types/string) | [Псевдоним](/ru/blockchain/account/alias) |

## Пример

```scala
let alias = Alias("merry")
addressFromRecipient(alias)
```
