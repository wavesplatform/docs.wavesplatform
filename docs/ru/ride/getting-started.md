# Начало работы

## Введение

Ride — лаконичный и дружественный язык для разработки смарт-контрактов и децентрализованных приложений (dApps) на платформе Waves. В нем устранены многие серьезные недостатки других популярных языков смарт-контрактов.

Этот раздел содержит введение в Ride, примеры, описание дополнительных инструментов и ресурсов. Его изучение займет около часа.

## Общие сведения

RIDE — это компилируемый, функциональный, статически типизированный язык программирования на основе выражений. Он является неполным по Тьюрингу, поскольку не имеет циклов и рекурсий (итерации можно реализовать с помощью макроса `FOLD\<N\>`, см. ниже). Благодаря этому сложность скрипта известна заранее и комиссия за выполнение предсказуема, что позволяет предотвратить неудачные вызовы.

Несмотря на простой синтаксис, Ride предоставляет множество возможностей разработчикам. Он во многом похож на Scala и отчасти на F#.

## Предупреждение

Стандартная библиотека Ride (STDLIB) находится в стадии активной разработки. На момент публикации наиболее актуальной версией является STDLIB_VERSION 3, на подходе версия STDLIB_VERSION 4. Те объекты, которые появятся только в STDLIB_VERSION 4, ниже отмечены знаком (*).

## “Hello world!”

Начнем с базового примера:

```scala
func say() = {
  "Hello world!"
}
```

Для объявления функций в Ride используется ключевое слово `func` (см. ниже). Тип возвращаемого значения автоматически определяется компилятором, и объявлять его не нужно. В приведенном выше примере `say` возвращает строку `Hello World!`. В языке нет оператора `return`, потому что Ride основан на выражениях (всё является выражением), а последний оператор является результатом функции.

## Блокчейн

Ride разработан для выполнения на блокчейне и оптимизирован для этой цели. Поскольку блокчейн — это распределенный реестр, который хранится на множестве серверов по всему миру, функции Ride не могут обратиться к файловой системе или отобразить что-либо в консоли. Вместо этого функции Ride могут читать данные из блокчейна и возвращать транзакции, которые будут записаны в блокчейн.

## Комментарии

Комментарии в Ride похожи на комментарии в Python:

```scala
# Это комментарий

# Многострочные комментарии не предусмотрены

"Hello world!" # Комментировать можно и так
```

## Директивы

Каждый скрипт на Ride должен начинаться с директив для компилятора. Предусмотрено три типа директив с различными возможными значениями.

```scala
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
```

`STDLIB_VERSION` задает версию стандартной библиотеки. Последняя версия, доступная в Mainnet, — 3.

`CONTENT_TYPE` определяет содержание скрипта:
* Тип `DAPP` позволяет объявлять функции и в завершение выполнения скрипта записывать в блокчейн транзакции некоторых типов.
* Тип `EXPRESSION` представляет собой логическое выражение и используется для валидации транзакций.

`SCRIPT_TYPE` определяет тип объекта, к которому прикреплен скрипт: `ACCOUNT` or `ASSET`.

Не все комбинации директив допустимы. Следующий пример не будет работать, поскольку тип содержания `DAPP` допустим только для аккаунтов. Тип `EXPRESSION` применим как для аккаунтов, так и ассетов.

```scala
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ASSET #-} # тип содержания dApp недопустим для ассетов
```

## Переменные

Для объявления переменных используется ключевое слово `let`, и это единственный способ объявить переменную.

```scala
let a = "Bob"
let b = 1
```

Значения переменных в Ride недоступны для изменения.

Ride строго типизирован, а тип переменной определяется исходя из значения.

Ride позволяет вам определять переменные глобально, внутри любой функции или даже внутри определения переменной.

```scala
func lazyIsGood() = {
  let a = "Bob"
  let b = {
     let x = 1
     "Alice"
    }  
  true
}
```

Функция, определенная выше, возвращает значение `true`, но переменная `a` не будет инициализирована, поскольку в Ride ленивая инициализация: значения неиспользнуемых переменных не вычисляются.

## Функции

Функции в Ride можно использовать только после их объявления.

```scala
func greet(name: String) = {
  "Hello, " + name
}

func add(a: Int, b: Int) = {
  func m(a:Int) = a
  m(a) + b
}
```

Тип аргумента (`Int`, `String`) указывается после имени.

Как и во многих других языках, функции не могут быть перегружены. Это помогает сохранить код удобным для понимания и поддержки.

```scala
func calc() = {
  42
}

func do() = {
  let a = calc()
  true
}
```

The `calс` не будет вызвана, так как переменная `a` не используется.

