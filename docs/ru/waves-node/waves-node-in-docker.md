# Развернуть ноду в Docker

Самый простой способ запустить ноду Waves — это развернуть контейнер **Waves Docker**. Таким способом можно запустить ноду или поменять её настройки всего одной командой.

## Предварительные требования

Необходимо установить последнюю версию приложения Docker.

Процесс установки подробно описан на [сайте](https://docs.docker.com/engine/installation/) Docker.

## Про образ Docker

* Образ предназначен для быстрого и удобного разворачивания ноды Waves.
* Образ содержит скрипты и файлы конфигурации для запуска ноды Waves начиная с версии **Version 0.13.0** для Mainnet, Testnet или Stagenet.
* Образ содержит файл `.jar` вместе с файлами конфигурации из секции [releases](https://github.com/wavesplatform/Waves/releases).

## Запуск образа

Перед запуском образа рекомендуется ознакомиться со статьей [Конфигурация ноды](/ru/waves-node/node-configuration).

Самый простой способ запуска контейнера:

```bash
docker run -it wavesplatform/node
```

**Примечание**: Мы рекомендуем запускать контейнер для Mainnet так:

```bash
docker run -p 6869:6869 -p 6868:6868 -e WAVES_NETWORK=MAINNET -e WAVES_LOG_LEVEL=DEBUG -e WAVES_HEAP_SIZE=2g -v YOUR_LOCAL_PATH_HERE:/waves wavesplatform/node    
```

**Для Testnet:**

```bash
docker run -p 6869:6869 -p 6863:6863 -e WAVES_NETWORK=TESTNET -e WAVES_LOG_LEVEL=DEBUG -e WAVES_HEAP_SIZE=2g -v YOUR_LOCAL_PATH_HERE:/waves wavesplatform/node    
```

**Можно запустить контейнер с предустановленными переменными среды:**

|Переменная среды                 |Описание   |
|-----------------------------|--------------|
|`WAVES_WALLET_SEED`               | Секретная фраза в виде текста (plain text seed) кошелька ноды.  Контейнер конвертирует его в base58 |
|`WAVES_WALLET_SEED_BASE58`        | Секретная фраза в кодировке base58   |
|`WAVES_WALLET_PASSWORD`           |Пароль для файла кошелька    |
|`WAVES_VERSION`                   |Версия ноды. Значение по умолчанию — `latest`. См. [Список доступных версий](https://github.com/wavesplatform/Waves/releases) |
|`WAVES_NETWORK`                   |Тип ноды: `MAINNET`, `TESTNET` или `STAGENET` |
|`WAVES_LOG_LEVEL`                 |Режим логирования ноды: `OFF`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`. Подробно про режимы логирования в статье [Логирование](/ru/waves-node/logging-configuration) |
|`WAVES_HEAP_SIZE`                 |Ограничение Java Heap Size в -X Command-line Options notation (`-Xms=[your value]`). Подробно [тут](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html)   |
|`WAVES_CONFIG_FILE`               |Адрес файла конфигурации Waves   |
|`WAVES_DECLARED_ADDRESS`          |Строка с IP-адресом и портом для отправки в качестве внешнего адреса во время рукопожатия (handshake). Может быть задана автоматически, если активирован UPnP. Если параметр задан, что является нормальным сценарием для ноды, работающей в облаке, нода будет принимать входящие подключения через `bind-address:port` и передавать свой `declared-address` другим нодам |
|`WAVES_AUTODETECT_ADDRESS`        |Установите значение `yes`, чтобы получить свой публичный адрес и назначить его в качестве значения `declared-address` |
|`WAVES_AUTODETECT_ADDRESS_PORT`   |`WAVES_AUTODETECT_ADDRESS` может получить только IP-адрес ноды, но не номер порта. Задайте номер порта с помощью этой переменной |

**Примение**: Все переменные не являются обязательными.

## Конфигурация

Образ поддерживает конфигурирование при помощи переменных среды. В зависимости от переменных среды, образ генерирует файл `local.conf` и сохраняет его в папке `/waves/configs`.
Чтобы задать значение в файле конфигурации, следуйте простым правилам:

1. Определите путь до переменной в [файле конфигурации](/ru/waves-node/node-configuration).
2. Соединяйте все имена секций двойным подчеркиванием (`__`).
3. Замените все тире одиночными подчеркиваниями (`_`).
4. Переведите полученную строку в верхний регистр.

Например, если вы хотите задать значение `waves.rest-api.enable`, отправьте переменную среды `WAVES__REST_API__ENABLE=no`;
