import Vuex from 'vuex'
export default async(context) => {
    const { Vue } = context;

    Vue.use(Vuex);

    const state = {
        interface: {
            layoutWidth: 0,
        },
        navbarSubHeaders: [],
    }

    const modules = {

    }


    const set = key => (state, val) => {
        state[key] = val
    };


    const mutations = {
        setInterfaceInnerWidthLayout(state, width) {
            state.interface.layoutWidth = width;
        },

        setNavbarSubHeaders: set('navbarSubHeaders'),
    }

    const actions = {

    }

    const store = new Vuex.Store({
        state,
        modules,
        mutations,
        actions,
    });

    Vue.mixin({store: store});


    // async function afterEach(to, from, next) {
    //   store.dispatch('changeLang', to.path);
    //   await router.app.$nextTick()
    // }
    //
    // router.afterEach(afterEach)
}
