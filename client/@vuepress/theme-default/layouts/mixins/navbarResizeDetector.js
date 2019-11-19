// import elementResizeDetectorMaker from 'element-resize-detector'
export default {

    data() {
      return {
          navbarElement: null,
      }
    },

    computed: {
        headerHeight () {
            return this.$store.state.interface.headerHeight;
        },
    },

    methods: {
        setNavbarHeight (element) {
            this.$store.commit('setHeaderHeight', element.offsetHeight);
        },
    },

    mounted () {
        const navbarRef = this.$refs.navbar;
        if(!navbarRef) {
            return
        }
        const navbarElement = navbarRef.$el;
        this.navbarElement = navbarElement;
        if (!this.$isServer && navbarElement) {
            this.elementResizeDetector = this.$elementResizeDetectorMaker({
                strategy: 'scroll'
            });
            this.elementResizeDetector.listenTo(navbarElement, this.setNavbarHeight)
            this.setNavbarHeight(navbarElement);
        }
    },

    beforeDestroy () {
        if(this.navbarElement) {
            this.elementResizeDetector.removeListener(this.navbarElement, this.setNavbarHeight);
        }

    },
};
