import Vue from 'vue';
import Vuex from 'vuex';
import Platform from './modules/platform';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		platform: Platform
	},
	// open strict model to catch exact error msg
	// strict: process.env.NODE_ENV !== 'production'
});

export default store;
