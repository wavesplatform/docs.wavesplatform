const Fuse = require('fuse.js');
const fuseOptions = {
    // keys: [{
    //     name: 'title',
    //     weight: 0.1
    // }, {
    //     name: '_content',
    //     weight: 0.1
    // }],

    include: ['score', 'matches'],

    // shouldSort: true,
    // threshold: 0.5,
    // location: 0,
    // distance: 100,
    // maxPatternLength: 32,
    // minMatchCharLength: 1,
    keys: ['title', 'content'],



    // shouldSort: true,
    // tokenize: true,
    // matchAllTokens: true,
    // findAllMatches: true,
    // threshold: 0,
    // location: 0,
    // distance: 0,
    // maxPatternLength: 32,
    // minMatchCharLength: 2,

    shouldSort: true,
    findAllMatches: true,
    includeScore: true,
    includeMatches: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    // keys: [
    //     "title",
    //     "author.firstName"
    // ]


    // keys: [
    //     "name",
    //     "username",
    //     "email",
    //     "website",
    //     "phone",
    //     "address.street",
    //     "address.suite",
    //     "address.city",
    //     "address.zipcode",
    //     "company.name",
    //     "company.catchPhrase",
    //     "company.bs",
    // ]
    // id: 'ISBN'
};
const findItemForSendingLimit = 10;

module.exports = (ctx) => {
    let fuse = {};
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

    fuse = new Fuse(pages, fuseOptions);

    return async(req) => {
        const querySearchString = req.query.search;
        const fuseSearchResult = fuse.search(querySearchString);

        const dataPreparedForSending = fuseSearchResult.map(page => {

            // page.matches.reduce((accumulator, ) => {
            //
            // }, {})
            console.log('page:', page);
            return {
                path: page.item.path,
                title: page.item.title,
                matches: page.matches,
            }
        })
            .slice(0, findItemForSendingLimit)
        ;

        // console.log('fuseSearchResult:', fuseSearchResult);

        return dataPreparedForSending;
    }
}
