<template>
    <header :class="[$style.root]">
        <WidthLimit
            :class="[$style.root__wrapper]"
            :type="2"
        >
            <div :class="$style.root__cell1">
                <WidthLimit
                    :class="$style.searchBoxWrapper"
                    :type="1"
                >
                    <SearchBox
                        :class="$style.searchBox"
                        :is-full-size="true"
                    />
                </WidthLimit>
            </div>

        </WidthLimit>
    </header>
</template>

<script>
  import overallMixin from './overallMixin'
  export default {
    mixins: [
      overallMixin
    ],

  }
</script>

<style lang="stylus" module>
    .root {
        /*padding 20px 0*/
        display flex
        height 72px
        border-bottom 1px solid $color3
        justify-content center
        width 100%
        background-color #fff
        @media screen and (max-width: 719px) {
            height 57px
        }
    }
</style>

