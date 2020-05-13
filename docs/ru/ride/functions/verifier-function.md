# Функция-верификатор

**Функция-верификатор** — функция [dApp-скрипта](/ru/ride/script/script-types/dapp-script), которая отвечает за [верификацию транзакций](/ru/blockchain/transaction/transaction-validation) и ордеров, отправляемых с аккаунта [dApp](/ru/blockchain/account/dapp) (то есть работает аналогично [скрипту аккаунта](/ru/ride/script/script-types/account-script)).

У dApp-скрипта может быть только одна функция-верификатор. Она помечается [аннотацией](/ru/ride/functions/annotations) `@Verifier(tx)`, где `tx: Transaction|Order` — текущая проверяемая транзакция или ордер.

Функция-верификатор не имеет аргументов.

Возможными результатами выполнения функции являются:

- `true` (отправка разрешена),
- `false` (отправка запрещена),
- ошибка (отправка запрещена).

Если в dApp нет функции-верификатора, то выполняется верификация по умолчанию, то есть проверка, что первое [подтверждение](/ru/blockchain/transaction/transaction-proof) в массиве `proofs` содержит подпись аккаунта-отправителя. Следующая функция полностью соответствует реализации по умолчанию:

   ```ride
   @Verifier(tx)
   func verify() = {
       sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPublicKey)
   }
   ```

* В Стандартной библиотеке **версии 3**, если функция-верификатор определена, выполняется только проверка этой функцией, подтверждения дополнительно не проверяются.
* В Стандартной библиотеке **версии 4** проверка первого подтверждения в массиве `proofs` выполняется обязательно, вне зависимости от наличия функции-верификатора.

> :warning: Стандартная библиотека версии 4 доступна начиная с версии ноды 1.2.0 после активации фичи №&nbsp;15 “Ride V4, VRF, Protobuf, Failed transactions”. Версии 1.2.x в настоящее время работают только на [Stagenet](/ru/blockchain/blockchain-network/stage-network).

## Пример

dApp с приведенной ниже функцией-верификатором разрешает только [транзакции перевода](/ru/blockchain/transaction-type/transfer-transaction) с количеством токена менее 100. Отправка транзакций другого типа и ордеров запрещена. Определить тип транзакции позволяет оператор [match](/ru/ride/operators/match-case).

```ride
@Verifier(tx)
func verify() = {
    match tx {
        case ttx:TransferTransaction => ttx.amount < 100 && sigVerify(ttx.bodyBytes, ttx.proofs[0], ttx.senderPublicKey)
        case _ => false
    }
}
```
