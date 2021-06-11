# match-case

`match-case` operator is used to spot a certain type from [Union](/en/ride/data-types/union) or [Any](/en/ride/data-types/any) type. The spotting is required to perform certain operation. Let's review the following example.

```ride
match tx {
    case _: TransferTransaction|ExchangeTransaction => t.amount > 100 && sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPublicKey)
    case _ => false
}
```

In this example, if

* the type of transaction is transfer transaction or exchange transaction,
* `amount` field value is greater than 100 -

then it will be sent to blockchain. If the transaction has a different type and/or `amount` field value is lesser than 100, then it will be rejected.

## Possible Issue

Let's review the following code.

```ride
{-# STDLIB_VERSION 2 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}

match (tx) {
    case t: TransferTransaction|ExchangeTransaction|MassTransferTransaction|Order => false   # запретить любой перевод средств с аккаунта
    case _ => sigVerify(...)
}
```

In this example we are using version 2 of Ride standard library, `STDLIB_VERSION 2`, and we want to reject any funds transfer from our account. In order to do this, we are returning `false` for  

* TransferTransaction
* ExchangeTransaction
* MassTransferTransaction

Transactions of other types (i.e. transactions that does not transfer funds) are being sent to blockchain. But Ride is developing rapidly, and a new transaction types are emerging. Features of invoke script transaction which is not supported by Ride v2 include attaching payments to transfer tokens to the account of the called [dApp](/en/blockchain/account/dapp). This means that the InvokeScriptTransaction won't be caught by first `case`. It will pass to the default branch `case _ =>` and sent to blockchain. As a result, the funds transfer from account may take place.

## Solution

To prevent reviewed issue, it is recommended to return `false` in default `case`. Then for the entities, not listed in previous branches, sending to blockchain will be rejected.

Below is the sample of script which rejects any funds transfer from account, but allows all other transactions existing in Ride v2. Usage of `case _ => false` rejects any other transactions, not supported by the Ride v2 (i.e. invoke script transaction).

```ride
{-# STDLIB_VERSION 2 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}
  
match tx {
    case t: TransferTransaction|ExchangeTransaction|MassTransferTransaction|Order => false   # запретить любой перевод средств с аккаунта
    case _: Transaction => sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPublicKey) # разрешить все остальные известные типы транзакций, если подпись верна
    case _ => false  # отклонить все остальные (новые, неизвестные) типы сущностей, т.к. их нет в используемой версии языка
}
```
