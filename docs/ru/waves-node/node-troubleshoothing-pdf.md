# Устранение неполадок ноды (PDF)

В данной статье описаны следующие известные неполадки ноды Waves и возможные решения:

* [Нода не набирает высоту и не отвечает на запросы](#нода-не-набирает-высоту-и-не-отвечает-на-запросы)
* [Нода набирает высоту и отвечает на запросы, но возможно оказалась на форке](#anchor1)
* [Проблемы, связанные с утечкой памяти (OutOfMemoryError)](#anchor2)

## Нода не набирает высоту и не отвечает на запросы

* Убедитесь, что нода запущена. Если команда `ps aux | egrep '[w]aves'` возвращает пустой вывод, запустите ноду с помощью команды:

   ```bash
   sudo systemctl start waves
   ```

* Убедитесь, что на диске не закончилось место с помощью команды:

   ```bash
   df -h --output=avail /
   ```

* Убедитесь, что нода работает с корректным файлом конфигурации. Подробно про файл конфигурации в статье: https://docs.wavesprotocol.org/en/waves-node/node-configuration.

* Если в `waves.log` присутствует строка с ошибкой `Storage version $version is not compatible with expected version $StorageVersion! Please, rebuild node's state, use import or sync from scratch.`, выполните действия описанные в статье: https://docs.wavesprotocol.org/en/waves-node/options-for-getting-actual-blockchain/state-downloading-and-applying.

   Быстро найти ошибку в логе можно с помощью команды:

   ```bash
   sudo grep -e 'Storage version .* is not compatible' /var/log/waves/waves.log`
   ```

## Нода набирает высоту и отвечает на запросы, но возможно оказалась на форке <a name="anchor1"></a>

### Выявление форка с помощью Chaincmp

Для выявления форка можно использовать утилиту Chaincmp. Для этого:

1. Выполните команду:

   ```bash
   git clone https://github.com/wavesplatform/gowaves.git
   ```

2. Выполните команду:

   ```bash
   cd /gowaves/cmd/chaincmp
   ```

3. Выполните команду:

   ```bash
   go run chaincmp.go -n $YOUR_NODE_URL
   ```

**Примечание**: по умолчанию сравнение происходит с https://nodes.wavesnodes.com/, для сравнения с другой нодой/пулом нод введите соответствующий url после флага `-r`.

Подробнее по ссылке: https://github.com/wavesplatform/gowaves/blob/master/cmd/chaincmp/README.md.

### Альтернативный способ выявления форка

1. Сравните подпись (signature) блока на предпоследней высоте на вашей ноде и подпись блока на той же высоте на нодах из официального пула нод с помощью команды:

   ```bash
   curl -X GET "https://nodes.wavesnodes.com/blocks/headers/at/{last - 1 высота}" | less
   ```

   **Примечание**: для нод версии 1.2 и выше, signature = id.

   Если подписи отличаются, значит ваша нода оказалась на форке. В таком случае:

2. Определите последний общий блок у которого высота и подпись соответствуют такому же блоку на ноде из официального пула нод.
3. В логах найдите запись о первом непринятом блоке после последнего общего блока с помощью команды:

   ```bash
   grep -A 1000 "Appended Block({signature}" | grep -m 1 "Error appending .* GenericError(Block Block(" waves.log
   ```

   где {signature} - signature/id последнего общего блока.

4. Найдите ошибку, описывающуя причину непринятия блока в конце записи.

   Устранение форка необходимо выполнить в случае, если отображаются ошибки:
   i. `Block time 1589438183183 less than expected`. Данная ошибка косвенно говорит о том, что у майнера недостаточно WAVES на балансе для майнинга блока.
   ii.`Attempt to transfer unavailable funds: Transaction application leads to negative waves balance` (и другие ошибки, в тексте которых присутствует слово `balance`).

### Устранение форка

* Выполните действия описанные в статье: https://docs.wavesprotocol.org/en/waves-node/options-for-getting-actual-blockchain/state-downloading-and-applying.
* Если в логах отображается ошибка, отличная от указанных в пункте 4 выше, отправьте `waves.log` (либо кусок лога от записи `Appended Block({signature}` до ошибки) команде Waves.

   **Примечание**: ошибка `BlockAppendError (Block is not a child of last block ...)` не может привести к форку. На такие записи не стоит обращать внимания. Логирование подобных случаев будет доработано в будущих версиях ноды.

## Проблемы, связанные с утечкой памяти (OutOfMemoryError) <a name="anchor2"></a>

Если нода остановилась и не отвечает на запросы, проверьте логи на наличие ошибки `OutOfMemoryError`:

i. Ошибка может отображаться в логе за текущий день в файле `/var/log/waves/waves.log`. Найти ошибку в этом логе можно с помощью команды:

```bash
sudo tail -n +1 /var/log/waves/waves.log | grep "OutOfMemory"
```

ii. Ошибка может отображаться в логах за предыдущие дни в архивированных файлах `/var/log/waves/*.gz`. Найти ошибку в этих логах можно с помощью команды:

```bash
sudo zgrep -i "OutOfMemory" /var/log/waves/*
```

Если вы нашли ошибку `OutOfMemoryError` и память, занятая процессом (heap) превысила `maximum heap size`, как описано ниже в шаге 2-4, выполните диагностику утечек памяти.

### Диагностика утечек памяти

1. Проверьте, есть ли в `syslog` событие о том, что этот процесс был убит OOM-Killer'ом с помощью команды `dmesg | egrep -i 'killed process'` (пустой вывод означает, что процесс не убит). Если процесс убит, перезапустите его с помощью команды:

   ```bash
   sudo systemctl restart waves
   ```

2. Если процесс не убит OOM-Killer'ом, снимите `heap dump` c помощью команды:

   ```bash
   sudo -u $user_запустивший_процесс jmap -histo:live $PID
   ```

   **Примечание**: Чтобы узнать `PID` нужного процесса, выполните команду: `pgrep -f waves`

   В данном примере размер `heap` ~ 378.6 Мбайт:

   ![1](_assets/node-troubleshooting-001.png)

3. Если размер heap меньше чем `maximum heap size`, отправьте команде Waves heap dump. `Maximum heap size` можно посмотреть в файле `/etc/waves/application.ini`, параметр `-J-Xmx`. **Например**: `-J-Xmx2g` означает, что `maximum heap size` = 2 Гбайт.

4. Если размер heap больше чем `maximum heap size`, перезапустите процесс с помощью команды:

   ```bash
   sudo systemctl restart waves
   ```

**Так же возможен следующий сценарий**:

При запуске ноды с помощью команды `sudo systemctl start waves` утилита `htop` показывает, что занятая память резко растёт:
![2](_assets/node-troubleshooting-002.png)

После этого процесс waves выключается, в `journalctl`:
![3](_assets/node-troubleshooting-003.png)

**Решение**:

1. Сразу после запуска процесса снимите `heap dump` с помощью команды:

   ```bash
   sudo -u $user_запустивший_процесс jmap -dump:format=b,file=heap.bin3 $PID
   ```

   **Примечание**: чтобы узнать `PID` нужного процесса, выполните команду: `pgrep -f waves`.

2. Найдите лог `/tmp/hs_err_pid{pid}.log`, где `{pid}` = pid процесса waves.
3. Отправьте команде Waves файл c `heap dump` из первого шага (`heap.bin3`) и лог `hs_err_pid{pid}.log` из второго шага.

### Как снять thread dump процесса

В некоторых случаях команде Waves для диагностики утечки памяти может потребоваться thread dump.

Снять thread dump процесса можно с помощью стандартной java-утилиты `jstack -F $PID > thread_dump.txt` (`pid` процесса - `pgrep -f waves`).
