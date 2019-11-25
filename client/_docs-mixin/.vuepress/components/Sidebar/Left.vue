<template>
  <aside
    ref="root"
    :class="[
      $style.root,
      $style.root_side_left,
      isShow && $style.root_isShow
    ]"
    :style="{
        maxHeight: layoutHeight + 'px'
    }"
  >
    <div
      ref="sidebar"
      :class="[$style.sidebarWrapper, $styleLeft.sidebarWrapper]"
      :style="{
          width: sidebarElementWidthPx + 'px',
          minWidth: sidebarMinWidthPx + 'px',
          transform: isShow ? '' : `translateX(-100%)`,
      }"
    >
      <div :class="['sidebar', $style.sidebar, $styleLeft.sidebar]">
        <div
            v-show="layoutWidth > 719"
          :class="$style.sidebarHeader"
        >
          <!--<slot name="header"/>-->
            <div
                ref="sidebar1__header"
                :class="$styleLeft.sidebar__header"
                slot="header"
                :style="{
                    height: headerHeight - 1 + 'px',
                }"
            >
                <router-link
                    :to="$localePath"
                    :class="$styleLeft.logotypeLink"
                >
                    <Logotype :class="$styleLeft.logotype"/>
                </router-link>
            </div>
          <!--<ToggleTrigger
            v-if="sidebarToggleTriggerMergedOptions.isShow"
            :side="side"
            :is-show="isShow"
            @click="isShow = $event"
          />-->
        </div>

        <div :class="[$style.sidebarLinks, $styleLeft.sidebarLinks]">
              <span
                  v-show="isResizableComputed"
                  :class="$style.resizeTrigger"
                  @mousedown.prevent.stop="resizeTriggerMousedown"
              />
            <div :class="$styleLeft.backToIndexWrapper">
                <router-link
                    :to="$localePath"
                    :class="$styleLeft.backToIndexLink"
                >
                    <el-button
                        ref="backToIndexButton"
                        :class="$styleLeft.backToIndex"
                    >
                        <i class="el-icon-arrow-left"></i>
                        <!--{{backToIndexButtonWidth > 100 ? $themeLocaleConfig.backToIndexButtonText : ''}}-->
                        {{$themeLocaleConfig.backToIndexButtonText}}
                    </el-button>
                </router-link>
            </div>

            <div :class="$styleLeft.sidebarLinks__contentWrapper">
                <div :class="$styleLeft.foggingContainer">
                    <div :class="[$styleLeft.foggingElement, $styleLeft.foggingElement_vertical, $styleLeft.foggingElement_vertical_left]"/>
                    <div :class="[$styleLeft.foggingElement, $styleLeft.foggingElement_vertical, $styleLeft.foggingElement_vertical_right]"/>
                    <div :class="[$styleLeft.foggingElement, $styleLeft.foggingElement_horizontal, $styleLeft.foggingElement_horizontal_top]"/>
                    <div :class="[$styleLeft.foggingElement, $styleLeft.foggingElement_horizontal, $styleLeft.foggingElement_horizontal_bottom]"/>
                </div>
                <VueScrollbar
                    :class="[
                    $style.sidebarLinks__content,
                    $styleLeft.sidebarLinks__content
                ]"
                    :settings="{
                    /*useBothWheelAxes: true,*/
                    wheelPropagation: false,
                }"
                >
                    <div :class="$styleLeft.sidebarLinksListWrapper2">
                        <!--<NavLinks v-if="layoutWidth < 720"/>-->
                        <!--<slot name="top"/>-->
                        <div :class="$styleLeft.sidebarLinksListWrapper">
                            <SidebarLinks
                                :class="$styleLeft.sidebarLinksList"
                                :depth="0"
                                :items="items"
                                :mod="mod"
                            />
                        </div>
                    </div>

                </VueScrollbar>
            </div>



        </div>

        <div
            v-if="$slots.bottom"
            :class="$style.sidebarFooter"
        >
          <ToggleTrigger
            v-if="sidebarToggleTriggerMergedOptions.isShow"
            :side="side"
            :is-show="isShow"
            @click="isShow = $event"
          />
          <slot name="bottom"/>
        </div>
      </div>
    </div>
    <div
        :class="$styleLeft.closeOverlayBlock"
        :style="{
          transform: isShow ? '' : `translateX(-${leftSidebarWidth}px)`,
        }"
    >
        <WidthLimit
            v-show="layoutWidth < 720"
            :class="$styleLeft.burgerTriggerWrapper"
            :type="2"
            :style="{
                height: headerHeight + 'px',
            }"
        >
            <BurgerTrigger
                :class="$styleLeft.burgerTrigger"
                :is-open="isShow"
                @change="$store.commit('setDisplayLeftSidebar', $event)"
            />
        </WidthLimit>
        <div
            v-show="preparedOptions.isMobileMod"
            :class="[
                $styleLeft.closeOverlay,
                isShow && $styleLeft.closeOverlay_isShow,
            ]"
            @click="$store.commit('setDisplayLeftSidebar', false)"
        />
    </div>
  </aside>
</template>

