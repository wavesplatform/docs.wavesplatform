<template>
  <div class="search-box">
    <input
      @input="query = $event.target.value"
      aria-label="Search"
      :value="query"
      :class="{ focused: isFullSize || focused }"
      autocomplete="off"
      spellcheck="false"
      @focus="focused = true"
      @blur="focused = false"
      @keyup.enter="go(focusIndex)"
      @keyup.up.prevent.stop="onUp"
      @keyup.down.prevent.stop="onDown"
      :placeholder="$themeLocaleConfig.searchPlaceholderText"
    >
    <ul
      class="suggestions"
      v-if="showSuggestions"
      :class="{ 'align-right': alignRight }"
      @mouseleave="unfocus"
    >
<!--        <li :class="['suggestion']">-->
<!--            -->
<!--        </li>-->
      <li
        class="suggestion"
        v-for="(suggestion, suggestionIndex) in suggestions"
        :class="{ focused: suggestionIndex === focusIndex }"
        @mousedown="go(suggestionIndex)"
        @mouseenter="focus(suggestionIndex)"
      >
        <a :href="suggestion.path" @click.prevent>
          <span class="page-title">{{ suggestion.title || suggestion.path }}</span>
          <span v-if="suggestion.header" class="header">&gt; {{ suggestion.header.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
/* global SEARCH_MAX_SUGGESTIONS, SEARCH_PATHS */
import axios from 'axios';
import SearchFrameContent from './SearchFrameContent';

export default {

  components: {
    SearchFrameContent
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
      query: '',
      focused: false,
      focusIndex: defaultFocusIndex,
      defaultFocusIndex,
      currentMessageBoxKey: 1,
    }
  },

  computed: {
    showSuggestions () {
      return (
        this.focused
        && this.suggestions
        && this.suggestions.length
      )
    },

    suggestions () {
      const query = this.query.trim().toLowerCase()


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

    // make suggestions align right when there are not enough items
    alignRight () {
      const navCount = (this.$site.themeConfig.nav || []).length
      const repo = this.$site.repo ? 1 : 0
      return navCount + repo <= 2
    }
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

    isSearchable (page) {
      let searchPaths = SEARCH_PATHS
      // all paths searchables
      if (searchPaths === null) { return true }

      searchPaths = Array.isArray(searchPaths) ? searchPaths : new Array(searchPaths)

      return searchPaths.filter(path => {
        return page.path.match(path)
      }).length > 0
    },

    onUp (event) {
      if (this.showSuggestions) {
        if (this.focusIndex > 0) {
          this.focusIndex--
        } else {
          this.focusIndex = this.suggestions.length - 1
        }
      }
    },

    onDown (event) {
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
      this.query = ''
      this.focusIndex = this.defaultFocusIndex;
    },

    focus (i) {
      this.focusIndex = i
    },

    unfocus () {
      this.focusIndex = -1
    },

    async openDeepSearchResults() {

      const searchResult = await axios.get(`${process.env.isDev ? 'http://localhost:3000' : ''}/?search=${this.query}`);


      let searchResultData = searchResult.data;

      console.log('searchResultData:', searchResultData);
      if(!searchResultData || !Array.isArray(searchResultData)) {
        searchResultData = [];
      }
      // console.log('searchResultData:', searchResultData);

      const newSearchResultListComponentExemplar = new this.constructor.super({
        ...this.$options.components.SearchFrameContent,
        propsData: {
          searchResult: searchResultData,
        },
      });

      const newSearchResultListComponentExemplarMountedPromise = new Promise(resolve => newSearchResultListComponentExemplar.$once('hook:mounted', resolve))

      newSearchResultListComponentExemplar.$mount();

      await newSearchResultListComponentExemplarMountedPromise;
      await this.$nextTick();

      console.log('newSearchResultListComponentExemplar:', newSearchResultListComponentExemplar);

      this.$msgbox({
        customClass: this.$style.messageBoxWithSearchResult,
        title: '',
        message: this.$createElement(this.$options.components.SearchFrameContent, {
          key: this.currentMessageBoxKey++,
          props: {
            searchResult: searchResultData,
          },
        })/*newSearchResultListComponentExemplar._vnode*/,
        showCancelButton: false,
        showConfirmButton: false,
        // confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        beforeClose: (action, instance, done) => {
          newSearchResultListComponentExemplar.$destroy();
          // if (action === 'confirm') {
          //   instance.confirmButtonLoading = true;
          //   instance.confirmButtonText = 'Loading...';
          //   setTimeout(() => {
          //     done();
          //     setTimeout(() => {
          //       instance.confirmButtonLoading = false;
          //     }, 300);
          //   }, 3000);
          // } else {
          //   done();
          // }
          done();
        }
      }).then(action => {
        console.log('then')
        // this.$message({
        //   type: 'info',
        //   message: 'action: ' + action
        // });
      });

    }
  },
}
</script>

<style lang="stylus" module>
    .messageBoxWithSearchResult {
        max-height calc(100% - 40px);
        max-width 600px
        width calc(100% - 40px);
        display flex;
        flex-direction column;
        overflow hidden;
        :global(.el-message-box__header, .el-message-box__content) {
            flex-shrink 0
        }
        :global(.el-message-box__content) {
            height 100%
            overflow-x hidden
            overflow-y auto
        }
    }
</style>

<style lang="stylus">
.search-box
  display inline-flex
  position relative
  input
    /*height 64px*/
    cursor pointer

    color lighten($textColor, 25%)
    display inline-block
    border /*1px solid transparent*/none
    border-radius 4px
    font-size 0.9rem
    line-height 2rem
    padding 0 0.5rem 0 2rem
    outline none
    position relative
    transition all .2s ease
    background #fff url(search-24-basic-300.svg) 0.6rem 0.5rem no-repeat
    background-color $color2
    background-size 1rem
    &.focused {
        border-color $borderColor
        cursor text
        left 0
        /*max-width 12rem*/
        width 100%
        &:focus {
            border-color $accentColor
        }
    }
    &:not(.focused) {
        width 0
    }
  .suggestions
    background #fff
    width 100%
    position absolute
    top 1.5rem
    border 1px solid darken($borderColor, 10%)
    border-radius 6px
    padding 0.4rem
    list-style-type none
    &.align-right
      left 0
  .suggestion
    line-height 1.4
    padding 0.4rem 0.6rem
    border-radius 4px
    cursor pointer
    a
      white-space normal
      color lighten($textColor, 35%)
      .page-title
        font-weight 600
      .header
        font-size 0.9em
        margin-left 0.25em
    &.focused
      background-color #f3f4f5
      a
        color $accentColor

@media (max-width: $MQNarrow)
  .search-box
    input
      cursor pointer
      border-color transparent
      position relative

// Match IE11
@media all and (-ms-high-contrast: none)
  .search-box input
    height 2rem

@media (max-width: $MQNarrow) and (min-width: $MQMobile)
  .search-box
    .suggestions
      left 0

@media (max-width: $MQMobile)
  .search-box
    margin-right 0
    .suggestions
      right 0

@media (max-width: $MQMobileNarrow)
  .search-box
    .suggestions
      width calc(100vw - 4rem)
</style>
