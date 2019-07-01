<template>
  <aside
    :class="[
      $style.sidebarWrapper2,
      $style[`_side_${side}`],
      isShow && $style._isShow
    ]"
  >
    <div :class="$style.sidebarWrapper">
      <span :class="$style.resizeTrigger"/>
      <span
        v-if="sidebarToggleTriggerMergedOptions.isShow"
        :class="[
          $style.sidebarToggleTrigger,
          $style[`_side_${side}`],
          isShow && $style._isShow,
        ]"
        @click="isShow = !isShow"
        circle>
        <div :class="$style.iconWrapper">
          <i :class="['el-icon-arrow-left', $style.icon1]"/>
          <i :class="['el-icon-arrow-left', $style.icon2]"/>
        </div>
      </span>
      <div :class="['sidebar', $style.sidebar]">
        <NavLinks/>
        <slot name="top"/>
        <SidebarLinks
          :depth="0"
          :items="items"
          :mod="mod"
        />
        <slot name="bottom"/>
      </div>
    </div>
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinks, NavLinks },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
    mod: {
      type: Number,
      default: 0,
    },
    sidebarToggleTriggerOptions: {
      type: Object,
      default: () => ({}),
    },
    isDefaultShow: {
      type: Boolean,
      default: true,
    },
    side: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value);
      },
    },
  },

  data() {
    return {
      sidebarToggleTriggerDefaultOptions: {
        side: 'right',
        isShow: false,
      },
      isShow: this.isDefaultShow,
    };
  },

  computed: {
    sidebarToggleTriggerMergedOptions() {
      return {
        ...this.sidebarToggleTriggerDefaultOptions,
        ...this.sidebarToggleTriggerOptions,
      }
    },
  },

}
</script>

<style lang="stylus" module>
  .sidebarWrapper2 {
    visibility: hidden;
    display: flex;

    &._side_left {
      justify-content: flex-start;
      .resizeTrigger {
        left (100% + 1px)
        &:before, &:after {
        }
        &:before {
        }
        &:after {
        }
      }
      :global(.sidebar) {
        border-right: 1px solid $borderColor;
      }
    }
    &._side_right {
      justify-content: flex-end;
      .resizeTrigger {
        right (100% + 1px)
        &:before, &:after {
        }
        &:before {
        }
        &:after {
        }
      }
      :global(.sidebar) {
        border-left: 1px solid $borderColor;
      }
    }
    &:not(._isShow) {
      &._side_left {
        .sidebarWrapper {
          /*margin-left calc(-100% + 80px)*/
          width 0
        }
      }
      &._side_right {
        .sidebarWrapper {
          /*margin-left calc(100% - 80px)*/
          width 0
        }
      }

    }
  }
  .sidebarWrapper {
    min-width 80px
    visibility: visible;
    display flex
    height 100%
    margin-left: 0
    position: relative;
    width: 100%
    transition width $toggleSidebarTransitionDuration
  }

  .resizeTrigger {
    height 20px
    display flex
    position absolute
    top calc(50% - 10px)
    cursor ew-resize
    &:before, &:after {
      content ''
      height 100%
      width 3px
      background $arrowBgColor
    }
    &:before {

    }
    &:after {
      margin-left 2px
    }
  }

  .sidebarToggleTrigger {
    background #fff
    position absolute
    bottom 20px
    transition $toggleSidebarTransitionDuration
    &:hover {
    }
    &:not(._isShow) {
      &._side_left {
        .iconWrapper {
          transform rotate(-180deg)
        }
      }
      &._side_right {
        .iconWrapper {
          transform rotate(0deg)
        }
      }
    }
    &._side_left {
      right 20px
      .iconWrapper {

      }
    }
    &._side_right {
      left 20px
      .iconWrapper {
        transform rotate(-180deg)
      }
    }
  }
  .iconWrapper {
    $w-h = 10px
    display flex
    align-items center
    justify-content center
    width $w-h
    height $w-h
    transition transform .3s
  }
  .icon1 {

  }
  .icon2 {
    margin-left -8px
  }
  .sidebar {
    width 100%
    background #fff
    overflow-y auto
  }
</style>

<style lang="stylus">
.sidebar
  ul
    padding 0
    margin 0
    list-style-type none
  a
    display inline-block
  .nav-links
    display none
    border-bottom 1px solid $borderColor
    padding 0.5rem 0 0.75rem 0
    a
      font-weight 600
    .nav-item, .repo-link
      display block
      line-height 1.25rem
      font-size 1.1em
      padding 0.5rem 0 0.5rem 1.5rem
  & > .sidebar-links
    padding 1.5rem 0
    & > li > a.sidebar-link
      font-size .9rem
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top 0rem

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
