# BlockInfo

Структура [блока](/ru/blockchain/block).

## Конструктор

``` ride
BlockInfo(timestamp: Int, height: Int, baseTarget: Int, generationSignature: ByteVector, generator: Address, generatorPublicKey: ByteVector, transactionsRoot: ByteVector)
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
| 7 | transactionsRoot | [ByteVector](/ru/ride/data-types/byte-vector) | [Корневой хеш транзакций блока](/ru/blockchain/block/merkle-root) транзакций блока.<br>Поле появилось в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network) |

