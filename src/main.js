import Vue from 'vue';
import App from '@/App.vue';
import Router from '@/router';
import Store from '@/store/phone';
import { Platform } from '@/utils';
import Global from '@/global';

Vue.config.productionTip = false;

// 判断微信、ios、安卓
Store.commit('PHONE_OS', Platform.getPlatform(navigator.userAgent));

Vue.prototype.$Store = Store;
Vue.prototype.$Global = Global;

let router = Router;
var vue = new Vue({
	el: '#app',
	router,
	render:(h) => h(App)
});

export default vue;
