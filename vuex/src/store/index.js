import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const counter = {
  state: {
    counter: 0
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
    decrement(context) {
      context.commit('decrement')
    }
  }
}

const store = new Vuex.Store({
  state: {
    todos: [
      { text: 'Todo 1', done: true },
      { text: 'Todo 2', done: false }
    ]
  },
  modules: {
    a: counter
  },
  mutations: {
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
