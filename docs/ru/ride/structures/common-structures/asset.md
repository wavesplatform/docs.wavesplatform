# Asset

Структура [токена](/ru/blockchain/token.md).

## Конструктор

``` ride
Asset(quantity: Int, decimals: Int, issuer: Address, issuerPublicKey: ByteVector, reissuable: Boolean, scripted: Boolean, sponsored: Boolean)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | id | [ByteVector](/ru/ride/data-types/byte-vector.md) | [ID токена](/ru/blockchain/token/token-id.md)
| 2 | quantity | [Int](/ru/ride/data-types/int.md) | Количество выпущенных [токенов](/ru/blockchain/token.md) |
| 3 | decimals | [Int](/ru/ride/data-types/int.md) | Число знаков после запятой у токена |
| 4 | issuer | [Address](/ru/ride/structures/common-structures/address.md) | Адрес аккаунта, который выпустил токен |
| 5 | issuerPublicKey | [ByteVector](/ru/ride/data-types/byte-vector.md) | Открытый ключ аккаунта, выпустившего токен |
| 6 | reissuable | [Boolean](/ru/ride/data-types/boolean.md) | true — токен можно довыпускать, false — нельзя довыпускать |
| 7 | scripted | [Boolean](/ru/ride/data-types/boolean.md) | true — [смарт-ассет](/ru/blockchain/token/smart-asset.md), false — обычный токен |
| 8 | sponsored | [Boolean](/ru/ride/data-types/boolean.md) | true — токен спонсируемый, false — неспонсируемый |
