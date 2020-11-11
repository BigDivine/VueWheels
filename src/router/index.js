import Global from '@/global';

import phoneRouter from './phone';
import pcRouter from './pc';

const Router = Global.isPC ? pcRouter : phoneRouter;

export default Router;
