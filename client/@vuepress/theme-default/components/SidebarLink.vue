<script>
  import { isActive, hashRE, groupHeaders } from '../util'
  export default {
    /*functional: true,*/

    props: {
      item: {
        type: Object,
        default: () => ({})
      },
      sidebarDepth: {
        type: Number,
        default: 0
      },
      mod: {
        type: Number,
        default: 0
      },
    },

    methods: {
      renderLink(h, to, text, active) {
        return h('router-link', {
          props: {
            to,
            activeClass: '',
            exactActiveClass: ''
          },
          class: [
            this.$style.sidebarLink,
            this.$style[`sidebarLink_mod${this.mod}`],
            {
                [this.$style.sidebarLink_active]: active,
            }
          ],
        }, [
          text
        ])
      },

      renderChildren(h, { children, path, route, $store, maxDepth, depth = 1, mod }) {

        if (!children) {
          return null
        }

        if(!children || depth > maxDepth) {

          return null;
        }

        if(!children && !children.length) {
          // $store.commit('setNavbarSubHeaders', []);
          return null;
        }


        // $store.commit('setNavbarSubHeaders', children);



        const listWithHeadersAnchors = h('ul', {
          class: this.$style.sidebarSubHeaders
        }, children.map(child => {
          const active = isActive(route, path + '#' + child.slug)
          const elements = [
            this.renderLink(h, path + '#' + child.slug, child.title, active),
            this.renderChildren(h, {
              children: child.children,
              path,
              route,
              $store,
              maxDepth,
              depth: depth + 1,
              mod
            })
          ];
          return h('li',
            {
              class: this.$style.sidebarSubHeader,
            },
            elements
          )
        }));


        return mod === 1 ? null : listWithHeadersAnchors;
      }
    },

    render (h) {
      const {
          $page,
          $site,
          $route,
          $store,
          $themeConfig,
          $themeLocaleConfig,
          item,
          sidebarDepth,
          mod
        } = this;

      const selfActive = isActive($route, item.path)

      const active = item.type === 'auto'
        ? selfActive || item.children.some(c => isActive($route, item.basePath + '#' + c.slug))
        : selfActive
      const link = this.renderLink(h, item.path, item.title || item.path, active)

      const configDepth = $page.frontmatter.sidebarDepth
        || sidebarDepth
        || $themeLocaleConfig.sidebarDepth
        || $themeConfig.sidebarDepth

      const maxDepth = configDepth == null ? 1 : configDepth

      const displayAllHeaders = $themeLocaleConfig.displayAllHeaders
        || $themeConfig.displayAllHeaders

      if (item.type === 'auto') {
        return [link, this.renderChildren(h, {
          children: item.children,
          path: item.basePath,
          route: $route,
          $store,
          maxDepth,
          mod
        })]


      } else if ((active || displayAllHeaders) && item.headers && !hashRE.test(item.path)) {

        const children = groupHeaders(item.headers);

        const renderedChildren = this.renderChildren(h, {
          children,
          path: item.path,
          route: $route,
          $store,
          maxDepth,
          mod
        });

        let result = [];

        if(mod === 1) {
          result = [link];
        }

        result.push(renderedChildren);

        return h('div', {
          class: this.$style.sidebarLinkWrapper,
        }, result);


      } else {

        return (mod === 1 || mod === 0) && link;
      }
    }
  }
</script>

<style lang="stylus" module>
    .sidebarSubHeaders {

    }
    .sidebarSubHeader {
        display flex
        padding-top 10px
    }
    .sidebarLinkWrapper {
        display flex
    }
    .sidebarLink {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color $color10
        /*white-space nowrap*/

        display inline-flex
        align-items baseline
        width: 100%

        &:hover {
            color $color6
        }
        &.sidebarLink_active {
            color $color6
        }
    }


    .sidebarLink_mod0 {
        white-space nowrap
        &.sidebarLink_active {
            font-weight 500
        }
    }
    .sidebarLink_mod1 {
        white-space nowrap
        &.sidebarLink_active {
            font-weight 500
        }
    }
    .sidebarLink_mod2 {
        white-space pre-wrap
        color $color8
        &.sidebarLink_active {
        }
    }

    .sidebarSubHeaders {

    }

    .sidebarGroup {
        padding-left 2rem
    }
</style>
