# Account Script

**Account script** verifies transactions and orders that are sent on behalf of the account. That is, the account script allows or denies the transaction or the order depending on whether it meets the specified conditions.

An account with an account script assigned to it is called a [smart account](/en/building-apps/smart-contracts/what-is-smart-account).

## Account Script Format

The script code is composed of the following parts:

* [Directives](#directives)
* [Auxiliary definitions](#auxiliary-definitions)
* [Boolean expression](#boolean-expression)

![](./_assets/account-script-format.png)

### Directives

The account script should start with [directives](/en/ride/script/directives):

```scala
{- # STDLIB_VERSION 5 # -}
{- # CONTENT_TYPE EXPRESSION # -}
{- # SCRIPT_TYPE ACCOUNT # -}
```

The above directives tell the compiler that:

- the script uses the Standard library version 5,
- the script contains a boolean expression,
- the script will be assigned to an account (not asset).

### Auxiliary Definitions

After the directives, you can define auxiliary variables and functions.

Example:

```scala
let someConstant = 42
func doSomething () = {
    height + someConstant
}
```

### Boolean Expression

The expression checks transactions and orders that are sent on behalf of the account for compliance with the specified conditions. If the conditions are not met, the transaction/order is denied. Possible results of evaluating the expression are:

* `true`: the transaction/order is allowed,
* `false`: the transaction/order is denied,
* an error: the transaction/order is denied.

Using the [match ... case](/en/ride/operators/match-case), you can set up different conditions depending on the type of the transaction/order. For example, the following expression prohibits sending orders and changing the account script, and allows other transactions, provided that the array of confirmations (`proofs`) contains the correct signature of the account at position 0:

```
match tx {
  case t: Order | SetScriptTransaction => false
  case _ => sigVerify (tx.bodyBytes, tx.proofs [0], tx.senderPublicKey)
}
```

## Data Accessible to Account Script

The following data can be used for checks:

* Fields of the current verified transaction/order, including `proofs`. The built-in variable `tx` contains this transaction or order. The set of fields depends on the type of transaction/order, see the [Transaction Structures](/en/ride/structures/transaction-structures/) chapter and [Order](/en/ride/structures/common-structures/order) article.
* [Blockchain data](/en/ride/#blockchain-operation): current height, account balances, entries in account data storages, parameters of tokens, etc.

   :warning: Blockchain data is available only when checking a transaction and not available when checking an order (`case t: Order`).

## Examples

Find the account scripts examples:
* in the [Smart Account](/en/building-apps/smart-contracts/what-is-smart-account) article,
* in [Waves IDE](/en/building-apps/smart-contracts/tools/waves-ide): **Library → smart-accounts**.
