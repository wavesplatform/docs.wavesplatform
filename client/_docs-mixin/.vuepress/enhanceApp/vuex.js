import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
export default (context) => {
    const { Vue, isServer } = context;
    const defaultFocusIndex = -1;
    let layoutWidth = 1920;
    if(!isServer) {
        layoutWidth = window.innerWidth
    }
    const state = {
        themeConfig: context.siteData.themeConfig,
        defaultLanguage: '',
        currentLanguage: '',
        interface: {
            isUserNaturalScrollState: false,
            isScrollTopState: false,
            documentElementScrollTop: 0,
            layoutWidth,
            layoutHeight: 0,
            headerHeight: 71,
            leftSidebarWidth: 0,
            leftSidebarMinWidthPx: 240,
            isOpenLeftSidebar: false,
            rightSidebarWidth: 0,
            rightSidebarAlwaysVisiblePartWidth: 50,
            isOpenRightSidebar: true,
            rightSidebarMinWidthPx: 190,
            isRightSidebarResizingState: false,
            mainContentPositionLeft: 0,
            mainContentHeight: 0,
            isShowSearchResultWindow: false,
        },
        isShowLanguageNotification: false,
        // isProcessDev: process.env.isDev,
        search: {
            query: '',
            defaultFocusIndex,
            focusIndex: defaultFocusIndex,
        },
        leftSidebarOpenedGroups: [],
    }
    if (!isServer) {
        state.defaultLanguage = navigator.language
    }

    const modules = {}

    const set = key => (state, val) => {
        state[key] = val
    }
    const mutations = {

        setUserNaturalScrollState(state, isUserNaturalScrollState) {
            state.interface.isUserNaturalScrollState = isUserNaturalScrollState
        },

        setActiveColoration(state, colorationName) {
            state.themeConfig.activeColouration = colorationName;
        },

        setDisplaySearchResultWindow(state, isShow) {
            state.interface.isShowSearchResultWindow = isShow;
        },
        setScrollTopState(state, isScrollTopState) {
            state.interface.isScrollTopState = isScrollTopState;
        },

        setMainContentHeight(state, height) {
            state.interface.mainContentHeight = height;
        },

        setMainContentPositionLeft(state, left) {
            state.interface.mainContentPositionLeft = left;
        },

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

        setCurrentLanguage: set('currentLanguage'),

        setLeftSidebarOpenedGroups: set('leftSidebarOpenedGroups'),

        setDisplayShowLanguageNotification: set('isShowLanguageNotification'),

        setHeaderHeight (state, value) {
            state.interface.headerHeight = value
        },

        setSearchQuery (state, value) {
            state.search.query = value
        },

    }

    const actions = {};

    let vuexPersistence = null;
    if (!isServer) {
        vuexPersistence = new VuexPersistence({
            storage: window.localStorage,
            reducer: (state) => {
                const {
                    themeConfig: {
                        activeColouration,
                    },
                    interface: {
                        // documentElementScrollTop,
                        // layoutWidth,
                        // layoutHeight,
                        // headerHeight,
                        leftSidebarWidth,
                        isOpenLeftSidebar,
                        rightSidebarWidth,
                        isOpenRightSidebar,
                        // isShowSearchResultWindow,
                    },
                } = state;
                return {
                    themeConfig: {
                        activeColouration,
                    },
                    interface: {
                        leftSidebarWidth,
                        isOpenLeftSidebar,
                        rightSidebarWidth,
                        isOpenRightSidebar,
                    },
                };
            },
        });
    };

    const getters = {
        activeColorationConfig: state => {
            const themeConfig = state.themeConfig;
            return themeConfig.colouration[themeConfig.activeColouration]
        },
        activeColorationConfigColors(state) {
            return getters.activeColorationConfig(state).colors;
        },
    }
    Vue.use(Vuex);
    const store = new Vuex.Store({
        state,
        modules,
        mutations,
        actions,
        getters,
        plugins: vuexPersistence ? [vuexPersistence.plugin] : [],
    })
    // if (!isServer) {
    //     // new VuexPersistence({
    //     //     storage: window.localStorage,
    //     //     reducer: (state) => ({
    //     //         search: state.search,
    //     //     })
    //     // }).plugin(store)
    // }
    Vue.mixin({
        store
    });
    return store
}
