import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/phone';
import { getPlatform } from './utils/platform.js';

Vue.config.productionTip = false;

// 判断微信、ios、安卓
store.commit('PHONE_OS', getPlatform(navigator.userAgent));

Vue.prototype.$store = store;

var vue = new Vue({
	el: '#app',
	router,
	render: h => h(App)
});

export default vue;
