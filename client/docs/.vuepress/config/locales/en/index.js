const fs = require('fs');
const path = require('path');
const deepmerge = require('deepmerge');
const mixin = require('../_mixins');
module.exports = deepmerge(mixin, {
    langIconRawSvg: fs.readFileSync(path.resolve(__dirname, './britain-18.svg')).toString(),
    searchPlaceholderText: 'Search for answer',
    homePage: {
        welcomeText: 'Welcome to the documentation on everything about Waves platform',
        or: 'Or',
        technologyCategoriesText: 'Browse by topic or technology category',
        technologyCategories: {
            all: 'All',
            beginners: 'Beginners',
            advanced: 'Advanced',
            supplementary: 'Supplementary'
        },
        technologyList: {
            learnAboutWavesPlatform: {
                title: 'Learn about Waves Platform',
                caption: 'Overview of the Waves Platform main features. Protocol, consensus, cryptography. Understand the value a blockchain offers.',
                buttonSet: [
                    {
                        text: 'Node API',
                        link: '#'
                    },
                    {
                        text: 'Matcher',
                        link: '#'
                    },
                    {
                        text: 'gRPC',
                        link: '#'
                    },
                    {
                        text: 'Leasing',
                        link: '#'
                    }
                ]
            },
            node: {
                title: 'Node',
                caption: 'Learn about Waves full node. How to install a node. Node configuration and API. Work with node extensions: matcher, gRPC server.',
                buttonSet: [
                    {
                        text: 'DEX',
                        link: '#',
                    },
                    {
                        text: 'Explorer',
                        link: '#',
                    },
                    {
                        text: 'Keeper',
                        link: '#',
                    },
                ],
            },
            ecosystemApplications: {
                title: 'Ecosystem Applications',
                caption: 'Learn about the Waves blockchain ecosystem applications.',
                buttonSet: [
                    {
                        text: 'Smart Contracts',
                        link: '#',
                    },
                    {
                        text: 'Tools',
                        link: '#',
                    },
                    {
                        text: 'API & SDK',
                        link: '#',
                    },
                ],
            },
            buildingBlockchainApps: {
                title: 'Building Blockchain Apps',
                caption: 'Learn how to build a blockchain application with Waves. Understanding Waves Smart Contracts. API & SDK. Developer Tools.',
                buttonSet: [
                    {
                        text: 'Node API',
                        link: '#'
                    },
                    {
                        text: 'Matcher',
                        link: '#'
                    },
                    {
                        text: 'gRPC',
                        link: '#'
                    },
                    {
                        text: 'Leasing',
                        link: '#'
                    }
                ]
            },
            rideProgrammingLanguage: {
                title: 'Ride Programming Language',
                caption: 'Learn the syntax of new Ride programming language that allows building dApps. Examples of use.',
            },
            additionalServices: {
                title: 'Additional Services',
                caption: 'Work with additional services built on the Waves blockchain: Data Services, Oracles, Token Rating, Item Market, DappOcean, PyWaves Statistics, etc.',
                buttonSet: [
                    {
                        text: 'Data Services',
                        link: '#',
                    },
                    {
                        text: 'Oracles',
                        link: '#',
                    },
                    {
                        text: 'Token Rating',
                        link: '#',
                    },
                ],
            },
            miscellaneous: {
                title: 'Miscellaneous',
                caption: 'Waves Platform official resources. Read articles on various topics dedicated to Wave blockchain. Contributing to Waves platform.',
                buttonSet: [
                    {
                        text: 'Official Resources',
                        link: '#',
                    },
                ],
            }
        },
    },

    label: 'English',
    selectText: 'Languages',
    editLinkText: 'Edit on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
        {
            text: 'Home',
            link: '/en/'
        },
        {
            text: 'Blockchain',
            link: '/en/blockchain/'
        },
        {
            text: 'Client',
            link: '/en/client/'
        },
        {
            text: 'DEX',
            link: '/en/dex/'
        },
        {
            text: 'Explorer',
            link: '/en/explorer/'
        },
        {
            text: 'Keeper',
            link: '/en/keeper/'
        },
        {
            text: 'RIDE',
            link: '/en/ride/'
        },
        {
            text: 'Smart contract',
            link: '/en/smart-contracts/'
        },
        {
            text: 'Node',
            link: '/en/node/'
        },
        {
            text: 'Developer tools',
            link: '/en/developer-tools/'
        },
        {
            text: 'API & SDK',
            link: '/en/api-and-sdk/'
        },
        {
            text: 'Oracles',
            link: '/en/oracles/'
        },
        {
            text: 'Token Rating',
            link: '/en/token-rating/'
        }
    ],
    sidebar: {
        '/en/': [
            {
                title: 'Getting started',
                collapsable: true,
                children: [

                    {
                        title: 'Getting started guide',
                        path: '/en/waves-environment/waves-tokens'
                    },
                    {
                        title: 'Custom Tokens',
                        children: [
                            {
                                title: 'Test 3',
                                path: '/en/waves-environment/custom-tokens'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Blockchain',
                collapsable: true,
                children: [
                    {
                        title: 'Account',
                        path: '/en/blockchain/account'
                    },
                    {
                        title: 'Account data storage',
                        path: '/en/blockchain/account-data-storage'
                    }
                ]
            },
            {
                title: 'Waves environment',
                path: '/en/waves-environment',
                collapsable: true,
                children: [

                    {
                        title: 'Waves Tokens',
                        path: '/en/waves-environment/waves-tokens'
                    },
                    {
                        title: 'Custom Tokens',
                        children: [
                            {
                                title: 'Test 3',
                                path: '/en/waves-environment/custom-tokens'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Developer tools',
                collapsable: false
            },
            {
                title: 'Waves api & sdk',
                collapsable: false
            },
            {
                title: 'Smart contracts',
                collapsable: false
            },
            {
                title: 'Waves full node',
                collapsable: false
            },
            {
                title: 'Oracles developments',
                collapsable: false
            },
            {
                title: 'Waves client',
                collapsable: false
            },
            {
                title: 'Tutorials and articles',
                collapsable: false
                // children: [
                //   {
                //     title: 'Test',
                //     path: 'developer-tools/faq'
                //   }
                // ]
            },
            {
                title: 'Proposals',
                collapsable: false
            }
        ],

        '/en/getting-started/': [
            {
                title: 'About RIDE',
                path: '/en/ride/about-ride'
            }
        ],

        '/en/blockchain/': [
            {
                title: 'Account',
                path: '/en/blockchain/account'
            },
            {
                title: 'Account data storage',
                path: '/en/blockchain/account-data-storage'
            },
            {
                title: 'Account script',
                path: '/en/blockchain/account-script'
            },
            {
                title: 'Address',
                path: '/en/blockchain/address'
            },
            {
                title: 'Alias',
                path: '/en/blockchain/alias'
            },
            {
                title: 'Asset',
                path: '/en/blockchain/asset'
            },
            {
                title: 'Asset Script',
                path: '/en/blockchain/asset-script'
            },
            {
                title: 'Block',
                path: '/en/blockchain/block'
            },
            {
                title: 'Block height',
                path: '/en/blockchain/block-height'
            },
            {
                title: 'Blockchain',
                path: '/en/blockchain/blockchain'
            },
            {
                title: 'Blockchain height',
                path: '/en/blockchain/blockchain-height'
            },
            {
                title: 'dApp',
                path: '/en/blockchain/dapp'
            },
            {
                title: 'dApp Script',
                path: '/en/blockchain/dapp-script'
            },
            {
                title: 'Mainnet',
                path: '/en/blockchain/mainnet'
            },
            {
                title: 'Node',
                path: '/en/blockchain/node'
            },
            {
                title: 'Smart account',
                path: '/en/blockchain/smart-account'
            },
            {
                title: 'Smart asset',
                path: '/en/blockchain/smart-asset'
            },
            {
                title: 'Test network',
                path: '/en/blockchain/test-network'
            },
            {
                title: 'Token',
                path: '/en/blockchain/token',
                children: [
                    {
                        title: 'Non-fungible token',
                        path: '/en/blockchain/token/non-fungible-token'
                    },
                    {
                        title: 'WAVES',
                        path: '/en/blockchain/token/waves'
                    },
                    {
                        title: 'WAVELET',
                        path: '/en/blockchain/token/wavelet'
                    },
                    {
                        title: 'WCT',
                        path: '/en/blockchain/token/wct'
                    }
                ]
            },
            {
                title: 'Transaction',
                path: '/en/blockchain/transaction'
            },
            {
                title: 'Transaction data structure',
                path: '/en/blockchain/transaction-data-structure'
            },
            {
                title: 'Transaction fee',
                path: '/en/blockchain/transaction-fee'
            },
            {
                title: 'Transaction proof',
                path: '/en/blockchain/transaction-proof'
            },
            {
                title: 'Transaction signature',
                path: '/en/blockchain/transaction-signature'
            },
            {
                title: 'Transaction type',
                path: '/en/blockchain/transaction-type',
                children: [
                    {
                        title: 'Alias transaction',
                        path: '/en/blockchain/transaction-type/alias-transaction'
                    },
                    {
                        title: 'Burn transaction',
                        path: '/en/blockchain/transaction-type/burn-transaction'
                    },
                    {
                        title: 'Data transaction',
                        path: '/en/blockchain/transaction-type/data-transaction'
                    }
                ]
            },
            {
                title: 'Transaction validation',
                path: '/en/blockchain/transaction-validation'
            }

        ],
        '/en/ride/': [
            {
                title: 'About RIDE',
                path: '/en/ride/about-ride'
            },
            {
                title: 'RIDE script',
                path: '/en/ride/ride-script'
            },
            {
                title: 'RIDE script complexity',
                path: '/en/ride/ride-script-complexity'
            },
            {
                title: 'Immutable variables',
                path: '/en/ride/immutable-variables'
            },
            {
                title: 'Comments in code',
                path: '/en/ride/comments-in-code'
            },
            {
                title: 'Data types',
                path: '/en/ride/data-types'
            },
            {
                title: 'Operators',
                path: '/en/ride/operators'
            },
            {
                title: 'Structures',
                path: '/en/ride/structures/structures',
                children: [
                    {
                        title: 'Built-in structures',
                        path: '/en/ride/structures/built-in-structures'
                    }
                ]
            },
            {
                title: 'Functions',
                path: '/en/ride/functions/functions'
            },
            {
                title: 'Built-in functions',
                path: '/en/ride/built-in-functions/built-in-functions',
                children: [
                    {
                        title: 'Blockchain functions',
                        path: '/en/ride/built-in-functions/blockchain-functions'
                    },
                    {
                        title: 'Byte array functions',
                        path: '/en/ride/built-in-functions/byte-array-functions'
                    },
                    {
                        title: 'Converting functions',
                        path: '/en/ride/built-in-functions/converting-functions'
                    },
                    {
                        title: 'Encoding and decoding functions',
                        path: '/en/ride/built-in-functions/encoding-and-decoding-functions'
                    },
                    {
                        title: 'Exception functions',
                        path: '/en/ride/built-in-functions/exception-functions'
                    },
                    {
                        title: 'List functions',
                        path: '/en/ride/built-in-functions/list-functions'
                    },
                    {
                        title: 'Math functions',
                        path: '/en/ride/built-in-functions/math-functions'
                    },
                    {
                        title: 'String functions',
                        path: '/en/ride/built-in-functions/string-functions'
                    },
                    {
                        title: 'Verification functions',
                        path: '/en/ride/built-in-functions/verification-functions'
                    }
                ]
            },
            {
                title: 'Exceptions',
                path: '/en/ride/exceptions'
            }

        ]

    }
});
