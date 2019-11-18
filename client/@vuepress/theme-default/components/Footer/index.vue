<template>
  <footer :class="$style.root">
      <WidthLimit :class="$style.root__widthLimit">
          <div :class="$style.root__cell1">
              <a href="https://wavesplatform.com" target="_blank" :class="$style.root__cell1__cell1">
                  <Logotype
                      :is-show-additional-text="false"
                      :class="$style.logotype"/>
              </a>
              <div :class="$style.root__cell1__cell2">
                  {{ footerI18n.broughtToYouByWavesTeam }}
              </div>
              <div :class="$style.root__cell1__cell3">
                  © 2019 Waves Platform
              </div>
              <div :class="$style.root__cell1__cell4">
                  <a :class="[$style.link, $style.mailto]"
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
                              <a :class="[$style.link, $style.categoryLink]" :href="categoryLink.link">
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
    $resourcesCategoryPadding-t-b = 20px
    $resourcesCategoryPadding-l-r = 38px
    $resourcesCategoryPadding_min = 3px
    .link {
        transition $transitionS1
        &:hover {
            color var(--color7)
        }
    }
    .root {
        padding 64px 0
        background-color var(--color3)
        display flex
        justify-content center
        flex-wrap wrap
        align-items flex-start
        @media screen and (max-width: 719px) {
            padding 33px 0 64px 0
        }
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
        /*margin-right 40px*/
        flex-shrink 0
        padding-right 32px
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
        @media screen and (max-width: 375px) {
            margin-top: 32px;
        }
    }
    .root__cell1__cell3 {
        margin-top 10px
    }
    .root__cell1__cell4 {
        margin-top 19px
    }
    .logotype {
        /*width 100%*/
        max-width 164px
        height 100%
    }

    .root__cell2 {
        display flex
        flex-wrap wrap
        margin (- $resourcesCategoryPadding-t-b) (- $resourcesCategoryPadding-l-r)
        width 100%
        justify-content center
        @media screen and (max-width: 872px) {
            justify-content flex-start
        }
        @media screen and (max-width: 679px) {
            margin: (- $resourcesCategoryPadding-t-b) (- $resourcesCategoryPadding_min)
            justify-content space-between
        }

    }
    .resourcesCategoryI18n {
        padding $resourcesCategoryPadding-t-b $resourcesCategoryPadding-l-r
        /*width 220px*/
        &:not(:first-child) {
            /*margin-left 36px*/
        }
        @media screen and (max-width: 742px) {
            width calc(50% - 10px)
        }
        @media screen and (max-width: 679px) {
            padding $resourcesCategoryPadding-t-b $resourcesCategoryPadding_min
        }
        @media screen and (max-width: 320px) {
            width 110px
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
        margin-top 29px
        @media screen and (max-width: 375px) {
            margin-top 21px
        }
    }
    .categoryLinkWrapper {
        word-break: break-all;
        &:not(:first-child) {
            margin-top 9px
            @media screen and (max-width: 375px) {
                margin-top 6px
            }
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
