<template>
    <div :class="$style.root">
        <template v-if="$themeLocaleConfig.homePage">
            <SearchFrameContent
                v-bind="{
                    isShowSearchResultWindow,
                }"
                @close="isShowSearchResultWindow = false"
            />
            <Navbar
                ref="navbar"
                :class="[$style.root__cell1, $style.navbar]"
                :is-home-page-mod="true"
            />
            <div
                :class="$style.root__cell2"
                :style="{
                    paddingTop: headerHeight + 'px'
                }"
            >
                <main :class="$style.mainContentCell">
                    <div :class="[$style.mainContentCell__row, $style.mainContentCell__row2]">
                        <WidthLimit :class="$style.mainContentCell__row2__WidthLimit">
                            <h1
                                v-if="layoutWidth > 719"
                                :class="$style.mainContentCell__row2__text">
                                {{ $themeLocaleConfig.homePage.welcomeText }}
                            </h1>
                            <div :class="$style.searchBoxWrapper">
                                <SearchBox
                                    ref="searchBox"
                                    :class="$style.searchBox"
                                    :is-full-size="true"
                                    :with-suggestions="layoutWidth > 719 && !isShowSearchResultWindow"
                                    @up="layoutWidth > 719 && suggestionsUp"
                                    @down="layoutWidth > 719 && suggestionsDown"
                                    @search="search"
                                />
                            </div>
                        </WidthLimit>

<!--                        {{layoutWidth}}-->
                        <div
                            v-show="layoutWidth < 720 && !isShowSearchResultWindow"
                            :class="$style.searchSuggestionsWrapper"
                        >
                            <Suggestions
                                ref="suggestions"
                                :class="$style.searchSuggestions"
                                :mod="1"
                            />
                        </div>

                    </div>

                    <div :class="[$style.mainContentCell__row, $style.mainContentCell__row3]">
                        <WidthLimit :class="$style.mainContentCell__row3__WidthLimit">
                            <div :class="$style.technologyCategoryCheckboxes">
                                <!--                <span :class="$style.technologyCategoryCheckboxes__row1">-->
                                <!--                    {{ $themeLocaleConfig.homePage.or }}-->
                                <!--                </span>-->
                                <div :class="$style.technologyCategoryCheckboxes__row2">
                                    <!--                    <span :class="[$style.technologyCategoryCheckboxes__row2__part, $style.technologyCategoryCheckboxes__row2__text]">-->
                                    <!--                        {{ $themeLocaleConfig.homePage.technologyCategoriesText }}-->
                                    <!--                    </span>-->
                                    <TabsPanel
                                        ref="tabsPanelComponentExemplar"
                                        :class="[
                                            $style.technologyCategoryCheckboxes__row2__part,
                                            $style.technologyCategoryTags
                                        ]"
                                        :items="technologyCategories"
                                        active-item-index="all"
                                        @change="selectCategoryTag"
                                    />
                                </div>
                            </div>

                            <ul
                                ref="categoryCards"
                                :class="$style.categoryCards">
                                <li
                                    v-for="(category, categoryIndex) of technologyCategoriesFiltered"
                                    :key="categoryIndex"
                                    :class="$style.categoryCardWrapper">
                                    <CategoryCard
                                        :class="$style.categoryCard"
                                        :root-link="category.rootLink"
                                        :category-type="technologyCategories[category.type]"
                                    >
                                        <div
                                            :class="$style.categoryCard__icon"
                                            v-html="category.iconFilePath"
                                            alt=""
                                            slot="icon"
                                        />

                                        <template slot="title">
                                            <div class="linkWrapper_type1">
                                                <span :class="['linkText_type1', $style.categoryTitle]">
                                                    {{ category.title }}
                                                </span>
                                            </div>
                                        </template>

                                        <template slot="caption">
                                            {{ category.caption }}
                                        </template>


                                        <template slot="buttonSet">
                                            <a
                                                v-for="(button, buttonKey) of category.buttonSet"
                                                :key="`${categoryIndex}_${buttonKey}`"
                                                :href="button.link"
                                                :class="$style.categoryCard__link"
                                            >
                                                <el-button
                                                    size="mini"
                                                    :class="$style.categoryCard__link__button"
                                                >
                                                    {{ button.text }}
                                                </el-button>
                                            </a>
                                        </template>
                                    </CategoryCard>
                                </li>
                            </ul>
                        </WidthLimit>
                    </div>
                </main>
                <Footer :class="$style.footer"/>
            </div>
        </template>
    </div>
</template>

