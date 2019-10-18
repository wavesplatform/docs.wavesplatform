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

<!--        <Sidebar-->
<!--            ref="sidebar1"-->
<!--            :sidebar-toggle-trigger-options="{-->
<!--                isShow: layoutWidth > 719,-->
<!--              }"-->
<!--            :items="sidebarItems"-->
<!--            :mod="layoutWidth > 719 ? 1 : 0"-->
<!--            :is-default-show="sidebar1Show"-->
<!--            :sidebar-min-width-px="sidebarMinWidthPx"-->
<!--            :class="[-->
<!--        $style.sidebar,-->
<!--        $style.sidebar1,-->
<!--        sidebar1Show && $style._isShow,-->
<!--        layoutWidth > 719 && $style._bigLayoutWidth,-->
<!--      ]"-->
<!--            :style="{-->
<!--        minWidth: sidebarMinWidthPx + 'px',-->
<!--      }"-->
<!--            @toggleSidebar="toggleLeftSidebar"-->
<!--        >-->
<!--            <div-->
<!--                ref="sidebar1__header"-->
<!--                :class="$style.sidebar1__header"-->
<!--                slot="header">-->
<!--                <router-link-->
<!--                    :to="$localePath"-->
<!--                    class="home-link"-->
<!--                >-->
<!--                    <Logotype :class="$style.logotype"/>-->
<!--                </router-link>-->
<!--            </div>-->
<!--            <slot-->
<!--                name="sidebar-top"-->
<!--                slot="top"-->
<!--            />-->
<!--            <slot-->
<!--                name="sidebar-bottom"-->
<!--                slot="bottom"-->
<!--            />-->
<!--        </Sidebar>-->

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
<!--        <Sidebar-->
<!--            v-show="layoutWidth > 719"-->
<!--            ref="sidebar2"-->
<!--            :sidebar-toggle-trigger-options="{-->
<!--                isShow: navbarSubHeaders.length/*true*/,-->
<!--              }"-->
<!--            side="right"-->
<!--            :items="[$page]"-->
<!--            :mod="sidebar2Mod"-->
<!--            :is-default-show="sidebar2Show"-->
<!--            :sidebar-min-width-px="sidebarMinWidthPx"-->
<!--            :class="[-->
<!--                $style.sidebar,-->
<!--                $style.sidebar2,-->
<!--                sidebar2Show && $style._isShow-->
<!--              ]"-->
<!--            :style="{-->
<!--        minWidth: sidebarMinWidthPx + 'px',-->
<!--      }"-->
<!--            @toggle-sidebar="toggleSidebar"-->
<!--        >-->
<!--            <slot-->
<!--                name="sidebar-top"-->
<!--                slot="top"-->
<!--            />-->
<!--            <slot-->
<!--                name="sidebar-bottom"-->
<!--                slot="bottom"-->
<!--            />-->
<!--        </Sidebar>-->
    </div>
</template>

<script>
  import Home from '@theme/components/Home.vue'
  import Navbar from '@theme/components/Navbar.vue'
  import Page from '@theme/components/Page.vue'
  import Sidebar from '@theme/components/Sidebar/'
  import Logotype from '@theme/components/Logotype'
  import { resolveSidebarItems } from '../util'
  import elementResizeDetectorMaker from 'element-resize-detector'

  export default {
    components: {
      Home,
      Page,
      Sidebar,
      Navbar,
      Logotype
    },

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

      headerHeight () {
        return this.$store.state.interface.headerHeight;
      },

      pageContainerStile () {
        const isPadding = this.layoutWidth > 719;

        return Object.assign(isPadding && {
          paddingTop: this.headerHeight + 'px',
          paddingLeft: this.sidebar1Show ? this.pageContentPaddingLeftPx + 'px' : 0,
          paddingRight: this.sidebar2Show ? this.pageContentPaddingRightPx + 'px' : 0,
        }, {
          margin: `${this.layoutWidth > 719 ? 2 : 1}rem`,
        })
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
        // return [];
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

      if (!this.$isServer) {
        // this.elementResizeDetector = elementResizeDetectorMaker({
        //   strategy: 'scroll'
        // })
        // this.setSidebarStateWatcher('sidebar1', 'sidebar1Show')
        // this.setSidebarStateWatcher('sidebar2', 'sidebar2Show')
        //
        // const sidebar1ResizeCallback = this.setSidebarResizeDetector('sidebar1', 'pageContentPaddingLeftPx', element => {
        //   this.navbarMaxWidthPx = document.body.clientWidth - element.offsetWidth - 1
        // })
        //
        // this.setSidebarResizeDetector('sidebar2', 'pageContentPaddingRightPx')
        //
        // window.addEventListener('resize', () => {
        //
        //   this.setInterfaceInnerWidthLayout()
        //   sidebar1ResizeCallback()
        // })
        // this.setInterfaceInnerWidthLayout()
        //
        // this.elementResizeDetector.listenTo(this.$refs.navbar.$el, element => {
        //     const navbarHeight = element.offsetHeight
        //     this.$refs.sidebar1__header.style.height = navbarHeight - 1 + 'px';
        //     console.log('this.$store:', this.$store);
        //     this.$store.commit('setHeaderHeight', navbarHeight);
        //     console.log('navbarHeight:', navbarHeight, this.headerHeight)
        // })

      }
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
        this.elementResizeDetector.listenTo(element, resizeFunction)
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

<!--<style src="../styles/theme.styl" lang="stylus"></style>-->
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style lang="stylus" module>
    .navbar {
        right 0
        width 100%
        justify-content space-between
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
    .logotype {
        max-height 24px
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
        /*margin 0 1rem*/
        padding-top 3rem
    }
</style>
