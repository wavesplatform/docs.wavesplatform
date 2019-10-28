// import elementResizeDetectorMaker from 'element-resize-detector'
export default {

    computed: {
        layoutWidth () {
            return this.$store.state.interface.layoutWidth
        },
    },

    methods: {
        setInterfaceInnerWidthLayout () {
            // console.error('test:', window.innerWidth)
            this.$store.commit('setInterfaceInnerWidthLayout', window.innerWidth)
        },
    },



    mounted () {
        if (!this.$isServer) {
            window.addEventListener('resize', () => {
                this.setInterfaceInnerWidthLayout();
                if(this.resizeCallback) {
                    this.resizeCallback();
                }
            })
            this.setInterfaceInnerWidthLayout()
        }
    },

    beforeDestroy () {
        window.removeEventListener('resize', this.setInterfaceInnerWidthLayout);
    },
};
