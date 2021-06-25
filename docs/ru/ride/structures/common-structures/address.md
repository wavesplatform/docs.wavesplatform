# Address

Структура [адреса](/ru/blockchain/account/address).

## Конструктор

``` ride
Address(bytes: ByteVector)
```

## Поля

|   #   | Название | Тип данных | Описание |
| :--- | :--- | :--- | :--- |
| 1 | bytes | [ByteVector](/ru/ride/data-types/byte-vector) | Массив байтов адреса |

## Примеры

Получение всех видов баланса в WAVES для текущего аккаунта (в скрипте dApp или скрипте аккаунта):

```scala
wavesBalance(this)
```

Для произвольного аккаунта:

```scala
let address=base58'3N4iKL6ikwxiL7yNvWQmw7rg3wGna8uL6LU'
wavesBalance(Address(address))
```

Получение данных из хранилища данных аккаунта по ключу:

```scala
let address2=base58'3N6dFJ6XBQsWz1VV1i5aW4CyYpVKc39MUGZ'
getBoolean(Address(address2),"allow_orders")
```

Преобразование адреса, который вызвал функцию, в строку base58:

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

@Callable(i)
func foo(question: String) = {
   let callerAddress = toBase58String(i.caller.bytes)
   ...
}
```

Проверка адреса получателя в транзакции перевода:

```scala
{-# STDLIB_VERSION 5 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}

# Bank dApp address
let BANK = base58'3MpFRn3X9ZqcLimFoqNeZwPBnwP7Br5Fmgs'

match (tx) {
   case t: TransferTransaction => addressFromRecipient(t.recipient).bytes == BANK
   case _ => false
}
```
