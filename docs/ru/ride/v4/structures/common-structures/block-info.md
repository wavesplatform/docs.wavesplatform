# [Ride v4 и v3] BlockInfo

:warning: Это документация Стандартной библиотеки версии 4 и 3. Рекомендуем использовать версию 5. [Перейти к&nbsp;версии&nbsp;5](/ru/ride/structures/common-structures/block-info)

Структура [блока](/ru/blockchain/block/).

## Конструктор

В [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 3**:

``` ride
BlockInfo(timestamp: Int, height: Int, baseTarget: Int, generationSignature: ByteVector, generator: Address, generatorPublicKey: ByteVector)
```

В Стандартной библиотеке **версии 4**:

``` ride
BlockInfo(timestamp: Int, height: Int, baseTarget: Int, generationSignature: ByteVector, generator: Address, generatorPublicKey: ByteVector, vrf: ByteVector|Unit)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | timestamp | [Int](/ru/ride/v4/data-types/int) | [Временна́я метка блока](/ru/blockchain/block/block-timestamp) |
| 2 | height | [Int](/ru/ride/v4/data-types/int) | [Высота блока](/ru/blockchain/block/block-height) |
| 3 | baseTarget | [Int](/ru/ride/v4/data-types/int) | [Базовая цель](/ru/blockchain/block/block-generation/base-target) |
| 4 | generationSignature | [ByteVector](/ru/ride/v4/data-types/byte-vector) | [Подпись генерирования](/ru/blockchain/block/block-generation/) |
| 5 | generator | [Address](/ru/ride/v4/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) аккаунта, который создал блок |
| 6 | generatorPublicKey | [ByteVector](/ru/ride/v4/data-types/byte-vector) | Открытый ключ аккаунта, который создал блок |
| 7 | vrf | [ByteVector](/ru/ride/v4/data-types/byte-vector)&#124;[Unit](/ru/ride/v4/data-types/byte-vector) | [VRF](/en/blockchain/block/block-generation/generation-signature) для блока версии 5, `unit` для других версий.<br>Поле добавлено в Стандартной библиотеке версии 4 |
