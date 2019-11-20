<template>
  <div
      :class="[
        $style.root,
        mod && $style[`root_mod_${mod}`]
      ]"
      v-show="suggestions && suggestionsLength"
  >
      <!--@mouseleave="unfocus"-->
    <ul
        :class="$style.suggestions"
    >
      <!--@mouseenter="focus(suggestionIndex)"-->
      <li
        :class="[$style.suggestion, {
            [$style.focused]: suggestionIndex === focusIndex,
        }]"
        v-for="(suggestion, suggestionIndex) in suggestions"
        @mousedown="go(suggestionIndex)"
      >
        <a
            :href="suggestion.path"
            :class="$style.suggestion__link"
            @click.prevent="clickOnLink(suggestionIndex)"
        >
          <span :class="$style.pageTitle">
              {{ suggestion.title || suggestion.path }}
          </span>
          <span v-if="suggestion.header" :class="$style.header">
              {{ suggestion.header.title }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {

  props: {
    query: {
      type: String,
      default: '',
    },
    mod: {
      type: [String, Number],
      default: '',
    },
  },

  data () {
    return {
      focused: false,
    }
  },

  computed: {
    defaultFocusIndex() {
      return this.$store.state.search.defaultFocusIndex;
    },

    focusIndex() {
      return this.$store.state.search.focusIndex;
    },

    prepareSearchQuery() {
      return Object.keys(this.$options.propsData).includes('query')? this.query : this.$store.state.search.query;
    },

    suggestions () {
      const query = this.prepareSearchQuery.trim().toLowerCase()
      if (!query) {
        return [];
      }
      const { pages } = this.$site;
      const max = /*SEARCH_MAX_SUGGESTIONS*/8
      const localePath = this.$localePath
      const matches = item => (
        item.title
        && item.title.toLowerCase().indexOf(query) > -1
      )
      const res = []
      for (let i = 0; i < pages.length; i++) {
        if (res.length >= max) break
        const p = pages[i]
        // filter out results that do not match current locale
        if (this.getPageLocalePath(p) !== localePath) {
          continue
        }
        // filter out results that do not match searchable paths
        if (!this.isSearchable(p)) {
          continue
        }
        if (matches(p)) {
          res.push(p)
        } else if (p.headers) {
          for (let j = 0; j < p.headers.length; j++) {
            if (res.length >= max) break
            const h = p.headers[j]
            if (matches(h)) {
              res.push(Object.assign({}, p, {
                path: p.path + '#' + h.slug,
                header: h
              }))
            }
          }
        }
      }
      return res;
    },

    suggestionsLength() {
      return this.suggestions.length;
    },

  },

  watch: {
    // suggestionsLength(newLength) {
    //   console.log('setSearchSuggestionsFocusIndex:', newLength)
    //   if(newLength < this.focusIndex) {
    //     this.$store.commit('setSearchSuggestionsFocusIndex', newLength - 1)
    //   }
    // },
    prepareSearchQuery() {
      this.$store.commit('setSearchSuggestionsFocusIndex', this.defaultFocusIndex);
    },
  },

  methods: {

    clickOnLink(suggestionIndex) {
      this.$store.commit('setSearchSuggestionsFocusIndex', suggestionIndex);
      this.go(suggestionIndex);
      this.$store.commit('setSearchQuery', '');
    },

    getPageLocalePath (page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath
        }
      }
      return '/'
    },

    isSearchable(page) {
      let searchPaths = /*SEARCH_PATHS*/null
      // all paths searchables
      if (searchPaths === null) { return true }

      searchPaths = Array.isArray(searchPaths) ? searchPaths : new Array(searchPaths)

      return searchPaths.filter(path => {
        return page.path.match(path)
      }).length > 0
    },

    suggestionUp () {
      if(this.focusIndex === this.defaultFocusIndex) {
        this.$store.commit('setSearchSuggestionsFocusIndex', this.suggestionsLength - 1)
      } else if (this.focusIndex > 0) {
        this.$store.commit('setSearchSuggestionsFocusIndex', this.focusIndex - 1)
      } else {
        this.$store.commit('setSearchSuggestionsFocusIndex', this.defaultFocusIndex)
      }
    },

    suggestionDown () {
      if (this.focusIndex < this.suggestionsLength - 1) {
        this.$store.commit('setSearchSuggestionsFocusIndex', this.focusIndex + 1)
      } else {
        this.$store.commit('setSearchSuggestionsFocusIndex', this.defaultFocusIndex)
      }
    },

    go(index) {
      if(this.focusIndex === this.defaultFocusIndex) {
        return
      }
      this.$router.push(this.suggestions[index || this.focusIndex].path);
      this.$store.commit('setSearchSuggestionsFocusIndex', this.defaultFocusIndex);
    },

    focus (index) {
      this.$store.commit('setSearchSuggestionsFocusIndex', index);
    },

    unfocus () {
      this.$store.commit('setSearchSuggestionsFocusIndex', this.defaultFocusIndex);
    },
  },
}
</script>

<style lang="stylus" module>
    $shadowWidth = 15px
    .root {
        visibility hidden
        display flex
        justify-content center
        box-sizing content-box
        margin-left - $shadowWidth
    }
    .root_mod_1 {
        overflow hidden
        padding 0 $shadowWidth $shadowWidth $shadowWidth
        .suggestions {
            border-top 1px solid var(--color3)
        }
    }
    .suggestions {
        background var(--color11)
        width 'calc(100% + %s)' % ($shadowWidth * 2)
        position relative
        /*border 1px solid darken(var(--color3), 10%)*/
        /*border-radius 0 0 4px 4px*/
        border-radius 4px
        padding 20px
        list-style-type none
        box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
        visibility visible
        @media screen and (max-width: 719px) {
            width 100%
        }
        &.alignRight {
            left 0
        }
    }

    .suggestion {
        line-height 1.4
        padding 0.4rem 0.6rem
        border-radius 4px
        cursor pointer
        &:hover {
            background-color var(--color1)
        }
        &.focused {
            background-color var(--color2)
            .suggestion__link {
                color $accentColor
            }
        }
        .suggestion__link {
            overflow hidden
            @media screen and (max-width: 719px) {
                display flex
                flex-direction column
            }
            .pageTitle {
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.75;
                letter-spacing: normal;
                color var(--color7)
                margin-right 12px
                @media screen and (max-width: 719px) {
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.14;
                    letter-spacing: normal;
                }
            }
            .header {
                color $color8
                font-size: 16px
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.75;
                letter-spacing: normal
                @media screen and (max-width: 719px) {
                    font-size: 12px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.5;
                    letter-spacing: normal;
                    margin-top 4px
                }
            }
        }
    }
</style>

