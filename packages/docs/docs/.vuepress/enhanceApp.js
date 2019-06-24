import Vuex from 'vuex'
import {
  Select,
  Button,
  Popover,
  Breadcrumb,
  BreadcrumbItem,
  Alert,
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export default async(context) => {

  const { Vue,
    options,
    router,
    isServer
  } = context;




  // Vue.use(Element)
  Vue.component(Select.name, Select)
  Vue.component(Button.name, Button)
  Vue.component(Popover.name, Popover)
  Vue.component(Breadcrumb.name, Breadcrumb)
  Vue.component(BreadcrumbItem.name, BreadcrumbItem)
  Vue.component(Alert.name, Alert)
  /**/

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

  if (!isServer) {
    import('vue-toasted' /* webpackChunkName: "notification" */).then((module) => {
      Vue.use(module.default)
    })
  }


  console.log('router:', context);
  if(!isServer) {
    await Vue.nextTick();
    router.push('/en/')
  }
  // router.addRoutes([
  //   // { path: 'http://localhost:3083', redirect: '/en/' },
  //   // { path: '/bar/', redirect: '/' }
  // ])

}
