<template>
    <div :class="$style.root">
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

            <div
                v-if="searchResult.length && searchResult.length > limitDisplaySearchResultNumber"
                :class="$style.showMoreButton"
                @click="toggleMore"
            >
                {{isHideMoreButton ? 'Hide more' : 'Show more...'}}
            </div>
        </div>
    </div>
</template>

<script>
  import SearchResultItem from './SearchResultItem'

  export default {
    components: {
      SearchResultItem,
    },
    props: {
      searchResult: {
        type: Array,
        default: () => []
      }
    },

    data() {
      const showMoreDisplayElementsOfOneStep = 3;
      return {
        limitDisplaySearchResultNumber: showMoreDisplayElementsOfOneStep,
        showMoreDisplayElementsOfOneStep,
        isHideMoreButton: false,
      }
    },

    computed: {
      limitedDisplaySearchResult() {
        console.log(`this.searchResult.slice(0, this.limitDisplaySearchResultNumber):`, this.searchResult.slice(0, this.limitDisplaySearchResultNumber))
        return this.searchResult.slice(0, this.limitDisplaySearchResultNumber);
      }
    },


    created () {
      console.log('searchResult:', this.searchResult, this.searchResult.length);
    },

    methods: {
      toggleMore() {
        console.log('toggleMore:', this.limitDisplaySearchResultNumber);
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
    .showMoreButton {
        cursor pointer
        border 1px solid #ccc
        padding 10px
        margin 5px
        text-align center
    }
</style>
