# Ride Components

## Parser

Parser checks the Ride script syntax, the presence of all the variables and functions used, and forms an [abstract syntax tree](https://en.wikipedia.org/wiki/Abstract_syntax_tree) that is used by Compiler.

## Compiler

Compiler generates executable script code based on an abstract syntax tree. The compiled script can be set on an account or asset.

## Estimator

Estimator calculates the [complexity](/en/ride/base-concepts/complexity) of the compiled script.

Currently the two versions of Estimator are used:
* version 2 – on Mainnet and Testnet (after activation of feature #14 “Block Reward and Community Driven Monetary Policy”);
* version 3 – on Stagenet (after activation of feature #15 “Ride V4, VRF, Protobuf, Failed transactions”).

Parser, Compiler and Estimator are used in developer tools such as [Waves IDE](https://ide.wavesplatform.com/) and [Surfboard](https://github.com/wavesplatform/surfboard).

## Evaluator

Evaluator executes the script on the node in the case of sending a transaction from a smart account, a transaction within a smart asset, or an invoke script transaction. Script execution is a part of [transaction validation](/en/blockchain/transaction/transaction-validation) and transaction execution, that is, calculating a new state of the blockchain as a result of transaction.

Evaluator is a component of a node.

## Decompiler

Decompiler converts script code from executable format to Ride code.

Decompiler is used in [Waves Explorer](https://wavesexplorer.com/) to view an account script, dApp script or asset script.

> The decompiled code may not match the source code and may even have incorrect syntax. In particular, it lacks argument types in function declarations.
