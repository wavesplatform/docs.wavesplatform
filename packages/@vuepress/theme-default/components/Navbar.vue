<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

    <!--<router-link-->
      <!--:to="$localePath"-->
      <!--class="home-link"-->
    <!--&gt;-->
      <!--<img-->
        <!--class="logo"-->
        <!--v-if="$site.themeConfig.logo"-->
        <!--:src="$withBase($site.themeConfig.logo)"-->
        <!--:alt="$siteTitle"-->
      <!--&gt;-->
      <!--<svg width="181" height="24" viewBox="0 0 181 24" xmlns="http://www.w3.org/2000/svg"><title>waves_logo</title><g fill="none" fill-rule="evenodd"><path fill="#05F" d="M115.989 6.122l-6.046 6.034-6.045-6.034 6.045-6.034z"/><g fill="#000"><path d="M27.045 6.351h-3.411l-.357.308-3.5 11.831h-.023L15.83 6.66l-.357-.308h-3.567l-.357.308-3.902 11.765-.066-.044-.023-.021-3.5-11.7-.358-.31H.223L0 6.66l5.462 16.66.38.33h3.433l.38-.33 3.9-11.919h.09l3.924 11.92.38.329h3.477l.38-.33 5.462-16.66zm38.594 0h-3.434l-.379.308-4.793 12.314-.045.022L52.24 6.66l-.379-.308h-3.5l-.223.308 6.844 16.66.402.33h3.166l.401-.33 6.912-16.66z"/><path d="M83.342 15.922l.334-.307v-.505c0-2.7-.78-5.027-2.319-6.651C79.82 6.834 77.745 6 75.204 6c-2.453 0-4.504.9-6.087 2.656-1.583 1.756-2.363 3.885-2.363 6.3 0 2.568.825 4.72 2.452 6.41 1.628 1.69 3.768 2.546 6.354 2.546 1.873 0 3.479-.439 4.772-1.339 1.293-.878 2.653-2.327 3.121-4.302l-.245-.33h-3.21l-.447.33c-.802 1.58-2.028 2.327-4.057 2.327a5.024 5.024 0 0 1-3.479-1.361c-.936-.857-1.471-1.888-1.605-3.359l12.932.044zm-12.709-3.073c.558-2.042 2.297-3.556 4.57-3.556 3.01 0 4.26 2.107 4.616 3.556h-9.186zm-28.07-6.498l-.335.33v1.712l-.067.066c-.446-.571-1.048-1.076-1.761-1.493a10.537 10.537 0 0 0-.513-.264c-.959-.46-2.051-.68-3.233-.68-2.207 0-4.147.878-5.752 2.59-1.605 1.712-2.408 3.864-2.408 6.388s.803 4.676 2.408 6.388c1.605 1.712 3.545 2.59 5.752 2.59 1.182 0 2.252-.22 3.21-.68.18-.088.38-.176.558-.286.691-.417 1.271-.878 1.717-1.427.022-.022.09.022.112 0v1.778l.334.33h2.92l.335-.33V6.66l-.334-.33h-2.943v.022zm-1.806 12.776c-.981 1.032-2.163 1.536-3.59 1.536-1.382 0-2.408-.504-3.411-1.558-1.003-1.032-1.494-2.415-1.494-4.149 0-1.712.513-3.095 1.494-4.149 1.003-1.031 2.006-1.558 3.411-1.558 1.405 0 2.586.505 3.59 1.536.646.68 1.07 1.493 1.315 2.48v3.337c-.223 1.032-.669 1.866-1.315 2.525z" fill-rule="nonzero"/><path d="M95.716 13.639s-1.918-.395-3.5-.746c-1.45-.33-2.186-.747-2.186-1.756 0-1.076 1.048-1.976 3.3-1.976 2.208 0 3.434.966 3.434 1.822l.379.33h3.21l.246-.308c0-2.261-1.985-4.961-7.18-4.961-5.417 0-7.112 3.139-7.112 5.158 0 1.69.624 3.688 4.771 4.632l3.568.79c1.806.396 2.564 1.01 2.564 2.042 0 .944-.959 2.085-3.456 2.085-2.319 0-3.724-1.097-3.79-2.392l-.402-.33h-3.277l-.245.33c.29 2.897 2.474 5.619 7.692 5.619 5.908 0 7.112-3.556 7.112-5.422 0-2.502-1.45-4.127-5.128-4.917z"/></g><text font-family="Helvetica" font-size="25" fill="#9aa6b1" transform="translate(0 -1)"><tspan x="127" y="24">Docs</tspan></text></g></svg>-->

      <!--<span-->
        <!--ref="siteName"-->
        <!--class="site-name"-->
        <!--v-if="$siteTitle"-->
        <!--:class="{ 'can-hide': $site.themeConfig.logo }"-->
      <!--&gt;{{ $siteTitle }}</span>-->
    <!--</router-link>-->
    <div
      class="links"
      :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
    >

      <NavLinks :class="['can-hide', $style.navLinks]"/>

      <SearchBox v-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/>
      <div :class="$style.languagesNav">
        <NavLink
          v-for="languageItem in languageNavDropdown.items"
          :key="languageItem.link"
          :item="languageItem"
          :class="$style.languagesNav__link"
        />
      </div>

    </div>



  </header>
</template>

<script>
import SearchBox from '@SearchBox'
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { SidebarButton, NavLinks, NavLink, SearchBox },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    },
    languageNavDropdown() {
      const { locales } = this.$site;
      let languageDropdown = [];
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = themeLocales[path] && themeLocales[path].label || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
      }
      return languageDropdown;
    },
  },

  mounted () {
    console.log('languageNavDropdown:', this.languageNavDropdown);

    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus" module>
  .navLinks {
    width 100%
  }
  .languagesNav {
    flex-shrink 0
    margin-left .5rem
    display flex
  }
  .languagesNav__link {

    display flex
    justify-content center
    align-items center
    &:not(:first-child) {
      margin-left .5rem
    }
    &:global(.router-link-active) {
      background orangered
    }
    &:before, &:after {
      content ''
      width: 0;
      height: 0;
      display flex
      position absolute
    }
    &:before {
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid #f00;
    }
    &:after {
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid #0f0;
    }
  }
</style>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  display flex
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    visibility hidden
    height 100vh
    width 100%
    /*padding-left 1.5rem*/
    box-sizing border-box
    background-color white
    white-space nowrap
    font-size 0.9rem
    /*position absolute*/
    left $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    align-items flex-start
    &>*
      visibility visible
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      /*padding-left 1.5rem*/
</style>
