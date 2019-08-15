export default async(context) => {
    const { Vue,
        isServer
    } = context;

    if (!isServer) {
        import('vue-toasted' /* webpackChunkName: "notification" */).then((module) => {
            Vue.use(module.default)
        })
    }
}
