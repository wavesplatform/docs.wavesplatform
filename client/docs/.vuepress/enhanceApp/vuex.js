import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

export default (context) => {
    const { Vue, isServer } = context

    Vue.use(Vuex);

    const defaultFocusIndex = -1;
    let layoutWidth = 1920;

    if(!isServer) {
        layoutWidth = window.innerWidth
    }

    const state = {
        defaultLanguage: '',
        currentLanguage: '',
        interface: {
            documentElementScrollTop: 0,
            layoutWidth,
            layoutHeight: 0,
            headerHeight: 71,
            leftSidebarWidth: 0,
            leftSidebarMinWidthPx: 240,
            isOpenLeftSidebar: false,
            rightSidebarWidth: 0,
            isOpenRightSidebar: true,
            rightSidebarMinWidthPx: 190,
            isRightSidebarResizingState: false,
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



        setDocumentElementScrollTop(state, scrollTop) {
            state.interface.documentElementScrollTop = scrollTop;
        },

        setRightSidebarResizingState(state, isResize) {
            state.interface.isRightSidebarResizingState = isResize
        },

        setDisplayRightSidebar(state, isShow) {
            state.interface.isOpenRightSidebar = isShow
        },

        setDisplayLeftSidebar(state, isShow) {
            state.interface.isOpenLeftSidebar = isShow
        },

        setLeftSidebarWidth(state, width) {
            state.interface.leftSidebarWidth = width
        },

        setRightSidebarWidth(state, width) {
            state.interface.rightSidebarWidth = width
        },

        setSearchSuggestionsFocusIndex (state, index) {
            state.search.focusIndex = index
        },
        setInterfaceInnerWidthLayout (state, width) {
            state.interface.layoutWidth = width
        },

        setInterfaceInnerHeightLayout(state, height) {
            state.interface.layoutHeight = height;
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


    if (!isServer) {
        // new VuexPersistence({
        //     storage: window.localStorage,
        //     reducer: (state) => ({
        //         search: state.search,
        //     })
        // }).plugin(store)
    }

    Vue.mixin({
        store
    })



    return store
}
