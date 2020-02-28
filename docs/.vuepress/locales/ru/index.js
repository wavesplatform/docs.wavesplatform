const fs = require('fs');
const path = require('path');
const deepmerge = require('deepmerge');
const mixin = require('../_mixins');
const sidebarConfig = require(path.join(process.cwd(), 'docs/_ru-sidebar-tree'));

module.exports = deepmerge(mixin, {
    label: 'Русский',
    langIconRawSvg: fs.readFileSync(path.resolve(__dirname, './russia-18.svg')).toString(),
    searchPlaceholderText: 'Введите запрос и нажмите Return…',
    backToIndexButtonText: 'Вернуться к разделам',
    sidebarOnThisPageText: 'На этой странице',
    sidebar: sidebarConfig,

    languageAbsenceNotification: {
        title: 'Ой…',
        message: 'Содержимое этой страницы временно недоступно.<br>Приносим извинения за неудобства!',
    },

    notFoundPage: {
        title: 'Чего-то не хватает',
        description: 'Страница, которую вы ищете, не найдена',
    },

    homePage: {
        welcomeText: 'Добро пожаловать в документацию платформы Waves',
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
                rootLink: '/ru/blockchain/',
                title: 'Блокчейн Waves',
                caption: 'Обзор возможностей Waves. Протокол, консенсус, криптография. Майнинг, типы транзакций и комиссии.',
                buttonSet: {
                    account: {
                        text: 'Аккаунт',
                        link: '/ru/blockchain/account'
                    },
                    token: {
                        text: 'Токены',
                        link: '/ru/blockchain/token'
                    },
                    mining: {
                        text: 'Майнинг',
                        link: '/ru/blockchain/mining'
                    },
                    transaction: {
                        text: 'Транзакции',
                        link: '/ru/blockchain/transaction'
                    }
                }
            },
            buildingBlockchainApps: {
                rootLink: '/ru/building-apps/',
                title: 'Разработка приложений на блокчейне',
                caption: 'Создание смарт-контрактов и децентрализованных приложений на платформе Waves. Инструменты разработчика, API и SDK.',
                buttonSet: {
                    smartAccount: {
                        text: 'Смарт-аккаунты',
                        link: '/ru/building-apps/smart-contracts/what-is-smart-account',
                    },
                    smartAsset: {
                        text: 'Смарт-ассеты',
                        link: '/ru/building-apps/smart-contracts/what-is-smart-asset',
                    },
                    dapp: {
                        text: 'dApps',
                        link: '/ru/building-apps/smart-contracts/what-is-a-dapp',
                    },
                    howTo: {
                        text: 'Практические руководства',
                        link: '/ru/building-apps/how-to'
                    },
                    signer: {
                        text: 'Signer',
                        link: '/ru/building-apps/waves-api-and-sdk/client-libraries/signer'
                    }
                },
            },
            rideProgrammingLanguage: {
                rootLink: '/ru/ride/',
                title: 'Язык программирования Ride',
                caption: 'Cинтаксис Ride. Типы скриптов. Встроенные функции, операторы и структуры.',
                buttonSet: {
                    gettingStarted: {
                        text: 'Начало работы',
                        link: '/ru/ride/getting-started'
                    }
                },

            },
            node: {
                rootLink: '/ru/waves-node/',
                title: 'Нода Waves',
                caption: 'Настройка и запуск ноды. Конфигурация ноды. Активация новых функций.',
                buttonSet: {
                    launch: {
                        text: 'Запуск ноды',
                        link: '/ru/waves-node/running-waves-node-in-yandex-cloud',
                    },
                    grpc: {
                        text: 'gRPC server',
                        link: '/ru/waves-node/extensions/grpc-server',
                    },
                    nodeApi: {
                        text: 'Node REST API',
                        link: '/ru/waves-node/node-api',
                    },
                },
            },
            ecosystemApplications: {
                rootLink: '/ru/ecosystem/',
                title: 'Экосистема приложений',
                caption: 'Полезные приложения на платформе Waves.',
                buttonSet: {
                    explorer: {
                        text: 'Explorer',
                        link: '/ru/ecosystem/waves-explorer/about-waves-explorer',
                    },
                    faucet: {
                        text: 'Бесплатные WAVES в Testnet',
                        link: '/ru/ecosystem/waves-explorer/account-balance-top-up-in-the-test-network',
                    },
                    oracles: {
                        text: 'Oracles',
                        link: '/ru/ecosystem/waves-oracles/about-waves-oracles',
                    },
                    torenRating: {
                        text: 'Token Rating',
                        link: '/ru/ecosystem/waves-token-rating/about-waves-token-rating',
                    },
                },
            },
            miscellaneous: {
                rootLink: '/ru/keep-in-touch/',
                title: 'Будьте в курсе',
                caption: 'Присоединяйтесь к сообществу Waves, следите за обновлениями в блоге и узнайте всё о событиях на платформе Waves.',
                buttonSet: {
                    blog: {
                        text: 'Блог',
                        link: 'https://blog.wavesplatform.com/',
                    },
                    forum: {
                        text: 'Форум',
                        link: 'https://forum.wavesplatform.com/',
                    },
                    chat: {
                        text: 'Чат разработчиков',
                        link: 'https://t.me/waves_ride_dapps_dev'
                    },
                    release_notes: {
                        text: 'Release notes',
                        link: '/ru/keep-in-touch/release-notes'
                    }
                },

            }
        },
    },
  }
);
