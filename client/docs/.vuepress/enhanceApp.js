import elementResizeDetector from './enhanceApp/elementResizeDetector'
import routing from './enhanceApp/routing'
import vuex from './enhanceApp/vuex'
import elementUi from './enhanceApp/elementUi'
import toasted from './enhanceApp/toasted'
import scrollTo from './enhanceApp/scrollTo'
export default (context) => {
    scrollTo(context);
    elementResizeDetector(context);
    const store = vuex(context);
    routing(context, store);
    elementUi(context);
    toasted(context);
}
