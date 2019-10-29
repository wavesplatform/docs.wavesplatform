import WidthLimit from '@theme/components/WidthLimit'
import SearchBox from '@theme/components/SearchBox/'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import NavLink from '@theme/components/NavLink.vue'
import Logotype from '@theme/components/Logotype'
import SwitchLanguage from '@theme/components/SwitchLanguage'

export default {
    components: {
        WidthLimit,
        SidebarButton,
        NavLinks,
        NavLink,
        SearchBox,
        Logotype,
        SwitchLanguage,
    },

    data() {
        return {
            linksWrapMaxWidth: null,
            currentLanguage: '',
        }
    },

    computed: {
        layoutWidth () {
            return this.$store.state.interface.layoutWidth;
        },
    },

    watch: {
        $route(newValue) {
            this.currentLanguage = newValue.path;
        },
    },

    mounted() {
        // const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
        // const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'));
        //
        //
        // const handleLinksWrapWidth = () => {
        //     if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        //         this.linksWrapMaxWidth = null
        //     } else {
        //         this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
        //             - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
        //     }
        // }
        // handleLinksWrapWidth()
        // window.addEventListener('resize', handleLinksWrapWidth, false)
        this.currentLanguage = this.$page.path;
    },

    methods: {

    },
}
