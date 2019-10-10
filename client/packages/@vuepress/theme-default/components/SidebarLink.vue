<script>
  import { isActive, hashRE, groupHeaders } from '../util'
  const renderLink = (h, to, text, active) => {
    return h('router-link', {
      props: {
        to,
        activeClass: '',
        exactActiveClass: ''
      },
      class: {
        active,
        'sidebar-link': true
      }
    }, [
      h('span', {
        class: 'dot'
      }),
      text
    ])
  }

  const renderChildren = (h, { children, path, route, $store, maxDepth, depth = 1, mod }) => {


    // if(mod === 2) {
    //   console.log('mod:', mod, children, depth, maxDepth);
    //
    //   console.log('depth > maxDepth', depth > maxDepth)
    //   return null;
    //   // return
    // }

    if (!children) {
      return null
    }

    if(!children || depth > maxDepth) {

      return null;
    }

    if(!children && !children.length) {
      $store.commit('setNavbarSubHeaders', []);
      return null;
    }


    $store.commit('setNavbarSubHeaders', children);



    return h('ul', { class: 'sidebar-sub-headers' }, children.map(child => {



      const active = isActive(route, path + '#' + child.slug)

      console.log('child:', child, child.children);

      const elements = [
        renderLink(h, path + '#' + child.slug, child.title, active),


        renderChildren(h, {
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
        { class: 'sidebar-sub-header' },
        mod === 1 ? [] : elements
      )
    }))
  }

  export default {

    functional: true,

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
      }
    },

    render (h,
            {
              parent: {
                $page,
                $site,
                $route,
                $store,
                $themeConfig,
                $themeLocaleConfig
              },
              props: {
                item,
                sidebarDepth,
                mod
              }
            }) {
      console.log('RENDER')
      // use custom active class matching logic
      // due to edge case of paths ending with / + hash
      const selfActive = isActive($route, item.path)
      // for sidebar: auto pages, a hash link should be active if one of its child
      // matches
      const active = item.type === 'auto'
        ? selfActive || item.children.some(c => isActive($route, item.basePath + '#' + c.slug))
        : selfActive
      const link = renderLink(h, item.path, item.title || item.path, active)

      const configDepth = $page.frontmatter.sidebarDepth
        || sidebarDepth
        || $themeLocaleConfig.sidebarDepth
        || $themeConfig.sidebarDepth

      const maxDepth = configDepth == null ? 1 : configDepth

      const displayAllHeaders = $themeLocaleConfig.displayAllHeaders
        || $themeConfig.displayAllHeaders




      if (item.type === 'auto') {
        console.log('1')
        return [link, renderChildren(h, {
          children: item.children,
          path: item.basePath,
          route: $route,
          $store,
          maxDepth,
          mod
        })]


      } else if ((active || displayAllHeaders) && item.headers && !hashRE.test(item.path)) {


        const children = groupHeaders(item.headers);

        console.log('children:', item, children, item.headers);

        const renderedChildren = renderChildren(h, {
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



        console.log('result:', result)



        return result;


      } else {

        console.log('(mod === 1 || mod === 0) && link:', (mod === 1 || mod === 0) && link)


        return (mod === 1 || mod === 0) && link;
      }


    }
  }
</script>

<style lang="stylus">
  .sidebar .sidebar-sub-headers
    padding-left 1rem
    font-size 0.95em

  a.sidebar-link
    overflow hidden
    text-overflow ellipsis
    font-size 1em
    font-weight 400
    display inline-flex
    align-items baseline
    color $textColor
    border-left 0.25rem solid transparent
    padding 0.35rem 1rem 0.35rem 1.25rem
    line-height 1.4
    width: 100%
    box-sizing: border-box

    &:hover
      color $accentColor

    &.active
      font-weight 600
      color $accentColor
      border-left-color $accentColor

    .sidebar-group &
      padding-left 2rem

    .sidebar-sub-headers &
      padding-top 0.25rem
      padding-bottom 0.25rem
      border-left none

      &.active
        font-weight 500

  .dot {
    top: -2px;
    position: relative;
    height 100%;
    display inline-flex
    justify-content center
    align-items center
    vertical-align middle
    margin 0px 9px 0px -5px
    opacity .7
    flex-shrink 0
    /*border 1px solid currentColor*/
    border-radius 50%
    &:before {
      content ''
      width 4px
      height 4px
      border-radius 50%
      background currentColor
      opacity 1
    }
  }
</style>
