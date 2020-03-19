# Функции верификации

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [checkMerkleProof](#checkmerkleproof) | Проверяет, что данные являются частью [дерева Меркла](https://ru.wikipedia.org/wiki/Дерево_хешей) | 30 |
| [groth16Verify](#groth16verify) | Семейство функций.<br>Осуществляют проверку [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу [groth16](https://eprint.iacr.org/2016/260.pdf) | 1900–3900 |
| [rsaVerify](#rsaverify) | Семейство функций.<br>Проверяют, что цифровая подпись [RSA](https://ru.wikipedia.org/wiki/RSA) достоверна | 300 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>500–1000 для Стандартной библиотеки **версии 4** |
| [sigVerify](#sigverify) | Семейство функций.<br>Проверяют, что цифровая подпись [Curve25519](https://en.wikipedia.org/wiki/Curve25519) достоверна | 100 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>100–200 для Стандартной библиотеки **версии 4** |

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

## groth16Verify

Семейство функций. Осуществляют проверку [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу [groth16](https://eprint.iacr.org/2016/260.pdf).

> :warning: Семейство функций `groth16Verify` появилось в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

| Название | Макс. кол-во входов | Сложность |
|:---| :--- | :--- |
| groth16Verify(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 16 | 3900 |
| groth16Verify_1inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 1 | 1900 |
| groth16Verify_2inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 2 | 2000 |
| groth16Verify_3inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 3 | 2150 |
| groth16Verify_4inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 4 | 2300 |
| groth16Verify_5inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 5 | 2450 |
| groth16Verify_6inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 6 | 2550 |
| groth16Verify_7inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 7 | 2700 |
| groth16Verify_8inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 8 | 2900 |
| groth16Verify_9inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 9 | 3000 |
| groth16Verify_10inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 10 | 3150 |
| groth16Verify_11inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 11 | 3250 |
| groth16Verify_12inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 12 | 3400 |
| groth16Verify_13inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 13 | 3500 |
| groth16Verify_14inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 14 | 3650 |
| groth16Verify_15inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 15 | 3750 |

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `vk`: ByteVector | Ключ для проверки.<br>Максимальный размер:<br>• Для функций `groth16Verify_<N>inputs` — не более 384 + 48 × `N` байт.<br>• Для функции `groth16Verify` — не более 384 + 48 × 16 =1152 байта |
| `proof`: ByteVector | [Доказательство с нулевым разглашением](https://ru.wikipedia.org/wiki/Доказательство_с_нулевым_разглашением). Фиксированный размер: 192 байта |
| `inputs`: ByteVector | Массив публичных входов доказательства с нулевым разглашением.<br>Максимальный размер:<br>• Для функций `groth16Verify_<N>inputs` — не более 32 × `N` байт.<br>• Для функции `groth16Verify_<N>inputs`— не более 512 байт. |

### Пример

```
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
 
groth16Verify(vk, proof, inputs)
```

## rsaVerify

Семейство функций. Проверяют, что цифровая подпись [RSA](https://ru.wikipedia.org/wiki/RSA) данных достоверна; то есть что она была создана владельцем открытого ключа.

| Название | Макс. размер `message` | Сложность |
|:---| :--- | :--- |
| rsaVerify(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 150 Кбайт | 300 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>1000 для Стандартной библиотеки **версии 4**|
| rsaVerify_16Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 16 Кбайт | 500 |
| rsaVerify_32Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 32 Кбайт | 550 |
| rsaVerify_64Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 64 Кбайт | 625 |
| rsaVerify_128Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 128 Кбайт | 750 |

> :warning: Функции `rsaVerify_16Kb`, `rsaVerify_32Kb`, `rsaVerify_64Kb`, `rsaVerify_128Kb` появились в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

Рекомендуемая длина модуля ключей RSA — не менее 2048 бит.

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

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `digest`: digestAlgorithmType | Алгоритм хеширования, примененный к данным перед подписанием. Возможные значения:<br>• NOALG — нет хеширования.<br>• MD5<br>• SHA1<br>• SHA224<br>• SHA256<br>• SHA384<br>• SHA512<br>•  SHA3224 <br>• SHA3256<br>• SHA3384<br>• SHA3512  |
| `message`: ByteVector | Исходные данные.<br>Максимальный размер:<br>• Для функций `rsaVerify_<N>Kb` — не более `N` Кбайт.<br>• Для функции `rsaVerify` — не более 150 Кбайт. |
| `sig`: ByteVector | Цифровая подпись. Фиксированный размер: 25 байт |
| `pub`: ByteVector | Открытый ключ в бинарном формате. Фиксированный размер: 294 байта |

## sigVerify

Семейство функций. Проверяют, что цифровая подпись [Curve25519](https://en.wikipedia.org/wiki/Curve25519) достоверна; то есть что она была создана владельцем открытого ключа.

| Название | Макс. размер `message` | Сложность |
|:---| :--- | :--- |
| sigVerify(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean |150 Кбайт | 100 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>200 для Стандартной библиотеки **версии 4** |
| sigVerify_16Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 16 Кбайт | 100 |
| sigVerify_32Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 32 Кбайт | 110 |
| sigVerify_64Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 64 Кбайт | 125 |
| sigVerify_128Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean | 128 Кбайт | 150 |

> :warning: Функции `sigVerify_16Kb`, `sigVerify_32Kb`, `sigVerify_64Kb`, `sigVerify_128Kb` появились в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `message`: ByteVector | Исходные данные.<br>Максимальный размер:<br>• Для функций `sigVerify_<N>Kb` — не более `N` Кбайт.<br>• Для функции `sigVerify` — не более 150 Кбайт. |
| `sig`: ByteVector | Цифровая подпись. Фиксированный размер: 25 байт |
| `pub`: ByteVector | Открытый ключ в бинарном формате. Фиксированный размер: 294 байта |
