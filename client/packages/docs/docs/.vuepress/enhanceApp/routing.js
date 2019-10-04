export default async(context) => {
    const { Vue,
        router,
        isServer
    } = context;

    if(!isServer) {
        if(window.location.pathname === '/') {
            // await Vue.nextTick();
            // router.push('/en/');
        }
    }
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
