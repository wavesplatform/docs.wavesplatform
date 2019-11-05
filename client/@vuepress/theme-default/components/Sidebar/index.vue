<template>
  <component
      :is="sidebarComponentNameForSide"
      v-bind="{
        ...$attrs,
        // ...$props,
      }"
      v-on="$listeners"
  >
      <slot name="header" slot="header"/>
      <slot name="top" slot="top"/>
      <slot name="bottom" slot="bottom"/>
  </component>
</template>

<script>
import Left from './Left'
import Right from './Right'

export default {
  name: 'Sidebar',

  inheritAttrs: false,

  components: {
    Left,
    Right,
  },

  props: {
    side: {
      type: String,
      validator(value) {
        return ['left', 'right'].includes(value);
      },
      default: 'left',
    },
  },

  computed: {
    sidebarComponentNameForSide() {
      if(this.side === 'left') {
        return 'Left';
      } else if (this.side === 'right') {
        return 'Right';
      }
    }
  },

  mounted () {
    console.log('this $listeners:', this)
  }
}
</script>
