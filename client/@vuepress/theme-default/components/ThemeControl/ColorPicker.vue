<template>
    <div
        :class="$style.root"
    >
        <span :class="$style.name">
            {{name}}
        </span>
        <div :class="$style.value">
            <input type="color" v-model="item.value" @change="change">
        </div>
    </div>
</template>

<script>
  export default {

    props: {
      item: {
        type: Object,
        required: true,
      },
    },

    computed: {
      name() {
        return this.item.name;
      }
    },

    methods: {
        change(event) {
          document.documentElement.style.setProperty(`--${this.name}`, event.target.value);
          this.$emit('change', event);
        },
    },
  }
</script>

<style lang="stylus" module>
    .root {
        display flex
        margin-top 10px
    }
    .name {
        background-color #fff
    }
    .value {
        margin-left 10px
    }
</style>

