<template>
    <div
        :class="$style.root"
        :style="{
            visibility: isVisible ? 'visible' : '',
        }"
    >
        <select @change="changeColoration">
            <option
                v-for="(colorationName, index) of colorationNames"
                :key="index"
                :value="colorationName"
                :selected="colorationName === activeColouration"
            >{{colorationName}}</option>
        </select>
        <input
            type="checkbox"
            :class="$style.visibilityCheckbox"
            v-model="isVisible"
        >
        <template v-if="activeColorationConfigColors">
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
      }
    },

    computed: {
      themeConfig() {
        return this.$store.state.themeConfig;
      },
      activeColouration() {
        return this.themeConfig.activeColouration;
      },
      colorationNames() {
        return Object.keys(this.themeConfig.colouration);
      },
      activeColorationConfig() {
        if(!this.activeColouration) {
          return
        }
        return this.$store.getters.activeColorationConfig;
      },
      activeColorationConfigColors() {
        return this.$store.getters.activeColorationConfigColors;
      },
      activeColorationConfigPropsPrepare() {
        return Object.entries(this.activeColorationConfigColors).map(elementEntry => {
          return {
            name: elementEntry[0],
            value: elementEntry[1],
          };
        });
      }
    },

    mounted () {
      this.setActiveTheme();
    },

    methods: {
      changeColoration(event) {
        this.$store.commit('setActiveColoration', event.target.value);
        this.setActiveTheme();
      },
      changeValue(event, activeColorationProp) {
        activeColorationProp.value = event.target.value;
      },
      setActiveTheme() {
        Object.entries(this.activeColorationConfigColors).forEach(colorationPropEntry => {
          document.documentElement.style.setProperty(`--${colorationPropEntry[0]}`, colorationPropEntry[1]);
        });
      },
    },
  }
</script>

<style lang="stylus" module>
    .root {
        position fixed
        z-index 3
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

