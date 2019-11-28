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
        title: 'Ой…',
        message: 'Содержимое этой страницы временно недоступно. Приносим извинения за неудобства!',
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
                rootLink: '/ru/learn-about-waves-platform/',
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

    sidebar: {
        '/ru/learn-about-waves-platform/': [
            {
                title: 'What is a dApp',
                path: '/ru/learn-about-waves-platform/what-is-a-dapp'
            },
            // {
            //     title: 'Writing dApps',
            //     path: '/ru/learn-about-waves-platform/what-is-a-dapp'
            // },
            {
                title: 'Simple voting on the Waves',
                path: '/ru/learn-about-waves-platform/what-is-a-dapp'
            },
            {
                title: 'Smart Accounts',
                path: '/ru/learn-about-waves-platform/what-is-a-dapp'
            },
            {
                title: 'Waves Smart Contracts',
                path: '/ru/learn-about-waves-platform/what-is-a-dapp'
            },
            {
                title: 'Smart Assets',
                path: '/ru/learn-about-waves-platform/what-is-a-dapp'
            },
            {
                title: 'Инструменты',
                path: '/ru/learn-about-waves-platform/tools',
                children: [
                    {
                        title: 'REPL',
                        path: '/ru/learn-about-waves-platform/tools/repl',
                        children: [
                            {
                                title: 'Waves IDE 2',
                                path: '/ru/learn-about-waves-platform/tools/repl/waves-ide',
                                children: [
                                    {
                                        title: 'Simple voting on the Waves blockchain',
                                        path: '/ru/learn-about-waves-platform/tools/repl/waves-ide/simple-voting-on-the-waves-blockchain'
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        title: 'Waves IDE',
                        path: '/ru/blockchain/token/waves'
                    },
                ]
            },
            {
                title: 'Script performance tests',
                path: '/ru/learn-about-waves-platform/what-is-a-dapp'
            },
            {
                title: 'Creating and deploying a script manually',
                path: '/ru/learn-about-waves-platform/what-is-a-dapp'
            },
            {
                title: 'Video tutorials',
                path: '/ru/learn-about-waves-platform/what-is-a-dapp'
            },
            {
                title: 'Articles on dApps',
                path: '/ru/learn-about-waves-platform/what-is-a-dapp'
            },
        ],

        // '/ru/blockchain/': [
        //     {
        //         title: 'Псевдоним',
        //         path: '/ru/blockchain/account'
        //     },
        //     {
        //         title: 'Псевдоним',
        //         path: '/ru/blockchain/account'
        //     },
        // ]

    }
});
