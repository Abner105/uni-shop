import App from './App'
import * as API from "api/api.js"
// #ifndef VUE3
import Vue from 'vue'
// 将请求接口挂载到原型链上
Vue.prototype.$API = API
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif