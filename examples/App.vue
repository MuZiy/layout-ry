<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      isCollapse: false,
      routes: [
        {
          path: '/index',
          name: 'index',
          meta: {
            icon: 'el-icon-location',
            title: "test",
          }
        },
        {
          path: '/test',
          name: 'test',
          meta: {
            icon: 'el-icon-edit',
            title: "测试",
          },
          children: [
            {
              path: 'one',
              name: 'one',
              meta: {
                title: "菜单1",
              }
            },
            {
              path: 'two',
              one: 'two',
              meta: {
                title: "菜单2",
              }

            }
          ]
        }
      ]
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
