<template>
  <form
      :class="[$style.searchBox, $style[`searchBox_size_${size}`]]"
      @submit.prevent="submitForm"
  >
      <img
          :class="$style.searchBox__icon"
          src="./search-24-basic-300.svg"
          alt=""
          @click="submitForm"
      >

    <input
        ref="input"
        type="search"
        maxlength="1024"
        aria-autocomplete="both"
        aria-haspopup="false"
        autocapitalize="off"
        autocomplete="off"
        autocorrect="off"
        @input="$store.commit('setSearchQuery', $event.target.value)"
        aria-label="Search"
        :value="query"
        :class="[$style.input, {
            [$style.focused]: isFullSize || focused,
        }]"
        spellcheck="false"
        @focus="focused = true"
        @blur="focused = false"
        @keyup.up.prevent.stop="suggestionUp"
        @keyup.down.prevent.stop="suggestionDown"
        :placeholder="$themeLocaleConfig.searchPlaceholderText"
        :style="{
            borderRadius: withSuggestions && (suggestionsList.length && layoutWidth > 719) ? '4px 4px 0 0' : '4px',
        }"
    >
    <img
      v-if="query"
      :class="$style.searchBox__clearIcon"
      src="./close-16-basic-500.svg"
      alt=""
      @click="clearInput"
    >
      <div
          v-show="withSuggestions"
          :class="$style.searchSuggestionsWrapper"
      >
          <Suggestions
              ref="suggestions"
              :class="$style.searchSuggestions"
              :mod="1"
          />
      </div>

  </form>
</template>

<script>
import Suggestions from './Suggestions'

export default {

  components: {
    Suggestions,
  },

  props: {
    isFullSize: {
      type: Boolean,
      default: false,
    },
    withSuggestions: {
      type: Boolean,
      default: true,
    },
    size: {
      type: [Number, String],
      default: 'default',
      validator(value) {
        return ['default', 1, 2].includes(value);
      },
    },
  },
  data () {
    return {
      focused: false,
      currentMessageBoxKey: 1,
      searchResultData: [],
      suggestionsRef: null,
      cachedInputValue: '',
    }
  },

  computed: {
    isShowSearchResultWindow() {
      return this.$store.state.interface.isShowSearchResultWindow;
    },
    layoutWidth () {
      return this.$store.state.interface.layoutWidth
    },
    query() {
      return this.$store.state.search.query;
    },
    suggestionsList() {
      if(!this.suggestionsRef) {
        return [];
      }
      return this.suggestionsRef.suggestions || [];
    },
  },

  watch: {
    query(newValue, oldValue) {
      if(newValue === '') {
        this.cachedInputValue = oldValue;
      }
    },
  },

  methods: {
    focus() {
      this.$refs.input.focus();
    },

    clearInput() {
        this.$store.commit('setSearchQuery', '');
        this.focus();
    },

    suggestionDown() {
      this.$emit('down');
      if(!this.suggestionsRef) {
        return;
      }
      this.suggestionsRef.suggestionDown();
    },

    suggestionUp() {
      this.$emit('up');
      if(!this.suggestionsRef) {
        return;
      }
      this.suggestionsRef.suggestionUp();
    },

    submitForm() {
      if(!this.query) {
        return;
      }
      this.$emit('search');
    },
  },

  mounted () {
    this.suggestionsRef = this.$refs.suggestions;
  },

  updated () {
    this.suggestionsRef = this.$refs.suggestions;
  },
}
</script>

<style lang="stylus" module>
    .searchBox {
        display inline-flex
        position relative
        width 100%
        height 100%
        align-items center
    }
    .searchBox_size_default {

    }
    .searchBox_size_1 {
        .searchBox__icon,
        .searchBox__clearIcon {
            max-width 16px
        }
        .searchBox__icon {
            margin-left 16px
        }
        .input {
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            padding-left: 38px
            &::placeholder {

                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                letter-spacing: normal;
            }
        }
    }
    .searchBox_size_2 {

    }

    .searchBox__icon,
    .searchBox__clearIcon {
        position absolute
        height 80%
        z-index 1
        max-width 24px
        min-height 16px
        cursor pointer
        @media screen and (max-width: 719px) {
            max-width 16px
        }
    }
    .searchBox__icon {
        left 0
        margin-left 20px
        @media screen and (max-width: 719px) {
            margin-left 16px
        }
    }
    .searchBox__clearIcon {
        right: 0;
        margin-right 20px
        transition transform $transitionS1
        &:hover {
            transform rotate(180deg);
        }
        @media screen and (max-width: 719px) {
            margin-right 16px
        }
    }
    .input {
        -webkit-appearance: none;
        height 100%
        width 100%
        cursor pointer
        color lighten($textColor, 25%)
        display inline-block
        border /*1px solid transparent*/none
        /*border-radius 4px*/
        font-size 24px
        padding 0 10px 0 60px
        outline none
        position relative
        transition all .2s ease
        /*background var(--color11) url(search-24-basic-300.svg) 0.6rem 0.5rem no-repeat*/
        background-color var(--color2)
        background-size 1rem
        &:focus {
            box-shadow inset 0 0 0 1px #EBEEF5, 0 2px 12px 0 rgba(0, 0, 0, .2)
            /*border 1px solid var(--color3)*/
        }
        &::placeholder {
            font-size: 24px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            /*line-height: 64px;*/
            color $color9
        }
        /*&:-moz-placeholder { !* Firefox 18- *!
            line-height: 64px;
        }*/
        &::-moz-placeholder {  /* Firefox 19+ */
            line-height: 64px;
        }
        /*&.focused {
            border-color var(--color3)
            cursor text
            left 0
            width 100%
            &:focus {
                border-color $accentColor
            }
        }
        &:not(.focused) {
            width 0
        }*/

        @media screen and (max-width: 719px) {
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            /*line-height: 1.29;*/
            letter-spacing: normal;
            padding-left: 38px
            &::placeholder {
                font-size: 14px;
                /*line-height: 38px;*/
            }
            /*&:-moz-placeholder { !* Firefox 18- *!
                line-height: 38px;
            }*/
            &::-moz-placeholder {  /* Firefox 19+ */
                line-height: 38px;
            }
        }
    }

    .searchSuggestionsWrapper {
        position absolute
        top 100%
        left 0
        width 100%
    }

    .searchSuggestions {
        position relative
        width 100%
        margin-top -1px
    }
</style>

