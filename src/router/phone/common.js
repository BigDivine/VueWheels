const main = () => import('@/views/home');

const mainRoute = {
	name: 'main',
	path: '/',
	component: main
};

const mainRouter = [mainRoute];

export default mainRouter;