<script>
  import overallMixin from './overallMixin'
  import VueScrollbar from '@theme/components/VueScrollbar'
  import Logotype from '@theme/components/Logotype'
  import BurgerTrigger from '@theme/components/BurgerTrigger'
  import WidthLimit from '@theme/components/WidthLimit'
  export default {

    mixins: [
      overallMixin,
    ],

    components: {
      VueScrollbar,
      BurgerTrigger,
      WidthLimit,
      Logotype,
    },

    data () {
      return {
        defaultOptions: {
          isMobileMod: false
        },
        widthSetterNameInStore: 'setLeftSidebarWidth',
        sideIndexNumber: 1,
        backToIndexButtonWidth: 0,
      }
    },

    computed: {
      headerHeight () {
        return this.$store.state.interface.headerHeight;
      },
      layoutHeight() {
        return this.$store.state.interface.layoutHeight;
      },
      leftSidebarWidth () {
        return this.$store.state.interface.leftSidebarWidth
      },
      sidebarElementWidthPx () {
        return this.$store.state.interface.leftSidebarWidth
      },
      isShow () {
        return this.$store.state.interface.isOpenLeftSidebar
      }
    },

    watch: {
      isShow: {
        handler(isShow) {
          if(!this.$isServer) {
            const bodyStyle = document.body.style;
            if(isShow && this.preparedOptions.isMobileMod) {
              bodyStyle.overflow = 'hidden';
              return;
            }
            bodyStyle.overflow = '';
          }
        },
        immediate: true,
      },
      $route() {
        if(this.preparedOptions.isMobileMod) {
          this.$store.commit('setDisplayLeftSidebar', false);
        }
      },
    },

    methods: {
      // backToIndexButtonResize(element) {
      //   this.backToIndexButtonWidth = element.offsetWidth;
      // },
    },

    mounted () {
      // const backToIndexButtonRef = this.$refs.backToIndexButton;
      // if(backToIndexButtonRef) {
      //   this.$elementResizeDetector.listenTo(backToIndexButtonRef.$el, this.backToIndexButtonResize);
      // }
    },

    beforeDestroy () {
      document.body.style.overflow = '';
      this.$store.commit('setDisplayLeftSidebar', false);
      // this.$elementResizeDetector.removeListener(this.$refs.backToIndexButton.$el, this.backToIndexButtonResize);
    }

  }
</script>

<style lang="stylus" module="$styleLeft">
    $foggingElementSize = 15px;
    .sidebarWrapper {
        flex-shrink 0
        transition transform $transitionS1
    }
    .sidebar__header {
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
        max-width 164px
        width 100%
    }
    .sidebarLinks {
        padding-top 24px
        height 100%
        @media screen and (min-width: 720px) {
            border-top 1px solid var(--color3)
        }
    }
    .backToIndexWrapper {
        display flex
        justify-content flex-start
        padding-left $indent1
        padding-right $indent1
        flex-shrink 0
    }
    .backToIndexLink {
        display inline-flex
        max-width 210px
        width 100%
    }
    .backToIndex {
        width 100%
        overflow: hidden;
        text-overflow: ellipsis;
        color $color6
        border-color $color6
        height 42px
        align-items center
        display flex
        padding 0
        justify-content center
        background-color var(--color11)
    }
    .sidebar {
        height 100%
    }

    .sidebarLinks__contentWrapper {
        display flex
        flex-direction column
        margin-top $indent3
        overflow hidden
        position relative
        height 100%
    }

    .foggingContainer {
        position absolute
        width 100%
        height 100%
        z-index 1
        visibility hidden
    }
    .foggingElement {
        position absolute
        visibility visible
        pointer-events none
        /*background-color rgba(255, 255, 255, 0)*/
    }
    .foggingElement_vertical {
        width $foggingElementSize
        height 100%
        top 0
    }
    .foggingElement_vertical_left {
        left 0
        background-image linear-gradient(to right, var(--color11) 10%, var(--color11_alpha1));
    }
    .foggingElement_vertical_right {
        right 0
        background-image linear-gradient(to left, var(--color11) 10%, var(--color11_alpha1));
    }
    .foggingElement_horizontal {
        height $foggingElementSize
        width 100%
        left 0
    }
    .foggingElement_horizontal_top {
        top 0
        background-image linear-gradient(to bottom, var(--color11) 10%, var(--color11_alpha1));
    }
    .foggingElement_horizontal_bottom {
        bottom 0
        background-image linear-gradient(to top, var(--color11) 10%, var(--color11_alpha1));
    }

    .sidebarLinks__content {
        /*height 100%*/
        /*margin $indent3 0*/
        /*padding-bottom $indent2*/
        /*justify-content start*/
        display flex
        position relative
        :global(.ps__rail-y) {
            left 0;
            right auto
        }
        :global(.ps__thumb-y) {
            left 2px;
            right auto
        }
    }
    .sidebarLinksListWrapper2 {

    }

    .sidebarLinksListWrapper {
        position relative
        /*margin-left $indent1*/
        display flex
        justify-content: flex-end;
        direction: ltr
        float left
        /*max-width 100%*/
        padding-right $indent1
        padding-left $indent1
        padding-bottom $indent1
    }

    .sidebarLinksList {
        position relative
        /*> :global(.sidebarLinks__link) {
            > :global(.sidebarLinks__link__group) {
                margin-left -20px
            }
        }*/
    }

    .closeOverlayBlock {
        position relative
        z-index 1
        display flex
        visibility hidden
        height 100%
        width 100vw
    }

    .closeOverlay {
        flex-shrink 0
        visibility visible
        height 100%
        width 100vw
        background-color var(--color7_alpha1)
        transition opacity $transitionS1, transform $transitionS1
        cursor pointer
        position absolute
        top 0
        left 0
        &:not(.closeOverlay_isShow) {
            opacity 0
            pointer-events none
        }
    }

    .burgerTriggerWrapper {
        display flex
        align-items center
        z-index 1
        justify-content flex-start
    }
    .burgerTrigger {
        cursor pointer
        visibility visible
    }
</style>
