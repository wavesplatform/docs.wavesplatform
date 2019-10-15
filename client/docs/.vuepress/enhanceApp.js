import routing from './enhanceApp/routing'
import vuex from './enhanceApp/vuex'
import elementUi from './enhanceApp/elementUi'
import toasted from './enhanceApp/toasted'
export default async (context) => {
    const store = await vuex(context);
    routing(context, store);
    elementUi(context);
    toasted(context);
}
