# Функции верификации

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [bn256groth16Verify](#bn256groth16verify) | Семейство функций.<br>Осуществляют проверку [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу groth16 на кривой bn254 | 800–1650 |
| [checkMerkleProof](#checkmerkleproof) | Проверяет, что данные являются частью [дерева Меркла](https://ru.wikipedia.org/wiki/Дерево_хешей) | 30 |
| [createMerkleRoot](#createmerkleroot) | Вычисляет [корневой хеш дерева Меркла транзакций блока](/ru/blockchain/block/merkle-root) | 30 |
| [ecrecover](#ecrecover) | Восстанавливает открытый ключ из хеша сообщения и цифровой подписи [ECDSA](https://ru.wikipedia.org/wiki/ECDSA) | 70 |
| [groth16Verify](#groth16verify) | Семейство функций.<br>Осуществляют проверку [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу [groth16](https://eprint.iacr.org/2016/260.pdf) на кривой bls12-381 | 1200–2700 |
| [rsaVerify](#rsaverify) | Семейство функций.<br>Проверяют достоверность цифровой подписи [RSA](https://ru.wikipedia.org/wiki/RSA) | 300 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>500–1000 для Стандартной библиотеки **версии 4** |
| [sigVerify](#sigverify) | Семейство функций.<br>Проверяют достоверность цифровой подписи [Curve25519](https://en.wikipedia.org/wiki/Curve25519) достоверна | 100 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>100–200 для Стандартной библиотеки **версии 4** |

## bn256groth16Verify

Семейство функций. Осуществляют проверку доказательства с нулевым разглашением [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу groth16 на кривой bn254.

> :warning: Семейство функций `bn256groth16Verify` появилось в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

| Название | Макс. кол-во входов | Сложность |
|:---| :--- | :--- |
| bn256groth16Verify(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 16 | 1650 |
| bn256groth16Verify_1inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 1 | 800 |
| bn256groth16Verify_2inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 2 | 850 |
| bn256groth16Verify_3inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 3 | 950 |
| bn256groth16Verify_4inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 4 | 1000 |
| bn256groth16Verify_5inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 5 | 1050 |
| bn256groth16Verify_6inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 6 | 1100 |
| bn256groth16Verify_7inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 7 | 1150 |
| bn256groth16Verify_8inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 8 | 1200 |
| bn256groth16Verify_9inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 9 | 1250 |
| bn256groth16Verify_10inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 10 | 1300 |
| bn256groth16Verify_11inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 11 | 1350 |
| bn256groth16Verify_12inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 12 | 1400 |
| bn256groth16Verify_13inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 13 | 1450 |
| bn256groth16Verify_14inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 14 | 1550 |
| bn256groth16Verify_15inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 15 | 1600 |

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `vk`: ByteVector | Ключ для проверки.<br>Максимальный размер:<br>• Для функций `bn256groth16Verify_<N>inputs` — не более 256 + 32 × `N` байт.<br>• Для функции `bn256groth16Verify` — не более 256 + 32 × 16 = 768 байта |
| `proof`: ByteVector | zk-SNARK. фиксированный размер: 192 байта |
| `inputs`: ByteVector | Массив публичных входов доказательства с нулевым разглашением. Например, массив хешей UTXO в случае анонимных транзакций.<br>Максимальный размер:<br>• Для функций `bn256groth16Verify_<N>inputs` — не более 32 × `N` байт.<br>• Для функции `bn256groth16Verify` — не более 512 байт. |

## checkMerkleProof

> :warning: Функция `checkMerkleProof` не входит в [Стандартную библиотеку](/ru/ride/script/standard-library) версии 4. Используйте `createMerkleRoot` вместо нее.

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

## createMerkleRoot

> :warning: Функция `createMerkleRoot` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

Вычисляет корневой хеш транзакций блока на основе хеша транзакции и соседних хешей дерева Меркла, используя алгоритм хеширования [BLAKE2b-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29). Чтобы проверить присутствие транзакции в блоке, нужно сравнить вычисленный хеш с с полем `transactionsRoot` в заголовке блока. Подробное описание приведено в разделе [Корневой хеш транзакции](/ru/blockchain/block/merkle-root).


``` ride
createMerkleRoot(merkleProofs: List[ByteVector], valueBytes: ByteVector, index: Int): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `merkleProofs`: List[ByteVector] | Массив соседних хешей дерева Меркла |
| `valueBytes`: ByteVector | Хеш транзакции. Для хеширования можно использовать функцию [blake2b256](/ru/ride/functions/built-in-functions/hashing-functions#blake2b256). Хешировать транзакцию нужно вместе с подписью |
| `index`: Int | Порядковый номер транзакции в блоке |

## ecrecover

> :warning: Функция `ecrecover` добавлена в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

Возвращает открытый ключ, восстановленный из хеша сообщения и цифровой подписи [ECDSA](https://ru.wikipedia.org/wiki/ECDSA) на основе эллиптической кривой secp256k1. Выбрасывает исключение, если восстановить открытый ключ не удалось.

Открытый ключ возвращается в несжатом формате (64 байта).

Функцию можно использовать для проверки достоверности цифровой подписи сообщения, сравнив восстановленный открытый ключ с ключом отправителя.

``` ride
ecrecover(messageHash: ByteVector, signature: ByteVector): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `messageHash`: ByteVector | Keccak-256-хеш сообщения. Фиксированный размер: 32 байта |
| `signature`: ByteVector | Цифровая подпись ECDSA. Фиксированный размер: 65 байт |

### Пример

Для верификации транзакции блокчейна Ethereum нужны следующие данные:

* транзакция;
* подпись, полученная с помощью функции [ecsign](https://github.com/ethereumjs/ethereumjs-util/blob/master/docs/modules/_signature_.md#const-ecsign) (конкатенация байтов `r`, `s` и `v`);
* открытый ключ отправителя.

```
func check(t: ByteVector, signature: ByteVector, publicKey: ByteVector) = {
   ecrecover(keccak256(t), signature) == publicKey
}
```

## groth16Verify

Семейство функций. Осуществляют проверку [zk-SNARK](https://media.consensys.net/introduction-to-zksnarks-with-examples-3283b554fc3b) по протоколу [groth16](https://eprint.iacr.org/2016/260.pdf).

> :warning: Семейство функций `groth16Verify` появилось в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

| Название | Макс. кол-во входов | Сложность |
|:---| :--- | :--- |
| groth16Verify(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 16 | 2700 |
| groth16Verify_1inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 1 | 1200 |
| groth16Verify_2inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 2 | 1300 |
| groth16Verify_3inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 3 | 1400 |
| groth16Verify_4inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 4 | 1500 |
| groth16Verify_5inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 5 | 1600 |
| groth16Verify_6inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 6 | 1700 |
| groth16Verify_7inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 7 | 1800 |
| groth16Verify_8inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 8 | 1900 |
| groth16Verify_9inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 9 | 2000 |
| groth16Verify_10inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 10 | 2100 |
| groth16Verify_11inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 11 | 2200 |
| groth16Verify_12inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 12 | 2300 |
| groth16Verify_13inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 13 | 2400 |
| groth16Verify_14inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 14 | 2500 |
| groth16Verify_15inputs(vk:ByteVector, proof:ByteVector, inputs:ByteVector): Boolean | 15 | 2600 |

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `vk`: ByteVector | Ключ для проверки.<br>Максимальный размер:<br>• Для функций `groth16Verify_<N>inputs` — не более 384 + 48 × `N` байт.<br>• Для функции `groth16Verify` — не более 384 + 48 × 16 =1152 байта |
| `proof`: ByteVector | [Доказательство с нулевым разглашением](https://ru.wikipedia.org/wiki/Доказательство_с_нулевым_разглашением). Фиксированный размер: 192 байта |
| `inputs`: ByteVector | Массив публичных входов доказательства с нулевым разглашением.<br>Максимальный размер:<br>• Для функций `groth16Verify_<N>inputs` — не более 32 × `N` байт.<br>• Для функции `groth16Verify` — не более 512 байт. |

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
