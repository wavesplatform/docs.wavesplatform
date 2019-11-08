<template>
    <header :class="$style.root">


        <WidthLimit
            :class="$style.root__wrapper"
            :type="2"
            :style="{
                paddingLeft: isOpenLeftSidebar ? leftSidebarWidth + 'px' : '',
                /*paddingRight: isOpenRightSidebar ? rightSidebarWidth + 'px' : '',*/
                /*marginRight: isOpenRightSidebar ? '' : '32px',*/
            }"
        >
            <div
                v-show="layoutWidth > 719"
                :class="$style.searchBoxWrapper2"
                :style="{
                    paddingLeft: leftSidebarWidth - rightSidebarWidth + 'px'
                }"
            >
                <WidthLimit
                    :class="$style.searchBoxWrapper"
                    :type="1"
                    :padding-l-r="1"
                >
                    <SearchBox
                        :class="$style.searchBox"
                        :is-full-size="true"
                        :size="1"
                    />

                </WidthLimit>
            </div>

            <!--<Sidebar
                v-show="layoutWidth > 719"
                ref="sidebar2"
                side="right"
                :sidebar-toggle-trigger-options="{
                    isShow: /*navbarSubHeaders.length*/true,
                }"
                :items="[$page]"
                :mod="sidebar2Mod"
                :sidebar-min-width-px="rightSidebarMinWidthPx"
                :class="[
                        $style.sidebar,
                        $style.sidebar2,
                    ]"
                :style="{
                    height: `calc(100vh - ${headerHeight}px)`,
                }"

            >
                <slot
                    name="sidebar-top"
                    slot="top"
                />
                <slot
                    name="sidebar-bottom"
                    slot="bottom"
                />
            </Sidebar>-->
            <!--@toggle-sidebar="toggleSidebar"-->
            <Sidebar
                v-show="layoutWidth > 719"
                ref="sidebar2"
                side="right"
                :sidebar-toggle-trigger-options="{
                    isShow: true,
                }"
                :items="[$page]"
                :mod="2"
                :sidebar-min-width-px="rightSidebarMinWidthPx"
                :class="$style.sidebar"
                :style="{
                    height: `calc(100vh - ${headerHeight}px)`,
                }"
                @isResizingState="isRightSidebarResizingState = $event"
            />

            <div
                :class="$style.root__cell1"
                :style="{
                    // paddingLeft: `calc(100% - ${leftSidebarWidth}px)`
                    // paddingLeft: leftSidebarWidth + 'px',

                }"
            >

                <WidthLimit
                    v-show="layoutWidth < 720"
                    :class="$style.burgerTriggerWrapper"
                    :type="2"
                >
                    <BurgerTrigger
                        :class="$style.burgerTrigger"
                        @click.native="$store.commit('setDisplayLeftSidebar', true)"
                    />
                </WidthLimit>



                <WidthLimit
                    v-show="layoutWidth < 720"
                    :class="$style.logotypeWrapper"
                    :type="1"
                >
                    <a href="/">
                        <Logotype
                            :class="$style.logotype"/>
                    </a>


                </WidthLimit>
                <WidthLimit
                    :class="$style.switchLanguageWrapper"
                    :type="2"
                >
                    <SwitchLanguage :class="$style.switchLanguage"/>
                </WidthLimit>
            </div>
        </WidthLimit>
    </header>
</template>

<script>
  import BurgerTrigger from '@theme/components/BurgerTrigger'
  import overallMixin from './overallMixin'
  import Sidebar from '@theme/components/Sidebar/'

  export default {
    mixins: [
      overallMixin
    ],
    components: {
      BurgerTrigger,
      Sidebar,
    },
    computed: {
      headerHeight () {
        return this.$store.state.interface.headerHeight;
      },
      rightSidebarMinWidthPx () {
        return this.$store.state.interface.rightSidebarMinWidthPx;
      },
      isOpenLeftSidebar() {
        return this.$store.state.interface.isOpenLeftSidebar;
      },
      isOpenRightSidebar() {
        return this.$store.state.interface.isOpenRightSidebar;
      },
      leftSidebarWidth () {
        return this.$store.state.interface.leftSidebarWidth
      },
      rightSidebarWidth () {
        return this.$store.state.interface.rightSidebarWidth
      }
    }
  }
</script>

<style lang="stylus" module>
    .root {
        /*padding 20px 0*/
        display flex
        height 72px
        border-bottom 1px solid $color3
        justify-content center
        background-color #fff
        @media screen and (max-width: 719px) {
            height 57px
        }
    }
    .sidebar {
        position absolute
        right 0
        top 100%
        z-index 1
    }
    .root__wrapper {
        display flex
        justify-content flex-end
        padding-right 0
        padding-left 0
        margin-right 0
        transition padding-right $transitionS1, margin-right $transitionS1
        position relative
        align-items center
    }
    .root__cell1 {
        width 100%
        display flex
        justify-content center
        align-items center

    }

    .burgerTriggerWrapper,
    .switchLanguageWrapper {
        position absolute
        top 0
        left 0
        height 100%
        width 100%
        display flex
        align-items center
        justify-content flex-start
    }


    .burgerTriggerWrapper {

    }

    .burgerTrigger {
        cursor pointer
    }

    .searchBoxWrapper2 {
        position absolute
        width 100%
        height 100%
        display flex
        align-items center
        justify-content center
    }

    .searchBoxWrapper {
        height 40px
    }

    .searchBox {

    }

    .logotypeWrapper {
        display flex
        justify-content center
        position absolute
        height 100%
        visibility hidden
        align-items center
    }

    .logotype {
        max-width 164px
        width 100%
        visibility visible
    }

    .switchLanguageWrapper {
        visibility hidden
        z-index 2
        justify-content flex-end
    }
    .switchLanguage {
        visibility visible
    }

</style>

