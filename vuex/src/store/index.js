import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0,
    todos: [
      { text: 'Todo 1', done: true },
      { text: 'Todo 2', done: false }
    ]
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
    },
    addtodo(state, todo) {
      console.log('state', state, 'todo', todo)
      state.todos.push(todo)
    }
  },
  actions: {
    RM_TODO: (context, todo) => {
      context.commit('REMOVE_TODO', todo)
    }
  },
  modules: {},
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    undoneTodos: state => {
      return state.todos.filter(todo => !todo.done)
    }
  }
})

export default store
