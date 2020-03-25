# BlockInfo

Структура [блока](/ru/blockchain/block).

## Конструктор

``` ride
BlockInfo(timestamp: Int, height: Int, baseTarget: Int, generationSignature: ByteVector, generator: Address, generatorPublicKey: ByteVector)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | timestamp | [Int](/ru/ride/data-types/int) | [Временна́я метка блока](/ru/blockchain/block/block-timestamp) |
| 2 | height | [Int](/ru/ride/data-types/int) | [Высота блока](/ru/blockchain/block/block-height) |
| 3 | baseTarget | [Int](/ru/ride/data-types/int) | Сложность создания блока |
| 4 | generationSignature | [ByteVector](/ru/ride/data-types/byte-vector) | Подпись ключевого блока |
| 5 | generator | [Address](/ru/ride/structures/common-structures/address) | [Адрес](/ru/blockchain/account/address) аккаунта, который создал блок |
| 6 | generatorPublicKey | [ByteVector](/ru/ride/data-types/byte-vector) | Открытый ключ аккаунта, который создал блок |
