<template>
  <ul
    :class="$style.sidebarLinks"
    v-if="items.length"
  >
    <li
        :class="[$style.sidebarLinks__link, 'sidebarLinks__link']"
        v-for="(item, index) in items"
        :key="`${item.key}_${index}`"
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

  computed: {
    leftSidebarOpenedGroups() {
      return this.$store.state.leftSidebarOpenedGroups;
    },
  },

  watch: {
    '$route' () {
      // this.refreshIndex();
    },
  },

  created () {
    // this.refreshIndex()
  },

  methods: {
    openGroup(itemPath) {
        if(this.leftSidebarOpenedGroups.includes(itemPath)) {
            return;
        }
      this.$store.commit('setLeftSidebarOpenedGroups', [...this.leftSidebarOpenedGroups, itemPath]);
    },

    closeGroup(itemPath) {
      const activeGroupIndex = this.leftSidebarOpenedGroups.indexOf(itemPath);
      if(activeGroupIndex < 0) {
          return
      }
        const leftSidebarOpenedGroupsClone = this.leftSidebarOpenedGroups.slice();
        leftSidebarOpenedGroupsClone.splice(activeGroupIndex, 1);
        this.$store.commit('setLeftSidebarOpenedGroups', leftSidebarOpenedGroupsClone)
    },
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
