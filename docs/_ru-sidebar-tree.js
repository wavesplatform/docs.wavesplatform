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
          title: 'Бинарный формат ордера',
          path: blockchainPath + 'binary-format/order-binary-format',
        },
        {
          title: 'Бинарный формат транзакции',
          path: blockchainPath + 'binary-format/transaction-binary-format',
          children: [
            {
              title: 'Бинарный формат транзакции создания псевдонима',
              path: blockchainPath + 'binary-format/transaction-binary-format/alias-transaction-binary-format',
            },
            {
              title: 'Бинарный формат транзакции сжигания токена',
              path: blockchainPath + 'binary-format/transaction-binary-format/burn-transaction-binary-format',
            },
            {
              title: 'Бинарный формат транзакции данных',
              path: blockchainPath + 'binary-format/transaction-binary-format/data-transaction-binary-format',
            },
            {
              title: 'Бинарный формат транзакции обмена',
              path: blockchainPath + 'binary-format/transaction-binary-format/exchange-transaction-binary-format',
            },
            {
              title: 'Бинарный формат транзакции генезиса',
              path: blockchainPath + 'binary-format/transaction-binary-format/genesis-transaction-binary-format',
            },
            {
              title: 'Бинарный формат транзакции вызова скрипта',
              path: blockchainPath + 'binary-format/transaction-binary-format/invoke-script-transaction-binary-format',
            },
            {
              title: 'Бинарный формат транзакции выпуска',
              path: blockchainPath + 'binary-format/transaction-binary-format/issue-transaction-binary-format',
            },
            {
              title: 'Бинарный формат транзакции отмены лизинга',
              path: blockchainPath + 'binary-format/transaction-binary-format/lease-cancel-transaction-binary-format',
            },
            {
              title: 'Бинарный формат транзакции лизинга',
              path: blockchainPath + 'binary-format/transaction-binary-format/lease-transaction-binary-format',
            },
            {
              title: 'Бинарный формат транзакции массового перевода',
              path: blockchainPath + 'binary-format/transaction-binary-format/mass-transfer-transaction-binary-format',
            },
            {
              title: 'Бинарный формат транзакции довыпуска',
              path: blockchainPath + 'binary-format/transaction-binary-format/reissue-transaction-binary-format',
            },
            {
              title: 'Бинарный формат транзакции установки скрипта ассета',
              path: blockchainPath + 'binary-format/transaction-binary-format/set-asset-script-transaction-binary-format',
            },
            {
              title: 'Бинарный формат транзакции установки скрипта',
              path: blockchainPath + 'binary-format/transaction-binary-format/set-script-transaction-binary-format',
            },
            {
              title: 'Бинарный формат транзакции спонсирования',
              path: blockchainPath + 'binary-format/transaction-binary-format/sponsorship-transaction-binary-format',
            },
            {
              title: 'Бинарный формат транзакции перевода',
              path: blockchainPath + 'binary-format/transaction-binary-format/transfer-transaction-binary-format',
            },
          ],
        },
        {
          title: 'Protobuf-схема транзакции',
          path: blockchainPath + 'binary-format/transaction-protobuf-scheme',
          children: [
            {
               title: 'Protobuf-схема транзакции создания псевдонима',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/alias-transaction-protobuf-scheme',
            },
            {
               title: 'Protobuf-схема транзакции сжигания токена',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/burn-transaction-protobuf-scheme',
            },
            {
               title: 'Protobuf-схема транзакции данных',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/data-transaction-protobuf-scheme',
            },
            {
               title: 'Protobuf-схема транзакции обмена',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/exchange-transaction-protobuf-scheme',
            },
            {
               title: 'Protobuf-схема транзакции генезиса',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/genesis-transaction-protobuf-scheme',
            },
            {
               title: 'Protobuf-схема транзакции вызова скрипта',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/invoke-script-transaction-protobuf-scheme',
            },
            {
               title: 'Protobuf-схема транзакции выпуска',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/issue-transaction-protobuf-scheme',
            },
            {
               title: 'Protobuf-схема транзакции отмены лизинга',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/lease-cancel-transaction-protobuf-scheme',
            },
            {
               title: 'Protobuf-схема транзакции массового перевода',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/mass-transfer-transaction-protobuf-scheme',
            },
            {
               title: 'Protobuf-схема транзакции установки скрипта ассета',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/set-asset-script-transaction-protobuf-scheme',
            },
            {
               title: 'Protobuf-схема транзакции спонсирования',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/sponsor-fee-transaction-protobuf-scheme',
            },
            {
               title: 'Protobuf-схема транзакции перевода',
               path: blockchainPath + 'binary-format/transaction-protobuf-scheme/transfer-transaction-protobuf-scheme',
            },
            {
               title: 'Protobuf-схема транзакции обновления информации ассета',
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
            }
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
          path: blockchainPath + 'transaction-type/alias-transaction',
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
          title: 'Fair Proof of Stake',
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
      title: 'Нода',
      path: nodePath,
    },
    {
      title: 'Предварительные требования',
      path: nodePath + 'prerequisites',
      children: [
        {
          title: 'Требования к аппаратному обеспечению',
          path: nodePath + 'prerequisites/hardware-requirements',
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
      title: 'Node API',
      path: nodePath + 'node-api',
    },
    {
      title: 'Запуск Waves Node в Яндекс.Облаке',
      path: nodePath + 'running-waves-node-in-yandex-cloud',
    },
    {
      title: 'Обновление Ноды Waves',
      path: nodePath + 'upgrading',
    },
    {
      title: 'Конфигурация ноды',
      path: nodePath + 'node-configuration',
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
      title: 'Макрос FOLD<N>',
      path: ridePath + 'fold-macro',
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
      title: 'Операторы',
      path: ridePath + 'operators',
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
              title: 'BinaryEntry',
              path: ridePath + 'structures/common-structures/binary-entry',
            },
            {
              title: 'BlockInfo',
              path: ridePath + 'structures/common-structures/block-info',
            },
            {
              title: 'BooleanEntry',
              path: ridePath + 'structures/common-structures/boolean-entry',
            },
            {
              title: 'Burn',
              path: ridePath + 'structures/common-structures/burn',
            },
            {
              title: 'DataEntry',
              path: ridePath + 'structures/common-structures/data-entry',
            },
            {
              title: 'DeleteKey',
              path: ridePath + 'structures/common-structures/delete-key',
            },
            {
              title: 'IntEntry',
              path: ridePath + 'structures/common-structures/int-entry',
            },
            {
              title: 'Invocation',
              path: ridePath + 'structures/common-structures/invocation',
            },
            {
              title: 'Issue',
              path: ridePath + 'structures/common-structures/issue',
            },
            {
              title: 'Order',
              path: ridePath + 'structures/common-structures/order',
            },
            {
              title: 'Reissue',
              path: ridePath + 'structures/common-structures/reissue',
            },
            {
              title: 'ScriptResult',
              path: ridePath + 'structures/common-structures/script-result',
            },
            {
              title: 'ScriptTransfer',
              path: ridePath + 'structures/common-structures/script-transfer',
            },
            {
              title: 'StringEntry',
              path: ridePath + 'structures/common-structures/string-entry',
            },
            {
              title: 'Transfer',
              path: ridePath + 'structures/common-structures/transfer',
            },
            {
              title: 'TransferSet',
              path: ridePath + 'structures/common-structures/transfer-set',
            },
            {
              title: 'WriteSet',
              path: ridePath + 'structures/common-structures/write-set',
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
  ],

  [buildingAppsPath]: [
    {
      title: 'Руководство разработчика',
      path: buildingAppsPath,
    },
    {
      title: 'Cмарт-аккаунт',
      path: programmingPath + 'what-is-smart-account',
      children: [
        {
          title: 'Создание смарт-аккаунта',
          path: programmingPath + 'how-to-create-smart-account',
        },
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
          title: 'Написание dApps',
          path: programmingPath + 'writing-dapps',
        },
        {
          title: 'Руководства',
          path: sdkPath + 'examples',
          children: [
            {
              title: 'Простое голосование на блокчейне Waves',
              path: programmingPath + 'simple-voting-on-the-waves-blockchain',
            },
          ],
        },
      ],
    },
    {
      title: 'Статьи о dApps',
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
          title: 'Клиентские библиотеки',
          path: sdkPath + 'client-libraries',
        },
      ],
    }
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
      title: 'Обновления в документации',
      path: keepInTouchPath + 'docs-update',
    },
  ],
};
