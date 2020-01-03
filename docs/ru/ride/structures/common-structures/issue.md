# Issue

<note type="warning" title="">Структура Issue представлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).</note>

Структура [выпуска токена](/ru/blockchain/transaction-type/issue-transaction).

## Конструктор

```ride
Issue(compiledScript: Script|Unit, decimals: Int, description: String, isReissuable: Boolean, name: String, quantity: Int, nonce: Int)
```

## Поля

| # | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | compiledScript | [Script](/ru/ride/script)&#124;[Unit](/ru/ride/data-types/unit) | Должно быть установлено значение `Unit`. Выпуск [смарт-ассетов](/ru/blockchain/token/smart-asset) при помощи этой структуры пока недоступен |
| 2 | decimals | [Int](/ru/ride/data-types/int) | Количество цифр после запятой. Если [токеном](/ru/blockchain/token) является [NFT](/ru/blockchain/token/non-fungible-token), то значение должно быть `0` |
| 3 | description | [String](/ru/ride/data-types/string) | Описание токена |
| 4 | isReissuable | [Boolean](/ru/ride/data-types/boolean) | Флаг возможности довыпуска. Если токеном является [NFT](/ru/blockchain/token/non-fungible-token), то значение должно быть `0` |
| 5 | name | [String](/ru/ride/data-types/string) | Название токена |
| 6 | quantity | [Int](/ru/ride/data-types/int) | Количество токена. Если токеном является [NFT](/ru/blockchain/token/non-fungible-token), то значение должно быть `1` |
| 7 | nonce | [Int](/ru/ride/data-types/int) | Порядковый номер ассета, который использовался для генерации ID токена. Требуется для выпуска в одном вызове скрипта нескольких токенов с одинаковыми названиями и описаниями |
