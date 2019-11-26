<template>
    <WidthLimit
        ref="root"
        :class="$style.root"
        :padding-l-r="layoutWidth > 719 ? 3 : 1"
    >
      <main
          :class="$style.page"
      >
        <slot name="top"/>
        <div :class="$style.page__header">
          <div
              :class="$style.editLinkWrapper"
            v-if="editLink"
          >
            <a
                :class="$style.editLink"
              :href="editLink"
              target="_blank"
              rel="noopener noreferrer"
            >
                <el-button
                    size="small"
                    :class="$style.editButton"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <g fill="none" fill-rule="evenodd">
                            <!--<path fill="#f00" d="M27.733 0A4.267 4.267 0 0 1 32 4.267v23.466A4.267 4.267 0 0 1 27.733 32H4.267A4.267 4.267 0 0 1 0 27.733V4.267A4.267 4.267 0 0 1 4.267 0h23.466zm0 1.067H4.267a3.2 3.2 0 0 0-3.2 3.2v23.466a3.2 3.2 0 0 0 3.2 3.2h23.466a3.2 3.2 0 0 0 3.2-3.2V4.267a3.2 3.2 0 0 0-3.2-3.2z"/>-->
                            <path fill="#9BA6B2" fill-rule="nonzero" d="M17.82 11.026l3.037 3.052-7.69 7.727-3.035-3.052 7.687-7.727zm5.342-.737l-1.355-1.361a1.34 1.34 0 0 0-1.899 0l-1.297 1.304 3.037 3.053 1.514-1.521a1.044 1.044 0 0 0 0-1.475zM8.542 23.043c-.055.25.17.474.418.414l3.385-.825-3.036-3.053-.767 3.464z"/>
                        </g>
                    </svg>
                </el-button>
            </a>
          </div>
        </div>
        <Content
            ref="content"
            :class="$style.pageContent"/>
      </main>
    </WidthLimit>
</template>

