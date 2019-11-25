const fs = require('fs');
const path = require('path');
const deepmerge = require('deepmerge');
const colorationMixin = require('../_mixins');
module.exports = deepmerge(colorationMixin, {
    logoSvg: fs.readFileSync(path.resolve(__dirname, './logo.svg')).toString(),
    colors: {
        color1: '#f8f9fb',
        color2: '#f4f5f8',
        color3: '#eef0f4',
        color7: '#263241',
        color10: '#4e5c6e',
        color11: '#ffffff',
        color11_alpha1: 'rgba(255, 255, 255, 0)',
    },
});
