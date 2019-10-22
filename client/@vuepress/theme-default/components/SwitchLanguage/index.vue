<template>
    <div
        ref="root"
        :class="$style.root">
        <span
            :class="$style.currentLangIconWrapper"
            @click="toggleLangList"
        >
            <div v-html="currentLanguageParams.langIconRawSvg"></div>
        </span>

        <el-card
            :class="[$style.langListCard, isShowLangList && $style.langListCard_isShow]"
            :body-style="{
                padding: 0
            }"
        >
            <ul :class="$style.langList">
                <li
                    v-for="(languageItem, index) in languageNavDropdown.items"
                    :key="index"
                    :class="[
                    $style.langList__item,
                    languageItem.link === $page.path && $style.langList__item_active
                ]"
                    @click="languageItem.link !== $page.path && $router.push(languageItem.link)"
                >
                    <div :class="$style.langList__item__cell1">
                        <span v-html="languageItem.langIconRawSvg"
                              :class="$style.langList__item__iconWrapper">
                        </span>
                        <span :class="$style.langList__title">
                            {{languageItem.text}}
                        </span>
                    </div>

                    <div
                        :class="[$style.checkMark, $style.langList__item__cell2]"
                    >
                        <span :class="$style.checkMark__element"/>
                    </div>
                </li>
            </ul>
        </el-card>

    </div>
</template>

<script>
  export default {
    components: {},

    data() {
      return {
        isShowLangList: false,
      }
    },

    computed: {
      currentLanguageParams() {
        return this.$site.themeConfig.locales[this.$localePath]
      },
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
              const locale = locales[path];
              const themeLocale = themeLocales[path];
              const text = themeLocale && themeLocale.label || locale.lang;

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
              return {
                text,
                link,
                langIconRawSvg: themeLocale.langIconRawSvg,
              }
            })
          }
        }
        return languageDropdown;
      },
    },
    watch: {
      '$page.path'() {
        document.removeEventListener('click', this.langListDocumentHandler);
        this.isShowLangList = false;
      },
    },
    methods: {
      langListDocumentHandler(event) {
        const isClickOnThisComponentElements = event.path.some(element => {
          return element === this.$refs.root;
        })
        if(this.isShowLangList && !isClickOnThisComponentElements) {
          document.removeEventListener('click', this.langListDocumentHandler);
          this.isShowLangList = false;
        }
      },
      toggleLangList() {
        if(this.isShowLangList) {
          document.removeEventListener('click', this.langListDocumentHandler);
        } else {
          document.addEventListener('click', this.langListDocumentHandler);
        }
        this.isShowLangList = !this.isShowLangList;
      },
    },

    beforeDestroy () {
      document.removeEventListener('click', this.langListDocumentHandler);
    },

  }
</script>

<style lang="stylus" module>
    .root {
        display flex
        position relative
    }
    .currentLangIconWrapper {
        cursor pointer
    }
    .langListCard {
        position absolute
        top 100%
        right 0
        transition .3
        &:not(.langListCard_isShow) {
            visibility hidden
            opacity 0
        }
    }
    .langList {
        margin 5px 0
    }
    .langList__item {
        padding 5px 10px
        display flex
        align-items center
        justify-content space-between
        &:hover {
            background-color $color1
        }
        &:not(.langList__item_active) {
            cursor pointer
            .checkMark {
                opacity 0
            }
        }
    }
    .langList__item_active {
        cursor default
        .checkMark {

        }
    }
    .langList__item__cell1 {
        display flex
    }
    .langList__item__cell2 {

      }
    .langList__item__iconWrapper {
        flex-shrink 0
        display flex
        align-items center
    }
    .langList__title {
        margin-left 10px
        flex-shrink 0
    }
    .checkMark {
        transition .3s
        width 12px
        display flex
        position relative
        margin-left 10px
        flex-shrink 0
        &:after {
            content: '';
            display: block;
            padding-bottom: 100%;
        }
    }
    .checkMark__element {
        margin-top -4px
        position absolute
        width 100%
        height 100%
        transform: rotate(45deg);
        &:before, &:after {
            content ''
            position absolute
            top 0
        }
        &:before {
            width 100%
            height 100%
            /*border-right 2px solid #f00*/
            box-shadow inset -2px 0 0 0 $color4
            left 0
        }
        &:after {
            width 50%
            height 100%
            box-shadow inset 0 -2px 0 0 $color4
            right 0
        }
    }
</style>
