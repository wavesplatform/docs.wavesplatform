# Установить ноду на Ubuntu

В этой статье описана установка ноды Waves на компьютер под управлением Linux.
Сначала вы устанавливаете Java, а затем саму ноду, используя один из предоставленных методов.

Наиболее распространенный и удобный способ установки/обновления ноды Waves на компьютерах под управлением Linux описан в разделе [Установка из APT-репозитория](#установка-из-apt-репозитория).

Альтернативные методы описаны в секции [Установка из DEB-пакета на Linux (Ubuntu, Debian)](#установка-из-deb-пакета-на-linux-(ubuntu,-debian)) и [Установка для продвинутых пользователей](#установка-для-продвинутых-пользователей).

## Установка Java (OpenJDK 8)

**Примечание:** Не устанавливайте OpenJDK 8, если у вас уже установлен OpenJDK 11. Установка ноды поддерживается в обеих версиях 8 и 11.

Установите OpenJDK 8 с помощью следующей команды:

```cpp
sudo apt-get update
sudo apt-get install openjdk-8-jre
```

Проверьте версию JDK с помощью следующей команды:

```bash
java -version
```

Если вы видите такой результат, перейдите к следующему шагу:

```bash
java version "1.8.0_201"
Java(TM) SE Runtime Environment (build 1.8.0_201-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.201-b09, mixed mode)
```

## Установка из APT-репозитория

**Примечание:** Пакетная установка Waves поддерживается в Debian 8.0+, Ubuntu 16.04+ и их форках.

Наиболее удобный способ установить/обновить ноду Waves на Linux — с помощью APT-репозитория. Репозиторий предоставляет пакеты для Mainnet, Testnet и Stagenet.
При использовании этого метода установки соответствующие дополнительные файлы (а именно OpenJDK 8) также будут загружены и автоматически установлены.

Чтобы установить последнюю версию пакета для Mainnet из репозитория APT, выполните следующие команды:

```bash
curl -sL http://apt.wavesplatform.com/apt-key.gpg | sudo apt-key add -
sudo add-apt-repository "deb https://apt.wavesplatform.com/ xenial mainnet"
sudo apt update
sudo apt install waves
```

Запустите ноду с помощью следующей команды (`waves-testnet` для Testnet):

```bash
sudo systemctl start waves.service
```

Включите автозагрузку при запуске с помощью следующей команды:

```bash
sudo systemctl enable waves.service
```

После выпуска новой версии ноды Waves вы можете обновить пакет, выполнив следующие команды:

```bash
sudo apt update
sudo apt upgrade
```

## Установка из DEB-пакета на Linux (Ubuntu, Debian)

Загрузите [последнюю версию DEB-пакета](https://github.com/wavesplatform/Waves/releases) и установите ноду с помощью следующей команды:

```bash
sudo dpkg -i waves*.deb
```

Файл конфигурации ноды вложен в архив `.deb` и распаковывается в папку `/usr/share/waves/conf/waves.conf` (или `waves-testnet` для Testnet) с символической ссылкой на `/etc/waves/waves.conf`. Редактируйте файл с особой осторожностью. Подробнее в статье [Конфигурация ноды](/ru/waves-node/node-configuration).

Запустите ноду с помощью следующей команды (`waves-testnet` для Testnet):

```bash
sudo systemctl start waves.service
```

Включите автозагрузку при запуске с помощью следующей команды:

```bash
sudo systemctl enable waves.service
```

Вы можете найти логи в хранилище journald с помощью следующей команды:

```bash
journalctl -u waves.service -f
```

[Подробнее про journald](https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs)

## Установка для продвинутых пользователей

Загрузите [последнюю версию](https://github.com/wavesplatform/Waves/releases) архива `waves.jar` и файла конфигурации [.conf](https://github.com/wavesplatform/Waves/tree/master/node) (для Mainnet, Testnet или Stagenet) в любую папку, например `/opt/waves`.

Отредактируйте файл конфигурации. Подробнее в статье [Конфигурация ноды](/ru/waves-node/node-configuration).

Запустите консоль, перейдите в папку с файлом `.jar` с помощью команды `cd /opt/waves` и запустите ноду с помощью следующей команды (замените `{*}` именем файла):

```bash
java -jar {*}.jar {*}.conf
```

## Дополнительная безопасность

Для дополнительной безопасности рекомендуется хранить кошелек и файл конфигурации в зашифрованном разделе диска.

Также, возможно, вы захотите ограничить использование зашифрованных папок для некоторых пользователей. Подробно об этом [тут](http://manpages.ubuntu.com/manpages/precise/man1/chown.1.html).

Скрипт DEB-пакета Waves создает пользователя `waves`. Приложение waves, кошелек и папки с данными по умолчанию принадлежат этому пользователю.

Если вы хотите использовать RPC, необходимо защитить Ubuntu с помощью встроенного `ufw` или любого другого файрвола. Подробно об этом [тут](https://www.digitalocean.com/community/tutorials/how-to-setup-a-firewall-with-ufw-on-an-ubuntu-and-debian-cloud-server). Если ваш сервер находится в публичном доступе и вы хотите использовать RPC, задействуйте только определенные методы, используя [Nginx's proxy\_pass module](http://nginx.org/ru/docs/http/ngx_http_proxy_module.html), и не забудьте указать хеш API-ключа `apiKeyHash` хэш в файле конфигурации Waves.

Не забывайте своевременно обновлять операционную систему и антивирусное программное обеспечение.
