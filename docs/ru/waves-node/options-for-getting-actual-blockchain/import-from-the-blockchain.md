# Экспортировать и импортировать блокчейн

Для работы ноды необходима актуальная база данных блокчейна. Базу данных можно импортировать из ранее экспортированного бинарного файла.

Экспортированный блокчейн сохраняется в проверяемом формате (содержит все транзакции с подписями и блоки с подписями генераторов блоков). При импорте блокчейна каждая транзакция выполняется так, как она выполнялась бы во время нормальной работы ноды. Это включает в себя проверку подписей, балансов и пр.

В данной статье описаны процессы экспорта и импорта базы данных.

## Экспорт существующих блоков в бинарный файл

Если у вас уже есть нода Waves, синхронизированная с актуальным блокчейном, вы можете экспортировать ее базу данных.

Перед началом экспорта остановите ноду командой `service waves stop`. Экспорт — довольно быстрый процесс, но полученный бинарный файл может занять до 1/3 дополнительного пространства папки `data`.

Для экспорта существующих блоков в бинарный файл выполните следующую команду:

### В Windows

```bash
java -cp waves-all-<version>.jar com.wavesplatform.Exporter -c [configuration-file-name] -o [output-file-name] -h [height]
```

### В Linux

Mainnet:

```bash
sudo -u waves waves export -c /etc/waves/waves.conf -o [output-file-name] -h [height]
```

Testnet:

```bash
sudo -u waves-testnet waves-testnet export -c /etc/waves-testnet/waves.conf -o [output-file-name] -h [height]
```

### В macOS

```bash
java -cp waves-all-<version>.jar com.wavesplatform.Exporter -c [configuration-file-name] -o [output-file-name] -h [height]
```

Параметр `height` позволяет задать максималььную высоту блоков при экспорте. Если параметр не задан, будут экспортированы все блоки.

Имя файла для экспорта — необязательный параметр, по умолчанию используется `blockchain`.
В результате экспорта файл с именем `<output-file-name>-<height>` будет создан в текущей папке `data`.

## Импорт блоков из бинарного файла

Для работы ноды необходима актуальная база данных блокчейна. Чтобы ускорить получение данных, можно импортировать базу данных вместо автоматической синхронизации ноды. Перед началом импорта остановите ноду командой `service waves stop`.

По умолчанию папка `data` находится в основной папке приложения, и если в ней есть файлы, процесс импорта будет добавлять к ним данные из бинарного файла блокчейна. Рекомендуется перед импортом удалить файлы из папки `data`, чтобы избежать ошибок в результате смешивания данных разных версий.

Стандартное расположение основной папки приложения для разных операционных систем см. в подразделе [Каталог приложения по умолчанию](/ru/waves-node/node-configuration#каталог-приложения-по-умолчанию) статьи [Конфигурация ноды](/ru/waves-node/node-configuration).

**Внимание!** Импорт — это длительная операция, которая может занять несколько часов.

Чтобы импортировать базу данных, выполните следующую команду:

### В Windows

```bash
java -cp waves-all-<version>.jar com.wavesplatform.Importer -c [configuration-file-name] -i [binary-file-name]
```

### В Linux

Mainnet:

```bash
sudo -u waves waves import -c /etc/waves/waves.conf -i [binary-file-name]
```

Testnet:

```bash
sudo -u waves-testnet waves-testnet import -c /etc/waves-testnet/waves.conf -i [binary-file-name]
```

### В Mac

```bash
java -cp waves-all-<version>.jar com.wavesplatform.Importer -c [configuration-file-name] -i [binary-file-name]
```

**Примечание.** Вы можете ускорить импорт на 5–20% на свой страх и риск. Для этого используйте опцию `-no-verify` параметра `Importer`, чтобы отключить проверку блока и транзакции. Используйте с осторожностью и только если вы доверяете файлу блокчейна.

## Импорт блоков до определенной высоты

Можно задать высоту импорта. Если параметр высоты не задан, будут импортированы все блоки.

### В Windows

```bash
java com.wavesplatform.Importer -c <config_file> -i <blockchain_file> -h <height>
```

### В Linux

Mainnet:

```bash
sudo -u waves waves import -c /etc/waves/waves.conf -i /path/to/mainnet-1234688
```

Testnet:

```bash
sudo -u waves-testnet waves-testnet import -c /etc/waves-testnet/waves.conf -i /path/to/testnet-1234688
```

### В Mac

```bash
java com.wavesplatform.Importer -c <config_file> -i <blockchain_file> -h <height>
```
