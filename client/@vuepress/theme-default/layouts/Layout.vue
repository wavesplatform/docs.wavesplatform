<template>
    <div
        :class="$style.root"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
    >

        <div :class="$style.navbarWrapper2">
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
                    :is-resizable="layoutWidth > 719"
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
                    type="content"
                    :style="{
                    transform: (layoutWidth < 720 && isOpenLeftSidebar) ? `translateX(${leftSidebarWidth}px)` : '',
                }"
                />


            </WidthLimit>
        </div>


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
                :padding-l-r="3"
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

        rightSidebarMinWidthPx: 160,
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
        const leftSidebarMinWidthPx = this.$store.state.interface.leftSidebarMinWidthPx;

        /*return this.layoutWidth > 719 ? 200 : leftSidebarMinWidthPx*/
        return leftSidebarMinWidthPx;
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
    },

    mounted () {
      this.$store.commit('setDisplayLeftSidebar', true)
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


      // side swipe
      onTouchStart (e) {

      },

      onTouchEnd (e) {

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
        min-height 100vh
    }
    .navbarWrapper2 {
        position fixed
        z-index 1
        justify-content: center;
        display: flex;
        width 100vw
    }
    .navbarWrapper {
        transform: translate3d(0, 0, 0);
        width: 100%;
        justify-content: center;
        position relative
        display flex
        z-index 1
        left 0
        top 0
    }
    .navbar {
        position fixed;
        /*left 0*/
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
        padding-top $indent4
        padding-bottom $indent4
    }

    .page {
        transition-duration $transitionS1
        /*margin 0 1rem*/
        /*padding-top 3rem*/
    }
</style>
