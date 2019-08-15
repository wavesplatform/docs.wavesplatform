import routing from './enhanceApp/routing'
import vuex from './enhanceApp/vuex'
import elementUi from './enhanceApp/elementUi'
import toasted from './enhanceApp/toasted'
export default async (context) => {
    routing(context);
    vuex(context);
    elementUi(context);
    toasted(context);
}
