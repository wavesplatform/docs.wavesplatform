# Установить из исходников (Сборка SBT)

Этот метод установки подразумевает сборку собственного DEB-пакета или JAR-файла из файлов исходного кода Waves. Этот метод может быть полезен для блокчейн-разработчиков, которые хотят внести изменения в файлы ноды перед установкой, а также для продвинутых владельцев ноды, которые хотят самостоятельно убедиться, что исходные файлы ноды на 100% безопасны.

> :bulb: Для macOS рекомендуем использовать утилиту `homebrew`. Можно установить Java с помощью команды `brew cask install java` и SBT с помощью команды `brew install sbt@1`. Сборка и тестирование выполняются одинаково на всех ОС (используйте `\` вместо `/` в Windows).

Для сборки и тестирования ноды Waves выполните следующие шаги:

## 1. Настройка среды

### Установка Java

Установите Java с помощью следующей команды:

```bash
sudo apt-get update
sudo apt-get install default-jre default-jdk
```

>**Примечание**: Для увеличения объема памяти JVM (Java Virtual Machine) Linux-машины в файл `~/.bashrc` добавьте:
>  ```bash
>  SBT_OPTS="-XX:MaxJavaStackTraceDepth=5000 -Xmx2536M -XX:+CMSClassUnloadingEnabled -Xss2M"
>  ```

### Установка SBT

Следуйте инструкциям установки SBT для вашей ОС: [macOS](https://www.scala-sbt.org/1.0/docs/Installing-sbt-on-Mac.html), [Windows](https://www.scala-sbt.org/1.0/docs/Installing-sbt-on-Windows.html), [Linux](https://www.scala-sbt.org/1.0/docs/Installing-sbt-on-Linux.html).

## 2. Получение исходных кодов

```bash
git clone https://github.com/wavesplatform/Waves.git
cd Waves
```

## 3. Запуск тестов

```bash
sbt test
```

## 4. Сборка пакетов

* ### Mainnet

```bash
sbt packageAll
```

* ### Testnet

```bash
sbt -Dnetwork=testnet packageAll
```

## 5. Установка DEB-пакета

Замените `{folder}` именем папки, где находится DEB пакет. Замените `{*}` на имя файла:

```bash
sudo dpkg -i {folder}/*.deb
```

## 6. Запуск Fat JAR

Замените `{folder}` именем папки, где находится JAR-пакет. Замените `{*}` на имя файла \(в имени должно быть слово "all"\):

```bash
java -jar {folder}/*.jar path/to/config/file
```
