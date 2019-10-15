<template>
    <div :class="$style.root">
        1
        <template v-if="$themeLocaleConfig.homePage">

            <Navbar
                ref="navbar"
                :class="$style.navbar"
                :is-home-page-mod="true"
            />

            <div :class="[$style.root__row, $style.root__row2]">
                {{ $themeLocaleConfig.homePage.welcomeText }}
                <SearchBox
                    :class="$style.searchBox"
                    :is-full-size="true"
                />
            </div>

            <div :class="[$style.root__row, $style.root__row3]">

                <div :class="$style.technologyCategoryCheckboxes">
                <span :class="$style.technologyCategoryCheckboxes__row1">
                    {{ $themeLocaleConfig.homePage.or }}
                </span>
                    <div :class="$style.technologyCategoryCheckboxes__row2">

                    <span :class="[$style.technologyCategoryCheckboxes__row2__part, $style.technologyCategoryCheckboxes__row2__text]">
                        {{ $themeLocaleConfig.homePage.technologyCategoriesText }}
                    </span>

                        <div :class="[$style.technologyCategoryCheckboxes__row2__part, $style.technologyCategoryTags]">
                            <el-tag
                                v-for="(technologyCategoryValue, technologyCategoryKey) of $themeLocaleConfig.homePage.technologyCategories"
                                :key="technologyCategoryKey"
                                :type="technologyCategoryKey === 'advanced' ? '' :
                        technologyCategoryKey === 'beginners' ? 'success' :
                        technologyCategoryKey === 'supplementary' && 'info'"
                                :class="$style.technologyCategoryTag"
                            >
                                {{ technologyCategoryValue }}
                            </el-tag>
                        </div>

                        <!--                    <el-checkbox-group-->
                        <!--                        v-model="activeTechnologyCategories"-->
                        <!--                        :class="$style.technologyCategoryCheckboxes__row2__group"-->
                        <!--                    >-->
                        <!--                        <el-checkbox-button-->
                        <!--                            v-for="technologyCategory of technologyCategories"-->
                        <!--                            :key="technologyCategory"-->
                        <!--                            :label="technologyCategory"-->
                        <!--                        >-->
                        <!--                            {{ technologyCategory }}-->
                        <!--                        </el-checkbox-button>-->
                        <!--                    </el-checkbox-group>-->
                    </div>
                </div>
                <ul :class="$style.categoryCards">
                    <!--v-if="activeTechnologyCategories.includes(category.type)"-->
                    <li
                        v-for="(category, index) of categories"
                        :key="index"
                        :class="$style.categoryCardWrapper">
                        <CategoryCard
                            :class="$style.categoryCard"
                            :marker-color="category.type === 'Advanced' ? '#ecf5ff' :
                        category.type === 'Beginners' ? '#f0f9eb' :
                        category.type === 'Supplementary' && '#f4f4f5'"
                            :root-link="category.rootLink"
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
                                <!--small-->
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
        </template>
    </div>
</template>

<script>
  import Navbar from '@theme/components/Navbar.vue'
  import SearchBox from '@theme/components/SearchBox/'
  import CategoryCard from './components/CategoryCard'
  import Logotype from '@theme/components/Logotype'

  export default {
    components: {
      Navbar,
      SearchBox,
      CategoryCard,
      Logotype,
    },

    data () {
      return {
      }
    },

    computed: {
      categories() {
        return Object.values(this.$themeLocaleConfig.homePage.technologyList);
      },
    },
  }
</script>


<style lang="stylus" module>
    .root {
        display flex
        flex-direction column
        padding 20px
    }
    .navbar {
        left 0
    }
    .root__row {
        display flex
        flex-direction column
        align-items center
    }
    .root__row1 {
        margin-top 0px
    }
    .root__row2 {
        margin-top 70px
        z-index 1
    }
    .root__row3 {
        margin-top 45px
    }
    .technologyCategoryCheckboxes {
        display flex
        flex-direction column
        justify-content center
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
        justify-content center
    }
    .technologyCategoryCheckboxes__row2__part {
        padding 0 10px
    }
    .technologyCategoryTags {
        display flex
    }
    .technologyCategoryTag {
        &:not(:first-child) {
            margin-left 15px
        }
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
    .searchBox {
        max-width 600px
        width 100%
        margin-top 10px
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
