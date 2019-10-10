const adminServerUrl = process.env.adminServerUrl
const adminServerGetRedirectsPath = 'redirects'
const axios = require('axios');
const getSearchResultByQueryFunction = require('./getSearchResultByQuery');

const getRedirects = async () => {
    return await axios.get(adminServerUrl + adminServerGetRedirectsPath)
        .then(result => {
            return result.data
        })
        .catch(error => {
            return null
        })
}
module.exports = (ctx) => {
    const getSearchResultByQuery = getSearchResultByQueryFunction(ctx);
    return function (app, server) {
        let redirects = getRedirects()
        app.get('/*', async (req, res, next) => {
            const requestOriginalUrl = req.originalUrl;
            const querySearchString = req.query.search;

            if (querySearchString) {
                const searchResult = await getSearchResultByQuery(req);
                return res.json(searchResult);
            }

            if (requestOriginalUrl === '/update-redirects' || !redirects) {
                redirects = await getRedirects()
                res.json(redirects || {
                    error: 'Error update redirects'
                })
            }

            if (Array.isArray(redirects)) {
                for (const redirectRule of redirects) {
                    if (redirectRule.from === requestOriginalUrl) {
                        res.redirect(`${req.protocol}://${req.headers.host + redirectRule.to}`)
                        break
                    }
                }
            }
            next();
        })
    }
}

