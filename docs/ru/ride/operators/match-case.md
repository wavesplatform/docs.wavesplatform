# match-case

Оператор `match-case` используется для определения конкретного типа из [Union](/ru/ride/data-types/union) или [Any](/ru/ride/data-types/any). Определение конкретного типа требуется, чтобы задать выполнение того или иного действия. Приведем пример.

```ride
match tx {
    case _: TransferTransaction|ExchangeTransaction => t.amount > 100 && sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPublicKey)
    case _ => false
}
```

В нашем примере, если

* типом транзакции является транзакция перевода или транзакция обмена,
* значение поля `amount` транзакции превышает 100 -

то она будет отправлена в блокчейн. Если транзакция имеет другой тип и/или значение поля `amount` меньше 100, то она будет отклонена.

## Возможная проблема

Рассмотрим следующий код.

```ride
{-# STDLIB_VERSION 2 #-}
{-# CONTENT_TYPE EXPRESSION #-}
{-# SCRIPT_TYPE ACCOUNT #-}

match (tx) {
    case t: TransferTransaction|ExchangeTransaction|MassTransferTransaction|Order => false   # запретить любой перевод средств с аккаунта
    case _ => sigVerify(...)
}
```

В нашем примере мы используем вторую версию стандартной библиотеки языка Ride, `STDLIB_VERSION 2`, и хотим запретить любой перевод средств с аккаунта. Для этого мы возвращаем `false` для транзакций  

* TransferTransaction
* ExchangeTransaction
* MassTransferTransaction

Транзакции, которые не выполняют перевод средств, мы отправляем в блокчейн. Однако ожидаемому результату работы скрипта способно помешать появление новых транзакций в стандартной библиотеке. Функциональность одной из таких транзакций, транзакции вызова скрипта, включает возможность прикладывать платежи для перевода токенов на аккаунт вызвавшего [dApp](/ru/blockchain/account/dapp). Это означает, что при выполнении нашего скрипта InvokeScriptTransaction не попадёт в первый `case`, и будет обработана ветвью по умолчанию `case _ =>`, т.е. отправлена в блокчейн. В результате перевод средств с аккаунта может состояться.

## Решение проблемы

Чтобы избежать указанной проблемы, настоятельно рекомендуется для ветви по умолчанию возвращать `false`. В результате для сущностей, не перечисленных в ветвях `case`, будет запрещена отправка в блокчейн.

Ниже приведен пример скрипта, запрещающего любой перевод средств с аккаунта, но разрешающего все прочие транзакции, существующие в Ride v2. При этом благодаря использованию `case _ => false` любые другие транзакции, не входящие в Ride v2 (например, транзакция вызова скрипта), будут отклонены.  

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
