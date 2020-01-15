# Вызываемая функция

**Вызываемая функция** — [функция](/ru/ride/functions) [dApp-скрипта](/ru/ride/script/script-types/dapp-script) с [аннотацией](/ru/ride/functions/annotations) `@Callable`.

У dApp-скрипта может быть несколько вызываемых функций.

Вызываемую функцию у [dApp](/ru/blockchain/account/dapp) можно вызвать с помощью [транзакции вызова скрипта](/ru/blockchain/transaction-type/invoke-script-transaction).

Для вызова @Callable функции к транзакции вызова скрипта может быть приложен платеж в пользу dApp. Начиная с четвертой версии языка Ride, может быть приложено до двух платежей.

Примерами действий, которые может выполнять вызываемая функция, являются

* добавление или изменение записей в [хранилище данных аккаунта](/blockchain/account/account-data-storage.md).
* переводы токенов. dApp может выполнить до 10 переводов токенов в рамках транзакции вызова скрипта. Токены могут быть переведены как с баланса dApp, так из платежей, приложенных к транзакции вызова скрипта.

Начиная с четвертой версией языка Ride, перечисленные выше действия включают

* выпуск токенов.
* перевыпуск токенов.
* сжигание токенов.

## Пример для стандартной библиотеки версии 3

```ride
@Callable(inv)
func rate(name: String, rating: Int) = {
    WriteSet([DataEntry(inv.caller.toString(), name + rating.toString()])
}
```

<note type="warning" title="">[Стандартная библиотека](/ru/ride/script/standard-library) версии 4 доступна начиная с версии ноды 1.2.0 после активации функциональности "Ride V4 and multiple attached payments for Invoke Script Transaction" (№ 16). См. [протокол активации](/ru/blockchain/waves-protocol/activation-protocol).</note>

## Пример для стандартной библиотеки версии 4

<note type="warning" title="">Начиная с 4 версии [Стандартной библиотеки](/ru/ride/script/standard-library) в качестве аргумента аннотируемой функции может передаваться список значений, относящихся к [примитивным типам данных](https://ru.wikipedia.org/wiki/Простой_тип). Максимальный размер списка - до 1000 элементов включительно.</note>

```ride
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(i)
func f(args: List[String]) = [
    StringEntry("entry1", args[0]),
    StringEntry("entry1", args[1])
]
```

## Пример 1

```ride
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
@Callable(i)
func f(args: List[String]) = [
    StringEntry("entry1", args[0]),
    StringEntry("entry1", args[1])
]
```

## Пример 2

```ride
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
 
@Callable(i)
func f(a: String, args: List[String]) = {
    let s = size(args)
    if s == 1 then
        BooleanEntry("result", a == args[0])
    else s > 1 then
        BooleanEntry ("result", a == args[1])
    else throw("args is empty")
}
```
