<template>
  <div
      :class="[
        $style.root,
        mod && $style[`root_mod_${mod}`]
      ]"
      v-show="suggestions && suggestions.length"
  >
    <ul
        :class="$style.suggestions"
        @mouseleave="unfocus"
    >
      <li
        :class="[$style.suggestion, {
            [$style.focused]: suggestionIndex === focusIndex,
        }]"
        v-for="(suggestion, suggestionIndex) in suggestions"
        @mousedown="go(suggestionIndex)"
        @mouseenter="focus(suggestionIndex)"
      >
        <a
            :href="suggestion.path"
            :class="$style.suggestion__link"
            @click.prevent
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
    const defaultFocusIndex = -1;
    return {
      focused: false,
      focusIndex: defaultFocusIndex,
      defaultFocusIndex,
    }
  },

  computed: {
    prepareSearchQuery() {
      return Object.keys(this.$options.propsData).includes('query')? this.query : this.$store.state.search.query;
    },

    suggestions () {
      const query = this.prepareSearchQuery.trim().toLowerCase()
      if (!query) {
        return
      }
      const { pages } = this.$site;
      const max = SEARCH_MAX_SUGGESTIONS
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
      return res
    },
  },

  methods: {
    getPageLocalePath (page) {
      for (const localePath in this.$site.locales || {}) {
        if (localePath !== '/' && page.path.indexOf(localePath) === 0) {
          return localePath
        }
      }
      return '/'
    },

    isSearchable(page) {
      let searchPaths = SEARCH_PATHS
      // all paths searchables
      if (searchPaths === null) { return true }

      searchPaths = Array.isArray(searchPaths) ? searchPaths : new Array(searchPaths)

      return searchPaths.filter(path => {
        return page.path.match(path)
      }).length > 0
    },

    onUp () {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--
        } else {
          this.focusIndex = this.suggestions.length - 1
        }
      }
    },

    onDown () {
      if (this.showSuggestions) {
        if (this.focusIndex < this.suggestions.length - 1) {
          this.focusIndex++
        } else {
          this.focusIndex = 0
        }
      }
    },

    go (i) {
      if(this.focusIndex < 0 && this.query) {
        this.openDeepSearchResults();
        return;
      }
      this.$router.push(this.suggestions[i].path)


      // this.query = ''


      this.focusIndex = this.defaultFocusIndex;
    },

    focus (i) {
      this.focusIndex = i
    },

    unfocus () {
      this.focusIndex = -1
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
            border-top 1px solid $color3
        }
    }
    .suggestions {
        background #fff
        width 'calc(100% + %s)' % ($shadowWidth * 2)
        position relative
        /*border 1px solid darken($borderColor, 10%)*/
        border-radius 0 0 4px 4px
        padding 0.4rem
        list-style-type none
        box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
        visibility visible
        position relative
        &.alignRight {
            left 0
        }
    }

    .suggestion {
        line-height 1.4
        padding 0.4rem 0.6rem
        border-radius 4px
        cursor pointer
        &.focused {
            background-color #f3f4f5
            .suggestion__link {
                color $accentColor
            }
        }
        .suggestion__link {
            white-space normal
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.2;
            letter-spacing: normal;
            color $color7
            .pageTitle {
                font-weight 600
            }
            .header {
                font-size 0.9em
                margin-left 0.25em
                color $color8
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.75;
                letter-spacing: normal;
            }
        }
    }
</style>

