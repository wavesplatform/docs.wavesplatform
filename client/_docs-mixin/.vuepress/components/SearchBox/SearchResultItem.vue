<template>
  <div :class="$style.root">
      <a
          :href="item.path"
          :class="$style.link"
          @click.prevent="goToPage(item.path)"
      >
          <div :class="$style.title">
              <template
                  v-for="titleMatch of titleMatches"
              >
                  <span :class="[Array.isArray(titleMatch) && $style._highlight]">{{(Array.isArray(titleMatch)? titleMatch[0] : titleMatch) }}</span>
              </template>
          </div>

          <div
            :class="$style.description">
              <div
                  v-for="(contentMatchRow, indexMatchRow) of displayedContentMatches"
                  :key="indexMatchRow"
                  :class="$style.description__cell"
              >

                  {{indexMatchRow === 0 ? '...' : ''}}
                  <span
                      v-for="(contentMatch, indexMatch) of contentMatchRow"
                      :key="`${indexMatchRow}_${indexMatch}`"
                      :class="[
                        $style.description__cell__part,
                        Array.isArray(contentMatch) && $style._highlight,
                      ]"
                  >{{ Array.isArray(contentMatch) ? contentMatch[0] : contentMatch }}</span>
                  {{indexMatchRow === 0 ? '...' : ''}}
              </div>
          </div>
      </a>

      <div
          v-if="isDisplayShowMoreButton && displayedContentMatches && displayedContentMatches.length && contentMatches.length > limitDisplayMatchesNumber"
          :class="$style.showMoreButton"
          @click="showMore"
      >
          {{isShowMore ? 'Hide more' : 'Show more...'}}
      </div>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    },

    filters: {
      trim(value) {
        if(!value) {
          return '';
        }
        return value.trim();
      },
    },

    data() {
      return {
        limitDisplayMatchesNumber: 5,
        displayedContentMatches: [],
        isShowMore: false,
        isDisplayShowMoreButton: false,
      }
    },

    computed: {
      matches() {
        return this.item.matches
      },

      titleMatches () {
        return this.matches.title;
      },

      contentMatches () {
        return this.matches.content;
      },

      limitedDisplayContentMatches() {
        return this.contentMatches.slice(0, this.limitDisplayMatchesNumber);
      }
    },

    methods: {
        showMore() {
          this.isShowMore = !this.isShowMore;
          if(this.isShowMore) {
            this.displayedContentMatches = this.contentMatches;
          } else {
            this.displayedContentMatches = this.limitedDisplayContentMatches;
          }
        },
        goToPage(path) {
          this.$store.commit('setSearchQuery', '')
          this.$router.push(path);
        }
    },

    created() {
      this.displayedContentMatches = this.limitedDisplayContentMatches;
    },

    mounted () {
    },
  }
</script>

<style lang="stylus">
    .el-message-box__wrapper {
        display flex
        justify-content center
        align-items center
    }
</style>

<style lang="stylus" module>
    .root {
        display flex
        flex-direction column
        &:not(:first-child) {
            margin-top 16px
        }
    }
    .link {
        padding 5px
        &:hover {
            background-color var(--color2)
            border-radius 4px
            .title__text {
                text-decoration underline
            }
        }
    }
    .title {
        color $color4
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.75;
        letter-spacing: normal;
    }
    .description {
        color initial
        font-weight 100
        /*white-space pre-line*/
        /*display flex*/
        /*flex-wrap wrap*/
        margin-top 5px
    }
    .description__cell {
        /*display flex*/
        /*align-items baseline*/
        /*flex-wrap wrap*/
        /*border 1px solid #ddd*/
        /*margin 3px*/
        padding 1px
        color var(--color7)
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.71;
        letter-spacing: normal;
        display inline-block
        & > * {
            flex-shrink 0
        }
    }
    .description__cell__part {
        /*display flex*/

    }
    ._highlight {
        background-color rgba(79, 140, 255, 0.35)
    }
    .showMoreButton {
        cursor pointer
        border 1px solid #ccc
        padding 10px
        margin 5px
        text-align center
    }
</style>
