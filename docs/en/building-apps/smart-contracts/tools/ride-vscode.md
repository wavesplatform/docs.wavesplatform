# Visual Studio Code Extension

Ride extension for Visual Studio Code provides Ride language support and interaction with the Waves blockchain.

Extension features:

* Code completion (snippets).
* Syntax and error highlighting.
* JavaScript console with built-in functions for interaction with the blockchain.

![](./_assets/completion.gif)

## Installation and Configuration

1. Download and install Visual Studio Code: <https://code.visualstudio.com/>.
2. Go to **Extensions** (Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;X или Cmd&nbsp;⌘&nbsp;+&nbsp;Shift&nbsp;+&nbsp;X), find and install Ride extension.

![](./_assets/vcsode.png)

Configure the settings for blockchain operation:

1. In **Extensions** find Ride and click ![](./_assets/vscode-settings.png).
2. If necessary, change the [blockchain network](/en/blockchain/blockchain-network/chain-id) and node URL.
3. Specify the seed phrase for your account.

## Writing Ride Script

The extension recignizes `.ride` files.

The extension helps you to write a code:
* prompts for names of built-in functions, operators, variables, and structures: just start typing or press Ctrl&nbsp;+&nbsp;Space (Cmd&nbsp;⌘&nbsp;+&nbsp;Space for macOS);
* highlights errors.

## Assigning Script

You can send a set script transaction or a set asset script transaction using JavaScript console.

Example of assigning a dApp script:

```js
const script = compile(contract());
const ssTx = setScript({script}, env.SEED);
await broadcast(ssTx);
```

* The `contract()` function retrieves the script code from current active editor tab with `.ride` file.
* The `compile()` compiles the script code.
* The `setScript()` creates the set script transaction and signs it using the seed phrase specified in extension settings.
* The `broadcast()` send the transaction to the node specified in extension settings.

## Interactive JavaScript Console

In the console, you can run JavaScript commands. The console provides built-in functions for Waves blockchain: signing and sending transactions, reading blockchain data, working with account keys and others. See the list of functions of [js-test-env](https://wavesplatform.github.io/js-test-env/globals.html).

To open the console, go to **Command Palette** (Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;P or Cmd&nbsp;⌘&nbsp;+&nbsp;Shift&nbsp;+&nbsp;P) and run **Start Waves JS Console** command.
