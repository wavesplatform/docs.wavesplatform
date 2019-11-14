<template>
  <section
    :class="[
        $style.sidebarGroup,
        $style[`depth${depth}`],
        isActiveItem && $style.sidebarGroup_active,
        collapsable && $style.sidebarGroup_collapsable,
        depth !== 0 && $style.sidebarGroup_isSubGroup,
    ]"
  >
    <span
        v-if="collapsable"
        :class="[
            $style.sidebarGroup__cell1,
            $style.arrowIcon,
            open ? 'el-icon-arrow-down' : 'el-icon-arrow-right',
        ]"
        @click="clickToggleTrigger"
    />
    <div :class="$style.sidebarGroup__cell2">
        <template v-if="mod === 1 || mod === 0">
            <!--ref="routerLink"-->
            <router-link
                v-if="item.path"
                :class="[
                    $style.sidebarHeading,
                    $style.sidebarHeading_clickable,
                    open && $style.sidebarHeading_open,
                    isActiveItem && $style.sidebarHeading_active,
                    withActiveStateItem && $style.sidebarHeading_withActive,
                ]"
                :to="item.path"
                @click.native.prevent.stop="clickOnLink($event)"
            >
                <span
                    :class="$style.sidebarHeading__title"
                >
                    {{ item.title }}
                </span>
            </router-link>
            <!--<p
              v-else
              :class="[
                  $style.sidebarHeading,
                  {
                      [$style.open]: open,
                  }
              ]"
              @click="$emit('toggle')"
            >
              <span
                v-if="collapsable"
                :class="[
                  $style.arrowIcon, open ? 'el-icon-arrow-down' : 'el-icon-arrow-right'
                ]"
              />
              <span class="sidebar-heading__title">
                  {{ item.title }}
              </span>
            </p>-->
        </template>
        <DropdownTransition>
            <SidebarLinks
                :class="$style.sidebarGroupItems"
                :items="item.children"
                v-show="open || !collapsable"
                :sidebarDepth="item.sidebarDepth"
                :depth="depth + 1"
                :mod="mod"
            />
        </DropdownTransition>
    </div>
  </section>
</template>

<script>
  import { normalize } from '../util'
  import DropdownTransition from '@theme/components/DropdownTransition'
  import SidebarLinks from './SidebarLinks'
  export default {
    name: 'SidebarGroup',

    props: {
      item: {
        type: Object,
        default: () => ({})
      },
      open: {
        type: Boolean,
        default: true
      },
      collapsable: {
        type: Boolean,
        default: true
      },
      depth: {
        type: Number,
        default: 1
      },
      mod: {
        type: Number,
        default: 0
      }
    },

    components: {
      DropdownTransition,
    },

    data() {
      return {
        isInsensitivity: true,
      };
    },

    computed: {
      normalizePagePath() {
        return this.normalizePath(this.$page.path);
      },
      isActiveItem() {
        return this.checkActiveState();
      },
      withActiveStateItem() {
        return this.checkWithActiveState();
      },
      leftSidebarOpenedGroups() {
        return this.$store.state.leftSidebarOpenedGroups;
      },
    },

    watch: {

    },

    beforeCreate () {
      this.$options.components.SidebarLinks = SidebarLinks
    },

    mounted() {
      if(this.withActiveStateItem) {
        this.$emit('open');
      }
      // this.$router.beforeEach((to, from, next) => {
      //   const routerLinkRef = this.$refs.routerLink;
      //   if(!routerLinkRef) {
      //     next();
      //     return
      //   }
      //   if (this.normalizePath(routerLinkRef.to) === this.normalizePath(to.path)) {
      //
      //     if(!this.isActiveItem) {
      //       this.$emit('open');
      //       // this.isInsensitivity = false;
      //
      //     }
      //   }
      //   next();
      // });
    },

    updated() {

        if(this.leftSidebarOpenedGroups.includes(this.item.path)) {
            /*this.$emit('open');*/
            console.log('this.leftSidebarOpenedGroups.includes(this.item.path)', this.item.path)
        }
    },

    methods: {
      async clickOnLink() {
        // console.log('test clickOnLink')
        this.$emit('open');
      },
      clickToggleTrigger() {
        if(this.open) {
          this.$emit('close');
          return;
        }
        this.$emit('open');
      },
      normalizePath(path) {
        let normalizePath = normalize(path);
        if(normalizePath.slice(-1) === '/') {
          normalizePath = normalizePath.slice(0, -1);
        }
        return normalizePath;
      },
      checkActiveState() {
        return this.normalizePagePath === this.normalizePath(this.item.path);
      },
      checkWithActiveState() {
        if(this.checkActiveState(this.item)) {
          return false;
        }

        return this.normalizePagePath.includes(this.normalizePath(this.item.path));
      },
    },

  }
</script>

<style lang="stylus" module>
    .sidebarGroup {
        display flex
        &:not(.sidebarGroup_collapsable) {

        }
    }
    .sidebarGroup_active {
        &:hover {
            & > .arrowIcon {
                color $color6
            }
        }
    }
    .sidebarGroup_collapsable {
        position relative
    }
    .sidebarGroup_isSubGroup {
        position relative
    }
    .sidebarGroup__cell1 {
        display flex
        margin-right 5px
        align-items flex-start
        /*padding-top 4px*/
    }
    .arrowIcon {
        cursor pointer
        &:hover {
            color $color6
        }
        /*font-size .6rem*/
    }

    .sidebarGroup__cell2 {
        display flex
        flex-direction column
        overflow hidden
    }

    .sidebarHeading {
        display: flex;
        align-items: baseline;
        transition color .15s ease
        width 100%
        margin 0
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color $color10
        &:not(.sidebarHeading_active) {
            cursor pointer
            &:hover {
                color $color6
            }
        }
    }

    .sidebarHeading_clickable {
        &:not(.sidebarHeading_active) {

        }
        &.sidebarHeading_active {
            font-weight 500
            color $color6
            /*border-left-color $accentColor*/
        }

        &:hover {
            color $accentColor
        }
    }

    .sidebarHeading_withActive {
        font-weight 500
    }

    .sidebarHeading_active {
        font-weight 500
        color $color6
        /*border-left-color $accentColor*/
    }

    .sidebarHeading_open {
        position relative
    }

    .sidebarHeading__title {
        text-overflow: ellipsis;
        white-space nowrap
    }

    .sidebarGroupItems {
        transition height .1s ease-out
    }
</style>

