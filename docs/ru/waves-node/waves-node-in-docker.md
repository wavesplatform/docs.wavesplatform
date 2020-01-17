# Запуск ноды в Docker

Ноду Waves проще всего запустить с помощью **Waves Docker container**. Можно запустить ноду или поменять её настройки всего одной командой.

## Предварительные требования

Необходимо установить Docker последней версии.

Установка подробно описана на [Сайте](https://docs.docker.com/engine/installation/).

## Про образ

* Docker образ содержит скрипты и файлы конфигурации для запуска ноды Waves начиная с версии **Version 0.13.0** для TESTNET, MAINNET или CUSTOM сетей.
* Образ предназначен для быстрого и удобного разворачивания ноды Waves.
* Контейнер скачивает файл .jar вместе с файлами конфигурации из секции [releases section](https://github.com/wavesplatform/Waves/releases) и осуществляет запуск.

## Запуск образа

Рекомендуется подробно ознакомиться со статьёй [Конфигурация ноды](https://docs.wavesplatform.com/en/waves-node/how-to-configure-a-node.html) перед запуском контейнера.

Самый простой способ запуска контейнера:

```bash
docker run -it wavesplatform/node
```

**Примечание**: Мы рекомендуем запускать контейнер для MAINNET так:

```bash
docker run -p 6869:6869 -p 6868:6868 -e WAVES_NETWORK=MAINNET -e WAVES_LOG_LEVEL=DEBUG -e WAVES_HEAP_SIZE=2g -v YOUR_LOCAL_PATH_HERE:/waves wavesplatform/node    
```

**Для TESTNET:**

```bash
docker run -p 6869:6869 -p 6863:6863 -e WAVES_NETWORK=TESTNET -e WAVES_LOG_LEVEL=DEBUG -e WAVES_HEAP_SIZE=2g -v YOUR_LOCAL_PATH_HERE:/waves wavesplatform/node    
```

**Можно запустить контейнер с предустановленными переменными среды:**

|Переменная среды                 |Описание   |
|-----------------------------|--------------|
|`WAVES_WALLET_SEED`               |Кодовая фраза в виде текста (plain text seed) кошелька ноды.  Контейнер конвертирует его в base58.   |
|`WAVES_WALLET_SEED_BASE58`        |Кодовая фраза, зашифрованная в Base58.   |
|`WAVES_WALLET_PASSWORD`           |Пароль для файла кошелька.    |
|`WAVES_VERSION`                   |Версия ноды. Значение по умолчанию latest. Список доступных версий [тут](https://github.com/wavesplatform/Waves/releases).|
|`WAVES_NETWORK`                   |Тип ноды. `MAINNET` или `TESTNET`.   |
|`WAVES_LOG_LEVEL`                 |Режим логирования ноды: `OFF`, `ERROR`, `WARN`, `INFO`, `DEBUG`, `TRACE`. Подробно про режимы логирования [тут](https://docs.wavesplatform.com/en/waves-node/logging.html).   |
|`WAVES_HEAP_SIZE`                 |Java Heap Size лимит в -X Command-line Options notation (`-Xms=[your value]`). Подробно [тут](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionX.html)   |
|`WAVES_CONFIG_FILE`               |Адрес файла конфигурации Waves.   |
|`WAVES_DECLARED_ADDRESS`          |Строка с IP адресом и портом для отправки в качестве внешнего адреса во время handshake. Может быть задан автоматически если активирован UPnP. Если параметр задан, что является нормальным сценарием для ноды, работающей в облаке, нода будет принимать входящие подключения через `bind-address:port` и передавать свой `declared-address` другим узлам.|
|`WAVES_AUTODETECT_ADDRESS`        |Установите значение `yes` чтобы получить свой публичный адрес и назначить его в качестве значения `declared-address`.|
|`WAVES_AUTODETECT_ADDRESS_PORT`   |`WAVES_AUTODETECT_ADDRESS` может получить только IP адрес ноды, но не номер порта, задайте номер порта с помощью это переменной.|

**Примение**: Все переменные не являются обязательными. 

## Конфигурация

Образ поддерживает конфигурирование при помощи переменных среды. В зависимости от переменных среды, образ генерирует файл local.conf и сохраняет его в папке `/waves/configs`.
Чтобы задать значение в файле конфигурации следуйте простым привилам:

1. Определите путь до переменной в файле конфигурации ([complete configuration file](https://docs.wavesplatform.com/en/waves-node/how-to-configure-a-node.html))
2. Соединяйте все имена секций двойным underscore (`__`).
3. Замените все тире одиночными underscore (`_`).
4. Капитализируйте последнюю строку.

Например, если вы хотите задать значение `waves.rest-api.enable`, отправьте переменную среды `WAVES__REST_API__ENABLE=no`;
