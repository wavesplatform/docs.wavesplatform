# [Ride v5] Функции получения данных из хранилища данных аккаунта

:warning: Это документация Стандартной библиотеки **версии 5**, которая в настоящее время доступна только на [Stagenet](/ru/blockchain/blockchain-network/). [Перейти к версии для Mainnet](/ru/ride/functions/built-in-functions/account-data-storage-functions)

> Подробнее о [хранилище данных аккаунта](/ru/blockchain/account/account-data-storage)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [getBinary(Address&#124;Alias, String): ByteVector&#124;Unit](#get-binary) | Получает массив байтов по ключу | 10 |
| [getBinary(String): ByteVector&#124;Unit](#getbinary-string-bytevector-unit) | Получает массив байтов по ключу из собственного хранилища данных | 10 |
| [getBinaryValue(Address&#124;Alias, String): ByteVector](#get-binary-value) | Получает массив байтов по ключу. Завершается ошибкой, если данных нет | 10 |
| [getBinaryValue(String): ByteVector](#getbinaryvalue-string-bytevector) | Получает массив байтов по ключу из собственного хранилища данных. Завершается ошибкой, если данных нет | 10 |
| [getBoolean(Address&#124;Alias, String): Boolean&#124;Unit](#get-boolean)  | Получает логическое значение по ключу | 10 |
| [getBoolean(String): Boolean&#124;Unit](#getboolean-string-boolean-unit) | Получает логическое значение по ключу из собственного хранилища данных | 10 |
| [getBooleanValue(Address&#124;Alias, String): Boolean](#get-boolean-value) | Получает логическое значение по ключу. Завершается ошибкой, если данных нет | 10 |
| [getBooleanValue(String): Boolean](#getbooleanvalue-string-boolean) | Получает логическое значение по ключу из собственного хранилища данных. Завершается ошибкой, если данных нет | 10 |
| [getInteger(Address&#124;Alias, String): Int&#124;Unit](#get-integer) | Получает целое число по ключу | 10 |
| [getInteger(String): Int&#124;Unit](#getinteger-string-int-unit) | Получает целое число по ключу из собственного хранилища данных | 10 |
| [getIntegerValue(Address&#124;Alias, String): Int](#get-integer-value)  | Получает целое число по ключу. Завершается ошибкой, если данных нет | 10 |
| [getIntegerValue(String): Int](#getintegervalue-string-int)  | Получает целое число по ключу из собственного хранилища данных. Завершается ошибкой, если данных нет | 10 |
| [getString(Address&#124;Alias, String): String&#124;Unit](#get-string)  | Получает строку по ключу | 10 |
| [getString(String): String&#124;Unit](#get-string)  | Получает строку по ключу из собственного хранилища данных | 10 |
| [getStringValue(Address&#124;Alias, String): String](#get-string-value)  | Получает строку по ключу. Завершается ошибкой, если данных нет | 10 |
| [getStringValue(String): String](#get-string-value)  | Получает строку по ключу из собственного хранилища данных. Завершается ошибкой, если данных нет | 10 |
| [isDataStorageUntouched(Address&#124;Alias): Boolean](#isdatastorageuntouched) | Проверяет, что хранилице данных указанного аккаунта никогда не содержало записей | TBDL |

## getBinary(Address|Alias, String): ByteVector|Unit <a id="get-binary"></a>

Получает массив байтов по ключу.

``` ride
getBinary(addressOrAlias: Address|Alias, key: String): ByteVector|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v5/structures/common-structures/address)&#124;[Alias](/ru/ride/v5/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/v5/data-types/string) | Ключ записи |

## getBinary(String): ByteVector|Unit

Получает массив байтов по ключу из собственного хранилища данных аккаунта, к которому прикреплен скрипт.

``` ride
getBinary(key: String): ByteVector|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `key`: [String](/ru/ride/v5/data-types/string) | Ключ записи |

## getBinaryValue(Address|Alias, String): ByteVector

Получает массив байтов по ключу. Завершается ошибкой, если данных нет.

``` ride
getBinaryValue(addressOrAlias: Address|Alias, key: String): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v5/structures/common-structures/address)&#124;[Alias](/ru/ride/v5/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/v5/data-types/string) | Ключ записи |

## getBinaryValue(String): ByteVector

Получает массив байтов по ключу из собственного хранилища данных аккаунта, к которому прикреплен скрипт. Завершается ошибкой, если данных нет.

``` ride
getBinaryValue(key: String): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `key`: [String](/ru/ride/v5/data-types/string) | Ключ записи |

## getBoolean(Address|Alias, String): Boolean|Unit <a id="get-boolean"></a>

Получает логическое значение по ключу.

``` ride
getBoolean(addressOrAlias: Address|Alias, key: String): Boolean|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v5/structures/common-structures/address)&#124;[Alias](/ru/ride/v5/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/v5/data-types/string) | Ключ записи |

## getBoolean(String): Boolean|Unit

Получает массив байтов по ключу из собственного хранилища данных аккаунта, к которому прикреплен скрипт.

``` ride
getBoolean(key: String): Boolean|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `key`: [String](/ru/ride/v5/data-types/string) | Ключ записи |

## getBooleanValue(Address|Alias, String): Boolean <a id="get-boolean-value"></a>

Получает логическое значение по ключу. Завершается ошибкой, если данных нет.

``` ride
getBooleanValue(addressOrAlias: Address|Alias, key: String): Boolean
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v5/structures/common-structures/address)&#124;[Alias](/ru/ride/v5/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/v5/data-types/string) | Ключ записи |

## getBooleanValue(String): Boolean

Получает логическое значение по ключу из собственного хранилища данных аккаунта, к которому прикреплен скрипт. Завершается ошибкой, если данных нет.

``` ride
getBooleanValue(key: String): Boolean
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `key`: [String](/ru/ride/v5/data-types/string) | Ключ записи |

## getInteger(Address|Alias, String): Int|Unit <a id="get-integer"></a>

Получает целое число по ключу.

``` ride
getInteger(addressOrAlias: Address|Alias, key: String): Int|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v5/structures/common-structures/address)&#124;[Alias](/ru/ride/v5/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/v5/data-types/string) | Ключ записи |

## getInteger(String): Int|Unit

Получает целое число по ключу из собственного хранилища данных аккаунта, к которому прикреплен скрипт.

``` ride
getInteger(key: String): Int|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `key`: [String](/ru/ride/v5/data-types/string) | Ключ записи |

## getIntegerValue(Address|Alias, String): Int <a id="get-integer-value"></a>

Получает целое число по ключу. Завершается ошибкой, если данных нет.

``` ride
getIntegerValue(addressOrAlias: Address|Alias, key: String): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v5/structures/common-structures/address)&#124;[Alias](/ru/ride/v5/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/v5/data-types/string) | Ключ записи |

## getIntegerValue(String): Int

Получает массив байтов по ключу из собственного хранилища данных аккаунта, к которому прикреплен скрипт. Завершается ошибкой, если данных нет.

``` ride
getIntegerValue(key: String): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `key`: [String](/ru/ride/v5/data-types/string) | Ключ записи |

## getString(Address|Alias, String): String|Unit <a id="get-string"></a>

Получает строку по ключу.

``` ride
getString(addressOrAlias: Address|Alias, key: String): String|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v5/structures/common-structures/address)&#124;[Alias](/ru/ride/v5/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/v5/data-types/string) | Ключ записи |

## getString(String): String|Unit

Получает строку по ключу из собственного хранилища данных аккаунта, к которому прикреплен скрипт.

``` ride
getString(key: String): String|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `key`: [String](/ru/ride/v5/data-types/string) | Ключ записи |

## getStringValue(Address|Alias, String): String <a id="get-string-value"></a>

Получает строку по ключу. Завершается ошибкой, если данных нет.

``` ride
getStringValue(addressOrAlias: Address|Alias, key: String): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v5/structures/common-structures/address)&#124;[Alias](/ru/ride/v5/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/v5/data-types/string) | Ключ записи |

## getStringValue(String): String

Получает строку по ключу из собственного хранилища данных аккаунта, к которому прикреплен скрипт. Завершается ошибкой, если данных нет.

``` ride
geString(key: String): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `key`: [String](/ru/ride/v5/data-types/string) | Ключ записи |

## isDataStorageUntouched(Address|Alias): Boolean<a id="isdatastorageuntouched"></a>

Проверяет, что хранилице данных указанного аккаунта никогда не содержало записей.

Возвращает `false`, если в хранилище данных была хотя бы одна запись, даже если она удалена.

``` ride
isDataStorageUntouched(addressOrAlias: Address|Alias): Boolean
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/v5/structures/common-structures/address)&#124;[Alias](/ru/ride/v5/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |

### Пример

```scala
let addr = Address(base58'3N4iKL6ikwxiL7yNvWQmw7rg3wGna8uL6LU')

isDataStorageUntouched(addr) # Возвращает false
```
