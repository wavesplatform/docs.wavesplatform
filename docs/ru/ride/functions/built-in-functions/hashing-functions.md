# Функции хеширования

| # | Название | Описание | Сложность |
| :--- | :--- | :--- | :--- |
| 1 | [blake2b256](#blake2b256)(ByteVector): ByteVector | Хеширует массив байтов с помощью алгоритма [BLAKE-256](https://en.wikipedia.org/wiki/BLAKE_%28hash_function%29) | 200 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 4**<br>10 для Стандартной библиотеки **версии 3** |
| 2 | blake2b256_16Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 16 Кбайт) | 10 |
| 3 | blake2b256_32Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 32 Кбайт) | 25 |
| 4 | blake2b256_64Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 64 Кбайт) | 50 |
| 5 | blake2b256_128Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 128 Кбайт) | 100 |
| 6 | [keccak256](#keccak256)(ByteVector): ByteVector | Хеширует массив байтов с помощью алгоритма [SHA3-256](https://en.wikipedia.org/wiki/SHA-3) | 200 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 4**<br>10 для Стандартной библиотеки **версии 3** |
| 7 | keccak256_16Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 16 Кбайт) | 10 |
| 8 | keccak256_32Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 32 Кбайт) | 25 |
| 9 | keccak256_64Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 64 Кбайт) | 50 |
| 10 | keccak256_128Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 128 Кбайт) | 100 |
| 11 | sha256(ByteVector): ByteVector | Хеширует массив байтов с помощью алгоритма [SHA-256](https://en.wikipedia.org/wiki/SHA-2) | 200 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 4**<br>10 для Стандартной библиотеки **версии 3** |
| 12 | [sha256](#sha256)_16Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 16 Кбайт) | 10 |
| 13 | sha256_32Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 32 Кбайт) | 25 |
| 14 | sha256_64Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 64 Кбайт) | 50 |
| 15 | sha256_128Kb(ByteVector): ByteVector | 〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp;〃&nbsp;&nbsp;&nbsp; (объем данных не более 128 Кбайт) | 100 |

## blake2b256

Хеширует массив байтов с помощью алгоритма [blake2b256](https://ru.wikipedia.org/wiki/BLAKE_%28хеш-функция%29).

``` ride
blake2b256(bytes: ByteVector): ByteVector
blake2b256_16Kb(bytes: ByteVector): ByteVector
blake2b256_32Kb(bytes: ByteVector): ByteVector
blake2b256_64Kb(bytes: ByteVector): ByteVector
blake2b256_128Kb(bytes: ByteVector): ByteVector
```

> :warning: Функции `blake2b256_16Kb`, `blake2b256_32Kb`, `blake2b256_64Kb`, `blake2b256_128Kb` появились в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

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
keccak256(bytes: ByteVector): ByteVector
keccak256_16Kb(bytes: ByteVector): ByteVector
keccak256_32Kb(bytes: ByteVector): ByteVector
keccak256_64Kb(bytes: ByteVector): ByteVector
keccak256_128Kb(bytes: ByteVector): ByteVector
```

> :warning: Функции `keccak256_16Kb`, `keccak256_32Kb`, `keccak256_64Kb`, `keccak256_128Kb` появились в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

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

## sha256

Хеширует массив байтов с помощью алгоритма [SHA-256](https://ru.wikipedia.org/wiki/SHA-2).

``` ride
sha256(bytes: ByteVector): ByteVector
sha256_16Kb(bytes: ByteVector): ByteVector
sha256_32Kb(bytes: ByteVector): ByteVector
sha256_64Kb(bytes: ByteVector): ByteVector
sha256_128Kb(bytes: ByteVector): ByteVector
```

> :warning: Функции `sha256_16Kb`, `sha256_32Kb`, `sha256_64Kb`, `sha256_128Kb` появились в [Стандартной библиотеке](/ru/ride/script/standard-library) **версии 4**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `bytes`: ByteVector | Массив байтов для хеширования.<br>Максимальный размер:<br>• Для функций `sha256_<N>Kbytes` — не более `N` Кбайт.<br>• Для функции `sha256` — не более 150 Кбайт. |

### Примеры

```ride
sha256("Ride".toBytes()) # Returns 5YxvrKsjJtq4G325gRVxbXpkox1sWdHUGVJLnRFqTWD3
sha256(125.toBytes())    # Returns A56kbJjy7A4B9Pa5tUgRNvtCHSsZ7pZVJuPsLT2vtPSU
sha256(base16'52696465') # Returns 5YxvrKsjJtq4G325gRVxbXpkox1sWdHUGVJLnRFqTWD3
sha256(base58'37BPKA')   # Returns 5YxvrKsjJtq4G325gRVxbXpkox1sWdHUGVJLnRFqTWD3
sha256(base64'UmlkZQ==') # Returns 5YxvrKsjJtq4G325gRVxbXpkox1sWdHUGVJLnRFqTWD3
```
