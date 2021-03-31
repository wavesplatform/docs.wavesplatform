// const rootPath = 'https://docs.wavesplatform.com/';
const localePath = '/en/';
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
      title: 'Why Waves',
      path: blockchainPath,
    },
    {
      title: 'Waves Basics',
      path: blockchainPath + 'blockchain',
    },
    {
      title: 'Account',
      path: blockchainPath + 'account',
      children: [
        {
          title: 'Creating Account',
          path: blockchainPath + 'account/create',
        },
        {
          title: 'Address',
          path: blockchainPath + 'account/address',
        },
        {
          title: 'Account Balance',
          path: blockchainPath + 'account/account-balance',
        },
        {
          title: 'Account Data Storage',
          path: blockchainPath + 'account/account-data-storage',
        },
        {
          title: 'Alias',
          path: blockchainPath + 'account/alias',
        },
        {
          title: 'dApp and Smart Account',
          path: blockchainPath + 'account/dapp',
        },
      ],
    },
    {
      title: 'Token (Asset)',
      path: blockchainPath + 'token',
      children: [
        {
          title: 'Non-Fungible Token',
          path: blockchainPath + 'token/non-fungible-token',
        },
        {
          title: 'Smart Asset',
          path: blockchainPath + 'token/smart-asset',
        },
        {
          title: 'Token ID',
          path: blockchainPath + 'token/token-id',
        },
        {
          title: 'WAVES',
          path: blockchainPath + 'token/waves',
        },
      ],
    },
    {
      title: 'Transaction',
      path: blockchainPath + 'transaction',
      children: [
        {
          title: 'Transaction Fee',
          path: blockchainPath + 'transaction/transaction-fee',
          children: [
            {
              title: 'Sponsored Fee',
              path: blockchainPath + 'waves-protocol/sponsored-fee',
            },
          ]
        },
        {
          title: 'Signature and Proofs',
          path: blockchainPath + 'transaction/transaction-proof',
        },
        {
          title: 'Transaction Types',
          path: blockchainPath + 'transaction-type',
          children: [
            {
              title: 'Burn Transaction',
              path: blockchainPath + 'transaction-type/burn-transaction',
            },
/*            {
              title: 'Continuation Transaction',
              path: blockchainPath + 'transaction-type/continuation-transaction',
            }, */
            {
              title: 'Create Alias Transaction',
              path: blockchainPath + 'transaction-type/create-alias-transaction',
            },
            {
              title: 'Data Transaction',
              path: blockchainPath + 'transaction-type/data-transaction',
            },
            {
              title: 'Exchange Transaction',
              path: blockchainPath + 'transaction-type/exchange-transaction',
            },
            {
              title: 'Genesis Transaction',
              path: blockchainPath + 'transaction-type/genesis-transaction',
            },
            {
              title: 'Invoke Script Transaction',
              path: blockchainPath + 'transaction-type/invoke-script-transaction',
            },
            {
              title: 'Issue Transaction',
              path: blockchainPath + 'transaction-type/issue-transaction',
            },
            {
              title: 'Lease Cancel Transaction',
              path: blockchainPath + 'transaction-type/lease-cancel-transaction',
            },
            {
              title: 'Lease Transaction',
              path: blockchainPath + 'transaction-type/lease-transaction',
            },
            {
              title: 'Mass Transfer Transaction',
              path: blockchainPath + 'transaction-type/mass-transfer-transaction',
            },
            {
              title: 'Reissue Transaction',
              path: blockchainPath + 'transaction-type/reissue-transaction',
            },
            {
              title: 'Set Asset Script Transaction',
              path: blockchainPath + 'transaction-type/set-asset-script-transaction',
            },
            {
              title: 'Set Script Transaction',
              path: blockchainPath + 'transaction-type/set-script-transaction',
            },
            {
              title: 'Sponsor Fee Transaction',
              path: blockchainPath + 'transaction-type/sponsor-fee-transaction',
            },
            {
              title: 'Transfer Transaction',
              path: blockchainPath + 'transaction-type/transfer-transaction',
            },
            {
              title: 'Update Asset Info Transaction',
              path: blockchainPath + 'transaction-type/update-asset-info-transaction',
            },
          ]
        },
        {
          title: 'Transaction Validation',
          path: blockchainPath + 'transaction/transaction-validation',
        },
      ]
    },
    {
      title: 'Mainnet, Testnet, Stagenet',
      path: blockchainPath + 'blockchain-network',
    },
    {
      title: 'Node',
      path: blockchainPath + 'node',
      children: [
        {
          title: 'Generating Node',
          path: blockchainPath + 'node/mining-node',
        },
        {
          title: 'Validating Node',
          path: blockchainPath + 'node/validating-node',
        },
        {
          title: 'Generator’s Income',
          path: blockchainPath + 'mining',
        },
        {
          title: 'Block Reward',
          path: blockchainPath + 'mining/mining-reward',
        },
        {
          title: 'Leased Proof of Stake',
          path: blockchainPath + 'leasing',
        },
      ],
    },
    {
      title: 'Block',
      path: blockchainPath + 'block',
      children: [
        {
          title: 'Block Generation',
          path: blockchainPath + 'block/block-generation',
          children: [
            {
              title: 'Base Target',
              path: blockchainPath + 'block/block-generation/base-target',
            },
            {
              title: 'Generation Signature',
              path: blockchainPath + 'block/block-generation/generation-signature',
            },
          ],
        },
        {
          title: 'Block Height',
          path: blockchainPath + 'block/block-height',
        },
        {
          title: 'Block Signature',
          path: blockchainPath + 'block/block-signature',
        },
        {
          title: 'Block Timestamp',
          path: blockchainPath + 'block/block-timestamp',
        },
        {
          title: 'Transactions Root Hash',
          path: blockchainPath + 'block/merkle-root',
        },
        {
          title: 'Genesis Block',
          path: blockchainPath + 'block/genesis-block',
        },
      ]
    },
    {
      title: 'Oracle',
      path: blockchainPath + 'oracle',
    },
    {
      title: 'Order',
      path: blockchainPath + 'order',
    },
    {
      title: 'Protocols & Data formats',
      path: blockchainPath + 'waves-protocol',
      children: [
        {
          title: 'Cryptographic Practical Details',
          path: blockchainPath + 'waves-protocol/cryptographic-practical-details',
        },
        {
          title: 'Waves-NG Solution',
          path: blockchainPath + 'waves-protocol/waves-ng-solution',
        },
        {
          title: 'Waves-NG Protocol',
          path: blockchainPath + 'waves-protocol/waves-ng-protocol',
        },
        {
          title: 'Fair Proof of Stake',
          path: blockchainPath + 'waves-protocol/fair-pos',
        },
        {
          title: 'Blockchain Data Types',
          path: blockchainPath + 'blockchain/blockchain-data-types',
        },
        {
          title: 'Binary Format',
          path: blockchainPath + 'binary-format',
          children: [
            {
              title: 'Address Binary Format',
              path: blockchainPath + 'binary-format/address-binary-format',
            },
            {
              title: 'Alias Binary Format',
              path: blockchainPath + 'binary-format/alias-binary-format',
            },
            {
              title: 'Block Binary Format',
              path: blockchainPath + 'binary-format/block-binary-format',
            },
            {
              title: 'Network Message Binary Format',
              path: blockchainPath + 'binary-format/network-message-binary-format',
              children: [
                {
                  title: 'Block Message Binary Format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/block-message-binary-format',
                },
                {
                  title: 'Checkpoint Message Binary Format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/checkpoint-message-binary-format',
                },
                {
                  title: 'Get Block Message Binary Format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/get-block-message-binary-format',
                },
                {
                  title: 'Get Peers Message Binary Format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/get-peers-message-binary-format',
                },
                {
                  title: 'Get Signatures Message Binary Format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/get-signatures-message-binary-format',
                },
                {
                  title: 'Handshake Message Binary Format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/handshake-message-binary-format',
                },
                {
                  title: 'Peers Message Binary Format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/peers-message-binary-format',
                },
                {
                  title: 'Score Message Binary Format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/score-message-binary-format',
                },
                {
                  title: 'Signatures Message Binary Format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/signatures-message-binary-format',
                },
                {
                  title: 'Transaction Message Message Binary Format',
                  path: blockchainPath + 'binary-format/network-message-binary-format/transaction-message-binary-format',
                },
              ]
            },
            {
               title: 'Order Binary Format',
              path: blockchainPath + 'binary-format/order-binary-format',
            },
            {
              title: 'Transaction Binary Format',
              path: blockchainPath + 'binary-format/transaction-binary-format',
              children: [
                {
                  title: 'Burn Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/burn-transaction-binary-format',
                },
/*                {
                  title: 'Continuation Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/continuation-transaction-binary-format',
                }, */
                {
                  title: 'Create Alias Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/create-alias-transaction-binary-format',
                },
                {
                  title: 'Data Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/data-transaction-binary-format',
                },
                {
                  title: 'Exchange Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/exchange-transaction-binary-format',
                },
                {
                  title: 'Genesis Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/genesis-transaction-binary-format',
                },
                {
                  title: 'Invoke Script Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/invoke-script-transaction-binary-format',
                },
                {
                  title: 'Issue Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/issue-transaction-binary-format',
                },
                {
                  title: 'Lease Cancel Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/lease-cancel-transaction-binary-format',
                },
                {
                  title: 'Lease Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/lease-transaction-binary-format',
                },
                {
                  title: 'Mass Transfer Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/mass-transfer-transaction-binary-format',
                },
                {
                  title: 'Reissue Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/reissue-transaction-binary-format',
                },
                {
                  title: 'Set Asset Script Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/set-asset-script-transaction-binary-format',
                },
                {
                  title: 'Set Script Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/set-script-transaction-binary-format',
                },
                {
                  title: 'Sponsor Fee Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/sponsor-fee-transaction-binary-format',
                },
                {
                  title: 'Transfer Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/transfer-transaction-binary-format',
                },
                {
                  title: 'Update Asset Info Transaction Binary Format',
                  path: blockchainPath + 'binary-format/transaction-binary-format/update-asset-info-transaction-binary-format',
                },
              ],
            },
            {
              title: 'Transaction Proof Binary Format',
              path: blockchainPath + 'binary-format/transaction-proof-binary-format',
            },
          ],
        },
        {
          title: 'Validation Rules',
          path: blockchainPath + 'waves-protocol/validation-rules',
        },
      ],
    },
    {
      title: 'Glossary',
      path: blockchainPath + 'glossary',
    },
  ],

  [nodePath]: [
    {
      title: 'Node Owner Guide',
      path: nodePath,
    },
    {
      title: 'Install Waves Node',
      path: nodePath + 'how-to-install-a-node/how-to-install-a-node',
      children: [
        {
          title: 'Deploy Node in Docker',
          path: nodePath + 'waves-node-in-docker',
        },
        {
          title: 'Install Node on Ubuntu',
          path: nodePath + 'how-to-install-a-node/on-ubuntu',
        },	
        {
          title: 'Install Node on macOS',
          path: nodePath + 'how-to-install-a-node/on-mac',
        },
        {
          title: 'Install Node on Windows',
          path: nodePath + 'how-to-install-a-node/on-windows',
        },
        {
          title: 'Install from Source (Building SBT)',
          path: nodePath + 'how-to-build-and-test-a-node',
        },
        {
          title: 'Deploy Node in Cloud',
          path: nodePath + 'how-to-install-a-node/clouds',
          children: [
            {
              title: 'Deploy Node in Yandex.Cloud',
              path: nodePath + 'running-waves-node-in-yandex-cloud',
            },
          ]
        },
      ],
    },
    {
      title: 'Synchronize Waves Blockchain',
      path: nodePath + 'options-for-getting-actual-blockchain',
      children: [
        {
          title: 'Import/Export Blockchain',
          path: nodePath + 'options-for-getting-actual-blockchain/import-from-the-blockchain',
        },
        {
          title: 'Download the Latest Blockchain',
          path: nodePath + 'options-for-getting-actual-blockchain/state-downloading-and-applying',
        },
        {
          title: 'Rollback Waves Node',
          path: nodePath + 'how-to-rollback-a-node',
        },
      ],
    },
    {
      title: 'Upgrade Waves Node',
      path: nodePath + 'upgrading',
    },
    {
      title: 'Node Configuration',
      path: nodePath + 'node-configuration',
    },
    {
      title: 'Logging Configuration',
      path: nodePath + 'logging-configuration',
    },
    {
      title: 'Node Wallet',
      path: nodePath + 'how-to-work-with-node-wallet',
    },	
    {
      title: 'Features',
      path: nodePath + 'features',
      children: [
      {
        title: 'Activation protocol',
          path: nodePath + 'activation-protocol',
        },
      ],
    },
    {
      title: 'Custom Blockchain',
      path: nodePath + 'private-waves-network',
    },
    {
      title: 'Node REST API',
      path: nodePath + 'node-api',
      children: [
        {
          title: 'API Key',
          path: nodePath + 'node-api/api-key',
        },
        {
          title: 'Working with Transactions',
          path: nodePath + 'node-api/transactions',
        },
        {
          title: 'Monetary Fields',
          path: nodePath + 'node-api/headers',
        },
        {
          title: 'Pagination',
          path: nodePath + 'node-api/pagination',
        },
        {
          title: 'CORS',
          path: nodePath + 'node-api/cors',
        },
        {
          title: 'API Limitations of Pool of Public Nodes',
          path: nodePath + 'api-limitations-of-the-pool-of-public-nodes',
        },
        {
          title: 'Response Codes and Errors',
          path: nodePath + 'node-api/response',
        },
      ],
    },
    {
      title: 'Extensions',
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
      title: 'Troubleshooting',
      path: nodePath + 'node-troubleshooting',
	  children: [
	    {
			title: 'Block Generation FAQ',
			path: nodePath + 'block-generation-faq',
		},
	  ]
	},
	{
      title: 'Node Go',
      path: nodePath + 'node-go',
	},
  ],

  [ridePath]: [
    {
      title: 'Ride Programming Language',
      path: ridePath,
    },
    {
      title: 'Getting Started',
      path: ridePath + 'getting-started',
    },
    {
      title: 'Syntax Basics',
      path: ridePath + 'base-concepts',
      children: [
        {
          title: 'Directives',
          path: ridePath + 'script/directives',
        },
        {
          title: 'Definition',
          path: ridePath + 'base-concepts/definition',
        },
        {
          title: 'Expression',
          path: ridePath + 'base-concepts/expression',
        },
        {
          title: 'Constant',
          path: ridePath + 'constants',
        },
        {
          title: 'Variable',
          path: ridePath + 'variables',
        },
        {
          title: 'Function',
          path: ridePath + 'functions',
        },
        {
          title: 'Exception',
          path: ridePath + 'exceptions',
        },
        {
          title: 'Comment',
          path: ridePath + 'comments',
        },
      ],
    },
    {
      title: 'Script Types',
      path: ridePath + 'script',
      children: [
        {
          title: 'dApp Script',
          path: ridePath + 'script/script-types/dapp-script',
          children: [
            {
              title: 'Annotations',
              path: ridePath + 'functions/annotations',
            },
            {
              title: 'Callable Function',
              path: ridePath + 'functions/callable-function',
            },
            {
              title: 'Verifier Function',
              path: ridePath + 'functions/verifier-function',
            },
          ],
        },
        {
          title: 'Account Script',
          path: ridePath + 'script/script-types/account-script',
        },
        {
          title: 'Asset Script',
          path: ridePath + 'script/script-types/asset-script',
        },
      ],
    },
    {
      title: 'Standard Library',
      path: ridePath + 'script/standard-library',
    },
    {
      title: 'Data types',
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
          title: 'Tuple',
          path: ridePath + 'data-types/tuple',
        },
        {
          title: 'Union',
          path: ridePath + 'data-types/union',
        },
      ],
    },
    {
      title: 'Structures',
      path: ridePath + 'structures',
      children: [
        {
          title: 'Script Actions',
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
          title: 'Script Results (v3)',
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
          title: 'Common Structures',
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
          title: 'Transaction Structures',
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
              title: 'SponsorFeeTransaction',
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
      title: 'Built-in Variables',
      path: ridePath + 'variables/built-in-variables',
    },
    {
      title: 'Built-in Functions',
      path: ridePath + 'functions/built-in-functions',
      children: [
        {
          title: 'Account Data Storage Functions',
          path: ridePath + 'functions/built-in-functions/account-data-storage-functions',
        },
        {
          title: 'Blockchain Functions',
          path: ridePath + 'functions/built-in-functions/blockchain-functions',
        },
        {
          title: 'Byte Array Functions',
          path: ridePath + 'functions/built-in-functions/byte-array-functions',
        },
        {
          title: 'Converting Functions',
          path: ridePath + 'functions/built-in-functions/converting-functions',
        },
        {
          title: 'Data Transaction Functions',
          path: ridePath + 'functions/built-in-functions/data-transaction-functions',
        },
        {
          title: 'Decoding Functions',
          path: ridePath + 'functions/built-in-functions/decoding-functions',
        },
        {
          title: 'Encoding Functions',
          path: ridePath + 'functions/built-in-functions/encoding-functions',
        },
        {
          title: 'Exception Functions',
          path: ridePath + 'functions/built-in-functions/exception-functions',
        },
        {
          title: 'Hashing Functions',
          path: ridePath + 'functions/built-in-functions/hashing-functions',
        },
        {
          title: 'List Functions',
          path: ridePath + 'functions/built-in-functions/list-functions',
        },
        {
          title: 'Math Functions',
          path: ridePath + 'functions/built-in-functions/math-functions',
        },
        {
          title: 'String Functions',
          path: ridePath + 'functions/built-in-functions/string-functions',
        },
        {
          title: 'Union Functions',
          path: ridePath + 'functions/built-in-functions/union-functions',
        },
        {
          title: 'Verification Functions',
          path: ridePath + 'functions/built-in-functions/verification-functions',
        },
      ],
    },
    {
      title: 'Operators',
      path: ridePath + 'operators',
    },
    {
      title: 'Pattern Matching: match-case',
      path: ridePath + 'operators/match-case',
    },
    {
      title: 'Interations with FOLD<N>',
      path: ridePath + 'fold-macro',
    },
    {
      title: 'Limitations',
      path: ridePath + 'limits',
      children: [
        {
          title: 'Complexity',
          path: ridePath + 'base-concepts/complexity',
        },
        {
          title: 'Data Weight',
          path: ridePath + 'limits/weight',
        },
      ],
    },
    {
      title: 'Version 5 (Stagenet)',
      path: rideV5Path,
      children: [
        {
          title: 'dApp-to-dApp Invocation',
          path: ridePath + 'advanced/dapp-to-dapp',
        },
/*        {
          title: 'Continued Computations',
          path: ridePath + 'advanced/continuation',
        },*/
        {
          title: 'Strict Variable',
          path: rideV5Path + 'variables',
        },
        {
          title: 'Callable Function',
          path: rideV5Path + 'functions/callable-function',
        },
        {
          title: 'Data types',
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
              title: 'Tuple',
              path: rideV5Path + 'data-types/tuple',
            },
            {
              title: 'Union',
              path: rideV5Path + 'data-types/union',
            },
          ],
        },
        {
          title: 'Structures',
          path: rideV5Path + 'structures',
          children: [
            {
              title: 'Script Actions',
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
              title: 'Common Structures',
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
              title: 'Transaction Structures',
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
          title: 'Built-in Variables',
          path: rideV5Path + 'variables/built-in-variables',
        },
        {
          title: 'Built-in Functions',
          path: rideV5Path + 'functions/built-in-functions',
          children: [
            {
              title: 'Account Data Storage Functions',
              path: rideV5Path + 'functions/built-in-functions/account-data-storage-functions',
            },
            {
              title: 'Blockchain Functions',
              path: rideV5Path + 'functions/built-in-functions/blockchain-functions',
            },
            {
              title: 'Byte Array Functions',
              path: rideV5Path + 'functions/built-in-functions/byte-array-functions',
            },
            {
              title: 'Converting Functions',
              path: rideV5Path + 'functions/built-in-functions/converting-functions',
            },
            {
              title: 'Data Transaction Functions',
              path: rideV5Path + 'functions/built-in-functions/data-transaction-functions',
            },
            {
              title: 'Decoding Functions',
              path: rideV5Path + 'functions/built-in-functions/decoding-functions',
            },
            {
              title: 'Encoding Functions',
              path: rideV5Path + 'functions/built-in-functions/encoding-functions',
            },
            {
              title: 'Exception Functions',
              path: rideV5Path + 'functions/built-in-functions/exception-functions',
            },
            {
              title: 'Hashing Functions',
              path: rideV5Path + 'functions/built-in-functions/hashing-functions',
            },
            {
              title: 'dApp-to-dApp Invocation Function',
              path: rideV5Path + 'functions/built-in-functions/dapp-to-dapp',
            },
            {
              title: 'List Functions',
              path: rideV5Path + 'functions/built-in-functions/list-functions',
            },
            {
              title: 'Math Functions',
              path: rideV5Path + 'functions/built-in-functions/math-functions',
            },
            {
              title: 'String Functions',
              path: rideV5Path + 'functions/built-in-functions/string-functions',
            },
            {
              title: 'Union Functions',
              path: rideV5Path + 'functions/built-in-functions/union-functions',
            },
            {
              title: 'Verification Functions',
              path: rideV5Path + 'functions/built-in-functions/verification-functions',
            },
          ],
        },
        {
          title: 'Operators',
          path: rideV5Path + 'operators',
        },
        {
          title: 'Limitations',
          path: rideV5Path + 'limits',
          children: [
            {
              title: 'Data Weight',
              path: rideV5Path + 'limits/weight',
            },
          ],
        },
      ],
    },
    {
      title: 'Ride Components',
      path: ridePath + 'advanced/components',
    },
    {
      title: 'Script performance tests',
      path: ridePath + 'script-performance-tests',
    },
  ],

  [buildingAppsPath]: [
    {
      title: 'Overview',
      path: buildingAppsPath,
    },
    {
      title: 'How-to Guides',
      path: buildingAppsPath + 'how-to',
      children: [
        {
          title: 'Reading Blockchain Data',
          path: buildingAppsPath + 'how-to/basic/retrieve',
        },
        {
          title: 'Creating & Broadcasting Transactions',
          path: buildingAppsPath + 'how-to/basic/transaction',
        },
        {
          title: 'Tokenization',
          path: buildingAppsPath + 'how-to/assets/issue',
        },
        {
          title: 'Airdrop',
          path: buildingAppsPath + 'how-to/assets/airdrop',
        },
        {
          title: 'Payments',
          path: buildingAppsPath + 'how-to/assets/payment',
        },
        {
          title: 'Buying & Selling Tokens',
          path: buildingAppsPath + 'how-to/basic/trading',
        },
        {
          title: 'Creating Crypto Trading Bot',
          path: sdkPath + 'examples/trading-bot',
        },
        {
          title: 'Simple Voting',
          path: programmingPath + 'simple-voting-on-the-waves-blockchain',
        },
        {
          title: 'Reading Band’s Price Data',
          path: buildingAppsPath + 'how-to/dapp/band-price-oracle',
        },
      ]
    },
    {
      title: 'Waves Smart Contracts',
      path: programmingPath + 'waves-smart-contracts-overview',
      children: [
        {
          title: 'Articles on Smart Contracts',
          path: programmingPath + 'articles-on-dapps',
        },
      ],
    },
    {
      title: 'Smart Account',
      path: programmingPath + 'what-is-smart-account',
      children: [
        {
          title: 'Creating smart account',
          path: programmingPath + 'how-to-create-smart-account',
        },
        {
          title: 'Creating and deploying a script manually',
          path: programmingPath + 'creating-and-deploying-a-script-manually',
        },
        {
          title: 'Video tutorials',
          path: programmingPath + 'video-tutorials',
          children: [
            {
              title: 'Introduction to the Waves blockchain, Waves Smart Accounts and Waves Smart Assets',
              path: programmingPath + 'video-tutorials/introduction-waves-smart-accounts-assets',
            },
            {
              title: 'Waves Smart Account with multisignature',
              path: programmingPath + 'video-tutorials/waves-smart-account-with-multisignature',
            },
            {
              title: 'Waves Smart Account with escrow service',
              path: programmingPath + 'video-tutorials/waves-smart-account-with-escrow-service',
            },
            {
              title: 'Creating multisignature account via Waves IDE tools',
              path: programmingPath + 'video-tutorials/creating-multisignature-account-via-waves-ide-tools',
            },
            {
              title: 'Creating multisignature account via Waves Client',
              path: programmingPath + 'video-tutorials/creating-multisignature-account-via-waves-client',
            },
            {
              title: 'Waves console explained',
              path: programmingPath + 'video-tutorials/waves-console-explained',
            },
          ],
        },
      ],
    },
    {
      title: 'Smart Asset',
      path: programmingPath + 'smart-assets',
      children: [
        {
          title: 'What is a Smart Asset',
          path: programmingPath + 'what-is-smart-asset',
        },
      ],
    },
    {
      title: 'dApp',
      path: programmingPath + 'what-is-a-dapp',
      children: [
        {
          title: 'Creating & Launching dApp',
          path: programmingPath + 'writing-dapps',
        },
      ],
    },
    {
      title: 'Developer Tools',
      path: programmingPath + 'tools',
      children: [
        {
          title: 'Waves IDE',
          path: programmingPath + 'tools/waves-ide',
        },
        {
          title: 'Visual Studio Code Extension',
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
      title: 'Client libraries',
      path: sdkPath + 'client-libraries',
      children: [
        {
          title: 'Waves transactions',
          path: sdkPath + 'client-libraries/waves-transactions',
        },
        {
          title: 'PyWaves',
          path: sdkPath + 'client-libraries/pywaves',
        },
        {
          title: 'WavesJ',
          path: sdkPath + 'client-libraries/wavesj',
        },
        {
          title: 'WavesCS',
          path: sdkPath + 'client-libraries/wavescs',
        },
        {
          title: 'WavesC',
          path: sdkPath + 'client-libraries/waves-c',
        },
        {
          title: 'GoWaves',
          path: sdkPath + 'client-libraries/gowaves',
        },
        {
          title: 'WavesRS',
          path: sdkPath + 'client-libraries/wavesrs',
        },
        {
          title: 'Community libraries',
          path: sdkPath + 'client-libraries/unofficial-libraries',
        },
      ],
    },
  ],

  [ecosystemPath]: [
    {
      title: 'Ecosystem Apps',
      path: ecosystemPath,
    },
    {
      title: 'Waves Explorer',
      path: ecosystemPath + 'waves-explorer/about-waves-explorer',
    },
    {
      title: 'Account balance top up in the test network',
      path: ecosystemPath + 'waves-explorer/account-balance-top-up-in-the-test-network',
    },
    {
      title: 'Waves Keeper',
      path: ecosystemPath + 'waves-keeper',
      children: [
        {
          title: 'Getting started with Waves Keeper',
          path: ecosystemPath + 'waves-keeper/getting-started-with-keeper',
        },
        {
          title: 'Waves Keeper API',
          path: ecosystemPath + 'waves-keeper/waves-keeper-api',
          children: [
            {
              title: 'Transaction Format',
              path: ecosystemPath + 'waves-keeper/transaction',
            },
          ],
        },
      ],
    },
    {
      title: 'Oracles',
      path: ecosystemPath + 'waves-oracles/about-waves-oracles',
      children: [
        {
          title: 'Create an oracle card with Waves Oracle',
          path: ecosystemPath + 'waves-oracles/create-an-oracle-card-with-waves-oracle',
        },
        {
          title: 'Create an oracle card with a data transaction',
          path: ecosystemPath + 'waves-oracles/create-an-oracle-card-with-a-data-transaction',
        },
        {
          title: 'Oracle card',
          path: ecosystemPath + 'waves-oracles/oracle-card',
        },
        {
          title: 'Updating oracle card',
          path: ecosystemPath + 'waves-oracles/updating-oracle-card',
        },
        {
          title: 'Data transaction tool',
          path: ecosystemPath + 'waves-oracles/data-transaction-tool',
        },
        {
          title: 'How to create an oracle',
          path: ecosystemPath + 'waves-oracles/how-to-create-an-oracle',
        },
      ],
    },
    {
      title: 'Token Rating',
      path: ecosystemPath + 'waves-token-rating/about-waves-token-rating',
      children: [
        {
          title: 'User interface',
          path: ecosystemPath + 'waves-token-rating/user-interface',
        },
        {
          title: 'Rating formula',
          path: ecosystemPath + 'waves-token-rating/rating-formula',
        },
        {
          title: 'Data transaction with user\'s rate',
          path: ecosystemPath + 'waves-token-rating/data-transaction-with-user-s-rate',
        },
        {
          title: 'Data transaction of the Token Rating oracle',
          path: ecosystemPath + 'waves-token-rating/data-transaction-of-the-token-rating-oracle',
        },
        {
          title: 'Token management',
          path: ecosystemPath + 'waves-token-rating/token-management',
        },
      ],
    },
  ],

  [keepInTouchPath]: [
    {
      title: 'Keep in Touch',
      path: keepInTouchPath,
    },
    {
      title: 'Release Notes',
      path: keepInTouchPath + 'release-notes',
    },
	{
      title: 'Release Notes (Node Go)',
      path: keepInTouchPath + 'release-notes-go',
    },
    {
      title: 'Saving Failed Transactions',
      path: keepInTouchPath + 'april',
    },
    {
      title: 'Documentation Updates',
      path: keepInTouchPath + 'docs-update',
    },
  ],
};