<script>
  import WidthLimit from '@theme/components/WidthLimit'
  import Navbar from '@theme/components/Navbar.vue'
  import TabsPanel from '@theme/components/TabsPanel'
  import SearchBox from '@theme/components/SearchBox/'
  import CategoryCard from './components/CategoryCard'
  import Logotype from '@theme/components/Logotype'
  import Footer from '@theme/components/Footer'
  import Suggestions from '@theme/components/SearchBox/Suggestions'
  import SearchFrameContent from '@theme/components/SearchBox/SearchFrameContent'
  import watchLayoutWidthMixin from './mixins/watchLayoutWidth'
  import navbarResizeDetector from './mixins/navbarResizeDetector'

  export default {
    mixins: [
      watchLayoutWidthMixin,
      navbarResizeDetector,
    ],

    components: {
      WidthLimit,
      Navbar,
      SearchBox,
      CategoryCard,
      Logotype,
      Footer,
      TabsPanel,
      Suggestions,
      SearchFrameContent,
    },

    data () {
      return {
        currentTechnologyCategoryFilter: 'all',
        isShowSearchResultWindow: false,
        suggestionsRef: null,
      }
    },

    computed: {
      categories() {
        return Object.values(this.$themeLocaleConfig.homePage.technologyList);
      },
      technologyCategories() {
        return this.$themeLocaleConfig.homePage.technologyCategories;
      },
      technologyCategoriesFiltered() {
        if(this.currentTechnologyCategoryFilter === 'all') {
          return this.categories;
        }
        return this.categories.filter(category => {
          return category.type === this.currentTechnologyCategoryFilter;
        });
      },
      focusIndex() {
        return this.$store.state.search.focusIndex;
      },
    },

    watch: {
      async isShowSearchResultWindow(isShow) {
        if(isShow === false) {
          this.$nextTick();
          const searchBoxComponentExemplar = this.$refs.searchBox;
          if(searchBoxComponentExemplar) {
            searchBoxComponentExemplar.focus();
          }
        }
      },
    },

    beforeCreate() {
      if(!this.$isServer) {
        window.vm = this;
      }
    },

    mounted () {
      this.suggestionsRef = this.$refs.suggestions;
      if(!this.$isServer) {
        window.test = this;
      }
    },

    updated () {
      this.suggestionsRef = this.$refs.suggestions;
    },

    methods: {
      selectCategoryTag(categoryTagName) {
        this.currentTechnologyCategoryFilter = categoryTagName;
      },

      suggestionsDown() {
        if(!this.suggestionsRef) {
          return
        }
        this.suggestionsRef.suggestionDown();
      },

      suggestionsUp() {
        if(!this.suggestionsRef) {
          return
        }
        this.suggestionsRef.suggestionUp();
      },

      search() {
        if(this.focusIndex !== -1) {
          if(!this.suggestionsRef) {
            return
          }
          this.suggestionsRef.go();
        } else {
          this.isShowSearchResultWindow = true
        }
      },

    },
  }
</script>

<style lang="stylus" module>
    $categoryCardWrapper-padding = 15px
    .root {
        display flex
        flex-direction column
        /*padding 20px*/
        height 100%
        width 100%
    }
    .root__cell1 {
        flex-shrink 0
    }
    .root__cell2 {
        position relative
        height 100%
        overflow-y auto
        overflow-x hidden
        display flex
        flex-direction column
        justify-content space-between
        background-color $color1
    }
    .mainContentCell {
        position relative
        display: flex;
        flex-direction: column;
        flex-shrink 0
        z-index 0
    }
    .navbar {
        left 0
        z-index 2
        position fixed
    }
    .mainContentCell__row {
        display flex
        flex-direction column
        align-items center
    }
    .mainContentCell__row1 {
        margin-top 0
    }
    .mainContentCell__row2 {
        z-index 1
        background-color #fff
        padding 88px 0
        position relative
        @media screen and (max-width: 719px) {
            padding 20px 0
        }
    }
    .mainContentCell__row2__WidthLimit {

    }
    .mainContentCell__row2__text {
        width 100%
        font-size: 32px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        margin-bottom 48px
    }
    .mainContentCell__row3 {
        /*margin-top 45px*/
        padding 52px 0 78px 0
    }
    .mainContentCell__row3__WidthLimit {

    }
    .technologyCategoryCheckboxes {
        display flex
        flex-direction column
        justify-content flex-start
        width 100%
        margin-bottom 30px
    }
    .technologyCategoryCheckboxes__row1 {
        text-transform uppercase
        display flex
        justify-content center
        font-weight: bold;
        font-size: 20px;
    }
    .technologyCategoryCheckboxes__row2 {
        display flex
        align-items center
        flex-wrap wrap
        justify-content flex-start
    }
    .technologyCategoryCheckboxes__row2__part {
        /*padding 0 10px*/
    }
    .technologyCategoryTags {
        display flex
    }
    .technologyCategoryTag {
        &:not(:first-child) {
            margin-left 15px
        }
        &:not(.technologyCategoryTag_active) {
            cursor pointer
        }
    }
    .technologyCategoryTag_active {
        font-weight bold
    }
    .technologyCategoryCheckboxes__row2__text {
        font-weight: bold;
    }
    .technologyCategoryCheckboxes__row2__group {
        margin-left 30px
    }
    .logotype {
        max-width 400px
        width 100%
    }
    .searchBoxWrapper {
        /*max-width 600px*/
        width 100%
        height 64px
        @media screen and (max-width: 719px) {
            height 40px
        }
    }
    .searchBox {
        width 100%
    }

    .searchSuggestionsWrapper {
        position absolute
        width 100%
        top 100%
        left 0
    }

    .searchSuggestions {
        position relative
        width 100%
    }
    .categoryCards {
        display flex
        flex-wrap wrap
        justify-content flex-start
        margin -($categoryCardWrapper-padding)
        @media screen and (max-width: 739px) {
            justify-content center
        }
    }
    .categoryCardWrapper {
        width calc(100% / 3)
        min-width 350px
        max-width 500px
        padding $categoryCardWrapper-padding
        @media screen and (max-width: 1088px) {
            width calc(100% / 2)
        }
        @media screen and (max-width: 738px) {
            width calc(100% / 1)
            min-width 120px
        }
    }

    .categoryCard {
        width 100%
        height 100%
    }
    .categoryCard__icon {
        height 100%
        :global(svg) {
            height 100%
        }
    }
    .categoryCard__link {
        margin 3px
        display inline-flex
    }
    .categoryTitle {
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
    }
    .categoryCard__link__button {
        color $color8
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        padding 4px 10px
    }
    .footer {
        flex-shrink 0
    }
</style>
