const processEnv = process.env;
const corePath = processEnv.corePath || 'core.docs.wavesplatform';
const path = require('path');
const coreDocsWavesplatform = require(corePath);
const runServer = coreDocsWavesplatform.runServer;

runServer(path.join(process.cwd(), 'dist'));
