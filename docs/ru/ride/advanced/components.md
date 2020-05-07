# Компоненты Ride

## Parser

Parser проверяет корректность синтаксиса скрипта Ride, наличие всех используемых переменных и функций и формирует [абстрактное синтаксическое дерево](https://ru.wikipedia.org/wiki/Абстрактное_синтаксическое_дерево) скрипта, которое затем используют Estimator и Compiler.

## Estimator

Estimator вычисляет [сложность скрипта](/ru/ride/base-concepts/complexity) и проверяет на соответствие ограничениям.

В настоящее время используются две версии Estimator:
* версия 2 — на Mainnet и Testnet (после активации фичи №&nbsp;14 “Block Reward and Community Driven Monetary Policy”);
* версия 3 — на Stagenet (после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”).

## Compiler

Compiler на основе абстрактного синтаксического дерева формирует исполняемый код скрипта в бинарном формате. Скомпилированный скрипт можно установить на аккаунт или ассет.

Parser, Estimator и Compiler используется в инструментах разработки, таких как [Waves IDE](https://ide.wavesplatform.com/) и [Surfboard](https://github.com/wavesplatform/surfboard).

## Evaluator

Evaluator исполняет код скрипта на ноде в ходе [валидации транзакции](/ru/blockchain/transaction/transaction-validation): в случае отправки транзакции со смарт-аккаунта, транзакции с участием смарт-ассета или транзакции вызова скрипта dApp.

Evaluator является компонентом ноды.

## Decompiler

Decompiler преобразует код скрипта из бинарного формата в человекочитаемый вид.

Decompiler используется в [Waves Explorer](https://wavesexplorer.com/) для просмотра скрипта аккаунта, dApp или ассета.

> Декомпилированный код может не совпадать с исходым кодом и даже быть синтаксически некорректным. В частности, в нем отсутствуют типы аргументов в объявлении функций.
