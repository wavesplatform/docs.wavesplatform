<template>
    <div
        v-html="logoSvg"
        :class="$style.root"
    />
</template>

<script>
export default {
    computed: {
      themeConfig() {
        return this.$store.state.themeConfig;
      },
      logoSvg() {
        return this.themeConfig.colouration[this.themeConfig.activeColouration].logoSvg;
      },
    },
}
</script>

<style lang="stylus" module>
    .root {
        display flex
        align-items center
        justify-content center
        & > :global(svg) {
            width 100%
        }
        :global(text) {
            font-size 25px
            font-weight 300
        }
    }
</style>
