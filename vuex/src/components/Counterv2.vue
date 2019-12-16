<template>
  <div>
    <h1>{{ counter }}</h1>
    <button v-on:click="increment">Adicionar</button>
    <button v-on:click="decrement">Remover</button>
  </div>
</template>

<script>
export default {
  name: 'Counterv2',
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  },
  computed: {
    counter() {
      return this.$store.state.counter
    }
  }
}
</script>
