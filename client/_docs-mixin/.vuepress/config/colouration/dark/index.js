const fs = require('fs');
const path = require('path');
const deepmerge = require('deepmerge');
const colorationMixin = require('../_mixins');
module.exports = deepmerge(colorationMixin, {
    logoSvg: fs.readFileSync(path.resolve(__dirname, './logo.svg')).toString(),
    colors: {
        color1: '#232e42',
        color2: '#292f3c',
        color3: '#141924',
        color7: '#ffffff',
        color7_alpha1: 'rgba(255, 255, 255, .4)',
        color8: '#b7bfd1',
        color10: '#969cae',
        color11: '#19202e',
        color11_alpha1: 'rgba(25, 32, 46, 0)',
        color12: '#dae1e9',
        borderColor: '#313745',
        borderColor2: '#555d6d',
    },
});