В отличие от большинства языков, переопределение переменных не допускается. Объявление переменной с именем, которое уже используется в родительской области видимости, приведет к ошибке компиляции.

Functions can be invoked in prefix and postfix order:

```scala
let list = [1, 2, 3]
let a1 = list.size()
let a2 = size(list)

let b1 = getInteger(this, "key")
let b2 = this.getInteger("key")
```

In these examples `a1` is the same as `a2` and `b1` is the same as `b2`. 

## Базовые типы

Основные базовые типы:

```scala
Boolean    #   true
String     #   "Hey"
Int        #   1610
ByteVector #   base58'...', base64'...', base16'...', fromBase58String("...") etc.
```

Мы рассмотрим строки и специальные типы.

### Строки

```scala
let name = "Bob"   # use "double" quotes only
let coolName = name + " is cool!" # для конкатенации строк используется +

name.indexOf("o")  # 1
```

Как и другие типы данных в Ride, строки недоступны для изменения. Это означает, что ф`substring` function is very efficient: no copying is performed and no extra allocations are required.

В строковых данных используется кодировка UTF-8.

Only double quotes can be used to denote strings. Strings are immutable, just like all other types. This means that the `substring` function is very efficient: no copying is performed and no extra allocations are required.

All operators in Ride must have values of the same type on both sides. The following code will not compile because `age` is an `int`:

```scala
let age = 21
"Bob is " + age # won't compile
```

To make it work we have to convert `age` to `string`:

```scala
let age = 21
"Alice is " + age.toString() # will work!
```

## Special types

Ride has few core types, which operate much as they do in Scala.

### Unit

There is no `null` in Ride, as is the case in many other languages. Usually, built-in functions return unit value of type `unit` instead of `null`.

```scala
"String".indexOf("substring") == unit # true
```

### Nothing

Nothing is the 'bottom type' of Ride’s type system. No value can be of type Nothing, but an expression of type Nothing can be used everywhere. In functional languages, this is essential for support for throwing an exception:

```scala
2 + throw() # the expression compiles because
    # there's a defined function +(Int, Int).
      # The type of the second operand is Nothing, 
      # which complies to any required type.
```

### List

```scala
let list = [16, 10, 1997, "birthday"]       # can contain different data types

let second = list[1]                        # 10 - read second value from the list
```

`List` doesn't have any fields, but there are functions in the standard library that make it easier to work with fields.

```scala
let list = [16, 10, 1997, "birthday"]

let last = list[(list.size() - 1)] # "birthday", postfix call of size() function

let lastAgain = getElement(collection, size(collection) - 1) # the same as above
```

`.size()` function returns the length of a list. Note that it's a read-only value, and it cannot be modified by the user. (Note also that `last` could be of more than one type, but this is only inferred when the variable is set.)

```scala
let initList = [16, 10]                   # init value
let newList = cons(1997, initList)        # [1997, 16, 10]
let newList2 = 1997 :: initList           # [1997, 16, 10]
let newList2 = initList :+ 1              # [16, 10, 1](* Available in STDLIB_VERSION 4)
let newList2 = [4, 8, 15, 16] ++ [23, 42]     # [4 8 15 16 23 42](*)
```

- To prepend an element to an existing list, use the cons function or :: operator 
- To append an element, use the :+ operator (*)
- To concatenate 2 lists, use the ++ operator (*)

### Union types & Type Matching

```scala
let valueFromBlockchain = getString("3PHHD7dsVqBFnZfUuDPLwbayJiQudQJ9Ngf", "someKey") # Union(String | Unit)
```

Union types are a very convenient way to work with abstractions. `Union(String | Unit)` shows that the value is an intersection of these types.

The simplest example of `Union` types is given below (please bear in mind that defining custom user types in dApp code will be supported in future versions):

```scala
type Human : { firstName: String, lastName: String, age: Int}
type Cat : {name: String, age: Int }
```

`Union(Human | Cat)` is an object with one field, `age`, but we can use pattern matching:

```scala
Human | Cat => { age: Int }
```

Pattern matching is designed to check a value against value type:

```scala
  let t = ...               # Cat | Human
  t.age                     # OK
  t.name                    # Compiler error
  let name = match t {      # OK
    case h: Human => h.firstName
    case c: Cat   => c.name
  }
```

Type matching is a mechanism for:

```scala
let amount = match tx {              # tx is a current outgoing transaction
  case t: TransferTransaction => t.amount
  case m: MassTransferTransaction => m.totalAmount
  case _ => 0
}
```

