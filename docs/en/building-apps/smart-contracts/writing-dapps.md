# Create dApp: Complete Tutorial

This tutorial explains how to create and launch a dApp based on Waves blockchain.

In this tutorial, we use [Waves IDE](https://ide.wavesplatform.com/) to develop and test the dApp and JavaScript to deploy the web app that calls dApp functions.

dApp development consists of five simple steps. Let's complete them one by one. We'll create a simple Waves Magic 8 Ball application that generates pseudorandom answers. Repeating these steps, you can create advanced applications.

[Learn more about dApp features](/en/building-apps/smart-contracts/what-is-dapp)

## Roadmap

1. Create the dApp account.
2. Write the dApp script.
3. Set the script on the dApp account.
4. Test the script.
5. Release the real-world application.

## Step 1. Create dApp Account

1. Open [Waves IDE](https://ide.wavesplatform.com/).
2. Click ![](./_assets/ide-settings.png) and make sure that Testnet is selected.
3. Click **Add account → Generate new account**.
4. Click **Show seed and private key** and backup the seed phrase to a secure location. You will need the seed phrase to restore access to the account.
5. Top up account balance. It's free on Testnet.

   * Copy address: click account name and then click ![](./_assets/сopy-button.png).
   * Go to <https://wavesexplorer.com/testnet/faucet>, paste address, and click **Request 10 WAVES**.

## Step 2. Write dApp Script

1. Click ![](./_assets/add-script-button.png) and select **dApp script**.
2. Replace the automatically generated code with your script.

The file is saved in Waves IDE automatically.

You can copy Waves Magic 8 Ball script from IDE library: **Library → ride4dapps → 8ball → ride → 8ball.ride**.

<details><summary>Script code</summary>
<p>
<code>
{-# STDLIB_VERSION 3 #-}<br>
{-# CONTENT_TYPE DAPP #-}<br>
{-# SCRIPT_TYPE ACCOUNT #-}<br>
<br>
let answersCount = 20<br>
let answers = <br>
&nbsp;&nbsp;&nbsp;&nbsp;["It is certain.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"It is decidedly so.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"Without a doubt.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"Yes - definitely.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"You may rely on it.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"As I see it, yes.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"Most likely.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"Outlook good.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"Yes.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"Signs point to yes.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"Reply hazy, try again.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"Ask again later.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"Better not tell you now.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"Cannot predict now.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"Concentrate and ask again.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"Don't count on it.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"My reply is no.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"My sources say no.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"Outlook not so good.",<br>
&nbsp;&nbsp;&nbsp;&nbsp;"Very doubtful."]<br>
<br>
func getAnswer(question: String, previousAnswer: String) = {<br>
&nbsp;&nbsp;&nbsp;&nbsp;let hash = sha256(toBytes(question + previousAnswer))<br>
&nbsp;&nbsp;&nbsp;&nbsp;let index = toInt(hash)<br>
&nbsp;&nbsp;&nbsp;&nbsp;answers[index % answersCount]<br>
}<br>
<br>
func getPreviousAnswer(address: String) = {<br>
&nbsp;&nbsp;&nbsp;&nbsp;match getString(this, address + "_a") {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case a: String => a<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;case _ => address<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
}<br>
<br>
@Callable(i)<br>
func tellme(question: String) = {<br>
&nbsp;&nbsp;&nbsp;&nbsp;let callerAddress = toBase58String(i.caller.bytes)<br>
&nbsp;&nbsp;&nbsp;&nbsp;let answer = getAnswer(question, getPreviousAnswer(callerAddress))<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;WriteSet([<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DataEntry(callerAddress + "_q", question),<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DataEntry(callerAddress + "_a", answer)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;])<br>
}<br>
</code>

</p>
</details>

<details><summary>Explanation of the code</summary>
<p>
dApp-script should start with the following directives:

<code>
{-# STDLIB_VERSION 3 #-}<br>
{-# CONTENT_TYPE DAPP #-}<br>
{-# SCRIPT_TYPE ACCOUNT #-}<br>
</code>

After directives you can declare variables and auxiliary functions.

Callable functions should be adorned with `@Callable(i)` annotation. The `i` object contains invoke script transaction fields that the callable function can use. In this example we use the `i.caller.bytes`field that contains address of user account that called the function.
</p>
</details>

For more information about the structure of the dApp script, see the [Structure of dApp Script](/en/building-apps/smart-contracts/what-is-a-dapp#structure-of-dapp-script).

## Step 3. Set Script on Account

To attach dApp script to account, send a set script transaction from this account. The fee for the script setup is 0.01 WAVES.

You can send a set script transaction directly from Waves IDE:

1. Open dApp script and click **Deploy**.
2. Click **Add sign** to sign the transaction. Then click **Publish**.

You can check the attached script in Waves Explorer:

1. Go to <https://wavesexplorer.com/>.
2. Click ![](./_assets/settings.png) and switch to ![](./_assets/testnet.png).
3. Use search bar to find the dApp account by address.
4. Switch to **Script** tab.

Now dApp is ready — users can call dApp functions using invoke script transactions.

## Step 4. Test Script

To test the dApp script send an invoke script transaction. The fee for the script invocation starts from 0.005 WAVES and depends on the number of smart assets involved (in this example, smart assets are not used). Fee calculation is described in the [Transaction Fee](/en/blockchain/transaction/transaction-fee) article.

You can run test directly in Waves IDE. Tests support the following fuctions:
* `describe` and `it` from [mocha](https://mochajs.org/) library;
* `expect` from [chai](https://www.chaijs.com/) library.

1. Create an account for test user and top up its balance. To do this, repeat step 1.
2. Click ![](./_assets/add-script-button.png) and select **Test**.
3. Replace the automatically generated code with your script.

   You can copy Waves Magic 8 Ball test from IDE library: **Library → ride4dapps → 8ball → tests → 8ball_test.js**. Remember to replace the `ballAddress` value with the address of your dApp.

4. Click **Run full test**.

<details><summary>Test code</summary>
<p>
<code>
describe('8 ball', () => {<br>
&nbsp;&nbsp;&nbsp;&nbsp;const ballAddress = "3N27HUMt4ddx2X7foQwZRmpFzg5PSzLrUgU"<br>
&nbsp;&nbsp;&nbsp;&nbsp;const question = "Test" + Date.now()<br>
&nbsp;&nbsp;&nbsp;&nbsp;const tx = invokeScript({fee: 500000, dApp: ballAddress, call:{function:"tellme", args:[{"type": "string", "value": question}]}, payment: null})<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;it('Tx is mined in block', async function(){<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;await broadcast(tx)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;await waitForTx(tx.id)<br>
&nbsp;&nbsp;&nbsp;&nbsp;})<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;it('Question is in ball', async function(){<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;await accountDataByKey(address()+"_q", ballAddress)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.then(reslove => expect(reslove.value).to.equal(question))<br>
&nbsp;&nbsp;&nbsp;&nbsp;})<br>
})<br>
</code>
</p>
</details>

You can check the result of script execution in Waves Explorer:

1. Go to <https://wavesexplorer.com/>.
2. Click ![](./_assets/settings.png) and switch to ![](./_assets/testnet.png).
3. Use search bar to find the dApp account by address.
4. Switch to **Data** tab.

## Step 5. Release the real-world application

To release your app:

* Deploy the wep app that allows user to sign and send an invoke script transaction by simply clicking the button.
* Add your dApp on Mainnet.
* Register your application in dApp directories to make it known to as many users as possible!

### 5.1. Deploy Web App

To sign an invoke script transaction on behalf of a real user, подключите JS-библиотеку [Signer](/ru/building-apps/waves-api-and-sdk/client-libraries/signer). Signer позволяет вашему веб-приложению подписать и отправить транзакцию от имени пользователя, не запрашивая его секретную фразу (seed) или закрытый ключ.

<details><summary>Код вызова скрипта</summary>
<p>
<code>
await signer.invoke({<br>
&nbsp;&nbsp;&nbsp;&nbsp;dApp: ballAddress,<br>
&nbsp;&nbsp;&nbsp;&nbsp;call: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function: "tellme",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;args:[{"type": "string", "value": question}]<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
}).broadcast();<br>
</code>
</p>
</details>

[Полный код приложения на Github](https://github.com/elenaili/waves8ball)

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

### 5.3. Регистрация в каталогах

Зарегистрируйте приложение в каталогах dApp, чтобы как можно больше пользователей узнали о нем:

* [dAppOcean](https://www.dappocean.io) — каталог приложений на блокчейне Waves.

   [Отправить заявку](https://www.dappocean.io/ru/dapps/submit)

* [DappRadar](https://dappradar.com) — крупнейший портал с рейтингом децентрализованных приложений.

   [Отправить заявку](https://dappradar.com/submit-dapp)

## Что дальше

API публичных нод WAVES имеет [ограничения на количество запросов в секунду](/ru/waves-node/api-limitations-of-the-pool-of-public-nodes). Поэтому, когда ваше приложение наберет популярность, рекомендуем [запустить собственную ноду](/ru/waves-node/how-to-install-a-node/how-to-install-a-node) и отправлять транзакции вызова скрипта на нее.