<script>
  import mediumZoom from 'medium-zoom'
  import WidthLimit from '@theme/components/WidthLimit'
  import { outboundRE, endingSlashRE } from '../util'
  export default {

    components: {
      WidthLimit,
    },

    props: [
      'sidebarItems'
    ],

    data() {
      return {
        pageNavigationsTranslateY: 0,
        headersElements: [],
        // intersectionObserverOptions: {
        //     threshold: 0.0,
        //     rootMargin: '0% 0px',
        // },
      }
    },

    computed: {
      activeColorationConfigColors() {
        return this.$store.getters.activeColorationConfigColors;
      },
      isScrollTopState() {
        return this.$store.state.interface.isScrollTopState;
      },
      documentElementScrollTop() {
        return this.$store.state.interface.documentElementScrollTop;
      },
      mainContentHeight() {
        return this.$store.state.interface.mainContentHeight;
      },
      layoutHeight() {
        return this.$store.state.interface.layoutHeight;
      },
      layoutWidth() {
        return this.$store.state.interface.layoutWidth;
      },
      headerHeight () {
        return this.$store.state.interface.headerHeight;
      },
      lastUpdated () {
        return this.$page.lastUpdated
      },
      lastUpdatedText () {
        if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
          return this.$themeLocaleConfig.lastUpdated
        }
        if (typeof this.$site.themeConfig.lastUpdated === 'string') {
          return this.$site.themeConfig.lastUpdated
        }
        return 'Last Updated'
      },

      editLink () {
        if (this.$page.frontmatter.editLink === false) {
          return
        }
        const {
          repo,
          editLinks,
          docsDir = '',
          docsBranch = 'master',
          docsRepo = repo
        } = this.$site.themeConfig

        if (docsRepo && editLinks && this.$page.relativePath) {
          return this.createEditLink(repo, docsRepo, docsDir, docsBranch, this.$page.relativePath)
        }
      },

      editLinkText () {
        return (
          this.$themeLocaleConfig.editLinkText
          || this.$site.themeConfig.editLinkText
          || 'Edit'
        )
      }
    },

    watch: {
      documentElementScrollTop() {
        this.setCurrentActiveHeaderId();
      },
      mainContentHeight() {
        this.setCurrentActiveHeaderId();
      },
    },

    mounted () {
      //   this.interactionObserver = new IntersectionObserver(this.intersectionObserverCallback, this.intersectionObserverOptions);
      if(!this.$isServer) {
        this.updateHeadersElements();
        this.initMediumZoom();
      }
    },

    updated () {
      if (!this.$isServer) {
        this.updateHeadersElements();
        this.initMediumZoom();
      }
    },

    methods: {
      initMediumZoom() {
        mediumZoom(this.$refs.content.$el.querySelectorAll('img'), {
          margin: 20,
          background: this.activeColorationConfigColors.color7_alpha1,
          scrollOffset: 0,
          container: '.medium-zoom-container',
          // template: '.medium-zoom-template',
        });
      },
      setCurrentActiveHeaderId() {
        if(this.isScrollTopState) {
          return;
        }
        const currentActiveHeaderId = this.getCurrentActiveHeaderId();
        if(!currentActiveHeaderId) {
          return;
        }
        if(decodeURIComponent(this.$route.hash).slice(1) !== currentActiveHeaderId) {
          this.$store.commit('setUserNaturalScrollState', true);
          this.$router.push({hash: currentActiveHeaderId})
          setTimeout(() => this.$store.commit('setUserNaturalScrollState', false), 0)
        }
      },

      getCurrentActiveHeaderId() {
        const idsValues = this.headersElements.reduce((accumulator, headerElement) => {
          let value = headerElement.offsetTop - this.documentElementScrollTop + this.headerHeight - headerElement.offsetHeight;

          // if(value < 0) {
          //   value = value * -1;
          // }
          // accumulator[headerElement.id] = value;

          if(value < 0) {
            accumulator[headerElement.id] = value;
          }
          return accumulator;
        }, {});

        const values = Object.values(idsValues);
        const keys = Object.keys(idsValues);
        const minValue = Math.max(...values);
        const minValueIndex = values.indexOf(minValue);
        return keys[minValueIndex];
      },

      updateHeadersElements () {
        let headers = this.$page.headers
        // this.headersElements.forEach(headersElement => {
        //   this.interactionObserver.unobserve(headersElement);
        // });
        if (!headers || !headers.length) {
          return
        }
        headers = headers.filter(header => {
          return header.level < 3;
        });
        this.headersElements = headers.map(header => {
          const headerElement = document.querySelector(`#${header.slug}`);
          // this.interactionObserver.observe(headerElement);
          return headerElement;
        });
      },

      createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
        const bitbucket = /bitbucket.org/
        if (bitbucket.test(repo)) {
          const base = outboundRE.test(docsRepo)
            ? docsRepo
            : repo
          return (
            base.replace(endingSlashRE, '')
            + `/src`
            + `/${docsBranch}/`
            + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
            + path
            + `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
          )
        }

        const base = outboundRE.test(docsRepo)
          ? docsRepo
          : `https://github.com/${docsRepo}`
        return (
          base.replace(endingSlashRE, '')
          + `/edit`
          + `/${docsBranch}/`
          + (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '')
          + path
        )
      }
    }
  }
</script>



