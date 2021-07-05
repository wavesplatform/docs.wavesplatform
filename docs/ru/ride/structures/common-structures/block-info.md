# BlockInfo

Структура, содержащая заголовки [блока](/ru/blockchain/block/). Эту структуру возвращает встроенная функция [blockInfoByHeight](/ru/ride/functions/built-in-functions/blockchain-functions#blockinfobyheight).

## Конструктор

``` ride
BlockInfo(timestamp: Int, height: Int, baseTarget: Int, generationSignature: ByteVector, generator: Address, generatorPublicKey: ByteVector, vrf: ByteVector|Unit)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | timestamp | [Int](/ru/ride/data-types/int) | [Временна́я метка блока](/ru/blockchain/block/block-timestamp) |
| 2 | height | [Int](/ru/ride/data-types/int) | [Высота блока](/ru/blockchain/block/block-height) |
| 3 | baseTarget | [Int](/ru/ride/data-types/int) | [Базовая цель](/ru/blockchain/block/block-generation/base-target) |
| 4 | generationSignature | [ByteVector](/ru/ride/data-types/byte-vector) | [Подпись генерирования](/ru/blockchain/block/block-generation/) |
| 5 | generator | [Address](/ru/ride/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) аккаунта, который создал блок |
| 6 | generatorPublicKey | [ByteVector](/ru/ride/data-types/byte-vector) | Открытый ключ аккаунта, который создал блок |
| 7 | vrf | [ByteVector](/ru/ride/data-types/byte-vector)&#124;[Unit](/ru/ride/data-types/byte-vector) | [VRF](/en/blockchain/block/block-generation/generation-signature) для блока версии 5, `unit` для других версий |
