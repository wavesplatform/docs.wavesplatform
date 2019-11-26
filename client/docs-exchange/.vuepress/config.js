const processEnv = process.env;
// const envIsDev = processEnv.isDev;
// const inspector = require('inspector');
// if(envIsDev) {
//     const inspector = require('inspector');
//     inspector.open(9229, '127.0.0.1');
// }
const fs = require('fs');
const path = require('path');
const deepmerge = require('deepmerge');
const getConfig = require('../../_docs-mixin/.vuepress/config/');
const enLocaleConfig = require('./locales/en');
const ruLocaleConfig = require('./locales/ru');
module.exports = (ctx) => {
    const vuepressConfig = getConfig(ctx);
    const configureWebpackOriginal = vuepressConfig.configureWebpack;

    vuepressConfig.configureWebpack = (webpackConfig, isServer) => {
        webpackConfig.resolve.alias['@themeExtend'] = __dirname;
        configureWebpackOriginal(webpackConfig, isServer);
    };
    return deepmerge(vuepressConfig, {
        themeConfig: {
            locales: {
                '/en/': enLocaleConfig,
                '/ru/': ruLocaleConfig,
            },
        },
    });
};
