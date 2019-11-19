<template>
    <component :is="componentName"></component>
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

    }
</style>

