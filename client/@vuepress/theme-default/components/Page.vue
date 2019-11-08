<template>
  <main :class="$style.page">
    <slot name="top"/>
    <!--<el-breadcrumb separator="/">-->
      <!--<el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>-->
      <!--<el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>-->
      <!--<el-breadcrumb-item>promotion list</el-breadcrumb-item>-->
      <!--<el-breadcrumb-item>promotion detail</el-breadcrumb-item>-->
    <!--</el-breadcrumb>-->
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

    <Content/>

    <!--<footer class="page-edit">-->
      <!--<div-->
        <!--class="last-updated"-->
        <!--v-if="lastUpdated"-->
      <!--&gt;-->
        <!--<span class="prefix">{{ lastUpdatedText }}: </span>-->
        <!--<span class="time">{{ lastUpdated }}</span>-->
      <!--</div>-->
    <!--</footer>-->
    <slot name="bottom"/>
      <div
          v-if="prev || next"
          :class="$style.pageNavigations"
          :style="{
            /*transform: `translateY(-${documentElementScrollTop - 71}px)`,*/
          }"
      >
          <div v-if="prev">
              ←
              <router-link
                  :class="$style.pageNavigations__prev"
                  :to="prev.path"
              >
                  {{ prev.title || prev.path }}
              </router-link>
          </div>

          <div
              :class="$style.pageNavigations__next"
              v-if="next"
          >
              <router-link
                  :to="next.path"
              >
                  {{ next.title || next.path }}
              </router-link>
              →
          </div>
      </div>
  </main>
</template>

<script>
  import WidthLimit from '@theme/components/WidthLimit'
  import { isActive, resolvePage, outboundRE, endingSlashRE } from '../util'

  export default {
    props: ['sidebarItems'],

    data() {
      return {
        documentElementScrollTop: 0,
        pageAnchorTargetElements: [],
      }
    },

    computed: {
      headerHeight () {
        return this.$store.state.interface.headerHeight;
      },

      bread () {
        const parts = this.$page.path.split('/')
        if (!parts[parts.length - 1].length) {
          parts.pop()
        }
        let link = ''
        const crumbs = []
        for (let i = 0; i < parts.length; i++) {
          link += parts[i]
          const page = this.$site.pages.find((el) => el.path === link || el.path === link + '/')
          link += '/'
          if (page != null) {
            crumbs.push({ path: page.path, title: page.frontmatter.breadcrumb || page.title })
          }
        }
        return crumbs
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

      prev () {
        const prev = this.$page.frontmatter.prev
        if (prev === false) {
          return
        } else if (prev) {
          return resolvePage(this.$site.pages, prev, this.$route.path)
        } else {
          return resolvePrev(this.$page, this.sidebarItems)
        }
      },

      next () {
        const next = this.$page.frontmatter.next
        if (next === false) {
          return
        } else if (next) {
          return resolvePage(this.$site.pages, next, this.$route.path)
        } else {
          return resolveNext(this.$page, this.sidebarItems)
        }
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
          || `Edit`
        )
      }
    },

    mounted () {
      if(!this.$isServer) {
        this.updateListPageAnchorTargetElements();
        window.addEventListener('scroll', event => {
          this.findAnchorsAndTargetsMatches();
        })
      }
    },

    updated() {
      if(!this.$isServer) {
        this.updateListPageAnchorTargetElements();
      }
      console.log('updated', this.pageAnchorTargetElements);
    },

    methods: {

      findAnchorsAndTargetsMatches() {
        const documentElement = document.documentElement;
        this.pageAnchorTargetElements.forEach(targetElement => {
          const documentRect = documentElement.getBoundingClientRect();
          const elementRect = targetElement.getBoundingClientRect();

          // console.log('elementRect.top - documentRect.top - this.headerHeight:', elementRect.top - documentRect.top - this.headerHeight, documentElement.scrollTop);
        });
      },

      updateListPageAnchorTargetElements() {
        const documentElement = document.documentElement
        const headers = this.$page.headers;
        if(!headers || !headers.length) {
          this.pageAnchorTargetElements = [];
          return;
        }
        this.pageAnchorTargetElements = headers.map(header => {
          const targetElement = document.querySelector('#' + header.slug);
          /*const documentRect = documentElement.getBoundingClientRect()
          const elementRect = targetElement.getBoundingClientRect()
          return {
            y: elementRect.top - documentRect.top - this.headerHeight,
          }*/
          return targetElement;
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

  function resolvePrev (page, items) {
    return find(page, items, -1)
  }

  function resolveNext (page, items) {
    return find(page, items, 1)
  }

  function find (page, items, offset) {
    const res = []
    flatten(items, res)
    for (let i = 0; i < res.length; i++) {
      const cur = res[i]
      if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
        return res[i + offset]
      }
    }
  }

  function flatten (items, res) {
    for (let i = 0, l = items.length; i < l; i++) {
      if (items[i].type === 'group') {
        flatten(items[i].children || [], res)
      } else {
        res.push(items[i])
      }
    }
  }

</script>



<style lang="stylus" module>
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
    }

    .editLink {
        visibility visible
    }

    .pageNavigations {
        display flex
        justify-content space-between
        /*background-color #0f0*/
        /*bottom 0*/
        top 0
        /*position absolute*/
        width 100%
        padding $indent4 0
        /*opacity .4*/
        /*position: sticky;*/
    }
    .pageNavigations__prev {

    }
    .pageNavigations__next {

    }
    .editButton {
        padding 0
        & > * {
            display flex
        }
    }
</style>

