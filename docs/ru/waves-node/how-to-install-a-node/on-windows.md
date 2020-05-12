# Установить ноду на Windows

В этой описана установка ноды Waves на компьютер под управлением Windows.
Сначала вы устанавливаете Java, а затем саму ноду.

## Установка OpenJDK 8

**Примечание:** Не устанавливайте OpenJDK 8, если у вас уже установлен OpenJDK 11. Установка ноды поддерживается в обеих версиях 8 и 11.

Установите OpenJDK 8, как описано в [документации](https://access.redhat.com/documentation/en-us/openjdk/8/html/openjdk_8_for_windows_getting_started_guide/getting_started_with_openjdk_for_windows).

Откройте командную строку и проверьте версию JDK с помощью следующей команды:

```bash
java -version
```

Если вы видите такой результат, перейдите к следующему шагу:

```bash
java version "1.8.0_201"
Java(TM) SE Runtime Environment (build 1.8.0_201-b09)
Java HotSpot(TM) 64-Bit Server VM (build 25.201-b09, mixed mode)
```

## Загрузка пакета Waves и настройка приложения

Загрузите [последнюю версию](https://github.com/wavesplatform/Waves/releases) архива `waves.jar` и файла конфигурации [.conf](https://github.com/wavesplatform/Waves/tree/master/node) (для Mainnet, Testnet или Stagenet).

Отредактируйте файл конфигурации. **Это очень важно! От конфигурации зависит безопасность вашего кошелька и средств!** Подробнее в статье [Конфигурация ноды](/en/waves-node/node-configuration).

Запустите консоль, перейдите в папку с файлом `.jar` и запустите ноду с помощью следующей команды (замените `{*}` именем файла):

```bash
java -jar {*}.jar {*}.conf
```

## Дополнительная безопасность

Для дополнительной безопасности рекомендуется хранить кошелек и файл конфигурации в зашифрованном разделе диска. Можно использовать, например, [BitLocker](https://technet.microsoft.com/en-us/library/cc731549%28v=ws.10%29.aspx), [TrueCrypt](http://truecrypt.sourceforge.net/), [AxCrypt](https://www.axcrypt.net/), [FreeOTFE](https://sourceforge.net/projects/freeotfe.mirror/), [GostCrypt](https://www.gostcrypt.org/), [VeraCrypt](https://veracrypt.codeplex.com/) и пр. **Выбирайте приложение на свой страх и риск!**

Также, возможно, вы захотите ограничить использование зашифрованных папок для некоторых пользователей. Подробно об этом [тут](https://technet.microsoft.com/en-us/library/cc754344%28v=ws.11%29.aspx).

Если вы хотите использовать RPC, необходимо защитить Windows с помощью встроенного или любого другого файрвола. Подробно об этом [тут](https://www.howtogeek.com/112564/how-to-create-advanced-firewall-rules-in-the-windows-firewall/). Если ваш сервер находится в публичном доступе и вы хотите использовать RPC, задействуйте только определенные методы, используя [Nginx's proxy\_pass module](http://nginx.org/ru/docs/http/ngx_http_proxy_module.html), и не забудьте указать хеш API-ключа в файле конфигурации Waves.

Не забывайте своевременно обновлять операционную систему и антивирусное программное обеспечение.
