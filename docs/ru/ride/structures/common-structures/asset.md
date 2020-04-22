# Asset

Структура [токена](/ru/blockchain/token), возвращаемая встроенной функцией [assetInfo](/ru/ride/functions/built-in-functions/blockchain-functions#assetinfo).

## Конструктор

``` ride
Asset(id: ByteVector, name: String, description: String, quantity: Int, decimals: Int, issuer: Address, issuerPublicKey: ByteVector, reissuable: Boolean, scripted: Boolean, sponsored: Boolean)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | id | [ByteVector](/ru/ride/data-types/byte-vector) | [ID токена](/ru/blockchain/token/token-id)
| 2 | name | [String](/ru/ride/data-types/string) | Название токена, до 16 символов<br>Поле появилось в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4** и доступно начиная с версии ноды 1.2.4 после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions” (в настоящее время только на [Stagenet](/ru/blockchain/blockchain-network/stage-network)) |
| 3 | description | [String](/ru/ride/data-types/string) | Описание токена, до 1000 символов<br>Поле появилось в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4** и доступно начиная с версии ноды 1.2.4 после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions” (в настоящее время только на [Stagenet](/ru/blockchain/blockchain-network/stage-network)) |
| 4 | quantity | [Int](/ru/ride/data-types/int) | Количество выпущенных [токенов](/ru/blockchain/token), умноженное на 10<sup>decimals</sup>. Не более 9&nbsp;223&nbsp;372&nbsp;036&nbsp;854&nbsp;775&nbsp;806 |
| 5 | decimals | [Int](/ru/ride/data-types/int) | Число знаков после запятой у токена, от 0 до 8 |
| 6 | issuer | [Address](/ru/ride/structures/common-structures/address) | Адрес аккаунта, который выпустил токен |
| 7 | issuerPublicKey | [ByteVector](/ru/ride/data-types/byte-vector) | Открытый ключ аккаунта, выпустившего токен |
| 8 | reissuable | [Boolean](/ru/ride/data-types/boolean) | true — токен можно довыпускать, false — нельзя довыпускать |
| 9 | scripted | [Boolean](/ru/ride/data-types/boolean) | true — [смарт-ассет](/ru/blockchain/token/smart-asset), false — обычный токен |
| 10 | sponsored | [Boolean](/ru/ride/data-types/boolean) | true — токен спонсируемый, false — неспонсируемый |
