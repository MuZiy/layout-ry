## layout-ry

### 开发
```bash
# insatall
npm install layout-ry

# 在程序入口添加（main.js）
import LayoutRy from 'layout-ry'
import 'layout-ry/lib/layout-ry.css'
Vue.use(LayoutRy)
```

### 属性
avatar 头像
isCollapse 菜单是否折叠
routes 菜单数据

### 方法
logout 退出登录逻辑

### 示例
```
<template>
  <LayoutRy :routes="routes" :isCollapse.sync="isCollapse" :avatar="avatar" @logout="logout" />
</template>

<script>

export default {
  components: {},
  data () {
    return {
      avatar:"https://tse1-mm.cn.bing.net/th/id/OIP.oeLZkSlaFXXi4uM2UsbMowAAAA?pid=Api&rs=1",
      isCollapse: false,
      routes: [
        {
          path: '/index',
          meta: {
            icon: 'el-icon-location',
            title: "test",
          }
        },
        {
          path: '/test',
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
  methods: {
    logout(){
      console.log('退出登录')
    }
  }
}
</script>
```

## git地址
https://github.com/MuZiy/layout-ry