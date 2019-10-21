<template>
  <aside
    ref="root"
    :class="[
      $style.sidebarWrapper2,
      $style[`_side_${side}`],
      isShow && $style._isShow
    ]"
    :style="{
      width: rootElementWidthPx,
      minWidth: sidebarMinWidthPx + 'px',
    }"
  >
    <div
      :class="$style.sidebarWrapper"
    >
      <span
        :class="$style.resizeTrigger"
        @mousedown.prevent.stop="resizeTriggerMousedown"
      />

      <div :class="['sidebar', $style.sidebar]">
        <div
          :class="$style.sidebarHeader"
        >
          <slot name="header"/>
          <ToggleTrigger
            v-if="sidebarToggleTriggerMergedOptions.isShow"
            :side="side"
            :is-show="isShow"
            @click="isShow = $event"
          />
        </div>

<!--          {{items}}-->
        <div :class="$style.sidebarLinks">
          <div
              :class="$style.sidebarLinks__content"
              :style="{
                transform: mod === 1 ? 'scaleX(-1)' : '',
              }"
          >
            <NavLinks v-if="layoutWidth < 720"/>
            <slot name="top"/>
            <SidebarLinks
              :depth="0"
              :items="items"
              :mod="mod"
              :style="{
                transform: mod === 1 ? 'scaleX(-1)' : '',
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
  </aside>
</template>

<script>
import SidebarLinks from '@theme/components/SidebarLinks.vue'
import NavLinks from '@theme/components/NavLinks.vue'
import ToggleTrigger from './ToggleTrigger'

export default {
  name: 'Sidebar',

  components: {
    SidebarLinks,
    NavLinks,
    ToggleTrigger,
  },

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
    sidebarMinWidthPx: {
      type: Number,
      default: 0,
    }
  },

  data() {
    return {
      sidebarToggleTriggerDefaultOptions: {
        side: 'right',
        isShow: false,
      },
      isShow: this.isDefaultShow,
      latestClientX: 0,
      latestSidebarWidth: 0,
      rootElementWidthPx: '',
      lastRootElementWidthPx: '',
    };
  },

  computed: {
    sidebarToggleTriggerMergedOptions() {
      return {
        ...this.sidebarToggleTriggerDefaultOptions,
        ...this.sidebarToggleTriggerOptions,
      }
    },
    layoutWidth() {
      return this.$store.state.interface.layoutWidth;
    },

  },

  watch: {
    isShow(newValue) {
      this.$emit('toggleSidebar', newValue);
      if(newValue) {
        this.rootElementWidthPx = '';

      } else {
        this.rootElementWidthPx = 0;
      }
    },
  },

  beforeDestroy() {
    window.removeEventListener('mouseup', this.resizeTriggerMouseup);
    window.removeEventListener('mousemove', this.resizeTriggerMousemove);
    document.documentElement.style.cursor = '';
  },

  methods: {
    resizeTriggerMouseup() {
      window.removeEventListener('mousemove', this.resizeTriggerMousemove);
      document.documentElement.style.cursor = '';
    },
    resizeTriggerMousemove(event) {
      const sideConst = this.side === 'left' ? 1 : -1;
      this.rootElementWidthPx = this.latestSidebarWidth - (this.latestClientX - event.clientX) * sideConst + 'px';
    },
    resizeTriggerMousedown(event) {
      this.latestClientX = event.clientX;
      this.latestSidebarWidth = this.$refs.root.offsetWidth;
      document.documentElement.style.cursor = 'ew-resize';
      window.addEventListener('mousemove', this.resizeTriggerMousemove);
      window.addEventListener('mouseup', this.resizeTriggerMouseup, {
        once: true
      });
    },
  },

}
</script>

<style lang="stylus" module>
  .sidebarWrapper2 {
    visibility hidden
    display flex
    max-width 300px

    &._side_left {
      justify-content: flex-start;
      .resizeTrigger {
        left calc(100% - 7px)
        &:before, &:after {
        }
        &:before {
        }
        &:after {
          opacity 0
        }
      }
      :global(.sidebar) {
        border-right: 1px solid $borderColor;
      }

      .sidebarFooter {
        justify-content flex-end
      }
    }
    &._side_right {
      justify-content: flex-end;
      .resizeTrigger {
        right calc(100% - 7px)
        &:before, &:after {
        }
        &:before {
          opacity 0
        }
        &:after {
        }
      }
      :global(.sidebar) {
        border-left: 1px solid $borderColor;
      }
      .sidebarFooter {
        justify-content flex-start
      }
    }
    &:not(._isShow) {
      /*width 0*/
      &._side_left {
        .sidebarWrapper {
          /*margin-left calc(-100% + 80px)*/
          /*width 0*/
        }
      }
      &._side_right {
        .sidebarWrapper {
          /*margin-left calc(100% - 80px)*/
          /*width 0*/
        }
      }

    }
  }
  .sidebarWrapper {
    /*min-width 80px*/
    visibility: visible;
    display flex
    height 100%
    margin-left: 0
    position: relative;
    width: 100%
    transition width $toggleSidebarTransitionDuration
  }

  .resizeTrigger {
    z-index 1
    height 100%
    display flex
    position absolute
    top 0
    cursor ew-resize
    &:before, &:after {
      content ''
      height 100%
      width 3px
      background url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyIiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgMiAxNCI+CiAgICA8ZyBmaWxsPSIjN0Y4RkE0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMnYxNEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBoMnYySDB6TTAgNGgydjJIMHpNMCA4aDJ2Mkgwek0wIDEyaDJ2MkgweiIvPgogICAgPC9nPgo8L3N2Zz4K') center no-repeat
    }
    &:before {

    }
    &:after {
      margin-left 2px
    }
  }

  .sidebarToggleTrigger {
    margin 15px
    cursor pointer
    background #fff
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
    /*$w-h = 10px*/
    display flex
    align-items center
    justify-content center
    /*width $w-h
    height $w-h*/
    transition transform .3s
    font-size .6rem
  }
  .icon1 {

  }
  .icon2 {
    margin-left -5px
  }
  .sidebar {
    width 100%
    height 100%
    position relative
    background #fff
    display flex
    flex-direction column
    justify-content space-between
    overflow hidden
  }
  .sidebarHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom 1px solid $borderColor
    /*overflow hidden*/
  }
  .sidebarLinks {
    height 100%
    overflow hidden
  }
  .sidebarLinks__content {
    margin-right -1px
    height 100%
    overflow-y auto
    padding-top 10px
  }
  .sidebarFooter {
    flex-shrink 0
    display flex
    align-items center
    /*justify-content flex-end*/
  }
</style>

<style lang="stylus">
.sidebar
  ul
    padding 0
    margin 0
    list-style-type none
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
