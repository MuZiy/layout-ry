import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icons' // icon
import LayoutRy from '../packages/index'
Vue.config.productionTip = false
Vue.use(LayoutRy)
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
