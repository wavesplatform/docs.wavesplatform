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
                rootLink: '/en/waves-node/',
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
                rootLink: '/en/ecosystem/',
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
                rootLink: '/en/building-apps/',
                type: 'advanced',
                iconFilePath: getRawIcon('./images/rocket.svg'),
                buttonSet: {
                    smartAccount: {
                        text: 'Smart accounts',
                        link: '/en/smart-contracts/smart-accounts'
                    },
                    smartAsset: {
                        text: 'Smart assets',
                        link: '/en/smart-contracts/smart-assets'
                    },
                    dapp: {
                        text: 'dApps',
                        link: '/en/smart-contracts/what-is-a-dapp'
                    }
                }
            },
            rideProgrammingLanguage: {
                rootLink: '/en/ride/about-ride',
                type: 'advanced',
                iconFilePath: getRawIcon('./images/category5.svg'),
                buttonSet: {
                },
            },
            miscellaneous: {
                rootLink: '/en/keep-in-touch/',
                type: 'supplementary',
                iconFilePath: getRawIcon('./images/category7.svg'),
                buttonSet: {
                    blog: {
                        text: 'Official blog',
                        link: 'https://blog.wavesplatform.com/',
                    },
                    forum: {
                        text: 'Forum',
                        link: 'https://forum.wavesplatform.com/',
                    },
                    chat: {
                        text: 'Developer chat',
                        link: 'https://t.me/waves_ride_dapps_dev'
                    }
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
