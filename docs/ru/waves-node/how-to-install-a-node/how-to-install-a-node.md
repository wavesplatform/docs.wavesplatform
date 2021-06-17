# Установить ноду Waves

В данной статье описаны методы установки ноды Waves.

## Системные требования

| Минимальные системные требования | CPU | RAM | SSD |
| :--- | :--- | :--- | :--- |
|[Валидирующая нода](/ru/blockchain/node/validating-node) | 2 | 4 Гбайт | 60 Гбайт |
|[Генерирующая нода](/ru/blockchain/node/mining-node) | 2+ | 4+ Гбайт | 60+ Гбайт |

### Docker-контейнер

Самый простой способ установить ноду на macOS, Windows или Linux — это воспользоваться контейнером Waves в Docker. Установите приложение Docker и воспользуйтесь консольными командами для запуска ноды или для изменения настроек ноды. Подробнее в статье [Развернуть ноду в Docker](/ru/waves-node/waves-node-in-docker).

### DEB-пакет или JAR-файл

Также вы можете скачать [последнюю версию](https://github.com/wavesplatform/Waves/releases) архива `.jar` или `.deb` (в зависимости от операционной системы) и файл конфигурации `.conf` на свой компьютер и запустить ноду с помощью консольных команд.

Подробные инструкции для различных операционных систем:

* [macOS](/ru/waves-node/how-to-install-a-node/on-mac)
* [Windows](/ru/waves-node/how-to-install-a-node/on-windows)
* [Ubuntu](/ru/waves-node/how-to-install-a-node/on-ubuntu)

Подробнее про файл конфигурации в статье [Конфигурация ноды](/ru/waves-node/node-configuration).

### SBT-сборка

Вы можете установить ноду из DEB-пакета или JAR-файла собственной сборки. Такой архив можно собрать из исходных файлов (из Git-репозитория) с помощью SBT (Scala Build Tool). Подробнее в статье [Установка из Source (Сборка SBT)](/ru/waves-node/how-to-build-and-test-a-node).
