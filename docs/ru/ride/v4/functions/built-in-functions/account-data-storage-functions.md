# [Ride v4 и v3] Функции хранилища данных аккаунта

:warning: Это документация Стандартной библиотеки версии 4 и 3. Рекомендуем использовать версию 5. [Перейти к&nbsp;версии&nbsp;5](/ru/ride/v4/functions/built-in-functions/account-data-storage-functions)

> Подробнее о [хранилище данных аккаунта](/ru/blockchain/account/account-data-storage)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [getBinary(Address&#124;Alias, String): ByteVector&#124;Unit](#get-binary) | Получает массив байтов по ключу | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [getBinaryValue(Address&#124;Alias, String): ByteVector](#get-binary-value) | Получает массив байтов по ключу. Завершается ошибкой, если данных нет | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [getBoolean(Address&#124;Alias, String): Boolean&#124;Unit](#get-boolean)  | Получает логическое значение по ключу | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [getBooleanValue(Address&#124;Alias, String): Boolean](#get-boolean-value)  | Получает логическое значение по ключу. Завершается ошибкой, если данных нет | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [getInteger(Address&#124;Alias, String): Int&#124;Unit](#get-integer)  | Получает целое число по ключу | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [getIntegerValue(Address&#124;Alias, String): Int](#get-integer-value)  | Получает целое число по ключу. Завершается ошибкой, если данных нет | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [getString(Address&#124;Alias, String): String&#124;Unit](#get-string)  | Получает строку по ключу | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [getStringValue(Address&#124;Alias, String): String](#get-string-value)  | Получает строку по ключу. Завершается ошибкой, если данных нет | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |

## getBinary <a id="get-binary"></a>

Получает массив байтов по ключу.

``` ride
getBinary(addressOrAlias: Address|Alias, key: String): ByteVector|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v4/structures/common-structures/address)&#124;[Alias](/ru/ride/v4/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/v4/data-types/string) | Ключ |

## getBinaryValue <a id="get-binary-value"></a>

Получает массив байтов по ключу. Завершается ошибкой, если данных нет.

``` ride
getBinaryValue(addressOrAlias: Address|Alias, key: String): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v4/structures/common-structures/address)&#124;[Alias](/ru/ride/v4/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/v4/data-types/string) | Ключ |

## getBoolean <a id="get-boolean"></a>

Получает логическое значение по ключу.

``` ride
getBoolean(addressOrAlias: Address|Alias, key: String): Boolean|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v4/structures/common-structures/address)&#124;[Alias](/ru/ride/v4/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/v4/data-types/string) | Ключ |

## getBooleanValue <a id="get-boolean-value"></a>

Получает логическое значение по ключу. Завершается ошибкой, если данных нет.

``` ride
getBooleanValue(addressOrAlias: Address|Alias, key: String): Boolean
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v4/structures/common-structures/address)&#124;[Alias](/ru/ride/v4/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/v4/data-types/string) | Ключ |

## getInteger <a id="get-integer"></a>

Получает целое число по ключу.

``` ride
getInteger(addressOrAlias: Address|Alias, key: String): Int|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v4/structures/common-structures/address)&#124;[Alias](/ru/ride/v4/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/v4/data-types/string) | Ключ |

## getIntegerValue <a id="get-integer-value"></a>

Получает целое число по ключу. Завершается ошибкой, если данных нет.

``` ride
getIntegerValue(addressOrAlias: Address|Alias, key: String): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v4/structures/common-structures/address)&#124;[Alias](/ru/ride/v4/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/v4/data-types/string) | Ключ |

## getString <a id="get-string"></a>

Получает строку по ключу.

``` ride
getString(addressOrAlias: Address|Alias, key: String): String|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v4/structures/common-structures/address)&#124;[Alias](/ru/ride/v4/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/v4/data-types/string) | Ключ |

## getStringValue <a id="get-string-value"></a>

Получает строку по ключу. Завершается ошибкой, если данных нет.

``` ride
getStringValue(addressOrAlias: Address|Alias, key: String): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v4/structures/common-structures/address)&#124;[Alias](/ru/ride/v4/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/v4/data-types/string) | Ключ |
