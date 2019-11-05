<template>
    <div
        :class="$style.root"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >

        <WidthLimit
            :type="2"
            :class="$style.navbarWrapper"
        >
            <!--@toggleSidebar="toggleLeftSidebar"-->
            <Sidebar
                ref="sidebar1"
                side="left"
                :sidebar-toggle-trigger-options="{
                    isShow: layoutWidth > 719,
                }"
                :items="sidebarItems"
                :mod="layoutWidth > 719 ? 1 : 0"
                :sidebar-min-width-px="leftSidebarMinWidthPx"
                :options="{
                    isMobileMod: layoutWidth < 720,
                }"
                :class="[
                    $style.sidebar,
                    $style.sidebar1,
                ]"
            >
                <!--/*isResizingRightSidebarState = $event*/-->
                <div
                    ref="sidebar1__header"
                    :class="$style.sidebar1__header"
                    slot="header"
                    :style="{
                        height: headerHeight - 1 + 'px',
                    }"
                >
                    <router-link
                        :to="$localePath"
                        :class="$style.logotypeLink"
                    >
                        <Logotype :class="$style.logotype"/>
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

            <Navbar
                ref="navbar"
                :class="$style.navbar"
                @toggle-sidebar="toggleSidebar"
                type="content"
                :style="{
                    transform: (layoutWidth < 720 && isOpenLeftSidebar) ? `translateX(${leftSidebarWidth}px)` : '',
                }"
            />

            <Sidebar
                v-show="layoutWidth > 719"
                ref="sidebar2"
                side="right"
                :sidebar-toggle-trigger-options="{
                    isShow: /*navbarSubHeaders.length*/true,
                }"
                :items="[$page]"
                :mod="sidebar2Mod"
                :sidebar-min-width-px="rightSidebarMinWidthPx"
                :class="[
                $style.sidebar,
                $style.sidebar2,
              ]"
                :style="{
                    height: `calc(100vh - ${headerHeight}px)`,
                }"
                @toggle-sidebar="toggleSidebar"
                @isResizingState="isRightSidebarResizingState = $event"
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
        </WidthLimit>

        <WidthLimit
            :type="2"
            :class="[
                $style.root__contentCell,
            ]"
            :style="contentCellStyles"
            :padding-l-r="0"
        >
            <!--v-show="layoutWidth < 720"-->
            <WidthLimit
                v-show="layoutWidth < 720"
                :class="$style.searchBoxWrapper"
                :type="1"
                :padding-l-r="1"
            >
                <SearchBox
                    :class="$style.searchBox"
                    :is-full-size="true"
                    :size="1"
                    :with-suggestions="false"
                />

                <div
                    :class="$style.searchSuggestionsWrapper"
                >
                    <Suggestions
                        ref="suggestions"
                        :class="$style.searchSuggestions"
                    />
                </div>
            </WidthLimit>
            <WidthLimit
                :class="$style.root__contentCell__wrapper"
                :padding-l-r="layoutWidth > 719 ? 2 : 1"
            >

                <!--        <div-->
                <!--            class="sidebar-mask"-->
                <!--            @click="toggleSidebar(false)"-->
                <!--        ></div>-->
                <Home v-if="$page.frontmatter.home"/>

                <!--:style="pageContainerStyles"-->
                <Page
                    v-else
                    :sidebar-items="sidebarItems"
                    :class="$style.page"
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
            </WidthLimit>
        </WidthLimit>
    </div>
</template>

