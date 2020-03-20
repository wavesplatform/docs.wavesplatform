# Issue

> :warning: Структура Issue представлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

Issue - cтруктура, задающая параметры [выпуска токена](/ru/blockchain/transaction-type/issue-transaction), который выполняется в результате вызова [вызываемой функции](/ru/ride/functions/callable-function).

## Конструктор

```ride
Issue(name: String, description: String, quantity: Int, decimals: Int, isReissuable: Boolean, compiledScript: Script|Unit, nonce: Int)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | name | [String](/ru/ride/data-types/string) | Название токена |
| 2 | description | [String](/ru/ride/data-types/string) | Описание токена |
| 3 | quantity | [Int](/ru/ride/data-types/int) | Количество токена. Если токеном является [NFT](/ru/blockchain/token/non-fungible-token), то значение должно быть `1` |
| 4 | decimals | [Int](/ru/ride/data-types/int) | Количество знаков после запятой. Если [токеном](/ru/blockchain/token) является [NFT](/ru/blockchain/token/non-fungible-token), то значение должно быть `0` |
| 5 | isReissuable | [Boolean](/ru/ride/data-types/boolean) | Флаг возможности довыпуска. Если токеном является [NFT](/ru/blockchain/token/non-fungible-token), то значение должно быть `0` |
| 6 | compiledScript | [Script](/ru/ride/script)&#124;[Unit](/ru/ride/data-types/unit) | Должно быть установлено значение `unit`. Выпуск [смарт-ассетов](/ru/blockchain/token/smart-asset) при помощи этой структуры пока недоступен |
| 7 | nonce | [Int](/ru/ride/data-types/int) | Порядковый номер ассета, который используется для генерации его ID. Это важно в ситуации, когда в результате вызова [вызываемой функции](/ru/ride/functions/callable-function) перечислено несколько структур Issue, все параметры которых (кроме скрипта ассета) совпадают, см. [пример](#nonce). Если в структурах Issue указаны разные скрипты ассета, nonce могут быть одинаковыми |

## Примеры

### Выпуск обычного токена

`Issue("RegularToken", "This is an ordinary token", 10000, 2, true, unit, 0)`

В приведенной структуре заданы следующие параметры токена:

* **Название**: RegularToken,
* **Описание**: This is an ordinary token,
* **Количество токенов для выпуска**: 100 (значение 10000 указано в "копейках"),
* **Количество знаков после запятой у токена**: 2,
* **Скрипт ассета**: отсутствует,
* **Возможность довыпуска**: присутствует,
* **Нонс**: 0.

### Выпуск нескольких обычных токенов одновременно <a id="nonce"></a>

`[Issue("RegularToken", "This is an ordinary token", 10000, 2, true, unit, 0), Issue("RegularToken", "This is an ordinary token", 10000, 2, true, unit, 1)]`

### Выпуск NFT-токена

`Issue("UberToken", "The ultimate token. One and only", 1, 0, false, unit, 0)`

В приведенной структуре заданы следующие параметры токена:

* **Название**: UberToken,
* **Описание**: The ultimate token. One and only,
* **Количество токенов для выпуска**: 1,
* **Количество знаков после запятой у токена**: 0,
* **Скрипт ассета**: отсутствует,
* **Возможность довыпуска**: отсутствует,
* **Нонс**: 0.
