<template>
    <el-card :class="$style.root">
        <div
            :class="$style.marker"
            :style="{
                backgroundColor: markerColor,
            }"
        />

        <div :class="$style.root__contentWrapper">
            <a :href="rootLink" :class="$style.root__row1">
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
            </a>

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

    props: {
      markerColor: {
        type: String,
        default: '',
      },
      rootLink: {
        type: String,
        default: '',
      },
    },

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
        position relative
    }
    .marker {
        position absolute
        top 0
        left 0
        width 8px
        height 100%
        background #f0f9eb
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
        &:hover {
            :global(.el-divider__text) {
                text-decoration: underline;
            }
        }
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
        color initial
        font-weight 100
    }
    .buttonSet {
        margin 25px -4px -4px -4px
    }
</style>
