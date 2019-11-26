const fs = require('fs');
const path = require('path');
const deepmerge = require('deepmerge');
const mixin = require('../_mixins');
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
                title: 'test-exchange-tree',
                caption: 'test-exchange-treetest-exchange-treetest-exchange-tree',
            },
            // node: {
            //     title: 'Node',
            //     caption: 'Learn about Waves full node. How to install a node. Node configuration and API. Work with node extensions: matcher, gRPC server.',
            // },
            // ecosystemApplications: {
            //     title: 'Ecosystem Applications',
            //     caption: 'Learn about the Waves blockchain ecosystem applications.',
            // },
            // buildingBlockchainApps: {
            //     title: 'Building Blockchain Apps',
            //     caption: 'Learn how to build a blockchain application with Waves. Understanding Waves Smart Contracts. API & SDK. Developer Tools.',
            // },
            // rideProgrammingLanguage: {
            //     title: 'Ride Programming Language',
            //     caption: 'Learn the syntax of new Ride programming language that allows building dApps. Examples of use.',
            // },
            // additionalServices: {
            //     title: 'Additional Services',
            //     caption: 'Work with additional services built on the Waves blockchain: Data Services, Oracles, Token Rating, Item Market, DappOcean, PyWaves Statistics, etc.',
            // },
            // miscellaneous: {
            //     title: 'Miscellaneous',
            //     caption: 'Waves Platform official resources. Read articles on various topics dedicated to Wave blockchain. Contributing to Waves platform.',
            // }
        },
    },

    label: 'English',
    selectText: 'Languages',
    editLinkText: 'Edit on GitHub',
    lastUpdated: 'Last Updated',
    sidebar: {
        '/en/test-exchange-tree/': [
            {
                title: 'Special for Exchange 1',
                path: '/en/test-exchange-tree/tools',
                children: [
                    {
                        title: 'Test Level level Waves New',
                        path: '/en/test-exchange-tree/tools/test-level-level-waves-new'
                    },
                    {
                        title: 'Exchange REPL',
                        path: '/en/test-exchange-tree/tools/repl',
                        children: [
                            {
                                title: 'Exchange Waves IDE 2',
                                path: '/en/test-exchange-tree/tools/repl/waves-ide',
                                children: [
                                    {
                                        title: 'Simple Exchange Level 4',
                                        path: '/en/test-exchange-tree/tools/repl/waves-ide/simple-voting-on-the-waves-blockchain'
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        title: 'Test Waves IDE new',
                        path: '/en/test-exchange-tree/tools/test-waves-ide-new'
                    },
                    {
                        title: 'trezor-hardware-wallet-integration-specification',
                        path: '/en/test-exchange-tree/tools/trezor-hardware-wallet-integration-specification'
                    },
                ]
            },
            {
                title: 'Special for Exchange 2',
                path: '/en/test-exchange-tree/what-is-a-dapp'
            },
            {
                title: 'Special for Exchange 3',
                path: '/en/test-exchange-tree/writing-dapps'
            },
            {
                title: 'Special for Exchange 4',
                path: '/en/test-exchange-tree/level-1-test-page-1'
            },
            {
                title: 'Group test special for Exchange 4',
                path: '/en/test-exchange-tree/for-example',
                children: [
                    {
                        title: 'Test level 2',
                        path: '/en/test-exchange-tree/for-example/test-level-2',
                        children: [
                            {
                                title: 'Test level 3',
                                path: '/en/test-exchange-tree/for-example/test-level-2/test-level-3',
                                children: [
                                    {
                                        title: 'Level 3 element 1',
                                        path: '/en/test-exchange-tree/for-example/test-level-2/test-level-3/level-3-element-1'
                                    },
                                    {
                                        title: 'Level 3 element 2',
                                        path: '/en/test-exchange-tree/for-example/test-level-2/test-level-3/level-3-element-2'
                                    },
                                    {
                                        title: 'element 3 of level 3 example',
                                        path: '/en/test-exchange-tree/for-example/test-level-2/test-level-3/element-3-of-level-3-example'
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        title: 'Waves IDE',
                        path: '/en/blockchain/token/waves'
                    },
                ]
            },
            {
                title: 'Video tutorials',
                path: '/en/test-exchange-tree/what-is-a-dapp'
            },
            {
                title: 'Articles on dApps',
                path: '/en/test-exchange-tree/what-is-a-dapp'
            },
        ],

        // '/en/node/': [
        //     {
        //         title: 'What is a dApp',
        //         path: '/en/test-exchange-tree/what-is-a-dapp'
        //     }
        // ],
        //
        // '/en/ecosystem-applications/': [
        //     {
        //         title: 'What is a dApp',
        //         path: '/en/test-exchange-tree/what-is-a-dapp'
        //     }
        // ],
        //
        // '/en/building-blockchain-apps/': [
        //     {
        //         title: 'What is a dApp',
        //         path: '/en/test-exchange-tree/what-is-a-dapp'
        //     }
        // ],
        //
        // '/en/ride-programming-language/': [
        //     {
        //         title: 'What is a dApp',
        //         path: '/en/test-exchange-tree/what-is-a-dapp'
        //     }
        // ],
        //
        // '/en/additional-services/': [
        //     {
        //         title: 'What is a dApp',
        //         path: '/en/test-exchange-tree/what-is-a-dapp'
        //     }
        // ],
        //
        // '/en/miscellaneous/': [
        //     {
        //         title: 'What is a dApp',
        //         path: '/en/test-exchange-tree/what-is-a-dapp'
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
