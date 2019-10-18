<template>
    <div :class="$style.root">
        <div
            :class="$style.resultList"
        >
            <div
                v-if="searchResult.length"
                v-for="(searchResultItem, index) of searchResult"
                :key="index"
                :class="$style.resultItem"
            >
                <SearchResultItem
                    :item="searchResultItem"
                    :class="$style.resultItem"
                />
            </div>
            <div v-else>
                No such results
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


    created () {
      console.log('searchResult:', this.searchResult);
    }
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
</style>