The code above shows an example of type matching. There are different types of transactions in Waves, and depending on the type, the real amount of transferred tokens can be stored in different fields. If a transaction is `TransferTransaction` or `MassTransferTransaction` we use the corresponding field, while in all other cases, we will get 0.

## State reader functions

```scala
let readOrZero = match getInteger(this, "someKey") { # reading data from state
    case a:Int => a
    case _ => 0
}

readOrZero + 1
```

`getString` returns `Union(String | Unit)` because while reading data from the blockchain (the key-value state of accounts) some key-value pairs may not exist.

```scala
let v = getInteger("3PHHD7dsVqBFnZfUuDPLwbayJiQudQJ9Ngf", "someKey")
v + 1    # doesn’t compile, forcing a developer to foresee the possibility of non-existing value for the key

v.valueOrErrorMessage(“oops”) +  1 # compiles and executes

let realStringValue2 = getStringValue(this, "someKey")
```

To get the real type and value from Union use the `extract` function, which will terminate the script in case of `Unit` value. Another option is to use specialized functions like `getStringValue`, `getIntegerValue`, etc.

## If

```scala
let amount = 1610
if (amount > 42) then "I claim that amount is bigger than 42"
  else if (amount > 100500) then "Too big!"
  else "I claim something else"
```

`if` statements are pretty straightforward and similar to most other languages, with an important difference from some: `if` is an expression, so it must have an `else` clause (the result is assignable to a variable).

```scala
let a = 16
let result = if (a > 0) then a / 10 else 0 #
```

## Exceptions

```scala
throw("Here is exception text")
```

The `throw` function will terminate script execution immediately, with the provided text. There is no way to catch thrown exceptions.

The idea of `throw` is to stop execution and send useful feedback to the user.

```scala
let a = 12
if (a != 100) then
  throw ("a is not 100, actual value is " + a.toString())
  else throw("A is 100")
```

## Predefined data structures

\#**LET THE HOLY WAR BEGIN**

Ride has many predefined data structures specific to the Waves blockchain, such as: `Address`, `Alias`, `DataEntry`, `ScriptResult`, `Invocation`, `ScriptTransfer`, `TransferSet`, `WriteSet`, `AssetInfo`, `BlockInfo`.

```scala
let keyValuePair = DataEntry("someKey", "someStringValue")
```

For example, `DataEntry` is a data structure which describes a key-value pair, e.g. for account storage.

```scala
let transferSet = TransferSet([ScriptTransfer("3P23fi1qfVw6RVDn4CH2a5nNouEtWNQ4THs", amount, unit)])
```

All data structures can be used for type checking, pattern matching and their constructors as well.

## Loops with FOLD\<N\>

Since Ride’s virtual machine doesn’t have any concept of loops, they are implemented at compiler level via the FOLD\<N\> macro. The macro behaves like the ‘fold’ function in other programming languages, taking the input arguments: collection for iteration, starting values of the accumulator and folding function.

The important aspect is N - the maximum amount of interactions over collections. This is necessary for maintaining predictable computation costs.

This code sums the numbers of the array:

```scala
let a = [1, 2, 3, 4, 5]
func foldFunc(acc: Int, e: Int) = acc + e
FOLD<5>(a, 0, foldFunc) # returns 15
```

`FOLD\<N\>` can also be used for filtering, mapping, and other operations. Here’s an example for map with reverse:

```scala
let a = [1, 2, 3, 4, 5]
func foldFunc(acc: List[Int], e: Int) = (e + 1) :: acc
FOLD<5>(a, [], foldFunc) # returns [6, 5, 4, 3, 2]
```

## Annotations

Functions can be without annotations, or with `@Callable` or `@Verifier` annotations.

```scala
func getPayment(i: Invocation) = {
  let pmt = i.payment.valueOrErrorMessage(“Payment must be attached”)
  if (isDefined(pmt.assetId)) then 
    throw("This function accepts waves tokens only")
  else
    pmt.amount
}

@Callable(i)
func pay() = {
  let amount = getPayment(i)
  WriteSet([DataEntry(i.caller.bytes, amount)])
}
```

Annotations can bind some values to the function. In the example above, variable `i` was bound to the function `pay` and stored all the information about the fact of invocation (the caller’s public key, address, payment attached to the transaction, fee, transactionId etc.).

Functions without annotations are not available from the outside. You can call them only inside other functions.

```scala
@Verifier(tx)
func verifier() = {
  match tx {
    case m: TransferTransaction => tx.amount <= 100 # can send up to 100 tokens
    case _ => false
  }
}
```

### @Verifier annotation

```scala
@Verifier(tx)
func verifier() = {
  match tx {
    case m: TransferTransaction => tx.amount <= 100 # can send up to 100 tokens
    case _ => false
  }
}
```

