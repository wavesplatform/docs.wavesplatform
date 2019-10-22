const fs = require('fs');
const path = require('path');

const getRawIcon = (relativePath) => {
    return fs.readFileSync(path.resolve(__dirname, relativePath)).toString()
};

module.exports = {
    homePage: {
        technologyList: {
            learnAboutWavesPlatform: {
                rootLink: '#123',
                type: 'beginners',
                iconFilePath: getRawIcon('./images/category1.svg'),
                buttonSet: [
                ],
            },
            node: {
                rootLink: '#',
                type: 'advanced',
                iconFilePath: getRawIcon('./images/category2.svg'),
                buttonSet: [
                ],
            },
            ecosystemApplications: {
                rootLink: '#',
                type: 'beginners',
                iconFilePath: getRawIcon('./images/category3.svg'),
                buttonSet: [
                ],
            },
            buildingBlockchainApps: {
                rootLink: '#',
                type: 'advanced',
                iconFilePath: getRawIcon('./images/rocket.svg'),
                buttonSet: [
                ],
            },
            rideProgrammingLanguage: {
                rootLink: '#',
                type: 'advanced',
                iconFilePath: getRawIcon('./images/category5.svg'),
                buttonSet: [
                ],
            },
            additionalServices: {
                rootLink: '#',
                type: 'supplementary',
                iconFilePath: getRawIcon('./images/category6.svg'),
                buttonSet: [
                ],
            },
            miscellaneous: {
                rootLink: '#',
                type: 'supplementary',
                iconFilePath: getRawIcon('./images/category7.svg'),
                buttonSet: [
                ],
            }
        },
    },

    footer: {
        broughtToYouByWavesTeam: 'Brought to you by Waves Team.',
        resourcesCategories: {
            productsAndTools: {
                title: 'Products & tools',
                links: {
                    wavesWallet: {
                        title: 'Waves Wallet',
                        link: '#',
                    },
                    wavesKeeper: {
                        title: 'Waves Keeper',
                        link: '#',
                    },
                    wavesBlockchain: {
                        title: 'Waves Blockchain',
                        link: '#',
                    },
                    WavesIde: {
                        title: 'Waves IDE',
                        link: '#',
                    },
                    wavesExplorer: {
                        title: 'Waves Explorer',
                        link: '#',
                    },
                },
            },
            forDevelopers: {
                title: 'For developers',
                links: {
                    gitHub: {
                        title: 'GitHub',
                        link: '#',
                    },
                    api: {
                        title: 'API',
                        link: '#',
                    },
                    stackOverflow: {
                        title: 'Stack Overflow',
                        link: '#',
                    },
                    wavesLabs: {
                        title: 'Waves Labs',
                        link: '#',
                    },
                },
            },
            legal: {
                title: 'Legal',
                links: {
                    privacyPolicy: {
                        title: 'Privacy Policy',
                        link: '#',
                    },
                    termsOfUse: {
                        title: 'Terms of use',
                        link: '#',
                    },
                    cookies: {
                        title: 'Cookies',
                        link: '#',
                    },
                    gdpr: {
                        title: 'GDPR',
                        link: '#',
                    },
                },
            },
            social: {
                title: 'Social',
                links: {
                    blog: {
                        title: 'Blog',
                        link: '#',
                    },
                    twitter: {
                        title: 'Twitter',
                        link: '#',
                    },
                    telegram: {
                        title: 'Telegram',
                        link: '#',
                    },
                    forum: {
                        title: 'Forum',
                        link: '#',
                    },
                },
            },
        },
    },
}
