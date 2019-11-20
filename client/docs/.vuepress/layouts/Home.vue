<template>
    <div :class="$style.root">
        <ThemeControl/>
        <template v-if="$themeLocaleConfig.homePage">
            <SearchFrameContent
                @close="$store.commit('setDisplaySearchResultWindow', false)"
            />
            <Navbar
                ref="navbar"
                :class="[$style.root__cell1, $style.navbar]"
                :is-home-page-mod="true"
                type="home"
            />
            <div
                :class="$style.root__cell2"
                :style="{
                    paddingTop: headerHeight + 'px'
                }"
            >
                <main :class="$style.mainContentCell">
                    <div :class="[$style.mainContentCell__row, $style.mainContentCell__row2]">
                        <WidthLimit
                            :class="[
                                $style.mainContentCell__row2__WidthLimit,
                                isMounted && $style.mainContentCell__row2__WidthLimit_animate,
                            ]"
                        >
                            <h1
                                v-show="layoutWidth > 719"
                                :class="$style.mainContentCell__row2__text">
                                {{ $themeLocaleConfig.homePage.welcomeText }}
                            </h1>
                            <div :class="$style.searchBoxWrapper">
                                <SearchBox
                                    ref="searchBox"
                                    :class="$style.searchBox"
                                    :is-full-size="true"
                                    :with-suggestions="layoutWidth > 719 && !isShowSearchResultWindow && !isHoldHiddenSuggestions"
                                    @up="layoutWidth > 719 && suggestionsUp"
                                    @down="layoutWidth > 719 && suggestionsDown"
                                    @search="search"
                                />
                            </div>
                        </WidthLimit>

                        <div
                            v-show="layoutWidth < 720 && !isShowSearchResultWindow && !isHoldHiddenSuggestions"
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
  import Navbar from '@theme/components/Navbar'
  import TabsPanel from '@theme/components/TabsPanel'
  import CategoryCard from '@theme/components/CategoryCard'
  import Logotype from '@theme/components/Logotype'
  import Footer from '@theme/components/Footer'
  import ThemeControl from '@theme/components/ThemeControl'

  import watchLayoutSizeMixin from './mixins/watchLayoutSize'
  import navbarResizeDetectorMixin from './mixins/navbarResizeDetector'
  import searchMixin from '@theme/mixins/search'
  import setGlobalVm from './mixins/setGlobalVm'

  export default {
    mixins: [
      watchLayoutSizeMixin,
      navbarResizeDetectorMixin,
      searchMixin,
      setGlobalVm,
    ],

    components: {
      WidthLimit,
      Navbar,
      CategoryCard,
      Logotype,
      Footer,
      TabsPanel,
      ThemeControl,
    },

    data () {
      return {
        currentTechnologyCategoryFilter: 'all',
        suggestionsRef: null,
        isMounted: false,
        isHoldHiddenSuggestions: false,
      }
    },

    computed: {
      isShowSearchResultWindow() {
        return this.$store.state.interface.isShowSearchResultWindow;
      },
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
    },

    async mounted () {
      await this.$nextTick();
      this.isMounted = true;
    },

    updated () {
      this.suggestionsRef = this.$refs.suggestions;
    },

    methods: {
      selectCategoryTag(categoryTagName) {
        this.currentTechnologyCategoryFilter = categoryTagName;
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
        width 100vw
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
        background-color var(--color1)
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
        width 100vw
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
        background-color var(--color11)
        padding 88px 0
        position relative
        @media screen and (max-width: 719px) {
            padding 20px 0
        }
    }
    .mainContentCell__row2__WidthLimit {
        transform: translateY(50%);
        opacity 0
        transition .8s
    }
    .mainContentCell__row2__WidthLimit_animate {
        transform: translateY(0);
        opacity 1
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
        background-color transparent
    }
    .footer {
        flex-shrink 0
    }
</style>
