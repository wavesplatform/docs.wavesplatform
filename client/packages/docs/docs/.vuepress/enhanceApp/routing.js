import VuexPersistence from 'vuex-persist';

export default async(context, store) => {
    const { Vue,
        router,
        isServer,
    } = context;

    const defaultLanguage = store.state.defaultLanguage;
    const currentLanguage = store.state.currentLanguage;

    const goToLocalePage = (locale) => {
        switch(locale) {
            case 'ru-RU':
                router.push('/ru/');
                break;
            default:
                router.push('/en/');
        }
    };


    console.log('currentLanguage:', currentLanguage, defaultLanguage, Vue, store, context)


    store.watch(
        (state, getters) => {
            return state.currentLanguage;
        },
        (newValue, oldValue) => {
            goToLocalePage(newValue);
        },
    );

    // store.commit('setCurrentLanguage', new Date())


    if(!isServer) {
        if(window.location.pathname === '/') {
            await Vue.nextTick();
            if(currentLanguage) {
                goToLocalePage(currentLanguage);
            } else {
                store.commit('setCurrentLanguage', defaultLanguage);
            }
        }
    }

    console.log('router:', router);
    // router.addRoutes([
    //   // { path: 'http://localhost:3083', redirect: '/en/' },
    //   // { path: '/bar/', redirect: '/' }
    // ])

    // router.beforeResolve((to, from, next) => {
    //     // Any path I went redirected to the base I would add to the Array below
    //     // const editable = ['/https/mywebsite.mycompany.com']
    //     //
    //     // let flag = editable.filter(i => to.fullPath.startsWith(i))
    //     //
    //     // if(flag.length > 0) {
    //     //     const newPath = to.fullPath.replace(flag[0],'/');
    //     //     //Forcing the router to point to the base of the app
    //     //     next(newPath);
    //     // } else {
    //     //     next();
    //     // }
    //     console.log('to:', to, from);
    //     next();
    //
    // })
}
