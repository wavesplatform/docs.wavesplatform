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
        setInterfaceInnerHeightLayout () {
            // console.error('test:', window.innerWidth)
            this.$store.commit('setInterfaceInnerHeightLayout', window.innerHeight)
        },
    },



    mounted () {
        if (!this.$isServer) {
            window.addEventListener('resize', () => {
                this.setInterfaceInnerWidthLayout();
                this.setInterfaceInnerHeightLayout();
            })
            this.setInterfaceInnerWidthLayout();
            this.setInterfaceInnerHeightLayout();
        }
    },

    beforeDestroy () {
        window.removeEventListener('resize', this.setInterfaceInnerWidthLayout);
    },
};
