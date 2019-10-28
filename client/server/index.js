const processEnv = process.env;
const envPort = processEnv.port;
const envIsDev = processEnv.isDev;
const serverPort = envPort ? envPort :
    envIsDev ? 3000 : 3083
;
if(envIsDev) {
    const inspector = require('inspector');
    inspector.open(9229, '127.0.0.1');
}
const path = require('path');
const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();
const GetSearchResultByQuery = require('./getSearchResultByQuery');

(async() => {

    const getSearchResultByQuery = await GetSearchResultByQuery();

    if(!getSearchResultByQuery) {
        console.error('!getSearchResultByQuery');
    }

    app.use(async(ctx, next) => {
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        await next();
    });

    app.use(async (ctx, next) => {

        const searchQuery = ctx.query.search;
        if (ctx.req.url === '/') {
            ctx.redirect('/en/');
        } else if(searchQuery) {
            // console.log('searchQuery:', searchQuery);
            const searchResult = await getSearchResultByQuery(searchQuery);
            // console.log('searchResult:', searchResult);
            ctx.body = searchResult;
        } else {
            await next();
        }
    });

    app.use(
        serve(
            path.join(__dirname, '../vuepress')
        )
    );

    app.listen(serverPort, '0.0.0.0');

    console.log(`listening on port ${serverPort}`)
})();
