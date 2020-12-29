# [Ride v5] Functions for Getting Data from Account Data Storage

:warning: This is the documentation for the Standard Library **version 5**, which is currently available for [Stagenet](/en/blockchain/blockchain-network/) only. [Go to Mainnet version](/en/ride/functions/built-in-functions/account-data-storage-functions)


> Learn more about [account data storage](/en/blockchain/account/account-data-storage).

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [getBinary(Address&#124;Alias, String): ByteVector&#124;Unit](#get-binary) | Gets an array of bytes by key | 10 |
| [getBinary(String): ByteVector&#124;Unit](#getbinary-string-bytevector-unit) | Gets an array of bytes by key from the dApp's own data storage | 10 |
| [getBinaryValue(Address&#124;Alias, String): ByteVector](#get-binary-value) | Gets an array of bytes by key. Fails if there is no data | 10 |
| [getBinaryValue(String): ByteVector](#getbinaryvalue-string-bytevector) | Gets an array of bytes by key from the dApp's own data storage. Fails if there is no data | 10 |
| [getBoolean(Address&#124;Alias, String): Boolean&#124;Unit](#get-boolean) | Gets a boolean value by key | 10 |
| [getBoolean(String): Boolean&#124;Unit](#getboolean-string-boolean-unit) | Gets a boolean value by key from the dApp's own data storage | 10 |
| [getBooleanValue(Address&#124;Alias, String): Boolean](#get-boolean-value) | Gets a boolean value by key. Fails if there is no data | 10 |
| [getBooleanValue(String): Boolean](#getbooleanvalue-string-boolean) | Gets a boolean value by key from the dApp's own data storage. Fails if there is no data | 10 |
| [getInteger(Address&#124;Alias, String): Int&#124;Unit](#get-integer) | Gets an integer by key | 10 |
| [getInteger(String): Int&#124;Unit](#getinteger-string-int) | Gets an integer by key from the dApp's own data storage | 10 |
| [getIntegerValue(Address&#124;Alias, String): Int](#get-integer-value) | Gets an integer by key. Fails if there is no data | 10 |
| [getIntegerValue(String): Int](#getintegervalue-string-int) | Gets an integer by key from the dApp's own data storage. Fails if there is no data | 10 |
| [getString(Address&#124;Alias, String): String&#124;Unit](#get-string) | Gets a string by key | 10 |
| [getString(String): String&#124;Unit](#getstring-string-string) | Gets a string by key from the dApp's own data storage | 10 |
| [getStringValue(Address&#124;Alias, String): String](#get-string-value) | Gets a string by key. Fails if there is no data | 10 |
| [getStringValue(String): String](#getstringvalue-string-string) | Gets a string by key from the dApp's own data storage. Fails if there is no data | 10 |

## getBinary(Address|Alias, String): ByteVector|Unit <a id="get-binary"></a>

Gets an array of bytes by key.

``` ride
getBinary(addressOrAlias: Address|Alias, key: String): ByteVector|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `key`: [String](/en/ride/v5/data-types/string) | Entry key |

## getBinary(String): ByteVector|Unit

Gets an array of bytes by key from the dApp's own data storage.

``` ride
getBinary(key: String): ByteVector|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `key`: [String](/en/ride/v5/data-types/string) | Entry key |

## getBinaryValue(Address|Alias, String): ByteVector <a id="get-binary-value"></a>

Gets an array of bytes by key. Fails if there is no data.

``` ride
getBinaryValue(addressOrAlias: Address|Alias, key: String): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `key`: [String](/en/ride/v5/data-types/string) | Entry key |

## getBinaryValue(String): ByteVector

Gets an array of bytes by key from the dApp's own data storage.

``` ride
getBinaryValue(key: String): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `key`: [String](/en/ride/v5/data-types/string) | Entry key |

## getBoolean(Address|Alias, String): Boolean|Unit<a id="get-boolean"></a>

Gets a boolean value by key.

``` ride
getBoolean(addressOrAlias: Address|Alias, key: String): Boolean|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `key`: [String](/en/ride/v5/data-types/string) | Entry key |

## getBoolean(String): Boolean|Unit

Gets a boolean value by key by key from the dApp's own data storage.

``` ride
getBoolean(key: String): Boolean|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `key`: [String](/en/ride/v5/data-types/string) | Entry key |

## getBooleanValue(Address|Alias, String): Boolean<a id="get-boolean-value"></a>

Gets a boolean value by key. Fails if there is no data.

``` ride
getBooleanValue(addressOrAlias: Address|Alias, key: String): Boolean
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `key`: [String](/en/ride/v5/data-types/string) | Entry key |

## getBooleanValue(String): Boolean

Gets a boolean value by key from the dApp's own data storage.

``` ride
getBooleanValue(key: String): Boolean
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `key`: [String](/en/ride/v5/data-types/string) | Entry key |

## getInteger(Address|Alias, String): Int|Unit<a id="get-integer"></a>

Gets an integer by key.

``` ride
getInteger(addressOrAlias: Address|Alias, key: String): Int|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `key`: [String](/en/ride/v5/data-types/string) | Entry key |

## getInteger(String): Int|Unit

Gets an integer by key from the dApp's own data storage.

``` ride
getInteger(key: String): Int|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `key`: [String](/en/ride/v5/data-types/string) | Entry key |

## getIntegerValue(Address|Alias, String): Int<a id="get-integer-value"></a>

Gets an integer by key. Fails if there is no data.

``` ride
getIntegerValue(addressOrAlias: Address|Alias, key: String): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `key`: [String](/en/ride/v5/data-types/string) | Entry key |

## getIntegerValue(String): Int

Gets an integer by key from the dApp's own data storage.

``` ride
getIntegerValue(key: String): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `key`: [String](/en/ride/v5/data-types/string) | Entry key |

## getString(Address|Alias, String): String|Unit<a id="get-string"></a>

Gets a string by key.

``` ride
getString(addressOrAlias: Address|Alias, key: String): String|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `key`: [String](/en/ride/v5/data-types/string) | Entry key |

## getString(String): String|Unit

Gets a string by key from the dApp's own data storage.

``` ride
getString(key: String): String|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `key`: [String](/en/ride/v5/data-types/string) | Entry key |

## getStringValue(Address|Alias, String): String<a id="get-string-value"></a>

Gets a string by key. Fails if there is no data.

``` ride
getStringValue(addressOrAlias: Address|Alias, key: String): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/v5/structures/common-structures/address)&#124;[Alias](/en/ride/v5/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `key`: [String](/en/ride/v5/data-types/string) | Entry key |

## getStringValue(String): String

Gets a string by key from the dApp's own data storage.

``` ride
getString(key: String): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `key`: [String](/en/ride/v5/data-types/string) | Entry key |
