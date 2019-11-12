<template>
  <section
    :class="[
        $style.sidebarGroup,
        $style[`depth${depth}`],
        {
            [$style.collapsable]: collapsable,
            [$style.isSubGroup]: depth !== 0,
        },
    ]"
  >
    <span
        v-if="collapsable"
        :class="[
            $style.sidebarGroup__cell1,
            $style.arrowIcon, open ? 'el-icon-arrow-down' : 'el-icon-arrow-right'
        ]"
        @click="$emit('toggle')"
    />
    <div :class="$style.sidebarGroup__cell2">
        <template v-if="mod === 1 || mod === 0">
            <!--{{isActive($route, item.path)}}-->
            <router-link
                v-if="item.path"
                :class="[
                    $style.sidebarHeading,
                    $style.clickable,
                    {
                        [$style.open]: open,
                        [$style.active]: isActive($route, item.path)
                    }
                ]"
                :to="item.path"
                @click.native="$emit('open')"
            >
        <span :class="$style.sidebarHeading__title">
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
                v-if="open || !collapsable"
                :sidebarDepth="item.sidebarDepth"
                :depth="depth + 1"
                :mod="mod"
            />
        </DropdownTransition>
    </div>
  </section>
</template>

<script>
  import { isActive } from '../util'
  import DropdownTransition from '@theme/components/DropdownTransition'

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
      DropdownTransition
    },

    beforeCreate () {
      this.$options.components.SidebarLinks = require('./SidebarLinks.vue').default
    },

    mounted() {
      //   setInterval(() => {
      //     this.$forceUpdate()
      // }, 3000)
    },

    methods: { isActive }
  }
</script>

<style lang="stylus" module>
    .sidebarGroup {
        display flex
        &:not(.collapsable) {
            .sidebar-heading:not(.clickable) {
                cursor auto
                color inherit
            }
        }
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
        cursor pointer
        /*padding 4px 0*/
        width 100%
        margin 0
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color $color10

        &:hover {
            color $color6
        }
        &.active {
            font-weight 600
            color $color6
            /*border-left-color $accentColor*/
        }

        &.clickable {
            &.active {
                font-weight 600
                color $color6
                /*border-left-color $accentColor*/
            }

            &:hover {
                color $accentColor
            }
        }

        .arrow {
            position relative
            top -0.12em
            left -.5em
        }
    }

    .sidebarHeading__title {
        text-overflow: ellipsis;
        white-space nowrap
    }

    .sidebarGroupItems {
        transition height .1s ease-out
    }
</style>

