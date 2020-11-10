import * as mutations from '../mutations'

const Platform = {
  state: () => ({
    phoneOS: ''
  }),
  mutations: {
    [mutations.PHONE_OS] (state, res) {
      state.phoneOS = res
    }
  }
}

export { Platform }
