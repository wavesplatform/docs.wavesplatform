const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
  dest: '../../vuepress',
  port: 3083,
  locales: {
    '/en/': {
      lang: 'en-US',
      title: 'Waves Docs',
      description: 'Vue-powered Static Site Generator'
    },
    '/ru/': {
      lang: 'ru-RU',
      title: 'Waves Docs',
      description: 'Waves документация на русском'
    },
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
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
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        sidebar: {
          '/en/introduction/': [
            {
              title: 'Overview',
              collapsable: true
            },
            {
              title: 'Waves environment',
              path: '/en/introduction/waves-environment',
              collapsable: true,
              children: [
                {
                  title: 'Waves Tokens',
                  path: '/en/introduction/waves-environment/waves-tokens'
                },
                {
                  title: 'Custom Tokens',
                  children: [
                    {
                      title: 'Test 3',
                      path: '/en/introduction/waves-environment/custom-tokens',
                    }
                  ],
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


          '/en/blockchain/': [
            {
              title: 'Alias',
              path: '/en/blockchain/alias',
            },
            {
              title: 'Transaction type',
              path: '/en/blockchain/transaction-type/',
              collapsable: true,
              children: [
                {
                  title: 'Alias transaction',
                  path: '/en/blockchain/transaction-type/alias-transaction'
                }
              ]
            },
          ],

          '/ride/': [
            {
              title: 'About RIDE',
              path: '/ride/about-ride',
            },
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
          '/ru/introduction/': [
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
                  path: 'waves-environment/waves-tokens'
                },
                {
                  title: 'Custom Tokens',
                  path: 'waves-environment/custom-tokens'
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
              path: '/ru/blockchain/alias',
            },
            {
              title: 'Тип транзакции',
              path: '/ru/blockchain/transaction-type/',
              collapsable: true,
              children: [
                {
                  title: 'Транзакция создания псевдонима',
                  path: '/ru/blockchain/transaction-type/alias-transaction'
                }
              ]
            },
          ],

        }
      },
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
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js'
  ],


  // configureWebpack () {
  //   return {
  //     resolve: {
  //       alias: {
  //         '@public': path.join(__dirname, './public')
  //       }
  //     }
  //   }
  // },

})

