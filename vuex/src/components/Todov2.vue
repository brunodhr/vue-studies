<template>
  <div>
    <h4>{{ this.$store.getters.doneTodos.length }} tarefa completa</h4>
    <h4>{{ this.$store.getters.undoneTodos.length }} tarefa incompleta</h4>
    <ul>
      <li v-for="(todo, index) in this.$store.state.todos" :key="index">
        {{ todo.text }}
        <button>Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    // future filters
    doneTodosCount() {
      return this.$store.getters.doneTodos.length
    },
    undoneTodosCount() {
      return this.$store.getters.undoneTodos.length
    }
  }
}
</script>
