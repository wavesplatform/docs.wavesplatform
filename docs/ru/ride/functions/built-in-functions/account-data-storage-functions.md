# Функции хранилища данных аккаунта

> Подробнее о [хранилище данных аккаунта](/ru/blockchain/account/account-data-storage)

| Название | Описание | Сложность |
| :--- | :--- | :--- |
| [assetBalancе(Address&#124;Alias, ByteVector): Int](#asset-balance)  | Получает баланс аккаунта по ID токена | 100 для [Стандартной библиотеки](/ru/ride/script/standard-library) **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [getBinary(Address&#124;Alias, String): ByteVector&#124;Unit](#get-binary) | Получает массив байтов по ключу | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [getBinaryValue(Address&#124;Alias, String): ByteVector](#get-binary-value) | Получает массив байтов по ключу. Выбрасывает исключение, если данных нет | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [getBoolean(Address&#124;Alias, String): Boolean&#124;Unit](#get-boolean)  | Получает логическое значение по ключу | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [getBooleanValue(Address&#124;Alias, String): Boolean](#get-boolean-value)  | Получает логическое значение по ключу. Выбрасывает исключение, если данных нет | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [getInteger(Address&#124;Alias, String): Int&#124;Unit](#get-integer)  | Получает целое число по ключу | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [getIntegerValue(Address&#124;Alias, String): Int](#get-integer-value)  | Получает целое число по ключу. Выбрасывает исключение, если данных нет | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [getString(Address&#124;Alias, String): String&#124;Unit](#get-string)  | Получает строку по ключу | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [getStringValue(Address&#124;Alias, String): String](#get-string-value)  | Получает строку по ключу. Выбрасывает исключение, если данных нет | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |
| [wavesBalance(Address&#124;Alias): Int](#waves-balance) | Получает баланс аккаунта в [WAVES](/ru/blockchain/token/waves) | 100 для Стандартной библиотеки **версии 3**<br>10 для Стандартной библиотеки **версии 4** |

## assetBalance <a id="asset-balance"></a>

Получает баланс аккаунта по ID токена.

``` ride
assetBalance(addressOrAlias: Address|Alias, assetId: ByteVector): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `assetId`: [ByteVector](/ru/ride/data-types/byte-vector) | ID токена |

## getBinary <a id="get-binary"></a>

Получает массив байтов по ключу.

``` ride
getBinary(addressOrAlias: Address|Alias, key: String): ByteVector|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/data-types/string) | Ключ |

## getBinaryValue <a id="get-binary-value"></a>

Получает массив байтов по ключу. Выбрасывает исключение, если данных нет.

``` ride
getBinaryValue(addressOrAlias: Address|Alias, key: String): ByteVector
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/data-types/string) | Ключ |

## getBoolean <a id="get-boolean"></a>

Получает логическое значение по ключу.

``` ride
getBoolean(addressOrAlias: Address|Alias, key: String): Boolean|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/data-types/string) | Ключ |

## getBooleanValue <a id="get-boolean-value"></a>

Получает логическое значение по ключу. Выбрасывает исключение, если данных нет.

``` ride
getBooleanValue(addressOrAlias: Address|Alias, key: String): Boolean
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/data-types/string) | Ключ |

## getInteger <a id="get-integer"></a>

Получает целое число по ключу.

``` ride
getInteger(addressOrAlias: Address|Alias, key: String): Int|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/data-types/string) | Ключ |

## getIntegerValue <a id="get-integer-value"></a>

Получает целое число по ключу. Выбрасывает исключение, если данных нет.

``` ride
getIntegerValue(addressOrAlias: Address|Alias, key: String): Int
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/data-types/string) | Ключ |

## getString <a id="get-string"></a>

Получает строку по ключу.

``` ride
getString(addressOrAlias: Address|Alias, key: String): String|Unit
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/data-types/string) | Ключ |

## getStringValue <a id="get-string-value"></a>

Получает строку по ключу. Выбрасывает исключение, если данных нет.

``` ride
getStringValue(addressOrAlias: Address|Alias, key: String): String
```

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |
| `key`: [String](/ru/ride/data-types/string) | Ключ |

## wavesBalance: Int<a id="waves-balance"></a>

### В Стандартной библиотеке версии 3

Возвращает доступный баланс [WAVES](/ru/blockchain/token/waves) аккаунта.

``` ride
wavesBalance(addressOrAlias: Address|Alias): Int
```

### В Стандартной библиотеке версии 4

Возвращает все виды баланса [WAVES](/ru/blockchain/token/waves) аккаунта. О видах баланса см. в разделe [Баланс аккаунта](/ru/blockchain/account/account-balance).

``` ride
wavesBalance(addressOrAlias: Address|Alias): BalanceDetails
```

Описание возвращаемой структуры см. в разделе [BalanceDetails](/ru/ride/structures/common-structures/balance-details).

> :warning: [Стандартная библиотека](/ru/ride/script/standard-library) **версии 4** доступна начиная с версии ноды 1.2.0, после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”.

### Параметры

| Параметр | Описание |
| :--- | :--- |
| `addressOrAlias`: [Address](/ru/ride/structures/common-structures/address)&#124;[Alias](/ru/ride/structures/common-structures/alias) | [Адрес](/ru/blockchain/account/address) или [псевдоним](/ru/blockchain/account/alias) аккаунта |

