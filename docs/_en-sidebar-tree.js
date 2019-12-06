const rootPath = 'https://docs.wavesplatform.com/'
const localePath = 'en/';
const blockchainPath = rootPath + localePath + 'blockchain/';
const nodePath = rootPath + localePath + 'waves-node/';
const programmingPath = rootPath + localePath + 'smart-contracts/';
const ridePath = rootPath + localePath + 'ride';
const sdkPath = rootPath + localePath + 'waves-api-and-sdk/';
const ending = '.html';

module.exports = {
	[understandingPath]: [
		{
			title: 'Understanding Waves Blockchain',
			path: understandigPath,
			children: [
				{
					title: 'Account';
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
									title: 'Get signatures message binary format' + binary-format/network-message-binary-format/get-signatures-message-binary-format',
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
								title: 'Alias transaction binary format',
								path: blockchainPath + 'binary-format/transaction-binary-format/alias-transaction-binary-format',
							},
							{
								title: 'Burn transaction binary format',
								path: blockchainPath + 'binary-format/transaction-binary-format/burn-transaction-binary-format',
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
								title: 'Invoke script binary format',
								path: blockchainPath + 'binary-format/transaction-binary-format/invoke-script-transaction-binary-format',
							},
								title: 'Issue transaction binary format',
								path: blockchainPath + 'binary-format/transaction-binary-format/issue-transaction-binary-format',
							},
								title: 'Lease cancel transaction binary format',
								path: blockchainPath + 'binary-format/transaction-binary-format/lease-cancel-transaction-binary-format',
							},
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
								title: 'Sponsorship transaction binary format',
								path: blockchainPath + 'binary-format/transaction-binary-format/sponsorship-transaction-binary-format',
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
								path: blockchainPath + 'block/block-generation/base-targetэб
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
				]
			},
			{
				title: 'Blockchain network',
				path: blockchain-network',
				children: [
					{
						title: 'Chain ID',
						path: blockchainPath + 'blockchain-network/chain-id',
					}
					{
						title: 'Main network',
						path: blockchainPath + 'blockchain-network/main-network',
					},
					{
						title: 'Test network',
						path: blockchainPath + 'blockchain-network/test-network',
					},
					}',
					}
				]
			},
			{
				title: 'Leasing Proof of Stake',
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
						title: 'Alias transaction',
						path: blockchainPath + 'transaction-type/alias-transaction',
					},
					{
						title: 'Burn transaction',
						path: blockchainPath + 'transaction-type/burn-transaction',
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
				]
			},
			{
				title: 'Waves protocol'
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
			]
		},
		{
			title: 'Glossary',
			path: rootPath + localePath + '/en/glossary/glossary',
		},
	],
	[nodePath]: [
		title: 'Node',
		path: rootPath + localePath + 'getting-started/getting-started-for-node-owners",
		children: [
			{
				title: 'What is Waves full node',
				path: nodePath + 'what-is-a-full-node',
			},
			{
				title: 'Prerequisites',
				path: nodePath + 'prerequisites',
				children: [
					{
						title: 'Hardware requirements',
						path: nodePath + 'prerequisites/hardware-requirements',
					}
				]
			},
			{
				title: 'How To install a node';
				path: nodePath + 'how-to-install-a-node/how-to-install-a-node',
				children: [
					{
						title: 'On Mac';
						path: nodePath + 'how-to-install-a-node/on-mac',
					},
					{
						title: 'On Windows';
						path: nodePath + 'how-to-install-a-node/on-windows',
					},
					{
						title: 'On Ubuntu';
						path: nodePath + 'how-to-install-a-node/on-ubuntu',
					}
				],
			},
			{
				title: 'How to build and test a node';
				path: nodePath + 'how-to-build-and-test-a-node',
			},
			{
				title: 'Options for getting actual blockchain';
				path: nodePath + 'options-for-getting-actual-blockchain',
				children: [
					{
						title: 'State downloading and applying';
						path: nodePath + 'options-for-getting-actual-blockchain/state-downloading-and-applying',
					},
					{
						title: 'Import from the blockchain';
						path: nodePath + 'options-for-getting-actual-blockchain/import-from-the-blockchain',
					},
					{
						title: 'Export to the blockchain';
						path: nodePath + 'options-for-getting-actual-blockchain/export-and-import-from-the-blockchain',
					},
				],
			},
			{
				title: 'Upgrading Waves Node';
				path: nodePath + 'upgrading',
			},
			{
				title: 'How to rollback a node';
				path: nodePath + 'how-to-rollback-a-node',
			},
			{
				title: 'Waves node in Docker';
				path: nodePath + 'waves-node-in-docker',
			},
			{
				title: 'Joining testnet';
				path: nodePath + 'joining-testnet',
			},
			{
				title: 'Private Waves network';
				path: nodePath + 'private-waves-network',
			},
			{
				title: 'Extensions';
				path: nodePath + 'extensions',
				children: [
					{
						title: 'gRPC Server';
						path: nodePath + 'extensions/grpc-server',
						children: [
							{
								title: 'gRPC Server installation';
								path: nodePath + 'extensions/grpc-server/grpc-server-installation',
							},
						],
					},
					{
						title: 'Matcher';
						path: nodePath + 'extensions/matcher',
						children: [
							{
								title: 'Installing matcher on Ubuntu from deb-package',
								path: nodepath + 'waves-node/extensions/matcher/matcher-install-ubuntu-deb',
							},
							{
								title: 'Matcher settings',
								path: nodepath + 'waves-node/extensions/matcher/matcher-settings',
							}
						]
					},
				]
			},
			{
				title: 'Features';
				path: nodePath + 'features/features',
				children: [
					{
						title: 'Feature';
						path: nodePath + 'features/feature',
					},
					{
						title: 'Feature activation protocol';
						path: nodePath + 'features/feature-activation-protocol',
					}
				],
			},
			{
				title: 'Node configuration file';
				path: nodePath + 'node-configuration-file',
			},
			{
				title: 'Node configuration';
				path: nodePath + 'node-configuration',
			},
			{
				title: 'Logging configuration';
				path: nodePath + 'logging-configuration',
			},
			{
				title: 'Node API';
				path: nodePath + 'node-api',
				children: [
					{
						title: 'Address';
						path: nodePath + 'node-api/address',
					},
					{
						title: 'Lease Transactions';
						path: nodePath + 'node-api/lease-transactions',
					},
					{
						title: 'Assets';
						path: nodePath + 'node-api/asset-transactions',
						children: [
							{
								title: 'Public Functions';
								path: nodePath + 'node-api/asset-transactions/public-functions',
							},
							{
								title: 'Private Functions';
								path: nodePath + 'node-api/asset-transactions/private-functions',
							},
							{
								title: 'Distribution Methods';
								path: nodePath + 'node-api/asset-transactions/distribution-methods',
							}
						],
					},
					{
						title: 'Alias Transaction';
						path: nodePath + 'node-api/alias-transaction',
					},
					{
						title: 'Transactions';
						path: nodePath + 'node-api/transactions',
					},
					{
						title: 'Peers';
						path: nodePath + 'node-api/peers',
					},
					{
						title: 'Blocks';
						path: nodePath + 'node-api/blocks',
					},
					{
						title: 'Utils';
						path: nodePath + 'node-api/utils',
					},
					{
						title: 'Examples of transactions';
						path: nodePath + 'node-api/example-transactions',
					}
				],
			},
			{
				title: 'Running Waves Node in Yandex.Cloud';
				path: nodePath + 'running-waves-node-in-yandex-cloud',
			},
			{
				title: 'API limitations of the pool of public nodes';
				path: nodePath + 'api-limitations-of-the-pool-of-public-nodes',
			},
		]
	]


};
