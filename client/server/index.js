const inspector = require('inspector');
inspector.open(9229, '127.0.0.1');

const path = require('path');
const fs = require('fs');

const Koa = require('koa');
const cors = require('@koa/cors');
const serve = require('koa-static');

const app = new Koa();

const GetSearchResultByQuery = require('./getSearchResultByQuery');

const processEnv = process.env;
const envPort = processEnv.port;
const envIsDev = processEnv.isDev;
const serverPort = envPort ? envPort :
    envIsDev ? 3083 : 3000
;


(async() => {

    const getSearchResultByQuery = await GetSearchResultByQuery();

    if(!getSearchResultByQuery) {
        console.error('!getSearchResultByQuery');
    }

    // app.use(cors({
    //     'Access-Control-Allow-Origin': '*'
    // }));

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

    app.listen(serverPort)

    console.log(`listening on port ${serverPort}`)
})();
