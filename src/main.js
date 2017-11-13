// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' ;//路由配置模块
import ElementUI  from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import store from "./store";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: '<App/>',
  components: { App }
  // render: h => h(App)      
})
