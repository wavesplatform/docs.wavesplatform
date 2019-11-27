const fs = require('fs');
const path = require('path');
const deepmerge = require('deepmerge');
const colorationMixin = require('../_mixins');

const borderColor = '#eef0f4';
const color10 = '#4e5c6e';
const color11 = '#ffffff';
module.exports = deepmerge(colorationMixin, {
    logoSvg: fs.readFileSync(path.resolve(__dirname, './logo.svg')).toString(),
    colors: {
        color1: '#f8f9fb',
        color2: '#f4f5f8',
        color3: '#eef0f4',
        color7: '#263241',
        color7_alpha1: 'rgba(38, 50, 65, .4)',
        color8: '#7f8fa4',
        color10: '#4e5c6e',
        color11,
        color11_alpha1: 'rgba(255, 255, 255, 0)',
        color12: color10,
        color13: color11,
        borderColor,
        borderColor2: '#dae1e9',
    },
});
