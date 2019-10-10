const Fuse = require('fuse.js');
const fuseOptions = {
    keys: ['title', '_content'],
    // id: 'ISBN'
};
const findItemForSendingLimit = 10;

module.exports = (ctx) => {
    let fuse = {};
    // let lunrIdx = null;
    let pages = [];
    const getSortedPagesContentByLocalePath = (pages) => {
        return pages.reduce((accumulator, page) => {
            const pageLocalePath = page._localePath;
            const accumulatorLocalePath = accumulator[pageLocalePath];
            if(!accumulatorLocalePath) {
                accumulator[pageLocalePath] = [];
            }
            accumulator[pageLocalePath].push(page);
            return accumulator;
        }, {});
    };


    let sortedPagesContentByLocalePath = {};
    Object.defineProperty(ctx, 'pages', {
        get () {
            return pages;
        },
        set(pagesNewValue) {
            Object.defineProperty(pagesNewValue, 'push', {
                value (pageNewValue) {
                    pagesNewValue[pagesNewValue.length] = pageNewValue;
                    sortedPagesContentByLocalePath = getSortedPagesContentByLocalePath(pagesNewValue);

                    fuse = new Fuse(pages, fuseOptions)
                }
            });
            pages = pagesNewValue;
        }
    });

    sortedPagesContentByLocalePath = getSortedPagesContentByLocalePath(pages);
    fuse = new Fuse(pages, fuseOptions)


    return async(req) => {
        const querySearchString = req.query.search;
        const fuseSearchResult = fuse.search(querySearchString);
        const dataPreparedForSending = fuseSearchResult.map(page => {
            return {
                title: page.title,
                content: page._content,
            }
        })
            .slice(0, findItemForSendingLimit)
        ;
        // console.log('fuseSearchResult:', fuseSearchResult);


        return dataPreparedForSending;
    }
}
