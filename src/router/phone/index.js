import Vue from 'vue';
import Router from 'vue-router';
import mainRouter from './common';

Vue.use(Router);

export default new Router({
	routes: [
		...mainRouter
	]
});
