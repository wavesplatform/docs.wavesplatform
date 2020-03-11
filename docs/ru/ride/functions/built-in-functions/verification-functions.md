# Функции верификации

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | [checkMerkleProof](#checkmerkleproof)(ByteVector, ByteVector, ByteVector): Boolean | Проверяет, что данные являются частью [дерева Меркла](https://ru.wikipedia.org/wiki/Дерево_хешей) | 30 |
| 2 | [groth16Verify](#groth16verify)(ByteVector, ByteVector, ByteVector): Boolean | Осуществляет проверку [снарка](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу [groth16](https://eprint.iacr.org/2016/260.pdf) | 3900 |
| 3 | groth16Verify_1inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (не более 1 входа) | 1900 |
| 4 | groth16Verify_2inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (не более 2 входов) | 2000 |
| 5 | groth16Verify_3inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (не более 3 входов) | 2150 |
| 6 | groth16Verify_4inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (не более 4 входов) | 2300 |
| 7 | groth16Verify_5inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (не более 5 входов) | 2450 |
| 8 | groth16Verify_6inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (не более 6 входов) | 2550 |
| 9 | groth16Verify_7inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (не более 7 входов) | 2700 |
| 10 | groth16Verify_8inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (не более 8 входов) | 2900 |
| 11 | groth16Verify_9inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (не более 9 входов) | 3000 |
| 12 | groth16Verify_10inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (не более 10 входов) | 3150 |
| 13 | groth16Verify_11inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (не более 11 входов) | 3250 |
| 14 | groth16Verify_12inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (не более 12 входов) | 3400 |
| 15 | groth16Verify_13inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (не более 13 входов) | 3500 |
| 16 | groth16Verify_14inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (не более 14 входов) | 3650 |
| 17 | groth16Verify_15inputs(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (не более 15 входов) | 3750 |
| 18 | [rsaVerify](#rsaverify)(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | Проверяет, что цифровая подпись [RSA](https://ru.wikipedia.org/wiki/RSA) достоверна; то есть что она была создана владельцем открытого ключа | 1000 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 4**<br>300 для Стандартной библиотеки **версии 3**|
| 19 | rsaVerify_16Kb(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 16 Кбайт) | 500 |
| 20 | rsaVerify_32Kb(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 32 Кбайт) | 550 |
| 21 | rsaVerify_64Kb(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 64 Кбайт) | 625 |
| 22 | rsaVerify_128Kb(digestAlgorithmType, ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 128 Кбайт) | 750 |
| 23 | [sigVerify](#sigverify)(ByteVector, ByteVector, ByteVector): Boolean | Проверяет, что цифровая подпись [Curve25519](https://en.wikipedia.org/wiki/Curve25519) достоверна; то есть что она была создана владельцем открытого ключа | 200 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 4**<br>100 для Стандартной библиотеки **версии 3** |
| 24 | sigVerify_16Kb(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 16 Кбайт) | 100 |
| 25 | sigVerify_32Kb(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 32 Кбайт) | 110 |
| 26 | sigVerify_64Kb(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 64 Кбайт) | 125 |
| 27 | sigVerify_128Kb(ByteVector, ByteVector, ByteVector): Boolean | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 128 Кбайт) | 150 |

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

Осуществляет проверку [снарка](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу [groth16](https://eprint.iacr.org/2016/260.pdf).

> :warning: Семейство функций `groth16Verify` появилось в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

```
groth16Verify(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_1inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_2inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_3inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_4inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_5inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_6inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_7inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_8inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_9inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_10inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_11inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_12inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_13inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_14inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
groth16Verify_15inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `vk`: ByteVector | Ключ для проверки.<br>Максимальный размер:<br>• Для функций `groth16Verify_<N>inputs` — не более 384 + 48 × `N` байт.<br>• Для функции `groth16Verify` — не более 384 + 48 × 16 =1152 байта |
| `proof`: ByteVector | [Доказательство с нулевым разглашением](https://ru.wikipedia.org/wiki/Доказательство_с_нулевым_разглашением). 192 байта
| `inputs`: ByteVector | Массив публичных входов доказательства с нулевым разглашением.<br>Максимальный размер:<br>• Для функций `groth16Verify_<N>inputs` — не более 32 × `N` байт.<br>• Для функции `groth16Verify_<N>inputs`— не более 512 байт. |

### Пример

```
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
 
groth16Verify(vk, proof, inputs)
```

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
rsaVerify(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
rsaVerify_16Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
rsaVerify_32Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
rsaVerify_64Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
rsaVerify_128Kb(digest: digestAlgorithmType, message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
```

> :warning: Функции `rsaVerify_16Kb`, `rsaVerify_32Kb`, `rsaVerify_64Kb`, `rsaVerify_128Kb` появились в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `digest`: digestAlgorithmType | Алгоритм хеширования, примененный к данным перед подписанием. Возможные значения:<br>• NOALG — нет хеширования.<br>• MD5<br>• SHA1<br>• SHA224<br>• SHA256<br>• SHA384<br>• SHA512<br>•  SHA3224 <br>• SHA3256<br>• SHA3384<br>• SHA3512  |
| `message`: ByteVector | Исходные данные.<br>Максимальный размер:<br>• Для функций `rsaVerify_<N>Kbytes` — не более `N` Кбайт.<br>• Для функции `rsaVerify` — не более 150 Кбайт. |
| `sig`: ByteVector | Цифровая подпись. 25 байт |
| `pub`: ByteVector | Открытый ключ. 294 байта |

## sigVerify

Проверяет, что цифровая подпись [Curve25519](https://en.wikipedia.org/wiki/Curve25519) достоверна; то есть что она была создана владельцем открытого ключа.

``` ride
sigVerify(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
sigVerify_16Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
sigVerify_32Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
sigVerify_64Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
sigVerify_128Kb(message: ByteVector, sig: ByteVector, pub: ByteVector): Boolean
```

> :warning: Функции `sigVerify_16Kb`, `sigVerify_32Kb`, `sigVerify_64Kb`, `sigVerify_128Kb` появились в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `message`: ByteVector | Исходные данные.<br>Максимальный размер:<br>• Для функций `sigVerify_<N>Kbytes` — не более `N` Кбайт.<br>• Для функции `sigVerify` — не более 150 Кбайт. |
| `sig`: ByteVector | Цифровая подпись. 25 байт |
| `pub`: ByteVector | Открытый ключ. 294 байта |
