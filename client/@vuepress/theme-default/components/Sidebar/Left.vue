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
          <slot name="header"/>
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
                <a
                    :href="$localePath"
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
                </a>
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
                <!--<NavLinks v-if="layoutWidth < 720"/>-->
                <slot name="top"/>
                <div :class="$styleLeft.sidebarLinksListWrapper">
                    <SidebarLinks
                        :class="$styleLeft.sidebarLinksList"
                        :depth="0"
                        :items="items"
                        :mod="mod"
                    />
                </div>
            </VueScrollbar>


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
        v-show="preparedOptions.isMobileMod"
        :class="[
            $style.closeOverlay,
            $styleLeft.closeOverlayBlock,
            isShow && $styleLeft.closeOverlayBlock_isShow,
        ]"
        :style="{
          transform: isShow ? '' : `translateX(-${leftSidebarWidth}px)`,
        }"
        @click="$store.commit('setDisplayLeftSidebar', false)"
    >
    </div>
  </aside>
</template>

<script>
  import overallMixin from './overallMixin'
  import VueScrollbar from '@theme/components/VueScrollbar'

  export default {

    mixins: [
      overallMixin
    ],

    components: {
      VueScrollbar,
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


    methods: {
      backToIndexButtonResize(element) {
        this.backToIndexButtonWidth = element.offsetWidth;
      },
    },

    mounted () {
      // const backToIndexButtonRef = this.$refs.backToIndexButton;
      // if(backToIndexButtonRef) {
      //   this.$elementResizeDetector.listenTo(backToIndexButtonRef.$el, this.backToIndexButtonResize);
      // }
    },

    beforeDestroy () {
      // this.$elementResizeDetector.removeListener(this.$refs.backToIndexButton.$el, this.backToIndexButtonResize);
    }

  }
</script>

<style lang="stylus" module="$styleLeft">
    .sidebarWrapper {
        flex-shrink 0
        transition transform $transitionS1
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

    .sidebarLinks__content {
        /*margin $indent3 0*/
        margin-top $indent3
        padding-bottom $indent2
        justify-content start
        /*direction: rtl;*/
        overflow-x auto
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
        cursor pointer
        display flex
        visibility visible
        height 100%
        width 100%
        background-color $color5
        flex-shrink 0
        transition opacity $transitionS1, transform $transitionS1
        &:not(.closeOverlayBlock_isShow) {
            opacity 0
            pointer-events none
        }
    }


</style>
