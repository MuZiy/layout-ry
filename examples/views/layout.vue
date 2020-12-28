<!--  -->
<template>
  <LayoutRy :routes="routes" :isCollapse.sync="isCollapse" :avatar="avatar" @logout="logout" />
</template>

<script>

export default {
  components: {},
  data () {
    return {
      avatar: "https://tse1-mm.cn.bing.net/th/id/OIP.oeLZkSlaFXXi4uM2UsbMowAAAA?pid=Api&rs=1",
      isCollapse: false,
      routes: [
        {
          path: '/index',
          name: '首页',
          meta: {
            icon: 'el-icon-s-home',
            title: "首页",
          }
        },
        {
          path: '/test',
          name:'测试',
          meta: {
            icon: 'el-icon-edit',
            title: "测试",
          },
          children: [
            {
              path: 'one',
              name: '菜单1',
              meta: {
                title: "菜单1",
              }
            },
            {
              path: 'two',
              name: '菜单2',
              meta: {
                title: "菜单2",
              }

            }
          ]
        }
      ]
    };
  },
  methods: {
    logout () {
      // 退出登录的逻辑
      console.log('退出登录123')
    }
  }
}
</script>