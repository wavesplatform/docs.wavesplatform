const fs = require('fs');
const path = require('path');

const getRawIcon = (relativePath) => {
    return fs.readFileSync(path.resolve(__dirname, relativePath)).toString()
};

module.exports = {
    backToIndexButtonText: 'Back to index',
    sidebarOnThisPageText: 'On this page',

    languageAbsenceNotification: {
        title: 'Oops…',
        message: 'The content of this page is currently unavailable. Sorry for the inconvenience!',
    },

    nav: [
        // {
        //     text: 'Home',
        //     link: '/en/'
        // },
        // {
        //     text: 'Blockchain',
        //     link: '/en/blockchain/'
        // },
    ],
    homePage: {
        technologyList: {
            learnAboutWavesPlatform: {
                rootLink: '/en/blockchain/',
                type: 'beginner',
                iconFilePath: getRawIcon('./images/category1.svg'),
                buttonSet: {
                    account: {
                        text: 'Account',
                        link: '/en/blockchain/account'
                    },
                    token: {
                        text: 'Tokens',
                        link: '/en/blockchain/token'
                    },
                    mining: {
                        text: 'Mining',
                        link: '/en/blockchain/token'
                    },
                    transaction: {
                        text: 'Transactions',
                        link: '/en/blockchain/transaction'
                    }
                }
            },
            node: {
                rootLink: '/en/node/',
                type: 'advanced',
                iconFilePath: getRawIcon('./images/category2.svg'),
                buttonSet: {
                    launch: {
                        text: 'Launch a node',
                        link: 'en/waves-node/waves-node-in-docker',
                    },
                    grpc: {
                        text: 'gRPC server',
                        link: '/en/waves-node/extensions/grpc-server',
                    },
                    nodeApi: {
                        text: 'Node REST API',
                        link: '/en/waves-node/node-api',
                    },
                },
            },
            ecosystemApplications: {
                rootLink: '/en/blockchain/',
                type: 'beginner',
                iconFilePath: getRawIcon('./images/category3.svg'),
                buttonSet: {
                    explorer: {
                        text: 'Explorer',
                        link: '/en/waves-explorer/about-waves-explorer',
                    },
                    faucet: {
                        text: 'Free Waves on Testnet',
                        link: '/en/waves-explorer/account-balance-top-up-in-the-test-network',
                    },
                    oracles: {
                        text: 'Oracles',
                        link: '/en/blockchain/token/non-fungible-token',
                    },
                    torenRating: {
                        text: 'Token Rating',
                        link: '/en/waves-token-rating/about-waves-token-rating',
                    },
                },
            },
            buildingBlockchainApps: {
                rootLink: '/en/blockchain/',
                type: 'advanced',
                iconFilePath: getRawIcon('./images/rocket.svg'),
                buttonSet: {
                    nodeApi: {
                        text: 'Node API',
                        link: '/en/blockchain/token/non-fungible-token'
                    },
                    matcher: {
                        text: 'Matcher',
                        link: '/en/blockchain/token/non-fungible-token'
                    },
                    gRpc: {
                        text: 'gRPC',
                        link: '/en/blockchain/token/non-fungible-token'
                    },
                    leasing: {
                        text: 'Leasing',
                        link: '/en/blockchain/token/non-fungible-token'
                    }
                }
            },
            rideProgrammingLanguage: {
                rootLink: '/en/blockchain/',
                type: 'advanced',
                iconFilePath: getRawIcon('./images/category5.svg'),
                buttonSet: {
                    Developer 
                },
            },
            additionalServices: {
                rootLink: '/en/blockchain/',
                type: 'supplementary',
                iconFilePath: getRawIcon('./images/category6.svg'),
                buttonSet: {
                    dataServices: {
                        text: 'Data Services',
                        link: '/en/blockchain/token/non-fungible-token',
                    },
                    oracles: {
                        text: 'Oracles',
                        link: '/en/blockchain/token/non-fungible-token',
                    },
                    tokenRating: {
                        text: 'Token Rating',
                        link: '/en/blockchain/token/non-fungible-token',
                    },
                },
            },
            miscellaneous: {
                rootLink: '/en/blockchain/',
                type: 'supplementary',
                iconFilePath: getRawIcon('./images/category7.svg'),
                buttonSet: {
                    officialResources: {
                        text: 'Official Resources',
                        link: '/en/blockchain/token/non-fungible-token',
                    },
                },
            }
        },
    },

    searchPopup: {
        cancelText: 'Cancel',
        resultsMatchingText: 'results matching',
        showMoreText: 'Show more',
        minQueryLength: 4,
        limitationQueryText: 'A search query can be a minimum of 4 characters',
        noSuchResults: 'No such results',
    },

    footer: {
        broughtToYouByWavesTeam: 'Brought to you by Waves Team.',
        copyright: '© 2019 Waves Platform',
        email: 'support@wavesplatform.com',
        resourcesCategories: {
            productsAndTools: {
                title: 'Products & tools',
                links: {
                    wavesWallet: {
                        title: 'Waves Wallet',
                        link: 'https://wavesplatform.com/technology/wallet',
                    },
                    wavesKeeper: {
                        title: 'Waves Keeper',
                        link: 'https://wavesplatform.com/technology/keeper',
                    },
                    wavesBlockchain: {
                        title: 'Waves Blockchain',
                        link: 'https://wavesplatform.com/technology',
                    },
                    WavesIde: {
                        title: 'Waves IDE',
                        link: 'https://ide.wavesplatform.com/',
                    },
                    wavesExplorer: {
                        title: 'Waves Explorer',
                        link: 'https://wavesexplorer.com/',
                    },
                },
            },
            forDevelopers: {
                title: 'For developers',
                links: {
                    gitHub: {
                        title: 'GitHub',
                        link: 'https://github.com/wavesplatform',
                    },
                    api: {
                        title: 'API',
                        link: 'https://docs.wavesplatform.com/en/waves-node/node-api.html',
                    },
                    stackOverflow: {
                        title: 'Stack Overflow',
                        link: 'https://stackoverflow.com/questions/tagged/wavesplatform',
                    },
                    wavesLabs: {
                        title: 'Waves Labs',
                        link: 'https://waveslabs.com',
                    },
                },
            },
            // legal: {
            //     title: 'Legal',
            //     links: {
            //         privacyPolicy: {
            //             title: 'Privacy Policy',
            //             link: '#',
            //         },
            //         termsOfUse: {
            //             title: 'Terms of use',
            //             link: '#',
            //         },
            //         cookies: {
            //             title: 'Cookies',
            //             link: '#',
            //         },
            //         gdpr: {
            //             title: 'GDPR',
            //             link: '#',
            //         },
            //     },
            // },
            social: {
                title: 'Social',
                links: {
                    blog: {
                        title: 'Blog',
                        link: 'https://blog.wavesplatform.com',
                    },
                    twitter: {
                        title: 'Twitter',
                        link: 'https://twitter.com/wavesplatform',
                    },
                    telegram: {
                        title: 'Telegram',
                        link: 'https://t.me/WavesCommunity',
                    },
                    forum: {
                        title: 'Forum',
                        link: 'https://forum.wavesplatform.com',
                    },
                },
            },
        },
    },
}
