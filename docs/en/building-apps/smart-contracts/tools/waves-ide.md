# Waves IDE

Waves IDE is an online environment for developing and testing Ride smart contracts.

Waves IDE features:

* Code completion (snippets).
* Syntax and error highlighting.
* Sharing files.
* Examples library.
* Ride REPL interactive console.
* Ride scripts compilation and assigning.
* Signing and sending transactions.
* JavaScript console with built-in functions for interaction with the Waves blockchain.
* Running JavaScript test.

Waves IDE address:
* <https://ide.wavesplatform.com/> – the major environment.
* <https://ide-stagenet.wavesplatform.com/> – the environment with support for new features of [Standart library version 4](/en/ride/script/standard-library) which is added in node version 1.2 and now available on Stagenet only.

## Configuration

Configure the settings for blockchain operation:

1. Click ![](./_assets/ide-settings.png) or press **Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;,** (**Cmd&nbsp;⌘&nbsp;+&nbsp;Shift&nbsp;+&nbsp;,** for macOS).
2. If necessary, change the [blockchain network](/en/blockchain/blockchain-network/chain-id) and node URL.

## Creating Account

1. Click the account avatar or the **Add account** button in the top right corner. Select **Generate new account**.
2. Click **Show seed and private key** and backup the seed phrase to a secure location. You will need the seed phrase to restore access to the account.
3. Change the account name to quickly find it in the list. To do this, hover over the account name in the list and click ![](./_assets/edit.png). The account name is displayed only in Waves IDE.

To import an existing account, click the account avatar or the **Add account** button, select **Import account** and paste your seed phrase.

:bulb: To top up account balance on Testnet or Stagenet.

   * Copy address: click account avatar and then click ![](./_assets/copy-button.png).
   * Go to the page:
      * <https://wavesexplorer.com/testnet/faucet> for Testnet;
      * <https://stagenet.wavesexplorer.com/faucet> for Stagenet.
   *  Paste the address, then click **Request 10 WAVES**.

## Writing Ride Script

Click ![](./_assets/add-script-button.png) and select script type.

Waves IDE helps you to write a code:
* prompts for names of built-in functions, operators, variables, and structures: just start typing or press Ctrl&nbsp;+&nbsp;Space (Cmd&nbsp;⌘&nbsp;+&nbsp;Space for macOS);
* highlights errors;
* displays the current script size and complexity.

Script file is saved in Waves IDE automatically. To save the file on your computer, in the menu on the right, hover over the file name and click ![](./_assets/download.png). To share the script, click **Share File** under the script code.

:bulb: Find script examples in the **Library** menu.

## Ride REPL: interactive console

В консоли Ride REPL можно ввести любое выражение на языке Ride и сразу увидеть результат.

Перейдите на вкладку **Ride REPL** в нижней части окна. Введите выражение и нажмите Enter.

[Подробнее о REPL](/ru/building-apps/smart-contracts/tools/repl)

## Установка dApp-скрипта или скрипта аккаунта

1. Откройте dApp-скрипт или скрипт аккаунта и нажмите **Deploy**.
2. В окне **Sign and publish** выберите аккаунт и нажмите **Add sign**, чтобы добавить подпись к транзакции установки скрипта.
3. Нажмите **Publish**, чтобы отправить транзакцию.

## Выпуск смарт-ассета

1. Откройте скрипт ассета и нажмите **Issue**.
2. В окне **Sign and publish** добавьте в JSON-представление транзакции выпуска поля `name`, `description`, `quantity`. Описание полей см. в разделе [Транзакция выпуска](/ru/blockchain/transaction-type/issue-transaction).
3. Выберите аккаунт и нажмите **Add sign**, чтобы добавить подпись к транзакции.
4. Нажмите **Publish**, чтобы отправить транзакцию.

## Подписание и отправка транзакций

1. Нажмите кнопку ![](./_assets/sign.png).
2. В окне **Sign and publish** вставьте JSON-представление транзакции. <!-- Описание полей для каждого типа транзакции приведено в разделе [Транзакция](/ru/blockchain/transaction/). -->
3. Выберите аккаунт и нажмите **Add sign**, чтобы добавить подпись к транзакции.
4. Нажмите **Publish**, чтобы отправить транзакцию.

## Интерактивная консоль JavaScript

Перейдите на вкладку **Console** в нижней части окна. Введите команду и нажмите Enter.

Консоль поддерживает функции для взаимодействия с блокчейном Waves: подписание и отправку транзакций, чтение данных блокчейна, работу с ключами аккаунта и другие. См. [Список функций js-test-env](https://wavesplatform.github.io/js-test-env/globals.html).

## Запуск тестов

В JS-тестах поддерживаются функции `describe`, `before`, `it`, `expect` и другие функции библиотек [mocha](https://mochajs.org/) и [chai](https://www.chaijs.com/). Примеры тестов вы найдете в в меню **Library** справа.

Чтобы выполнить тест:

1. Нажмите кнопку ![](./_assets/add-script-button.png) и выберите **Test**.
2. Замените автоматически сгенерированный код на свой тест.
3. Нажмите **Run full test**.

Результат теста отображается в нижней части окна на вкладке **Tests**.
