<template>
    <div
        :class="$style.root"
        :style="{
            visibility: isVisible ? 'visible' : '',
        }"
    >
        <select v-model="currentColorationName">
            <option
                v-for="(colorationName, index) of colorationNames"
                :key="index"
                :value="colorationName">{{colorationName}}</option>
        </select>
        <input
            type="checkbox"
            :class="$style.visibilityCheckbox"
            v-model="isVisible"
        >
        <template v-if="activeColorationConfig">
            <ColorPicker
                v-for="activeColorationProp of activeColorationConfigPropsPrepare"
                :item="activeColorationProp"
                @change="changeValue($event, activeColorationProp)"
            />
            <!--@change="activeColorationProp.value = $event"-->
        </template>

    </div>
</template>

<script>
    import ColorPicker from './ColorPicker';
  export default {
    components: {
      ColorPicker,
    },
    data() {

      return {
        isVisible: false,
        currentColorationName: '',
      }
    },

    computed: {
      colorationNames() {
        return Object.keys(this.$themeConfig.colouration);
      },
      activeColorationConfig() {
        if(!this.currentColorationName) {
          return
        }
        return Object.entries(this.$themeConfig.colouration[this.currentColorationName].colors).reduce((accumulator, elementEntry) => {
          accumulator[elementEntry[0]] = elementEntry[1];
          return accumulator;
        }, {});
      },
      activeColorationConfigPropsPrepare() {
        return Object.entries(this.activeColorationConfig).map(elementEntry => {
          return {
            name: elementEntry[0],
            value: elementEntry[1],
          };
        });
      }
    },

    watch: {
      currentColorationName(newValue) {
        this.$store.commit('setActiveColoration', newValue);
        this.setActiveTheme();
      },
    },

    mounted () {
      this.currentColorationName = this.$themeConfig.activeColouration;
      this.setActiveTheme();
    },

    updated () {

    },

    methods: {
      changeValue(event, activeColorationProp) {
        activeColorationProp.value = event.target.value;
      },
      setActiveTheme() {
        Object.entries(this.activeColorationConfig).forEach(colorationPropEntry => {
          document.documentElement.style.setProperty(`--${colorationPropEntry[0]}`, colorationPropEntry[1]);
        });
      },
    },
  }
</script>

<style lang="stylus" module>
    .root {
        position fixed
        z-index 2
        top 0
        left 0
        border 1px solid #f00
        padding 20px
        visibility hidden
        color #000
    }
    .visibilityCheckbox {
        visibility visible
        position absolute
        top 0
        left 0
        opacity 0
        &:hover {
            opacity 1
        }
    }
</style>

