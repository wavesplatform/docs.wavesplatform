<template>
  <footer :class="$style.root">



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
              <a href="mailto:support@wavesplatform.com">
                  support@wavesplatform.com
              </a>
          </div>
      </div>
      <nav :class="$style.root__cell2">
          <div
              v-for="(resourcesCategoryI18n, resourcesCategoryI18nKey, resourcesCategoryI18nIndex) of resourcesCategoriesI18n"
              :key="resourcesCategoryI18nKey"
              :class="[
                $style.root__cell2__cell,
                $style[`root__cell2__cell${resourcesCategoryI18nIndex + 1}`]
              ]"
          >
              <div :class="$style.categoryTitle">
                  {{resourcesCategoryI18n.title}}
              </div>
              <ul :class="$style.categoryLinks">
                  <li
                      v-for="(categoryLink, categoryLinkKey) of resourcesCategoryI18n.links"
                      :key="categoryLinkKey"
                      :class="$style.categoryLink">
                      <a :href="categoryLink.link">
                          {{categoryLink.title}}
                      </a>
                  </li>
              </ul>
          </div>
      </nav>
  </footer>
</template>

<script>
  import Logotype from '@theme/components/Logotype'

  export default {
    components: {
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
    .root {
        padding 20px
        background-color $color3
        display flex
        justify-content space-between
        flex-wrap wrap
    }
    .root__cell1 {

    }
    .logotype {
        width 100%
        max-width 200px
    }

    .root__cell1__cell1 {

    }
    .root__cell1__cell2 {

    }
    .root__cell1__cell3 {

    }
    .root__cell1__cell4 {

    }
    .root__cell2 {
        display flex
        flex-wrap wrap
    }
    .root__cell2__cell {
        margin 0 20px
    }
    .categoryTitle {

    }
    .categoryLinks {

    }
    .categoryLink {

    }
    .root__cell2__cell1 {

    }
    .root__cell2__cell2 {

    }
    .root__cell2__cell3 {

    }
    .root__cell2__cell4 {

    }
</style>
