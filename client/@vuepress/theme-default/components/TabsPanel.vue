<template>
  <div :class="$style.root">
      <vue-scrollbar
          ref="test"
          :class="$style.scrollbar"
      >
          <ul :class="$style.tabsList">
              <li
                  v-for="(item, itemIndex) of items"
                  :ref="itemIndex"
                  :key="itemIndex"
                  :class="[
                  $style.tabsList__item,
                  itemIndex === selectedActiveItemIndex && $style.tabsList__item_active
              ]"
                  @click="selectItem(itemIndex)"
              >
                  {{ item }}
              </li>
          </ul>
          <div
              ref="marker"
              :class="$style.marker"
              :style="{
              maxWidth: markerMaxWidth + 'px',
              top: markerTop + 'px',
              left: markerLeft + 'px',
          }"
          ></div>
      </vue-scrollbar>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: [Array, Object],
        default: () => []
      },
      activeItemIndex: {
        type: [String, Number],
        default: null
      }
    },
    data () {
      return {
        selectedActiveItemIndex: this.activeItemIndex,
        markerMaxWidth: 0,
        markerTop: 0,
        markerLeft: 0
      }
    },
    watch: {
      selectedActiveItemIndex: {
        handler (newValue) {
          this.$emit('change', newValue)
          this.updateMarkerParams();
        },
        immediate: true
      },
      items() {
        this.updateMarkerParams();
      },
    },
    async mounted() {
      await this.$nextTick();
      this.updateMarkerParams();
    },

    async updated() {
      await this.$nextTick();
      this.updateMarkerParams();
    },

    methods: {
      selectItem (itemIndex) {
        this.selectedActiveItemIndex = itemIndex
      },
      async updateMarkerParams () {
        await this.$nextTick();
        const itemRefElements = this.$refs[this.selectedActiveItemIndex];
        if(!itemRefElements) {
          return
        }
        const itemRefElement = itemRefElements[0];
        const itemRefElementBoundingClientRect = itemRefElement.getBoundingClientRect();
        this.markerMaxWidth = itemRefElementBoundingClientRect.width;
        this.markerTop = itemRefElement.offsetTop + itemRefElementBoundingClientRect.height;
        this.markerLeft = itemRefElement.offsetLeft;
      },
    }
  }
</script>

<style lang="stylus" module>
    .root {
        position relative
        display flex
        overflow hidden

    }
    .scrollbar {

    }
    .tabsList {
        display flex
        margin 0 0 20px 0
    }
    .tabsList__item {
        &:not(.tabsList__item_active) {
            cursor pointer
        }
        &:not(:first-child) {
            margin-left 15px
        }
    }
    .tabsList__item_active {
        cursor default
        font-weight bold
    }
    .marker {
        transition .3s
        height 3px
        width 100%
        position absolute
        background-color $color4
    }
</style>
