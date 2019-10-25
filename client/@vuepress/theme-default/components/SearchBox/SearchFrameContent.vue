<template>
    <el-dialog
        :class="$style.root"
        title="Tips"
        :visible.sync="isShowSearchResultWindow"
        width="100%"
        :fullscreen="true"
        :modal="false"
    >
        <div :class="$style.root__cell1">
            <template v-if="SearchBoxComponent">
                <component :is="SearchBoxComponent" :is-full-size="true"/>
            </template>
<!--            <SearchBox :is-full-size="true"/>-->
<!--            <span :class="$style.searchWrapper">-->
<!--                Search-->
<!--            </span>-->
            <el-button
                type="text"
                :class="$style.cancelButton"
                @click="$emit('close')"
            >Cancel</el-button>

        </div>
        <div :class="$style.root__cell2">
            <span :class="$style.root__cell2__part1">
                {{searchResult.length}} results matching
            </span>
            <span :class="$style.root__cell2__part2">
                "{{query}}"
            </span>
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
                <div v-else>
                    No such results
                </div>


            </div>
        </div>
        <div
            v-if="searchResult.length && searchResult.length > limitDisplaySearchResultNumber"
            :class="[$style.root__cell4, $style.showMoreButtonWrapper]"
            @click="toggleMore"
        >
            <el-button :class="$style.showMoreButton">
                {{isHideMoreButton ? 'Less more' : 'Show more'}}
            </el-button>

        </div>
    </el-dialog>
</template>

<script>
  import SearchResultItem from './SearchResultItem'
  import SearchBox from '@theme/components/SearchBox'

  export default {
    components: {
      SearchResultItem,
      SearchBox,
    },

    props: {
      isShowSearchResultWindow: {
        type: Boolean,
        default: false,
      },
      searchResult: {
        type: Array,
        default: () => []
      },
      query: {
        type: String,
        default: '',
      }
    },

    data() {
      const showMoreDisplayElementsOfOneStep = 5;
      return {
        limitDisplaySearchResultNumber: showMoreDisplayElementsOfOneStep,
        showMoreDisplayElementsOfOneStep,
        isHideMoreButton: false,
        SearchBoxComponent: null,
      }
    },

    computed: {
      limitedDisplaySearchResult() {
        // console.log(`this.searchResult.slice(0, this.limitDisplaySearchResultNumber):`, this.searchResult.slice(0, this.limitDisplaySearchResultNumber))
        return this.searchResult.slice(0, this.limitDisplaySearchResultNumber);
      }
    },


    created () {
      console.log('this.$options:', this.$options)
      // console.log('searchResult:', this.searchResult, this.searchResult.length);
    },

    async mounted() {
      await this.$nextTick();
      this.SearchBoxComponent = SearchBox;
    },

    methods: {
      toggleMore() {
        // console.log('toggleMore:', this.limitDisplaySearchResultNumber);
        if(this.isHideMoreButton) {
          this.limitDisplaySearchResultNumber = this.showMoreDisplayElementsOfOneStep;
          return;
        }
        this.limitDisplaySearchResultNumber += this.showMoreDisplayElementsOfOneStep;
      },
    },
  }
</script>

<style lang="stylus" module>
    .root {
        display flex
        flex-direction column
        height 100%
        overflow hidden
        position fixed
    }

    .root__cell1,
    .root__cell2,
    .root__cell3,
    .root__cell4 {
        padding-left 20px
        padding-right 20px
    }

    .root__cell1 {
        flex-shrink 0
        border-bottom 1px solid $color3
        display flex
        justify-content space-between
    }

    .searchWrapper {
        display flex
        align-items center
    }

    .searchBox {

    }

    .cancelButton {
        color $color6
    }

    .root__cell2 {
        flex-shrink 0
        padding-top 20px
        padding-bottom 20px
        text-transform uppercase
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

        &:not(:first-child) {
            margin-top 15px
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
</style>
