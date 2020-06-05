import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { Group, Cell, Loading } from 'vux'

Vue.config.productionTip = false

// 移除移动端页面点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('x-loading', Loading)

router.beforeEach((to, from, next) => {
  store.commit('IS_LOADING', true)
  next()
})
router.afterEach((to, from) => {
  store.commit('IS_LOADING', false)
})

Vue.prototype.$store = store

var vue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export default vue
