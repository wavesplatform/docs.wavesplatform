const processEnv = process.env
// const envIsDev = processEnv.isDev;
// if(envIsDev) {
//     const inspector = require('inspector');
//     inspector.open(9229, '127.0.0.1');
// }
const fs = require('fs');
const path = require('path');
const deepmerge = require('deepmerge');
const coreDocsWavesplatform = require('core.docs.wavesplatform');
const getVuepressConfig = coreDocsWavesplatform.getVuepressConfig;
const enLocaleConfig = require('./locales/en');
const ruLocaleConfig = require('./locales/ru');
const colorationConfig = require('./colouration');
module.exports = (ctx) => {
    const vuepressConfig = getVuepressConfig(ctx);

    const configureWebpackOriginal = vuepressConfig.configureWebpack;

    vuepressConfig.configureWebpack = (webpackConfig, isServer) => {
        webpackConfig.resolve.alias['@themeExtend'] = __dirname;
        configureWebpackOriginal(webpackConfig, isServer);
    };

    return deepmerge(vuepressConfig, {
        themeConfig: {
            // activeColouration: 'default',
            colouration: colorationConfig,
            locales: {
                '/en/': enLocaleConfig,
                '/ru/': ruLocaleConfig
            }
        }
    })
}
