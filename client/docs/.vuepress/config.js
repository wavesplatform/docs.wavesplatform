const processEnv = process.env;
const envIsDev = processEnv.isDev;
if(envIsDev) {
    const inspector = require('inspector');
    inspector.open(9229, '127.0.0.1');
}
module.exports = require('./config/')
