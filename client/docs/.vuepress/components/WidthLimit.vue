<template>
    <div
        ref="root"
        :class="[
            $style.root,
            type && $style[`root_type_${type}`],
            paddingLR && $style[`root_paddingLR${paddingLR}`]
        ]">
        <slot/>
    </div>
</template>

<script>
export default {
    props: {
      type: {
        type: [String, Number],
        default: 1,
      },
      paddingLR: {
        type: [String, Number],
        default: 3,
        validator(value) {
          return [0, 1, 2, 3].includes(value);
        },
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
    }
    .root_type_2 {
        max-width 1920px
    }
    .root_paddingLR0 {
        $padding = 0
        padding-left $padding
        padding-right $padding
    }
    .root_paddingLR1 {
        $padding = $indent1
        padding-left $padding
        padding-right $padding
    }
    .root_paddingLR2 {
        $padding = $indent2
        padding-left $padding
        padding-right $padding
    }
    .root_paddingLR3 {
        $padding = $indent3
        padding-left $padding
        padding-right $padding
        @media screen and (max-width: 719px) {
            padding 0 25px
        }
    }
</style>
