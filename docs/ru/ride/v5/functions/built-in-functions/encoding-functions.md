# [Ride v5] Функции кодирования

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/functions/built-in-functions/encoding-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [toBase16String(ByteVector): String](#to-base-16-string) | Кодирует массив байтов в строку [Base16](https://ru.wikipedia.org/wiki/Шестнадцатеричная_система_счисления) | 10 |
| [toBase58String(ByteVector): String](#to-base-58-string) | Кодирует массив байтов в строку [Base58](https://ru.wikipedia.org/wiki/Base58) | 3 |
| [toBase64String(ByteVector): String](#to-base-64-string) | Кодирует массив байтов в строку [Base64](https://ru.wikipedia.org/wiki/Base64) | 35 |

## toBase16String(ByteVector): String<a id="to-base-16-string"></a>

Кодирует массив байтов в строку [Base16](https://ru.wikipedia.org/wiki/Шестнадцатеричная_система_счисления).

``` ride
toBase16String(bytes: ByteVector): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `bytes`: [ByteVector](/ru/ride/v5/data-types/byte-vector) | Массив байтов для кодирования |

### Примеры

```ride
toBase16String("Ride".toBytes()) # Возвращает "52696465"
toBase16String(base16'52696465') # Возвращает "52696465"
```

## toBase58String(ByteVector): String<a id="to-base-58-string"></a>

Кодирует массив байтов в строку [Base58](https://ru.wikipedia.org/wiki/Base58).

``` ride
toBase58String(bytes: ByteVector): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `bytes`: [ByteVector](/ru/ride/v5/data-types/byte-vector) | Массив байтов для кодирования |

### Примеры

```ride
toBase58String("Ride".toBytes()) # Возвращает "37BPKA"
toBase58String(base58'37BPKA') # Возвращает "37BPKA"
```

## toBase64String(ByteVector): String<a id="to-base-64-string"></a>

Кодирует массив байтов в строку [Base64](https://ru.wikipedia.org/wiki/Base64).

``` ride
toBase64String(bytes: ByteVector): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `bytes`: [ByteVector](/ru/ride/v5/data-types/byte-vector) | Массив байтов для кодирования |

### Примеры

```ride
toBase64String("Ride".toBytes()) # Возвращает "UmlkZQ=="
toBase64String(base64'UmlkZQ==') # Возвращает "UmlkZQ=="
```
