# Создание dApp: полный цикл

В этом разделе вы узнаете, как создать и запустить реальное децентрализованное приложение, работающее на блокчейне.

Для создания и тестирования dApp мы используем [Waves IDE](https://ide.wavesplatform.com/). Для создания веб-приложения, которое вызывает функции dApp, мы используем JavaScript.

Процесс разработки dApp состоит из пяти простых шагов. Мы пройдем их один за другим. В результате должно получиться простое приложение Waves Magic 8 Ball — генератор превдослучайных ответов. В дальнейшем, повторяя эти шаги, вы сможете создать приложение любой сложности. Больше о возможностях dApp читайте в разделе [Что такое dApp](/ru/building-apps/smart-contracts/what-is-dapp).

## План действий

1. Создать аккаунт dApp.
2. Написать dApp-скрипт.
3. Установить скрипт на аккаунт dApp.
4. Протестировать скрипт.
5. Выйти в реальный мир.

## Шаг 1. Создание аккаунта dApp

1. Откройте [Waves IDE](https://ide.wavesplatform.com/).
2. Нажмите ![](./_assets/ide-settings.png) и убедитесь, что вы работаете с Testnet.
3. Нажмите **Add account → Generate new account**.
4. Нажмите **Show seed and private key** и сохраните секретную фразу в укромном месте — она потребуется для восстановления доступа к аккаунту.
5. Пополните баланс аккаунта: в Testnet это бесплатно. Для этого:

   * Скопируйте адрес аккаунта: нажмите на название аккаунта, затем нажмите кнопку ![](./_assets/copy-button.png).
   * Перейдите на страницу <https://wavesexplorer.com/testnet/faucet>, вставьте адрес и нажмите **Request 10 WAVES**.

## Шаг 2. Написание dApp-скрипта

1. Нажмите кнопку ![](./_assets/add-script-button.png) и выберите **dApp script**.
2. Замените автоматически сгенерированный код на текст вашего скрипта.

Файл скрипта сохраняется в Waves IDE автоматически.

Код скрипта Waves Magic 8 Ball можно скопировать из бибилиотеки: **Library → ride4dapps → 8ball → ride → 8ball.ride**.

<details><summary>Код скрипта</summary>
<p>
<code>
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

#
# Waves dApp version of famous Magic 8 ball toy!
# Function name: tellme(question: String)
# Question and answer will be written to dApp data state
#
# Example on Testnet: 3N27HUMt4ddx2X7foQwZRmpFzg5PSzLrUgU
#

let answersCount = 20
let answers = 
    ["It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."]


#
# Simple pseudorandom answer generator
#
func getAnswer(question: String, previousAnswer: String) = {
    let hash = sha256(toBytes(question + previousAnswer))
    let index = toInt(hash)
    answers[index % answersCount]
}

func getPreviousAnswer(address: String) = {
  match getString(this, address + "_a") {
    case a: String => a
    case _ => address
  }
}

@Callable(i)
func tellme(question: String) = {
    let callerAddress = toBase58String(i.caller.bytes)
    let answer = getAnswer(question, getPreviousAnswer(callerAddress))

    WriteSet([
        DataEntry(callerAddress + "_q", question),
        DataEntry(callerAddress + "_a", answer)
        ])
}
</code>

</p>
</details>

<details><summary>Пояснения к коду</summary>
<p>
dApp-скрипт должен начинаться с директив:

<code>
```ride
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
</code>

Между директивами и вызываемой функцией можно объявить переменные и вспомогательные функции.

Перед объявлением вызываемой функцией нужно указать директиву `@Callable(i)`. Объект `i` содержит поля транзакции вызова скрипта, которые может использовать вызываемая функция. В нашем примере используется поле `i.caller.bytes` — адрес аккаунта пользователя, вызвавшего функцию.
</p>
</details>

Подробнее о структуре dApp-скрипта читайте в разделе [Структура dApp-скрипта](/ru/building-apps/smart-contracts/dapp-structure).

## Шаг 3. Установка скрипта

Для установки dApp-скрипта на аккаунт нужно отправить с этого аккаунта транзакцию установки скрипта. Комиссия за установку скрипта составляет 0,01 WAVES.

Отправить транзакцию можно прямо из Waves IDE:

1. Откройте dApp-скрипт и нажмите **Deploy**.
2. Нажмите **Add sign**, чтобы добавить подпись к транзакции. Нажмите **Publish**.

Вы можете проверить установленный dApp-скрипт в Waves Explorer:

1. Откройте <https://wavesexplorer.com/>.
2. Нажмите кнопку ![](../how-to/basic/_assets/settings.png) и переключитесь на ![](../how-to/basic/_assets/testnet.png).
3. Выполните поиск по адресу аккаунта.
4. Перейдите на вкладку **Script**.

dApp готов к использованию — его функции можно вызывать извне блокчейна.

## Шаг 4. Тестирование скрипта

Для тестирования dApp-скрипта нужно отправить транзакцию вызова скрипта. Комиссия за вызов скрипта составляет от 0,005 WAVES и зависит от количества смарт-ассетов, используемых в вызове (в нашем примере они не используются). Формула расчета комиссии приведена в разделе [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee).

Выполнить тесты также можно прямо из Waves IDE:

1. Создайте аккаунт тестового пользователя и пополните баланс — для этого повторите шаг 1.
2. Нажмите кнопку ![](../how-to/basic/_assets/settings.png) и переключитесь на ![](../how-to/basic/_assets/testnet.png).
3. Замените автоматически сгенерированный код на ваш тест.

   Код теста для скрипта Waves Magic 8 Ball можно скопировать из бибилиотеки: **Library → ride4dapps → 8ball → tests → 8ball_test.js**. Не забудьте заменить значение `ballAddress` на адрес своего dApp.

4. Нажмите кнопку **Run full test**.

<details><summary>Код теста</summary>
<p>
<code>
//
// Waves dApp Magic 8 ball tests
//

describe('8 ball', () => {
    const ballAddress = "3N27HUMt4ddx2X7foQwZRmpFzg5PSzLrUgU"
    const question = "Test" + Date.now()
    const tx = invokeScript({fee: 500000, dApp: ballAddress, call:{function:"tellme", args:[{"type": "string", "value": question}]}, payment: null})

    it('Tx is mined in block', async function(){
        await broadcast(tx)
        await waitForTx(tx.id)
    })

    it('Question is in ball', async function(){
        await accountDataByKey(address()+"_q", ballAddress)
            .then(reslove => expect(reslove.value).to.equal(question))
    })
})
</code>
</p>
</details>

Вы можете проверить результат выполнения dApp-скрипта в Waves Explorer:

1. Откройте <https://wavesexplorer.com/>.
2. Нажмите кнопку ![](../how-to/basic/_assets/settings.png) и переключитесь на ![](../how-to/basic/_assets/testnet.png).
3. Выполните поиск по адресу аккаунта dApp.
4. Перейдите на вкладку **Data**.

Комиссия за вызов скрипта составляет от 0,005 WAVES и зависит от количества смарт-ассетов, используемых в вызове (в нашем примере они не используются). Формула расчета комиссии приведена в разделе [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee).

## Шаг 5. Выход в реальный мир

Для выхода в реальный мир нужно сделать вот что:

* Создайте веб-приложение, в котором пользователь сможет, нажав кнопку, подписать и отправить транзакцию вызова скрипта.
* Добавьте ваш dApp на Mainnet.
* Зарегистрируйте приложение в реестрах dAppOcean и DappRadar, чтобы как можно больше пользователей узнали о нем!

### 5.1. Создание веб-приложения

Чтобы подписать транзакцию вызова скрипта от имени реального пользователя, подключите JS-бибилиотеку Signer.

### 5.2. Добавление dApp на Mainnet

1. В Waves IDE нажмите ![](./_assets/ide-settings.png) и переключитесь на Mainnet.
2. Создайте аккаунт dApp на Mainnet — аналогично шагу 1.
3. Пополните баланс аккаунта, чтобы оплатить комиссию за установку скрипта.

   Например, с помощью приложения [Waves.Exchange](https://waves.exchange/), разработанного командой Waves.Exchange, вы можете:
   
   * Перевести 0,01 WAVES с другого аккаунта, см. раздел [Переводы криптовалют](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-trs-gtw/online-desktop-trs-asset) документации Waves.Exchange.
   * Купить Neutrino с банковской карты, затем обменять на WAVES, см. разделы [Купить Neutrino с карты](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-asset/online-desktop-staking#купить-neutrino-с-карты) и [Торговля на бирже](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-trading).

4. Установите скрипт аккаунта — аналогично шагу 3.

dApp на Mainnet получит другой адрес — не забудьте поменять его в веб-приложении. Кроме того, адрес ноды для отправки транзакции вызова скрипта нужно заменить на ` https://nodes.wavesnodes.com`.

> :bulb: Если вы хотите сделать приложение бесплатным для пользователей и оплачивать вместо них комиссию за вызов скрипта, [включите спонсирование](/ru/blockchain/waves-protocol/sponsored-fee).

## Что дальше

API публичных нод WAVES имеет [ограничения на количество запросов в секунду](/ru/waves-node/api-limitations-of-the-pool-of-public-nodes). Поэтому, когда ваше приложение наберет популярность, мы рекомендуем [запустить собственную ноду](/ru/waves-node/how-to-install-a-node/how-to-install-a-node) и отправлять транзакции вызова скрипта на нее.

## Объявление вызываемых функций

Здесь мы можем объявлять функции, которые будут вызываться с помощью InvokeScript-транзакции. Такие функции помечаются аннотацией `@Callable(contextObj)`, где `contextObj` — произвольное имя объекта контекста. Объект контекста содержит поля:

- `caller` — адрес аккаунта, который вызвал данную функцию.
- `callerPublicKey` — открытый ключ аккаунта, который вызвал данную функцию.
- `payment` — платёж, который приложен к данному вызову функции. Платёж может быть пустым (UNIT).

Вызываемая функция может использовать функции и значения из контекста скрипта (см. выше) или из своего контекста (т.е. не может использовать другие вызываемые функции и функцию валидации).

```
@Callable(contextObj)
func foo() = {
   if (contextObj.caller == this)
   then
       ScriptResult(
            WriteSet([DataEntry("someDataKey", 42)]),
            TransferSet([ScriptTransfer(contextObj.caller, 100500, unit)])
        )
   else
       throw("Only owner can use this function.")
}
```

Ограничения для вызываемых функций:

- Имя функции не может превышать 255 символов.
- Каждая из функций может принимать не больше 22 аргументов.
- Допустимые типы аргументов: Int, String, Boolean, ByteVector

Возможные результаты выполнения (одно значение из списка): 

- ScriptResult
- WriteSet
- TransferSet

**WriteSet** — в результате записывает список DataEntry (ключ, значение) в аккаунт. 

Ограничения:

- Максимальная длина списка: 100.
- Максимальный размер одного ключа: 100 символов. 


**TransferSet** — в результате создаёт список платежей ScriptTransfer, которые будут применены после вызова функции.

Ограничения:

- Максимальная длина списка: 10.

**ScriptResult** — содержит WriteSet и TransferSet.

```
@Callable(contextObj)
 
func foo() = {
    val a = 0
 
    if (a == 1)
    then ScriptResult(
            WriteSet([DataEntry("someDataKey", 42)]),
            TransferSet([ScriptTransfer(contextObj.caller, 100500, unit)])
        )
 
    else if (a == 2)
    then WriteSet([DataEntry("someDataKey", 42)]),
    else
        TransferSet([ScriptTransfer(contextObj.caller, 100500, unit)])
 
}
```

## Объявление функции валидации
Функция валидации в dApp играет роль скрипта аккаунта — она валидирует все исходящие из данного аккаунта транзакции.

Такая функция помечается аннотацией `@Verifier(tx)`, где `tx` — текущая транзакция, которую в данный момент функция проверяет. Доступные поля транзакции по её типу можно посмотреть в разделе [Структуры транзакций](/en/ride/structures/transaction-structures).

Возможные результаты выполнения:

- true
- false
- ошибка

Если в dApp нет функции валидации, то выполняется алгоритм валидации по умолчанию (с помощью функции `sigVerify`).



Пример функции, разрешающей только Transfer-транзакции (любая другая транзакция с данного аккаунта отправлена не будет):
```
@Verifier(tx)
func verify() = {
    match tx {
        case ttx:TransferTransaction => sigVerify(ttx.bodyBytes, ttx.proofs[0], ttx.senderPublicKey)
        case _ => false
    }
}
```

## Параметры функции InvokeScriptTransaction

| Имя параметра | Тип параметра | Описание  |
|---|---|---|
|  type  |Int   |  тип транзакции (16 для InvokeScript) |
| dApp   | Address  | адрес, по которому вызывается функция  |
|  payment  | OPTION[AttachedPayment]  | отправляемый платеж (размер, ассет) |
|  fee  |  Int | размер вознаграждения |
| feeAssetId | OPTION[ByteVector] | идентификатор ассета вознаграждения (null для WAVES)|
|  call: <br /> - function <br /> -args | <br /> String <br />LIST[UNION(Boolean,ByteVector,Int,String)]  | <br /> имя вызываемой функции <br /> список передаваемых аргументов |
|  id  | ByteVector  |  идентификатор транзакции |
|  timestamp  |  Int | время выполнения транзакции  |
|  version  | Int  |  версия транзакции (на текущий момент 1) |
|  sender  |  Address |  адрес вызывающего аккаунта |
|  senderPublicKey  | ByteVector  |  открытый ключ вызывающего аккаунта |
| proofs   | LIST[ByteVector]  |  набор подписей, подтверждающих подлинность транзакции |
|  chainId |  Byte | идентификатор сети блокчейна <br /> "T" — тестовая <br /> "W" — боевая  |

## JSON InvokeScript-транзакции

```
{
 
  "type": 16,
  "version": 1,
  "senderPublicKey": "2GEvUnpNpve2rSAs51c2HMTkaCYW9QRgwR16Z2HGJZgC",
  "dApp": "3FYR1f5YydHXF8dtfRJRyX3PoDCoT7a36Kq",
  "call": {
    "function": "deposit",
    "args": [{type:"integer", value: 600000000}]
  },
  "payment": [
    {
      "amount": 200000000,
      "assetId": null
    }
  ],
  "fee": 1000000,
  "feeAssetId": null,
  "timestamp": 1555073997308,
  "chainId": 68,
  "proofs": [
      "42Tf6VSVi3Cq6yHK1ENcVtyQbt9Ap8fcu57gYoZWChJTPPz52qRDM5NThuhFDVB4qE2gPZonuvjEJVtWHVYyNvJC"
  ],
  "id": "2fcMC9ihuLAcGNsbiSLDgz8dekq2JkrtjihroUiyNYCp"
}
```
