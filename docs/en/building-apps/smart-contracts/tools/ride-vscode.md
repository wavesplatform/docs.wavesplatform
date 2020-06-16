# Visual Studio Code Extension

Ride extension for Visual Studio Code provides Ride language support and interaction with the Waves blockchain.

Key features:

* Code completion (snippets).
* Syntax and error highlighting.
* JavaScript console with built-in functions for interaction with the Waves blockchain.

![](./_assets/completion.gif)

## Installation and Configuration

1. Download and install Visual Studio Code: <https://code.visualstudio.com/>.
2. Go to **Extensions** (Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;X or Cmd&nbsp;⌘&nbsp;+&nbsp;Shift&nbsp;+&nbsp;X), find and install the Ride extension.

![](./_assets/vscode.png)

Configure the settings for blockchain operation:

1. In the **Extensions** view find Ride and click ![](./_assets/vscode-settings.png).
2. If necessary, change the [blockchain network](/en/blockchain/blockchain-network/chain-id) and node URL.
3. Specify the seed phrase for your account.

## Writing Ride Script

The extension recognizes `.ride` files and helps you to write a code:
* prompts for names of built-in functions, operators, variables, and structures: just start typing or press Ctrl&nbsp;+&nbsp;Space (Cmd&nbsp;⌘&nbsp;+&nbsp;Space for macOS);
* highlights errors.

## Assigning Script to Account or Asset

You can send a set script transaction, issue transaction, or set asset script transaction using JavaScript console.

Example of assigning a dApp script to account:

```js
const script = compile(contract());
const ssTx = setScript({script}, env.SEED);
await broadcast(ssTx);
```

* The `contract()` function retrieves the script code from the current active editor tab with `.ride` file.
* The `compile()` function compiles the script code.
* The `setScript()` function creates the set script transaction and signs it using the seed phrase specified in the extension settings.
* The `broadcast()` function sends the transaction to the node specified in the extension settings.

## Interactive JavaScript Console

You can use the extension console to run JavaScript commands. The console provides functions for interacting with the Waves blockchain, such as signing and sending transactions, reading blockchain data, working with account keys etc. See the list of functions of [js-test-env](https://wavesplatform.github.io/js-test-env/globals.html).

To open the JavaScript console, go to **Command Palette** (Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;P or Cmd&nbsp;⌘&nbsp;+&nbsp;Shift&nbsp;+&nbsp;P) and run the **Start Waves JS Console** command.
