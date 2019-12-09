const fs = require('fs');
const path = require('path');
const deepmerge = require('deepmerge');
const mixin = require('../_mixins');

const rootPath = ''
const localePath = '/en/';
const blockchainPath = rootPath + localePath + 'blockchain/';
const nodePath = rootPath + localePath + 'waves-node/';
const programmingPath = rootPath + localePath + 'smart-contracts/';
const ridePath = rootPath + localePath + 'ride';
const sdkPath = rootPath + localePath + 'waves-api-and-sdk/';
const ending = '.html';

module.exports = deepmerge(mixin, {
    langIconRawSvg: fs.readFileSync(path.resolve(__dirname, './britain-18.svg')).toString(),
    searchPlaceholderText: 'Enter a term and press Return…',
    homePage: {
        welcomeText: 'Welcome to the documentation on everything about Waves platform',
        or: 'Or',
        technologyCategoriesText: 'Browse by topic or technology category',
        technologyCategories: {
            all: 'All',
            beginner: 'Beginner',
            advanced: 'Advanced',
            supplementary: 'Supplementary'
        },
        technologyList: {
            learnAboutWavesPlatform: {
                title: 'Learn about Waves Platform',
                caption: 'Overview of the Waves Platform main features. Protocol, consensus, cryptography. Understand the value a blockchain offers.',
            },
            node: {
                title: 'Node',
                caption: 'Learn about Waves full node. How to install a node. Node configuration and API. Work with node extensions: matcher, gRPC server.',
            },
            ecosystemApplications: {
                title: 'Ecosystem Applications',
                caption: 'Learn about the Waves blockchain ecosystem applications.',
            },
            buildingBlockchainApps: {
                title: 'Building Blockchain Apps',
                caption: 'Learn how to build a blockchain application with Waves. Understanding Waves Smart Contracts. API & SDK. Developer Tools.',
            },
            rideProgrammingLanguage: {
                title: 'Ride Programming Language',
                caption: 'Learn the syntax of new Ride programming language that allows building dApps. Examples of use.',
            },
            additionalServices: {
                title: 'Additional Services',
                caption: 'Work with additional services built on the Waves blockchain: Data Services, Oracles, Token Rating, Item Market, DappOcean, PyWaves Statistics, etc.',
            },
            miscellaneous: {
                title: 'Miscellaneous',
                caption: 'Waves Platform official resources. Read articles on various topics dedicated to Wave blockchain. Contributing to Waves platform.',
            }
        },
    },

    label: 'English',
    selectText: 'Languages',
    editLinkText: 'Edit on GitHub',
    lastUpdated: 'Last Updated',
    sidebar: {
        '/en/learn-about-waves-platform/': [
		{
			title: 'Understanding Waves Blockchain',
			path: blockchainPath,
			children: [
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
									path: blockchainPath + 'block/block-generation/base-target',
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
					],
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
					]
				},
				{
					title: 'Glossary',
					path: rootPath + localePath + '/en/glossary/glossary',
				},
			],
		},
	]

        // '/en/node/': [
        //     {
        //         title: 'What is a dApp',
        //         path: '/en/learn-about-waves-platform/what-is-a-dapp'
        //     }
        // ],
        //
        // '/en/ecosystem-applications/': [
        //     {
        //         title: 'What is a dApp',
        //         path: '/en/learn-about-waves-platform/what-is-a-dapp'
        //     }
        // ],
        //
        // '/en/building-blockchain-apps/': [
        //     {
        //         title: 'What is a dApp',
        //         path: '/en/learn-about-waves-platform/what-is-a-dapp'
        //     }
        // ],
        //
        // '/en/ride-programming-language/': [
        //     {
        //         title: 'What is a dApp',
        //         path: '/en/learn-about-waves-platform/what-is-a-dapp'
        //     }
        // ],
        //
        // '/en/additional-services/': [
        //     {
        //         title: 'What is a dApp',
        //         path: '/en/learn-about-waves-platform/what-is-a-dapp'
        //     }
        // ],
        //
        // '/en/miscellaneous/': [
        //     {
        //         title: 'What is a dApp',
        //         path: '/en/learn-about-waves-platform/what-is-a-dapp'
        //     }
        // ],
        //
        // '/en/blockchain/': [
        //     {
        //         title: 'Account',
        //         path: '/en/blockchain/account'
        //     },
        //     {
        //         title: 'Account data storage',
        //         path: '/en/blockchain/account-data-storage'
        //     },
        //     {
        //         title: 'Account script',
        //         path: '/en/blockchain/account-script'
        //     },
        //     {
        //         title: 'Address',
        //         path: '/en/blockchain/address'
        //     },
        //     {
        //         title: 'Alias',
        //         path: '/en/blockchain/alias'
        //     },
        //     {
        //         title: 'Asset',
        //         path: '/en/blockchain/asset'
        //     },
        //     {
        //         title: 'Asset Script',
        //         path: '/en/blockchain/asset-script'
        //     },
        //     {
        //         title: 'Block',
        //         path: '/en/blockchain/block'
        //     },
        //     {
        //         title: 'Block height',
        //         path: '/en/blockchain/block-height'
        //     },
        //     {
        //         title: 'Blockchain',
        //         path: '/en/blockchain/blockchain'
        //     },
        //     {
        //         title: 'Blockchain height',
        //         path: '/en/blockchain/blockchain-height'
        //     },
        //     {
        //         title: 'dApp',
        //         path: '/en/blockchain/dapp'
        //     },
        //     {
        //         title: 'dApp Script',
        //         path: '/en/blockchain/dapp-script'
        //     },
        //     {
        //         title: 'Mainnet',
        //         path: '/en/blockchain/mainnet'
        //     },
        //     {
        //         title: 'Node',
        //         path: '/en/blockchain/node'
        //     },
        //     {
        //         title: 'Smart account',
        //         path: '/en/blockchain/smart-account'
        //     },
        //     {
        //         title: 'Smart asset',
        //         path: '/en/blockchain/smart-asset'
        //     },
        //     {
        //         title: 'Test network',
        //         path: '/en/blockchain/test-network'
        //     },
        //     {
        //         title: 'Token',
        //         path: '/en/blockchain/token',
        //         children: [
        //             {
        //                 title: 'Non-fungible token',
        //                 path: '/en/blockchain/token/non-fungible-token'
        //             },
        //             {
        //                 title: 'WAVES',
        //                 path: '/en/blockchain/token/waves'
        //             },
        //             {
        //                 title: 'WAVELET',
        //                 path: '/en/blockchain/token/wavelet'
        //             },
        //             {
        //                 title: 'WCT',
        //                 path: '/en/blockchain/token/wct'
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Transaction',
        //         path: '/en/blockchain/transaction'
        //     },
        //     {
        //         title: 'Transaction data structure',
        //         path: '/en/blockchain/transaction-data-structure'
        //     },
        //     {
        //         title: 'Transaction fee',
        //         path: '/en/blockchain/transaction-fee'
        //     },
        //     {
        //         title: 'Transaction proof',
        //         path: '/en/blockchain/transaction-proof'
        //     },
        //     {
        //         title: 'Transaction signature',
        //         path: '/en/blockchain/transaction-signature'
        //     },
        //     {
        //         title: 'Transaction type',
        //         path: '/en/blockchain/transaction-type',
        //         children: [
        //             {
        //                 title: 'Alias transaction',
        //                 path: '/en/blockchain/transaction-type/alias-transaction'
        //             },
        //             {
        //                 title: 'Burn transaction',
        //                 path: '/en/blockchain/transaction-type/burn-transaction'
        //             },
        //             {
        //                 title: 'Data transaction',
        //                 path: '/en/blockchain/transaction-type/data-transaction'
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Transaction validation',
        //         path: '/en/blockchain/transaction-validation'
        //     }
        //
        // ],
    }
});
