<template>
    <div
        :class="['theme-container', pageClasses]"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >
        <Navbar
            v-if="shouldShowNavbar"
            ref="navbar"
            :class="$style.navbar"
            :style="{
        maxWidth: navbarMaxWidth,
      }"
            @toggle-sidebar="toggleSidebar"
        />

        <div
            class="sidebar-mask"
            @click="toggleSidebar(false)"
        ></div>

        <Sidebar
            ref="sidebar1"
            :sidebar-toggle-trigger-options="{
        isShow: layoutWidth > 719,
      }"
            :items="sidebarItems"
            :mod="layoutWidth > 719 ? 1 : 0"
            :is-default-show="sidebar1Show"
            :sidebar-min-width-px="sidebarMinWidthPx"
            :class="[
        $style.sidebar,
        $style.sidebar1,
        sidebar1Show && $style._isShow,
        layoutWidth > 719 && $style._bigLayoutWidth,
      ]"
            :style="{
        minWidth: sidebarMinWidthPx + 'px',
      }"
            @toggleSidebar="toggleLeftSidebar"
        >
            <div
                ref="sidebar1__header"
                :class="$style.sidebar1__header"
                slot="header">
                <router-link
                    :to="$localePath"
                    class="home-link"
                >
                    <svg width="190" height="24" viewBox="0 0 181 24" xmlns="http://www.w3.org/2000/svg"><title>
                        waves_logo</title>
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#05F" d="M115.989 6.122l-6.046 6.034-6.045-6.034 6.045-6.034z"/>
                            <g fill="#000">
                                <path
                                    d="M27.045 6.351h-3.411l-.357.308-3.5 11.831h-.023L15.83 6.66l-.357-.308h-3.567l-.357.308-3.902 11.765-.066-.044-.023-.021-3.5-11.7-.358-.31H.223L0 6.66l5.462 16.66.38.33h3.433l.38-.33 3.9-11.919h.09l3.924 11.92.38.329h3.477l.38-.33 5.462-16.66zm38.594 0h-3.434l-.379.308-4.793 12.314-.045.022L52.24 6.66l-.379-.308h-3.5l-.223.308 6.844 16.66.402.33h3.166l.401-.33 6.912-16.66z"/>
                                <path
                                    d="M83.342 15.922l.334-.307v-.505c0-2.7-.78-5.027-2.319-6.651C79.82 6.834 77.745 6 75.204 6c-2.453 0-4.504.9-6.087 2.656-1.583 1.756-2.363 3.885-2.363 6.3 0 2.568.825 4.72 2.452 6.41 1.628 1.69 3.768 2.546 6.354 2.546 1.873 0 3.479-.439 4.772-1.339 1.293-.878 2.653-2.327 3.121-4.302l-.245-.33h-3.21l-.447.33c-.802 1.58-2.028 2.327-4.057 2.327a5.024 5.024 0 0 1-3.479-1.361c-.936-.857-1.471-1.888-1.605-3.359l12.932.044zm-12.709-3.073c.558-2.042 2.297-3.556 4.57-3.556 3.01 0 4.26 2.107 4.616 3.556h-9.186zm-28.07-6.498l-.335.33v1.712l-.067.066c-.446-.571-1.048-1.076-1.761-1.493a10.537 10.537 0 0 0-.513-.264c-.959-.46-2.051-.68-3.233-.68-2.207 0-4.147.878-5.752 2.59-1.605 1.712-2.408 3.864-2.408 6.388s.803 4.676 2.408 6.388c1.605 1.712 3.545 2.59 5.752 2.59 1.182 0 2.252-.22 3.21-.68.18-.088.38-.176.558-.286.691-.417 1.271-.878 1.717-1.427.022-.022.09.022.112 0v1.778l.334.33h2.92l.335-.33V6.66l-.334-.33h-2.943v.022zm-1.806 12.776c-.981 1.032-2.163 1.536-3.59 1.536-1.382 0-2.408-.504-3.411-1.558-1.003-1.032-1.494-2.415-1.494-4.149 0-1.712.513-3.095 1.494-4.149 1.003-1.031 2.006-1.558 3.411-1.558 1.405 0 2.586.505 3.59 1.536.646.68 1.07 1.493 1.315 2.48v3.337c-.223 1.032-.669 1.866-1.315 2.525z"
                                    fill-rule="nonzero"/>
                                <path
                                    d="M95.716 13.639s-1.918-.395-3.5-.746c-1.45-.33-2.186-.747-2.186-1.756 0-1.076 1.048-1.976 3.3-1.976 2.208 0 3.434.966 3.434 1.822l.379.33h3.21l.246-.308c0-2.261-1.985-4.961-7.18-4.961-5.417 0-7.112 3.139-7.112 5.158 0 1.69.624 3.688 4.771 4.632l3.568.79c1.806.396 2.564 1.01 2.564 2.042 0 .944-.959 2.085-3.456 2.085-2.319 0-3.724-1.097-3.79-2.392l-.402-.33h-3.277l-.245.33c.29 2.897 2.474 5.619 7.692 5.619 5.908 0 7.112-3.556 7.112-5.422 0-2.502-1.45-4.127-5.128-4.917z"/>
                            </g>
                            <text font-family="Helvetica" font-size="1rem" font-weight="100" fill="#000"
                                  transform="translate(0 -1)">
                                <tspan x="127" y="24">Docs</tspan>
                            </text>
                        </g>
                    </svg>
                </router-link>
            </div>
            <slot
                name="sidebar-top"
                slot="top"
            />
            <slot
                name="sidebar-bottom"
                slot="bottom"
            />
        </Sidebar>

        <Home v-if="$page.frontmatter.home"/>

        <Page
            v-else
            :sidebar-items="sidebarItems"
            :class="$style.page"
            :style="pageContainerStile"
        >
            <slot
                name="page-top"
                slot="top"
            />
            <slot
                name="page-bottom"
                slot="bottom"
            />
        </Page>
        <Sidebar
            v-show="layoutWidth > 719"
            ref="sidebar2"
            :sidebar-toggle-trigger-options="{
        isShow: navbarSubHeaders.length,
      }"
            side="right"
            :items="sidebarItems"
            :mod="sidebar2Mod"
            :is-default-show="sidebar2Show"
            :sidebar-min-width-px="sidebarMinWidthPx"
            :class="[
        $style.sidebar,
        $style.sidebar2,
        sidebar2Show && $style._isShow
      ]"
            :style="{
        minWidth: sidebarMinWidthPx + 'px',
      }"
            @toggle-sidebar="toggleSidebar"
        >
            <slot
                name="sidebar-top"
                slot="top"
            />
            <slot
                name="sidebar-bottom"
                slot="bottom"
            />
        </Sidebar>
    </div>
