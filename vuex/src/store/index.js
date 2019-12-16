import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    ADD_COUNTER: state => {
      state.counter += 1
    },
    REMOVE_COUNTER: state => {
      state.counter -= 1
    }
  },
  actions: {},
  modules: {}
})
