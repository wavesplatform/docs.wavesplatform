# [Ride v4 и v3] Функции кодирования

:warning: Это документация Стандартной библиотеки версии 4 и 3. Рекомендуем использовать версию 5. [Перейти к&nbsp;версии&nbsp;5](/ru/ride/functions/built-in-functions/encoding-functions)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [toBase16String(ByteVector): String](#to-base-16-string) | Кодирует массив байтов в строку [Base16](https://ru.wikipedia.org/wiki/Шестнадцатеричная_система_счисления) | 10 |
| [toBase58String(ByteVector): String](#to-base-58-string) | Кодирует массив байтов в строку [Base58](https://ru.wikipedia.org/wiki/Base58) | 10 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>3 для Стандартной библиотеки **версии 4** |
| [toBase64String(ByteVector): String](#to-base-64-string) | Кодирует массив байтов в строку [Base64](https://ru.wikipedia.org/wiki/Base64) | 10 для Стандартной библиотеки **версии 3**<br>35 для Стандартной библиотеки **версии 4** |

## toBase16String(ByteVector): String<a id="to-base-16-string"></a>

Кодирует массив байтов в строку [Base16](https://ru.wikipedia.org/wiki/Шестнадцатеричная_система_счисления).

``` ride
toBase16String(bytes: ByteVector): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `bytes`: [ByteVector](/ru/ride/v4/data-types/byte-vector) | Массив байтов для кодирования |

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
| `bytes`: [ByteVector](/ru/ride/v4/data-types/byte-vector) | Массив байтов для кодирования |

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
| `bytes`: [ByteVector](/ru/ride/v4/data-types/byte-vector) | Массив байтов для кодирования |

### Примеры

```ride
toBase64String("Ride".toBytes()) # Возвращает "UmlkZQ=="
toBase64String(base64'UmlkZQ==') # Возвращает "UmlkZQ=="
```
