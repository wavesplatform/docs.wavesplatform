<template>
    <el-card :class="$style.root">
        <div :class="$style.root__contentWrapper">
            <div :class="$style.root__row1">
                <div :class="$style.iconWrapper">
                    <slot name="icon"/>
                </div>
                <el-divider>
                    <div :class="$style.title">
                        <slot name="title"/>
                    </div>
                </el-divider>

                <div :class="$style.caption">
                    <slot name="caption"/>
                </div>
            </div>

            <div :class="$style.root__row2">
                <div :class="$style.buttonSet">
                    <slot name="buttonSet"/>
                </div>
            </div>
        </div>
    </el-card>
</template>

<script>

  export default {
    components: {
    },

    data () {
      return {

      }
    },

    computed: {

    },

    watch: {

    },

    async beforeMount () {

    },

    mounted () {

    },

    beforeDestroy () {
    },

    methods: {

    }
  }
</script>

<style lang="stylus" module>
    .root {
        width 100%
        height 100%
        display flex
    }
    .root__contentWrapper {
        display flex
        flex-direction column
        justify-content space-between
        height 100%
    }
    .root__row1 {
        display flex
        flex-direction column
    }
    .root__row2 {
        display flex
        flex-direction column
        height 100%
        justify-content flex-end
    }
    .title {
        text-align center
        display flex
    }
    .iconWrapper {
        display flex
        justify-content center
        max-height 40px
        height 100%
        position relative
        margin-bottom 10px
    }
    .icon {
        height auto
    }
    .caption {
        margin-top 10px
    }
    .buttonSet {
        margin 25px -4px -4px -4px
    }
</style>
