<!--  -->
<template>
  <div class='app-wrapper layout-wrapper' :class="classObj">
    <Sidebar class="sidebar-container" :permissionRoutes="routes" :isCollapse.sync="sidebarCollapse" />
    <div class="main-container">
      <navbar :isCollapse.sync="sidebarCollapse" :avatar="avatar" @logout="logout" />
      <slot name="tagsView"></slot>
      <AppMain />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/index'
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'
export default {
  name: 'LayoutRy',
  components: {
    Sidebar,
    Navbar,
    AppMain
  },
  props: {
    // 菜单数据
    routes: {
      type: Array,
      default: () => []
    },
    // 头像
    avatar: {
      type: String
    },
    // 菜单是否折叠
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sidebarCollapse: {
      get () {
        return this.isCollapse
      },
      set (value) {
        this.$emit('update:isCollapse', value)
      }
    },
    classObj () {
      return {
        hideSidebar: this.isCollapse,
        openSidebar: !this.isCollapse
      }
    }
  },
  methods: {
    logout () {
      this.$emit('logout')
    }
  }
}
</script>
<style lang='scss'>
.layout-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .sidebar-container {
    transition: width 0.28s;
    width: 200px !important;
    background-color: #304156;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    a {
      text-decoration: none;
    }
  }
  .main-container {
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: 200px;
    position: relative;
  }
  &.hideSidebar {
    .sidebar-container {
      width: 54px !important;
    }
    .main-container {
      margin-left: 54px;
    }
    .el-menu--collapse {
      .el-submenu [class^="el-icon-"] {
        width: 8px;
        margin: 0;
      }
      .el-submenu > .el-submenu__title > span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
      }
    }
  }
}
</style>