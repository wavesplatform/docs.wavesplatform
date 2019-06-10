<template>
  <aside
    :class="[
      $style.sidebarWrapper2,
      $style[`_side_${side}`],
      isShow && $style._isShow
    ]"
  >
    <div :class="$style.sidebarWrapper">
      <div
        v-if="sidebarToggleTriggerMergedOptions.isShow"
        :class="[$style.sidebarToggleTrigger, $style[`_side_${side}`]]"
        @click="isShow = !isShow"
      >
        <template v-if="(isShow && side === 'left') || (!isShow && side === 'right')">
          <
        </template>
        <template v-else>
          >
        </template>

      </div>
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
  }
}
</script>

<style lang="stylus" module>
  .sidebarWrapper2 {
    visibility: hidden;
    &._side_left {
      :global(.sidebar) {
        border-right: 1px solid $borderColor;
      }
    }
    &._side_right {
      :global(.sidebar) {
        border-left: 1px solid $borderColor;
      }
    }
    &:not(._isShow) {
      &._side_left {
        .sidebarWrapper {
          margin-left -100%
        }
      }
      &._side_right {
        .sidebarWrapper {
          margin-left 100%
        }
      }

    }
  }
  .sidebarWrapper {
    visibility: visible;
    display flex
    height 100%
    margin-left: 0
    position: relative;
    width: 100%
    transition margin-left $toggleSidebarTransitionDuration
  }
  .sidebarToggleTrigger {
    background: #ccc;
    position: absolute;
    top: 0;
    &._side_left {
      left: 100%;
    }
    &._side_right {
      right: 100%;
    }
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
      font-size 1.1em
      line-height 1.7
      font-weight bold
    & > li:not(:first-child)
      margin-top .75rem

@media (max-width: $MQMobile)
  .sidebar
    .nav-links
      display block
      .dropdown-wrapper .nav-dropdown .dropdown-item a.router-link-active::after
        top calc(1rem - 2px)
    & > .sidebar-links
      padding 1rem 0
</style>
