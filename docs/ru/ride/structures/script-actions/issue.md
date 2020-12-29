# Issue

> :warning: Структура `Issue` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**.

`Issue` — cтруктура, задающая параметры выпуска токена. Выпуск выполняется, только если структура включена в [результирующее выражение](/ru/ride/functions/callable-function#резуnьтат-выпоnнения-2) вызываемой функции.


Минимальная комиссия за транзакцию вызова скрипта увеличивается на 1 WAVES за каждый выпущенный токен, не являющийся [NFT](/ru/blockchain/token/non-fungible-token).

Получить идентификатор выпускаемого токена можно с помощью функции [calculateAssetId](/ru/ride/functions/built-in-functions/blockchain-functions#calculateassetid).

## Конструктор

```ride
Issue(name: String, description: String, quantity: Int, decimals: Int, isReissuable: Boolean, compiledScript: Script|Unit, nonce: Int)
```

или 

```ride
Issue(name: String, description: String, quantity: Int, decimals: Int, isReissuable: Boolean)
```

Во втором случае значения `compiledScript = unit` и `nonce = 0` подставляются автоматически.

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | name | [String](/ru/ride/data-types/string) | Название токена |
| 2 | description | [String](/ru/ride/data-types/string) | Описание токена |
| 3 | quantity | [Int](/ru/ride/data-types/int) | Количество токена. Для [NFT](/ru/blockchain/token/non-fungible-token) должно быть равно `1` |
| 4 | decimals | [Int](/ru/ride/data-types/int) | Количество знаков после запятой. Для NFT должно быть равно `0` |
| 5 | isReissuable | [Boolean](/ru/ride/data-types/boolean) | Флаг возможности довыпуска. Для NFT должен быть равен `false` |
| 6 | compiledScript | [Script](/ru/ride/script/)&#124;[Unit](/ru/ride/data-types/unit) | Должно быть установлено значение `unit`. Выпуск [смарт-ассетов](/ru/blockchain/token/smart-asset) при помощи этой структуры пока недоступен |
| 7 | nonce | [Int](/ru/ride/data-types/int) | Nonce, который используется для генерации ID ассета. Если вызываемая функция выпускает несколько токенов с одинаковыми параметрами, нужно использовать разные nonce, см. [пример](#выпуск-нескольких-токенов) |

## Примеры

### Выпуск обычного токена

```
Issue("RegularToken", "This is an ordinary token", 10000, 2, true)
```

В приведенной структуре заданы следующие параметры токена:

* **Название**: RegularToken
* **Описание**: This is an ordinary token
* **Количество токенов для выпуска**: 100 (значение 10&nbsp;000 указано в минимальных неделимых единицах — «копейках» токена)
* **Количество знаков после запятой у токена**: 2
* **Возможность довыпуска**: есть

### Выпуск нескольких токенов

```
[
   Issue("RegularToken", "This is an ordinary token", 10000, 2, true, unit, 0),
   Issue("RegularToken", "This is an ordinary token", 10000, 2, true, unit, 1)
]
```

### Выпуск NFT-токена

```
Issue("UberToken", "The ultimate token. One and only", 1, 0, false)
```

В приведенной структуре заданы следующие параметры токена:

* **Название**: UberToken
* **Описание**: The ultimate token. One and only
* **Количество токенов для выпуска**: 1
* **Количество знаков после запятой у токена**: 0
* **Возможность довыпуска**: нет
