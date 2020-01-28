const processEnv = process.env;
const envIsDev = processEnv.isDev;
const corePath = processEnv.corePath || 'core.docs.wavesplatform';
const envHost = processEnv.host || '127.0.0.1';
if(envIsDev) {
    const inspector = require('inspector');
    inspector.open(9229, '127.0.0.1');
}
const path = require('path');
const rootDir = process.cwd();
const coreDocsWavesplatform = require(corePath);
const getVuepressConfig = coreDocsWavesplatform.getVuepressConfig;

const enLocaleConfig = require('./locales/en');
const ruLocaleConfig = require('./locales/ru');
const colorationConfig = require('./colouration');

const googleAnalytics = require('@vuepress/plugin-google-analytics');

module.exports = (ctx) => {
    const vuepressComputedConfig = getVuepressConfig(ctx, {
        host: envHost,
        dest: path.join(rootDir, 'dist'),
        head: [
            ['meta', { name: 'theme-color', content: '#1f5af6' }],
            ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
            ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0055ff' }],
            ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', size: '180x180' }],
            ['link', { rel: 'icon', href: '/favicon-32x32.png', size: '32x32' }],
            ['link', { rel: 'icon', href: '/favicon-16x16.png', size: '16x16' }],
        ],
        locales: {
            '/en/': {
                lang: 'en-US',
                title: 'Waves documentation',
                description: 'Waves documentation in English'
            },
            '/ru/': {
                lang: 'ru-RU',
                title: 'Документация Waves',
                description: 'Документация Waves на русском',
            }
        },
        themeConfig: {
            logo: '/waves-docs-logo.svg',
            repo: 'https://github.com/wavesplatform/docs.wavesplatform',
            isShowEditLink: false,
            // activeColouration: 'default',
            colouration: colorationConfig,
            locales: {
                '/en/': enLocaleConfig,
                '/ru/': ruLocaleConfig,
            },
        },
        plugins: [
            [googleAnalytics, {
                ga: 'GTM-NSRFXFS'
            }],
        ],
    });
    const configureWebpackOriginal = vuepressComputedConfig.configureWebpack;
    vuepressComputedConfig.configureWebpack = (webpackConfig, isServer) => {
        webpackConfig.resolve.alias['@themeExtend'] = __dirname;
        configureWebpackOriginal(webpackConfig, isServer);
    };
    return vuepressComputedConfig;
};
