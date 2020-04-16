# Конфигурация логировния

## Уровни логирования <a id="loglevels"></a>

1. `OFF` - логирование в файл или STDOUT выключено;
2. `ERROR` - серьёзные ошибки. Важные сообщения. Следует обратить внимание на какую-то проблему;
3. `WARN` - предупреждения. Нода может продолжать работу, но следует обратить внимание на какую-то проблему;
4. `INFO` - важные сообщения. Система работает нормально;
5. `DEBUG` - информация для отладки;
6. `TRACE` - информация для отладки, когда DEBUG не работает (редкие случаи).

Низкие уровни логирования включают в себя более высокие. Например, `DEBUG` включает все более высокие уровни: `INFO`, `WARN` и `ERROR`.

## О платформе

Waves ноды используют [logback](https://logback.qos.ch/documentation.html) платформу для записи логов. Нода поставляется с [настройками логирования](https://logback.qos.ch/manual/configuration.html). Стандартный файл `logback.xml` в качестве примера можно посмотреть [тут](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/logback.xml).

[По умолчанию](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/logback.xml), все логи пишутся в читаемом формате в

* в STDOUT с уровнем `INFO`.
* в `/var/log/waves.log` для нод установленных из Deb пакета или `${waves.directory}/logs/waves.log` для других нод. До версии ноды 1.1.6, по умолчанию уровень логирования был `TRACE`. После выхода версии 1.1.6, уровень по умолчанию стал `DEBUG`, это означает, что UTX трейсы не включены в `waves.log` по умолчанию, чтобы уменьшийть количество логов производимых нодой при высокой нагрузке. Можно [включить](#enable-traces) запись UTX трейсов в отдельный файл. Кроме ежедневной ротации, предусмотрена ротация `waves.log` по размеру файла, когда размер файла достигает заданного значения (по умолчанию 100 mb).

Для логирования предусмотрены следующие ограничения:

* Логи старше 30 дней удаляются.
* Если суммарный размер логов станет больше 1Gb, самые старые логи будут удаляться в соответстветствии с лимитом.

Можно изменить следующие настройки логирования:

* [активировать UTX trace](#enable-traces).
* [изменить расположение Log файла](#log-file).
* [изменить уровень логирования STDOUT](#stdout-log-level).
* [активировать логирования в формате JSON](#json).

За исключением активации логирования в формате JSON, измененить параметры логирования можно путём:

* добавления параметров в файл `application.ini`.
* добавления параметров в файл `logback.xml`. Чтобы изменить настройки ноды в `logback.xml`, создайте свой собственный `logback.xml` в папке `/etc/waves/`. Подробнее в [этой](#own-logback) секции.
* выполнения команд в командной строке.

Логироване в формате JSON может быть активировано только в файле `logback.xml`.

Не нужно перезапускать ноду после изменений настроек логирования, так как изменения применяются автоматичеки каждые 30 секунд.

Уровни логирования описаны в секции [Уровни логирования](#loglevels).

## Изменить настройки логирования в файле Logback.xml <a id="own-logback"></a>

Для изменения настроек логирования ноды в файле `logback.xml`

1. Создайте свой файл `/etc/waves/logback.xml`.
2. Добавьте в файл параметры в тегах `included`.

Следующий пример кода можно использовать для включения `TRACE` логирования:

```xml
<included>
    <property name="logback.file.level" value="TRACE"/>
</included>
```

**Примечание**: Не нужно перезапускать ноду после изменений настроек логирования, так как изменения применяются автоматичеки каждые 30 секунд.

## Активировать UTX Trace логирование <a id="enable-traces"></a>

Если UTX трейс логирование активировано, то выходные данные будут записаны в файл `/var/log/utx-trace.log`.

Если нода была запущена из пакета Deb, используйте файл [application.ini](#aini-activate-utx) или [logback.xml](#logback-activate-utx).

Если нода была запущена из пакета Jar, используйте [Java опции](#jar-activate-utx).

### Активировать в Application.ini <a id="aini-activate-utx"></a>

В файле `application.ini` добавьте:

```bash
-J-Dlogback.utx-trace.enabled=true
```

### Активировать в Logback.xml <a id="logback-activate-utx"></a>

В файле `logback.xml` добавьте:

```xml
<included>
    <property name="logback.utx-trace.enabled" value="true" />
</included>
```

### Активировать через командную строку <a id="jar-activate-utx"></a>

Используйте опцию java: `java -Dlogback.utx-trace.enabled=true -jar /path/to/waves-all.jar /path/to/config`.

## Изменить расположение лог файла <a id="log-file"></a>

По умолчанию лог файл расположен в папке: `/var/log`.

Если нода была запущена из пакета Deb, используйте файл [application.ini](#aini-change-location) или [logback.xml](#logback-change-location).

Если нода была запущена из пакета Jar, используйте [Java опции](#jar-change-location).

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

Используйте опцию java: `java -Dlogback.file.directory=/path/to/directory/for/logs -jar /path/to/waves-all.jar /path/to/config`.

## Задать уровень логирования для STDOUT <a id="stdout-log-level"></a>

По умолчанию уровень логирования STDOUT - `INFO`.

Если нода была запущена из пакета Deb, используйте файл [application.ini](#aini-change-location) или [logback.xml](#logback-change-location).

Если нода была запущена из пакета Jar, используйте [Java опции](#jar-change-location).

Уровни логирования описаны в секции [Уровни логирования](#loglevels).

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

Используйте опцию java: `java -Dlogback.file.directory=/path/to/directory/for/logs -jar /path/to/waves-all.jar /path/to/config`.

## Включить логирование в формате JSON format <a id="json"></a>

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
