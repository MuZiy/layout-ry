<!-- 侧边栏 -->
<template>
  <div :class="{'has-logo':showLogo}" class="sidebar-wrapper">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu" :collapse="isCollapse" :background-color="variables.menuBg" :text-color="variables.menuText" :unique-opened="true" :active-text-color="settings.theme" :collapse-transition="false" mode="vertical">
        <sidebar-item v-for="(route, index) in permissionRoutes" :key="route.path  + index" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem";
export default {
  name: 'Sidebar',
  components: { SidebarItem },
  props: {
    permissionRoutes: {
      Array,
      default: () => []
    },
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    };
  },
  computed: {
    activeMenu () {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    settings () {
      return {
        theme: '#1890ff'
      }
    },
    variables () {
      return {
        menuBg: '#304156',
        menuText: '#bfcbd9'
      };
    },
    showLogo () {
      return true
    }
  }
}
</script>
<style lang="scss">
.sidebar-wrapper {
  .el-scrollbar {
    height: calc(100% - 50px);
  }
  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }
  .el-scrollbar__wrap {
    overflow: scroll;
    height: 100%;
  }
  .el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    text-align: left;
    .svg-icon {
      margin-right: 16px;
    }
    a {
      display: inline-block;
      width: 100%;
      overflow: hidden;
      text-decoration: none !important;
    }
    .el-menu-item,
    .el-submenu__title {
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
    }
    .el-menu-item {
      box-sizing: border-box;
      height: 56px;
      line-height: 56px;
      font-size: 14px;
      color: #303133;
      padding: 0 20px;
      list-style: none;
      cursor: pointer;
      position: relative;
      transition: border-color 0.3s, background-color 0.3s, color 0.3s;
      i {
        width: 16px;
      }
      &* {
        vertical-align: middle;
      }
    }
  }
}
</style>