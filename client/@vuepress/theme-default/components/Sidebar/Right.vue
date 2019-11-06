<template>
  <aside
    ref="root"
    :class="[
      $style.root,
      $styleRight.root,
      $style.root_side_right,
      isShow && $style.root_isShow,
      isShow && $styleRight.root_isShow,
    ]"
  >
    <div
      ref="sidebar"
      :class="[$style.sidebarWrapper, $styleRight.sidebarWrapper]"
      :style="{
          width: sidebarElementWidthPx + 'px',
          minWidth: sidebarMinWidthPx + 'px',
      }"
    >
      <div :class="['sidebar', $style.sidebar, $styleRight.sidebar]">
        <div
          :class="[$style.sidebarHeader, $styleRight.sidebarHeader]"
          @click="toggleSidebar(!isShow)"
        >
          <slot name="header"/>
          <div :class="$styleRight.toggleTriggerWrapper">
              <ToggleTrigger
                  :class="$styleRight.toggleTrigger"
                  v-if="sidebarToggleTriggerMergedOptions.isShow"
                  side="right"
                  :is-show="isShow"
              />
          </div>
            <div :class="$styleRight.onThisPageWrapper">
                <span :class="$styleRight.onThisPage">
                    {{$themeLocaleConfig.sidebarOnThisPageText}}
                </span>
            </div>
        </div>

<!--          {{items}}-->
          <span
              :class="$style.resizeTrigger"
              @mousedown.prevent.stop="resizeTriggerMousedown"
          />
        <div :class="[$style.sidebarLinks, $styleRight.sidebarLinks]">
          <div
              :class="[$style.sidebarLinks__content, $styleRight.sidebarLinks__content]"
          >
            <NavLinks v-if="layoutWidth < 720"/>
            <slot name="top"/>
            <SidebarLinks
              :depth="0"
              :items="items"
              :mod="mod"
            />
          </div>
        </div>

        <div
            v-if="$slots.bottom"
            :class="$style.sidebarFooter"
        >
          <ToggleTrigger
            v-if="sidebarToggleTriggerMergedOptions.isShow"
            side="right"
            :is-show="isShow"
            @click="isShow = $event"
          />
          <slot name="bottom"/>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
  import overallMixin from './overallMixin'

  export default {
    mixins: [
      overallMixin,
    ],

    data() {
      return {
        widthSetterNameInStore: 'setRightSidebarWidth',
        sideIndexNumber: -1,
      }
    },
    computed: {
      sidebarElementWidthPx() {
        return this.$store.state.interface.rightSidebarWidth;
      },
      isShow() {
        return this.$store.state.interface.isOpenRightSidebar;
      },
    },
    methods: {
      toggleSidebar(isShow) {
        this.$store.commit('setDisplayRightSidebar', isShow);
        /*this.isShow = isShow;*/
        /*console.log('event', isShow);*/
      },
    },
  }
</script>

<style lang="stylus" module="$styleRight">
    .root {
        &:not(.root_isShow) {
            .sidebarWrapper {
                transform translateX(100%)
            }
            .toggleTrigger {
                /*transform translateX(-100%)*/
                left: -100%;
            }
        }
    }

    .sidebarWrapper {
        transition transform $transitionS1
        align-items flex-start
        overflow-x visible
    }

    .sidebarHeader {
        justify-content flex-start
        align-items stretch
        cursor pointer
        padding-top $indent4
        padding-bottom $indent4
    }

    .toggleTriggerWrapper {
        display flex
        position: relative;

    }
    .toggleTrigger {
        /*border-left 1px solid $borderColor*/
        /*border-bottom 1px solid $borderColor*/
        transition left $transitionS1
        position: relative;
        left: 0;
    }
    .sidebar {
        border-left 1px solid $borderColor
        max-height 100%
        background-color transparent
    }
    .sidebarLinks {
        min-height 160px
        padding $indent1 0
        max-height 100%
    }
    .onThisPageWrapper {
        display inline-flex
        /*border-bottom 1px solid $borderColor*/
        width 100%
        /*justify-content center*/
        /*width 100%*/
        /*text-align center*/
        /*padding 0 $indent2*/
    }
    .onThisPage {
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        display flex
        align-items center
    }
    .sidebarLinks__content {
        margin-top $indent4
    }
</style>
