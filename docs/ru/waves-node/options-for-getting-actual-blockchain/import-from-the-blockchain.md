# Импортировать и экспортировать блокчейн

Для работы ноды необходима синхронизированная база данных блокчейна. Вы можете ускорить синхронизацию примерно на 10%. Для этого [импортируйте блокчейн из бинарого файла](#импорт-блокчейна-из-бинарного-файла) вместо того, чтобы синхронизировать блокчейн в обычном режиме работы ноды. Бинарные файлы содержат цепочку блоков с транзакциями в проверяемом формате (включая первоначальный порядок всех транзакций с подписями и блоков с подписями генераторов блоков). При импорте блокчейна каждая транзакция выполняется так, как она выполнялась бы во время нормальной работы ноды. Это включает в себя проверку подписей, балансов и пр.

Если у вас уже есть работающая нода с синхронизированным блокчейном, вы можете [экспортировать свой блокчейн в бинарный файл](#экспорт-блокчейна-в-бинарный-файл).

## Импорт блокчейна из бинарного файла

Импорт блокчейна из бинарного файла повышает нагрузку на ЦПУ и может занять 1-3 дня. Процесс подразумевает точно такое же выполение всех транзакций и валидаций, как при обычной работе ноды, включая валидаю подписей, балансов и пр.

**Примечание**: По умолчанию папка `data` находится в [основной папке приложения](/ru/waves-node/node-configuration#каталог-приложения-по-умолчанию), и если в ней есть файлы, процесс импорта будет добавлять к ним данные из бинарного файла блокчейна. Рекомендуется перед импортом удалить файлы из папки `data`, чтобы избежать ошибок в результате смешивания данных разных версий.

Для импорта блокчейна выполните следующие шаги:

1. Остановите ноду с помощью команды: ```service waves stop```.

2. Выполните следующую команду:
  
   <details>
    <summary>Windows</summary>

      ```java -cp waves-all-<version>.jar com.wavesplatform.Importer -c <configuration-file-name> -i <binary-file-name>```
   </details>

   <details>
    <summary>Linux</summary>

    Mainnet:
      ```sudo -u waves waves import -c /etc/waves/waves.conf -i <binary-file-name>```

    Testnet:
      ```sudo -u waves-testnet waves-testnet import -c /etc/waves-testnet/waves.conf -i <binary-file-name>```
   </details>

   <details>
    <summary>macOS</summary>

      ```java -cp waves-all-<version>.jar com.wavesplatform.Importer -c <configuration-file-name> -i <binary-file-name>```

   </details>

Используйте имя реального бинарного файла вместо ```binary-file-name```. Например, введите ```mainnet_last``` для импорта актуального Mainnet блокчейна. См. имена других бинарных файлов для импорта по ссылкам ниже.

Актуальные базы данных для загрузки (nodes.wavesnodes.com)

* Mainnet: [http://blockchain.wavesnodes.com/](http://blockchain.wavesnodes.com/)
* Testnet: [http://blockchain-testnet.wavesnodes.com/](http://blockchain-testnet.wavesnodes.com/)
* Stagenet: [http://blockchain-stagenet.wavesnodes.com/](http://blockchain-testnet.wavesnodes.com/)

**Примечание**: Вы можете ускорить импорт на 5–20% на свой страх и риск. Для этого используйте опцию ```-no-verify``` параметра ```Importer```, чтобы отключить проверку блока и транзакции. Используйте с осторожностью и только если вы доверяете файлу блокчейна.

### Импорт блокчейна до заданной высоты

Вы можете задать желаемую высоту импорта. Если параметр `height` не задан, будут импортированы все блоки.

Для импорта блокчейна до заданной высоты, выполните следующие шаги:

1. Остановите ноду с помощью команды: ```service waves stop```.

2. Выполните следующую команду:

   <details>
    <summary>Windows</summary>

      ```java com.wavesplatform.Importer -c <configuration-file-name> -i <binary-file-name> -h <height>```
   </details>

   <details>
    <summary>Linux</summary>

    Mainnet:
      ```sudo -u waves waves import -c /etc/waves/waves.conf -i <binary-file-name> -h <height>```
  
    Testnet:
      ```sudo -u waves-testnet waves-testnet import -c /etc/waves-testnet/waves.conf -i <binary-file-name> -h <height>```

   </details>

   <details>
    <summary>macOS</summary>

      ```java com.wavesplatform.Importer -c <configuration-file-name> -i <binary-file-name> -h <height>```
   </details>

## Экспортировать блокчейн в бинарныый файл

Если у вас уже есть работающая нода с синхронизированным блокчейном, вы можете экспортировать свой блокчейн в бинарный файл.
Экспорт — довольно быстрый процесс, но полученный бинарный файл может дополнительно потребовать до 1/3 размера папки `data`.

Для экспорта блокчейна, выполните следующие шаги:

1. Остановите ноду с помощью команды: ```service waves stop```.

2. Выполните следующую команду:

   <details>
    <summary>Windows</summary>

      ```java -cp waves-all-<version>.jar com.wavesplatform.Exporter -c <configuration-file-name> -o <output-file-name> -h <height>```
   </details>

      <details>
    <summary>Linux</summary>

    Mainnet:
      ```sudo -u waves waves export -c /etc/waves/waves.conf -o <output-file-name> -h <height>```

    Testnet:
      ```sudo -u waves-testnet waves-testnet export -c /etc/waves-testnet/waves.conf -o <output-file-name> -h <height>```
   </details>

      <details>
    <summary>macOS</summary>

      ```java -cp waves-all-<version>.jar com.wavesplatform.Exporter -c <configuration-file-name> -o <output-file-name> -h <height>```
   </details>

Параметр `height` позволяет задать максимальную высоту блоков при экспорте. Если параметр не задан, будут экспортированы все блоки.

Имя файла экспорта (`output-file-name`) — необязательный параметр, по умолчанию используется `blockchain`.
В результате экспорта файл с именем `<output-file-name>-<height>` будет создан в текущей папке `data`.
