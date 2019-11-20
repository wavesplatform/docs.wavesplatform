const fs = require('fs');
const path = require('path');
const deepmerge = require('deepmerge');
const colorationMixin = require('../_mixins');
module.exports = deepmerge(colorationMixin, {
    logoSvg: fs.readFileSync(path.resolve(__dirname, './logo.svg')).toString(),
    colors: {
        color1: '#232e42',
        color2: '#495060',
        color3: '#495060',
        color7: '#ffffff',
        color10: '#969cae',
        color11: '#19202e',

    },
});
