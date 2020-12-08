# Asset

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/common-structures/asset)

Структура [токена](/ru/blockchain/token/), возвращаемая встроенной функцией [assetInfo](/ru/ride/v5/functions/built-in-functions/blockchain-functions#assetinfo).

## Конструктор

``` ride
Asset(id: ByteVector, quantity: Int, decimals: Int, issuer: Address, issuerPublicKey: ByteVector, reissuable: Boolean, scripted: Boolean, minSponsoredFee: Int|Unit, name: String, description: String)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | id | [ByteVector](/ru/ride/v5/data-types/byte-vector) | [ID токена](/ru/blockchain/token/token-id)
| 2 | quantity | [Int](/ru/ride/v5/data-types/int) | Количество выпущенных [токенов](/ru/blockchain/token/), умноженное на 10<sup>decimals</sup>. Не более 9&nbsp;223&nbsp;372&nbsp;036&nbsp;854&nbsp;775&nbsp;806 |
| 3 | decimals | [Int](/ru/ride/v5/data-types/int) | Число знаков после запятой у токена, от 0 до 8 |
| 4 | issuer | [Address](/ru/ride/v5/structures/common-structures/address) | Адрес аккаунта, который выпустил токен |
| 5 | issuerPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ аккаунта, выпустившего токен |
| 6 | reissuable | [Boolean](/ru/ride/v5/data-types/boolean) | true — токен можно довыпускать, false — нельзя довыпускать |
| 7 | scripted | [Boolean](/ru/ride/v5/data-types/boolean) | true — [смарт-ассет](/ru/blockchain/token/smart-asset), false — обычный токен |
| 9 | minSponsoredFee | [Int](/ru/ride/v5/data-types/int)&#124;[Unit](/ru/ride/v5/data-types/unit) | Количество спонсорского ассета, эквивалентное 0,001 WAVES (100&nbsp;000 WAVELET), в минимальных единицах («копейках») ассета. См. раздел [Спонсирование комиссии](/ru/blockchain/waves-protocol/sponsored-fee).<br>`unit` — спонсирование отключено. |
| 10 | name | [String](/ru/ride/v5/data-types/string) | Название токена, до 16 символов |
| 11 | description | [String](/ru/ride/v5/data-types/string) | Описание токена, до 1000 символов |
