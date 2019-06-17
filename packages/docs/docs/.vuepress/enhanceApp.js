import Vuex from 'vuex'

export default ({ Vue,
                  options,
                  router,
                  isServer
                }) => {

  Vue.use(Vuex);

  const state = {
    interface: {
      layoutWidth: 0,
    }
  }

  const modules = {

  }

  const mutations = {
    setInterfaceInnerWidthLayout(state, width) {
      state.interface.layoutWidth = width;
    },
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

  if (!isServer) {
    import('vue-toasted' /* webpackChunkName: "notification" */).then((module) => {
      Vue.use(module.default)
    })
  }


  // router.addRoutes([
  //   { path: '/introduction/waves-environment/custom-tokens', redirect: '/' },
  //   { path: '/bar/', redirect: '/' }
  // ])

}
