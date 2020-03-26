// const rootPath = 'https://docs.wavesplatform.com/';
const localePath = '/ru/';
const blockchainPath = localePath + 'blockchain/';
const nodePath = localePath + 'waves-node/';
const buildingAppsPath = localePath + 'building-apps/';
const programmingPath = buildingAppsPath + 'smart-contracts/';
const sdkPath = buildingAppsPath + 'waves-api-and-sdk/';
const ridePath = localePath + 'ride/';
const ecosystemPath = localePath + 'ecosystem/';
const keepInTouchPath = localePath + 'keep-in-touch/';

module.exports = {
  [blockchainPath]: [
    {
      title: 'О блокчейне Waves',
      path: blockchainPath,
    },
    {
      title: 'Аккаунт',
      path: blockchainPath + 'account',
      children: [
        {
          title: 'Баланс аккаунта',
          path: blockchainPath + 'account/account-balance',
        },
        {
          title: 'Хранилище данных аккаунта',
          path: blockchainPath + 'account/account-data-storage',
        },
        {
          title: 'Адрес',
          path: blockchainPath + 'account/address',
        },
        {
          title: 'Псевдоним',
          path: blockchainPath + 'account/alias',
        },
        {
          title: 'dApp',
          path: blockchainPath + 'account/dapp',
        },
        {
          title: 'Смарт-аккаунт',
          path: blockchainPath + 'account/smart-account',
        }
      ],
    },
    {
      title: 'Бинарный формат',
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
              title: 'Cоздание псевдонима',
              path: blockchainPath + 'binary-format/transaction-binary-format/create-alias-transaction-binary-format',
            },
            {
              title: 'Сжигание токена',
              path: blockchainPath + 'binary-format/transaction-binary-format/burn-transaction-binary-format',
            },
            {
              title: 'Транзакция данных',
              path: blockchainPath + 'binary-format/transaction-binary-format/data-transaction-binary-format',
            },
            {
              title: 'Обмен',
              path: blockchainPath + 'binary-format/transaction-binary-format/exchange-transaction-binary-format',
            },
            {
              title: 'Генезис',
              path: blockchainPath + 'binary-format/transaction-binary-format/genesis-transaction-binary-format',
            },
            {
              title: 'Вызов скрипта',
              path: blockchainPath + 'binary-format/transaction-binary-format/invoke-script-transaction-binary-format',
            },
            {
              title: 'Выпуск',
              path: blockchainPath + 'binary-format/transaction-binary-format/issue-transaction-binary-format',
            },
            {
              title: 'Отмена лизинга',
              path: blockchainPath + 'binary-format/transaction-binary-format/lease-cancel-transaction-binary-format',
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
              title: 'Довыпуск',
              path: blockchainPath + 'binary-format/transaction-binary-format/reissue-transaction-binary-format',
            },
            {
              title: 'Установка скрипта ассета',
              path: blockchainPath + 'binary-format/transaction-binary-format/set-asset-script-transaction-binary-format',
            },
            {
              title: 'Установка скрипта',
              path: blockchainPath + 'binary-format/transaction-binary-format/set-script-transaction-binary-format',
            },
            {
              title: 'Спонсирование',
              path: blockchainPath + 'binary-format/transaction-binary-format/sponsor-fee-transaction-binary-format',
            },
            {
              title: 'Перевод',
              path: blockchainPath + 'binary-format/transaction-binary-format/transfer-transaction-binary-format',
            },
          ],
        },
        {
          title: '[en] Transaction proof binary format',
          path: blockchainPath + 'binary-format/transaction-proof-binary-format',
        },
        {
          title: 'Protobuf-схема транзакции',
          path: blockchainPath + 'binary-format/transaction-protobuf-scheme',
          children: [
            {
               title: 'Создание псевдонима',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/create-alias-transaction-protobuf-scheme',
            },
            {
               title: 'Сжигание токена',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/burn-transaction-protobuf-scheme',
            },
            {
               title: 'Транзакция данных',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/data-transaction-protobuf-scheme',
            },
            {
               title: 'Обмен',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/exchange-transaction-protobuf-scheme',
            },
            {
               title: 'Генезис',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/genesis-transaction-protobuf-scheme',
            },
            {
               title: 'Вызов скрипта',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/invoke-script-transaction-protobuf-scheme',
            },
            {
               title: 'Выпуск',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/issue-transaction-protobuf-scheme',
            },
            {
               title: 'Отмена лизинга',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/lease-cancel-transaction-protobuf-scheme',
            },
            {
               title: 'Лизинг',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/lease-transaction-protobuf-scheme',
            },
            {
               title: 'Массовый перевод',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/mass-transfer-transaction-protobuf-scheme',
            },
            {
               title: 'Довыпуск',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/reissue-transaction-protobuf-scheme',
            },
            {
               title: 'Установка скрипта ассета',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/set-asset-script-transaction-protobuf-scheme',
            },
            {
               title: 'Установка скрипта',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/set-script-transaction-protobuf-scheme',
            },
            {
               title: 'Спонсирование',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/sponsor-fee-transaction-protobuf-scheme',
            },
            {
               title: 'Перевод',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/transfer-transaction-protobuf-scheme',
            },
            {
               title: 'Обновление информации ассета',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/update-asset-info-transaction-protobuf-scheme',
             },
          ],
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
          title: 'Блок генезиса',
          path: blockchainPath + 'block/genesis-block',
        },
      ]
    },
    {
      title: 'Блокчейн',
      path: blockchainPath + 'blockchain',
      children: [
        {
          title: 'Типы данных блокчейна',
          path: blockchainPath + 'blockchain/blockchain-data-types',
        },
        {
          title: 'Высота блокчейна',
          path: blockchainPath + 'blockchain/blockchain-height',
        },
      ],
    },
    {
      title: 'Сеть блокчейна',
      path: blockchainPath + 'blockchain-network',
      children: [
        {
          title: 'Байт сети',
          path: blockchainPath + 'blockchain-network/chain-id',
        },
        {
          title: 'Основная сеть',
          path: blockchainPath + 'blockchain-network/main-network',
        },
        {
          title: 'Тестовая сеть',
          path: blockchainPath + 'blockchain-network/test-network',
        },
        {
          title: 'Экспериментальная сеть',
          path: blockchainPath + 'blockchain-network/stage-network',
        },
      ],
    },
    {
      title: 'Лизинг',
      path: blockchainPath + 'leasing',
    },
    {
      title: 'Майнинг',
      path: blockchainPath + 'mining',
      children: [
        {
          title: 'Майнер',
          path: blockchainPath + 'mining/miner',
        },
        {
          title: 'Майнящий аккаунт',
          path: blockchainPath + 'mining/mining-account',
        },
        {
          title: 'Вознаграждение за майнинг',
          path: blockchainPath + 'mining/mining-reward',
        },
      ],
    },
    {
      title: 'Комиссия матчера',
      path: blockchainPath + 'matcher-fee',
    },
    {
      title: 'Нода',
      path: blockchainPath + 'node',
      children: [
        {
          title: 'Майнящая нода',
          path: blockchainPath + 'node/mining-node',
        },
        {
          title: 'Валидирующая нода',
          path: blockchainPath + 'node/validating-node',
        },
      ],
    },
    {
      title: 'Оракул',
      path: blockchainPath + 'oracle',
    },
    {
      title: 'Биржевая заявка',
      path: blockchainPath + 'order',
    },
    {
      title: 'Токен',
      path: blockchainPath + 'token',
      children: [
        {
          title: 'Невзаимозаменяемый токен',
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
        {
          title: 'WAVELET',
          path: blockchainPath + 'token/wavelet',
        },
        {
          title: 'WCT',
          path: blockchainPath + 'token/wct',
        },
      ],
    },
    {
      title: 'Транзакция',
      path: blockchainPath + 'transaction',
      children: [
        {
          title: 'ID транзакции',
          path: blockchainPath + 'transaction/transaction-id',
        },
        {
          title: 'Байты тела транзакции',
          path: blockchainPath + 'transaction/transaction-body-bytes',
        },
        {
          title: 'Комиссия за транзакцию',
          path: blockchainPath + 'transaction/transaction-fee',
        },
        {
          title: 'Подтверждение транзакции',
          path: blockchainPath + 'transaction/transaction-proof',
        },
        {
          title: 'Подпись транзакции',
          path: blockchainPath + 'transaction/transaction-signature',
        },
        {
          title: 'Временная метка транзакции',
          path: blockchainPath + 'transaction/transaction-timestamp',
        },
        {
          title: 'Валидация транзакции',
          path: blockchainPath + 'transaction/transaction-validation',
        },
        {
          title: 'Версия транзакции',
          path: blockchainPath + 'transaction/transaction-version',
        },
      ]
    },
    {
      title: 'Тип транзакции',
      path: blockchainPath + 'transaction-type',
      children: [
        {
          title: 'Транзакция создания псевдонима',
          path: blockchainPath + 'transaction-type/create-alias-transaction',
        },
        {
          title: 'Транзакция сжигания токена',
          path: blockchainPath + 'transaction-type/burn-transaction',
        },
        {
          title: 'Транзакция данных',
          path: blockchainPath + 'transaction-type/data-transaction',
        },
        {
          title: 'Транзакция обмена',
          path: blockchainPath + 'transaction-type/exchange-transaction',
        },
        {
          title: 'Транзакция генезиса',
          path: blockchainPath + 'transaction-type/genesis-transaction',
        },
        {
          title: 'Транзакция вызова скрипта',
          path: blockchainPath + 'transaction-type/invoke-script-transaction',
        },
        {
          title: 'Транзакция выпуска',
          path: blockchainPath + 'transaction-type/issue-transaction',
        },
        {
          title: 'Транзакция закрытия лизинга',
          path: blockchainPath + 'transaction-type/lease-cancel-transaction',
        },
        {
          title: 'Транзакция лизинга',
          path: blockchainPath + 'transaction-type/lease-transaction',
        },
        {
          title: 'Транзакция массового перевода',
          path: blockchainPath + 'transaction-type/mass-transfer-transaction',
        },
        {
          title: 'Транзакция обновления информации ассета',
          path: blockchainPath + 'transaction-type/update-asset-info-transaction',
        },
        {
          title: 'Транзакция довыпуска',
          path: blockchainPath + 'transaction-type/reissue-transaction',
        },
        {
          title: 'Транзакция установки скрипта ассета',
          path: blockchainPath + 'transaction-type/set-asset-script-transaction',
        },
        {
          title: 'Транзакция установки скрипта',
          path: blockchainPath + 'transaction-type/set-script-transaction',
        },
        {
          title: 'Транзакция перевода',
          path: blockchainPath + 'transaction-type/transfer-transaction',
        },
      ]
    },
    {
      title: 'Протокол Waves',
      path: blockchainPath + 'waves-protocol',
      children: [
        {
          title: '[en] Cryptographic practical details',
          path: blockchainPath + 'waves-protocol/cryptographic-practical-details',
        },
        {
          title: '[en] Validation rules',
          path: blockchainPath + 'waves-protocol/validation-rules',
        },
        {
          title: '[en] Waves-NG solution',
          path: blockchainPath + 'waves-protocol/waves-ng-solution',
        },
        {
          title: '[en] Sponsored fee',
          path: blockchainPath + 'waves-protocol/sponsored-fee',
        },
        {
          title: 'Честный Proof-of-Stake',
          path: blockchainPath + 'waves-protocol/fair-pos',
        },
        {
          title: 'Протокол Waves-NG',
          path: blockchainPath + 'waves-protocol/waves-ng-protocol',
        },
        {
          title: 'Протокол активации',
          path: blockchainPath + 'waves-protocol/activation-protocol',
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
      title: 'Full нода Waves',
      path: nodePath + 'what-is-a-full-node',
    },
	  {
      title: 'Как установить ноду',
      path: nodePath + 'how-to-install-a-node/how-to-install-a-node',
      children: [
        {
          title: 'Установка ноды на Mac',
          path: nodePath + 'how-to-install-a-node/on-mac',
        },
        {
          title: 'Установка ноды на Windows',
          path: nodePath + 'how-to-install-a-node/on-windows',
        },
        {
          title: 'Установка ноды на Ubuntu',
          path: nodePath + 'how-to-install-a-node/on-ubuntu',
        }
      ],
    },
    {
      title: '[en] How to build and test a node',
      path: nodePath + 'how-to-build-and-test-a-node',
    },
    {
      title: 'Способы загрузки актуального блокчейна',
      path: nodePath + 'options-for-getting-actual-blockchain',
      children: [
        {
          title: 'Экспорт/Импорт блокчейна',
          path: nodePath + 'options-for-getting-actual-blockchain/import-from-the-blockchain',
        },	  
        {
          title: 'Загрузка готовой актуальной базы данных',
          path: nodePath + 'options-for-getting-actual-blockchain/state-downloading-and-applying',
        },
      ],
    },
    {
      title: 'Обновление ноды Waves',
      path: nodePath + 'upgrading',
    },
    {
     title: 'Как откатить ноду',
     path: nodePath + 'how-to-rollback-a-node',
    },
    {
      title: 'Работа с кошельком ноды',
      path: nodePath + 'working-with-node-wallet',
    },
    {
      title: 'Запуск ноды в Docker',
      path: nodePath + 'waves-node-in-docker',
    },
    {
      title: 'Про Waves Testnet',
      path: nodePath + 'joining-testnet',
    },
    {
      title: '[en] Private Waves network',
      path: nodePath + 'private-waves-network',
    },
	  {
      title: 'Расширения',
      path: nodePath + 'extensions',
      children: [
        {
          title: 'gRPC Server',
          path: nodePath + 'extensions/grpc-server',
          children: [
            {
              title: 'Установка gRPC Server',
              path: nodePath + 'extensions/grpc-server/grpc-server-installation',
            },
          ],
        },
      ]
    },
    {
      title: '[en] Features',
      path: nodePath + 'features/features',
      children: [
        {
          title: '[en] Feature',
          path: nodePath + 'features/feature',
        },
        {
          title: '[en] Feature activation protocol',
          path: nodePath + 'features/feature-activation-protocol',
        }
      ],
    },
    {
      title: 'Конфигурация ноды',
      path: nodePath + 'node-configuration',
    },
    {
      title: '[en] Logging configuration',
      path: nodePath + 'logging-configuration',
    },
    {
      title: 'Node API',
      path: nodePath + 'node-api',
      children: [
        {
          title: '[en] Request headers',
          path: nodePath + 'node-api/headers',
        },
        {
          title: '[en] Address',
          path: nodePath + 'node-api/address',
        },
        {
          title: '[en] Lease Transactions',
          path: nodePath + 'node-api/lease-transactions',
        },
        {
          title: '[en] Assets',
          path: nodePath + 'node-api/asset-transactions',
          children: [
            {
              title: '[en] Public Functions',
              path: nodePath + 'node-api/asset-transactions/public-functions',
            },
            {
              title: '[en] Private Functions',
              path: nodePath + 'node-api/asset-transactions/private-functions',
            },
            {
              title: '[en] Distribution Methods',
              path: nodePath + 'node-api/asset-transactions/distribution-methods',
            }
          ],
        },
        {
          title: '[en] Alias Transaction',
          path: nodePath + 'node-api/alias-transaction',
        },
        {
          title: '[en] Transactions',
          path: nodePath + 'node-api/transactions',
        },
        {
          title: '[en] Peers',
          path: nodePath + 'node-api/peers',
        },
        {
          title: '[en] Blocks',
          path: nodePath + 'node-api/blocks',
        },
        {
          title: '[en] Utils',
          path: nodePath + 'node-api/utils',
        },
        {
          title: '[en] Examples of transactions',
          path: nodePath + 'node-api/example-transactions',
        }
      ],
    },
    {
      title: 'Запуск ноды Waves в Яндекс.Облаке',
      path: nodePath + 'running-waves-node-in-yandex-cloud',
    },
    {
      title: 'Ограничения API пула публичных нод',
      path: nodePath + 'api-limitations-of-the-pool-of-public-nodes',
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
      title: 'Базовые понятия',
      path: ridePath + 'base-concepts',
      children: [
        {
          title: 'Сложность',
          path: ridePath + 'base-concepts/complexity',
        },
        {
          title: 'Определение',
          path: ridePath + 'base-concepts/definition',
        },
        {
          title: 'Выражение',
          path: ridePath + 'base-concepts/expression',
        },
      ],
    },
    {
      title: 'Комментарии',
      path: ridePath + 'comments',
    },
    {
      title: 'Константы',
      path: ridePath + 'constants',
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
          title: 'List',
          path: ridePath + 'data-types/list',
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
          title: 'Тип данных объединения',
          path: ridePath + 'data-types/union',
        },
      ],
    },
    {
      title: 'Исключения',
      path: ridePath + 'exceptions',
    },
    {
      title: 'Функции',
      path: ridePath + 'functions',
      children: [
        {
          title: 'Аннотации',
          path: ridePath + 'functions/annotations',
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
      title: 'Макрос FOLD<N>',
      path: ridePath + 'fold-macro',
    },
    {
      title: 'Операторы',
      path: ridePath + 'operators',
      children: [
        {
          title: 'match-case',
          path: ridePath + 'operators/match-case',
        },
      ]
    },
    {
      title: 'Скрипт',
      path: ridePath + 'script',
      children: [
        {
          title: 'Директивы',
          path: ridePath + 'script/directives',
        },
        {
          title: 'Тело скрипта',
          path: ridePath + 'script/script-body',
        },
        {
          title: 'Контекст скрипта',
          path: ridePath + 'script/script-context',
        },
        {
          title: 'Типы скриптов',
          path: ridePath + 'script/script-types',
          children: [
            {
              title: 'Скрипт аккаунта',
              path: ridePath + 'script/script-types/account-script',
            },
            {
              title: 'Скрипт ассета',
              path: ridePath + 'script/script-types/asset-script',
            },
            {
              title: 'dApp-скрипт',
              path: ridePath + 'script/script-types/dapp-script',
            },
          ],
        },
        {
          title: 'Стандартная библиотека',
          path: ridePath + 'script/standard-library',
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
      title: 'Переменные',
      path: ridePath + 'variables',
      children: [
        {
          title: 'Встроенные переменные',
          path: ridePath + 'variables/built-in-variables',
        },
      ],
    },
    {
      title: '[en] Script performance tests',
      path: ridePath + 'script-performance-tests',
    },
  ],

  [buildingAppsPath]: [
    {
      title: 'Приступая к работе',
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
          title: 'Написание dApp',
          path: programmingPath + 'writing-dapps',
        }
      ],
    },
    {
      title: 'Статьи о смарт-контрактах',
      path: programmingPath + 'articles-on-dapps',
    },
    {
      title: 'Инструменты',
      path: programmingPath + 'tools',
      children: [
        {
          title: 'Waves IDE',
          path: programmingPath + 'tools/waves-ide',
        },
        {
          title: 'REPL',
          path: programmingPath + 'tools/repl',
        },
      ],
    },
    {
      title: 'API & SDK',
      path: sdkPath,
      children: [
        {
          title: '[en] Waves data service API',
          path: sdkPath + 'waves-data-service-api',
        },
        {
          title: 'Клиентские библиотеки',
          path: sdkPath + 'client-libraries',
          children: [
            {
              title: 'Signer',
              path: sdkPath + 'client-libraries/signer',
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
              title: '[en] Waves transactions',
              path: sdkPath + 'client-libraries/waves-transactions',
            },
            {
              title: '[en] Community libraries',
              path: sdkPath + 'client-libraries/unofficial-libraries',
            },
          ],
        },
        {
          title: '[en] Waves Games',
          path: sdkPath + 'waves-gaming-api',
          children: [
            {
              title: '[en] Waves Games API',
              path: sdkPath + 'waves-gaming-api/waves-games-api',
            },
            {
              title: '[en] Examples',
              path: sdkPath + 'waves-gaming-api/examples',
            },
          ],
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
      title: 'Обновления в документации',
      path: keepInTouchPath + 'docs-update',
    },
  ],
};
