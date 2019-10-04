<template>
    <div :class="$style.root">

        <div :class="[$style.root__row, $style.root__row1]">
            <Logotype :class="$style.logotype"/>
        </div>


        <div :class="[$style.root__row, $style.root__row2]">
            Welcome to the documentation on everything about Waves platform
            <SearchBox
                :class="$style.searchBox"
                :is-full-size="true"
            />
        </div>

        <div :class="[$style.root__row, $style.root__row3]">

            <div :class="$style.technologyCategoryCheckboxes">
                <span :class="$style.technologyCategoryCheckboxes__row1">
                    Or
                </span>
                <div :class="$style.technologyCategoryCheckboxes__row2">
                    <span :class="$style.technologyCategoryCheckboxes__row2__text">
                        Browse by topic or technology category
                    </span>
                    <el-checkbox-group
                        v-model="activeTechnologyCategories"
                        :class="$style.technologyCategoryCheckboxes__row2__group"
                    >
                        <el-checkbox-button
                            v-for="technologyCategory of technologyCategories"
                            :key="technologyCategory"
                            :label="technologyCategory"
                        >
                            {{ technologyCategory }}
                        </el-checkbox-button>
                    </el-checkbox-group>
                </div>
            </div>

            <ul :class="$style.categoryCards">
                <li
                    v-for="(category, index) of categories"
                    v-if="activeTechnologyCategories.includes(category.type)"
                    :key="index"
                    :class="$style.categoryCardWrapper">
                    <CategoryCard :class="$style.categoryCard">
                        <template
                            slot="icon"
                        >
                            <img
                                :class="$style.categoryCard__icon"
                                :src="category.iconFilePath"
                                alt=""
                            >
                        </template>

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
    </div>
</template>

<script>

  import Home from '@theme/components/Home.vue'
  import Navbar from '@theme/components/Navbar.vue'
  import Page from '@theme/components/Page.vue'
  import Sidebar from '@theme/components/Sidebar/'
  import SearchBox from '@theme/components/SearchBox/'
  import CategoryCard from './components/CategoryCard'
  import Logotype from '@theme/components/Logotype'
  import { resolveSidebarItems } from '../util'


  export default {
    components: {
      SearchBox,
      CategoryCard,
      Logotype,
    },

    data () {
      return {
        categories: [
          {
            type: 'Beginners',
            iconFilePath: require('@theme/static/images/category1.svg'),
            title: 'Learn about Waves Platform',
            caption: 'Overview of the Waves Platform main features. Protocol, consensus, cryptography. Understand the value a blockchain offers.',
            buttonSet: [
              {
                text: 'Protocol',
                link: '#',
              },
              {
                text: 'Consensus',
                link: '#',
              },
              {
                text: 'Glossary',
                link: '#',
              },
            ],
          },
          {
            type: 'Advanced',
            iconFilePath: require('@theme/static/images/category2.svg'),
            title: 'Node',
            caption: 'Learn about Waves full node. How to install a node. Node configuration and API. Work with node extensions: matcher, gRPC server.',
            buttonSet: [
              {
                text: 'Node API',
                link: '#',
              },
              {
                text: 'Matcher',
                link: '#',
              },
              {
                text: 'gRPC',
                link: '#',
              },
              {
                text: 'Leasing',
                link: '#',
              },
            ],
          },
          {
            type: 'Beginners',
            iconFilePath: require('@theme/static/images/category3.svg'),
            title: 'Ecosystem Applications',
            caption: 'Learn about the Waves blockchain ecosystem applications.',
            buttonSet: [
              {
                text: 'DEX',
                link: '#',
              },
              {
                text: 'Explorer',
                link: '#',
              },
              {
                text: 'Keeper',
                link: '#',
              },
            ],
          },
          {
            type: 'Advanced',
            iconFilePath: require('@theme/static/images/category4.svg'),
            title: 'Build Blockchain Applications',
            caption: 'Learn how to build a blockchain application with Waves. Understanding Waves Smart Contracts. API & SDK. Developer Tools.',
            buttonSet: [
              {
                text: 'Smart Contracts',
                link: '#',
              },
              {
                text: 'Tools',
                link: '#',
              },
              {
                text: 'API & SDK',
                link: '#',
              },
            ],
          },
          {
            type: 'Advanced',
            iconFilePath: require('@theme/static/images/category5.svg'),
            title: 'Ride Programming Language',
            caption: 'Learn the syntax of new Ride programming language that allows building dApps. Examples of use.',
            buttonSet: [
            ],
          },
          {
            type: 'Supplementary',
            iconFilePath: require('@theme/static/images/category6.svg'),
            title: 'Additional Services',
            caption: 'Work with additional services built on the Waves blockchain: Data Services, Oracles, Token Rating, Item Market, DappOcean, PyWaves Statistics, etc.',
            buttonSet: [
              {
                text: 'Data Services',
                link: '#',
              },
              {
                text: 'Oracles',
                link: '#',
              },
              {
                text: 'Token Rating',
                link: '#',
              },
            ],
          },
          {
            type: 'Supplementary',
            iconFilePath: require('@theme/static/images/category7.svg'),
            title: 'Miscellaneous',
            caption: 'Waves Platform official resources. Read articles on various topics dedicated to Wave blockchain. Contributing to Waves platform.',
            buttonSet: [
              {
                text: 'Official Resources',
                link: '#',
              },
            ],
          }
        ],

        activeTechnologyCategories: ['Beginners'],
        technologyCategories: ['Beginners', 'Advanced', 'Supplementary']
      }
    },

    computed: {

    },

    watch: {

    },

    async beforeMount () {

    },

    mounted () {

    },

    beforeDestroy () {
    },

    methods: {

    }
  }
</script>


<style lang="stylus" module>
    .root {
        display flex
        flex-direction column
        padding 20px
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
        margin-top 40px
    }
    .root__row3 {
        margin-top 10px
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
    }
    .technologyCategoryCheckboxes__row2 {
        display flex
        align-items center
        margin-top 10px
    }
    .technologyCategoryCheckboxes__row2__text {

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
        padding 10px
        justify-content center
    }
    .categoryCardWrapper {
        width calc(100% / 3)
        min-width 300px
        padding 10px
    }
    .categoryCard {
        width 100%
        height 100%
    }

    .categoryCard__link {
        margin 4px
        display inline-flex
    }
</style>
