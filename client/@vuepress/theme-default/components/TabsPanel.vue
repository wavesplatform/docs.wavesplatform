<template>
  <div :class="$style.root">
      <div
          ref="scrollbar"
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
      </div>
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

    computed: {
      layoutWidth () {
        return this.$store.state.interface.layoutWidth
      },
    },

    watch: {
      selectedActiveItemIndex: {
        handler (newValue) {
          this.$emit('change', newValue)
          this.updateMarkerParams();
        },
        immediate: false
      },
      items() {
        this.updateMarkerParams();
      },
      layoutWidth() {
        this.updateMarkerParams();
      },
    },

    async mounted() {
      await this.$nextTick();
      this.$refs.scrollbar.addEventListener('scroll', this.updateMarkerParams);
      this.updateMarkerParams();

    },

    async updated() {
      await this.$nextTick();
      this.updateMarkerParams();
    },

    beforeDestroy() {
      this.$refs.scrollbar.removeEventListener('scroll', this.updateMarkerParams);
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
        const scrollbarElement = this.$refs.scrollbar;
        const itemRefElement = itemRefElements[0];
        const itemRefElementBoundingClientRect = itemRefElement.getBoundingClientRect();
        this.markerMaxWidth = itemRefElementBoundingClientRect.width;


        this.markerTop = itemRefElement.offsetTop + itemRefElementBoundingClientRect.height - scrollbarElement.scrollTop;
        this.markerLeft = itemRefElement.offsetLeft - scrollbarElement.scrollLeft;
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
        max-width 100%
        overflow-x auto
    }
    .tabsList {
        display flex
        margin 0 0 20px 0
    }
    .tabsList__item {
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        padding-bottom 3px
        transition $transitionS1

        &:not(.tabsList__item_active) {
            cursor pointer
            color $color8
            &:hover {
                color $color7
            }
        }
        &:not(:first-child) {
            margin-left 40px
            @media screen and (max-width: 719px) {
                margin-left 32px
            }
        }
        @media screen and (max-width: 719px) {
            font-size: 14px;
        }
    }
    .tabsList__item_active {
        cursor default
        font-weight bold
    }
    .marker {
        transition $transitionS1
        height 3px
        width 100%
        position absolute
        background-color $color4
    }
</style>
