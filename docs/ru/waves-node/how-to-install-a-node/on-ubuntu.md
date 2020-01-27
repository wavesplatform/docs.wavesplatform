# Установка ноды на Ubuntu

Чтобы запустить ноду Waves, необходимо выполнить два шага:

1. Установить OpenJDK 8.

2. Загрузить файлы Waves и настроить приложение.

## Установка OpenJDK 8

Проверьте версию JDK с помощью команды:

```bash
java -version
```

**Примечание**: Не устанавливайте OpenJDK 8, если у вас уже установлена версия OpenJDK 11. Приложение ноды поддерживает версии 8 и 11.

Установите OpenJDK 8, выполнив следующие команды:

```bash
sudo apt-get update
sudo apt-get install openjdk-8-jre
```

Проверьте версию JDK с помощью команды:

```bash
java -version
```

Если вы видите следующий результат, то переходите к следующему шагу:

```bash
java version "1.8.0_201"
Java(TM) SE Runtime Environment (build 1.8.0_201-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.201-b09, mixed mode)
```

## Установка deb-пакета на deb-based Linux (Ubuntu, Debian)

Загрузите последнюю версию deb-пакета [Waves](https://github.com/wavesplatform/Waves/releases)  и установите его с помощью команды `sudo dpkg -i waves*.deb`.

Отредактируйте файл конфигурации Waves, который должен быть уже распакован из пакета deb в папку: `/usr/share/waves/conf/waves.conf` (или `waves-testnet` для testnet) символическая ссылка `/etc/waves/waves.conf`. Внимательно изучите статью  [Конфигурация ноды](/en/waves-node/node-configuration).

Есть два типа deb-пакетов Waves: **upstart loader** и **systemd loader**.

### 1. Systemd (Ubuntu &gt;= 15.04):

Пользователи могут запустить ноду с помощью команды: `sudo systemctl start waves.service` (waves-testnet для testnet) и включить автозапуск при включении компьютера с помощью команды: `sudo systemctl enable waves.service`. Пользователи **Systemd** смогут найти journald логи Waves с помощью команды: `journalctl -u waves.service -f`. Подробно про journald [тут](https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs).

### 2. **Upstart (Ubuntu &lt; 15.04):**

Пользователи могут запустить ноду с помощью команды: `sudo service waves start` (waves-testnet для testnet) и включить автозапуск при включении компьютера с помощью команды: `sudo service waves enable`. Логи приложения Waves расположены по адресу `/var/log/waves/waves.log`

Чтобы поменять папку waves (для кошелька, блокчейна и других файлов ноды) в пакетах ubuntu можно использовать команду: `-J-Dwaves.directory=path` в папке `/etc/waves/application.ini`. Папка waves по умолчанию `/var/lib/waves-testnet/` задается в скрипте `run systemd start`.

## Установка для продвинутых пользователей

Загрузите последнюю версию waves.jar пакета [Waves](https://github.com/wavesplatform/Waves/releases) и файл конфигурации .conf (для mainnet или testnet) в любую папку, например `/opt/waves`.

Отредактируйте файл конфигурации waves.conf, **это очень важно! От этого зависит безопасность вашего кошелька и средств!**

Откройте файл конфигурации своим любимым текстовым редактором, налейте в чашку вкусный чай и изучите статью [Конфигурация ноды](/ru/waves-node/node-configuration)

Откройте консоль и перейдите в папку с файлом jar с помощью следующей команды: `cd /opt/waves`, запустите ноду waves следующей командой: `java -jar waves.jar waves-config.conf`.

## Установка из исходников

* Добавьте в свой ~/.bashrc для увеличения памяти jvm:

  ```
  SBT_OPTS="-XX:MaxJavaStackTraceDepth=5000 -Xmx2536M -XX:+CMSClassUnloadingEnabled -Xss2M"
  ```
  
* Выполните в консоли:

  ```
  sudo apt install sbt
  ```

* Клонируйте репозиторий:

  ```
  git clone git@github.com:wavesplatform/Waves.git
  ```

* Запустите SBT в папке проекта:

  ```
  cd waves_project
  sbt
  packageAll
  ```

* Импортируйте проект в Intellij Idea

* Загрузите плагин для Intellij:

  * Scala

* Во время импорта проекта, выберите опцию

  ```
  [x] Use sbt shell for build and import
  ```

* Увеличьте `heap size` до 2048 MB,

* Настройте плагин "Scala Fmt"

## Дополнительная безопасность

Для дополнительной безопасности рекомендуется хранить приложение кошелек и файл конфигурации в зашифрованном разделе диска.

Также, возможно, вы захотите ограничить использование зашифрованных папок для некоторых пользователей. Подробно об этом [тут](http://manpages.ubuntu.com/manpages/precise/man1/chown.1.html).

Скрипт deb-пакета Waves создает пользователя. Приложение, кошелек и папки с данными по умолчанию принадлежат этому пользователю.

Если вы хотите использовать RPC, необходимо защитить Ubuntu с помощью встроенного ufw или любого другого файервола. Подробно об этом [тут](https://www.digitalocean.com/community/tutorials/how-to-setup-a-firewall-with-ufw-on-an-ubuntu-and-debian-cloud-server). Если ваш сервер находится в публичном доступе и вы хотите использовать RPC, задействуйте только определенные методы, используя [Nginx's proxy\_pass module](http://nginx.org/ru/docs/http/ngx_http_proxy_module.html) и не забудьте назначить API key `apiKeyHash` хэш в файле конфигурации Waves.

Не забывайте своевременно обновлять операционную систему и программное обеспечение системы безопасности.
