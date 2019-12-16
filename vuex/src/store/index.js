import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0,
    todos: ['teste1', 'teste2']
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    ADD_COUNTER: state => {
      state.counter++
    },
    REMOVE_COUNTER: state => {
      state.counter--
    },
    ADD_TODO: (state, payload) => {
      console.log('chegou aqui')
      state.todos.push(payload)
    }
  },
  actions: {
    RM_TODO: (context, todo) => {
      context.commit('REMOVE_TODO', todo)
    }
  },
  modules: {}
})

export default store