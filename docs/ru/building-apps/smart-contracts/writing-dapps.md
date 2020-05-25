# Создание dApp: руководство

В этом разделе вы узнаете, как создать и запустить реальное децентрализованное приложение, работающее на блокчейне.

Для создания и тестирования dApp мы используем [Waves IDE](https://ide.wavesplatform.com/). Для создания веб-приложения, которое вызывает функции dApp, мы используем JavaScript.

Процесс разработки dApp состоит из пяти простых шагов. Мы пройдем их один за другим. В результате должно получиться простое приложение Waves Magic 8 Ball — генератор превдослучайных ответов. В дальнейшем, повторяя эти шаги, вы сможете создать приложение любой сложности.

О возможностях dApp читайте в разделе [Что такое dApp](/ru/building-apps/smart-contracts/what-is-dapp).

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

   * Скопируйте адрес аккаунта: нажмите на название аккаунта, затем нажмите кнопку ![](./_assets/сopy-button.png).
   * Перейдите на страницу <https://wavesexplorer.com/testnet/faucet>, вставьте адрес и нажмите **Request 10 WAVES**.

## Шаг 2. Написание dApp-скрипта

1. Нажмите кнопку ![](./_assets/add-script-button.png) и выберите **dApp script**.
2. Замените автоматически сгенерированный код на текст вашего скрипта.

Файл скрипта сохраняется в Waves IDE автоматически.

Код скрипта Waves Magic 8 Ball можно скопировать из бибилиотеки: **Library → ride4dapps → 8ball → ride → 8ball.ride**.

<details><summary>Код скрипта</summary>
<p>
<pre>
{-# STDLIB_VERSION 3 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}

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
</pre>

</p>
</details>

<details><summary>Пояснения к коду</summary>
<p>
dApp-скрипт должен начинаться с директив:

<pre>
{-# STDLIB_VERSION 4 #-}
{-# CONTENT_TYPE DAPP #-}
{-# SCRIPT_TYPE ACCOUNT #-}
</pre>

Между директивами и вызываемой функцией можно объявить переменные и вспомогательные функции.

Перед объявлением вызываемой функцией нужно указать директиву `@Callable(i)`. Объект `i` содержит поля транзакции вызова скрипта, которые может использовать вызываемая функция. В нашем примере используется поле `i.caller.bytes` — адрес аккаунта пользователя, вызвавшего функцию.
</p>
</details>

Подробнее о структуре dApp-скрипта читайте в разделе [Структура dApp-скрипта](/ru/building-apps/smart-contracts/what-is-a-dapp#структура-dapp-скрипта).

## Шаг 3. Установка скрипта

Для установки dApp-скрипта на аккаунт нужно отправить с этого аккаунта транзакцию установки скрипта. Комиссия за установку скрипта составляет 0,01 WAVES.

Отправить транзакцию можно прямо из Waves IDE:

1. Откройте dApp-скрипт и нажмите **Deploy**.
2. Нажмите **Add sign**, чтобы добавить подпись к транзакции. Нажмите **Publish**.

Вы можете проверить установленный dApp-скрипт в Waves Explorer:

1. Откройте <https://wavesexplorer.com/>.
2. Нажмите кнопку ![](./_assets/settings.png) и переключитесь на ![](./_assets/testnet.png).
3. Выполните поиск по адресу аккаунта.
4. Перейдите на вкладку **Script**.

dApp готов к использованию — его функции можно вызывать с помощью транзакции вызова скрипта.

## Шаг 4. Тестирование скрипта

Для тестирования dApp-скрипта нужно отправить транзакцию вызова скрипта. Комиссия за вызов скрипта составляет от 0,005 WAVES и зависит от количества смарт-ассетов, используемых в вызове (в нашем примере они не используются). Формула расчета комиссии приведена в разделе [Комиссия за транзакцию](/ru/blockchain/transaction/transaction-fee).

Выполнить тесты можно прямо из Waves IDE. В тестах поддерживаются функции:
* `describe` и `it` из библиотеки [mocha](https://mochajs.org/);
* `expect` из библиотеки [chai](https://www.chaijs.com/).

1. Создайте аккаунт тестового пользователя и пополните баланс — для этого повторите шаг 1.
1. Нажмите кнопку ![](./_assets/add-script-button.png) и выберите **Test**.
3. Замените автоматически сгенерированный код на ваш тест.

   Код теста для скрипта Waves Magic 8 Ball можно скопировать из бибилиотеки: **Library → ride4dapps → 8ball → tests → 8ball_test.js**. Не забудьте заменить значение `ballAddress` на адрес своего dApp.

4. Нажмите кнопку **Run full test**.

<details><summary>Код теста</summary>
<p>
<pre>
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
</pre>
</p>
</details>

Вы можете проверить результат выполнения dApp-скрипта в Waves Explorer:

1. Откройте <https://wavesexplorer.com/>.
2. Нажмите кнопку ![](./_assets/settings.png) и переключитесь на ![](./_assets/testnet.png).
3. Выполните поиск по адресу аккаунта dApp.
4. Перейдите на вкладку **Data**.

## Шаг 5. Выход в реальный мир

Для выхода в реальный мир нужно сделать вот что:

* Создайте веб-приложение, в котором пользователь сможет, нажав кнопку, подписать и отправить транзакцию вызова скрипта.
* Добавьте ваш dApp на Mainnet.
* Зарегистрируйте приложение в реестрах dApp, чтобы как можно больше пользователей узнали о нем!

### 5.1. Создание веб-приложения

Чтобы подписать транзакцию вызова скрипта от имени реального пользователя, подключите JS-бибилиотеку [Signer](/ru/building-apps/waves-api-and-sdk/client-libraries/signer). Signer позволяет вашему веб-приложению подписать и отправить транзакцию от имени пользователя, не запрашивая его секретную фразу (seed) или закрытый ключ.

<details><summary>Код вызова скрипта</summary>
<p>
```
await signer.invoke({
    dApp: ballAddress,
    call: {
        function: "tellme",
        args:[{"type": "string", "value": question}]
    }
}).broadcast()
```

[Полный код приложения на Github](https://github.com/elenaili/waves8ball)
</p>
</details>

### 5.2. Добавление dApp на Mainnet

1. В Waves IDE нажмите ![](./_assets/ide-settings.png) и переключитесь на Mainnet.
2. Создайте аккаунт dApp на Mainnet — аналогично шагу 1.
3. Пополните баланс аккаунта, чтобы оплатить комиссию за установку скрипта.

   Например, с помощью приложения [Waves.Exchange](https://waves.exchange/), разработанного командой Waves.Exchange, вы можете:
   
   * Перевести 0,01 WAVES с другого аккаунта, см. раздел [Переводы криптовалют](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-trs-gtw/online-desktop-trs-asset) документации Waves.Exchange.
   * Купить Neutrino с банковской карты, затем обменять на WAVES, см. разделы [Купить Neutrino с карты](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-asset/online-desktop-staking#купить-neutrino-с-карты) и [Торговля на бирже](https://docs.waves.exchange/ru/waves-exchange/waves-exchange-online-desktop/online-desktop-trading).

4. Установите dApp-скрипт на аккаунт — аналогично шагу 3.

dApp на Mainnet получит другой адрес — не забудьте поменять его в веб-приложении. Кроме того, адрес ноды для отправки транзакции вызова скрипта нужно заменить на ` https://nodes.wavesnodes.com`.

> :bulb: Если вы хотите сделать приложение бесплатным для пользователей и оплачивать вместо них комиссию за вызов скрипта, [включите спонсирование](/ru/blockchain/waves-protocol/sponsored-fee).

### 5.3. Регистирация в реестрах

* [dAppOcean](https://www.dappocean.io/ru/dapps/submit)
* [DappRadar](https://dappradar.com/submit-dapp)

## Что дальше

API публичных нод WAVES имеет [ограничения на количество запросов в секунду](/ru/waves-node/api-limitations-of-the-pool-of-public-nodes). Поэтому, когда ваше приложение наберет популярность, рекомендуем [запустить собственную ноду](/ru/waves-node/how-to-install-a-node/how-to-install-a-node) и отправлять транзакции вызова скрипта на нее.
