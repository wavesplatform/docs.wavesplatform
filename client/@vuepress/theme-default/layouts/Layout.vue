<template>
    <div
        :class="$style.root"
    >
        <LanguageNotification
            :is-show="isShowLanguageNotification"
            @close="$store.commit('setDisplayShowLanguageNotification', false)"
        />
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
            ref="root__contentCell"
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
            <!--        <div-->
            <!--            class="sidebar-mask"-->
            <!--            @click="toggleSidebar(false)"-->
            <!--        ></div>-->
            <!--<Home v-if="$page.frontmatter.home"/>-->
            <Page
                ref="page"
                :sidebar-items="sidebarItems"
                :class="$style.page"
            >
                <!--<slot
                    name="page-top"
                    slot="top"
                />-->
                <!--<slot
                    name="page-bottom"
                    slot="bottom"
                />-->
            </Page>
            <PageNavigations
                :sidebar-items="sidebarItems"
                :class="$style.pageNavigations1"
                :style="{
                    visibility: pageNavigationsTranslateY === 0 ? 'hidden' : ''
                }"
            />
        </WidthLimit>
        <PageNavigations
            :sidebar-items="sidebarItems"
            :class="$style.pageNavigations2"
            :style="{
                paddingLeft: layoutWidth > 719 ? leftSidebarWidth + 'px' : '',
                paddingRight: isOpenRightSidebar ?
                rightSidebarWidth + 'px' :
                (layoutWidth > 719 ? rightSidebarAlwaysVisiblePartWidth + 'px' : 0),
                visibility: pageNavigationsTranslateY === 0 ? '' : 'hidden'
            }"
        />
    </div>
</template>

