# Account data storage functions

> Learn more about [account data storage](/en/blockchain/account/account-data-storage).

| Name | Description | Complexity |
| :--- | :--- | :--- |
| [assetBalancе(Address&#124;Alias, ByteVector): Int](#asset-balance) | Gets account balance by token ID | 100 for [Standard Library](/en/ride/script/standard-library) **version 3**<br>10 for Standard Library **version 4** |
| [getBinary(Address&#124;Alias, String): ByteVector&#124;Unit](#get-binary) | Gets an array of bytes by key | 100 for Standard Library **version 3**<br>10 for Standard Library **version 4** |
| [getBinaryValue(Address&#124;Alias, String): ByteVector](#get-binary-value) | Gets an array of bytes by key. Throws an exception if there is no data | 100 for Standard Library **version 3**<br>10 for Standard Library **version 4** |
| [getBoolean(Address&#124;Alias, String): Boolean&#124;Unit](#get-boolean) | Gets a boolean value by key | 100 for Standard Library **version 3**<br>10 for Standard Library **version 4** |
| [getBooleanValue(Address&#124;Alias, String): Boolean](#get-boolean-value) | Gets a boolean value by key. Throws an exception if there is no data | 100 for Standard Library **version 3**<br>10 for Standard Library **version 4** |
| [getInteger(Address&#124;Alias, String): Int&#124;Unit](#get-integer) | Gets an integer by key | 100 for Standard Library **version 3**<br>10 for Standard Library **version 4** |
| [getIntegerValue(Address&#124;Alias, String): Int](#get-integer-value) | Gets an integer by key. Throws an exception if there is no data | 100 for Standard Library **version 3**<br>10 for Standard Library **version 4** |
| [getString(Address&#124;Alias, String): String&#124;Unit](#get-string) | Gets a string by key | 100 for Standard Library **version 3**<br>10 for Standard Library **version 4** |
| [getStringValue(Address&#124;Alias, String): String](#get-string-value) | Gets a string by key. Throws an exception if there is no data | 100 for Standard Library **version 3**<br>10 for Standard Library **version 4** |
| [wavesBalance(Address&#124;Alias): Int](#waves-balance) | Gets account balance in [WAVES](/en/blockchain/token/waves) | 100 for Standard Library **version 3**<br>10 for Standard Library **version 4** |

## assetBalance<a id="asset-balance"></a>

Gets account balance by token ID.

``` ride
assetBalance(addressOrAlias: Address|Alias, assetId: ByteVector): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/structures/common-structures/address)&#124;[Alias](/en/ride/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `assetId`: [ByteVector](/en/ride/data-types/byte-vector) | Token ID |

## getBinary <a id="get-binary"></a>

Gets an array of bytes by key.

``` ride
getBinary(addressOrAlias: Address|Alias, key: String): ByteVector|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/structures/common-structures/address)&#124;[Alias](/en/ride/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `key`: [String](/en/ride/data-types/string) | The key |

## getBinaryValue<a id="get-binary-value"></a>

Gets an array of bytes by key. Throws an exception if there is no data.

``` ride
getBinaryValue(addressOrAlias: Address|Alias, key: String): ByteVector
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/structures/common-structures/address)&#124;[Alias](/en/ride/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `key`: [String](/en/ride/data-types/string) | The key |

## getBoolean<a id="get-boolean"></a>

Gets a boolean value by key.

``` ride
getBoolean(addressOrAlias: Address|Alias, key: String): Boolean|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/structures/common-structures/address)&#124;[Alias](/en/ride/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `key`: [String](/en/ride/data-types/string) | The key |

## getBooleanValue<a id="get-boolean-value"></a>

Gets a boolean value by key. Throws an exception if there is no data.

``` ride
getBooleanValue(addressOrAlias: Address|Alias, key: String): Boolean
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/structures/common-structures/address)&#124;[Alias](/en/ride/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `key`: [String](/en/ride/data-types/string) | The key |

## getInteger<a id="get-integer"></a>

Gets an integer by key.

``` ride
getInteger(addressOrAlias: Address|Alias, key: String): Int|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/structures/common-structures/address)&#124;[Alias](/en/ride/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `key`: [String](/en/ride/data-types/string) | The key |

## getIntegerValue<a id="get-integer-value"></a>

Gets an integer by key. Throws an exception if there is no data.

``` ride
getIntegerValue(addressOrAlias: Address|Alias, key: String): Int
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/structures/common-structures/address)&#124;[Alias](/en/ride/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `key`: [String](/en/ride/data-types/string) | The key |

## getString<a id="get-string"></a>

Gets a string by key.

``` ride
getString(addressOrAlias: Address|Alias, key: String): String|Unit
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/structures/common-structures/address)&#124;[Alias](/en/ride/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `key`: [String](/en/ride/data-types/string) | The key |

## getStringValue<a id="get-string-value"></a>

Gets a string by key. Throws an exception if there is no data.

``` ride
getStringValue(addressOrAlias: Address|Alias, key: String): String
```

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/structures/common-structures/address)&#124;[Alias](/en/ride/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
| `key`: [String](/en/ride/data-types/string) | The key |

## wavesBalance<a id="waves-balance"></a>

### For Standard Library Version 3

Gets available balance of [WAVES](/en/blockchain/token/waves).

``` ride
wavesBalance(addressOrAlias: Address|Alias): Int
```

### For Standard Library Version 4

Gets all types of [WAVES](/en/blockchain/token/waves) balances. For description of balance types, see the [Account Balance](/en/blockchain/account/account-balance) article.

``` ride
wavesBalance(addressOrAlias: Address|Alias): BalanceDetails
```

For a description of the return value, see the [BalanceDetails](/en/ride/structures/common-structures/balance-details) article.

> :warning: [Standard library](/en/ride/script/standard-library) **version 4** becomes available since node version 1.2.0 after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”.

### Parameters

| Parameter | Description |
| :--- | :--- |
| `addressOrAlias`: [Address](/en/ride/structures/common-structures/address)&#124;[Alias](/en/ride/structures/common-structures/alias) | [Address](/en/blockchain/account/address) or [alias](/en/blockchain/account/alias) of the account |
