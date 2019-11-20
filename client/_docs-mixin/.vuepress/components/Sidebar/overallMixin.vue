<script>
import SidebarLinks from '@theme/components/SidebarLinks'
// import NavLinks from '@theme/components/NavLinks'
import ToggleTrigger from './ToggleTrigger'

export default {
  name: 'Sidebar',

  components: {
    SidebarLinks,
    // NavLinks,
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
    // isDefaultShow: {
    //   type: Boolean,
    //   default: true,
    // },
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
    },
    isResizable: {
      type: Boolean,
      default: true,
    },
    options: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      defaultOptions: {},

      sidebarToggleTriggerDefaultOptions: {
        side: 'right',
        isShow: false,
      },
      // isShow: this.isDefaultShow,
      latestClientX: 0,
      latestSidebarWidth: 0,
      lastSidebarElementWidthPx: 0,
      sideIndexNumber: 1,
      isResizableState: true,
    };
  },

  computed: {
    isResizableComputed() {
      return this.isShow && this.isResizable && this.isResizableState;
    },
    preparedOptions() {
      return Object.assign({}, this.defaultOptions, this.options);
    },
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
    layoutWidth() {
      this.checkResizableState();
    },
  },

  beforeDestroy() {
    this.$emit('isResizingState', false);
    window.removeEventListener('mouseup', this.resizeTriggerMouseup);
    window.removeEventListener('mousemove', this.resizeTriggerMousemove);
    document.documentElement.style.cursor = '';
  },

  async mounted() {
    this.sidebarElement = this.$refs.sidebar;
    if(!this.$isServer) {
      this.elementResizeDetector = this.$elementResizeDetectorMaker({
        strategy: 'scroll'
      });
      await this.$nextTick();
      this.setSidebarResizeDetector();
    }
  },

  updated() {
    this.sidebarElement = this.$refs.sidebar;
  },

  methods: {

    checkResizableState() {
      // this.isResizableState = false;
      const maxWidth = this.sidebarElement.computedStyleMap().get('max-width');
      const minWidth = this.sidebarElement.computedStyleMap().get('min-width');
      let maxWidthValue = maxWidth.value;
      const minWidthValue = minWidth.value;
      if(maxWidth.unit === 'percent') {
        maxWidthValue = this.sidebarElement.parentElement.offsetWidth / 100 * maxWidthValue;
      }
      this.isResizableState = maxWidthValue > minWidthValue;
    },

    resizeTriggerMousemove (event) {
      const maxWidth = this.sidebarElement.computedStyleMap().get('max-width');
      const minWidth = this.sidebarElement.computedStyleMap().get('min-width');

      let maxWidthValue = maxWidth.value;
      if(maxWidth.unit === 'percent') {
        maxWidthValue = this.sidebarElement.parentElement.offsetWidth / 100 * maxWidthValue;
      }
      let minWidthValue = minWidth.value;

      let computedWidth = this.latestSidebarWidth - (this.latestClientX - event.clientX) * this.sideIndexNumber;
      if (computedWidth > maxWidthValue) {
        computedWidth = maxWidthValue
      }
      if (computedWidth < minWidthValue) {
        computedWidth = minWidthValue
      }
      this.$store.commit(
        this.widthSetterNameInStore,
        computedWidth
      )
    },

    setSidebarResizeDetector() {
      this.elementResizeDetector.listenTo(this.sidebarElement, this.sidebarResizeDetectorHandler);
    },

    removeSidebarResizeDetector() {
      this.elementResizeDetector.removeListener(this.sidebarElement, this.sidebarResizeDetectorHandler);
    },

    resizeTriggerMouseup() {
      this.$emit('isResizingState', false);
      window.removeEventListener('mousemove', this.resizeTriggerMousemove);
      document.documentElement.style.cursor = '';
      this.setSidebarResizeDetector();
    },
    resizeTriggerMousedown(event) {
      this.$emit('isResizingState', true);
      this.removeSidebarResizeDetector();
      this.latestClientX = event.clientX;
      this.latestSidebarWidth = this.sidebarElement.offsetWidth;
      document.documentElement.style.cursor = 'ew-resize';
      window.addEventListener('mousemove', this.resizeTriggerMousemove);
      window.addEventListener('mouseup', this.resizeTriggerMouseup, {
        once: true
      });
    },

    sidebarResizeDetectorHandler(element) {
      this.$store.commit(
        this.widthSetterNameInStore,
        element.offsetWidth
      );
    },

  },

}
</script>

<style lang="stylus" module>
    .root {
        visibility hidden
        display flex
        width 100%
        position relative
        overflow hidden
    }
    &:not(.root_isShow) {
        /*transition $transitionS1*/
        /*width 0*/
        &.root_side_left {
            .sidebarWrapper {
                /*margin-left calc(-100% + 80px)*/
                /*width 0*/
            }
        }
        &.root_side_right {
            .sidebarWrapper {
                /*margin-left calc(100% - 80px)*/
                /*width 0*/
            }
        }

    }
    .root_side_left {
        justify-content: flex-start;
        .sidebarWrapper {
            max-width 30%
            @media screen and (max-width: 719px) {
                max-width calc(100vw - 40px)
            }
        }
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
            /*border-right: 1px solid var(--color3);*/
        }
        .sidebarLinks {
            border-right: 1px solid var(--color3);
        }
        .sidebarFooter {
            justify-content flex-end
        }
    }
    .root_side_right {
        justify-content: flex-end;
        .sidebarWrapper {
            max-width 25%
        }
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
            /*border-left: 1px solid var(--color3);*/
        }
        .sidebarFooter {
            justify-content flex-start
        }
    }
    .sidebarWrapper {
        flex-shrink 0
        /*min-width 80px*/
        visibility: visible;
        display flex
        height 100%
        margin-left: 0
        position: relative;
        width: calc(100% - 40px)
        /*transition width $transitionS1*/
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
        background-color var(--color11)
        /*transition $transitionS1*/
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
        /*transition transform $transitionS1*/
        font-size .6rem
    }
    .icon1 {

    }
    .icon2 {
        margin-left -5px
    }
    .sidebar {
        width 100%
        position relative
        background var(--color11)
        display flex
        flex-direction column
        justify-content flex-start
    }
    .sidebarHeader {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .sidebarLinks {
        overflow hidden
        position relative
        display flex
        flex-direction column
    }
    .sidebarLinks__content {
        margin-right -1px
        height 100%
        overflow-y auto
        display inline-block
        width 100%
    }
    .sidebarFooter {
        flex-shrink 0
        display flex
        align-items center
    }

</style>


