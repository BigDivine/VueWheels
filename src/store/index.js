import Global from '@/global';

import PCStore from './pc';
import PhoneStore from './phone';

let Store = Global.isPC ? PCStore : PhoneStore;

export default Store;
