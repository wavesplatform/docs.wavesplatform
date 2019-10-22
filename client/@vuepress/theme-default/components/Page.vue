<template>
  <main class="page">
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
            <el-button size="small" icon="el-icon-edit"/>
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

    <!--<div class="page-nav" v-if="prev || next">
      <p class="inner">
        <span
          v-if="prev"
          class="prev"
        >
          ←
          <router-link
            v-if="prev"
            class="prev"
            :to="prev.path"
          >
            {{ prev.title || prev.path }}
          </router-link>
        </span>

        <span
          v-if="next"
          class="next"
        >
          <router-link
            v-if="next"
            :to="next.path"
          >
            {{ next.title || next.path }}
          </router-link>
          →
        </span>
      </p>
    </div>-->

    <slot name="bottom"/>
  </main>
</template>

<script>
import { isActive, resolvePage, outboundRE, endingSlashRE } from '../util'

export default {
  props: ['sidebarItems'],

  computed: {

    bread() {
      const parts = this.$page.path.split("/");
      if (!parts[parts.length - 1].length) { parts.pop(); }
      let link = "";
      const crumbs = [];
      for (let i = 0; i < parts.length; i++) {
        link += parts[i];
        const page = this.$site.pages.find((el) => el.path === link || el.path === link + "/");
        link += "/";
        if (page != null) {
          crumbs.push({path: page.path, title: page.frontmatter.breadcrumb || page.title});
        }
      }
      return crumbs;
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

  mounted() {
    // this.$toasted.info('123');

    // console.log('bread:', this.bread);

    // isActive()
    // const selfActive = isActive(this.$route, item.path)
    this.sidebarItems.forEach(item => {

      // const selfActive = isActive(this.$route, item.path)
      // console.log('selfActive:', item);
    });

  },

  methods: {
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
  },


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
    }
    .editLink {
        visibility visible
    }
</style>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

.page-edit
  @extend $wrapper
  padding-top 1rem
  padding-bottom 1rem
  overflow auto
  .last-updated
    float right
    font-size 0.9em
    .prefix
      font-weight 500
      color lighten($textColor, 25%)
    .time
      font-weight 400
      color #aaa

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0
  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid $borderColor
    padding-top 1rem
    overflow auto // clear float
  .next
    float right
</style>
