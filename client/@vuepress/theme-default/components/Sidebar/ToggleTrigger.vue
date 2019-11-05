<template>
  <span
    :class="[
      $style.sidebarToggleTrigger,
      $style[`_side_${side}`],
      isShow && $style._isShow,
    ]"
    @click="$emit('click', !isShow)"
  circle>
    <div :class="$style.iconWrapper">
      <i :class="['el-icon-arrow-left', $style.icon1]"/>
      <i :class="['el-icon-arrow-left', $style.icon2]"/>
    </div>
  </span>
</template>

<script>

export default {
  name: 'ToggleTrigger',

  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
    side: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value);
      },
    },
  },
}
</script>

<style lang="stylus" module>
  .sidebarToggleTrigger {
    margin 15px
    cursor pointer
    background #fff
    transition $transitionS1
    &:hover {
    }
    &:not(._isShow) {
      &._side_left {
        .iconWrapper {
          transform rotate(-180deg)
        }
      }
      &._side_right {
        .iconWrapper {
          transform rotate(0deg)
        }
      }
    }
    &._side_left {
      /*right 20px*/
      .iconWrapper {

      }
    }
    &._side_right {
      /*left 20px*/
      .iconWrapper {
        transform rotate(-180deg)
      }
    }
  }
  .iconWrapper {
    /*$w-h = 10px*/
    display flex
    align-items center
    justify-content center
    /*width $w-h
    height $w-h*/
    transition transform $transitionS1
    font-size .6rem
  }
  .icon1 {

  }
  .icon2 {
    margin-left -5px
  }

</style>

