# Загрузка актуального блокчейна

Для работы ноды необходима актуальная база данных блокчейна. Можно загрузить архив **blockchain_last.tar**, содержащий актуальный блокчейн по ссылкам ниже.

По умолчанию данные блокчейн расположены в папке `data`, которая находится в основной директории приложения.
См. стандартное расположение основной директории приложения для разных операционных систем секции [Default Application Directory](/ru/waves-node/node-configuration#default-application-directory) статьи [Конфигурация ноды](/en/waves-node/node-configuration).

Загружаемый архив может содержать неверные данные или балансы, поэтому загружайте базы данных блокчейна только из надежных источников.

## Актуальные загружаемые базы данных (state с node.wavesnodes.com)

* Mainnet: [http://blockchain.wavesnodes.com/](http://blockchain.wavesnodes.com/)
* Testnet: [http://blockchain-testnet.wavesnodes.com/](http://blockchain-testnet.wavesnodes.com/)
* Stagenet: [http://blockchain-stagenet.wavesnodes.com/](http://blockchain-testnet.wavesnodes.com/)

**Примечание**: файлы по ссылкам регулярно обновляются.

## Пошаговая инструкция (Linux DEB)

Чтобы загрузить и применить последнюю базу данных блокчейн, выполните следующие шаги:

1. Загрузите архив `blockchain_last.tar` по одной из ссылок.
2. Запустите checksum с помощью какого-нибудь инструмента, чтобы проверить файлы из ссылки выше (checksum файла **blockchain_last.tar** должен быть таким же как значение в данном файле: **blockchain_last.tar.SHA1SUM**)
3. Удалите папку с данными, выполнив следующую команду: `sudo rm -rdf /var/lib/waves/data`.
4. Распакуйте файлы базы данных состояния в папку, выполнив следующую команду: `tar -xvf blockchain_last.tar -C /var/lib/waves/data`.
5. Запустите ноду, выполнив следующую команду: `sudo systemctl start waves`.

## Альтернативный способ распаковки (Linux)

Традиционный способ загрузки и распаковки требует много дискового пространства. В некоторых случаях диска хватает только на сам блокчейн с небольшим запасом.
Пользователи Linux могут воспользоваться одной из команд приведённых ниже для распаковки архива прямо в процессе скачивания. В результате, на диске сохранится только распакованный блокчейн, без архива, что позволит сэкономить дисковое пространство.

Если нода установлена из **DEB** пакета, выполните следующую команды:

```bash
cd /var/lib/waves
sudo -u waves bash -c "wget -qO- http://blockchain.wavesnodes.com/blockchain_last.tar --show-progress | tar xf -"
```

Если нода запускается из **JAR** файла, перейдите в папку `data` где хранится блокчейн ноды и выполните следующую команду:

```bash
wget -qO- http://blockchain.wavesnodes.com/blockchain_last.tar --show-progress | tar xf -
```
