<template>
  <div>
    <h4>{{ this.$store.getters.done.length }} tarefa completa</h4>
    <ul>
      <li v-for="(todo, index) in this.todos" :key="index">
        {{ todo.text }}
        <button>Remove</button>
      </li>
    </ul>
    <form @submit.prevent="addTodo">
      <input placeholder="Add a Todo" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Todov2',
  data() {
    return {
      todos: this.$store.state.b.todos
    }
  }
}
</script>
