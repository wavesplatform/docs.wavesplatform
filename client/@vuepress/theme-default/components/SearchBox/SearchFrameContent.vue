<template>
    <el-dialog
        ref="dialogComponentExemplar"
        :class="$style.root"
        :visible="isShowSearchResultWindow"
        :fullscreen="layoutWidth < 720"
        :modal="true"
        :show-close="false"
        :custom-class="$style.dialog"
        top=""
        @close="$emit('close')"
    >
        <div :class="$style.root__cell1">
            <template v-if="SearchBoxComponent">
                <div :class="$style.searchBoxWrapper">
                    <component
                        :is="SearchBoxComponent"
                        :is-full-size="true"
                        :with-suggestions="false"
                        :class="$style.searchBox"
                        @search="showDeepSearch"
                    />
                </div>
            </template>
            <el-button
                type="text"
                :class="$style.cancelButton"
                @click="$emit('close')"
            >
                {{i18nSearchPopupConfig.cancelText}}
            </el-button>

        </div>
        <div :class="$style.root__cell2">
            <span
                v-if="currentSearchByQueryLength < minQueryLength"
                :class="$style.minimumChartsLimitation"
            >
                {{i18nSearchPopupConfig.limitationQueryText}}
            </span>
            <template v-else>
               <span :class="$style.root__cell2__part1">
                    {{searchResult.length}} {{i18nSearchPopupConfig.resultsMatchingText}}
                </span>
                <span :class="$style.root__cell2__part2">
                    "{{currentSearchByQuery}}"
                </span>
            </template>

        </div>

        <div :class="$style.root__cell3">
            <div
                :class="$style.resultList"
            >
                <template v-if="searchResult.length">
                    <div
                        v-for="(searchResultItem, index) of limitedDisplaySearchResult"
                        :key="index"
                        :class="$style.resultItem"
                    >
                        <SearchResultItem
                            :item="searchResultItem"
                            :class="$style.resultItem"
                        />
                    </div>
                </template>
                <div
                    :class="$style.noResults"
                    v-else>
                    {{i18nSearchPopupConfig.noSuchResults}}
                </div>


            </div>
        </div>
        <div
            v-if="searchResult.length && searchResult.length > limitDisplaySearchResultNumber"
            :class="[$style.root__cell4, $style.showMoreButtonWrapper]"
            @click="toggleMore"
        >
            <el-button :class="$style.showMoreButton">
                {{isHideMoreButton ? 'Less more' : i18nSearchPopupConfig.showMoreText}}
            </el-button>

        </div>
    </el-dialog>
</template>

<script>
  import axios from 'axios'
  import SearchResultItem from './SearchResultItem'
  import SearchBox from '@theme/components/SearchBox'

  export default {
    components: {
      SearchResultItem,
      SearchBox
    },

    props: {
      isShowSearchResultWindow: {
        type: Boolean,
        default: false
      },
    },

    data () {
      const showMoreDisplayElementsOfOneStep = 5
      return {
        limitDisplaySearchResultNumber: showMoreDisplayElementsOfOneStep,
        showMoreDisplayElementsOfOneStep,
        isHideMoreButton: false,
        SearchBoxComponent: null,
        searchResult: [],
        currentSearchByQuery: '',
      }
    },

    computed: {
      query() {
        return this.$store.state.search.query;
      },
      currentSearchByQueryLength() {
        return this.currentSearchByQuery.length;
      },
      limitedDisplaySearchResult () {
        return this.searchResult.slice(0, this.limitDisplaySearchResultNumber)
      },
      layoutWidth () {
        return this.$store.state.interface.layoutWidth
      },
      i18nSearchPopupConfig() {
        return this.$themeLocaleConfig.searchPopup;
      },
      minQueryLength() {
        return this.i18nSearchPopupConfig.minQueryLength;
      },
    },

    watch: {
      isShowSearchResultWindow(isShow) {
        if(isShow) {
          this.showDeepSearch();
        }
      },
    },

    async mounted () {
      await this.$nextTick()
      this.SearchBoxComponent = SearchBox
      this.showDeepSearch();
    },

    methods: {
      toggleMore () {
        if (this.isHideMoreButton) {
          this.limitDisplaySearchResultNumber = this.showMoreDisplayElementsOfOneStep
          return
        }
        this.limitDisplaySearchResultNumber += this.showMoreDisplayElementsOfOneStep
      },

      async showDeepSearch () {
        this.currentSearchByQuery = this.query;
        if(this.currentSearchByQueryLength < this.minQueryLength) {
          return;
        }
        this.searchResult = [];
        const searchResult = await axios.get(`${process.env.isDev ? `${location.protocol}//${location.hostname}:3000` : ''}/?search=${this.query}`)

        let searchResultData = searchResult.data

        if (!searchResultData || !Array.isArray(searchResultData)) {
          this.searchResult = []
        } else {
          this.searchResult = searchResultData
        }

      }

    }
  }
</script>

<style lang="stylus" module>
    .root {
        display flex
        flex-direction column
        height 100%
        overflow hidden
        position fixed
        justify-content center
        align-items center
        :global(.el-dialog__header) {
            display none
        }
        :global(.el-dialog__body) {
            padding 20px 0
            overflow: hidden;
            height: 100%;
            display flex
            flex-direction column
        }
    }
    .dialog {
        max-width 850px
        /*max-height 850px*/
        height calc(100% - 40px)
        width calc(100% - 40px)
        margin auto
        &:not(:global(.is-fullscreen)) {
            max-height 850px
        }
    }
    .root__cell1,
    .root__cell2,
    .root__cell4 {
        padding-left 24px
        padding-right 24px
        /*padding-bottom 20px*/
    }

    .root__cell1 {
        flex-shrink 0
        border-bottom 1px solid $color3
        display flex
        justify-content space-between
        padding-bottom: 16px;
    }

    .searchBoxWrapper {
        display flex
        align-items center
        width 100%
    }

    .searchBox {

    }

    .cancelButton {
        color $color6
        flex-shrink 0
        margin-left 21px
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
    }

    .root__cell2 {
        flex-shrink 0
        padding-top 26px
        padding-bottom 22px
        text-transform uppercase
        border-bottom 1px solid $color3
    }
    .minimumChartsLimitation {
        color $color8
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: normal;
    }
    .root__cell2__part1 {
        color $color8
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: normal;
    }
    .root__cell2__part2 {
        color $color7
        margin-left 5px
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.75;
        letter-spacing: normal;
    }
    .root__cell3 {
        /*height: 100%;*/
        overflow: hidden;
        overflow-y: auto;
        padding-left 19px
        padding-right 19px
        /*padding-top 15px*/
    }

    .root__cell4 {
        flex-shrink 0
    }

    .resultList {
        display flex
        flex-direction column
        width 100%
    }

    .resultItem {
        display flex
        flex-direction column
        margin-top 10px
        &:not(:first-child) {
            padding-top 4px
            border-top 1px solid $color3
        }
    }
    .showMoreButtonWrapper {
        margin-top 15px
        width 100%
        display flex
        justify-content center
    }
    .showMoreButton {
        max-width 350px
        width 100%
        color $color6
        border-color $color6
    }
    .noResults {
        text-transform uppercase
        color $color8
        padding 20px
        display flex
        justify-content center
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: normal;
    }
</style>
