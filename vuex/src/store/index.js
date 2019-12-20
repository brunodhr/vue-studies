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

const todo = {
  state: {
    todos: [
      { text: 'Todo 1', done: true },
      { text: 'Todo 2', done: false },
      { text: 'Todo 3', done: true }
    ]
  },
  mutations: {
    add(state, todo) {
      state.todos.push(todo)
    },
    rm(state, index) {
      state.todos.slice(index)
    }
  },
  actions: {
    add(context, todo) {
      context.commit('add', todo)
    },
    rm(context, index) {
      context.commit('rm', index)
    }
  },
  getters: {
    done: state => {
      return state.todos.filter(todo => todo.done)
    }
  }
}

const store = new Vuex.Store({
  modules: {
    a: counter,
    b: todo
  }
})

export default store
