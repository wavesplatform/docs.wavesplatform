# Логирование

## Уровни логирования <a id="loglevels"></a>

1. `OFF` — логирование в файл или STDOUT выключено.
2. `ERROR` — серьезные ошибки. Необходимо изучить эти сообщения.
3. `WARN` — предупреждения. Нода может продолжать работу, но рекомендуется обратить внимание на какую-то проблему.
4. `INFO` — важные сообщения. Система работает нормально.
5. `DEBUG` - информация для отладки.
6. `TRACE` - информация для отладки, когда уровня DEBUG недостаточно (редкие случаи).

Низкие уровни логирования включают в себя более высокие. Например, `DEBUG` включает все более высокие уровни: `INFO`, `WARN` и `ERROR`.

## О платформе

Ноды Waves используют для логирования платформу [logback](http://logback.qos.ch/documentation.html). Нода поставляется с [настройками логирования](https://logback.qos.ch/manual/configuration.html). См. стандартный файл [logback.xml](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/logback.xml) в качестве примера.

По умолчанию все логи пишутся в читаемом формате:

* В STDOUT с уровнем `INFO`.
* В файл `/var/log/waves.log` для нод, установленных из DEB-пакета, или `${waves.directory}/logs/waves.log` для других нод. До версии ноды 1.1.6 уровень логирования по умолчанию был `TRACE`. После выхода версии 1.1.6 уровень по умолчанию стал `DEBUG`: это означает, что UTX-трейсы не включены, что позволяет уменьшить объем логов, производимых нодой при высокой нагрузке. Можно [включить](#enable-traces) запись UTX-трейсов в отдельный файл. Кроме ежедневной ротации, предусмотрена ротация `waves.log` по размеру файла, когда размер файла достигает заданного значения (по умолчанию 100 Мбайт).

Для логирования предусмотрены следующие ограничения:

* Логи старше 30 дней удаляются.
* Если суммарный размер логов станет больше 1 Гбайт, самые старые логи будут удаляться в соответствии с лимитом.

Можно изменить следующие настройки логирования:

* [активировать UTX-трейсы](#enable-traces);
* [изменить расположение лог-файла](#log-file);
* [изменить уровень логирования в STDOUT](#stdout-log-level);
* [активировать логирование в формате JSON](#json).

За исключением активации логирования в формате JSON, измененить параметры логирования можно следующими способами:

* Добавление параметров в файл `application.ini`.
* Добавление параметров в файл `logback.xml`. Чтобы изменить настройки ноды в `logback.xml`, создайте свой собственный `logback.xml` в папке `/etc/waves/`. Подробнее в подразделе [Изменить настройки логирования в файле logback.xml](#own-logback).
* Выполнения команд в командной строке.

Логирование в формате JSON может быть активировано только в файле `logback.xml`.

Не нужно перезапускать ноду после изменения настроек логирования, так как изменения применяются автоматически каждые 30 секунд.

Уровни логирования описаны в подразделе [Уровни логирования](#loglevels).

## Изменить настройки логирования в файле logback.xml <a id="own-logback"></a>

Для изменения настроек логирования ноды в файле `logback.xml`:

1. Создайте свой файл `/etc/waves/logback.xml`.
2. Добавьте в файл параметры в тегах `included`.

Следующий пример кода можно использовать для включения уровня логирования `TRACE`:

```xml
<included>
    <property name="logback.file.level" value="TRACE"/>
</included>
```

**Примечание.** Не нужно перезапускать ноду после изменения настроек логирования, так как изменения применяются автоматически каждые 30 секунд.

## Активировать UTX-трейсы <a id="enable-traces"></a>

Если UTX-трейсы активированы, то выходные данные будут записаны в файл `/var/log/utx-trace.log`.

Если нода была установлена из DEB-пакета, используйте файл [application.ini](#aini-activate-utx) или [logback.xml](#logback-activate-utx).

Если нода была запущена из JAR-файла, используйте [опцию Java](#jar-activate-utx).

### Активировать в application.ini <a id="aini-activate-utx"></a>

В файле `application.ini` добавьте:

```bash
-J-Dlogback.utx-trace.enabled=true
```

### Активировать в logback.xml <a id="logback-activate-utx"></a>

В файле `logback.xml` добавьте:

```xml
<included>
    <property name="logback.utx-trace.enabled" value="true" />
</included>
```

### Активировать через командную строку <a id="jar-activate-utx"></a>

Используйте опцию Java:

```
java -Dlogback.utx-trace.enabled=true -jar /path/to/waves-all.jar /path/to/config`
```

## Изменить расположение лог-файла <a id="log-file"></a>

По умолчанию лог-файл расположен в папке: `/var/log`.

Если нода была установлена из DEB-пакета, используйте файл [application.ini](#aini-change-location) или [logback.xml](#logback-change-location).

Если нода была установлена из JAR-файла, используйте [опцию Java](#jar-change-location).

### Изменить в application.ini <a id="aini-change-location"></a>

В файле `application.ini` добавьте:

```bash
-J-Dlogback.file.directory=/path/to/directory/for/logs
```

### Изменить в logback.xml <a id="logback-change-location"></a>

В файле `logback.xml` добавьте:

```xml
<included>
    <property name="logback.file.directory=/path/to/directory/for/logs" value="true" />
</included>
```

### Изменить через командную строку <a id="jar-change-location"></a>

Используйте опцию Java:

```
java -Dlogback.file.directory=/path/to/directory/for/logs -jar /path/to/waves-all.jar /path/to/config`
```

## Задать уровень логирования для STDOUT <a id="stdout-log-level"></a>

По умолчанию уровень логирования в STDOUT — `INFO`.

Если нода была установлена из DEB-пакета, используйте файл [application.ini](#aini-change-location) или [logback.xml](#logback-change-location).

Если нода была установлена из JAR-файла, используйте [опцию Java](#jar-change-location).

Уровни логирования описаны в подразделе [Уровни логирования](#loglevels).

### Изменить в application.ini <a id="aini-set-loglevel"></a>

В файле `application.ini` добавьте:

```bash
-J-Dlogback.file.directory=/path/to/directory/for/logs
```

### Изменить в logback.xml <a id="logback-set-loglevel"></a>

В файле `logback.xml` добавьте:

```xml
<included>
    <property name="logback.file.directory=/path/to/directory/for/logs" value="true" />
</included>
```

### Изменить через командную строку <a id="jar-set-loglevel"></a>

Используйте опцию Java:

```
java -Dlogback.file.directory=/path/to/directory/for/logs -jar /path/to/waves-all.jar /path/to/config
```

## Включить логирование в формате JSON<a id="json"></a>

Если вы используете инструменты для анализа JSON, вам нужно включить вывод логов в формате JSON.

В файле `logback.xml` добавьте:

```xml
<included>
    <property name="logback.file.enabled" value="false"/>
        <appender name="JSON" class="ch.qos.logback.core.rolling.RollingFileAppender">
            <file>${logback.file.final-directory}/waves-elk.json</file>
            <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <!-- daily rollover -->
                <fileNamePattern>${logback.file.final-directory}/waves-elk.json.%d{yyyy-MM-dd, UTC}.%i.gz</fileNamePattern>
                <maxFileSize>1GB</maxFileSize>
                <maxHistory>3</maxHistory>
                <totalSizeCap>2GB</totalSizeCap>
            </rollingPolicy>
            <encoder class="net.logstash.logback.encoder.LoggingEventCompositeJsonEncoder">
                <providers>
                    <timestamp>
                        <pattern>yyyy-MM-dd'T'HH:mm:ss.SSS</pattern>
                        <timeZone>UTC</timeZone>
                    </timestamp>
                    <version/>
                    <message/>
                    <loggerName/>
                    <threadName/>
                    <logLevel/>
                    <logLevelValue/>
                    <stackTrace/>
                    <stackHash/>
                </providers>
            </encoder>
        </appender>
    <root>
        <appender-ref ref="JSON"/>
    </root>
</included>
```
