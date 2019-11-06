<template>
  <aside
    ref="root"
    :class="[
      $style.root,
      $style.root_side_left,
      isShow && $style.root_isShow
    ]"
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
                  v-show="isResizable"
                  :class="$style.resizeTrigger"
                  @mousedown.prevent.stop="resizeTriggerMousedown"
              />
            <div :class="$styleLeft.backToIndexWrapper">
                <a :href="$localePath" :class="$styleLeft.backToIndexLink">
                    <el-button
                        :class="$styleLeft.backToIndex"
                    >
                        <i class="el-icon-arrow-left"></i>
                        {{$themeLocaleConfig.backToIndexButtonText}}
                    </el-button>
                </a>
            </div>

          <div
              :class="[$style.sidebarLinks__content, $styleLeft.sidebarLinks__content]"
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

  export default {
    data () {
      return {
        defaultOptions: {
          isMobileMod: false
        },
        widthSetterNameInStore: 'setLeftSidebarWidth',
        sideIndexNumber: 1
      }
    },

    mixins: [
      overallMixin
    ],

    computed: {
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

    methods: {},

    mounted () {
      console.log('this:', this)
    }

  }
</script>

<style lang="stylus" module="$styleLeft">
    .sidebarWrapper {
        flex-shrink 0
        transition transform $transitionS1
    }
    .sidebarLinks {
        padding-top $indent2
        height 100%
        border-top 1px solid $borderColor
    }
    .backToIndexWrapper {
        display flex
        justify-content flex-start
        padding-left $indent2
        padding-right $indent2
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

    }
    .sidebar {
        height 100%
    }
    .sidebarLinks__content {
        /*margin $indent3 0*/
        margin-top $indent3
        margin-bottom $indent3
        justify-content start
        direction: rtl;
        overflow-x auto
    }

    .sidebarLinksListWrapper {
        position relative
        margin-left $indent1
        display flex
        justify-content: flex-end;
        direction: ltr
        float left
        max-width 100%
    }
    .sidebarLinksList {
        position relative
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
