# Начало работы

## Введение

Ride — лаконичный и дружественный язык для разработки смарт-контрактов и децентрализованных приложений (dApps) на блокчейне Waves. В нем устранены многие серьезные недостатки других популярных языков смарт-контрактов.

Этот раздел содержит введение в Ride, примеры, описание дополнительных инструментов и ресурсов. Его изучение займет около часа.

## Общие сведения

Ride — это компилируемый, функциональный, статически типизированный язык программирования на основе выражений. Он является неполным по Тьюрингу, поскольку не имеет циклов и рекурсий (итерации можно реализовать с помощью макроса `FOLD<N>`, см. ниже). Благодаря этому сложность скрипта известна заранее и комиссия за выполнение предсказуема, что позволяет предотвратить неудачные вызовы.

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
{-# SCRIPT_TYPE ASSET #-} # тип содержания DAPP недопустим для ассетов
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

Функция, определенная выше, возвращает значение `true`, но переменная `a` не будет инициализирована, поскольку в Ride ленивая инициализация: значения неиспользуемых переменных не вычисляются.

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

Функция `calс` не будет вызвана, так как переменная `a` не используется.

В отличие от большинства языков, переопределение переменных не допускается. Объявление переменной с именем, которое уже используется в родительской области видимости, приведет к ошибке компиляции.

Вызовы функции могут быть префиксные или постфиксные:

```scala
let list = [1, 2, 3]
let a1 = list.size()
let a2 = size(list)

let b1 = getInteger(this, "key")
let b2 = this.getInteger("key")
```

В этом примере `a1` — то же самое, что и `a2`, а `b1` — то же самое, что и `b2`.

## Базовые типы

Основные базовые типы:

```scala
Boolean    #   true
String     #   "Hey"
Int        #   1610
ByteVector #   base58'...', base64'...', base16'...', fromBase58String("...") и т. д.
```

Мы рассмотрим строки и специальные типы.

### Строки

```scala
let name = "Bob"   # используйте только "двойные" кавычки
let coolName = name + " is cool!" # для конкатенации строк используется знак +

name.indexOf("o")  # 1
```

Как и другие типы данных в Ride, строки недоступны для изменения. Поэтому функция `substring` очень эффективна: не нужно ни копировать данные, ни выделять дополнительную память.

В строковых данных используется кодировка UTF-8. Для обозначения строк используйте только двойные кавычки.

С обеих сторон оператора в Ride должны быть указаны значения одного типа. Следующий код не компилируется, потому что `age` — целое число:

```scala
let age = 21
"Bob is " + age # не компилируется
```

Чтобы исправить это, нужно преобразовать `age` в строку:

```scala
let age = 21
"Alice is " + age.toString() # работает!
```

## Специальные типы

В Ride есть несколько основных типов, которые работают так же, как в Scala.

### Unit

В Ride нет типа `null`, как во многих других языках. Многие встроенные функции возвращают значение типа `unit` вместо `null`.

```scala
"String".indexOf("substring") == unit # true
```

### Ничто

Ничто — тривиальный тип в системе типов Ride. Ни одно значение не может быть типа «ничто», но выражение с типом «ничто» можно использовать где угодно. В функциональных языках это необходимо для поддержки исключений:

```scala
2 + throw() # это выражение компилируется, 
    # поскольку определена функция +(Int, Int).
      # Тип второго операнда — «ничто»,
      # которое совместимо с любым другим типом.
```

### Список

```scala
let list = [16, 10, 1997, "birthday"]       # может содержать данные различных типов

let second = list[1]                        # 10 — второе значение в списке
```

У списков нет полей, но функции стандартной библиотеки упрощают работу с ними.

```scala
let list = [16, 10, 1997, "birthday"]

let last = list[(list.size() - 1)] # "birthday", постфиксный вызов функции size()

let lastAgain = getElement(collection, size(collection) - 1) # то же самое
```

Функция `.size()` возвращает длину списка. Обратите внимание: это значение доступно только для чтения и не может быть изменено. Кстати, `last` может быть разного типа: тип определяется только после того, как вычислено значение.

```scala
let initList = [16, 10]                       # начальное значение
let newList = cons(1997, initList)            # [1997, 16, 10]
let newList2 = 1997 :: initList               # [1997, 16, 10]
let newList2 = initList :+ 1                  # [16, 10, 1](* Доступно в STDLIB_VERSION 4)
let newList2 = [4, 8, 15, 16] ++ [23, 42]     # [4 8 15 16 23 42](*)
```

* Чтобы добавить элемент в начало списка, используйте функцию `cons` или оператор `::`.
* Чтобы добавить элемент в конец списка, используйте оператор `:+` (*)
* Чтобы объединить два списка, используйте оператор `++` (*)

### Union-типы. Сравнение типов

```scala
let valueFromBlockchain = getString("3PHHD7dsVqBFnZfUuDPLwbayJiQudQJ9Ngf", "someKey") # Union(String | Unit)
```

Union-типы — это удобный способ работы с абстракциями. `Union(String | Unit)` означает, что результат представляет собой пресечение этих типов.

Простой пример (пожалуйста, имейте в виду, что определение пользовательских типов будет поддержано в следующих версиях Ride):

```scala
type Human : { firstName: String, lastName: String, age: Int}
type Cat : {name: String, age: Int }
```

`Union(Human | Cat)` — объект с одним полем `age`:

```scala
Human | Cat => { age: Int }
```

Сравнение типов:

```scala
  let t = ...               # Cat | Human
  t.age                     # OK
  t.name                    # Ошибка компиляции
  let name = match t {      # OK
    case h: Human => h.firstName
    case c: Cat   => c.name
  }
```

Механизм сравнения типов используется для работы с транзакциями:

```scala
let amount = match tx {              # tx — исходящая транзакция
  case t: TransferTransaction => t.amount
  case m: MassTransferTransaction => m.totalAmount
  case _ => 0
}
```

В Waves есть несколько типов транзакций, и в зависимости от типа количество переводимых токенов может быть указано в разных полях. Для транзакций перевода и массового перевода используется значение соответствующего поля, а в остальных случаях — 0.

## Функции чтения состояния

```scala
let readOrZero = match getInteger(this, "someKey") { # чтение данных состояния
    case a:Int => a
    case _ => 0
}

readOrZero + 1
```

`getString` возвращает `Union(String | Unit)`, поскольку при чтении данных блокчейна (состояние аккаунтов в виде ключ-значение) некоторые пары ключ-значение могут не существовать.

```scala
let v = getInteger("3PHHD7dsVqBFnZfUuDPLwbayJiQudQJ9Ngf", "someKey")
v + 1    # приведет к ошибке компиляции, нужно предусмотреть 
         # возможность отсутствия значения по этому ключу

v.valueOrErrorMessage("oops") +  1 # компилируется и выполняется

let realStringValue2 = getStringValue(this, "someKey")
```

Чтобы получить реальный тип и значение из Union-типа, используйте функцию `extract`, которая прервет выполнение скрипта в случае значения `Unit`. Другой вариант — используйте специализированные функции, такие как `getStringValue`, `getIntegerValue` и др.

## If

```scala
let amount = 1610
if (amount > 42) then "Сумма больше 42"
  else if (amount > 100500) then "Сумма слишком большая"
  else "Что-то еще"
```

Инструкция `if` довольно проста и похожа на большинство других языков, с двумя исключениями: `if` — это выражение (результат можно присвоить переменной), поэтому инструкция `else` обязательна.

```scala
let a = 16
let result = if (a > 0) then a / 10 else 0 
```

## Исключения

```scala
throw("Here is exception text")
```

Фнкция `throw` прерывает выполнение скрипта немедленно, с указанным текстом. Возможность перехватывать и обрабатывать исключения отсутствует. Идея в том, чтобы остановить выполнение и предоставить полезную обратную связь пользователю.

```scala
let a = 12
if (a != 100) then
  throw ("a is not 100, actual value is " + a.toString())
  else throw("A is 100")
```

## Предопределенные структуры данных

\#**LET THE HOLY WAR BEGIN**

В Ride есть много предопределенных структур данных, характерных для блокчейна Waves, например: `Address`, `Alias`, `DataEntry`, `ScriptResult`, `Invocation`, `ScriptTransfer`, `TransferSet`, `WriteSet`, `AssetInfo`, `BlockInfo`.

```scala
let keyValuePair = DataEntry("someKey", "someStringValue")
```

Например, `DataEntry` — это структура, которая описывает пару ключ-значение для хранилища данных аккаунта.

```scala
let transferSet = TransferSet([ScriptTransfer("3P23fi1qfVw6RVDn4CH2a5nNouEtWNQ4THs", amount, unit)])
```

Все структуры данных могут использоваться для сравнения типов, а также как конструкторы.

## Итерации с макросом FOLD&lt;N&gt;

Поскольку в виртуальной машине Ride не предусмотрены циклы, они реализованы на уровне компилятора с помощью макроса `FOLD<N>`. Этот макрос ведет себя как функция свертки `fold` в других языках программирования, принимая на вход количество итераций, начальные значения и сворачиваемую функцию.

Важный момент: `N` задает максимальное количество выполняемых итераций. Это необходимо для поддержания предсказуемой стоимости вычислений.

Следующий код подсчитывает сумму числе в массиве:

```scala
let a = [1, 2, 3, 4, 5]
func foldFunc(acc: Int, e: Int) = acc + e
FOLD<5>(a, 0, foldFunc) # returns 15
```

`FOLD<N>` также может использоваться для фильтрации и преобразования данных. Вот пример инвертирования списка:

```scala
let a = [1, 2, 3, 4, 5]
func foldFunc(acc: List[Int], e: Int) = (e + 1) :: acc
FOLD<5>(a, [], foldFunc) # возвращает [6, 5, 4, 3, 2]
```

## Аннотации

Функции могут быть объявлены без аннотаций либо с аннотацией `@Callable` или `@Verifier`.

```scala
func getPayment(i: Invocation) = {
  let pmt = i.payment.valueOrErrorMessage("Необходимо прикрепить платеж")
  if (isDefined(pmt.assetId)) then 
    throw("Эта функция принимает только WAVES")
  else
    pmt.amount
}

@Callable(i)
func pay() = {
  let amount = getPayment(i)
  WriteSet([DataEntry(i.caller.bytes, amount)])
}
```

Аннотации могут привязывать к функции некоторые значения. В примере выше переменная `i` привязана к функции `pay` и хранит всю информацию о вызове функции: публичный ключ и адрес аккаунта, вызвавшего функцию; платеж, прикрепленный к транзакции вызова; комиссия; идентификатор транзакции и др.

Функции без аннотаций недоступны извне. Вызвать их можно только из других функций скрипта.

### Аннотация @Verifier

```scala
@Verifier(tx)
func verifier() = {
  match tx {
    case m: TransferTransaction => tx.amount <= 100 # можно отправить до 100 токенов
    case _ => false
  }
}
```

Функция с аннотацией `@Verifier` устанавливает правила валидации исходящих транзакций (dApp). Функция верификации не может быть вызвана извне, однако она выполняется при каждой попытке отправить транзакцию из dApp.

Функция верификации должна возвращать логическое значение: разрешено отправить транзакцию в блокчейн или нет.

Скрипты-выражения с директивой `{-# CONTENT_TYPE EXPRESSION #-}` и функции верификации с аннотацией `@Verifier` должны возвращать только логические значения. В зависимости от этого значения транзакция будет принята (если `true`) или отклонена (если `false`).

```scala
@Verifier(tx)
func verifier() = {
  sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPublicKey)

}
```

С функцией верификации связана переменная `tx`, которая представляет собой объект с полями текущей исходящей транзакции.

В dApp-скрипте может быть только одна функция верификации.

### Аннотация @Callable

Функция с аннотацией `@Callable` может быть вызвана извне блокчейна. Чтобы вызвать функцию, нужно создать транзакцию вызова скрипта.

```scala
@Callable(i)
func giveAway(age: Int) = {
  ScriptResult(
    WriteSet([DataEntry("age", age)]),
    TransferSet([ScriptTransfer(i.caller, age, unit)])
  )
}
```

Каждый аккаунт, вызвавший функцию `giveAway`, получит столько WAVES, сколько ему лет, и dApp сохранит информацию об этом в своем хранилище данных.

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

You can try out Ride in REPL both online at [https://waves-ide.com/](https://waves-ide.com/) and on desktop via terminal with `surfboard`:

```scala
> npm i -g @waves/surfboard
> surfboard repl
```

For further development, the following tools and utilities are useful:

- Visual Studio Code plugin: waves-ride
- The `surfboard` tool will allow you to REPL and run tests on your existing node: [https://github.com/wavesplatform/surfboard]
- You should also install the Waves Keeper browser extension: </ru/ecosystem/waves-keeper>
- Online IDE with examples: [https://waves-ide.com/](https://waves-ide.com/)

Further help and information about tools can be found here: <https://waves.tech/develop>


## Enjoy the Ride!


Hopefully this brochure will have given you a good introduction to Ride: a straightforward, secure, powerful programming language for smart contracts and dApps on the Waves blockchain. 

You should now be able to write your own smart contracts, and have all the tools you need to test them before deploying them to the Waves blockchain.

If you need help learning the basics of the Ride language, you can take the [Mastering Web3 with Waves](https://www.coursera.org/learn/mastering-web3-waves). 
Waves also runs developer workshops and hackathons in different locations around the world – check out our community page to stay up to date: [https://wavescommunity.com](https://wavescommunity.com)

We hope to meet you online or offline soon!

-->
