# Surfboard

Surfboard — интерфейс командной строки для работы с Ride и блокчейном Waves.

Возможности Surfboard:

* Компиляция смарт-контрактов на языке Ride.
* Интерактивная консоль Ride REPL.
* Запуск JavaScript-тестов и скриптов.

Surfboard из коробки поддерживает функции для взаимодействия с блокчейном Waves: подписание и отправку транзакций, чтение данных блокчейна, работу с ключами аккаунта и др. См. [Список функций js-test-env](https://wavesplatform.github.io/js-test-env/globals.html).

## Установка и настройка

1. Скачайте и установите Node.js: <https://nodejs.org/ru/download/>.
2. Установите Surfboard:

   ```bash
   nmp i -g @waves/surfboard
   ```

3. Создайте пустую папку и выполните в ней команду:

   ```bash
   surfboard init
   ```

Эта команда создает структуру проекта:

* папку `ride` с примером Ride-скрипта;
* папку `script` с примером JS-скрипта, который устанавливает скрипт на аккаунт.
* папку `test` с примером JS-теста.
* файл настроек для работы с блокчейном `surfboarf.config.json`.

Чтобы изменить настройки, отредактируйте файл `surfboarf.config.json` или используйте команду:

```bash
surfboard config:change KEY VALUE
```

* Файл настроек поддерживает несколько сред. Укажите среду по умолчанию в параметре `defaultEnv`.
* Если требуется, измените [сеть блокчейна](/ru/blockchain/blockchain-network/#байт-сети) URL ноды.
* Укажите секретную фразу (seed) аккаунта.

:bulb: Работа с локальной нодой описана в статье [Как строить, развертывать и тестировать Waves RIDE dApp](https://habr.com/ru/company/waves/blog/459773/).

## Компиляция Ride-скрипта

Написать код скрипта можно в любом текстовом редакторе — например, в Visual Studio Code с [расширением Ride](/ru/building-apps/smart-contracts/tools/ride-vscode).

Перед установкой скрипта на аккаунт или ассет его необходимо скомпилировать. Для компиляции используйте встроенную JS-функцию `compile` (пример JS-скрипта вы найдете в папке `script`), или команду:

```bash
surfboard compile FILE
```

Например, команда:

```bash
surfboard compile ride/wallet.ride > wallet.compiled
```

скомпилирует пример Ride-скрипта и запишет его в файл wallet.compiled в кодировке base64. В таком виде его можно указать в транзакции установки скрипта.

## Установка скрипта

Отправить транзакцию установки dApp-скрипта, скрипта аккаунта или скрипта ассета можно с помощью JS-скрипта или JS-теста. Для запуска скрипта используйте команду:

```bash
surfboard run FILE
```

Например, команда 

```bash
surfboard run scripts/wallet.deploy.js  --variables 'dappSeed=insert your seed here'
```

выполнит встроенный пример JS-скрипта, который компилирует Ride-скрипт и отправляет транзакцию установки скрипта с аккаунта, секретная фраза которого указана в переменной `dappSeed`.

## Запуск тестов

В JS-тестах поддерживаются функции `describe`, `before`, `it`, `expect` и другие функции библиотек [mocha](https://mochajs.org/) и [chai](https://www.chaijs.com/). Пример JS-теста вы найдете в папке `test`.

Для запуска теста используйте команду:

```bash
surfboard test FILE
```

## Ride REPL: интерактивная консоль Ride

В консоли Ride REPL можно ввести любое выражение на языке Ride и сразу увидеть результат.

Чтобы запустить Ride REPL, выполните команду:

```bash
surfboard repl
```

:bulb: Команда `.editor` активирует многострочный режим, в котором можно ввести сразу несколько определений или вставить большой блок кода.

Чтобы выйти из режима REPL, выполните команду `.exit`.

[Подробнее о Ride REPL](/ru/building-apps/smart-contracts/tools/repl)

## Все команды

Список команд Surfboard приведен в репозитории [Surfboard](https://github.com/wavesplatform/surfboard#surfboard-help-command) на GihHub.
