const fs = require('fs');
const path = require('path');

const getRawIcon = (relativePath) => {
    return fs.readFileSync(path.resolve(__dirname, relativePath)).toString()
};

module.exports = {
    learnAboutWavesPlatform: {
        rootLink: '#123',
        type: 'Beginners',
        iconFilePath: getRawIcon('./images/category1.svg'),
        buttonSet: [
        ],
    },
    node: {
        rootLink: '#',
        type: 'Advanced',
        iconFilePath: getRawIcon('./images/category2.svg'),
        buttonSet: [
        ],
    },
    ecosystemApplications: {
        rootLink: '#',
        type: 'Beginners',
        iconFilePath: getRawIcon('./images/category3.svg'),
        buttonSet: [
        ],
    },
    buildingBlockchainApps: {
        rootLink: '#',
        type: 'Advanced',
        iconFilePath: getRawIcon('./images/rocket.svg'),
        buttonSet: [
        ],
    },
    rideProgrammingLanguage: {
        rootLink: '#',
        type: 'Advanced',
        iconFilePath: getRawIcon('./images/category4.svg'),
        buttonSet: [
        ],
    },
    additionalServices: {
        rootLink: '#',
        type: 'Supplementary',
        iconFilePath: getRawIcon('./images/category5.svg'),
        buttonSet: [
        ],
    },
    miscellaneous: {
        rootLink: '#',
        type: 'Supplementary',
        iconFilePath: getRawIcon('./images/category6.svg'),
        buttonSet: [
        ],
    }

}