<script>
  import Home from '@theme/components/Home.vue'
  import Navbar from '@theme/components/Navbar'
  import Page from '@theme/components/Page.vue'
  import Sidebar from '@theme/components/Sidebar/'
  import Logotype from '@theme/components/Logotype'
  import SearchBox from '@theme/components/SearchBox/'
  import watchLayoutSizeMixin from './mixins/watchLayoutSize'
  import navbarResizeDetector from './mixins/navbarResizeDetector'
  import WidthLimit from '@theme/components/WidthLimit'
  import Suggestions from '@theme/components/SearchBox/Suggestions'
  import PageNavigations from '@theme/components/PageNavigations'
  import LanguageNotification from '@theme/components/LanguageNotification'
  import { resolveSidebarItems } from '../util'

  export default {

    mixins: [
      watchLayoutSizeMixin,
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
      PageNavigations,
      LanguageNotification,
    },

    data () {
      return {
        sidebar1Mod: 1,
        sidebar2Mod: 2,
        rightSidebarMinWidthPx: 160,
        pageNavigationsTranslateY: 0,
        isShowPageNavigations2: false,
      }
    },

    computed: {
      documentElementScrollTop() {
        return this.$store.state.interface.documentElementScrollTop;
      },
      isShowLanguageNotification() {
        return this.$store.state.isShowLanguageNotification;
      },
      rightSidebarAlwaysVisiblePartWidth() {
        return this.$store.state.interface.rightSidebarAlwaysVisiblePartWidth;
      },
      isRightSidebarResizingState() {
        return this.$store.state.interface.isRightSidebarResizingState;
      },
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
      leftSidebarMinWidthPx () {
        return this.$store.state.interface.leftSidebarMinWidthPx;
      },
      layoutHeight() {
        return this.$store.state.interface.layoutHeight;
      },
      mainContentHeight() {
        return this.$store.state.interface.mainContentHeight;
      },
      sidebarItems () {
        return resolveSidebarItems(
          this.$page,
          this.$page.regularPath,
          this.$site,
          this.$localePath
        )
      },
      contentCellStyles() {
        return {
          marginTop: this.headerHeight + 'px',
          paddingLeft: this.layoutWidth > 719 ? this.leftSidebarWidth + 'px' : '',

          transform: (this.layoutWidth < 720 && this.isOpenLeftSidebar) ? `translateX(${this.leftSidebarWidth}px)` : '',

          paddingRight: this.isOpenRightSidebar ?
            this.rightSidebarWidth + 'px' :
            (this.layoutWidth > 719 ? this.rightSidebarAlwaysVisiblePartWidth + 'px' : 0),

          transition: this.isRightSidebarResizingState ? 'initial' : '',
        }
      },
    },

    watch: {
      layoutWidth(newValue) {
        this.computedAndSetMainContentPositionLeft();
        this.computedPageNavigationsTranslateY();
        if(newValue < 720) {
          this.$store.commit('setDisplayRightSidebar', false);
          this.$store.commit('setDisplayLeftSidebar', false);
        } else {
          this.$store.commit('setDisplayLeftSidebar', true);
        }
      },
      layoutHeight() {
        this.computedPageNavigationsTranslateY();
      },
      leftSidebarWidth() {
        this.computedAndSetMainContentPositionLeft();
      },

      rightSidebarWidth() {
        this.computedAndSetMainContentPositionLeft();
      },

      isOpenRightSidebar() {
        this.computedAndSetMainContentPositionLeft();
      },

      isOpenLeftSidebar() {
        this.computedAndSetMainContentPositionLeft();
      },
      mainContentHeight() {
        this.computedPageNavigationsTranslateY();
      },
    },

    beforeMount() {
      if(!this.$isServer) {
        this.setRouterScrollBehavior();
      }
    },

    mounted () {
      this.root__contentCellElement = this.$refs.root__contentCell.$el;
      console.log('this.root__contentCellElement:', this.root__contentCellElement, this, this.layoutHeight, this.mainContentHeight, this.headerHeight);
      this.interval1 = null;
      if(this.layoutWidth > 719) {
        this.$store.commit('setDisplayLeftSidebar', true);
      }

      if(!this.$isServer) {



        window.addEventListener('scroll', this.windowScrollEventHandler);

        this.root__contentCellElement.addEventListener('transitionstart', this.transitionstartHandler, false);
        this.root__contentCellElement.addEventListener('transitionend', this.transitionendHandler, false);

        this.windowScrollEventHandler();
        this.computedAndSetMainContentPositionLeft();

        this.$elementResizeDetector.listenTo(this.$refs.root__contentCell.$el, this.setMainContentHeightInStore);

        this.computedPageNavigationsTranslateY();
      }
    },

    beforeDestroy() {
      window.removeEventListener('scroll', this.windowScrollEventHandler);
      this.root__contentCellElement.removeEventListener('transitionstart', this.transitionstartHandler, false);
      this.root__contentCellElement.removeEventListener('transitionend', this.transitionendHandler, false);
      this.$elementResizeDetector.removeListener(this.$refs.page.$el, this.setMainContentHeightInStore);
    },

    methods: {

      computedPageNavigationsTranslateY() {
        const heightDifference = this.mainContentHeight - this.layoutHeight - this.headerHeight;
        if(heightDifference > 0) {
          this.pageNavigationsTranslateY = 0;
          return;
        }
        this.pageNavigationsTranslateY = -(this.layoutHeight - this.mainContentHeight - this.headerHeight) /*- this.documentElementScrollTop*/;
      },

      setMainContentHeightInStore(element) {
        this.$store.commit('setMainContentHeight', element.offsetHeight);
      },

      transitionstartHandler() {
        this.interval1 = setInterval(this.computedAndSetMainContentPositionLeft, 0);
      },

      transitionendHandler() {
        clearInterval(this.interval1);
      },

      async computedAndSetMainContentPositionLeft() {
        await this.$nextTick()
        this.$store.commit('setMainContentPositionLeft', this.$refs.page.$el.offsetLeft);
      },

      windowScrollEventHandler(event) {
        this.$store.commit('setDocumentElementScrollTop', document.documentElement.scrollTop);
      },

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

      scrollBehavior(to, from, savedPosition) {
        this.$store.commit('setScrollTopState', true);
        if (savedPosition) {
          return window.scrollTo({
            top: savedPosition.y,
            behavior: 'smooth',
          }, () => this.$store.commit('setScrollTopState', false))
        } else if (to.hash) {
          const targetElement = document.querySelector(decodeURIComponent(to.hash))

          if (targetElement) {
            return window.scrollTo({
              top: this.getAnchorElementPosition(targetElement).y,
              behavior: 'smooth',
            }, () => this.$store.commit('setScrollTopState', false))
          }
          return false;
        } else {
          return window.scrollTo({
            top: 0,
            behavior: 'smooth',
          }, () => this.$store.commit('setScrollTopState', false))
        }
      },

      setRouterScrollBehavior() {
        this.$router.options.scrollBehavior = this.scrollBehavior
      },

      getAnchorElementPosition(targetElement) {
        const documentElement = document.documentElement
        const documentRect = documentElement.getBoundingClientRect()
        const elementRect = targetElement.getBoundingClientRect()
        return {
          x: elementRect.left - documentRect.left,
          y: elementRect.top - documentRect.top - this.headerHeight,
        }
      },
    }
  }
</script>

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

    .page {
        width 100%
        transition-duration $transitionS1
        padding-top: 23px;
    }
    .pageNavigations1 {
        position relative
        width 100%
    }

    .pageNavigations2 {
        position fixed
        bottom 0
        z-index 0
        transition transform $transitionS1
        will-change transform
    }

</style>