</template>

<script>

  import Home from '@theme/components/Home.vue'
  import Navbar from '@theme/components/Navbar.vue'
  import Page from '@theme/components/Page.vue'
  import Sidebar from '@theme/components/Sidebar/'

  import { resolveSidebarItems } from '../util'

  import elementResizeDetectorMaker from 'element-resize-detector'

  const erd = elementResizeDetectorMaker({
    strategy: 'scroll'
  })

  // console.log('process.env', process.env);

  export default {
    components: { Home, Page, Sidebar, Navbar },

    data () {
      return {
        isSidebarOpen: false,

        sidebar1Mod: 1,
        sidebar2Mod: 2,

        sidebar1Show: true,
        sidebar2Show: true,

        pageContentPaddingLeftPx: 0,
        pageContentPaddingRightPx: 0,

        navbarMaxWidthPx: 0

      }
    },

    computed: {
      pageContainerStile () {
        const isPadding = this.layoutWidth > 719
        return isPadding ? {
          paddingLeft: this.sidebar1Show ? this.pageContentPaddingLeftPx + 'px' : 0,
          paddingRight: this.sidebar2Show ? this.pageContentPaddingRightPx + 'px' : 0
        } : {}
      },

      shouldShowNavbar () {
        const { themeConfig } = this.$site
        const { frontmatter } = this.$page
        if (
          frontmatter.navbar === false
          || themeConfig.navbar === false) {
          return false
        }
        return (
          this.$title
          || themeConfig.logo
          || themeConfig.repo
          || themeConfig.nav
          || this.$themeLocaleConfig.nav
        )
      },

      shouldShowSidebar () {
        const { frontmatter } = this.$page
        return (
          !frontmatter.home
          && frontmatter.sidebar !== false
          && this.sidebarItems.length
        )
      },

      sidebarItems () {
        // console.log('this.$page,\n' +
        //   '          this.$page.regularPath,\n' +
        //   '          this.$site,\n' +
        //   '          this.$localePath', this.$page,
        //   this.$page.regularPath,
        //   this.$site,
        //   this.$localePath)
        return resolveSidebarItems(
          this.$page,
          this.$page.regularPath,
          this.$site,
          this.$localePath
        )
      },

      pageClasses () {
        const userPageClass = this.$page.frontmatter.pageClass
        return [
          {
            'no-navbar': !this.shouldShowNavbar,
            'sidebar-open': this.isSidebarOpen
            // 'no-sidebar': !this.shouldShowSidebar
          },
          userPageClass
        ]
      },

      layoutWidth () {
        return this.$store.state.interface.layoutWidth
      },

      navbarSubHeaders () {
        return this.$store.state.navbarSubHeaders
      },

      navbarMaxWidth () {
        if (this.layoutWidth > 719) {
          return this.navbarMaxWidthPx ? this.navbarMaxWidthPx + 'px' : ''
        } else {
          return ''
        }
      },

      sidebarMinWidthPx () {
        return this.layoutWidth > 719 ? 80 : 0
      }
    },

    watch: {
      // '$store.state.interface.layoutWidth'(newValue) {
      //   console.log('newValue:', newValue);
      // }

      navbarSubHeaders: {
        async handler (newValue) {
          await this.$nextTick()
          const sidebar2 = this.$refs.sidebar2
          if (!sidebar2) {
            return
          }
          if (!newValue.length) {
            sidebar2.isShow = false
            return
          }
          sidebar2.isShow = true
        },
        immediate: true
      }
    },

    async beforeMount () {
      // this.$data.items = await axios.get('https://reqres.in/api/users')
      // console.log('this test:', this.$data.items);
    },

    mounted () {
      this.$router.afterEach(() => {
        this.isSidebarOpen = false
      })

      this.setSidebarStateWatcher('sidebar1', 'sidebar1Show')
      this.setSidebarStateWatcher('sidebar2', 'sidebar2Show')

      const sidebar1ResizeCallback = this.setSidebarResizeDetector('sidebar1', 'pageContentPaddingLeftPx', element => {
        this.navbarMaxWidthPx = document.body.clientWidth - element.offsetWidth - 1
      })

      this.setSidebarResizeDetector('sidebar2', 'pageContentPaddingRightPx')

      window.addEventListener('resize', () => {

        this.setInterfaceInnerWidthLayout()
        sidebar1ResizeCallback()
      })
      this.setInterfaceInnerWidthLayout()

      erd.listenTo(this.$refs.navbar.$el, element => {
        this.$refs.sidebar1__header.style.height = element.offsetHeight - 1 + 'px'
        // element.offsetHeight
      })

    },

    beforeDestroy () {
      window.removeEventListener('resize', this.setInterfaceInnerWidthLayout)
    },

    methods: {

      setInterfaceInnerWidthLayout () {
        this.$store.commit('setInterfaceInnerWidthLayout', window.innerWidth)
      },

      setSidebarResizeDetector (sidebarRefName, pageContentPaddingSide, callback) {
        const element = this.$refs[sidebarRefName].$el
        const resizeFunction = () => {
          this[pageContentPaddingSide] = element.offsetWidth
          if (callback) {
            callback(element)
          }
        }
        erd.listenTo(element, resizeFunction)
        return resizeFunction
      },

      setSidebarStateWatcher (sidebarName, sidebarShowPropName) {
        this.$refs[sidebarName].$watch('isShow', newValue => {
          this[sidebarShowPropName] = newValue
        }, {
          immediate: true
        })
      },

      toggleSidebar (/*to*/) {
        const sidebar1ComponentExemplar = this.$refs.sidebar1
        sidebar1ComponentExemplar.isShow = !sidebar1ComponentExemplar.isShow
        // this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      },

      toggleLeftSidebar () {
        console.log('test')
      },

      // side swipe
      onTouchStart (e) {
        this.touchStart = {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY
        }
      },

      onTouchEnd (e) {
        const dx = e.changedTouches[0].clientX - this.touchStart.x
        const dy = e.changedTouches[0].clientY - this.touchStart.y
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
          if (dx > 0 && this.touchStart.x <= 80) {
            this.toggleSidebar(true)
          } else {
            this.toggleSidebar(false)
          }
        }
      }
    }
  }
</script>


<style src="prismjs/themes/prism-tomorrow.css"></style>
<!--<style src="../styles/theme.styl" lang="stylus"></style>-->

<style lang="stylus" module>
    .navbar {
        right 0
    }

    .sidebar {
        font-size: 16px;
        background-color: #fff;
        width: $sidebarWidth;
        position: fixed;
        z-index: 10;
        margin: 0;
        bottom: 0;
        box-sizing: border-box;
    }

    .sidebar1 {
        top: 0;
        left: 0;

        &:not(._isShow) {

        }

        &._isShow {

        }

        &:not(._bigLayoutWidth) {
            top: $navbarHeight;
        }
    }

    .sidebar1__header {
        padding 0.7rem 1.5rem
        box-sizing border-box
        width 100%
        overflow hidden
    }

    .sidebar2 {
        top: $navbarHeight;
        right: 0;

        &:not(._isShow) {

        }

        &._isShow {

        }
    }

    .page {
        transition-duration $toggleSidebarTransitionDuration
        margin 0 6rem
        padding-top 3rem
    }
</style>
