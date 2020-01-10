# Экспорт/Импорт блокчейна

После установки ноды, для её работы необходима актуальная база данных блокчейна.
Базу данных можно импортировать из ранее экспортированного бинарного файла.

В данной статье описан процесс экспорта и импорта базы данных.

## Экспорт существующих блоков в бинарный файл

Если у Вас уже есть нода Waves, синхронизированная с актуальным блокчейном, Вы можете экспортировать её базу данных.
Перед началом экспорта, необходимо остановить ноду. Экспорт это довольно быстрый процесс, но полученный бинарный файл может занять до 1/3 дополнительного пространства папки `data`.

Для экспорта существующих блоков в бинарный файл, выполните следующую команду:

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

Параметр `height` позволяет задать максималььную высоту блоков при экспорте. Если параметр не задан, будут экспортированы все блоки.

Имя файла экспорта - не обязательный параметр ('blockchain' используется по умолчанию).
В результате экспорта, файл с именем `<output-file-name>-<height>` будет создан в текущей папке `data`.

## Импорт блоков из бинарного файла

После установки ноды Waves, вместо автоматической загрузки данных блокчейн, можно импортировать базу данных (для ускорения процесса получения данных). 

Перед импортом необходимо остановить ноду.

Если в папке data ноды есть какие-то данные, процедура импорта продолжит получение данных из бинарного файла блокчейна.
Рекомендуется удалить существующие данные, чтобы избежать возникновения ошибок в результате смешивания данных из разных версий.

В Windows, папка обычно расположена по адресу: **%HOMEPATH%\waves\data**

В Linux: **/var/lib/waves[-testnet]/ folder:**

**sudo rm -rdf /var/lib/waves[-testnet]/data**

**Внимание**: Импорт это длительная операция, выполнение которой может занять несколько часов.

Для импорта базы данных блокчейна, выполните следующую команду:

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

## Импорт блоков до определённой высоты

Можно задать целевую высоту. Если параметр height не задан, будут импортированы все блоки. Для импорта, выполните команду:

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
