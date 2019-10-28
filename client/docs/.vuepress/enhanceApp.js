import routing from './enhanceApp/routing'
import vuex from './enhanceApp/vuex'
import elementUi from './enhanceApp/elementUi'
import toasted from './enhanceApp/toasted'
export default (context) => {
    const store = vuex(context);
    routing(context, store);
    elementUi(context);
    toasted(context);
}
