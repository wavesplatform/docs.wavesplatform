<template>
    <header :class="['navbar', isHomePageMod && $style.navbar_isHomePageMod]">
        <Logotype
            v-if="isHomePageMod"
            :class="[$style.logotype, $style._isHomePageMod]"/>

        <SidebarButton
            v-if="!isHomePageMod"
            @toggle-sidebar="$emit('toggle-sidebar')"/>
        <div
            class="links"
            :style="{
        maxWidth: linksWrapMaxWidth ? linksWrapMaxWidth + 'px' : '',
        justifyContent: isHomePageMod ? 'flex-end' : '',
      }"
        >
            <!--      <NavLinks-->
            <!--          v-if="!isHomePageMod"-->
            <!--          :class="['can-hide', $style.navLinks]"-->
            <!--      />-->

            <div :class="$style.navbar__cell">
                <SearchBox
                    v-if="($site.themeConfig.search !== false && $page.frontmatter.search !== false) && !isHomePageMod"
                    :class="$style.searchBox"
                    :is-full-size="layoutWidth > 720"
                />
                <!--
                    fill="#ecf5ff"
                    text-color="#409EFF"
                -->
                <el-radio-group
                    v-model="currentLanguage"
                    :class="$style.languageRadioGroup"
                    size="small"
                    @change="$router.push($event)"
                >
                    <el-radio-button
                        v-for="(languageItem, index) in languageNavDropdown.items"
                        :key="index"
                        :label="languageItem.link"
                    >
                        {{languageItem.text}}
                    </el-radio-button>
                </el-radio-group>
            </div>


            <!--      <div :class="$style.languagesNav">-->
            <!--        <template v-for="(languageItem, index) in languageNavDropdown.items">-->
            <!--          <span-->
            <!--            v-if="index > 0"-->
            <!--            :class="$style.languagesNav__separator"/>-->
            <!--          <NavLink-->
            <!--            :key="languageItem.link"-->
            <!--            :item="languageItem"-->
            <!--            :class="$style.languagesNav__link"-->
            <!--          />-->
            <!--        </template>-->

            <!--      </div>-->

        </div>
    </header>
</template>

<script>
    import SearchBox from '@theme/components/SearchBox/'
    import SidebarButton from '@theme/components/SidebarButton.vue'
    import NavLinks from '@theme/components/NavLinks.vue'
    import NavLink from '@theme/components/NavLink.vue'
    import Logotype from '@theme/components/Logotype'

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
            SidebarButton,
            NavLinks,
            NavLink,
            SearchBox,
            Logotype,
        },

        data() {
            return {
                linksWrapMaxWidth: null,
                currentLanguage: '',
            }
        },

        computed: {
            languageNavDropdown() {
                const {locales} = this.$site;
                let languageDropdown = [];
                if (locales && Object.keys(locales).length > 1) {
                    const currentLink = this.$page.path
                    const routes = this.$router.options.routes
                    const themeLocales = this.$site.themeConfig.locales || {}
                    languageDropdown = {
                        text: this.$themeLocaleConfig.selectText || 'Languages',
                        items: Object.keys(locales).map(path => {
                            const locale = locales[path]
                            const text = themeLocales[path] && themeLocales[path].label || locale.lang
                            let link
                            // Stay on the current page
                            if (locale.lang === this.$lang) {
                                link = currentLink
                            } else {
                                // Try to stay on the same page
                                link = currentLink.replace(this.$localeConfig.path, path)
                                // fallback to homepage
                                if (!routes.some(route => route.path === link)) {
                                    link = path
                                }
                            }
                            return {text, link}
                        })
                    }
                }
                return languageDropdown;
            },
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
    .navbar_isHomePageMod {
        .navbar__cell{
            justify-content flex-end
        }
    }

    .navbar__cell {
        display flex
        align-items center
        justify-content space-between
        width 100%
    }

    .logotype {
        height 100%
        min-width 100px
    }

    .navLinks {
        width 100%
    }

    .searchBox {
        margin-left 1rem
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

</style>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  display flex
  a, span, img
    display inline-block
  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    visibility hidden
    height 100vh
    width 100%
    /*padding-left 1.5rem*/
    box-sizing border-box
    background-color white
    white-space nowrap
    font-size 0.9rem
    /*position absolute*/
    left $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    align-items flex-start
    justify-content flex-end
    &>*
      visibility visible
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: $MQMobile)
  .navbar
    /*padding-left 4rem*/
    .can-hide
      display none
    .links
      /*padding-left 1.5rem*/
</style>
