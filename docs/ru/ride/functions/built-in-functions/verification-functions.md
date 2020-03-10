# Функции верификации

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | [checkMerkleProof](#checkmerkleproof)(ByteVector, ByteVector, ByteVector): Boolean | Проверяет, что данные являются частью [дерева Меркла](https://ru.wikipedia.org/wiki/Дерево_хешей) | 30 |
| 2 | [rsaVerify](#rsaverify)_16Kb(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | Проверяет, что цифровая подпись [RSA](https://ru.wikipedia.org/wiki/RSA) достоверна; то есть что она была создана владельцем открытого ключа | 500 |
| 3 | rsaVerify_32Kb(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | 〃 | 550 |
| 4 | rsaVerify_64Kb(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | 〃 | 625 |
| 5 | rsaVerify_128Kb(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | 〃 | 750 |
| 6 | rsaVerify(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | 〃 | 1000 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 4**<br>300 для Стандартной библиотеки **версии 3**|
| 7 | [sigVerify](#sigverify)_16Kb(ByteVector, ByteVector, ByteVector): Boolean | Проверяет, что цифровая подпись [Curve25519](https://en.wikipedia.org/wiki/Curve25519) достоверна; то есть что она была создана владельцем открытого ключа | 100 |
| 8 | sigVerify_32Kb(ByteVector, ByteVector, ByteVector): Boolean | 〃 | 110 |
| 9 | sigVerify_64Kb(ByteVector, ByteVector, ByteVector): Boolean | 〃 | 125 |
| 10 | sigVerify_128Kb(ByteVector, ByteVector, ByteVector): Boolean | 〃 | 150 |
| 11 | sigVerify(ByteVector, ByteVector, ByteVector): Boolean | 〃 | 200 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 4**<br>100 для Стандартной библиотеки **версии 3** |

## checkMerkleProof

Проверяет, что данные являются частью [дерева Меркла](https://ru.wikipedia.org/wiki/Дерево_хешей).

Для хеширования [дерева Меркла](https://ru.wikipedia.org/wiki/Дерево_хешей) используется функция хеширования [BLAKE2b](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29).

``` ride
checkMerkleProof(merkleRoot: ByteVector, merkleProof: ByteVector, valueBytes: ByteVector): Boolean
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `merkleRoot`: ByteVector | Корневой хеш дерева Меркла. |
| `merkleProof`: ByteVector | Массив хешей. |
| `valueBytes`: ByteVector | Данные для проверки.|

## rsaVerify

Проверяет, что цифровая подпись [RSA](https://ru.wikipedia.org/wiki/RSA) данных достоверна; то есть что она была создана владельцем открытого ключа.

> :warning: Рекомендуемая длина модуля ключей RSA — не менее 2048 бит.

Данные перед подписанием можно хешировать с помощью одного из следующих алгоритмов:

* MD5
* SHA-1
* SHA-224
* SHA-256
* SHA-384
* SHA-512
* SHA3-224
* SHA3-256
* SHA3-384
* SHA3-512

> :warning: MD5 и SHA-1 — устаревшие алгоритмы, для которых были найдены коллизии. Они оставлены только для обратной совместимости. Выбор безопасного алгоритма хеширования — ответственность разработчика приложения.

``` ride
rsaVerify_16Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
rsaVerify_32Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
rsaVerify_64Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
rsaVerify_128Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
rsaVerify(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
```

> :warning: Функции `rsaVerify_16Kb`, `rsaVerify_32Kb`, `rsaVerify_64Kb`, `rsaVerify_128Kb` появились в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `digest`: digestAlgorithmType | Алгоритм хеширования, примененный к данным перед подписанием. Возможные значения:<br>• NOALG — нет хеширования.<br>• MD5<br>• SHA1<br>• SHA224<br>• SHA256<br>• SHA384<br>• SHA512<br>•  SHA3224 <br>• SHA3256<br>• SHA3384<br>• SHA3512  |
| `message`: ByteVector | Исходные данные.<br>Максимальный размер:<br>• Для функций `rsaVerify_<N>Kbytes` — не более `N` Кбайт.<br>• Для функции `rsaVerify` — не более 150 Кбайт. |
| `sig`: ByteVectore | Цифровая подпись. 25 байт |
| `pub`: ByteVectore | Открытый ключ. 294 байта |

## sigVerify

Проверяет, что цифровая подпись [Curve25519](https://en.wikipedia.org/wiki/Curve25519) достоверна; то есть что она была создана владельцем открытого ключа.

``` ride
sigVerify_16Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
sigVerify_32Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
sigVerify_64Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
sigVerify_128Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
sigVerify_(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
```

> :warning: Функции `sigVerify_16Kb`, `sigVerify_32Kb`, `sigVerify_64Kb`, `sigVerify_128Kb` появились в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).


### Параметры

| Параметр | Описание |
| :--- | :--- |
| `message`: ByteVector | Исходные данные.<br>Максимальный размер:<br>• Для функций `sigVerify_<N>Kbytes` — не более `N` Кбайт.<br>• Для функции `sigVerify` — не более 150 Кбайт. |
| `sig`: ByteVectore | Цифровая подпись. 25 байт |
| `pub`: ByteVectore | Открытый ключ. 294 байта |
