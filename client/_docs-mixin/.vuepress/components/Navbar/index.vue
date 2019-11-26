<template>
    <component
        :class="$style.root"
        :is="componentName"/>
</template>

<script>
  import ForHomePage from './ForHomePage'
  import ForContentPage from './ForContentPage'

  export default {
    props: {
      type: {
        type: String,
        default: 'home',
        validator(value) {
          return ['home', 'content'].includes(value);
        },
      }
    },

    computed: {
      componentName() {
        if(this.type === 'home') {
          return 'ForHomePage';
        } else {
          return 'ForContentPage';
        }
      },
    },

    components: {
      ForHomePage,
      ForContentPage,
    },
  }
</script>

<style lang="stylus" module>
    .root {
        display flex
        height 72px
        border-bottom 1px solid var(--borderColor)
        justify-content center
        width 100%
        background-color var(--color11)
        @media screen and (max-width: 719px) {
            height 57px
        }
    }
</style>

