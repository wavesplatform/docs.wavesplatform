const deepmerge = require('deepmerge');
const colorationMixin = require('../_mixins');
module.exports = deepmerge(colorationMixin, {
    color11: '#ffffff',
});
