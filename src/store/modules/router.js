import * as mutations from '../mutations'

const Router = {
  state: () => ({
    isLoading: false
  }),
  mutations: {
    [mutations.IS_LOADING] (state, res) {
      state.isLoading = res
    }
  }
}
export { Router }
