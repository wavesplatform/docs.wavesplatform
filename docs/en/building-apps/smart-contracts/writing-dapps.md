# How to Create and Launch dApp: Complete Tutorial

This tutorial provides steps to develop and launch sample dApp based on Waves blockchain. You can then repeat the steps to create more advanced dApps.

The sample dApp you'll create is the Waves Magic 8 Ball application that generates pseudorandom answers. You will use [Waves IDE](https://ide.wavesplatform.com/) to develop and test dApp and then use JavaScript to deploy the web app that calls the dApp functions.

[Learn more about dApp features](/en/building-apps/smart-contracts/what-is-dapp)

## Roadmap

1. Create a dApp account.
2. Write a dApp script.
3. Assign the script to the dApp account.
4. Test the script.
5. Release a real-world application.

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
dApp-script should start with the following directives:<br>
<code>
{-# STDLIB_VERSION 3 #-}<br>
{-# CONTENT_TYPE DAPP #-}<br>
{-# SCRIPT_TYPE ACCOUNT #-}<br>
</code>

After directives you can declare variables and auxiliary functions.

Callable functions should be marked with the `@Callable(i)` annotation. The `i` object contains invoke script transaction fields that the callable function can use. In this example we use the `i.caller.bytes` field that contains address of user account that called the function.
</p>
</details>

For more information about the structure of the dApp script, see the [Structure of dApp Script](/en/building-apps/smart-contracts/what-is-a-dapp#structure-of-dapp-script).

## Step 3. Assign Script to Account

To assign dApp script to the account, send a set script transaction from this account. The fee for the set script transaction is 0.01 WAVES.

You can send a set script transaction directly from Waves IDE:

1. Open dApp script and click **Deploy**.
2. Click **Add sign** to sign the transaction. Then click **Publish**.

You can check the assigned script in Waves Explorer:

1. Go to <https://wavesexplorer.com/>.
2. Click ![](./_assets/settings.png) and switch to ![](./_assets/testnet.png).
3. Use search bar to find the dApp account by address.
4. Switch to **Script** tab.

Now dApp is ready — users can call dApp functions using invoke script transactions.

## Step 4. Test Script

To test the dApp script send an invoke script transaction. The fee for the script invocation starts from 0.005 WAVES and depends on the number of smart assets involved (in this example, smart assets are not used). Fee calculation is described in the [Transaction Fee](/en/blockchain/transaction/transaction-fee) article.

You can run tests directly in Waves IDE. Tests support the following functions:
* `describe` and `it` from [mocha](https://mochajs.org/) library;
* `expect` from [chai](https://www.chaijs.com/) library.

1. Create a test user account and top up its balance as described in [Step 1](#step-1-create-dapp-account).
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

* [Deploy the wep app](#51-deploy-web-app) that allows user to sign and send an invoke script transaction by simply clicking the button.
* [Add your dApp on Mainnet](#52-add-dapp-on-mainnet).
* [Register your application](#53-register-in-dapp-directories) in dApp directories to make it known to as many users as possible!

### 5.1. Deploy Web App

To invoke dApp functions on behalf of a real user use [Signer](/en/building-apps/waves-api-and-sdk/client-libraries/signer) TypeScript/JavaScript library. Signer enables signing and broadcasting transactions without asking user's seed phrase or private key.

<details><summary>Invocation code</summary>
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

[Full code on Github](https://github.com/elenaili/waves8ball)

### 5.2. Add dApp on Mainnet

1. In Waves IDE click ![](./_assets/ide-settings.png) and switch to Mainnet.
2. Create dApp account on Mainnet as described in [Step 1](#step-1-create-dapp-account).
3. Top up account balance to pay the fee for the script setup.

   For example, use [Waves.Exchange](https://waves.exchange/) app developed by Waves.Exchange team to:
   
   * Transfer 0.01 WAVES from another account, see the [Cryptocurrency Transfers](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-trs-gtw/online-desktop-trs-asset) article of the Waves.Exchange documentation.
   * Buy Neutrino with a credit card and then exchange for WAVES, see the [Buy Neutrino with Card](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-asset/online-desktop-staking#buy-neutrino-with-card) and [Start Trading on Waves.Exchange](https://docs.waves.exchange/en/waves-exchange/waves-exchange-online-desktop/online-desktop-trading) articles for details.

4. Attach dApp script to the account as described in [Step 3](#step-3-assign-script-to-account).

dApp on Mainnet will have a different address  — remember to change the address in your web app. In addition, replace the node address to ` https://nodes.wavesnodes.com`.

> :bulb: You can [enable sponsorship](/en/blockchain/waves-protocol/sponsored-fee) to make the application free for users and pay the script invocations fees yourself.

### 5.3. Register in dApp Directories

To promote your application, add it to popular dApp directories:

* [dAppOcean](https://www.dappocean.io) — the ecosystem of decentralized applications based on the Waves blockchain.

   <input value="Submit dApp" type="button" onclick="location.href='https://www.dappocean.io/en/dapps/submit'" />

* [DappRadar](https://dappradar.com) — the leading global platform for discovering and analyzing dApps.

   <input value="Submit dApp" type="button" onclick="location.href='https://dappradar.com/submit-dapp" />

## What's next

Waves public nodes have [limitations on the number of requests per second](/en/waves-node/api-limitations-of-the-pool-of-public-nodes). So when your application becomes popular, we recommend to [launch your own node](/en/waves-node/how-to-install-a-node/how-to-install-a-node) and send invoke script transactions to it.
