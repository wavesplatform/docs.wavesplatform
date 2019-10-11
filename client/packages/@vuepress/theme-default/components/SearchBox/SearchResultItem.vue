<template>
  <div :class="$style.root">
      <a
          :href="item.path"
          :class="$style.link"
      >
          <el-divider
              :class="$style.title"
              content-position="left"
          >
              <span :class="$style.title__text">
                  <div v-html="titleHighlightMarkupString"></div>
              </span>
          </el-divider>
          <div :class="$style.description">
              <div v-html="contentHighlightMarkupString"></div>
          </div>
      </a>
  </div>
</template>

<script>
export default {
    props: {
      item: {
        type: Object,
        required: true,
      }
    },

  computed: {
    title() {
      return this.item.matches.find(item => {
        return item.key === 'title';
      })
    },
    titleHighlightMarkupString() {
      let offset = 0
      let text = this.title.value;
      this.title.indices.forEach(index => {
        text = this.highlightText(text, index[0] + offset, index[1] + offset)
        offset += 31
      });
      return text;
    },
    content() {
      return this.item.matches.find(item => {
        return item.key === '_content';
      })
    },
    contentHighlightMarkupString() {
      let offset = 0
      let text = this.content.value;
      this.content.indices.forEach(index => {
        text = this.highlightText(text, index[0] + offset, index[1] + offset)
        offset += 31
      });
      return text;
    },
  },

  methods: {
    highlightText (sourceString, startIndex, endIndex) {
      /*${this.$style.highlightPart}*/
      return sourceString.substring(0, startIndex)
        + '<span class="highlight">'
        + sourceString.substring(startIndex, endIndex + 1)
        + '</span>'
        + (endIndex ? sourceString.substring(endIndex + 1) : "")
    }
  },

  mounted () {
    console.log('title:', this.title, this.content)
  }
}
</script>

<style lang="stylus">
    .el-message-box__wrapper {
        display flex
        justify-content center
        align-items center
    }
    .highlight {
        background-color rgba(79, 140, 255, 0.3607843137254902)
    }
</style>

<style lang="stylus" module>
    .root {
        display flex
        flex-direction column
        &:not(:first-child) {
            margin-top 15px
        }
    }
    .link {
        &:hover {
            .title__text {
                text-decoration underline
            }
        }
    }
    .title {

    }
    .title__text {

    }
    .description {
        color: initial;
        font-weight: 100;
    }
    .highlightPart {
        background-color rgba(79, 140, 255, 0.3607843137254902)
    }
</style>
