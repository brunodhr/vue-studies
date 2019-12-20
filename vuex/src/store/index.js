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
    todo: [
      { text: 'Todo 1', done: true },
      { text: 'Todo 2', done: false }
    ]
  },
  mutations: {
    add(state, todo) {
      state.todos.push(todo)
    }
  },
  actions: {
    add(context, todo) {
      context.commit('add', todo)
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
