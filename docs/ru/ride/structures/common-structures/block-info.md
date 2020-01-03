# BlockInfo

Структура [блока](/ru/blockchain/block.md).

## Конструктор

``` ride
BlockInfo(timestamp: Int, height: Int, baseTarget: Int, generationSignature: ByteVector, generator: Address, generatorPublicKey: ByteVector)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | timestamp | [Int](/ru/ride/data-types/int.md) | [Временна́я метка блока](/ru/blockchain/block/block-timestamp.md) |
| 2 | height | [Int](/ru/ride/data-types/int.md) | [Высота блока](/ru/blockchain/block/block-height.md) |
| 3 | baseTarget | [Int](/ru/ride/data-types/int.md) | Сложность создания блока |
| 4 | generationSignature | [ByteVector](/ru/ride/data-types/byte-vector.md) | Подпись ключевого блока |
| 5 | generator | [Address](/ru/ride/structures/common-structures/address.md) | [Адрес](/ru/blockchain/account/address.md) аккаунта, который создал блок |
| 6 | generatorPublicKey | [ByteVector](/ru/ride/data-types/byte-vector.md) | Открытый ключ аккаунта, который создал блок |