A function with the `@Verifier` annotation sets the rules for outgoing transactions of a decentralized application (dApp). Verifier functions cannot be called from the outside, but they are executed every time an attempt is made to send a transaction from a dApp.

Verifier functions should always return a `Boolean` value as a result, depending on which a transaction will be recorded to the blockchain or not.

Expression scripts (with directive `{-# CONTENT_TYPE EXPRESSION #-}`) along with functions annotated by @Verifier should always return a boolean value. Depending on that value the transaction will be accepted (in case of `true`) or rejected (in case of `false`) by the blockchain.

```scala
@Verifier(tx)
func verifier() = {
  sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPublicKey)

}
```

The Verifier function binds variable `tx`, which is an object with all fields of the current outgoing transaction.

A maximum of one `@Verifier()` function can be defined in each dApp script.

### @Callable annotation

Functions with the `@Callable` annotation can be called (or invoked) from outside of the blockchain. To call a callable function you have to send `InvokeScriptTransaction`.

```scala
@Callable(i)
func giveAway(age: Int) = {
  ScriptResult(
    WriteSet([DataEntry("age", age)]),
    TransferSet([ScriptTransfer(i.caller, age, unit)])
  )
}
```

Every caller of `giveAway` function will receive as many WAVES as his age and the dApp will store information about the fact of the transfer in its state.

<!--

#### Actions

Initial Actions are DataEntry, which allows for writing data as a key-value pair, and ScriptTransfer, a transfer of tokens from dApp to addressee. Other actions such as Issue/Reissue/Burn are designed to support native token operations as well as the family of Leasing operations(Available in STDLIB_VERSION 4).

A list of DataEntry structures in `WriteSet` will set or update key-value pairs in the storage of an account, while a list of ScriptTransfer structures in `TransferSet` will move tokens from the dApp account to other accounts.


```scala
@Callable(i)
func callMePlease(age: Int) = {
  TransferSet([ScriptTransfer(i.caller, age, unit)])
}
```

In STDLIB_VERSION 3, `@Callable` functions can return one of the following structures: `ScriptResult`, `WriteSet`, `TransferSet`.

`WriteSet` can contain up to 100 `DataEntry`, while `TransferSet` can contain up to 10 `ScriptTransfer`.

## Account vs Asset scripts

```scala
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}

let a = this # Address of the current account
a == Address(base58'3P9DEDP5VbyXQyKtXDUt2crRPn5B7gs6ujc') # true if script is running on the account with defined address
```
Ride scripts on the Waves blockchain can be attached to accounts and assets (`{-# SCRIPT_TYPE ACCOUNT #-}` defines it) and depending on the `SCRIPT_TYPE` keyword this can refer to different entities. For `ACCOUNT` script types this is an `Address` type.

For `ASSET` script type this will have `AssetInfo` type.

```scala
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ASSET #-}
let a = this # AssetInfo of the current asset
a.assetId == AssetInfo(base58'3P9DEDP5VbyXQyKtXDUt2crRPn5B7gs6ujc').assetId # true if script is running for the asset with defined assetId
```


## Testing and tools

You can try out Ride in REPL both online at [https://ide.wavesplatform.com/](https://ide.wavesplatform.com/) and on desktop via terminal with `surfboard`:

```scala
> npm i -g @waves/surfboard
> surfboard repl
```

For further development, the following tools and utilities are useful:

- Visual Studio Code plugin: waves-ride
- The `surfboard` tool will allow you to REPL and run tests on your existing node: [https://github.com/wavesplatform/surfboard]
- You should also install the Waves Keeper browser extension: [https://wavesplatform.com/products-keeper](https://wavesplatform.com/products-keeper)
- Online IDE with examples: [https://ide.wavesplatform.com/](https://ide.wavesplatform.com/)

Further help and information about tools can be found here: [https://wavesplatform.com/developers](https://wavesplatform.com/developers)


## Enjoy the Ride!


Hopefully this brochure will have given you a good introduction to Ride: a straightforward, secure, powerful programming language for smart contracts and dApps on the Waves blockchain. 

You should now be able to write your own smart contracts, and have all the tools you need to test them before deploying them to the Waves blockchain.

If you need help learning the basics of the Ride language, you can take the “Mastering Web3 with Waves” course: [https://stepik.org/course/54415/syllabus](https://stepik.org/course/54415/syllabus). 
Waves also runs developer workshops and hackathons in different locations around the world – check out our community page to stay up to date: [https://wavescommunity.com](https://wavescommunity.com)

We hope to meet you online or offline soon!

-->
