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
          transform: isShow ? '' : `translateX(calc(100% - ${rightSidebarAlwaysVisiblePartWidth}px))`,
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
            <div
                v-if="isShow"
                :class="[
                    $styleRight.onThisPageWrapper,
                    isPageContentWithHeaders && $styleRight.onThisPageWrapper_withHeaders,
                ]">
                <span :class="$styleRight.onThisPage">
                    {{$themeLocaleConfig.sidebarOnThisPageText}}
                </span>
            </div>
        </div>

          <span
              v-if="isResizableComputed"
              :class="$style.resizeTrigger"
              @mousedown.prevent.stop="resizeTriggerMousedown"
          />
        <div :class="[$style.sidebarLinks, $styleRight.sidebarLinks]">
          <div
              :class="[$style.sidebarLinks__content, $styleRight.sidebarLinks__content]"
          >
              <template v-if="isShow">
                  <!--<NavLinks v-if="layoutWidth < 720"/>-->
                  <slot name="top"/>
                  <SidebarLinks
                      :depth="0"
                      :items="items"
                      :mod="mod"
                  />
              </template>
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
      rightSidebarAlwaysVisiblePartWidth() {
        return this.$store.state.interface.rightSidebarAlwaysVisiblePartWidth;
      },
      sidebarElementWidthPx() {
        return this.$store.state.interface.rightSidebarWidth;
      },
      isShow() {
        return this.$store.state.interface.isOpenRightSidebar;
      },
      isPageContentWithHeaders() {
        return this.$page.headers && this.$page.headers.length;
      }
    },
    methods: {
      toggleSidebar(isShow) {
        this.$store.commit('setDisplayRightSidebar', isShow);
        /*this.isShow = isShow;*/
        /*console.log('event', isShow);*/
      },
    },
    mounted () {
      this.$on('isResizingState', isResizingState => {
        this.$store.commit('setRightSidebarResizingState', isResizingState);
      });
    },
  }
</script>

<style lang="stylus" module="$styleRight">
    .root {
        &:not(.root_isShow) {

        }
    }

    .sidebarWrapper {
        transition transform $transitionS1
        align-items flex-start
        overflow-x visible
        will-change transform
        background-color var(--color11)
        margin-top 1px
    }

    .sidebarHeader {
        justify-content flex-start
        align-items stretch
        cursor pointer
        /*padding-top $indent4*/
        padding-top 44px
        padding-bottom $indent4
        /*margin-top 8px*/
        height 0
        &:hover {
            .onThisPage {
                /*color $color6*/
            }
            .toggleTrigger {
                color $color6
            }
        }
    }

    .toggleTriggerWrapper {
        display flex
        position: relative;
        padding-left 4px
        padding-right 4px
    }
    .toggleTrigger {
        /*border-left 1px solid var(--borderColor)*/
        /*border-bottom 1px solid var(--borderColor)*/
        transition left $transitionS1
        position: relative;
        left: 0;
    }
    .sidebar {
        border-left 1px solid var(--borderColor)
        max-height 100%
        background-color transparent
        height 100%
    }
    .sidebarLinks {
        min-height 160px

        padding-bottom $indent1

        max-height 100%
    }
    .onThisPageWrapper {
        display inline-flex
        /*border-bottom 1px solid var(--borderColor)*/
        width 100%
        /*justify-content center*/
        /*width 100%*/
        /*text-align center*/
        /*padding 0 $indent2*/
        &:not(.onThisPageWrapper_withHeaders) {
            color $color9
        }
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
        /*margin-top $indent4*/
        padding-left $indent3
        padding-right $indent3
    }
</style>
