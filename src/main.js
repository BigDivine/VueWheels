import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { getPlatform } from '@/util/platform';

import { Group, Cell, Loading, ConfirmPlugin, ToastPlugin } from 'vux'

Vue.config.productionTip = false

// 移除移动端页面点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('x-loading', Loading)

Vue.use(ConfirmPlugin);
Vue.use(ToastPlugin);

router.beforeEach((to, from, next) => {
  store.commit('IS_LOADING', true)
  next()
})
router.afterEach((to, from) => {
  store.commit('IS_LOADING', false)
})

// 判断微信、ios、安卓
store.commit('PHONE_OS', getPlatform(navigator.userAgent));

Vue.prototype.$store = store

var vue = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export default vue
