<template>
    <div :class="$style.root">
        <Page
            v-if="false"
            :class="$style.page"
        />
    </div>
</template>

<script>
  import Navbar from '@theme/components/Navbar'
  import SearchBox from '@theme/components/SearchBox/'
  import CategoryCard from './components/CategoryCard'
  import Logotype from '@theme/components/Logotype'
  import Footer from '@theme/components/Footer'
  import Page from '@theme/components/Page.vue'

  import watchLayoutWidthMixin from './mixins/watchLayoutWidth'

  export default {

    components: {
      Page,
    },

    data () {
      return {

      }
    },

  }
</script>


<style lang="stylus" module>
    .root {
        display flex
        flex-direction column
    }
    .page {

    }
</style>
