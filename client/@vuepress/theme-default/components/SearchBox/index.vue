<template>
  <div :class="$style.searchBox">
      <img
          :class="$style.searchBox__icon"
          src="./search-24-basic-300.svg"
          alt="">
    <input
      @input="query = $event.target.value"
      aria-label="Search"
      :value="query"
      :class="[$style.input, {
            [$style.focused]: isFullSize || focused,
      }]"
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
      :class="[$style.suggestions, {
        [$style.alignRight]: alignRight
      }]"
      v-if="showSuggestions"
      @mouseleave="unfocus"
    >
<!--        <li :class="['suggestion']">-->
<!--            -->
<!--        </li>-->
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

      // console.log('searchResultData:', searchResultData);
      if(!searchResultData || !Array.isArray(searchResultData)) {
        searchResultData = [];
      }
      // console.log('searchResultData:', searchResultData);

      // const newSearchResultListComponentExemplar = new this.constructor.super({
      //   ...this.$options.components.SearchFrameContent,
      //   propsData: {
      //     searchResult: searchResultData,
      //   },
      // });
      //
      // const newSearchResultListComponentExemplarMountedPromise = new Promise(resolve => newSearchResultListComponentExemplar.$once('hook:mounted', resolve))
      //
      // newSearchResultListComponentExemplar.$mount();

      // await newSearchResultListComponentExemplarMountedPromise;
      // await this.$nextTick();

      // console.log('newSearchResultListComponentExemplar:', newSearchResultListComponentExemplar);

      // console.log('this.$options.components.SearchFrameContent:', this.$options.components.SearchFrameContent)
      this.$msgbox({
        customClass: this.$style.messageBoxWithSearchResult,
        // title: '',
        message: this.$createElement(this.$options.components.SearchFrameContent, {
          key: this.currentMessageBoxKey++,
          props: {
            searchResult: searchResultData,
            query: this.query,
          },
        })/*newSearchResultListComponentExemplar._vnode*/,
        showCancelButton: false,
        showConfirmButton: false,
        showClose: false,
        // confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        beforeClose: (action, instance, done) => {
          // newSearchResultListComponentExemplar.$destroy();
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
    .searchBox {
        display inline-flex
        position relative
        width 100%
        height 100%
        align-items center
    }
    .searchBox__icon {
        position absolute
        height 80%
        z-index 1
        max-width 24px
        min-height 16px
        margin-left 20px
        @media screen and (max-width: 719px) {
            max-width 16px
            margin-left 16px
        }
    }
    .input {
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

    .suggestions {
        background #fff
        width 100%
        position absolute
        top 100%
        /*border 1px solid darken($borderColor, 10%)*/
        border-radius 0 0 4px 4px
        padding 0.4rem
        list-style-type none
        box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
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
        :global(.el-message-box__header) {
            padding 0
            /*display none*/
        }
        :global(.el-message-box__content) {
            height 100%
            overflow hidden
            /*overflow-x hidden*/
            /*overflow-y auto*/
            padding 0
        }
        :global(.el-message-box__message) {
            height 100%
            overflow: hidden;
        }
        @media screen and (max-width: 719px) {
            width 100%
            max-width inherit
            height 100%
            max-height initial
        }
    }
</style>

