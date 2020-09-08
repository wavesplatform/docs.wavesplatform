# Генерация блока FAQ

В данной статье описаны возможные решения проблем, которые могут возникнуть в процессе генерации блоков.

## Моя нода работает, но не генерирует блоки

**Вопрос**: Моя нода работает нормально (добавляет микроблоки) и подписи высоты блоков совпадают с [wavesexplorer.com](https://wavesexplorer.com/), значит нода не находится на форке, однако нода не генерирует блоки. В файле `waves.log` есть сообщения, коотрые указываеют на то, что нода будет пытаться генерировать блоки через xxx секунд (`Next attempt for acc=<your_node_address> in <xxx> seconds`), но фактически генерация блоков не происходит. Что мне делать?

**Ответ**: Ваша нода может не генерировать блоки потому, что генерация блоков происходит с определенной вероятностью. Такие сообщения (`Next attempt for acc=<your_node_address> in <xxx> seconds`) говорят о том, что ваша нода запланировала генерацию блока согласно алгоритму [LPoS](/ru/blockchain/glossary#lpos) после получения последнего блока. Тем не менее, всегда есть шанс, что другая нода запланировала генерацию блока на более раннее время. Вы можете использовать сайт [wavesexplorer.com](https://wavesexplorer.com/) для проверки временных отметок и ID ноды, которая сгенерировала блок. Шансы на генерацию блока прямо пропорциональны количеству WAVES на балансе и количеству WAVES переданных в стейкинг генерирующей ноде.

**Примечание**: Используйте сайт [dev.pywaves.org](https://dev.pywaves.org/) для обзора эффективности генерирующих нод (коэффициент эффективности = количество сгенерированных блоков / оценочное количество сгенерированных блоков). Пожалуйста, имейте ввиду, что краткосрочные (ежедневные) расчеты предоставлены только для ознакомления.

**Пример**: в 11:59:20 ваша нода запланировала попытку сгенерировать блок в 12:00:05, но при проверке на сайте [wavesexplorer.com](https://wavesexplorer.com/) вы обнаружили, что другая нода сгенерировала блок в 12:00:03.

Вы можете найти сообщения о попытках сгенерировать блоки и проверить какая нода в результате сгенерировала блоки в файле `waves.log`. Если ваша нода установлена из Deb-пакета, по умолчанию лог файл расположен в папке `/var/log/waves/` в других случаях `${waves.directory}/logs/`. Подробнее про логирование в статье [Логирование](/ru/waves-node/logging-configuration).

Чтобы найти в логе `waves.log` записи с попытками генерации блоков выполните следующую grep команду:

**Примечание**: По умолчанию файлы логов может читать только пользователь, от имени которого запущена нода.

```bash
sudo grep "Next attempt\|Forging\| Block(" /var/log/waves/waves.log
```

**Пример ответа с неудачной попыткой**:

```bash
2020-09-07 10:27:55,076 DEBUG [appender-52] c.w.mining.MinerImpl - Next attempt for acc=3PMj3yGPBEa1Sx9X4TBAFeJCMMaE3wvKR4N in 508.710 seconds
2020-09-07 10:27:55,147 DEBUG [ecution-context-global-48] c.w.s.a.BlockAppender$ - [2ecdf572 134.209.30.86:56992] Appended Block(DeB2bwPeJkpDMpLEvHm8MRg3axpYtwupMZi5uRigrLZo,CPX3P6rvYttUhUFtM2MTHdJ4AALFyfdfDey5oH9CGJXP,3PJEPHsDNtfDRxxaja8wEp3mCXp5kpLYsLS,1599474474614,[])
2020-09-07 10:29:50,072 DEBUG [appender-52] c.w.mining.MinerImpl - Next attempt for acc=3PMj3yGPBEa1Sx9X4TBAFeJCMMaE3wvKR4N in 457.722 seconds
2020-09-07 10:29:50,161 DEBUG [ecution-context-global-48] c.w.s.a.BlockAppender$ - [7895562c 173.249.1.184:60940] Appended Block(2fXUoLdh4XmDkuTfdZ7bPyvubBfEdhQ989X5P27nbHby,8hs8fTy52sJyzJwxMb75A38JAxsEPjycMTyfCbbrW9XB,3PEFQiFMLm1gTVjPdfCErG8mTHRcH2ATaWa,1599474589929,[],600000000)
```

В данном примере нода `3PMj3yGPBEa1Sx9X4TBAFeJCMMaE3wvKR4N` получила блок `DeB2bwPeJkpDMpLEvHm8MRg3axpYtwupMZi5uRigrLZo` и в `2020-09-07 10:27:55,076` запланировала попытку сгенерировать следующий блок через `508.710` секунд (~ в 10:34:23). Также в примере указано, что обработка блока `DeB2bwPeJkpDMpLEvHm8MRg3axpYtwupMZi5uRigrLZo` завершена и после этого нода получила следующий проверенный блок `2fXUoLdh4XmDkuTfdZ7bPyvubBfEdhQ989X5P27nbHby` сгенерированный нодой `3PEFQiFMLm1gTVjPdfCErG8mTHRcH2ATaWa` в `2020-09-07 10:29:50,072` (раньше чем нода `3PMj3yGPBEa1Sx9X4TBAFeJCMMaE3wvKR4N` планировала сгенерировать следующий блок). В данном случае нода `3PMj3yGPBEa1Sx9X4TBAFeJCMMaE3wvKR4N` не сгенерировала блок в 10:34:23 потому, что блок был сгенерирован ранее другой нодой `3PEFQiFMLm1gTVjPdfCErG8mTHRcH2ATaWa`.

**Пример ответа с удачной попыткой**:

```bash
2020-09-06 04:06:13,517 DEBUG [appender-52] c.w.mining.MinerImpl - Next attempt for acc=3PMj3yGPBEa1Sx9X4TBAFeJCMMaE3wvKR4N in 41.305 seconds
2020-09-06 04:06:13,556 DEBUG [ecution-context-global-48] c.w.s.a.BlockAppender$ - [560c392d 5.189.182.6:52504] Appended Block(3bQwytTjwQCkQs2DWuoR5oqNKFtjAyDSftHQXrW2ALLQ29MpVBuX96231JW9joTGsYbbuyHaEuhrfUVvgFxdnJBs,2rTRaJqMrp2L3HvUfJ4FRQQGZGPM23kHVdhy1pAQucHLAvyG7QEHy6mMw9MfV7cjf7r2BDWYeyv7Eih3Uz83yVog,3P2HNUd5VUPLMQkJmctTPEeeHumiPN2GkTb,1599365173456,[],600000000)
2020-09-06 04:06:54,829 DEBUG [block-miner-35] c.w.mining.MinerImpl - Forging with <3PMj3yGPBEa1Sx9X4TBAFeJCMMaE3wvKR4N>, Time 41369 > Estimated Time 41361, balance 3485157657499, prev block 2qNW6zpp419atqZbstbwnAijUAmk55ggWiSvFLu6eDDSMuMciMta9f8aNXWh1HybQe2i2R2KwMcRrhHwd8by2Ya7 at 2228616 with target 61
2020-09-06 04:06:54,842 DEBUG [appender-52] c.w.mining.MinerImpl - Next attempt for acc=3PMj3yGPBEa1Sx9X4TBAFeJCMMaE3wvKR4N in 412.766 seconds
2020-09-06 04:06:54,887 DEBUG [block-miner-35] c.w.mining.MinerImpl - Forged and applied Block(5sWqTZbHP2p5T1ss31FnGx4s48an8Uf1czTbcHrkBwomRnN9j4HU9zw4Y7YvB1yWeHx3a17up3rF8397Upmbdntm,2qNW6zpp419atqZbstbwnAijUAmk55ggWiSvFLu6eDDSMuMciMta9f8aNXWh1HybQe2i2R2KwMcRrhHwd8by2Ya7,<3PMj3yGPBEa1Sx9X4TBAFeJCMMaE3wvKR4N>,1599365214825,[],2000000000) with cumulative score 525712542186004822512224
```

В данном примере в `2020-09-06 04:06:13,517` нода `3PMj3yGPBEa1Sx9X4TBAFeJCMMaE3wvKR4N` запланировала сгенерировать блок через `41.305` секунд и через `41.305` секунд начала генерировать блок и успешно его сгенерировала (`Forged and applied Block 5sWqTZbHP2p5T1ss31FnGx4s48an8Uf1czTbcHrkBwomRnN9j4HU9zw4Y7YvB1yWeHx3a17up3rF8397Upmbdntm`). В некоторых случаях, блок может быть успешно сгенерирован вашей нодой и это видно в логах, однако это не гарантирует чтоб блок будет принят блокчейном. Есть вероятность, что другая нода сгенерировала блок одновременно с вашей и отправила его в сеть быстрее. Чтобы избежать этого, используйте быстрое интернет-соединение и современное оборудование, которое соответствует системным требованиям ноды. Используйте сайт [wavesexplorer.com](https://wavesexplorer.com/) для проверки временных отметок и ID нод, которые успешно сгенерировали блоки, которые в итоге были добавлены в блокчейн.

**Примечание**: нода может не генерировать блоки из-за проблем с кошельком или файлом конфигурации. В таком случае сообщения `Next attempt acc=...` обычно содержат неправильный адрес (`acc=`).

## Другие проблемы

Если вы хотите сообщить о других проблемах, связанных с нодой, или обсудить их с сообществом Waves, см. главу [Будьте в курсе](/ru/keep-in-touch/).
