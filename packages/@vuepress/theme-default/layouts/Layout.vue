<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
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
      :class="[
        $style.sidebar,
        $style.sidebar1,
        sidebar1Show && $style._isShow
      ]"
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
        isShow: true,
      }"
      side="right"
      :items="sidebarItems"
      :mod="sidebar2Mod"
      :is-default-show="sidebar2Show"
      :class="[
        $style.sidebar,
        $style.sidebar2,
        sidebar2Show && $style._isShow
      ]"
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
  import Sidebar from '@theme/components/Sidebar.vue'
  import { resolveSidebarItems } from '../util'

  import elementResizeDetectorMaker from 'element-resize-detector'

  const erd = elementResizeDetectorMaker({
    strategy: 'scroll',
  });


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
      }
    },

    computed: {
      pageContainerStile() {
        const isPadding = this.layoutWidth > 719;
        return isPadding ? {
          paddingLeft: this.sidebar1Show ? this.pageContentPaddingLeftPx + 'px' : 0,
          paddingRight: this.sidebar2Show ? this.pageContentPaddingRightPx + 'px' : 0,
        } : {};
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
            'sidebar-open': this.isSidebarOpen,
            'no-sidebar': !this.shouldShowSidebar
          },
          userPageClass
        ]
      },

      layoutWidth() {
        return this.$store.state.interface.layoutWidth;
      },
    },

    // watch: {
    //   '$store.state.interface.layoutWidth'(newValue) {
    //     console.log('newValue:', newValue);
    //   }
    // },

    mounted () {
      this.$router.afterEach(() => {
        this.isSidebarOpen = false
      });

      this.setSidebarStateWatcher('sidebar1', 'sidebar1Show');
      this.setSidebarStateWatcher('sidebar2', 'sidebar2Show');

      this.setSidebarResizeDetector('sidebar1', 'pageContentPaddingLeftPx');
      this.setSidebarResizeDetector('sidebar2', 'pageContentPaddingRightPx');

      window.addEventListener('resize', this.setInterfaceInnerWidthLayout);
      this.setInterfaceInnerWidthLayout();

    },

    beforeDestroy() {
      window.removeEventListener('resize', this.setInterfaceInnerWidthLayout)
    },

    methods: {

      setInterfaceInnerWidthLayout() {
        this.$store.commit('setInterfaceInnerWidthLayout', window.innerWidth)
      },


      setSidebarResizeDetector(sidebarRefName, pageContentPaddingSide) {
        erd.listenTo(this.$refs[sidebarRefName].$el, element => {
          this[pageContentPaddingSide] = element.offsetWidth;
        });
      },

      setSidebarStateWatcher(sidebarName, sidebarShowPropName) {
        this.$refs[sidebarName].$watch('isShow', newValue => {
          this[sidebarShowPropName] = newValue;
        }, {
          immediate: true,
        })
      },

      toggleSidebar (/*to*/) {
        const sidebar1ComponentExemplar = this.$refs.sidebar1;
        sidebar1ComponentExemplar.isShow = !sidebar1ComponentExemplar.isShow;
        // this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
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
  .sidebar {
    font-size: 16px;
    background-color: #fff;
    width: $sidebarWidth;
    position: fixed;
    z-index: 10;
    margin: 0;
    top: $navbarHeight;
    bottom: 0;
    box-sizing: border-box;
  }
  .sidebar1 {
    left: 0;
    &:not(._isShow) {

    }
    &._isShow {

    }
  }
  .sidebar2 {
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
