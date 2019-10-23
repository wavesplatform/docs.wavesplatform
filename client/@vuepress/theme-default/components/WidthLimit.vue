<template>
    <div
        ref="root"
        :class="[$style.root, type && $style[`root_type_${type}`]]">
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
      type: {
        type: [String, Number],
        default: 1,
      }
    },
}
</script>

<style lang="stylus" module>
    .root {
        width 100%
    }
    .root_type_1 {
        max-width 1280px
        padding 0 32px
        @media screen and (max-width: 719px) {
            padding 0 20px
        }
    }
    .root_type_2 {
        max-width 1920px
        padding 0 32px
        @media screen and (max-width: 719px) {
            padding 0 20px
        }
    }

</style>