<script>
  import Home from '@theme/components/Home.vue'
  import Navbar from '@theme/components/Navbar'
  import Page from '@theme/components/Page.vue'
  import Sidebar from '@theme/components/Sidebar/'
  import Logotype from '@theme/components/Logotype'
  import SearchBox from '@theme/components/SearchBox/'
  import watchLayoutWidthMixin from './mixins/watchLayoutWidth'
  import navbarResizeDetector from './mixins/navbarResizeDetector'
  import WidthLimit from '@theme/components/WidthLimit'
  import Suggestions from '@theme/components/SearchBox/Suggestions'
  import { resolveSidebarItems } from '../util'

  export default {

    mixins: [
      watchLayoutWidthMixin,
      navbarResizeDetector,
    ],

    components: {
      Home,
      Page,
      Sidebar,
      Navbar,
      Logotype,
      SearchBox,
      WidthLimit,
      Suggestions,
    },

    data () {
      return {
        sidebar1Mod: 1,
        sidebar2Mod: 2,

        isRightSidebarResizingState: false,

        rightSidebarMinWidthPx: 260,
      }
    },

    computed: {
      isOpenRightSidebar() {
        return this.$store.state.interface.isOpenRightSidebar;
      },

      isOpenLeftSidebar() {
        return this.$store.state.interface.isOpenLeftSidebar;
      },

      leftSidebarWidth() {
        return this.$store.state.interface.leftSidebarWidth;
      },

      rightSidebarWidth() {
        return this.$store.state.interface.rightSidebarWidth;
      },

      // pageContainerStyles () {
      //   const isPadding = this.layoutWidth > 719;
      //
      //   return Object.assign(isPadding && {
      //     // paddingTop: this.headerHeight + 'px',
      //     // paddingLeft: this.sidebar1Show ? this.pageContentPaddingLeftPx + 'px' : 0,
      //     // paddingRight: this.sidebar2Show ? this.pageContentPaddingRightPx + 'px' : 0,
      //     paddingLeft: this.pageContentPaddingLeftPx + 'px',
      //     paddingRight: this.pageContentPaddingRightPx + 'px',
      //   }, {
      //     // margin: `${this.layoutWidth > 719 ? 2 : 1}rem`,
      //   })
      // },
      sidebarItems () {
        return resolveSidebarItems(
          this.$page,
          this.$page.regularPath,
          this.$site,
          this.$localePath
        )
      },

      navbarSubHeaders () {
        return this.$store.state.navbarSubHeaders
      },

      leftSidebarMinWidthPx () {
        return this.layoutWidth > 719 ? 260 : 240
      },

      contentCellStyles() {
        return {
          marginTop: this.headerHeight + 'px',
          paddingLeft: this.layoutWidth > 719 ? this.leftSidebarWidth + 'px' : '',

          transform: (this.layoutWidth < 720 && this.isOpenLeftSidebar) ? `translateX(${this.leftSidebarWidth}px)` : '',

          paddingRight: this.isOpenRightSidebar ? this.rightSidebarWidth + 'px' : '',
          transition: !this.isRightSidebarResizingState ? 'initial' : '',
        }
      },

    },

    watch: {
      layoutWidth(newValue) {
        if(this.layoutWidth < 720) {
          this.$store.commit('setDisplayRightSidebar', false);
          this.$store.commit('setDisplayLeftSidebar', false);
        } else {
          // this.$store.commit('setDisplayRightSidebar', true);
          this.$store.commit('setDisplayLeftSidebar', true);
        }
      },

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
      },

      headerHeight() {
        // this.$refs.sidebar1__header.style.height = navbarHeight - 1 + 'px';
      },
    },

    mounted () {
      // this.$router.afterEach(() => {
      //   this.isSidebarOpen = false
      // })

      if (!this.$isServer) {
        // this.resizeCallback = this.setSidebarResizeDetector('sidebar1', 'pageContentPaddingLeftPx', element => {
        //   this.navbarMaxWidthPx = document.body.clientWidth - element.offsetWidth - 1
        // });
        // this.setSidebarStateWatcher('sidebar1', 'sidebar1Show')
        // this.setSidebarStateWatcher('sidebar2', 'sidebar2Show')

        // this.setSidebarResizeDetector('sidebar2', 'pageContentPaddingRightPx')
      }
    },

    beforeDestroy () {
      // window.removeEventListener('resize', this.setInterfaceInnerWidthLayout);
    },

    methods: {
      setSidebarResizeDetector (sidebarRefName, pageContentPaddingSide, callback) {
        const element = this.$refs[sidebarRefName].$el
        const resizeFunction = () => {
          this[pageContentPaddingSide] = element.offsetWidth
          if (callback) {
            callback(element)
          }
        }
        this.$elementResizeDetector.listenTo(element, resizeFunction)
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
    .root {
        display flex
        flex-direction column
        height 100%
        width 100vw
        overflow hidden
        align-items center
    }
    .navbarWrapper {
        /*width: 100%;*/
        transform: translate3d(0, 0, 0);
        display: flex;
        justify-content: center;
        position fixed
        z-index 1
    }
    .navbar {
        /*position fixed;*/
        right 0
        width 100vw
        flex-shrink 0
        z-index 1
        transition transform $transitionS1
    }
    .sidebar {
        font-size: 16px;
        background-color: #fff;
        /*width: $sidebarWidth;*/
        z-index 2
        height 100vh
    }

    .sidebar1 {
        top 0
        left 0
        width 100%
        position fixed
    }

    .sidebar1__header {
        width 100%
        overflow hidden
        display flex
        justify-content flex-start
        align-items center
        padding-left $indent1
    }
    .logotypeLink {
        /*height 100%*/
        display flex
    }
    .logotype {
        /*max-height 24px*/
        /*height 100%;*/
        min-width 164px
    }

    .sidebar2 {
        right: 0;
        position absolute
        top 100%
        z-index 0
    }


    .root__cell2 {
        flex-shrink 0
        padding 15px 20px
        border-bottom 1px solid $borderColor
    }


    .root__contentCell {
        display flex
        width 100%
        justify-content flex-start
        transform translate3d(0, 0, 0);
        flex-direction column
        align-items center
        transition transform $transitionS1, padding-right $transitionS1
        padding-right 0
    }

    .searchBoxWrapper {
        position relative
        padding-top 20px
        padding-bottom 20px
        border-bottom 1px solid $borderColor
        z-index 1
    }

    .searchBox {
        height 40px
    }

    .searchSuggestionsWrapper {
        position absolute
        top 100%
        left 0
        width 100%
    }

    .searchSuggestions {

    }

    .root__contentCell__wrapper {
        width 100%
        padding-top $indent2
        padding-bottom $indent2
    }

    .page {
        transition-duration $transitionS1
        /*margin 0 1rem*/
        /*padding-top 3rem*/
    }
</style>
