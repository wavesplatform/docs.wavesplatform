<template>
  <div :class="$style.root">
    <div class="theme-default-content">
      <h1>404</h1>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">Take me home.</router-link>
    </div>
  </div>
</template>

<script>
  const msgs = [
    `There's nothing here.`,
    `How did we get here?`,
    `That's a Four-Oh-Four.`,
    `Looks like we've got some broken links.`
  ]

  export default {
    methods: {
      getMsg () {
        return msgs[Math.floor(Math.random() * msgs.length)]
      }
    }
  }
</script>

<style lang="stylus" module>
    .root {
        display flex
        justify-content center
        align-items center
        width 100vw
        height 100vh
    }
</style>
