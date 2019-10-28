import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

export default async (context) => {
    const { Vue, isServer } = context

    Vue.use(Vuex)
    const defaultFocusIndex = -1;
    const state = {
        defaultLanguage: '',
        currentLanguage: '',
        interface: {
            layoutWidth: 1920,
            headerHeight: 0
        },
        navbarSubHeaders: [],
        // isProcessDev: process.env.isDev,
        search: {
            query: '',
            defaultFocusIndex,
            focusIndex: defaultFocusIndex,
        }
    }

    if (!isServer) {
        state.defaultLanguage = navigator.language
    }

    const modules = {}

    const set = key => (state, val) => {
        state[key] = val
    }

    const mutations = {
        setSearchSuggestionsFocusIndex (state, index) {
            state.search.focusIndex = index
        },
        setInterfaceInnerWidthLayout (state, width) {
            state.interface.layoutWidth = width
        },

        setNavbarSubHeaders: set('navbarSubHeaders'),

        setCurrentLanguage: set('currentLanguage'),

        setHeaderHeight (state, value) {
            state.interface.headerHeight = value
        },

        setSearchQuery (state, value) {
            state.search.query = value
        }
    }

    const actions = {}

    const store = new Vuex.Store({
        state,
        modules,
        mutations,
        actions
    })

    Vue.mixin({ store: store })

    // async function afterEach(to, from, next) {
    //   store.dispatch('changeLang', to.path);
    //   await router.app.$nextTick()
    // }
    //
    // router.afterEach(afterEach)

    if (!isServer) {
        new VuexPersistence({
            storage: window.localStorage
        }).plugin(store)
    }

    return store
}
