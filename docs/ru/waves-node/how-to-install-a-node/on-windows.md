# Установка ноды на Windows

Чтобы запустить ноду Waves, необходимо выполнить два шага:

1. Установить OpenJDK 8.

2. Загрузить файлы Waves и настроить приложение.

## Установка OpenJDK 8

Проверьте версию JDK с помощью команды:

```bash
java -version
```

**Примечание**: Не устанавливайте OpenJDK 8, если у вас уже установлена версия OpenJDK 11. Приложение ноды поддерживает версии 8 и 11.

Загрузите и установите [OpenJDK 8](https://access.redhat.com/documentation/en-us/openjdk/8/html/openjdk_8_for_windows_getting_started_guide/getting_started_with_openjdk_for_windows).

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

## Загрузка пакета Waves и настройка приложения

[Загрузите последнюю версию](https://github.com/wavesplatform/Waves/releases) waves.jar и обязательного .conf файла конфигурации (для mainnet или testnet) в любую папку, например `~/waves`.

Отредактируйте файл конфигурации waves.conf, **это очень важно! От этого зависит безопасность вашего кошелька и средств!**

Откройте файл конфигурации своим любимым текстовым редактором, налейте в чашку вкусный чай и изучите статью [Конфигурация ноды](/ru/waves-node/node-configuration).

Запустите командную строку Windows, перейдите в папку с файлом jar с помощью команды: `cd C:/waves` и запустите ноду следующей командой: `java -jar waves.jar waves.conf`.

## Дополнительная безопасность

Для дополнительной безопасности рекомендуется хранить приложение кошелек и файл конфигурации в зашифрованном разделе диска. Можно использовать, например, [BitLocker](https://technet.microsoft.com/en-us/library/cc731549%28v=ws.10%29.aspx), [TrueCrypt](http://truecrypt.sourceforge.net/), [AxCrypt](http://www.axcrypt.net/), [FreeOTFE](https://sourceforge.net/projects/freeotfe.mirror/), [GostCrypt](https://www.gostcrypt.org/), [VeraCrypt](https://veracrypt.codeplex.com/) и пр. **Выбирайте приложение на свой страх и риск!**

Также, возможно, вы захотите ограничить использование зашифрованных папок для некоторых пользователей. Подробно об этом [тут](https://technet.microsoft.com/en-us/library/cc754344%28v=ws.11%29.aspx).

Если вы хотите использовать RPC, необходимо защитить Windows с помощью встроенного или любого другого файервола. Подробно об этом [тут](http://www.howtogeek.com/112564/how-to-create-advanced-firewall-rules-in-the-windows-firewall/). Если ваш сервер находится в публичном доступе и вы хотите использовать RPC, задействуйте только определенные методы, используя [Nginx's proxy\_pass module](http://nginx.org/ru/docs/http/ngx_http_proxy_module.html)и не забудьте назначить API key хэш в файле конфигурации Waves.

Не забывайте своевременно обновлять операционную систему и программное обеспечение системы безопасности.
