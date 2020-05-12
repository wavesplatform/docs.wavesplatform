# Развернуть ноду в Яндекс.Облаке

В Яндекс.Облаке можно запустить ноду Waves для генерации блоков или разработки и тестирования децентрализованных приложений. Обладая нодой Waves в облаке, вы можете запустить собственный блокчейн, создавать свои токены, быстро генерировать и обрабатывать транзакции.

1.&nbsp;В [консоли](https://console.cloud.yandex.ru/) Яндекс.Облака перейдите в нужную группу ресурсов.

![](./_assets/resource-group.png)

2.&nbsp;В правом верхнем углу экрана нажмите **Создать ресурс**. Выберите **Виртуальная машина**.

![](./_assets/create-resource.png)

3.&nbsp;Зайдите в **Каталог образов**.

![](./_assets/catalog.png)

4.&nbsp;Введите **Waves Node** в строке поиска. Выберите образ Waves Node.

![](./_assets/search-bar.png)

5.&nbsp;Задайте параметры виртуальной машины в соответствии с [системными требованиями](/ru/waves-node/how-to-install-a-node/how-to-install-a-node#системные-требования).

![](./_assets/virtual-machine-parameters.png)

6.&nbsp;[Сгенерируйте](https://cloud.yandex.ru/docs/compute/operations/vm-connect/ssh#creating-ssh-keys) пару SSH-ключей. Введите открытый ключ пары в поле **SSH-ключ**. Завершите создание виртуальной машины, нажав **Создать ВМ**.

![](./_assets/create-vm.png)

7.&nbsp;Убедитесь, что виртуальная машина запущена, [подключившись](https://cloud.yandex.ru/docs/compute/operations/vm-connect/ssh#vm-connect) к ней по SSH. IP-адрес машины скопируйте из панели управления Яндекс.Облака.

```bash
ssh <имя_пользователя>@<ip_адрес_виртуальной_машины>
```

8.&nbsp;В браузере перейдите на страницу `http://<ip_адрес_виртуальной_машины>:8080` для запуска Docker-контейнера с [Waves Node](https://github.com/wavesplatform/Waves).

![](./_assets/docker-container.png)

9.&nbsp;Задайте необходимые настройки. По окончании нажмите **Run my node!** Запустится Docker-контейнер с параметрами, которые вы указали.

10.&nbsp;Убедитесь, что контейнер запущен, выполнив в консоли виртуальной машины команду [docker ps](https://docs.docker.com/engine/reference/commandline/ps/).

```bash
sudo docker ps
```
