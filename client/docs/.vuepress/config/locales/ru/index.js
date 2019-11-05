const fs = require('fs');
const path = require('path');

const deepmerge = require('deepmerge');
const technologyListMixin = require('../_mixins');
module.exports = deepmerge(technologyListMixin, {
    langIconRawSvg: fs.readFileSync(path.resolve(__dirname, './russia-18.svg')).toString(),
    searchPlaceholderText: 'Введите запрос и нажмите Return…',
    backToIndexButtonText: 'Вернуться к разделам',
    sidebarOnThisPageText: 'На этой странице',

    languageAbsenceNotification: {
        title: 'Извините',
        message: 'В данный момент контент этой странице находиться в разработке.',
    },

    homePage: {
        welcomeText: 'Добро пожаловать в документацию о всей платформе Waves',
        or: 'Или',
        technologyCategoriesText: 'Обзор по теме или категории технологии',
        technologyCategories: {
            all: 'Всё',
            beginner: 'Начальный',
            advanced: 'Продвинутый',
            supplementary: 'Дополнительно',
        },
        technologyList: {
            learnAboutWavesPlatform: {
                title: 'Узнайте о платформе Waves',
                caption: 'Обзор основных функций Waves Platform. Протокол, консенсус, криптография. Понять значение, которое предлагает блокчейн.',
            },
            node: {
                rootLink: '#',
                title: 'Нода',
                caption: 'Узнайте о полном узле Waves. Как установить ноду. Конфигурация узла и API. Работа с расширениями узлов: matcher, gRPC server.',
            },
            ecosystemApplications: {
                rootLink: '#',
                title: 'Экосистема Приложений',
                caption: 'Узнайте о экосистемных приложениях Waves.',
            },
            buildingBlockchainApps: {
                rootLink: '#',
                title: 'Создание приложений на блокчейне',
                caption: 'Узнайте, как создать приложение блокчейн с Waves. Понимание Waves Smart Contracts. API и SDK. Инструменты разработчика.',
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
            },
            miscellaneous: {
                rootLink: '#',
                title: 'Разное',
                caption: 'Официальные ресурсы платформы Waves. Читайте статьи на различные темы, посвященные блокчейну Wave. Содействие платформе Waves.',
            }
        },
    },

    searchPopup: {
        cancelText: 'Закрыть',
        resultsMatchingText: 'совпадений по запросу',
        showMoreText: 'Показать ещё',
        limitationQueryText: 'Поисковый запрос может состоять минимум из 4 символов',
        noSuchResults: 'Результатов не найдено',
    },

    footer: {
        broughtToYouByWavesTeam: 'Сделано для вас командой Waves.',
        resourcesCategories: {
            productsAndTools: {
                title: 'Продукты & инструменты',
                links: {
                    wavesWallet: {
                        title: 'Waves Wallet',
                    },
                    wavesKeeper: {
                        title: 'Waves Keeper',
                    },
                    wavesBlockchain: {
                        title: 'Waves Blockchain',
                    },
                    WavesIde: {
                        title: 'Waves IDE',
                    },
                    wavesExplorer: {
                        title: 'Waves Explorer',
                    },
                },
            },
            forDevelopers: {
                title: 'Для разработчиков',
                links: {
                    documentation: {
                        title: 'Документация',
                    },
                    gitHub: {
                        title: 'GitHub',
                    },
                    api: {
                        title: 'API',
                    },
                    stackOverflow: {
                        title: 'Stack Overflow',
                    },
                    wavesLabs: {
                        title: 'Waves Labs',
                    },
                },
            },
            // legal: {
            //     title: 'Legal',
            //     links: {
            //         privacyPolicy: {
            //             title: 'Политика конфиденциальности',
            //         },
            //         termsOfUse: {
            //             title: 'Условия использования',
            //         },
            //         cookies: {
            //             title: 'Cookies',
            //         },
            //         gdpr: {
            //             title: 'GDPR',
            //         },
            //     },
            // },
            social: {
                title: 'Social',
                links: {
                    blog: {
                        title: 'Блог',
                    },
                    twitter: {
                        title: 'Twitter',
                    },
                    telegram: {
                        title: 'Telegram',
                    },
                    forum: {
                        title: 'Форум',
                    },
                },
            },
        },
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
        // '/ru/': [
        //     {
        //         title: 'Обзор',
        //         collapsable: true
        //     },
        //     {
        //         title: 'Waves environment',
        //         collapsable: true,
        //         children: [
        //             {
        //                 title: 'Waves Tokens',
        //                 path: '/ru/waves-environment/waves-tokens'
        //             },
        //             {
        //                 title: 'Custom Tokens',
        //                 path: '/ru/waves-environment/custom-tokens'
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Getting started',
        //         collapsable: false
        //     },
        //     {
        //         title: 'Developer tools',
        //         collapsable: false
        //     },
        //     {
        //         title: 'Waves api & sdk',
        //         collapsable: false
        //     },
        //     {
        //         title: 'Smart contracts',
        //         collapsable: false
        //     },
        //     {
        //         title: 'Waves full node',
        //         collapsable: false
        //     },
        //     {
        //         title: 'Oracles developments',
        //         collapsable: false
        //     },
        //     {
        //         title: 'Waves client',
        //         collapsable: false
        //     },
        //     {
        //         title: 'Tutorials and articles',
        //
        //         collapsable: false,
        //         children: [
        //             {
        //                 title: 'Test',
        //                 path: 'developer-tools/faq'
        //             }
        //         ]
        //     },
        //     {
        //         title: 'Proposals',
        //         collapsable: false
        //     }
        // ],
        '/ru/blockchain/': [
            {
                title: 'Псевдоним',
                path: '/ru/blockchain/account'
            }
        ]

    }
});
