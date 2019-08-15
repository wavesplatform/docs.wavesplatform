const adminServerUrl = process.env.adminServerUrl;
const adminServerGetRedirectsPath = 'redirects';
const axios = require('axios');

const getRedirects = async() => {
    return await axios.get(adminServerUrl + adminServerGetRedirectsPath)
        .then(result => {
            return result.data;
        })
        .catch(error => {
            return null;
        });
};

module.exports = function(app, server) {

    let redirects = getRedirects();

    app.get('/*', async(req, res, next) => {
        const requestOriginalUrl = req.originalUrl;

        if(requestOriginalUrl === '/update-redirects' || !redirects) {
            redirects = await getRedirects();
            res.json(redirects || {
                error: 'Error update redirects'
            })
        }
        if(Array.isArray(redirects)) {
            for(const redirectRule of redirects) {
                if(redirectRule.from === requestOriginalUrl) {
                    res.redirect(`${req.protocol}://${req.headers.host + redirectRule.to}`);
                    break;
                }
            }
        }
        next();
    })
}
