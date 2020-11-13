import Vue from 'vue';
import App from '@/App.vue';
import Router from '@/router';
import Store from '@/store/phone';
import { Platform } from '@/utils';
import Global from '@/global';

import { YHeader } from '@/components/phone';

Vue.component('y-header', YHeader);

Vue.config.productionTip = false;

// 判断微信、ios、安卓
const phoneOS = Platform.getPlatform(navigator.userAgent);
Store.commit('PHONE_OS', phoneOS);

Vue.prototype.$Store = Store;
Vue.prototype.$Global = Global;
Vue.prototype.PhoneOS=phoneOS;

let router = Router;
var vue = new Vue({
	el: '#app',
	router,
	render: (h) => h(App)
});

export default vue;
