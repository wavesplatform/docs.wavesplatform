// const rootPath = 'https://docs.wavesplatform.com/';
const localePath = '/ru/';
const blockchainPath = localePath + 'blockchain/';
const nodePath = localePath + 'waves-node/';
const buildingAppsPath = localePath + 'building-apps/';
const programmingPath = buildingAppsPath + 'smart-contracts/';
const sdkPath = buildingAppsPath + 'waves-api-and-sdk/';
const ridePath = localePath + 'ride/';
const rideV5Path = localePath + 'ride/v5/';
const ecosystemPath = localePath + 'ecosystem/';
const keepInTouchPath = localePath + 'keep-in-touch/';

module.exports = {
  [blockchainPath]: [
    {
      title: 'Почему Waves',
      path: blockchainPath,
    },
    {
      title: 'Основные понятия',
      path: blockchainPath + 'blockchain',
    },
    {
      title: 'Аккаунт',
      path: blockchainPath + 'account',
      children: [
        {
          title: 'Создание аккаунта',
          path: blockchainPath + 'account/create',
        },
        {
          title: 'Адрес',
          path: blockchainPath + 'account/address',
        },
        {
          title: 'Баланс аккаунта',
          path: blockchainPath + 'account/account-balance',
        },
        {
          title: 'Хранилище данных аккаунта',
          path: blockchainPath + 'account/account-data-storage',
        },
        {
          title: 'Псевдоним',
          path: blockchainPath + 'account/alias',
        },
        {
          title: 'dApp и смарт-аккаунт',
          path: blockchainPath + 'account/dapp',
        },
      ],
    },
    {
      title: 'Токен (ассет)',
      path: blockchainPath + 'token',
      children: [
        {
          title: 'NFT: невзаимозаменяемый токен',
          path: blockchainPath + 'token/non-fungible-token',
        },
        {
          title: 'Смарт-ассет',
          path: blockchainPath + 'token/smart-asset',
        },
        {
          title: 'ID токена',
          path: blockchainPath + 'token/token-id',
        },
        {
          title: 'WAVES',
          path: blockchainPath + 'token/waves',
        },
      ],
    },
    {
      title: 'Транзакция',
      path: blockchainPath + 'transaction',
      children: [
        {
          title: 'Комиссия за транзакцию',
          path: blockchainPath + 'transaction/transaction-fee',
          children: [
            {
              title: 'Спонсирование комиссии',
              path: blockchainPath + 'waves-protocol/sponsored-fee',
            },
          ]
        },
        {
          title: 'Подпись и подтверждения',
          path: blockchainPath + 'transaction/transaction-proof',
        },
        {
          title: 'Типы транзакций',
          path: blockchainPath + 'transaction-type',
          children: [
            {
              title: 'Вызов скрипта',
              path: blockchainPath + 'transaction-type/invoke-script-transaction',
            },
            {
              title: 'Выпуск',
              path: blockchainPath + 'transaction-type/issue-transaction',
            },
            {
              title: 'Генезис',
              path: blockchainPath + 'transaction-type/genesis-transaction',
            },
            {
              title: 'Данные',
              path: blockchainPath + 'transaction-type/data-transaction',
            },
            {
              title: 'Довыпуск',
              path: blockchainPath + 'transaction-type/reissue-transaction',
            },
            {
              title: 'Закрытие лизинга',
              path: blockchainPath + 'transaction-type/lease-cancel-transaction',
            },
            {
              title: 'Лизинг',
              path: blockchainPath + 'transaction-type/lease-transaction',
            },
            {
              title: 'Массовый перевод',
              path: blockchainPath + 'transaction-type/mass-transfer-transaction',
            },
            {
              title: 'Обмен',
              path: blockchainPath + 'transaction-type/exchange-transaction',
            },
            {
              title: 'Обновление информации ассета',
              path: blockchainPath + 'transaction-type/update-asset-info-transaction',
            },
            {
              title: 'Перевод',
              path: blockchainPath + 'transaction-type/transfer-transaction',
            },
/*            {
              title: 'Продолжение',
              path: blockchainPath + 'transaction-type/continuation-transaction',
            }, */
            {
              title: 'Сжигание токена',
              path: blockchainPath + 'transaction-type/burn-transaction',
            },
            {
              title: 'Cоздание псевдонима',
              path: blockchainPath + 'transaction-type/create-alias-transaction',
            },
            {
              title: 'Спонсирование',
              path: blockchainPath + 'transaction-type/sponsor-fee-transaction',
            },
            {
              title: 'Установка скрипта',
              path: blockchainPath + 'transaction-type/set-script-transaction',
            },
            {
              title: 'Установка скрипта ассета',
              path: blockchainPath + 'transaction-type/set-asset-script-transaction',
            },
          ]
        },
        {
          title: 'Валидация транзакции',
          path: blockchainPath + 'transaction/transaction-validation',
        },
      ]
    },
    {
      title: 'Mainnet, Testnet, Stagenet',
      path: blockchainPath + 'blockchain-network',
    },
    {
      title: 'Нода',
      path: blockchainPath + 'node',
      children: [
        {
          title: 'Генерирующая нода',
          path: blockchainPath + 'node/mining-node',
        },
        {
          title: 'Валидирующая нода',
          path: blockchainPath + 'node/validating-node',
        },
        {
          title: 'Доход генератора блока',
          path: blockchainPath + 'mining',
        },
        {
          title: 'Вознаграждение за генерацию блока',
          path: blockchainPath + 'mining/mining-reward',
        },
        {
          title: 'Лизинг',
          path: blockchainPath + 'leasing',
        },
      ],
    },
    {
      title: 'Блок',
      path: blockchainPath + 'block',
      children: [
        {
          title: 'Генерация блока',
          path: blockchainPath + 'block/block-generation',
          children: [
            {
              title: 'Базовая цель',
              path: blockchainPath + 'block/block-generation/base-target',
            },
            {
              title: '[en] Generation signature',
              path: blockchainPath + 'block/block-generation/generation-signature',
            },
          ],
        },
        {
          title: 'Высота блока',
          path: blockchainPath + 'block/block-height',
        },
        {
          title: 'Подпись блока',
          path: blockchainPath + 'block/block-signature',
        },
        {
          title: 'Временная метка блока',
          path: blockchainPath + 'block/block-timestamp',
        },
        {
          title: 'Корневой хеш транзакций',
          path: blockchainPath + 'block/merkle-root',
        },
        {
          title: 'Блок генезиса',
          path: blockchainPath + 'block/genesis-block',
        },
      ]
    },
    {
      title: 'Оракул',
      path: blockchainPath + 'oracle',
    },
    {
      title: 'Ордер',
      path: blockchainPath + 'order',
    },
    {
      title: 'Протоколы и форматы данных',
      path: blockchainPath + 'waves-protocol',
      children: [
        {
          title: '[en] Cryptographic practical details',
          path: blockchainPath + 'waves-protocol/cryptographic-practical-details',
        },
        {
          title: '[en] Waves-NG solution',
          path: blockchainPath + 'waves-protocol/waves-ng-solution',
        },
        {
          title: 'Протокол Waves-NG',
          path: blockchainPath + 'waves-protocol/waves-ng-protocol',
        },
        {
          title: 'Честный Proof-of-Stake',
          path: blockchainPath + 'waves-protocol/fair-pos',
        },
        {
          title: 'Типы данных блокчейна',
          path: blockchainPath + 'blockchain/blockchain-data-types',
        },
        {
          title: 'Бинарные форматы',
          path: blockchainPath + 'binary-format',
          children: [
            {
              title: 'Бинарный формат адреса',
              path: blockchainPath + 'binary-format/address-binary-format',
            },
            {
              title: 'Бинарный формат псевдонима',
              path: blockchainPath + 'binary-format/alias-binary-format',
            },
            {
              title: 'Бинарный формат блока',
              path: blockchainPath + 'binary-format/block-binary-format',
            },
            {
              title: '[en] Network message binary format',
              path: blockchainPath + 'binary-format/network-message-binary-format',
              children: [
                {
                  title: '[en] Block message binary format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/block-message-binary-format',
                },
                {
                  title: '[en] Checkpoint message binary format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/checkpoint-message-binary-format',
                },
                {
                  title: '[en] Get block message binary format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/get-block-message-binary-format',
                },
                {
                  title: '[en] Get peers message binary format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/get-peers-message-binary-format',
                },
                {
                  title: '[en] Get signatures message binary format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/get-signatures-message-binary-format',
                },
                {
                  title: '[en] Handshake message binary format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/handshake-message-binary-format',
                },
                {
                  title: '[en] Peers message binary format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/peers-message-binary-format',
                },
                {
                  title: '[en] Score message binary format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/score-message-binary-format',
                },
                {
                  title: '[en] Signatures message binary format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/signatures-message-binary-format',
                },
                {
                  title: '[en] Transaction message binary format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/transaction-message-binary-format',
                },
              ]
            },
            {
              title: 'Бинарный формат ордера',
              path: blockchainPath + 'binary-format/order-binary-format',
            },
            {
              title: 'Бинарный формат транзакции',
              path: blockchainPath + 'binary-format/transaction-binary-format',
              children: [
                {
                  title: 'Вызов скрипта',
                  path: blockchainPath + 'binary-format/transaction-binary-format/invoke-script-transaction-binary-format',
                },
                {
                  title: 'Выпуск',
                  path: blockchainPath + 'binary-format/transaction-binary-format/issue-transaction-binary-format',
                },
                {
                  title: 'Генезис',
                  path: blockchainPath + 'binary-format/transaction-binary-format/genesis-transaction-binary-format',
                },
                {
                  title: 'Данные',
                  path: blockchainPath + 'binary-format/transaction-binary-format/data-transaction-binary-format',
                },
                {
                  title: 'Довыпуск',
                  path: blockchainPath + 'binary-format/transaction-binary-format/reissue-transaction-binary-format',
                },
                {
                  title: 'Лизинг',
                  path: blockchainPath + 'binary-format/transaction-binary-format/lease-transaction-binary-format',
                },
                {
                  title: 'Массовый перевод',
                  path: blockchainPath + 'binary-format/transaction-binary-format/mass-transfer-transaction-binary-format',
                },
                {
                  title: 'Обмен',
                  path: blockchainPath + 'binary-format/transaction-binary-format/exchange-transaction-binary-format',
                },
                {
                  title: 'Обновление информации ассета',
                  path: blockchainPath + 'binary-format/transaction-binary-format/update-asset-info-transaction-binary-format',
                },
                {
                  title: 'Отмена лизинга',
                  path: blockchainPath + 'binary-format/transaction-binary-format/lease-cancel-transaction-binary-format',
                },
                {
                  title: 'Сжигание токена',
                  path: blockchainPath + 'binary-format/transaction-binary-format/burn-transaction-binary-format',
                },
                {
                  title: 'Cоздание псевдонима',
                  path: blockchainPath + 'binary-format/transaction-binary-format/create-alias-transaction-binary-format',
                },
                {
                  title: 'Спонсирование',
                  path: blockchainPath + 'binary-format/transaction-binary-format/sponsor-fee-transaction-binary-format',
                },
                {
                  title: 'Перевод',
                  path: blockchainPath + 'binary-format/transaction-binary-format/transfer-transaction-binary-format',
                },
/*                {
                  title: 'Продолжение',
                  path: blockchainPath + 'binary-format/transaction-binary-format/continuation-transaction-binary-format',
                },*/
                {
                  title: 'Установка скрипта',
                  path: blockchainPath + 'binary-format/transaction-binary-format/set-script-transaction-binary-format',
                },
                {
                  title: 'Установка скрипта ассета',
                  path: blockchainPath + 'binary-format/transaction-binary-format/set-asset-script-transaction-binary-format',
                },
              ],
            },
            {
              title: 'Бинарный формат подтверждений',
              path: blockchainPath + 'binary-format/transaction-proof-binary-format',
            },
          ],
        },
        {
          title: '[en] Validation rules',
          path: blockchainPath + 'waves-protocol/validation-rules',
        },
      ],
    },
    {
      title: 'Термины',
      path:  blockchainPath + 'glossary',
    },
  ],

  [nodePath]: [
    {
      title: 'Руководство владельца ноды',
      path: nodePath,
	},
	{
      title: 'Установить ноду Waves',
      path: nodePath + 'how-to-install-a-node/how-to-install-a-node',
      children: [
        {
          title: 'Развернуть ноду в Docker',
          path: nodePath + 'waves-node-in-docker',
        },
        {
          title: 'Установить ноду на Ubuntu',
          path: nodePath + 'how-to-install-a-node/on-ubuntu',
        },	
        {
          title: 'Установить ноду на macOS',
          path: nodePath + 'how-to-install-a-node/on-mac',
        },
        {
          title: 'Установить ноду на Windows',
          path: nodePath + 'how-to-install-a-node/on-windows',
        },
        {
          title: 'Установить из исходников (сборка SBT)',
          path: nodePath + 'how-to-build-and-test-a-node',
        },
      ],
    },
	{
      title: 'Синхронизировать блокчейн Waves',
      path: nodePath + 'options-for-getting-actual-blockchain',
      children: [
        {
          title: 'Импортировать и экспортировать блокчейн',
          path: nodePath + 'options-for-getting-actual-blockchain/import-from-the-blockchain',
        },
        {
          title: 'Загрузить актуальный блокчейн',
          path: nodePath + 'options-for-getting-actual-blockchain/state-downloading-and-applying',
        },
		{
          title: 'Откатить ноду',
          path: nodePath + 'how-to-rollback-a-node',
        },
      ],
    },
    {
      title: 'Обновить ноду',
      path: nodePath + 'upgrading',
    },
    {
      title: 'Конфигурация ноды',
      path: nodePath + 'node-configuration',
    },
    {
      title: 'Логирование',
      path: nodePath + 'logging-configuration',
    },
    {
      title: 'Кошелек ноды',
      path: nodePath + 'how-to-work-with-node-wallet',
    },	
    {
      title: 'Фичи',
      path: nodePath + 'features',
      children: [
        {
          title: 'Протокол активации',
          path: nodePath + 'activation-protocol',
        },
      ],
    },
    {
      title: 'Собственный блокчейн',
      path: nodePath + 'private-waves-network',
    },
    {
      title: 'REST API ноды',
      path: nodePath + 'node-api',
      children: [
        {
          title: 'API-ключ',
          path: nodePath + 'node-api/api-key',
        },
        {
          title: 'Работа с транзакциями',
          path: nodePath + 'node-api/transactions',
        },
        {
          title: 'Денежные поля',
          path: nodePath + 'node-api/headers',
        },
        {
          title: 'Постраничная выборка',
          path: nodePath + 'node-api/pagination',
        },
        {
          title: 'CORS',
          path: nodePath + 'node-api/cors',
        },
        {
          title: 'Ограничения пула публичных нод',
          path: nodePath + 'api-limitations-of-the-pool-of-public-nodes',
        },
        {
          title: 'Коды ответов и ошибки',
          path: nodePath + 'node-api/response',
        },
      ],
    },
    {
      title: 'Расширения',
      path: nodePath + 'extensions',
      children: [
        {
          title: 'gRPC Server',
          path: nodePath + 'extensions/grpc-server',
        },
        {
          title: 'Blockchain Updates',
          path: nodePath + 'extensions/blockchain-updates',
        },
      ]
    },
  {
      title: 'Устранение неполадок',
      path: nodePath + 'node-troubleshooting',
      children: [
        {
          title: 'Генерация блока FAQ',
          path: nodePath + 'block-generation-faq',
        },
      ]
    },
	{
      title: 'Нода на языке Go',
      path: nodePath + 'node-go',
	},
  ],

  [ridePath]: [
    {
      title: 'O Ride',
      path: ridePath,
    },
    {
      title: 'Начало работы',
      path: ridePath + 'getting-started',
    },
    {
      title: 'Основы синтаксиса',
      path: ridePath + 'base-concepts',
      children: [
        {
          title: 'Директивы',
          path: ridePath + 'script/directives',
        },
        {
          title: 'Определение',
          path: ridePath + 'base-concepts/definition',
        },
        {
          title: 'Выражение',
          path: ridePath + 'base-concepts/expression',
        },
        {
          title: 'Константа',
          path: ridePath + 'constants',
        },
        {
          title: 'Переменная',
          path: ridePath + 'variables',
        },
        {
          title: 'Функция',
          path: ridePath + 'functions',
        },
        {
          title: 'Исключение',
          path: ridePath + 'exceptions',
        },
        {
          title: 'Комментарий',
          path: ridePath + 'comments',
        },
      ],
    },
    {
      title: 'Типы скриптов',
      path: ridePath + 'script',
      children: [
        {
          title: 'dApp-скрипт',
          path: ridePath + 'script/script-types/dapp-script',
          children: [
            {
              title: 'Аннотации',
              path: ridePath + 'functions/annotations',
            },
            {
              title: 'Вызываемая функция',
              path: ridePath + 'functions/callable-function',
            },
            {
              title: 'Функция-верификатор',
              path: ridePath + 'functions/verifier-function',
            },
          ],
        },
        {
          title: 'Скрипт аккаунта',
          path: ridePath + 'script/script-types/account-script',
        },
        {
          title: 'Скрипт ассета',
          path: ridePath + 'script/script-types/asset-script',
        },
      ],
    },
    {
      title: 'Стандартная библиотека',
      path: ridePath + 'script/standard-library',
    },
    {
      title: 'Типы данных',
      path: ridePath + 'data-types',
      children: [
        {
          title: 'Boolean',
          path: ridePath + 'data-types/boolean',
        },
        {
          title: 'ByteVector',
          path: ridePath + 'data-types/byte-vector',
        },
        {
          title: 'Int',
          path: ridePath + 'data-types/int',
        },
        {
          title: 'String',
          path: ridePath + 'data-types/string',
        },
        {
          title: 'Unit',
          path: ridePath + 'data-types/unit',
        },
        {
          title: 'List',
          path: ridePath + 'data-types/list',
        },
        {
          title: 'Кортеж',
          path: ridePath + 'data-types/tuple',
        },
        {
          title: 'Объединение',
          path: ridePath + 'data-types/union',
        },
      ],
    },
    {
      title: 'Структуры',
      path: ridePath + 'structures',
      children: [
        {
          title: 'Действия скрипта',
          path: ridePath + 'structures/script-actions',
          children: [
            {
              title: 'BinaryEntry (v4)',
              path: ridePath + 'structures/script-actions/binary-entry',
            },
            {
              title: 'BooleanEntry (v4)',
              path: ridePath + 'structures/script-actions/boolean-entry',
            },
            {
              title: 'Burn (v4)',
              path: ridePath + 'structures/script-actions/burn',
            },
            {
              title: 'DataEntry (v3)',
              path: ridePath + 'structures/script-actions/data-entry',
            },
            {
              title: 'DeleteEntry (v4)',
              path: ridePath + 'structures/script-actions/delete-entry',
            },
            {
              title: 'IntegerEntry (v4)',
              path: ridePath + 'structures/script-actions/int-entry',
            },
            {
              title: 'Issue (v4)',
              path: ridePath + 'structures/script-actions/issue',
            },
            {
              title: 'Reissue (v4)',
              path: ridePath + 'structures/script-actions/reissue',
            },
            {
              title: 'ScriptTransfer (v3 and v4)',
              path: ridePath + 'structures/script-actions/script-transfer',
            },
            {
              title: 'SponsorFee (v4)',
              path: ridePath + 'structures/script-actions/sponsor-fee',
            },
            {
              title: 'StringEntry (v4)',
              path: ridePath + 'structures/script-actions/string-entry',
            },
          ],
        },
        {
          title: 'Результаты скрипта (v3)',
          path: ridePath + 'structures/script-results',
          children: [
            {
              title: 'ScriptResult',
              path: ridePath + 'structures/script-results/script-result',
            },
            {
              title: 'TransferSet',
              path: ridePath + 'structures/script-results/transfer-set',
            },
            {
              title: 'WriteSet',
              path: ridePath + 'structures/script-results/write-set',
            },
          ],
        },        
        {
          title: 'Общие структуры',
          path: ridePath + 'structures/common-structures',
          children: [
            {
              title: 'Address',
              path: ridePath + 'structures/common-structures/address',
            },
            {
              title: 'Alias',
              path: ridePath + 'structures/common-structures/alias',
            },
            {
              title: 'Asset',
              path: ridePath + 'structures/common-structures/asset',
            },
            {
              title: 'AssetPair',
              path: ridePath + 'structures/common-structures/asset-pair',
            },
            {
              title: 'AttachedPayment',
              path: ridePath + 'structures/common-structures/attached-payment',
            },
            {
              title: 'BalanceDetails',
              path: ridePath + 'structures/common-structures/balance-details',
            },
            {
              title: 'BlockInfo',
              path: ridePath + 'structures/common-structures/block-info',
            },
            {
              title: 'Invocation',
              path: ridePath + 'structures/common-structures/invocation',
            },
            {
              title: 'Order',
              path: ridePath + 'structures/common-structures/order',
            },
            {
              title: 'Transfer',
              path: ridePath + 'structures/common-structures/transfer',
            },
          ],
        },
        {
          title: 'Структуры транзакций',
          path: ridePath + 'structures/transaction-structures',
          children: [
            {
              title: 'BurnTransaction',
              path: ridePath + 'structures/transaction-structures/burn-transaction',
            },
            {
              title: 'CreateAliasTransaction',
              path: ridePath + 'structures/transaction-structures/create-alias-transaction',
            },
            {
              title: 'DataTransaction',
              path: ridePath + 'structures/transaction-structures/data-transaction',
            },
            {
              title: 'ExchangeTransaction',
              path: ridePath + 'structures/transaction-structures/exchange-transaction',
            },
            {
              title: 'GenesisTransaction',
              path: ridePath + 'structures/transaction-structures/genesis-transaction',
            },
            {
              title: 'InvokeScriptTransaction',
              path: ridePath + 'structures/transaction-structures/invoke-script-transaction',
            },
            {
              title: 'IssueTransaction',
              path: ridePath + 'structures/transaction-structures/issue-transaction',
            },
            {
              title: 'LeaseCancelTransaction',
              path: ridePath + 'structures/transaction-structures/lease-cancel-transaction',
            },
            {
              title: 'LeaseTransaction',
              path: ridePath + 'structures/transaction-structures/lease-transaction',
            },
            {
              title: 'MassTransferTransaction',
              path: ridePath + 'structures/transaction-structures/mass-transfer-transaction',
            },
            {
              title: 'ReissueTransaction',
              path: ridePath + 'structures/transaction-structures/reissue-transaction',
            },
            {
              title: 'SetAssetScriptTransaction',
              path: ridePath + 'structures/transaction-structures/set-asset-script-transaction',
            },
            {
              title: 'SetScriptTransaction',
              path: ridePath + 'structures/transaction-structures/set-script-transaction',
            },
            {
              title: '[en] SponsorFeeTransaction',
              path: ridePath + 'structures/transaction-structures/sponsor-fee-transaction',
            },
            {
              title: 'TransferTransaction',
              path: ridePath + 'structures/transaction-structures/transfer-transaction',
            },
            {
              title: 'UpdateAssetInfoTransaction',
              path: ridePath + 'structures/transaction-structures/update-asset-info-transaction',
            },
          ],
        },
      ],
    },
    {
      title: 'Встроенные переменные',
      path: ridePath + 'variables/built-in-variables',
    },
    {
      title: 'Встроенные функции',
      path: ridePath + 'functions/built-in-functions',
      children: [
        {
          title: 'Функции хранилища данных аккаунта',
          path: ridePath + 'functions/built-in-functions/account-data-storage-functions',
        },
        {
          title: 'Функции блокчейна',
          path: ridePath + 'functions/built-in-functions/blockchain-functions',
        },
        {
          title: 'Функции массива байтов',
          path: ridePath + 'functions/built-in-functions/byte-array-functions',
        },
        {
          title: 'Функции конвертации',
          path: ridePath + 'functions/built-in-functions/converting-functions',
        },
        {
          title: 'Функции транзакции данных',
          path: ridePath + 'functions/built-in-functions/data-transaction-functions',
        },
        {
          title: 'Функции декодирования',
          path: ridePath + 'functions/built-in-functions/decoding-functions',
        },
        {
          title: 'Функции кодирования',
          path: ridePath + 'functions/built-in-functions/encoding-functions',
        },
        {
          title: 'Функции исключения',
          path: ridePath + 'functions/built-in-functions/exception-functions',
        },
        {
          title: 'Функции хеширования',
          path: ridePath + 'functions/built-in-functions/hashing-functions',
        },
        {
          title: 'Функции списка',
          path: ridePath + 'functions/built-in-functions/list-functions',
        },
        {
          title: 'Математические функции',
          path: ridePath + 'functions/built-in-functions/math-functions',
        },
        {
          title: 'Функции строки',
          path: ridePath + 'functions/built-in-functions/string-functions',
        },
        {
          title: 'Функции объединения',
          path: ridePath + 'functions/built-in-functions/union-functions',
        },
        {
          title: 'Функции верификации',
          path: ridePath + 'functions/built-in-functions/verification-functions',
        },
      ],
    },
    {
      title: 'Операторы',
      path: ridePath + 'operators',
    },
    {
      title: 'Сопоставление с шаблоном: match-case',
      path: ridePath + 'operators/match-case',
    },
    {
      title: 'Итерации: FOLD<N>',
      path: ridePath + 'fold-macro',
    },
    {
      title: 'Ограничения',
      path: ridePath + 'limits',
      children: [
        {
          title: 'Сложность',
          path: ridePath + 'base-concepts/complexity',
        },
        {
          title: 'Вес данных',
          path: ridePath + 'limits/weight',
        },
      ],
    },
    {
      title: 'Версия 5 (Testnet, Stagenet)',
      path: rideV5Path,
      children: [
        {
          title: 'Вызов dApp из dApp',
          path: ridePath + 'advanced/dapp-to-dapp',
        },
/*        {
          title: 'Вычисления с продолжением',
          path: ridePath + 'advanced/continuation',
        },*/
        {
          title: 'Нетерпеливая переменная',
          path: rideV5Path + 'variables',
        },
        {
          title: 'Вызываемая функция',
          path: rideV5Path + 'functions/callable-function',
        },
        {
          title: 'Типы данных',
          path: rideV5Path + 'data-types',
          children: [
            {
              title: 'Any',
              path: rideV5Path + 'data-types/any',
            },
            {
              title: 'BigInt',
              path: rideV5Path + 'data-types/bigint',
            },
            {
              title: 'Boolean',
              path: rideV5Path + 'data-types/boolean',
            },
            {
              title: 'ByteVector',
              path: rideV5Path + 'data-types/byte-vector',
            },
            {
              title: 'Int',
              path: rideV5Path + 'data-types/int',
            },
            {
              title: 'String',
              path: rideV5Path + 'data-types/string',
            },
            {
              title: 'Unit',
              path: rideV5Path + 'data-types/unit',
            },
            {
              title: 'List',
              path: rideV5Path + 'data-types/list',
            },
            {
              title: 'Кортеж',
              path: rideV5Path + 'data-types/tuple',
            },
            {
              title: 'Объединение',
              path: rideV5Path + 'data-types/union',
            },
          ],
        },
        {
          title: 'Структуры',
          path: rideV5Path + 'structures',
          children: [
            {
              title: 'Действия скрипта',
              path: rideV5Path + 'structures/script-actions',
              children: [
                {
                  title: 'BinaryEntry',
                  path: rideV5Path + 'structures/script-actions/binary-entry',
                },
                {
                  title: 'BooleanEntry',
                  path: rideV5Path + 'structures/script-actions/boolean-entry',
                },
                {
                  title: 'Burn',
                  path: rideV5Path + 'structures/script-actions/burn',
                },
                {
                  title: 'DeleteEntry',
                  path: rideV5Path + 'structures/script-actions/delete-entry',
                },
                {
                  title: 'IntegerEntry',
                  path: rideV5Path + 'structures/script-actions/int-entry',
                },
                {
                  title: 'Issue',
                  path: rideV5Path + 'structures/script-actions/issue',
                },
                {
                  title: 'Lease',
                  path: rideV5Path + 'structures/script-actions/lease',
                },
                {
                  title: 'LeaseCancel',
                  path: rideV5Path + 'structures/script-actions/lease-cancel',
                },
                {
                  title: 'Reissue',
                  path: rideV5Path + 'structures/script-actions/reissue',
                },
                {
                  title: 'ScriptTransfer',
                  path: rideV5Path + 'structures/script-actions/script-transfer',
                },
                {
                  title: 'SponsorFee',
                  path: rideV5Path + 'structures/script-actions/sponsor-fee',
                },
                {
                  title: 'StringEntry',
                  path: rideV5Path + 'structures/script-actions/string-entry',
                },
              ],
            },
            {
              title: 'Общие структуры',
              path: rideV5Path + 'structures/common-structures',
              children: [
                {
                  title: 'Address',
                  path: rideV5Path + 'structures/common-structures/address',
                },
                {
                  title: 'Alias',
                  path: rideV5Path + 'structures/common-structures/alias',
                },
                {
                  title: 'Asset',
                  path: rideV5Path + 'structures/common-structures/asset',
                },
                {
                  title: 'AssetPair',
                  path: rideV5Path + 'structures/common-structures/asset-pair',
                },
                {
                  title: 'AttachedPayment',
                  path: rideV5Path + 'structures/common-structures/attached-payment',
                },
                {
                  title: 'BalanceDetails',
                  path: rideV5Path + 'structures/common-structures/balance-details',
                },
                {
                  title: 'BlockInfo',
                  path: rideV5Path + 'structures/common-structures/block-info',
                },
                {
                  title: 'Invocation',
                  path: rideV5Path + 'structures/common-structures/invocation',
                },
                {
                  title: 'Order',
                  path: rideV5Path + 'structures/common-structures/order',
                },
                {
                  title: 'Transfer',
                  path: rideV5Path + 'structures/common-structures/transfer',
                },
              ],
            },
            {
              title: 'Структуры транзакций',
              path: rideV5Path + 'structures/transaction-structures',
              children: [
                {
                  title: 'BurnTransaction',
                  path: rideV5Path + 'structures/transaction-structures/burn-transaction',
                },
                {
                  title: 'CreateAliasTransaction',
                  path: rideV5Path + 'structures/transaction-structures/create-alias-transaction',
                },
                {
                  title: 'DataTransaction',
                  path: rideV5Path + 'structures/transaction-structures/data-transaction',
                },
                {
                  title: 'ExchangeTransaction',
                  path: rideV5Path + 'structures/transaction-structures/exchange-transaction',
                },
                {
                  title: 'GenesisTransaction',
                  path: rideV5Path + 'structures/transaction-structures/genesis-transaction',
                },
                {
                  title: 'InvokeScriptTransaction',
                  path: rideV5Path + 'structures/transaction-structures/invoke-script-transaction',
                },
                {
                  title: 'IssueTransaction',
                  path: rideV5Path + 'structures/transaction-structures/issue-transaction',
                },
                {
                  title: 'LeaseCancelTransaction',
                  path: rideV5Path + 'structures/transaction-structures/lease-cancel-transaction',
                },
                {
                  title: 'LeaseTransaction',
                  path: rideV5Path + 'structures/transaction-structures/lease-transaction',
                },
                {
                  title: 'MassTransferTransaction',
                  path: rideV5Path + 'structures/transaction-structures/mass-transfer-transaction',
                },
                {
                  title: 'ReissueTransaction',
                  path: rideV5Path + 'structures/transaction-structures/reissue-transaction',
                },
                {
                  title: 'SetAssetScriptTransaction',
                  path: rideV5Path + 'structures/transaction-structures/set-asset-script-transaction',
                },
                {
                  title: 'SetScriptTransaction',
                  path: rideV5Path + 'structures/transaction-structures/set-script-transaction',
                },
                {
                  title: 'SponsorFeeTransaction',
                  path: rideV5Path + 'structures/transaction-structures/sponsor-fee-transaction',
                },
                {
                  title: 'TransferTransaction',
                  path: rideV5Path + 'structures/transaction-structures/transfer-transaction',
                },
                {
                  title: 'UpdateAssetInfoTransaction',
                  path: rideV5Path + 'structures/transaction-structures/update-asset-info-transaction',
                },
              ],
            },
          ],
        },
        {
          title: 'Встроенные переменные',
          path: rideV5Path + 'variables/built-in-variables',
        },
        {
          title: 'Встроенные функции',
          path: rideV5Path + 'functions/built-in-functions',
          children: [
            {
              title: 'Функции хранилища данных аккаунта',
              path: rideV5Path + 'functions/built-in-functions/account-data-storage-functions',
            },
            {
              title: 'Функции блокчейна',
              path: rideV5Path + 'functions/built-in-functions/blockchain-functions',
            },
            {
              title: 'Функции массива байтов',
              path: rideV5Path + 'functions/built-in-functions/byte-array-functions',
            },
            {
              title: 'Функции конвертации',
              path: rideV5Path + 'functions/built-in-functions/converting-functions',
            },
            {
              title: 'Функции транзакции данных',
              path: rideV5Path + 'functions/built-in-functions/data-transaction-functions',
            },
            {
              title: 'Функции декодирования',
              path: rideV5Path + 'functions/built-in-functions/decoding-functions',
            },
            {
              title: 'Функции кодирования',
              path: rideV5Path + 'functions/built-in-functions/encoding-functions',
            },
            {
              title: 'Функции исключения',
              path: rideV5Path + 'functions/built-in-functions/exception-functions',
            },
            {
              title: 'Функции хеширования',
              path: rideV5Path + 'functions/built-in-functions/hashing-functions',
            },
            {
              title: 'Функция вызова dApp из dApp',
              path: rideV5Path + 'functions/built-in-functions/dapp-to-dapp',
            },
            {
              title: 'Функции списка',
              path: rideV5Path + 'functions/built-in-functions/list-functions',
            },
            {
              title: 'Математические функции',
              path: rideV5Path + 'functions/built-in-functions/math-functions',
            },
            {
              title: 'Функции строки',
              path: rideV5Path + 'functions/built-in-functions/string-functions',
            },
            {
              title: 'Функции объединения',
              path: rideV5Path + 'functions/built-in-functions/union-functions',
            },
            {
              title: 'Функции верификации',
              path: rideV5Path + 'functions/built-in-functions/verification-functions',
            },
          ],
        },
        {
          title: 'Операторы',
          path: rideV5Path + 'operators',
        },
        {
          title: 'Ограничения',
          path: rideV5Path + 'limits',
          children: [
            {
              title: 'Вес данных',
              path: rideV5Path + 'limits/weight',
            },
          ],
        },
      ],
    },
    {
      title: 'Компоненты Ride',
      path: ridePath + 'advanced/components',
    },
    {
      title: '[en] Script performance tests',
      path: ridePath + 'script-performance-tests',
    },
  ],

  [buildingAppsPath]: [
    {
      title: 'Обзор',
      path: buildingAppsPath,
    },
    {
      title: 'Практические руководства',
      path: buildingAppsPath + 'how-to',
      children: [
        {
          title: 'Получение данных из блокчейна',
          path: buildingAppsPath + 'how-to/basic/retrieve',
        },
        {
          title: 'Создание и отправка транзакций',
          path: buildingAppsPath + 'how-to/basic/transaction',
        },
        {
          title: 'Токенизация',
          path: buildingAppsPath + 'how-to/assets/issue',
        },
        {
          title: 'Распространение токена (airdrop)',
          path: buildingAppsPath + 'how-to/assets/airdrop',
        },
        {
          title: 'Прием платежей',
          path: buildingAppsPath + 'how-to/assets/payment',
        },
        {
          title: 'Покупка и продажа токенов',
          path: buildingAppsPath + 'how-to/basic/trading',
        },
        {
          title: '[en] Create your first crypto trading Bot',
          path: sdkPath + 'examples/trading-bot',
        },
        {
          title: 'Простое голосование',
          path: programmingPath + 'simple-voting-on-the-waves-blockchain',
        }
      ]
    },
    {
      title: '[en] Waves Smart Contracts',
      path: programmingPath + 'waves-smart-contracts-overview',
      children: [
        {
          title: 'Статьи о смарт-контрактах',
          path: programmingPath + 'articles-on-dapps',
        },
      ],
    },
    {
      title: 'Cмарт-аккаунт',
      path: programmingPath + 'what-is-smart-account',
      children: [
        {
          title: 'Создание смарт-аккаунта',
          path: programmingPath + 'how-to-create-smart-account',
        },
        {
          title: '[en] Creating and deploying a script manually',
          path: programmingPath + 'creating-and-deploying-a-script-manually',
        },
        {
          title: '[en] Video tutorials',
          path: programmingPath + 'video-tutorials',
        }
      ],
    },
    {
      title: 'Cмарт-ассет',
      path: programmingPath + 'what-is-smart-asset',
    },
    {
      title: 'dApp',
      path: programmingPath + 'what-is-a-dapp',
      children: [
        {
          title: 'Создание и запуск dApp',
          path: programmingPath + 'writing-dapps',
        }
      ],
    },
    {
      title: 'Инструменты разработчика',
      path: programmingPath + 'tools',
      children: [
        {
          title: 'Waves IDE',
          path: programmingPath + 'tools/waves-ide',
        },
        {
          title: 'Расширение для VS Code',
          path: programmingPath + 'tools/ride-vscode',
        },
        {
          title: 'Surfboard',
          path: programmingPath + 'tools/surfboard',
        },
        {
          title: 'Ride REPL',
          path: programmingPath + 'tools/repl',
        },
      ],
    },
    {
      title: 'Signer ◆',
      path: sdkPath + 'client-libraries/signer',
    },
    {
      title: 'Waves API',
      path: sdkPath,
      children: [
        {
          title: 'Data Service API',
          path: sdkPath + 'waves-data-service-api',
        },
        {
          title: 'Node REST API 🡥',
          path: nodePath + 'node-api',
        },
        {
          title: 'Node gRPC Server 🡥',
          path: nodePath + 'extensions/grpc-server',
        },
        {
          title: 'Blockchain Updates 🡥',
          path: nodePath + 'extensions/blockchain-updates',
        },
        {
          title: 'Waves Keeper API 🡥',
          path: ecosystemPath + 'waves-keeper/waves-keeper-api',
        },
      ],
    },
    {
      title: 'Клиентские библиотеки',
      path: sdkPath + 'client-libraries',
      children: [
        {
          title: '[en] Waves transactions',
          path: sdkPath + 'client-libraries/waves-transactions',
        },
        {
          title: '[en] PyWaves',
          path: sdkPath + 'client-libraries/pywaves',
        },
        {
          title: '[en] WavesJ',
          path: sdkPath + 'client-libraries/wavesj',
        },
        {
          title: '[en] WavesCS',
          path: sdkPath + 'client-libraries/wavescs',
        },
        {
          title: '[en] WavesC',
          path: sdkPath + 'client-libraries/waves-c',
        },
        {
          title: '[en] GoWaves',
          path: sdkPath + 'client-libraries/gowaves',
        },
        {
          title: '[en] WavesRS',
          path: sdkPath + 'client-libraries/wavesrs',
        },
        {
          title: '[en] Community libraries',
          path: sdkPath + 'client-libraries/unofficial-libraries',
        },
      ],
    },
  ],

  [ecosystemPath]: [
    {
      title: 'Экосистема приложений',
      path: ecosystemPath,
    },
    {
      title: 'Waves Explorer',
      path: ecosystemPath + 'waves-explorer/about-waves-explorer',
    },
    {
      title: 'Пополнение баланса аккаунта в тестовой сети',
      path: ecosystemPath + 'waves-explorer/account-balance-top-up-in-the-test-network',
    },
    {
      title: 'Waves Keeper',
      path: ecosystemPath + 'waves-keeper',
      children: [
        {
          title: 'Начало работы с Waves Keeper',
          path: ecosystemPath + 'waves-keeper/getting-started-with-keeper',
        },
        {
          title: 'Waves Keeper API',
          path: ecosystemPath + 'waves-keeper/waves-keeper-api',
          children: [
            {
              title: 'Формат транзакций',
              path: ecosystemPath + 'waves-keeper/transaction',
            },
          ],
        },
      ],
    },
    {
      title: 'Waves Oracles',
      path: ecosystemPath + 'waves-oracles/about-waves-oracles',
      children: [
        {
          title: 'Создание карточки оракула при помощи Waves Oracle',
          path: ecosystemPath + 'waves-oracles/create-an-oracle-card-with-waves-oracle',
        },
        {
          title: 'Создание карточки оракула при помощи транзакции данных',
          path: ecosystemPath + 'waves-oracles/create-an-oracle-card-with-a-data-transaction',
        },
        {
          title: 'Карточка оракула',
          path: ecosystemPath + 'waves-oracles/oracle-card',
        },
        {
          title: 'Обновление карточки оракула',
          path: ecosystemPath + 'waves-oracles/updating-oracle-card',
        },
        {
          title: 'Инструмент отправки транзакций данных',
          path: ecosystemPath + 'waves-oracles/data-transaction-tool',
        },
        {
          title: 'Как создать оракул',
          path: ecosystemPath + 'waves-oracles/how-to-create-an-oracle',
        },
      ],
    },
    {
      title: 'Token Rating',
      path: ecosystemPath + 'waves-token-rating/about-waves-token-rating',
      children: [
        {
          title: 'Интерфейс пользователя',
          path: ecosystemPath + 'waves-token-rating/user-interface',
        },
        {
          title: 'Формула рейтинга',
          path: ecosystemPath + 'waves-token-rating/rating-formula',
        },
        {
          title: 'Транзакция данных с оценкой пользователя',
          path: ecosystemPath + 'waves-token-rating/data-transaction-with-user-s-rate',
        },
        {
          title: 'Транзакция данных оракула Token Rating',
          path: ecosystemPath + 'waves-token-rating/data-transaction-of-the-token-rating-oracle',
        },
        {
          title: 'Управление токеном',
          path: ecosystemPath + 'waves-token-rating/token-management',
        },
      ],
    },
  ],

  [keepInTouchPath]: [
    {
      title: 'Будьте в курсе',
      path: keepInTouchPath,
    },
    {
      title: 'Release notes',
      path: keepInTouchPath + 'release-notes',
    },
    {
      title: 'Release notes (Node Go)',
      path: keepInTouchPath + 'release-notes-go',
    },
    {
      title: 'Сохранение транзакций с неудачным результатом выполнения скрипта',
      path: keepInTouchPath + 'april',
    },
    {
      title: 'Обновления в документации',
      path: keepInTouchPath + 'docs-update',
    },
  ],
};
