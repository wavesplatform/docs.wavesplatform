<template>
  <ul
    :class="$style.sidebarLinks"
    v-if="items.length"
  >
    <li
        :class="[$style.sidebarLinks__link, 'sidebarLinks__link']"
        v-for="(item, index) in items" :key="index"
    >
        <!--@toggle="toggleGroup(item.path)"-->
        <SidebarGroup
            v-show="item.type === 'group'"
            :item="item"
            :open="leftSidebarOpenedGroups.includes(item.path)"
            :collapsable="item.collapsable || item.collapsible"
            :depth="depth"
            :mod="mod"
            :class="[
                $style.sidebarLinks__link__group,
                'sidebarLinks__link__group'
            ]"
            @open="openGroup(item.path)"
            @close="closeGroup(item.path)"
        />
        <span
            v-if="depth > 0 && item.type !== 'group'"
            :class="['el-icon-arrow-right', $style.sidebarLinkWrapper__icon]"
        />
        <SidebarLink
            v-show="item.type !== 'group'"
            :sidebarDepth="sidebarDepth"
            :item="item"
            :mod="mod"
        />
    </li>
  </ul>
</template>

<script>
import SidebarGroup from '@theme/components/SidebarGroup.vue'
import SidebarLink from '@theme/components/SidebarLink.vue'
import { isActive } from '../util'

export default {
  name: 'SidebarLinks',

  components: { SidebarGroup, SidebarLink },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
    depth: {
      type: Number,
      default: 0,
    },
    sidebarDepth: {
      type: Number,
      default: 0,
    },
    mod: {
      type: Number,
      default: 0,
    },
  },

  data () {
    return {
      openGroupIndex: 0,
    }
  },

  computed: {
    leftSidebarOpenedGroups() {
      return this.$store.state.leftSidebarOpenedGroups;
    },
  },

  watch: {
    '$route' () {
      // this.refreshIndex();
    }
  },

  created () {
    // this.refreshIndex()
  },

  methods: {
    // resolveOpenGroupIndex(route, items) {
    //   for (let i = 0; i < items.length; i++) {
    //     const item = items[i]
    //     if (item.type === 'group' && item.children.some(c => c.type === 'page' && isActive(this.$route, this.$page.regularPath))) {
    //       return i
    //     }
    //   }
    //   return -1
    // },

    // refreshIndex () {
    //   const index = this.resolveOpenGroupIndex(
    //     this.$route,
    //     this.items
    //   )
    //   if (index > -1) {
    //     this.openGroupIndex = index
    //   }
    // },

    openGroup(itemPath) {
      this.$store.commit('setLeftSidebarOpenedGroups', [...this.leftSidebarOpenedGroups, itemPath])
      console.warn('this.leftSidebarOpenedGroups:', this.leftSidebarOpenedGroups, itemPath)
    },

    closeGroup(itemPath) {
      const activeGroupIndex = this.leftSidebarOpenedGroups.indexOf(itemPath);

      if(activeGroupIndex > -1) {

        console.log('this.leftSidebarOpenedGroups:', this.leftSidebarOpenedGroups, itemPath, activeGroupIndex, [...this.leftSidebarOpenedGroups, ...this.leftSidebarOpenedGroups.slice().splice(activeGroupIndex,1)])

        // this.$store.commit('setLeftSidebarOpenedGroups', [...this.leftSidebarOpenedGroups, ...this.leftSidebarOpenedGroups.slice().splice(activeGroupIndex,1)])


        this.$store.commit('setLeftSidebarOpenedGroups', ...this.leftSidebarOpenedGroups.slice().splice(activeGroupIndex,1))
      }

    },

    // toggleGroup(itemPath) {
    //   const activeGroupIndex = this.leftSidebarOpenedGroups.indexOf(itemPath);
    //   if(activeGroupIndex > -1) {
    //     this.closeGroup(itemPath);
    //   } else {
    //     this.openGroup(itemPath);
    //   }
      // this.openGroupIndex = index === this.openGroupIndex ? -1 : index
    // },

  }
}
</script>

<style lang="stylus" module>
    .sidebarLinks {
        position relative
    }
    .sidebarLinkWrapper {
        display flex
    }
    .sidebarLinkWrapper__icon {
        visibility hidden
        margin-right 5px
    }
    .sidebarLinks__link {
        position relative
        display flex
        padding-top 20px
    }
    .sidebarLinks__link__group {

    }
</style>
