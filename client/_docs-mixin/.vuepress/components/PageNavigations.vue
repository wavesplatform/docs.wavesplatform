<template>
    <WidthLimit
        ref="pageNavigations"
        v-if="prev || next"
        :type="2"
        :class="$style.pageNavigations"
        :style="{
            // transform: `translateY(${pageNavigationsTranslateY}px)`,
        }"
    >
        <WidthLimit
            ref="root"
            :class="$style.pageNavigations__widthLimit"
            :padding-l-r="this.layoutWidth > 719 ? 0 : 1"
            :style="widthLimitStyle"
        >
            <div
                v-if="prev"
                :class="[$style.pageNavigations__sideWrapper, $style.pageNavigations__prevWrapper]"
            >
                <router-link
                    :class="[$style.pageNavigations__side, $style.pageNavigations__prev]"
                    :to="prev.path"
                >
                    <i :class="['el-icon-arrow-left', $style.pageNavigations__side__icon]"></i>
                    <span :class="[$style.pageNavigations__side__text, $style.pageNavigations__prev__text]">
                        {{ prev.title || prev.path }}
                    </span>
                </router-link>
            </div>

            <div
                v-if="next"
                :class="[$style.pageNavigations__sideWrapper, $style.pageNavigations__nextWrapper]"
            >
                <router-link
                    :class="[$style.pageNavigations__side, $style.pageNavigations__next]"
                    :to="next.path"
                >
                        <span :class="[$style.pageNavigations__side__text, $style.pageNavigations__next__text]">
                            {{ next.title || next.path }}
                        </span>
                    <i :class="['el-icon-arrow-right', $style.pageNavigations__side__icon]"></i>
                </router-link>
            </div>
        </WidthLimit>
    </WidthLimit>
</template>

<script>
  import { normalize } from '../util'
  import WidthLimit from '@theme/components/WidthLimit'
  export default {
    components: {
      WidthLimit,
    },

    props: [
      'sidebarItems'
    ],

    data() {
      return {
        pageAnchorTargetElements: [],
        pageNavigationsTranslateY: 0,
        testSize: 0,
      }
    },

    computed: {
      layoutWidth() {
        return this.$store.state.interface.layoutWidth;
      },
      leftSidebarWidth() {
        return this.$store.state.interface.leftSidebarWidth;
      },
      isOpenRightSidebar() {
        return this.$store.state.interface.isOpenRightSidebar;
      },
      rightSidebarWidth() {
        return this.$store.state.interface.rightSidebarWidth;
      },
      rightSidebarAlwaysVisiblePartWidth() {
        return this.$store.state.interface.rightSidebarAlwaysVisiblePartWidth;
      },
      layoutHeight() {
        return this.$store.state.interface.layoutHeight;
      },
      headerHeight () {
        return this.$store.state.interface.headerHeight;
      },
      flatSidebarItems() {
        return this.getFlatSidebarItems(this.sidebarItems);
      },
      currentIndexInFlatSidebarItems() {
        const routeNormalizePath = normalize(this.$route.path);
        const element = this.flatSidebarItems.find(item => {
          return normalize(item.path) === routeNormalizePath;
        });
        return this.flatSidebarItems.indexOf(element);
      },
      prev () {
        if(this.currentIndexInFlatSidebarItems < 1) {
          return false;
        }
        const prevIndex = this.currentIndexInFlatSidebarItems - 1;
        return this.flatSidebarItems[prevIndex];
        // const prev = this.$page.frontmatter.prev
        // if (prev === false) {
        //   return
        // } else if (prev) {
        //   return resolvePage(this.$site.pages, prev, this.$route.path)
        // } else {
        //   return resolvePrev(this.$page, this.sidebarItems)
        // }
      },
      next () {
        if(this.currentIndexInFlatSidebarItems + 1 > this.flatSidebarItems.length - 1) {
          return false;
        }
        const nextIndex = this.currentIndexInFlatSidebarItems + 1;
        return this.flatSidebarItems[nextIndex];
        // const next = this.$page.frontmatter.next
        // if (next === false) {
        //   return
        // } else if (next) {
        //   return resolvePage(this.$site.pages, next, this.$route.path)
        // } else {
        //   return resolveNext(this.$page, this.sidebarItems)
        // }
      },
      widthLimitStyle() {
        const marginLR = this.layoutWidth > 719 ? '32px' : '';

        return {
          marginLeft: marginLR,
          marginRight: marginLR,
        }
      },
    },

    methods: {
      getFlatSidebarItems(items, accumulator = []) {
        return items.reduce((accumulator, item) => {
          accumulator.push(item);
          if(item.type === 'group') {
            this.getFlatSidebarItems(item.children, accumulator);
          }
          return accumulator;
        }, accumulator);
      },
    }
  }
</script>

<style lang="stylus" module>
    .pageNavigations {
        display flex
        /*background-image linear-gradient(180deg, rgba(255, 255, 255, .0) 0%, rgba(255, 255, 255, .9) 30%)*/
        width 100vw
        /*padding-top $indent4
        padding-bottom $indent4*/
        padding-left 0
        padding-right 0

        font-size: 18px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: normal;
        justify-content center
        @media screen and (max-width: 719px) {
            font-size: 14px;
        }
    }
    .pageNavigations__widthLimit {
        display flex
        justify-content space-between
        padding-top $indent4
        padding-bottom $indent4
        background-color var(--color11)
        border-top 1px solid var(--color11)
        box-shadow inset 0 1px 0 0 var(--borderColor)
    }
    .pageNavigations__side__text {
        display flex
    }
    .pageNavigations__prev__text {
        text-align left
    }
    .pageNavigations__next__text {
        text-align right
    }
    .pageNavigations__side__icon {
        font-weight bold
    }
    .pageNavigations__sideWrapper {
        display flex
        width 100%
        min-width 50%
    }
    .pageNavigations__prevWrapper {
        position relative
        padding-right $indent4
        justify-content flex-start
    }
    .pageNavigations__side {
        display flex
        align-items center
    }
    .pageNavigations__prev {
        position relative
    }
    .pageNavigations__nextWrapper {
        position relative
        padding-left $indent4
        justify-content flex-end
    }
    .pageNavigations__next {
        position relative
    }
</style>

