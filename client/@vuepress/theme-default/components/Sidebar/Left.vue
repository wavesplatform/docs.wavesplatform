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
              :style="{
                transform: 'scaleX(-1)',
              }"
          >
            <!--<NavLinks v-if="layoutWidth < 720"/>-->
            <slot name="top"/>
            <SidebarLinks
              :depth="0"
              :items="items"
              :mod="mod"
              :style="{
                transform: 'scaleX(-1)',
              }"
            />
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
        v-if="preparedOptions.isMobileMod"
        :class="[
            $style.closeOverlay,
            $styleLeft.closeOverlay,
            isShow && $styleLeft.closeOverlay_isShow,
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
        justify-content center
        padding-left $indent2
        padding-right $indent2
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
        margin $indent3 0
    }
    .closeOverlay {
        cursor pointer
        &:not(.closeOverlay_isShow) {
            opacity 0
            pointer-events none
        }
    }
    .closeOverlay_isShow {

    }
</style>
