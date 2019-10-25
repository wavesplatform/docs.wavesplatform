<template>
  <form
      :class="$style.searchBox"
      @submit="submitForm"
  >
      <img
          :class="$style.searchBox__icon"
          src="./search-24-basic-300.svg"
          alt=""
          @click="submitForm"
      >
<!--      @keyup.up.prevent.stop="onUp"-->
<!--      @keyup.down.prevent.stop="onDown"-->
    <input
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
        :placeholder="$themeLocaleConfig.searchPlaceholderText"
        :style="{
            borderRadius: (suggestionsList.length && layoutWidth > 719) ? '4px 4px 0 0' : '4px',
        }"
    >
    <img
      v-if="query"
      :class="$style.searchBox__clearIcon"
      src="./close-16-basic-500.svg"
      alt=""
      @click="$store.commit('setSearchQuery', '')"
    >
      <Suggestions
          ref="suggestions"
          v-if="layoutWidth > 719"
          :class="$style.searchSuggestions"
          :mod="1"
      />
  </form>
</template>

<script>
/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS */
import axios from 'axios';
import SearchFrameContent from './SearchFrameContent';
import Suggestions from './Suggestions'

export default {

  components: {
    SearchFrameContent,
    Suggestions,
  },

  props: {
    isFullSize: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    const defaultFocusIndex = -1;
    return {
      focused: false,
      focusIndex: defaultFocusIndex,
      defaultFocusIndex,
      currentMessageBoxKey: 1,
      searchResultData: [],
      isShowSearchResultWindow: false,
      suggestionsRef: null,
    }
  },

  computed: {
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

  methods: {
    submitForm(event) {
      event.preventDefault();
      this.go(this.focusIndex);
      console.log('event:', event);
    },

    go (i) {
      if(this.focusIndex < 0 && this.query) {
        this.openDeepSearchResults();
        return;
      }
      this.$router.push(this.suggestions[i].path)
      this.query = ''
      this.focusIndex = this.defaultFocusIndex;
    },


    async openDeepSearchResults() {
      const searchResult = await axios.get(`${process.env.isDev ? 'http://localhost:3000' : ''}/?search=${this.query}`);

      let searchResultData = searchResult.data;

      // console.log('searchResultData:', searchResultData);
      if(!searchResultData || !Array.isArray(searchResultData)) {
        this.searchResultData = [];
      } else {
        this.searchResultData = searchResultData;
      }

      this.isShowSearchResultWindow = true;
    }
  },

  mounted () {
    this.suggestionsRef = this.$refs.suggestions;
    // if(this.suggestionsRef) {
    //   const suggestionsRefSuggestions = this.suggestionsRef.suggestions;
    //   console.log()
    //   this.suggestionsRef.$watch('suggestions', () => {
    //     console.log('test:')
    //   })
    //   // this.suggestionsListFromComponentExemplar = suggestionsRef.suggestions;
    // }
    // console.log('this.$refs.suggestions:', this.$refs.suggestions)
  }
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
        border-radius 4px
        font-size 24px
        padding 0 10px 0 60px
        outline none
        position relative
        transition all .2s ease
        /*background #fff url(search-24-basic-300.svg) 0.6rem 0.5rem no-repeat*/
        background-color $color2
        background-size 1rem
        &::placeholder {
            font-size: 24px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color $color9
        }
        &.focused {
            border-color $borderColor
            cursor text
            left 0
            width 100%
            &:focus {
                border-color $accentColor
            }
        }
        &:not(.focused) {
            width 0
        }

        @media screen and (max-width: 719px) {
            font-size: 14px;
            padding-left: 38px
            &::placeholder {
                font-size: 14px;
            }
        }
    }

    .searchSuggestions {
        position absolute
        top 100%
        left 0
        width 100%
    }
</style>

