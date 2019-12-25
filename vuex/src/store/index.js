import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import counter from './counter'
import todo from './todo'

const store = new Vuex.Store({
  modules: {
    counter,
    todo
  }
})

export default store
