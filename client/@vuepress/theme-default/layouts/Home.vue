<template>
    <div :class="$style.root">
        <template v-if="$themeLocaleConfig.homePage">
            <Navbar
                ref="navbar"
                :class="[$style.root__cell1, $style.navbar]"
                :is-home-page-mod="true"
            />
            <div :class="$style.root__cell2">
                <main :class="$style.mainContentCell">
                    <div :class="[$style.mainContentCell__row, $style.mainContentCell__row2]">
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
                            />
                        </div>

                    </div>

                    <div :class="[$style.mainContentCell__row, $style.mainContentCell__row3]">

                        <div :class="$style.technologyCategoryCheckboxes">
                            <!--                <span :class="$style.technologyCategoryCheckboxes__row1">-->
                            <!--                    {{ $themeLocaleConfig.homePage.or }}-->
                            <!--                </span>-->
                            <div :class="$style.technologyCategoryCheckboxes__row2">

                                <!--                    <span :class="[$style.technologyCategoryCheckboxes__row2__part, $style.technologyCategoryCheckboxes__row2__text]">-->
                                <!--                        {{ $themeLocaleConfig.homePage.technologyCategoriesText }}-->
                                <!--                    </span>-->
                                <TabsPanel
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
                                v-for="(category, index) of technologyCategoriesFiltered"
                                :key="index"
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
                                        {{ category.title }}
                                    </template>

                                    <template slot="caption">
                                        {{ category.caption }}
                                    </template>


                                    <template slot="buttonSet">
                                        <a
                                            v-for="button of category.buttonSet"
                                            :href="button.link"
                                            :class="$style.categoryCard__link"
                                        >
                                            <el-button size="mini">
                                                {{ button.text }}
                                            </el-button>
                                        </a>
                                    </template>
                                </CategoryCard>
                            </li>
                        </ul>
                    </div>
                </main>
                <Footer/>
            </div>


        </template>
    </div>
</template>

<script>
  import Navbar from '@theme/components/Navbar.vue'
  import SearchBox from '@theme/components/SearchBox/'
  import CategoryCard from './components/CategoryCard'
  import Logotype from '@theme/components/Logotype'
  import Footer from '@theme/components/Footer'
  import TabsPanel from '@theme/components/TabsPanel'

  import watchLayoutWidthMixin from './mixins/watchLayoutWidth'

  export default {
    mixins: [
      watchLayoutWidthMixin,
    ],

    components: {
      Navbar,
      SearchBox,
      CategoryCard,
      Logotype,
      Footer,
      TabsPanel,
    },

    data () {
      return {
        currentTechnologyCategoryFilter: 'all',
      }
    },

    computed: {
      layoutWidth () {
        return this.$store.state.interface.layoutWidth
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

    mounted () {
      if(!this.$isServer) {
        const categoryCardsRefElement = this.$refs.categoryCards;
        const searchBoxRefElement = this.$refs.searchBox.$el;
        // erd.listenTo(categoryCardsRefElement, element => {
        //   console.log('element:', element, searchBoxRefElement)
        //   const searchBoxRefElementWight = searchBoxRefElement.offsetWidth;
        //   searchBoxRefElement.style.maxWidth =
        // });
      }
    },

    methods: {
      selectCategoryTag(categoryTagName) {
        console.log('categoryTagName:', categoryTagName);
        this.currentTechnologyCategoryFilter = categoryTagName;
      },
    },
  }
</script>


<style lang="stylus" module>
    .root {
        display flex
        flex-direction column
        /*padding 20px*/
        height 100vh
        width 100vw
    }
    .root__cell1 {
        flex-shrink 0
    }
    .root__cell2 {
        height 100%
        overflow-y auto
        overflow-x hidden
        display flex
        flex-direction column
        justify-content space-between
        background-color $color1
    }
    .mainContentCell {

    }
    .navbar {
        left 0
        z-index 1
    }
    .mainContentCell__row {
        display flex
        flex-direction column
        align-items center
    }
    .mainContentCell__row1 {
        margin-top 0px
    }
    .mainContentCell__row2 {
        z-index 1
        background-color #fff
        padding 30px 0
    }
    .mainContentCell__row2__text {
        text-align center
        width 100%
        padding 0 40px
    }
    .mainContentCell__row3 {
        margin-top 45px
    }
    .technologyCategoryCheckboxes {
        display flex
        flex-direction column
        justify-content flex-start
        width 100%
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
        margin-top 45px
        flex-wrap wrap
        justify-content flex-start
        padding 0 40px
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
        margin-top 10px
        padding 0 40px
    }
    .searchBox {
        width 100%
    }
    .categoryCards {
        display flex
        flex-wrap wrap
        padding 20px
        justify-content center
    }
    .categoryCardWrapper {
        width calc(100% / 3)
        min-width 300px
        padding 20px
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
        margin 4px
        display inline-flex
    }
</style>
