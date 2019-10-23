<template>
    <header :class="[$style.root, isHomePageMod && $style.root_isHomePageMod]">
        <WidthLimit
            :class="[$style.root__wrapper, isHomePageMod && $style.root__wrapper_isHomePageMod]"
            :type="2"
        >
            <Logotype
                v-if="isHomePageMod"
                :class="[$style.logotype, $style._isHomePageMod]"/>

            <SidebarButton
                v-if="!isHomePageMod && layoutWidth < 720"
                @toggle-sidebar="$emit('toggle-sidebar')"/>

            <router-link
                v-if="!isHomePageMod && layoutWidth < 720"
                :to="$localePath"
                :class="$style.logotype2Wrapper"
            >
                <Logotype :class="$style.logotype2"/>
            </router-link>


            <div
                :class="[
                $style.links,
                isHomePageMod && $style.links_isHomePageMod
            ]"
                :style="{
                maxWidth: linksWrapMaxWidth ? linksWrapMaxWidth + 'px' : '',
                justifyContent: isHomePageMod ? 'flex-end' : '',
            }"
            >
                <!--      <NavLinks-->
                <!--          v-if="!isHomePageMod"-->
                <!--          :class="['can-hide', $style.navLinks]"-->
                <!--      />-->
                <div
                    :class="$style.root__cell"
                    :style="{
                    justifyContent: (layoutWidth > 719 && !isHomePageMod) ? 'space-between' : 'flex-end',
                }"
                >
                    <SearchBox
                        v-if="
                        ($site.themeConfig.search !== false && $page.frontmatter.search !== false)
                        &&
                        !isHomePageMod
                        &&
                        layoutWidth > 719
                    "
                        :class="$style.searchBox"
                        :is-full-size="true"
                    />
                    <SwitchLanguage/>
                </div>
            </div>
        </WidthLimit>
    </header>
</template>

<script>
    import WidthLimit from '@theme/components/WidthLimit'
    import SearchBox from '@theme/components/SearchBox/'
    import SidebarButton from '@theme/components/SidebarButton.vue'
    import NavLinks from '@theme/components/NavLinks.vue'
    import NavLink from '@theme/components/NavLink.vue'
    import Logotype from '@theme/components/Logotype'
    import SwitchLanguage from './SwitchLanguage'

    const css = function (el, property) {
        // NOTE: Known bug, will return 'auto' if style value is 'auto'
        const win = el.ownerDocument.defaultView
        // null means not to return pseudo styles
        return win.getComputedStyle(el, null)[property]
    };

    export default {
        props: {
            isHomePageMod: {
                type: Boolean,
                default: false,
            },
        },

        components: {
            WidthLimit,
            SidebarButton,
            NavLinks,
            NavLink,
            SearchBox,
            Logotype,
            SwitchLanguage,
        },

        data() {
            return {
                linksWrapMaxWidth: null,
                currentLanguage: '',
            }
        },

        computed: {
          layoutWidth () {
            return this.$store.state.interface.layoutWidth;
          },
        },

        watch: {
          $route(newValue) {
              this.currentLanguage = newValue.path;
          },
        },

        mounted() {
            const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
            const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
            const handleLinksWrapWidth = () => {
                if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
                    this.linksWrapMaxWidth = null
                } else {
                    this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
                        - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
                }
            }
            handleLinksWrapWidth()
            window.addEventListener('resize', handleLinksWrapWidth, false)

            this.currentLanguage = this.$page.path;
        },
    }
</script>

<style lang="stylus" module>
    $navbar-vertical-padding = 0.7rem;
    $navbar-horizontal-padding = 1.5rem;

    .root {
        padding 20px 0
        display flex
        height 72px
        border-bottom 1px solid $borderColor
        justify-content center
    }

    .root__wrapper {
        display flex
        width 100%
        justify-content space-between
    }

    .logotype2Wrapper {
        width 100%
        height 100%
        max-width 200px
    }
    .logotype2 {
        width 100%
        height 100%
    }

    .root__wrapper_isHomePageMod {
        .root__cell{
            justify-content flex-end
        }
    }

    .root_isHomePageMod {

    }

    .root__cell {
        display flex
        align-items center
        justify-content space-between
        width 100%
    }

    .logotype {
        height 100%
        min-width 164px

    }

    .navLinks {
        width 100%
    }

    .searchBox {
        /*margin-left 1rem*/
        width 100%
    }

    .languageRadioGroup {
        /*margin-top: 4px;*/
        margin-left 20px
    }

    .languagesNav {
        flex-shrink 0
        margin-left .5rem
        display flex
        align-items center

        .languagesNav__link {
            $triangleSize = 9px;
            color $textColor
            display flex
            justify-content center
            align-items center
            position relative

            &:not(:first-child) {

            }

            &:not(:global(.router-link-active)) {

            }

            &:global(.router-link-active) {
                cursor default

                &:before, &:after {
                    content ''
                    width: 0;
                    height: 0;
                    display flex
                    position absolute
                    top calc(100% + 2px)
                }

                &:before {
                    border-left: $triangleSize solid transparent;
                    border-right: $triangleSize solid transparent;
                    border-bottom: $triangleSize solid $borderColor;
                }

                &:after {
                    border-left: $triangleSize solid transparent;
                    border-right: $triangleSize solid transparent;
                    border-bottom: $triangleSize solid #fff;
                    margin-top 1px
                }
            }
        }
    }
    .languagesNav__separator {
        width 1px
        height 30px
        background $arrowBgColor
        margin 0 .5rem
        opacity .3
    }
    .links {
        visibility hidden
        /*height 100vh*/
        /*padding-left 1.5rem*/
        box-sizing border-box
        background-color white
        white-space nowrap
        font-size 0.9rem
        /*position absolute*/
        left $navbar-horizontal-padding
        top $navbar-vertical-padding
        display flex
        align-items center
        justify-content flex-end
        &.links_isHomePageMod {
            /*width 100%*/
        }
        &:not(.links_isHomePageMod) {

        }
        & > * {
            visibility visible
        }
    }
</style>

