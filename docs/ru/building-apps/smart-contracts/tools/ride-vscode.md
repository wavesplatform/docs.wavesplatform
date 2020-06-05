# Расширение для Visual Studio Code

Ride — расширение Visual Studio Code для работы с Ride и блокчейном Waves.

Возможности расширения:

* Подсветка синтаксиса и ошибок.
* Автозавершение ввода и подсказки.
* Интерактивная консоль JavaScript. Расширение из коробки поддерживает функции [js-test-env](https://wavesplatform.github.io/js-test-env/globals.html).

![](./_assets/completion.gif)

## Установка и настройка

1. Скачайте и установите Visual Studio Code: <https://code.visualstudio.com/>.
2. Перейдите в раздел **Extensions** (Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;X или Cmd&nbsp;⌘&nbsp;+&nbsp;Shift&nbsp;+&nbsp;X), найдите и установите расширение Ride.

![](./_assets/vcsode.png)

Чтобы изменить настройки для работы с блокчейном:

1. В списке расширений найдите Ride и нажмите кнопку ![](./_assets/vcsode-settings.png).
2. Если требуется, измените URL ноды и [сеть блокчейна](/ru/blockchain/blockchain-network/chain-id).
3. Укажите секретную фразу (seed) аккаунта.

## Написание Ride-скрипта

Расширение работает с файлами `.ride`.

Поддерживаются функции, операторы, переменные и типы данных Стандартной библиотеки.

## Установка Ride-скрипта

Отправить транзакцию установки dApp-скрипта, скрипта аккаунта или скрипта ассета можно с помощью интерактивной консоли JavaScript.

Пример установки dApp-скрипта:

```js
const script = compile(contract());
const ssTx = setScript({script}, env.SEED);
await broadcast(ssTx);
```

## Интерактивная консоль JavaScript

В консоли Ride REPL можно ввести любое выражение на языке Ride и сразу увидеть результат.

Чтобы запустить Ride REPL, выполните команду:

```bash
surfboard repl
```

[Подробнее о REPL](/ru/building-apps/smart-contracts/tools/repl)
