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
                title: 'What is a dApp',
                path: '/en/learn-about-waves-platform/what-is-a-dapp'
            },
            {
                title: 'Writing dApps',
                path: '/en/learn-about-waves-platform/writing-dapps'
            },
            {
                title: 'Simple voting on the Waves',
                path: '/en/learn-about-waves-platform/level-1-test-page-1'
            },
            {
                title: 'Smart Accounts',
                path: '/en/learn-about-waves-platform/level-1-test-page-2'
            },
            {
                title: 'Waves Smart Contracts',
                path: '/en/learn-about-waves-platform/level-1-test-page-3'
            },
            {
                title: 'Smart Assets',
                path: '/en/learn-about-waves-platform/level-1-test-page-4'
            },
            {
                title: 'Tools',
                path: '/en/learn-about-waves-platform/tools',
                children: [
                    {
                        title: 'Test Level level Waves New',
                        path: '/en/learn-about-waves-platform/tools/test-level-level-waves-new'
                    },
                    {
                        title: 'REPL',
                        path: '/en/learn-about-waves-platform/tools/repl',
                        children: [
                            {
                                title: 'Waves IDE 2',
                                path: '/en/learn-about-waves-platform/tools/repl/waves-ide',
                                children: [
                                    {
                                        title: 'Simple voting on the Waves blockchain',
                                        path: '/en/learn-about-waves-platform/tools/repl/waves-ide/simple-voting-on-the-waves-blockchain'
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        title: 'Test Waves IDE new',
                        path: '/en/learn-about-waves-platform/tools/test-waves-ide-new'
                    },
                    {
                        title: 'trezor-hardware-wallet-integration-specification',
                        path: '/en/learn-about-waves-platform/tools/trezor-hardware-wallet-integration-specification'
                    },
                ]
            },
            {
                title: 'Script performance tests',
                path: '/en/learn-about-waves-platform/what-is-a-dapp'
            },
            {
                title: 'Creating and deploying a script manually',
                path: '/en/learn-about-waves-platform/what-is-a-dapp'
            },
            {
                title: 'For example',
                path: '/en/learn-about-waves-platform/for-example',
                children: [
                    {
                        title: 'Test level 2',
                        path: '/en/learn-about-waves-platform/for-example/test-level-2',
                        children: [
                            {
                                title: 'Test level 3',
                                path: '/en/learn-about-waves-platform/for-example/test-level-2/test-level-3',
                                children: [
                                    {
                                        title: 'Level 3 element 1',
                                        path: '/en/learn-about-waves-platform/for-example/test-level-2/test-level-3/level-3-element-1'
                                    },
                                    {
                                        title: 'Level 3 element 2',
                                        path: '/en/learn-about-waves-platform/for-example/test-level-2/test-level-3/level-3-element-2'
                                    },
                                    {
                                        title: 'element 3 of level 3 example',
                                        path: '/en/learn-about-waves-platform/for-example/test-level-2/test-level-3/element-3-of-level-3-example'
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
                path: '/en/learn-about-waves-platform/what-is-a-dapp'
            },
            {
                title: 'Articles on dApps',
                path: '/en/learn-about-waves-platform/what-is-a-dapp'
            },
        ],

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
