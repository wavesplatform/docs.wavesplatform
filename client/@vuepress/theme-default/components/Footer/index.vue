<template>
  <footer :class="$style.root">
      <WidthLimit :class="$style.root__widthLimit">
          <div :class="$style.root__cell1">
              <div :class="$style.root__cell1__cell1">
                  <Logotype
                      :is-show-additional-text="false"
                      :class="$style.logotype"/>
              </div>
              <div :class="$style.root__cell1__cell2">
                  {{ footerI18n.broughtToYouByWavesTeam }}
              </div>
              <div :class="$style.root__cell1__cell3">
                  © 2019 Waves Platform
              </div>
              <div :class="$style.root__cell1__cell4">
                  <a :class="$style.mailto"
                     href="mailto:support@wavesplatform.com">
                      support@wavesplatform.com
                  </a>
              </div>
          </div>
          <nav :class="$style.root__cell2">
              <div
                  v-for="(resourcesCategoryI18n, resourcesCategoryI18nKey, resourcesCategoryI18nIndex) of resourcesCategoriesI18n"
                  :key="resourcesCategoryI18nKey"
                  :class="[
                $style.resourcesCategoryI18n,
                $style[`root__cell2__cell${resourcesCategoryI18nIndex + 1}`]
              ]"
              >
                  <div :class="$style.resourcesCategoryI18n__wrapper">
                      <div :class="$style.categoryTitle">
                          {{resourcesCategoryI18n.title}}
                      </div>
                      <ul :class="$style.categoryLinks">
                          <li
                              v-for="(categoryLink, categoryLinkKey) of resourcesCategoryI18n.links"
                              :key="categoryLinkKey"
                              :class="$style.categoryLinkWrapper">
                              <a :class="$style.categoryLink" :href="categoryLink.link">
                                  {{categoryLink.title}}
                              </a>
                          </li>
                      </ul>
                  </div>

              </div>
          </nav>
      </WidthLimit>
  </footer>
</template>

<script>
  import WidthLimit from '@theme/components/WidthLimit'
  import Logotype from '@theme/components/Logotype'

  export default {
    components: {
      WidthLimit,
      Logotype,
    },

    computed: {
      footerI18n() {
        return this.$themeLocaleConfig.footer;
      },
      resourcesCategoriesI18n() {
        return this.footerI18n.resourcesCategories;
      }
    },
  }
</script>


<style lang="stylus" module>
    $resourcesCategoryPadding = 20px
    $resourcesCategoryPadding_min = 10px
    .root {
        padding 64px 0
        background-color $color3
        display flex
        justify-content center
        flex-wrap wrap
        align-items flex-start
    }
    .root__widthLimit {
        display flex
        justify-content space-between
        align-items flex-start
        @media screen and (max-width: 679px) {
            flex-wrap wrap
        }
    }
    .root__cell1 {
        margin-bottom 40px
        margin-right 40px
    }
    .root__cell1__cell1 {
        height 22px
    }
    .root__cell1__cell2,
    .root__cell1__cell3,
    .root__cell1__cell4,
    .mailto {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        color $color9
    }
    .root__cell1__cell2 {
        margin-top 26px
    }
    .root__cell1__cell3 {
        margin-top 8px
    }
    .root__cell1__cell4 {
        margin-top 16px
    }
    .logotype {
        /*width 100%*/
        max-width 164px
        height 100%
    }

    .root__cell2 {
        display flex
        flex-wrap wrap
        margin -($resourcesCategoryPadding)
        @media screen and (max-width: 679px) {
            margin: -($resourcesCategoryPadding_min)
        }
    }
    .resourcesCategoryI18n {
        padding $resourcesCategoryPadding
        width 220px
        @media screen and (max-width: 679px) {
            width 180px
            padding $resourcesCategoryPadding_min
        }
        @media screen and (max-width: 574px) {
            min-width 235px
            width 50%
        }
    }
    .resourcesCategoryI18n_wrapper {

    }
    .categoryTitle {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        word-break: break-word;
    }
    .categoryLinks {
        margin-top 32px
    }
    .categoryLinkWrapper {
        word-break: break-all;
        &:not(:first-child) {
            margin-top 16px
        }
    }
    .categoryLink {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        color $color9
    }
</style>
