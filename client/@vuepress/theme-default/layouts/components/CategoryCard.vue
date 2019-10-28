<template>
    <el-card
        :class="$style.root"
        :body-style="{
            padding: layoutWidth > 719 ? '65px 32px 34px 32px' : '46px 22px 25px 22px',
        }"
    >
        <div :class="$style.root__contentWrapper">
            <a
                :href="rootLink"
                :class="['linkTextHoverTrigger_type1', $style.root__row1]"
            >
                <div :class="$style.iconWrapper">
                    <slot name="icon"/>
                </div>
                <span :class="$style.categoryType">
                    {{categoryType}}
                </span>

                <h2 :class="$style.title">
                    <slot name="title"/>
                </h2>

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
      rootLink: {
        type: String,
        default: '',
      },
      categoryType: {
        type: String,
        default: '',
      }
    },

    components: {
    },

    data () {
      return {

      }
    },

    computed: {
      layoutWidth() {
        return this.$store.state.interface.layoutWidth;
      },
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
    $buttons-margin = 3px
    .root {
        width 100%
        height 100%
        display flex
        position relative
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
        flex-shrink 0
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
        margin-top 42px
    }

    .iconWrapper {
        display flex
        justify-content center
        height 65px
        position relative
        margin-bottom 10px
        padding-bottom 1px
        flex-shrink: 0;
    }
    .icon {
        height auto
    }
    .categoryType {
        color $color6
        font-size 14px
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        margin-top 52px
        @media screen and (max-width: 719px) {
            margin-top 40px
        }
    }
    .title {
        text-align left
        display flex
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color $color7
        border none
        padding 0
        margin-top 7px
        @media screen and (max-width: 719px) {
            font-size 14px
            margin-top 9px
        }
    }
    .caption {
        margin-top 16px
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color $color8
        @media screen and (max-width: 719px) {
            font-size: 14px
            line-height: 1.71
            margin-top: 18px
        }
    }
    .buttonSet {
        margin - $buttons-margin
    }
</style>
