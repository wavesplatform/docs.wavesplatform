# Ride Components

## Parser

Parser checks the Ride script syntax, the presence of all the variables and functions used, and forms an [abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree) that is used by Estimator and Compiler.

## Estimator

Estimator calculates the [complexity](/en/ride/base-concepts/complexity) and checks for compliance with limitations.

Currently the two versions of Estimator are used:
* version 2 – on Mainnet and Testnet (after activation of feature #14 “Block Reward and Community Driven Monetary Policy”);
* version 3 – on Stagenet (after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”).

## Compiler

Compiler generates executable script code in binary format based on an abstract syntax tree. The compiled script can be set on an account or asset.

Parser, Estimator and Compiler are used in developer tools such as [Waves IDE](https://ide.wavesplatform.com/) and [Surfboard](https://github.com/wavesplatform/surfboard).

## Evaluator

Evaluator исполняет код скрипта на ноде в ходе [валидации транзакции](/ru/blockchain/transaction/transaction-validation): в случае отправки транзакции со смарт-аккаунта, транзакции с участием смарт-ассета или транзакции вызова скрипта dApp.

Evaluator является компонентом ноды.

## Decompiler

Decompiler преобразует код скрипта из бинарного формата в код на языке Ride.

Decompiler используется в [Waves Explorer](https://wavesexplorer.com/) для просмотра скрипта аккаунта, dApp или ассета.

> Декомпилированный код может не совпадать с исходным кодом и даже быть синтаксически некорректным. В частности, в нем отсутствуют типы аргументов в объявлении функций.
