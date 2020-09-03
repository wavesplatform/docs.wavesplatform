# Waves IDE

Waves IDE is an online environment for developing and testing Ride smart contracts.

Key features:

* Code completion (snippets).
* Syntax and error highlighting.
* Sharing files.
* Library of exapmles.
* Ride REPL interactive console.
* Ride script compilation and assigning to an account or asset.
* Signing and sending transactions.
* JavaScript console with built-in functions for interaction with the Waves blockchain.
* Running JavaScript tests.

Waves IDE address:
* <https://waves-ide.com/> – the major environment.
* <https://stagenet.waves-ide.com/> – the environment with support for new features of Waves protocol which are now available on Stagenet only.

## Configuration

Configure the settings for blockchain operation:

1. Click ![](./_assets/ide-settings.png) or press **Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;,** (**Cmd&nbsp;⌘&nbsp;+&nbsp;Shift&nbsp;+&nbsp;,** for macOS).
2. If necessary, change the [blockchain network](/en/blockchain/blockchain-network/#chain-id) and node URL.

## Creating Account

1. Click the account avatar or the **Add account** button in the top right corner. Select **Generate new account**.
2. Click **Show seed and private key** and backup the seed phrase to a secure location. You will need the seed phrase to restore access to the account.
3. Change the account name to quickly find it in the list. To do this, hover over the account name in the list and click ![](./_assets/edit.png). The account name is displayed only in Waves IDE.

To import an existing account, click the account avatar or the **Add account** button, select **Import account** and paste your seed phrase.

:bulb: To top up account balance on Testnet or Stagenet, do the following:

1. Copy address: click the account avatar and then click ![](./_assets/copy-button.png).
2. Go to the page:
   * <https://testnet.wavesexplorer.com/faucet> for Testnet;
   * <https://stagenet.wavesexplorer.com/faucet> for Stagenet.
3. Paste the address, then click **Request 10 WAVES**.

## Writing Ride Script

Click ![](./_assets/add-script-button.png) and select script type.

Waves IDE helps you to write a code:
* prompts for names of built-in functions, operators, variables, and structures: just start typing or press Ctrl&nbsp;+&nbsp;Space (Cmd&nbsp;⌘&nbsp;+&nbsp;Space for macOS);
* highlights errors;
* displays the current script size and complexity.

Script file is saved in Waves IDE automatically. To save the file on your computer, in the menu on the right, hover over the file name and click ![](./_assets/download.png). To share the script, click **Share File** under the script code.

:bulb: Find script examples in the **Library** menu.

## Ride REPL: Interactive Console

Ride REPL is the easiest way to try out the Ride language and its execution semantic.

Switch to the **Ride REPL** tab at the bottom of the window. Type an expression and press Enter.

[Learn more about Ride REPL](/en/building-apps/smart-contracts/tools/repl)

## Assigning Script to Account

1. Open the dApp script or the account script and click **Deploy**.
2. In the **Sign and publish** window, select the appropriate account and click **Add sign** to generate the signature for the set script transaction.
3. Click **Publish** to send the transaction.

## Issuing Smart Asset

1. Open the asset script and click **Issue**.
2. In the **Sign and publish** window, edit the JSON representation of transaction: add the `name`, `description`, and `quantity` fields. See the fields description in the [Issue Transaction](/en/blockchain/transaction-type/issue-transaction) article.
3. Select the issuer's account and click **Add sign** to generate the signature for the issue transaction.
4. Click **Publish** to send the transaction.

## Signing and Sending Transactions

1. Click ![](./_assets/sign.png).
2. In the **Sign and publish** window, paste the JSON representation of the transaction. <!-- Fields of each type of transaction are described in the [Transaction](/en/blockchain/transaction/) article. -->
3. Select the sender's account and click **Add sign**.
4. Click **Publish** to send the transaction.

## JavaScript Interactive Console

Switch to the **Console** tab at the bottom of the window. Type a command and press Enter.

The console provides built-in functions for interaction with the Waves blockchain: signing and sending transactions, reading blockchain data, working with account keys and others. See the list of functions of [js-test-env](https://wavesplatform.github.io/js-test-env/globals.html).

## Running Tests

In JS tests, you can use `describe`, `before`, `it`, `expect` and other functions of [mocha](https://mochajs.org/) and [chai](https://www.chaijs.com/) libraries. You can find test examples in the **Library** menu on the right.

To run test:

1. Click ![](./_assets/add-script-button.png) and select **Test**.
2. Replace the automatically generated code with your test.
3. Click **Run full test**.

Test result is displayed on the **Tests** tab at the bottom of the window.
