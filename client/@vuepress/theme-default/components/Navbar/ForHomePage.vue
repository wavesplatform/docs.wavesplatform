<template>
    <header :class="[$style.root]">
        <WidthLimit
            :class="[$style.root__wrapper]"
            :type="2"
        >
            <Logotype
                :class="[$style.logotype]"/>

            <div
                :class="[
                        $style.links,
                    ]"
                :style="{
                        maxWidth: linksWrapMaxWidth ? linksWrapMaxWidth + 'px' : '',
                        justifyContent: 'flex-end',
                    }"
            >
                <!--      <NavLinks-->
                <!--          v-if="!isHomePageMod"-->
                <!--          :class="['can-hide', $style.navLinks]"-->
                <!--      />-->
                <div
                    :class="$style.root__cell"
                    :style="{
                    // justifyContent: (layoutWidth > 719 && !isHomePageMod) ? 'space-between' : 'flex-end',
                    justifyContent: 'flex-end',
                }"
                >
                    <SwitchLanguage :class="$style.switchLanguage"/>
                </div>
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
    $navbar-vertical-padding = 0.7rem;
    $navbar-horizontal-padding = 1.5rem;

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


    .root__wrapper {
        display flex
        width 100%
        justify-content space-between
    }

    .logotype2Wrapper {
        width 100%
        height 100%
        max-width 200px
    }
    .logotype2 {
        width 100%
        height 100%
    }


    .root__cell {
        display flex
        align-items center
        justify-content flex-end
        width 100%
    }

    .logotype {
        height 100%
        min-width 164px
        @media screen and (max-width: 719px) {
            min-width 124px
        }
    }

    .navLinks {
        width 100%
    }

    .searchBox {
        /*margin-left 1rem*/
        width 100%
    }

    .languageRadioGroup {
        /*margin-top: 4px;*/
        margin-left 20px
    }

    .languagesNav {
        flex-shrink 0
        margin-left .5rem
        display flex
        align-items center

        .languagesNav__link {
            $triangleSize = 9px;
            color $textColor
            display flex
            justify-content center
            align-items center
            position relative

            &:not(:first-child) {

            }

            &:not(:global(.router-link-active)) {

            }

            &:global(.router-link-active) {
                cursor default

                &:before, &:after {
                    content ''
                    width: 0;
                    height: 0;
                    display flex
                    position absolute
                    top calc(100% + 2px)
                }

                &:before {
                    border-left: $triangleSize solid transparent;
                    border-right: $triangleSize solid transparent;
                    border-bottom: $triangleSize solid $borderColor;
                }

                &:after {
                    border-left: $triangleSize solid transparent;
                    border-right: $triangleSize solid transparent;
                    border-bottom: $triangleSize solid #fff;
                    margin-top 1px
                }
            }
        }
    }
    .languagesNav__separator {
        width 1px
        height 30px
        background $arrowBgColor
        margin 0 .5rem
        opacity .3
    }
    .links {
        visibility hidden
        /*height 100vh*/
        /*padding-left 1.5rem*/
        box-sizing border-box
        background-color white
        white-space nowrap
        font-size 0.9rem
        /*position absolute*/
        left $navbar-horizontal-padding
        top $navbar-vertical-padding
        display flex
        align-items center
        justify-content flex-end
    }
    .switchLanguage {
        visibility visible
    }
</style>

