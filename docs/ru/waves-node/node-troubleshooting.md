# Устранение неполадок

В этой статье описаны известные неполадки ноды Waves и возможные решения.

## Одновременно открытые файлы

   Если на вашем компьютере с операционной системой Linux, на котором работает нода Waves, также выполняется много других задач, в некоторых случаях ваша нода может аварийно завершить работу со следующей ошибкой:

   ```bash
   Caused by: org.iq80.leveldb.DBException: IO error: /var/lib/waves/data/33837022.ldb: Too many open files
   ```

   Ошибка вызвана ограничением операционной системы по количеству одновременно открытых файлов.

   Решение состоит в том, чтобы изменить значение следующих параметров в файле `/etc/security/limits.conf` на `65536`:

   ```bash
    * soft nofile 24000 #soft limits
    * hard nofile 65000 #hard limits
   ```

   и добавить следующую строку в файл `/etc/systemd/system.conf`:

   ```bash
   DefaultLimitNOFILE=65536
   ```

После этого перезагрузите компьютер.

## Нода не набирает высоту и не отвечает на запросы

1. Проверьте, что процесс запущен. Выполните `ps aux | egrep '[w]aves'`, и если получили пустой вывод, то выполните `sudo systemctl start waves`.
2. Проверьте, не закончилось ли место на диске с помощью команды `df -h --output=avail /`.
3. Проверьте, что нода запускается с корректным конфигом. https://docs.wavesprotocol.org/en/waves-node/node-configuration
4. Если команда `sudo grep -e` возвращает строчку `Storage version $version is not compatible with expected version $StorageVersion! Please, rebuild node's state, use import or sync from scratch.` в логе `/var/log/waves/waves.log`, необходимо выполнить ребилд стейта, пошагово описанный в статье https://docs.wavesprotocol.org/en/waves-node/options-for-getting-actual-blockchain/state-downloading-and-applying.

## Другие проблемы

Если вы хотите сообщить о других проблемах, связанных с нодой, или обсудить их с сообществом Waves, см. главу [Будьте в курсе](/ru/keep-in-touch).
