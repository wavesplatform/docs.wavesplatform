<template>
  <ul
    class="sidebar-links"
    v-if="items.length"
  >
    <li v-for="(item, index) in items" :key="index">

      <SidebarGroup
        v-if="item.type === 'group'"
        :item="item"
        :open="openGroups.includes(index)"
        :collapsable="item.collapsable || item.collapsible"
        :depth="depth"
        :mod="mod"
        @toggle="toggleGroup(index)"
      />
      <SidebarLink
        v-else
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
const resolveOpenGroupIndex = (route, items) => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    if (item.type === 'group' && item.children.some(c => c.type === 'page' && isActive(route, c.path))) {
      return i
    }
  }
  return -1
}
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
      openGroups: [],
    }
  },

  created () {
    this.refreshIndex()
  },

  watch: {
    '$route' () {
      this.refreshIndex();
    }
  },

  methods: {
    refreshIndex () {
      const index = resolveOpenGroupIndex(
        this.$route,
        this.items
      )
      if (index > -1) {
        this.openGroupIndex = index
      }
    },

    toggleGroup (index) {
      const activeGroupIndex = this.openGroups.indexOf(index);
      if(activeGroupIndex > -1) {
        this.openGroups.splice(activeGroupIndex, 1);
      } else {
        this.openGroups.push(index);
      }
      // this.openGroupIndex = index === this.openGroupIndex ? -1 : index
    },

    isActive (page) {
      return isActive(this.$route, page.regularPath)
    }
  }
}
</script>
