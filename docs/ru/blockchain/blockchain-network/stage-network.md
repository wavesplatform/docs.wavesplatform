# Экспериментальная сеть

**Экспериментальная сеть**, **stage network** или **stagenet** - блокчейн Waves, который используется для тестирования экспериментальных функциональностей.

Ранее, перед развертыванием на mainnet, новые функции Waves публиковались на [testnet](/ru/blockchain/blockchain-network/test-network). При этом пользователи, разрабатывающие проекты на testnet, могли сталкиваться с проблемами, вызванными откатами [высоты блокчейна](/ru/blockchain/blockchain/blockchain-height), которые выполнялись из-за нестабильной работы экспериментальной функциональности. Чтобы предотвратить эти проблемы, теперь экспериментальные функциональности будут публиковаться на stagenet.

Testnet и mainnet будут иметь одинаковые версии и будут обновляться одновременно. Откатов на testnet не будет.

Токены stagenet, так же как и токены testnet, не будут иметь фактической ценности, и получить их также можно будет бесплатно.

Чтобы использовать stagenet, выполните следующие действия:

* Скачайте [последнюю версию ноды](https://github.com/wavesplatform/Waves/releases)
* Скачайте [waves-stagenet.conf](https://github.com/wavesplatform/Waves/blob/master/node/waves-stagenet.conf) (Пропустите этот шаг, если вы используете deb-пакет для развертывания ноды)
* Установите ноду согласно [руководству](/ru/waves-node/how-to-install-a-node/how-to-install-a-node)

После этого нода начнёт скачивать блоки. Чтобы ускорить процесс, вы можете импортировать блоки согласно [руководству](/ru/waves-node/options-for-getting-actual-blockchain/).

Если вы хотите стать майнером на stagenet, отправьте [запрос](https://wavesplatform.atlassian.net/servicedesk/customer/portal/11/create/178) чтобы получить токены WAVES для лизинга.

Получить токены для stagenet-аккаунта можно при помощи [Waves Explorer](https://stagenet.wavesexplorer.com/stagenet/faucet).

Stagenet также доступен на:

* [Waves Explorer](https://stagenet.wavesexplorer.com/stagenet)
* [Waves IDE](https://stagenet.waves-ide.com)
* [Waves Keeper](/ru/ecosystem/waves-keeper/)

Если у вас остались вопросы по stagenet, вы можете задать их в Discord на [канале stagenet](https://discordapp.com/channels/420933539375087617/615843628618612746).
