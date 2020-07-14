# Surfboard

Surfboard is a command line interface for working with Ride smart contracts and the Waves blockchain.

Key features:

* Ride smart contracts compilation.
* Ride REPL interactive console.
* Running JavaScript tests and scripts.

Surfboard provides built-in JavaScript functions for interaction with the Waves blockchain: signing and sending transactions, reading blockchain data, working with account keys and others. See the list of functions of [js-test-env](https://wavesplatform.github.io/js-test-env/globals.html).

## Installation and Configuration

1. Download and install Node.js: <https://nodejs.org/en/download/>.
2. Install Surfboard:

   ```bash
   nmp i -g @waves/surfboard
   ```

3. Create an empty folder and run the following command:

   ```bash
   surfboard init
   ```

The command will create the project structure:

* the `ride` folder containing the dApp script example,
* the `script` folder containing the JS script example that assigns the dApp script to account,
* the `test` folder containing the JS test example,
* the `surfboarf.config.json` file containing the settings for blockchain operation.

To configure the settings, edit the `surfboarf.config.json` file or use the following command:

```bash
surfboard config:change KEY VALUE
```

* The file supports multiple environments. Set the default environment using the `defaultEnv` parameter.
* If necessary, change the [blockchain network](/en/blockchain/blockchain-network/#chain-id) and node URL.
* Specify the seed phrase for your account.

:bulb: Working with a local node is described in the [How to Build, Deploy and Test a Waves RIDE dApp](https://medium.com/wavesprotocol/how-to-build-deploy-and-test-a-waves-ride-dapp-785311f58c2) article.

## Compiling Ride Script

You can write the script code using any text editor, for example, Visual Studio Code with [Ride extension](/en/building-apps/smart-contracts/tools/ride-vscode).

Before assigning the script to an account or asset, compile it. Use the built-in JS function `compile` (see the example of in the ` script` folder), or the following command:

```bash
surfboard compile FILE
```

For example:

```bash
surfboard compile ride/wallet.ride > wallet.compiled
```

This command compiles the Ride script example and writes it to the `wallet.compiled` file in base64. This output can be included in the set script transaction.

## Assigning Ride Script to Account or Asset

You can send a set script transaction, issue transaction, or set asset script transaction by running JS script or JS test. To run JS script, use the command:

```bash
surfboard run FILE
```

For example:

```bash
surfboard run scripts/wallet.deploy.js  --variables 'dappSeed=insert your seed here'
```

This command executes the JS script example that compiles the Ride script and sends the set script transaction from the account whose seed phrase is specified in the `dappSeed` variable.

## Running Tests

In JS tests, you can use `describe`, `before`, `it`, `expect` and other functions of [mocha](https://mochajs.org/) and [chai](https://www.chaijs.com/) libraries. You can find test example in the `test` folder.

To run test, use the command:

```bash
surfboard test FILE
```

## Ride REPL: Interactive Console

Ride REPL is the easiest way to try out the Ride language and its execution semantic.

To run Ride REPL, use the command:

```bash
surfboard repl
```

:bulb: Run the `.editor` command to enter multiline mode so you can type or paste a larger code block or multiple definitions.

To leave REPL, run the `.exit` command.

[Learn more about Ride REPL](/en/building-apps/smart-contracts/tools/repl)

## All Surfboard Commands

See the list of commands in [Surfboard](https://github.com/wavesplatform/surfboard#surfboard-help-command) repository on GihHub.
