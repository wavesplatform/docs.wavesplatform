# [Ride v5] BlockInfo

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/structures/common-structures/block-info)

Структура, содержащая заголовки [блока](/ru/blockchain/block/). Эту структуру возвращает встроенная функция [blockInfoByHeight](/ru/ride/v5/functions/built-in-functions/blockchain-functions#blockinfobyheight).

## Конструктор

``` ride
BlockInfo(timestamp: Int, height: Int, baseTarget: Int, generationSignature: ByteVector, generator: Address, generatorPublicKey: ByteVector, vrf: ByteVector|Unit)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | timestamp | [Int](/ru/ride/v5/data-types/int) | [Временна́я метка блока](/ru/blockchain/block/block-timestamp) |
| 2 | height | [Int](/ru/ride/v5/data-types/int) | [Высота блока](/ru/blockchain/block/block-height) |
| 3 | baseTarget | [Int](/ru/ride/v5/data-types/int) | [Базовая цель](/ru/blockchain/block/block-generation/base-target) |
| 4 | generationSignature | [ByteVector](/ru/ride/v5/data-types/byte-vector) | [Подпись генерирования](/ru/blockchain/block/block-generation/) |
| 5 | generator | [Address](/ru/ride/v5/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) аккаунта, который создал блок |
| 6 | generatorPublicKey | [ByteVector](/ru/ride/v5/data-types/byte-vector) | Открытый ключ аккаунта, который создал блок |
| 7 | vrf | [ByteVector](/ru/ride/v5/data-types/byte-vector)&#124;[Unit](/ru/ride/v5/data-types/byte-vector) | [VRF](/en/blockchain/block/block-generation/generation-signature) для блока версии 5, `unit` для других версий |
