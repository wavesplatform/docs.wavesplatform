# Logging Configuration

## About the framework

For log writing, the [logback](https://logback.qos.ch/documentation.html) framework is used. The node is shipped with embedded logback configuration, [here](https://logback.qos.ch/manual/configuration.html) you can find the default [logback.xml](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/logback.xml) file example.

By [default](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/logback.xml), all logs are written in human-readable format

* to STDOUT with `INFO` level.
* to `/var/log/waves.log`. Prior to node version 1.1.6, the default logging level in relation to writing to file was `TRACE`. After the node 1.1.6 version release, the logging level became `DEBUG` which means that UTX-related traces are not included to waves.log by default to reduce the amount of logs the node produces under heavy load. However, writing the UTX-related traces to separate file [can be enabled](#enable-traces). Also waves.log is now rotated when size limit is reached (100 mb by default), in addition to daily rotation.

Setting up the logging features is done either by

* setting properties to `application.ini`
* setting properties in `logback.xml`. To override the node's `logback.xml` settings, create own `logback.xml` in `/etc/waves/`. Refer to [this](#own-logback) section on how to configure it.
* executing commands in command line

It is not necessary to restart node after logging-related settings changes.

The log levels are listed [below](#loglevels).

## Configuring own logback.xml <a id="own-logback"></a>

To redefine existing node's `logback.xml` property

1. Create `/etc/waves/logback.xml` file
2. Add to the file the property wrapped to `included` tag, like so:

```xml
<included>
    <property name="logback.file.level" value="TRACE"/>
</included>
```

## Activate UTX trace logging <a id="enable-traces"></a>

If UTX trace logging is activated, the output will be written to `/var/log/utx-trace.log`.

If you run node from the package, consider using [application.ini](#aini-activate-utx) or [logback.xml](#logback-activate-utx).

If you run node from jar, use [Java's options](#jar-activate-utx).

### Activate by application.ini <a id="aini-activate-utx"></a>

Add `-J-Dlogback.utx-trace.enabled` to `application.ini`

### Activate by logback.xml <a id="logback-activate-utx"></a>

Add

```xml
<included>
    <property name="logback.utx-trace.enabled" value="true" />
</included>
```

to `logback.xml`.

### Activate by command line <a id="jar-activate-utx"></a>

Use Java's option `java -Dlogback.utx-trace.enabled=true -jar /path/to/waves-all.jar /path/to/config`.

## Change log file location

The default log file location is `/var/log`.

If you run node from the package, consider using [application.ini](#aini-change-location) or [logback.xml](#logback-change-location).

If you run node from jar, use [Java's options](#jar-change-location).

### Change by application.ini <a id="aini-change-location"></a>

Add `-J-Dlogback.file.directory=/path/to/directory/for/logs` to `application.ini`.

### Change by logback.xml <a id="logback-change-location"></a>

Add

```xml
<included>
    <property name="logback.file.directory=/path/to/directory/for/logs" value="true" />
</included>
```

to `logback.xml`.

### Change by command line <a id="jar-change-location"></a>

Use Java's option `java -Dlogback.file.directory=/path/to/directory/for/logs -jar /path/to/waves-all.jar /path/to/config`.

## Altering the network ???

??? mainnet: `/etc/waves/`
??? testnet: `/etc/waves-testnet/`

The default network is [mainnet](/en/blockchain/blockchain-network/main-network).

If you run node from the package, consider using [application.ini](#aini-alter-network) or [logback.xml](#logback-alter-network).

If you run node from jar, use [Java's options](#jar-alter-network).

### Alter by application.ini <a id="aini-alter-network"></a>

Add `-J-Dlogback.network={mainnet|testnet}` to `application.ini`.

### Alter by logback.xml <a id="logback-alter-network"></a>

Add

```xml
<included>
    <property name="logback.network" value="{mainnet|testnet}" />
</included>
```

to `logback.xml`.

### Alter by command line <a id="jar-alter-network"></a>

Use Java's option `java -Dlogback.network={mainnet|testnet} -jar /path/to/waves-all.jar /path/to/config`.

## Setting logging level for STDOUT

The default level for STDOUT is `INFO`.

If you run node from the package, consider using [application.ini](#aini-set-loglevel) or [logback.xml](#logback-set-loglevel).

If you run node from jar, use [Java's options](#jar-set-loglevel).

### Set by application.ini <a id="aini-set-loglevel"></a>

Add `-J-Dlogback.stdout.level={LEVEL_OF_LOGGING}` to `application.ini`.

### Set by logback.xml <a id="logback-set-loglevel"></a>

Add

```xml
<included>
    <property name="logback.stdout.level={LEVEL_OF_LOGGING}" value="{mainnet|testnet}" />
</included>
```

to `logback.xml`.

### Set by command line <a id="jar-set-loglevel"></a>

Use Java's option `java -Dlogback.stdout.level={LEVEL_OF_LOGGING} -jar /path/to/waves-all.jar /path/to/config`.

## Default limits for file logs

[Initially](https://github.com/wavesplatform/Waves/blob/master/node/src/main/resources/logback.xml), the following limits are set in `logback.xml`:

* Logs older than 30 days are deleted.
* If total size of logs are larger than 1Gb, oldest logs are deleted to fit this limit.

To change this limits, add the following lines in `logback.xml`:

```xml
<included>
???
    <maxHistory>30</maxHistory>
    <totalSizeCap>1GB</totalSizeCap>
</included>
```

??? как насчёт application.ini и коммандной строки

## Enable logging to JSON files

Prior to enabling logging to JSON, define your own logging configuration in `logback.xml`.

If you run node from the package, consider using [application.ini](#aini-enable-json) or [logback.xml](#logback-enable-json).

If you run node from jar, use [Java's options](#jar-enable-json).

### Enable by application.ini <a id="aini-enable-json"></a>

Add `-J-Dlogback.configurationFile=/path/to/your/logback.xml` to `application.ini`.

### Alter by logback.xml <a id="logback-alter-network"></a>


??? путь к этому же файлу?

Add

```xml
<included>
    <property name="logback.configurationFile" value="/path/to/your/logback.xml" />
</included>
```

to `logback.xml`.

### Alter by command line <a id="jar-alter-network"></a>

Use Java's option `java -Dlogback.configurationFile=/path/to/your/logback.xml -jar /path/to/waves-all.jar /path/to/config`.

## Levels of logging <a id="loglevels"></a>

1. `OFF` - logging is disabled. It's useful when you want to disable file or STDOUT logs;
2. `ERROR` - severe errors. Please read this messages; 
3. `WARN` - warning messages. The Node can work, but it'd better to check the problem;
4. `INFO` - important messages. System works normally;
5. `DEBUG` - an information for debugging;
6. `TRACE` - an information for debugging, when DEBUG doesn't help \(rare cases\).

Lower levels of logging are included the higher. For example, `DEBUG` includes itself and all higher levels: `INFO`, `WARN` and `ERROR`.
