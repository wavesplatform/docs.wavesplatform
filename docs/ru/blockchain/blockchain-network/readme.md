# Сети блокчейна: Mainnet, Testnet, Stagenet

Сеть блокчейна состоит из [нод](/ru/blockchain/node/), взаимодействующих друг с другом.

На базе протокола Waves развернуты несколько сетей блокчейна:

* Mainnet — основная сеть Waves. На Mainnet криптовалюты имеют реальную ценность, а владельцы нод получают вознаграждение за генерацию блоков.
* Testnet — сеть для отладки приложений. Testnet предоставляет те же функциональности, что и Mainnet. Однако токены WAVES предоставляются бесплатно, так что на Testnet вы можете попробовать свой проект без риска потерять реальные деньги.
* Stagenet — экспериментальная сеть. На Stagenet тестируются новые функциональности протокола Waves, поэтому возможны откаты высоты блокчейна. Если вы хотите запустить Stagenet-ноду, получить токены в лизинг или задать вопрос, присоединяйтесь к каналу [stagenet](https://discord.gg/3g8XR6B) в Discord.

Кроме того, на базе протокола WAVES вы можете создать собственную сеть.

:warning: Обратите внимание: данные блокчейна (аккаунты, транзакции, токены) разные в разных сетях.

## Подключение ноды к сети блокчейна

К какой сети блокчейна подключается нода, зависит от настройки `waves.blockchain.type` в файле конфигурации ноды. Подробнее о файле конфигурации см. в разделе [Конфигурация ноды](/ru/waves-node/node-configuration).

Способы установки ноды описаны в разделе [Установить ноду Waves](/ru/waves-node/how-to-install-a-node/how-to-install-a-node). Запуск собственной сети блокчейна описан в разделе [Собственный (сustom) блокчейн](/ru/waves-node/private-waves-network).

## Байт сети

Байт сети — символ, который передается нодами при установлении соединения (рукопожатии) и не позволяет ноде подключаться к другим сетям блокчейна.

Байт сети также используется при формировании адресов аккаунтов, поэтому адрес в одной сети блокчейна не может использоваться в другой сети.

| Сеть блокчейна | Байт сети |
| :--- | :--- |
| Mainnet | `W` или 87 (ASCII-код символа `W`) |
| Testnet | `T` или 84 (ASCII-код символа `T`) |
| Stagenet | `S` или 83 (ASCII-код символа `S`) |
| Custom | Символ, выбранный создателем сети и указанный в настройке `address-scheme-character` |

## Инструменты

Приложения, составляющие экосистему Waves, предоставляют возможность работать с разными сетями блокчейна.

| Инструмент | Mainnet | Testnet | Stagenet | Custom |
| :--- | :--- | :--- | :--- | :--- |
| API пула публичных нод: адрес для отправки транзакций и чтения данных блокчейна | <https://nodes.wavesnodes.com/> | <https://nodes-testnet.wavesnodes.com/> | <https://nodes-stagenet.wavesnodes.com/> | — |
| Приложение [Waves.Exchange](https://docs.waves.exchange/ru/), разработанное командой Waves.Exchange | <https://waves.exchange/> | <https://testnet.waves.exchange/> | <https://stagenet.waves.exchange/> | — |
| API матчера | <https://matcher.waves.exchange/> | <https://matcher-testnet.wavesnodes.com/> | <https://matcher-stagenet.wavesplatform.com/> | — |
| [Waves Explorer](/ru/ecosystem/waves-explorer/about-waves-explorer) | <https://wavesexplorer.com/><br>Нажмите ![](./_assets/settings.png) и переключитесь на ![](./_assets/mainnet.png) | <https://wavesexplorer.com/><br>Нажмите ![](./_assets/settings.png) и переключитесь на ![](./_assets/testnet.png) | <https://stagenet.wavesexplorer.com/> | <br>Нажмите ![](./_assets/explorer-custom.png) и укажите URL ноды*, затем переключитесь на Custom<br>Или запустите Waves Explorer из Docker, см. [инструкцию](https://habr.com/ru/company/waves/blog/459773/) |
| Получение токенов | Купить на Waves.Exchange | [Получить 10 WAVES](https://wavesexplorer.com/testnet/faucet) | [Получить 10 WAVES](https://stagenet.wavesexplorer.com/faucet) | — | 
| [Waves IDE](/ru/building-apps/smart-contracts/tools/waves-ide) | <https://waves-ide.com/><br>Нажмите ![](./_assets/ide-settings.png) и отметьте Mainnet | <https://waves-ide.com/><br>Нажмите ![](./_assets/ide-settings.png) и отметьте Testnet | <https://stagenet.waves-ide.com/> | Нажмите ![](./_assets/ide-settings.png), в секции **Custom nodes** укажите URL ноды и байт сети* |
| [Waves Keeper](/ru/ecosystem/waves-keeper/) | В окне Waves Keeper переключитесь на ![](./_assets/keeper-mainnet.png) | В окне Waves Keeper переключитесь на ![](./_assets/keeper-testnet.png) | В окне Waves Keeper переключитесь на ![](./_assets/keeper-stagenet.png) |В окне Waves Keeper переключитесь на ![](./_assets/keeper-custom.png). Укажите URL ноды и матчера

\* Подходит только для https-нод.