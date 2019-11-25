import setThemeColoration from './enhanceApp/setThemeColoration'
import elementResizeDetector from './enhanceApp/elementResizeDetector'
import routing from './enhanceApp/routing'
import vuex from './enhanceApp/vuex'
import elementUi from './enhanceApp/elementUi'
// import toasted from './enhanceApp/toasted'
import scrollTo from './enhanceApp/scrollTo'


import mediumZoom from 'medium-zoom'

export default (context) => {
    setThemeColoration(context);
    scrollTo(context);
    elementResizeDetector(context);
    const store = vuex(context);
    routing(context, store);
    elementUi(context);
    // toasted(context);

    // const { isServer } = context
    // if(!isServer) {
    //     setTimeout(() => {
    //         mediumZoom('img')
    //     },3000)
    //
    // }

}
