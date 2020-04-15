// const rootPath = 'https://docs.wavesplatform.com/';
const localePath = '/en/';
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
      title: 'About Waves blockchain',
      path: blockchainPath,
    },
    {
      title: 'Account',
      path: blockchainPath + 'account',
      children: [
        {
          title: 'Account balance',
          path: blockchainPath + 'account/account-balance',
        },
        {
          title: 'Account data storage',
          path: blockchainPath + 'account/account-data-storage',
        },
        {
          title: 'Address',
          path: blockchainPath + 'account/address',
        },
        {
          title: 'Alias',
          path: blockchainPath + 'account/alias',
        },
        {
          title: 'dApp',
          path: blockchainPath + 'account/dapp',
        },
        {
          title: 'Smart account',
          path: blockchainPath + 'account/smart-account',
        }
      ],
    },
    {
      title: 'Binary format',
      path: blockchainPath + 'binary-format',
      children: [
        {
          title: 'Address binary format',
          path: blockchainPath + 'binary-format/address-binary-format',
        },
        {
          title: 'Alias binary format',
          path: blockchainPath + 'binary-format/alias-binary-format',
        },
        {
          title: 'Block binary format',
          path: blockchainPath + 'binary-format/block-binary-format',
        },
        {
          title: 'Network message binary format',
          path: blockchainPath + 'binary-format/network-message-binary-format',
          children: [
            {
              title: 'Block message binary format',
              path: blockchainPath + 'binary-format/network-message-binary-format/block-message-binary-format',
            },
            {
              title: 'Checkpoint message binary format',
              path: blockchainPath + 'binary-format/network-message-binary-format/checkpoint-message-binary-format',
            },
            {
              title: 'Get block message binary format',
              path: blockchainPath + 'binary-format/network-message-binary-format/get-block-message-binary-format',
            },
            {
              title: 'Get peers message binary format',
              path: blockchainPath + 'binary-format/network-message-binary-format/get-peers-message-binary-format',
            },
            {
              title: 'Get signatures message binary format',
              path: blockchainPath + 'binary-format/network-message-binary-format/get-signatures-message-binary-format',
            },
            {
              title: 'Handshake message binary format',
              path: blockchainPath + 'binary-format/network-message-binary-format/handshake-message-binary-format',
            },
            {
              title: 'Peers message binary format',
              path: blockchainPath + 'binary-format/network-message-binary-format/peers-message-binary-format',
            },
            {
              title: 'Score message binary format',
              path: blockchainPath + 'binary-format/network-message-binary-format/score-message-binary-format',
            },
            {
              title: 'Signatures message binary format',
              path: blockchainPath + 'binary-format/network-message-binary-format/signatures-message-binary-format',
            },
            {
              title: 'Transaction message binary format',
              path: blockchainPath + 'binary-format/network-message-binary-format/transaction-message-binary-format',
            },
          ]
        },
        {
          title: 'Order binary format',
          path: blockchainPath + 'binary-format/order-binary-format',
        },
        {
          title: 'Transaction binary format',
          path: blockchainPath + 'binary-format/transaction-binary-format',
          children: [
            {
              title: 'Burn transaction binary format',
              path: blockchainPath + 'binary-format/transaction-binary-format/burn-transaction-binary-format',
            },
            {
              title: 'Create alias transaction binary format',
              path: blockchainPath + 'binary-format/transaction-binary-format/create-alias-transaction-binary-format',
            },
            {
              title: 'Data transaction binary format',
              path: blockchainPath + 'binary-format/transaction-binary-format/data-transaction-binary-format',
            },
            {
              title: 'Exchange transaction binary format',
              path: blockchainPath + 'binary-format/transaction-binary-format/exchange-transaction-binary-format',
            },
            {
              title: 'Genesis transaction binary format',
              path: blockchainPath + 'binary-format/transaction-binary-format/genesis-transaction-binary-format',
            },
            {
              title: 'Invoke script binary format',
              path: blockchainPath + 'binary-format/transaction-binary-format/invoke-script-transaction-binary-format',
            },
            {
              title: 'Issue transaction binary format',
              path: blockchainPath + 'binary-format/transaction-binary-format/issue-transaction-binary-format',
            },
            {
              title: 'Lease cancel transaction binary format',
              path: blockchainPath + 'binary-format/transaction-binary-format/lease-cancel-transaction-binary-format',
            },
            {
              title: 'Lease transaction binary format',
              path: blockchainPath + 'binary-format/transaction-binary-format/lease-transaction-binary-format',
            },
            {
              title: 'Mass transfer transaction binary format',
              path: blockchainPath + 'binary-format/transaction-binary-format/mass-transfer-transaction-binary-format',
            },
            {
              title: 'Reissue transaction binary format',
              path: blockchainPath + 'binary-format/transaction-binary-format/reissue-transaction-binary-format',
            },
            {
              title: 'Set asset script transaction binary format',
              path: blockchainPath + 'binary-format/transaction-binary-format/set-asset-script-transaction-binary-format',
            },
            {
              title: 'Set script transaction binary format',
              path: blockchainPath + 'binary-format/transaction-binary-format/set-script-transaction-binary-format',
            },
            {
              title: 'Sponsor fee transaction binary format',
              path: blockchainPath + 'binary-format/transaction-binary-format/sponsor-fee-transaction-binary-format',
            },
            {
              title: 'Transfer transaction binary format',
              path: blockchainPath + 'binary-format/transaction-binary-format/transfer-transaction-binary-format',
            },
          ],
        },
        {
          title: 'Transaction proof binary format',
          path: blockchainPath + 'binary-format/transaction-proof-binary-format',
        },
        {
          title: 'Transaction protobuf scheme',
          path: blockchainPath + 'binary-format/transaction-protobuf-scheme',
          children: [
              {
                  title: 'Burn transaction protobuf scheme',
                  path: blockchainPath + 'binary-format/transaction-protobuf-scheme/burn-transaction-protobuf-scheme',
              },
              {
                  title: 'Create alias transaction protobuf scheme',
                  path: blockchainPath + 'binary-format/transaction-protobuf-scheme/create-alias-transaction-protobuf-scheme',
              },
              {
                  title: 'Data transaction protobuf scheme',
                  path: blockchainPath + 'binary-format/transaction-protobuf-scheme/data-transaction-protobuf-scheme',
              },
              {
                  title: 'Exchange transaction protobuf scheme',
                  path: blockchainPath + 'binary-format/transaction-protobuf-scheme/exchange-transaction-protobuf-scheme',
              },
              {
                  title: 'Genesis transaction protobuf scheme',
                  path: blockchainPath + 'binary-format/transaction-protobuf-scheme/genesis-transaction-protobuf-scheme',
              },
              {
                  title: 'Invoke script transaction protobuf scheme',
                  path: blockchainPath + 'binary-format/transaction-protobuf-scheme/invoke-script-transaction-protobuf-scheme',
              },
              {
                  title: 'Issue transaction protobuf scheme',
                  path: blockchainPath + 'binary-format/transaction-protobuf-scheme/issue-transaction-protobuf-scheme',
              },
              {
                  title: 'Lease cancel transaction protobuf scheme',
                  path: blockchainPath + 'binary-format/transaction-protobuf-scheme/lease-cancel-transaction-protobuf-scheme',
              },
              {
                  title: 'Lease transaction protobuf scheme',
                  path: blockchainPath + 'binary-format/transaction-protobuf-scheme/lease-transaction-protobuf-scheme',
              },
              {
                  title: 'Mass transfer transaction protobuf scheme',
                path: blockchainPath + 'binary-format/transaction-protobuf-scheme/mass-transfer-transaction-protobuf-scheme',
              },
              {
                  title: 'Reissue transaction protobuf scheme',
                  path: blockchainPath + 'binary-format/transaction-protobuf-scheme/reissue-transaction-protobuf-scheme',
              },
              {
                  title: 'Set asset script transaction protobuf scheme',
                  path: blockchainPath + 'binary-format/transaction-protobuf-scheme/set-asset-script-transaction-protobuf-scheme',
              },
              {
                  title: 'Set script transaction protobuf scheme',
                  path: blockchainPath + 'binary-format/transaction-protobuf-scheme/set-script-transaction-protobuf-scheme',
              },
              {
                  title: 'Sponsor fee transaction protobuf scheme',
                  path: blockchainPath + 'binary-format/transaction-protobuf-scheme/sponsor-fee-transaction-protobuf-scheme',
              },
              {
                  title: 'Transfer transaction protobuf scheme',
                  path: blockchainPath + 'binary-format/transaction-protobuf-scheme/transfer-transaction-protobuf-scheme',
              },
              {
                  title: 'Update asset info transaction protobuf scheme',
                  path: blockchainPath + 'binary-format/transaction-protobuf-scheme/update-asset-info-transaction-protobuf-scheme',
              },
          ]
        },
      ],
    },
    {
      title: 'Block',
      path: blockchainPath + 'block',
      children: [
        {
          title: 'Block generation',
          path: blockchainPath + 'block/block-generation',
          children: [
            {
              title: 'Base target',
              path: blockchainPath + 'block/block-generation/base-target',
            },
            {
              title: 'Generation signature',
              path: blockchainPath + 'block/block-generation/generation-signature',
            },
          ],
        },
        {
          title: 'Block height',
          path: blockchainPath + 'block/block-height',
        },
        {
          title: 'Block signature',
          path: blockchainPath + 'block/block-signature',
        },
        {
          title: 'Block timestamp',
          path: blockchainPath + 'block/block-timestamp',
        },
        {
          title: 'Transations Root Hash',
          path: blockchainPath + 'block/merkle-root',
        },
        {
          title: 'Genesis block',
          path: blockchainPath + 'block/genesis-block',
        },
      ]
    },
    {
      title: 'Blockchain',
      path: blockchainPath + 'blockchain',
      children: [
        {
          title: 'Blockchain data types',
          path: blockchainPath + 'blockchain/blockchain-data-types',
        },
        {
          title: 'Blockchain height',
          path: blockchainPath + 'blockchain/blockchain-height',
        },
      ],
    },
    {
      title: 'Blockchain network',
      path: blockchainPath + 'blockchain-network',
      children: [
        {
          title: 'Chain ID',
          path: blockchainPath + 'blockchain-network/chain-id',
        },
        {
          title: 'Main network',
          path: blockchainPath + 'blockchain-network/main-network',
        },
        {
          title: 'Test network',
          path: blockchainPath + 'blockchain-network/test-network',
        },
        {
          title: 'Stage network',
          path: blockchainPath + 'blockchain-network/stage-network',
        },
      ],
    },
    {
      title: 'Leased Proof of Stake',
      path: blockchainPath + 'leasing',
    },
    {
      title: 'Mining',
      path: blockchainPath + 'mining',
      children: [
        {
          title: 'Miner',
          path: blockchainPath + 'mining/miner',
        },
        {
          title: 'Mining account',
          path: blockchainPath + 'mining/mining-account',
        },
        {
          title: 'Mining reward',
          path: blockchainPath + 'mining/mining-reward',
        },
      ],
    },
    {
      title: 'Matcher fee',
      path: blockchainPath + 'matcher-fee',
    },
    {
      title: 'Node',
      path: blockchainPath + 'node',
      children: [
        {
          title: 'Mining node',
          path: blockchainPath + 'node/mining-node',
        },
        {
          title: 'Validating node',
          path: blockchainPath + 'node/validating-node',
        },
      ],
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
      title: 'Token',
      path: blockchainPath + 'token',
      children: [
        {
          title: 'Non-fungible token',
          path: blockchainPath + 'token/non-fungible-token',
        },
        {
          title: 'Smart asset',
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
      title: 'Transaction',
      path: blockchainPath + 'transaction',
      children: [
        {
          title: 'Transaction ID',
          path: blockchainPath + 'transaction/transaction-id',
        },
        {
          title: 'Transaction body bytes',
          path: blockchainPath + 'transaction/transaction-body-bytes',
        },
        {
          title: 'Transaction fee',
          path: blockchainPath + 'transaction/transaction-fee',
        },
        {
          title: 'Transaction proof',
          path: blockchainPath + 'transaction/transaction-proof',
        },
        {
          title: 'Transaction signature',
          path: blockchainPath + 'transaction/transaction-signature',
        },
        {
          title: 'Transaction timestamp',
          path: blockchainPath + 'transaction/transaction-timestamp',
        },
        {
          title: 'Transaction validation',
          path: blockchainPath + 'transaction/transaction-validation',
        },
        {
          title: 'Transaction version',
          path: blockchainPath + 'transaction/transaction-version',
        },
      ]
    },
    {
      title: 'Transaction type',
      path: blockchainPath + 'transaction-type',
      children: [
        {
          title: 'Burn transaction',
          path: blockchainPath + 'transaction-type/burn-transaction',
        },
        {
          title: 'Create alias transaction',
          path: blockchainPath + 'transaction-type/create-alias-transaction',
        },
        {
          title: 'Data transaction',
          path: blockchainPath + 'transaction-type/data-transaction',
        },
        {
          title: 'Exchange transaction',
          path: blockchainPath + 'transaction-type/exchange-transaction',
        },
        {
          title: 'Genesis transaction',
          path: blockchainPath + 'transaction-type/genesis-transaction',
        },
        {
          title: 'Invoke script transaction',
          path: blockchainPath + 'transaction-type/invoke-script-transaction',
        },
        {
          title: 'Issue transaction',
          path: blockchainPath + 'transaction-type/issue-transaction',
        },
        {
          title: 'Lease cancel transaction',
          path: blockchainPath + 'transaction-type/lease-cancel-transaction',
        },
        {
          title: 'Lease transaction',
          path: blockchainPath + 'transaction-type/lease-transaction',
        },
        {
          title: 'Mass transfer transaction',
          path: blockchainPath + 'transaction-type/mass-transfer-transaction',
        },
        {
          title: 'Reissue transaction',
          path: blockchainPath + 'transaction-type/reissue-transaction',
        },
        {
          title: 'Set asset script transaction',
          path: blockchainPath + 'transaction-type/set-asset-script-transaction',
        },
        {
          title: 'Set script transaction',
          path: blockchainPath + 'transaction-type/set-script-transaction',
        },
        {
          title: 'Transfer transaction',
          path: blockchainPath + 'transaction-type/transfer-transaction',
        },
        {
          title: 'Update asset info transaction',
          path: blockchainPath + 'transaction-type/update-asset-info-transaction',
        },
      ]
    },
    {
      title: 'Waves protocol',
      path: blockchainPath + 'waves-protocol',
      children: [
        {
          title: 'Cryptographic practical details',
          path: blockchainPath + 'waves-protocol/cryptographic-practical-details',
        },
        {
          title: 'Validation rules',
          path: blockchainPath + 'waves-protocol/validation-rules',
        },
        {
          title: 'Waves-NG solution',
          path: blockchainPath + 'waves-protocol/waves-ng-solution',
        },
        {
          title: 'Sponsored fee',
          path: blockchainPath + 'waves-protocol/sponsored-fee',
        },
        {
          title: 'Fair Proof of Stake',
          path: blockchainPath + 'waves-protocol/fair-pos',
        },
        {
          title: 'Waves-NG protocol',
          path: blockchainPath + 'waves-protocol/waves-ng-protocol',
        },
        {
          title: 'Activation protocol',
          path: blockchainPath + 'waves-protocol/activation-protocol',
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
      title: 'Get Waves Blockchain',
      path: nodePath + 'options-for-getting-actual-blockchain',
      children: [
        {
          title: 'Export/Import Blockchain',
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
      title: 'Node API',
      path: nodePath + 'node-api',
      children: [
        {
          title: 'Request headers',
          path: nodePath + 'node-api/headers',
        },
        {
          title: 'Activation',
          path: nodePath + 'node-api/feature-activation',
        },	
        {
          title: 'Address',
          path: nodePath + 'node-api/address',
        },
        {
          title: 'Lease Transactions',
          path: nodePath + 'node-api/lease-transactions',
        },
        {
          title: 'Assets',
          path: nodePath + 'node-api/asset-transactions',
          children: [
            {
              title: 'Public Functions',
              path: nodePath + 'node-api/asset-transactions/public-functions',
            },
            {
              title: 'Private Functions',
              path: nodePath + 'node-api/asset-transactions/private-functions',
            },
            {
              title: 'Distribution Methods',
              path: nodePath + 'node-api/asset-transactions/distribution-methods',
            }
          ],
        },
        {
          title: 'Alias Transaction',
          path: nodePath + 'node-api/alias-transaction',
        },
        {
          title: 'Transactions',
          path: nodePath + 'node-api/transactions',
        },
        {
          title: 'Peers',
          path: nodePath + 'node-api/peers',
        },
        {
          title: 'Blocks',
          path: nodePath + 'node-api/blocks',
        },
        {
          title: 'Utils',
          path: nodePath + 'node-api/utils',
        },
        {
          title: 'Examples of transactions',
          path: nodePath + 'node-api/example-transactions',
        },
	    {
          title: 'API limitations of the pool of public nodes',
          path: nodePath + 'api-limitations-of-the-pool-of-public-nodes',
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
      ]
    },
	{
      title: 'Troubleshooting',
      path: nodePath + 'node-troubleshooting',
	},
  ],

  [ridePath]: [
    {
      title: 'Ride Programming Language',
      path: ridePath,
    },
    {
      title: 'Getting started',
      path: ridePath + 'getting-started',
    },
    {
      title: 'Base concepts',
      path: ridePath + 'base-concepts',
      children: [
        {
          title: 'Definition',
          path: ridePath + 'base-concepts/definition',
        },
        {
          title: 'Expression',
          path: ridePath + 'base-concepts/expression',
        },
      ],
    },
    {
      title: 'Comments',
      path: ridePath + 'comments',
    },
    {
      title: 'Constants',
      path: ridePath + 'constants',
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
          title: 'Union',
          path: ridePath + 'data-types/union',
        },
      ],
    },
    {
      title: 'Exceptions',
      path: ridePath + 'exceptions',
    },
    {
      title: 'Functions',
      path: ridePath + 'functions',
      children: [
        {
          title: 'Annotations',
          path: ridePath + 'functions/annotations',
        },
        {
          title: 'Built-in functions',
          path: ridePath + 'functions/built-in-functions',
          children: [
            {
              title: 'Account data storage functions',
              path: ridePath + 'functions/built-in-functions/account-data-storage-functions',
            },
            {
              title: 'Blockchain functions',
              path: ridePath + 'functions/built-in-functions/blockchain-functions',
            },
            {
              title: 'Byte array functions',
              path: ridePath + 'functions/built-in-functions/byte-array-functions',
            },
            {
              title: 'Converting functions',
              path: ridePath + 'functions/built-in-functions/converting-functions',
            },
            {
              title: 'Data transaction functions',
              path: ridePath + 'functions/built-in-functions/data-transaction-functions',
            },
            {
              title: 'Decoding functions',
              path: ridePath + 'functions/built-in-functions/decoding-functions',
            },
            {
              title: 'Encoding functions',
              path: ridePath + 'functions/built-in-functions/encoding-functions',
            },
            {
              title: 'Exception functions',
              path: ridePath + 'functions/built-in-functions/exception-functions',
            },
            {
              title: 'Hashing functions',
              path: ridePath + 'functions/built-in-functions/hashing-functions',
            },
            {
              title: 'List functions',
              path: ridePath + 'functions/built-in-functions/list-functions',
            },
            {
              title: 'Math functions',
              path: ridePath + 'functions/built-in-functions/math-functions',
            },
            {
              title: 'String functions',
              path: ridePath + 'functions/built-in-functions/string-functions',
            },
            {
              title: 'Union functions',
              path: ridePath + 'functions/built-in-functions/union-functions',
            },
            {
              title: 'Verification functions',
              path: ridePath + 'functions/built-in-functions/verification-functions',
            },
          ],
        },
        {
          title: 'Callable function',
          path: ridePath + 'functions/callable-function',
        },
        {
          title: 'Verifier function',
          path: ridePath + 'functions/verifier-function',
        },
      ],
    },
    {
      title: 'FOLD<N> Macro',
      path: ridePath + 'fold-macro',
    },
    {
      title: 'Operators',
      path: ridePath + 'operators',
      children: [
        {
          title: 'match-case',
          path: ridePath + 'operators/match-case',
        },
      ]
    },
    {
      title: 'Script',
      path: ridePath + 'script',
      children: [
        {
          title: 'Directives',
          path: ridePath + 'script/directives',
        },
        {
          title: 'Script body',
          path: ridePath + 'script/script-body',
        },
        {
          title: 'Script context',
          path: ridePath + 'script/script-context',
        },
        {
          title: 'Script types',
          path: ridePath + 'script/script-types',
          children: [
            {
              title: 'Account script',
              path: ridePath + 'script/script-types/account-script',
            },
            {
              title: 'Asset script',
              path: ridePath + 'script/script-types/asset-script',
            },
            {
              title: 'dApp script',
              path: ridePath + 'script/script-types/dapp-script',
            },
          ],
        },
        {
          title: 'Standard Library',
          path: ridePath + 'script/standard-library',
        },
      ],
    },
    {
      title: 'Structures',
      path: ridePath + 'structures',
      children: [
        {
          title: 'Script actions',
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
          title: 'Script results (v3)',
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
          title: 'Common structures',
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
          title: 'Transaction structures',
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
      title: 'Variables',
      path: ridePath + 'variables',
      children: [
        {
          title: 'Built-in variables',
          path: ridePath + 'variables/built-in-variables',
        },
      ],
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
      title: 'Script performance tests',
      path: ridePath + 'script-performance-tests',
    },
  ],

  [buildingAppsPath]: [
    {
      title: 'Getting Started',
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
        }
      ]
    },
    {
      title: 'Waves Smart Contracts',
      path: programmingPath + 'waves-smart-contracts-overview',
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
          title: 'Writing dApps',
          path: programmingPath + 'writing-dapps',
        },
      ],
    },
    {
      title: 'Articles on Smart Contracts',
      path: programmingPath + 'articles-on-dapps',
    },
    {
      title: 'Tools',
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
          title: 'Waves data service API',
          path: sdkPath + 'waves-data-service-api',
        },
        {
          title: 'Client libraries',
          path: sdkPath + 'client-libraries',
          children: [
            {
              title: 'Signer',
              path: sdkPath + 'client-libraries/signer',
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
              title: 'Waves transactions',
              path: sdkPath + 'client-libraries/waves-transactions',
            },
            {
              title: 'Community libraries',
              path: sdkPath + 'client-libraries/unofficial-libraries',
            },
          ],
        },
        {
          title: 'Waves Games',
          path: sdkPath + 'waves-gaming-api',
          children: [
            {
              title: 'Waves Games API',
              path: sdkPath + 'waves-gaming-api/waves-games-api',
            },
            {
              title: 'Examples',
              path: sdkPath + 'waves-gaming-api/examples',
            },
          ],
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
      title: 'Saving Failed Transactions',
      path: keepInTouchPath + 'april',
    },
    {
      title: 'Documentation Updates',
      path: keepInTouchPath + 'docs-update',
    },
  ],
};
