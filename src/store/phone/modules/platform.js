import * as types from '../mutation-types';

const state = {
	phoneOS: ''
};

const mutations = {
	[types.PHONE_OS](state, res) {
		state.phoneOS = res;
	}
};

export default { state, mutations };
