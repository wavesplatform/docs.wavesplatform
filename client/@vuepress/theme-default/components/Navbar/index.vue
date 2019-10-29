<template>
    <component is="ForHomePage"></component>
</template>

<script>
  import ForHomePage from './ForHomePage'

  import WidthLimit from '@theme/components/WidthLimit'
  import SearchBox from '@theme/components/SearchBox/'
  import SidebarButton from '@theme/components/SidebarButton.vue'
  import NavLinks from '@theme/components/NavLinks.vue'
  import NavLink from '@theme/components/NavLink.vue'
  import Logotype from '@theme/components/Logotype'
  import SwitchLanguage from './SwitchLanguage'

  const css = function (el, property) {
    // NOTE: Known bug, will return 'auto' if style value is 'auto'
    const win = el.ownerDocument.defaultView
    // null means not to return pseudo styles
    return win.getComputedStyle(el, null)[property]
  }

  export default {
    props: {
      // type: {
      //   type: Sting,
      //   default: 'home',
      //   validator(value) {
      //     ['home', '']
      //   },
      // }
    },

    components: {
      ForHomePage,
    },
  }
</script>

<style lang="stylus" module>
    .root {

    }
</style>

