// const { fs, path } = require('@vuepress/shared-utils');
const beforeDevServer = require('./config/beforeDevServer/');
// console.log('test', process.env)

module.exports = (ctx) => {
    return {

        beforeDevServer,

        dest: '../../vuepress',
        port: 3083,

        locales: {
            '/en/': {
                lang: 'en-US',
                title: 'Waves documentation',
                description: 'Waves documentation in English'
            },
            '/ru/': {
                lang: 'ru-RU',
                title: 'Документация Waves',
                description: 'Документация Waves на русском'
            }
        },
        head: [
            ['link', { rel: 'icon', href: `/favicon-32x32.png` }],
            ['link', { rel: 'manifest', href: '/manifest.json' }],
            ['meta', { name: 'theme-color', content: '#1f5af6' }],
            ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
            ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
            ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
            ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#1f5af6' }],
            ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
            ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
        ],
        theme: '../../../../@vuepress/theme-default',
        themeConfig: {
            env: {
                adminServerUrl: process.env.adminServerUrl
            },
            logo: '/waves-docs-logo.svg',
            repo: 'vuejs/vuepress',
            editLinks: true,
            docsDir: 'packages/docs/docs',
            // #697 Provided by the official algolia team.
            // algolia: ctx.isProd ? ({
            //   apiKey: '3a539aab83105f01761a137c61004d85',
            //   indexName: 'vuepress'
            // }) : null,
            locales: {
                '/en/': {
                    label: 'English',
                    selectText: 'Languages',
                    editLinkText: 'Edit on GitHub',
                    lastUpdated: 'Last Updated',
                    nav: require('./nav/en'),
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
                },

                '/ru/': {
                    label: 'Русский',
                    selectText: 'Язык',
                    editLinkText: 'Изменить эту страницу на GitHub',
                    lastUpdated: 'Последние изменения',
                    nav: require('./nav/ru'),
                    sidebar: {
                        '/ru/': [
                            {
                                title: 'Обзор',
                                collapsable: true
                            },
                            {
                                title: 'Waves environment',
                                collapsable: true,
                                children: [
                                    {
                                        title: 'Waves Tokens',
                                        path: '/ru/waves-environment/waves-tokens'
                                    },
                                    {
                                        title: 'Custom Tokens',
                                        path: '/ru/waves-environment/custom-tokens'
                                    }
                                ]
                            },
                            {
                                title: 'Getting started',
                                collapsable: false
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

                                collapsable: false,
                                children: [
                                    {
                                        title: 'Test',
                                        path: 'developer-tools/faq'
                                    }
                                ]
                            },
                            {
                                title: 'Proposals',
                                collapsable: false
                            }
                        ],
                        '/ru/blockchain/': [
                            {
                                title: 'Псевдоним',
                                path: '/ru/blockchain/account'
                            }
                        ]

                    }
                }
            }
        },
        plugins: [
            ['@vuepress/back-to-top', true],
            ['@vuepress/pwa', {
                serviceWorker: true,
                updatePopup: true
            }],
            ['@vuepress/medium-zoom', true],
            ['@vuepress/google-analytics', {
                ga: 'UA-128189152-1'
            }],
            ['container', {
                type: 'vue',
                before: '<pre class="vue-container"><code>',
                after: '</code></pre>'
            }],
            ['container', {
                type: 'upgrade',
                before: info => `<UpgradePath title="${info}">`,
                after: '</UpgradePath>'
            }]

            // ['serve', {
            //     async beforeServer(app, server) {
            //         const inspector = require('inspector');
            //         inspector.open(9229, '127.0.0.1');
            //         await new Promise(resolve => {})
            //         console.log('app')
            //         app.get('/path/to/my/custom', function(req, res) {
            //             res.json({ custom: 'response' })
            //         })
            //     },
            // }],

            // ['redirect', {
            //     // provide i18n redirection
            //     // it will automatically redirect `/foo/bar/` to `/:locale/foo/bar/` if exists
            //     locales: true,
            //     redirectors: [
            //         // customize your redirectors
            //         {
            //             // locales: true,
            //             base: /*'/my-plugins/'*/'/', // automatically redirect `/my-plugins/` to a subpage
            //             // storage: true, // save the result of the last visit to `localStorage` for the next redirect
            //             alternative: [
            //                 // provide an alternate list
            //                 // if no page was matched, you will get a "404 not found"
            //                 'mathjax', // equivalent to `/my-plugins/mathjax/`
            //                 // 'migrate',
            //                 // 'pangu',
            //                 // 'redirect',
            //                 // 'serve',
            //             ]
            //         },
            //     ],
            // }],

        ],
        // extraWatchFiles: [
        //     '.vuepress/nav/en.js',
        //     '.vuepress/nav/zh.js'
        // ]

        // configureWebpack () {
        //   return {
        //     resolve: {
        //       alias: {
        //         '@public': path.join(__dirname, './public')
        //       }
        //     }
        //   }
        // },

    }
}
