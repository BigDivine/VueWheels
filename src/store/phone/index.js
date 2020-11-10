import Vue from 'vue'
import Vuex from 'vuex'
import Modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: Modules
})

export default store
