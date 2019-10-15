const deepmerge = require('deepmerge');
const technologyListMixin = require('../_mixins/technologyList');
module.exports = {
    homePage: {
        welcomeText: 'Добро пожаловать в документацию о всей платформе Waves',
        or: 'Или',
        technologyCategoriesText: 'Обзор по теме или категории технологии',
        technologyCategories: {
            beginners: 'Начальный',
            advanced: 'Продвинутый',
            supplementary: 'Дополнительно',
        },
        technologyList: deepmerge(technologyListMixin, {
            learnAboutWavesPlatform: {
                title: 'Узнайте о платформе Waves',
                caption: 'Обзор основных функций Waves Platform. Протокол, консенсус, криптография. Понять значение, которое предлагает блокчейн.',
                buttonSet: [
                    {
                        text: 'Протокол',
                        link: '#'
                    },
                    {
                        text: 'Консенсус',
                        link: '#'
                    },
                    {
                        text: 'Глоссарий',
                        link: '#'
                    },
                ]
            },
            node: {
                rootLink: '#',
                title: 'Нода',
                caption: 'Узнайте о полном узле Waves. Как установить ноду. Конфигурация узла и API. Работа с расширениями узлов: matcher, gRPC server.',
                buttonSet: [
                    {
                        text: 'Node API',
                        link: '#',
                    },
                    {
                        text: 'Matcher',
                        link: '#',
                    },
                    {
                        text: 'gRPC',
                        link: '#',
                    },
                    {
                        text: 'Leasing',
                        link: '#',
                    },
                ],
            },
            ecosystemApplications: {
                rootLink: '#',
                title: 'Экосистема Приложений',
                caption: 'Узнайте о экосистемных приложениях Waves.',
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
                    {
                        text: 'Gateways',
                        link: '#',
                    },
                ],
            },
            buildingBlockchainApps: {
                rootLink: '#',
                title: 'Создание приложений на блокчейне',
                caption: 'Узнайте, как создать приложение блокчейн с Waves. Понимание Waves Smart Contracts. API и SDK. Инструменты разработчика.',
                buttonSet: [
                    {
                        text: 'Смарт-контракты',
                        link: '#',
                    },
                    {
                        text: 'Инструменты',
                        link: '#',
                    },
                    {
                        text: 'API & SDK',
                        link: '#',
                    },
                ],
            },
            rideProgrammingLanguage: {
                rootLink: '#',
                title: 'Язык программирования Ride',
                caption: 'Изучите синтаксис нового языка программирования Ride, который позволяет создавать dApps. Примеры использования.'
            },
            additionalServices: {
                rootLink: '#',
                title: 'Дополнительные Сервисы',
                caption: 'Работа с дополнительными сервисами, построенными на блокчейне Waves: Data Services, Oracles, Token Rating, Market Item, DappOcean, PyWaves Statistics и т. Д.',
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
                rootLink: '#',
                title: 'Разное',
                caption: 'Официальные ресурсы платформы Waves. Читайте статьи на различные темы, посвященные блокчейну Wave. Содействие платформе Waves.',
                buttonSet: [
                    {
                        text: 'Официальные ресурсы',
                        link: '#',
                    },
                ],
            }
        }),
    },

    label: 'Русский',
    selectText: 'Язык',
    editLinkText: 'Изменить эту страницу на GitHub',
    lastUpdated: 'Последние изменения',

    nav: [
        {
            text: 'Главная',
            link: '/ru/'
        },
        {
            text: 'Блокчейн',
            link: '/ru/blockchain/'
        },
        {
            text: 'Waves протокол',
            link: '/waves-protocol/'
        },
        {
            text: 'Для разработчиков',
            link: '/for-developers/'
        },
        {
            text: 'Waves приложения',
            items: [
                {
                    text: 'API',
                    items: [
                        {
                            text: 'CLI',
                            link: '/api/cli.html'
                        },
                        {
                            text: 'Node',
                            link: '/api/node.html'
                        }
                    ]
                },
                {
                    text: 'Contributing Guide',
                    items: [
                        {
                            text: 'Design Concepts',
                            link: '/miscellaneous/design-concepts.html'
                        },
                        {
                            text: 'FAQ',
                            link: '/faq/'
                        },
                        {
                            text: 'Glossary',
                            link: '/miscellaneous/glossary.html'
                        }
                    ]
                },
                {
                    text: 'Miscellaneous',
                    items: [
                        {
                            text: 'Migrate from 0.x',
                            link: '/miscellaneous/migration-guide.html'
                        },
                        {
                            text: 'Changelog',
                            link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
                        }
                    ]
                }
            ]
        },
        {
            text: 'Проекты сообщества',
            link: '/community-projects/'
        },
        {
            text: 'Поддержка',
            link: '/support/'
        }
    ],
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