<style lang="stylus" module>
    .root {
        padding-top $indent1
        /*padding-bottom $indent4*/
        padding-bottom $indent1
    }
    .page {
        display block
        position relative

    }

    .page__header {
        width 100%
        display flex
        justify-content flex-end

        a {
            color lighten($textColor, 25%)
        }
    }

    .editLinkWrapper {
        display flex
        width 100%
        visibility hidden
        justify-content flex-end
        position absolute
        top 0
        left 0
        margin-top: 4px;
    }

    .editLink {
        visibility visible
    }

    .editButton {
        padding 0
        background-color var(--color11)
        & > * {
            display flex
        }
    }

    .pageContent {
        :global {
            img {
                max-width 100%
            }
            //pre.vue-container
            //    border-left-width: .5rem;
            //    border-left-style: solid;
            //    border-color: #42b983;
            //    border-radius: 0px;
            //    & > code
            //        font-size: 14px !important;
            //        & > p
            //            margin: -5px 0 -20px 0;
            //        code
            //            background-color: #42b983 !important;
            //            padding: 3px 5px;
            //            border-radius: 3px;
            //            color #000
            //        em
            //            color #808080
            //            font-weight light

            a {
                &[href*='http'] {
                    &:after {
                        //background-image url("data:image/svg+xml;utf8,<svg x="0" y="0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 100 100" width="15" height="15"><path fill="currentColor" d="M18.8 85.1h56c2.2 0 4-1.8 4-4v-32h-8v28h-48v-48h28v-8h-32c-2.2 0-4 1.8-4 4v56c0 2.2 1.8 4 4 4z"/><path fill="currentColor" d="M45.7 48.7l5.6 5.6 25.9-25.8v8.7h8V14.9H62.8v8h8.7z"/></svg>")
                    }
                }
            }

            p a code {
                font-weight 400
                color $color6
            }

            kbd {
                background #eee
                border solid 0.15rem #ddd
                border-bottom solid 0.25rem #ddd
                border-radius 0.15rem
                padding 0 0.15em
            }

            blockquote {
                font-size .9rem
                color #999
                border-left .5rem solid #dfe2e5
                margin 0.5rem 0
                padding .25rem 0 .25rem 1rem
                & > p {
                    margin 0
                }
            }

            ul, ol {
                margin-top $indent1
            }

            li {
                /*display flex*/
                align-items baseline
                padding-left 20px
                position relative
                &:hover {
                    &:before {
                        background-color $color6
                    }
                }
                &:not(:first-child) {
                    margin-top 8px
                }
                &:before {
                    position absolute
                    top 10px
                    left 0
                    display flex
                    content ''
                    width 6px
                    height 6px
                    background-color var(--color10)
                    border-radius 50%
                    flex-shrink 0
                }
            }

            strong {
                font-weight 600
            }


            h1, h2, h3, h4, h5, h6 {
                font-weight 600
                line-height 1.25
                &:hover .header-anchor {
                    opacity: 1
                }
            }


            .header-anchor {
                display none
            }
            h1 {
                font-size: 34px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.18;
                letter-spacing: normal;
                padding-bottom $indent1
                &:not(:first-child) {
                    margin-top $indent1
                }
            }


            h2 {
                //font-size 1.2rem
                //padding-bottom .3rem
                //border-bottom 1px solid var(--borderColor)
                font-size: 34px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.18;
                letter-spacing: normal;
                padding $indent1 0
                &:first-child {
                    padding-top 0
                }
            }

            /*.h1:first-of-type {
                padding-right $indent2
            }*/


            h3 {
                font-size: 24px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.67;
                letter-spacing: normal;
                margin-top $indent4
            }

            h4 {
                font-size: 20px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.67;
                letter-spacing: normal;
                margin-top $indent4
            }


            a.header-anchor {
                font-size 0.85em
                float left
                margin-left -0.87em
                padding-right 0.23em
                margin-top 0.125em
                opacity 0
                &:hover {
                    text-decoration none
                }

            }

            code, kbd, .line-number {
                /*font-family source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace*/
                font-family : 'Roboto', sans-serif;
            }

            p, ul, ol {
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.75;
                color $color8
            }

            hr {
                border 0
                border-top 1px solid var(--borderColor)
            }

            table {
                border-collapse collapse
                margin 1rem 0
                display: block
                overflow-x: auto
            }

            tr {
                border-top 1px solid #dfe2e5
                &:nth-child(2n) {
                    background-color #f6f8fa
                }

            }

            th, td {
                border 1px solid #dfe2e5
                padding .6em 1em
            }

        }
    }
</style>

