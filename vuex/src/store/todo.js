export default {
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
