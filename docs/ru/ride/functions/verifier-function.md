# Функция-верификатор

**Функция-верификатор** — [функция](/ru/ride/functions) [dApp-скрипта](/ru/ride/script/script-types/dapp-script) с [аннотацией](/ru/ride/functions/annotations) `@Verifier`.

Функция-верификатор отвечает за [валидацию транзакций](/ru/blockchain/transaction/transaction-validation) и ордеров, которые отправляются с [dApp](/ru/blockchain/account/dapp).

У dApp-скрипта может быть только _одна_ функция-верификатор.

Функция-верификатор не имеет аргументов.

## Пример

``` ride
@Verifier(tx)
func verify() = {
    match tx {
        case _: Order|SetScriptTransaction =>
            sigVerify(tx.bodyBytes, tx.proofs[0], tx.senderPublicKey)
        case _ => false
    }
}
```
