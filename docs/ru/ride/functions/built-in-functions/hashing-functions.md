# Функции хеширования

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | blake2b256_16Kb(ByteVector): ByteVector | Хеширует массив байтов с помощью алгоритма [BLAKE-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) | 10 |
| 2 | blake2b256_32Kb(ByteVector): ByteVector | 〃 | 25 |
| 3 | blake2b256_64Kb(ByteVector): ByteVector | 〃 | 50 |
| 4 | blake2b256_128Kb(ByteVector): ByteVector | 〃 | 100 |
| 5 | blake2b256(ByteVector): ByteVector | 〃 | 200 для Стандартной библиотеки **версии 4**<br>10 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3** |
| 6 | keccak256_16Kb(ByteVector): ByteVector | Хеширует массив байтов с помощью алгоритма [SHA-3-256](https://en.wikipedia.org/wiki/SHA-3) | 10 |
| 7 | keccak256_32Kb(ByteVector): ByteVector | 〃 | 25 |
| 8 | keccak256_64Kb(ByteVector): ByteVector | 〃 | 50 |
| 9 | keccak256_128Kb(ByteVector): ByteVector | 〃 | 100 |
| 10 | keccak256(ByteVector): ByteVector | 〃 | 200 для Стандартной библиотеки **версии 4**<br>10 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3** |
| 11 | sha256_16Kb(ByteVector): ByteVector | Хеширует массив байтов с помощью алгоритма [SHA-256](https://en.wikipedia.org/wiki/SHA-2) | 10 |
| 12 | sha256_32Kb(ByteVector): ByteVector | 〃 | 25 |
| 13 | sha256_64Kb(ByteVector): ByteVector | 〃 | 50 |
| 14 | sha256_128Kb(ByteVector): ByteVector | 〃 | 100 |
| 15 | sha256(ByteVector): ByteVector | 〃 | 200 для Стандартной библиотеки **версии 4**<br>10 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3** |

## blake2b256

Хеширует массив байтов с помощью алгоритма [blake2b256](https://ru.wikipedia.org/wiki/BLAKE_%28хеш-функция%29).

``` ride
blake2b256_16Kb(bytes: ByteVector): ByteVector
blake2b256_32Kb(bytes: ByteVector): ByteVector
blake2b256_64Kb(bytes: ByteVector): ByteVector
blake2b256_128Kb(bytes: ByteVector): ByteVector
blake2b256(bytes: ByteVector): ByteVector
```

> :warning: Функции `blake2b256_16Kb`, `blake2b256_32Kb`, `blake2b256_64Kb`, `blake2b256_128Kb` появилось в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `bytes`: ByteVector | Массив байтов для хеширования.<br>Максимальный размер:<br>• Для функций `blake2b256_<N>Kbytes` — не более `N` Кбайт.<br>• Для функции `blake2b256` — не более 150 Кбайт. |

### Примеры

```ride
blake2b256("Ride".toBytes()) # Возвращает 6NSWRz5XthhFVm9uVQHuisdaseQJfc4WMGajN435v3f4
blake2b256(125.toBytes())    # Возвращает H9emWhyMuyyjDmNkgx7jAfHRuy9icXK3uYJuVw6R1uuK
blake2b256(base16'52696465') # Возвращает 6NSWRz5XthhFVm9uVQHuisdaseQJfc4WMGajN435v3f4
blake2b256(base58'37BPKA')   # Возвращает 6NSWRz5XthhFVm9uVQHuisdaseQJfc4WMGajN435v3f4
blake2b256(base64'UmlkZQ==') # Возвращает 6NSWRz5XthhFVm9uVQHuisdaseQJfc4WMGajN435v3f4
```

## keccak256

Хеширует массив байтов с помощью алгоритма [SHA-3-256](https://ru.wikipedia.org/wiki/SHA-3).

``` ride
keccak256_16Kb(bytes: ByteVector): ByteVector
keccak256_32Kb(bytes: ByteVector): ByteVector
keccak256_64Kb(bytes: ByteVector): ByteVector
keccak256_128Kb(bytes: ByteVector): ByteVector
keccak256(bytes: ByteVector): ByteVector
```

> :warning: Функции `keccak256_16Kb`, `keccak256_32Kb`, `keccak256_64Kb`, `keccak256_128Kb` появилось в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `bytes`: ByteVector | Массив байтов для хеширования.<br>Максимальный размер:<br>• Для функций `keccak256_<N>Kbytes` — не более `N` Кбайт.<br>• Для функции `keccak256` — не более 150 Кбайт. |

### Примеры

```ride
keccak256("Ride".toBytes()) # Возвращает 4qa5wNk4961VwJAjCKBzXiEvBQ2gBJoqDcLFRJTiSKpv
keccak256(125.toBytes())    # Возвращает 5UUkcH6Fp2E3mk7NSqSTs3JBP33zL3SB3yg4b2sR5gpF
keccak256(base16'52696465') # Возвращает 4qa5wNk4961VwJAjCKBzXiEvBQ2gBJoqDcLFRJTiSKpv
keccak256(base58'37BPKA')   # Возвращает 4qa5wNk4961VwJAjCKBzXiEvBQ2gBJoqDcLFRJTiSKpv
keccak256(base64'UmlkZQ==') # Возвращает 4qa5wNk4961VwJAjCKBzXiEvBQ2gBJoqDcLFRJTiSKpv
```

## sha256(ByteVector): ByteVector<a id="sha256"></a>

Хеширует массив байтов с помощью алгоритма [SHA-256](https://ru.wikipedia.org/wiki/SHA-2).

``` ride
sha256_16Kb(bytes: ByteVector): ByteVector
sha256_32Kb(bytes: ByteVector): ByteVector
sha256_64Kb(bytes: ByteVector): ByteVector
sha256_128Kb(bytes: ByteVector): ByteVector
sha256(bytes: ByteVector): ByteVector
```

> :warning: Функции `sha256_16Kb`, `sha256_32Kb`, `sha256_64Kb`, `sha256_128Kb` появилось в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `bytes`: ByteVector | Массив байтов для хеширования.<br>Максимальный размер:<br>• Для функций `sha256_\<N\>Kbytes` — не более `N` Кбайт.<br>• Для функции `sha256` — не более 150 Кбайт. |

### Примеры

```ride
sha256("Ride".toBytes()) # Returns 5YxvrKsjJtq4G325gRVxbXpkox1sWdHUGVJLnRFqTWD3
sha256(125.toBytes())    # Returns A56kbJjy7A4B9Pa5tUgRNvtCHSsZ7pZVJuPsLT2vtPSU
sha256(base16'52696465') # Returns 5YxvrKsjJtq4G325gRVxbXpkox1sWdHUGVJLnRFqTWD3
sha256(base58'37BPKA')   # Returns 5YxvrKsjJtq4G325gRVxbXpkox1sWdHUGVJLnRFqTWD3
sha256(base64'UmlkZQ==') # Returns 5YxvrKsjJtq4G325gRVxbXpkox1sWdHUGVJLnRFqTWD3
```
