# Расширение для Visual Studio Code

Ride — расширение Visual Studio Code для работы с Ride и блокчейном Waves.

Возможности расширения:

* Подсветка синтаксиса и ошибок.
* Автозавершение ввода
* Snippets (что это)
* Интерактивная консоль Ride и JavaScript для работы с блокчейном Waves.

## Установка и настройка

1. Скачайте и установите Visual Studio Code: <https://code.visualstudio.com/>.
2. В Visual Studio Code перейдите в раздел **Extensions** (Ctrl+Shith+X), найдите и установите расширение Ride.

![](./_assets/vcsode.png)

Чтобы изменить настройки для работы с блокчейном:

1. В списке расширений найдите Ride и нажмите кнопку ![](./_assets/vcsode-settings.png).
2. Если требуется, измените URL ноды, и [сеть блокчейна](/ru/blockchain/blockchain-network/chain-id).
3. Укажите секретную фразу (seed) аккаунта.

## Ride REPL: интерактивная консоль Ride

В консоли Ride REPL можно ввести любое выражение на языке Ride и сразу увидеть результат.

Чтобы запустить Ride REPL, выполните команду:

```bash
surfboard repl
```

[Подробнее о REPL](/ru/building-apps/smart-contracts/tools/repl)
